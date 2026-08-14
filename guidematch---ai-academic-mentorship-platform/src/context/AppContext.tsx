import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  FacultyGuide, 
  ProjectProposal, 
  AIProjectAnalysisResult, 
  MentorshipRequest, 
  ActiveMentee, 
  MilestoneItem, 
  UserRole 
} from '../types';
import { 
  INITIAL_GUIDES, 
  CURRENT_STUDENT_PROJECT, 
  SAMPLE_AI_ANALYSIS, 
  INITIAL_REQUESTS, 
  FACULTY_ACTIVE_MENTEES, 
  UPCOMING_MILESTONES, 
  STUDENT_PROFILE 
} from '../data/mockData';

export type ActiveView = 
  | 'landing'
  | 'dashboard'
  | 'submit-project'
  | 'project-analysis'
  | 'recommended-guides'
  | 'compare-guides'
  | 'faculty-profile'
  | 'faculty-dashboard'
  | 'requests'
  | 'student-profile';

interface ToastNotification {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}

interface AppContextType {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  guides: FacultyGuide[];
  selectedGuide: FacultyGuide | null;
  setSelectedGuide: (guide: FacultyGuide | null) => void;
  comparedGuideIds: string[];
  toggleCompareGuide: (guideId: string) => void;
  clearComparison: () => void;
  currentProject: ProjectProposal;
  updateCurrentProject: (project: Partial<ProjectProposal>) => void;
  aiAnalysis: AIProjectAnalysisResult | null;
  runAiProjectAnalysis: (proposal: ProjectProposal) => Promise<void>;
  isAnalyzing: boolean;
  requests: MentorshipRequest[];
  sendMentorshipRequest: (guideId: string, message: string) => void;
  updateRequestStatus: (requestId: string, status: 'Accepted' | 'Declined', feedback?: string) => void;
  facultyMentees: ActiveMentee[];
  milestones: MilestoneItem[];
  toggleMilestone: (id: string) => void;
  studentProfile: typeof STUDENT_PROFILE;
  updateStudentProfile: (profile: Partial<typeof STUDENT_PROFILE>) => void;
  toasts: ToastNotification[];
  addToast: (type: 'success' | 'info' | 'warning', title: string, message: string) => void;
  removeToast: (id: string) => void;
  isRequestModalOpen: boolean;
  setIsRequestModalOpen: (open: boolean) => void;
  requestTargetGuide: FacultyGuide | null;
  openRequestModalForGuide: (guide: FacultyGuide) => void;
  facultyCapacity: { current: number; max: number };
  updateFacultyCapacity: (max: number) => void;
  facultyTags: string[];
  addFacultyTag: (tag: string) => void;
  removeFacultyTag: (tag: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<ActiveView>('landing');
  const [userRole, setUserRole] = useState<UserRole>('student');
  const [guides, setGuides] = useState<FacultyGuide[]>(INITIAL_GUIDES);
  const [selectedGuide, setSelectedGuide] = useState<FacultyGuide | null>(INITIAL_GUIDES[0]);
  const [comparedGuideIds, setComparedGuideIds] = useState<string[]>(['guide-1', 'guide-6', 'guide-5']);
  const [currentProject, setCurrentProject] = useState<ProjectProposal>(CURRENT_STUDENT_PROJECT);
  const [aiAnalysis, setAiAnalysis] = useState<AIProjectAnalysisResult | null>(SAMPLE_AI_ANALYSIS['proj-1']);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [requests, setRequests] = useState<MentorshipRequest[]>(INITIAL_REQUESTS);
  const [facultyMentees, setFacultyMentees] = useState<ActiveMentee[]>(FACULTY_ACTIVE_MENTEES);
  const [milestones, setMilestones] = useState<MilestoneItem[]>(UPCOMING_MILESTONES);
  const [studentProfile, setStudentProfile] = useState(STUDENT_PROFILE);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestTargetGuide, setRequestTargetGuide] = useState<FacultyGuide | null>(null);
  const [facultyCapacity, setFacultyCapacity] = useState({ current: 3, max: 5 });
  const [facultyTags, setFacultyTags] = useState<string[]>([
    'Graph Neural Networks',
    'Spatio-Temporal Modeling',
    'Intelligent Transportation',
    'Edge AI & ROS2'
  ]);

  const addToast = (type: 'success' | 'info' | 'warning', title: string, message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleCompareGuide = (guideId: string) => {
    setComparedGuideIds((prev) => {
      if (prev.includes(guideId)) {
        return prev.filter((id) => id !== guideId);
      }
      if (prev.length >= 3) {
        addToast('info', 'Maximum Compared', 'You can compare up to 3 faculty guides at once.');
        return [prev[1], prev[2], guideId];
      }
      return [...prev, guideId];
    });
  };

  const clearComparison = () => {
    setComparedGuideIds([]);
  };

  const updateCurrentProject = (updated: Partial<ProjectProposal>) => {
    setCurrentProject((prev) => ({ ...prev, ...updated }));
  };

  const runAiProjectAnalysis = async (proposal: ProjectProposal) => {
    setIsAnalyzing(true);
    // Simulate smart AI tokenization & analysis
    await new Promise((resolve) => setTimeout(resolve, 1400));

    // Dynamic analysis calculation based on title, domain & technologies
    const detected: string[] = [proposal.domain];
    if (proposal.technologies.includes('Python')) detected.push('Algorithmic AI');
    if (proposal.technologies.some(t => ['PyTorch', 'TensorFlow', 'CUDA'].includes(t))) detected.push('Deep Neural Networks');
    if (proposal.technologies.some(t => ['ROS2', 'OpenCV', 'C++'].includes(t))) detected.push('Autonomous Robotics');
    if (proposal.technologies.some(t => ['GIS Data', 'GeoPandas', 'IoT'].includes(t))) detected.push('Spatio-Temporal GIS');
    if (proposal.technologies.some(t => ['Redis Streams', 'Kafka', 'Docker'].includes(t))) detected.push('Distributed Telemetry');

    const calculatedComplexity = Math.min(5, Math.max(3, Math.ceil(proposal.technologies.length / 2) + (proposal.timeline.includes('2') ? 1 : 0)));

    const newAnalysis: AIProjectAnalysisResult = {
      projectId: proposal.id || 'proj-' + Date.now(),
      projectTitle: proposal.title,
      complexityLevel: calculatedComplexity,
      complexityLabel: calculatedComplexity >= 4 ? `Level ${calculatedComplexity}: Advanced Capstone / Graduate Tier` : `Level ${calculatedComplexity}: Intermediate Capstone Tier`,
      theoreticalDepth: 85 + Math.floor(Math.random() * 10),
      practicalImplementation: 90 + Math.floor(Math.random() * 8),
      detectedDomains: Array.from(new Set(detected)),
      requiredTechnologies: proposal.technologies.slice(0, 4),
      recommendedTechnologies: ['GeoPandas', 'CUDA Acceleration', 'Docker Containerization', 'MLflow Tracking'],
      summary: `AI evaluation completed for "${proposal.title}". Project demonstrates high conceptual merit with multi-layered software and mathematical requirements. Guide pairing prioritized by research alignment in ${proposal.domain}.`,
      methodologyStrengths: [
        'Rigorous problem formulation addressing dynamic real-world variability',
        'Strong technical stack leveraging state-of-the-art computational frameworks',
        'Clear milestone structure suitable for academic review and publication'
      ],
      recommendedImprovements: [
        'Establish rigorous baseline metrics against standardized benchmark datasets',
        'Formulate validation ablation studies for each individual architectural module',
        'Prepare reproducible Docker environments and unit test coverage'
      ],
      idealGuideCriteria: [
        `Ph.D. in Computer Science or Data Science with focus on ${proposal.domain}`,
        'Published research in top-tier peer-reviewed conferences (IEEE / ACM / NeurIPS)',
        'Active research laboratory with available compute resources and open mentoring slots',
        'Experience guiding students toward capstone excellence or publication'
      ],
      estimatedCompletionWeeks: proposal.timeline.includes('1') ? 16 : 24,
      topRecommendedGuideIds: ['guide-1', 'guide-2', 'guide-3', 'guide-5']
    };

    setAiAnalysis(newAnalysis);
    setIsAnalyzing(false);
    setActiveView('project-analysis');
    addToast('success', 'AI Analysis Complete', 'Project complexity gauge, required tech stack, and ideal guide criteria generated!');
  };

  const openRequestModalForGuide = (guide: FacultyGuide) => {
    setRequestTargetGuide(guide);
    setIsRequestModalOpen(true);
  };

  const sendMentorshipRequest = (guideId: string, message: string) => {
    const targetGuide = guides.find((g) => g.id === guideId) || requestTargetGuide;
    if (!targetGuide) return;

    const newReq: MentorshipRequest = {
      id: 'req-' + Date.now(),
      projectId: currentProject.id,
      projectTitle: currentProject.title,
      projectDomain: currentProject.domain,
      studentId: studentProfile.id,
      studentName: studentProfile.name,
      studentMajor: studentProfile.degree,
      studentGpa: studentProfile.gpa.split(' ')[0],
      studentYear: studentProfile.academicLevel,
      studentAvatar: studentProfile.avatar,
      guideId: targetGuide.id,
      guideName: targetGuide.name,
      guideTitle: targetGuide.title,
      guideAvatar: targetGuide.avatar,
      guideDepartment: targetGuide.department,
      matchScore: targetGuide.matchScore,
      message: message,
      submittedDate: 'Just now',
      status: 'Pending'
    };

    setRequests((prev) => [newReq, ...prev]);
    setIsRequestModalOpen(false);
    addToast('success', 'Request Sent!', `Mentorship proposal successfully submitted to ${targetGuide.name}.`);
  };

  const updateRequestStatus = (requestId: string, status: 'Accepted' | 'Declined', feedback?: string) => {
    setRequests((prev) =>
      prev.map((req) => {
        if (req.id === requestId) {
          return {
            ...req,
            status,
            feedbackNotes: feedback || (status === 'Accepted' ? 'Proposal accepted. Looking forward to our initial mentorship kickoff session!' : 'Unfortunately, lab capacity is currently fully committed for this quarter.')
          };
        }
        return req;
      })
    );

    const target = requests.find((r) => r.id === requestId);
    if (status === 'Accepted' && target) {
      // Add to active mentees if faculty
      setFacultyMentees((prev) => [
        {
          id: 'mentee-' + Date.now(),
          name: target.studentName,
          avatar: target.studentAvatar,
          projectTitle: target.projectTitle,
          degree: target.studentMajor,
          progress: 10,
          lastCheckIn: 'Today',
          nextDeadline: 'Next Week (Initial Project Charter)',
          status: 'On Track'
        },
        ...prev
      ]);
      setFacultyCapacity((prev) => ({ ...prev, current: Math.min(prev.max, prev.current + 1) }));
    }

    addToast(
      status === 'Accepted' ? 'success' : 'info',
      status === 'Accepted' ? 'Mentorship Request Accepted' : 'Request Declined',
      `Updated status for ${target?.studentName || 'student'}.`
    );
  };

  const toggleMilestone = (id: string) => {
    setMilestones((prev) =>
      prev.map((m) => (m.id === id ? { ...m, completed: !m.completed } : m))
    );
  };

  const updateStudentProfile = (updated: Partial<typeof STUDENT_PROFILE>) => {
    setStudentProfile((prev) => ({ ...prev, ...updated }));
  };

  const updateFacultyCapacity = (max: number) => {
    setFacultyCapacity((prev) => ({ ...prev, max }));
    addToast('info', 'Capacity Updated', `Maximum mentee limit set to ${max} students.`);
  };

  const addFacultyTag = (tag: string) => {
    if (!facultyTags.includes(tag)) {
      setFacultyTags((prev) => [...prev, tag]);
    }
  };

  const removeFacultyTag = (tag: string) => {
    setFacultyTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <AppContext.Provider
      value={{
        activeView,
        setActiveView,
        userRole,
        setUserRole,
        guides,
        selectedGuide,
        setSelectedGuide,
        comparedGuideIds,
        toggleCompareGuide,
        clearComparison,
        currentProject,
        updateCurrentProject,
        aiAnalysis,
        runAiProjectAnalysis,
        isAnalyzing,
        requests,
        sendMentorshipRequest,
        updateRequestStatus,
        facultyMentees,
        milestones,
        toggleMilestone,
        studentProfile,
        updateStudentProfile,
        toasts,
        addToast,
        removeToast,
        isRequestModalOpen,
        setIsRequestModalOpen,
        requestTargetGuide,
        openRequestModalForGuide,
        facultyCapacity,
        updateFacultyCapacity,
        facultyTags,
        addFacultyTag,
        removeFacultyTag
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
