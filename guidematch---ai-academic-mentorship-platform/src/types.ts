export type UserRole = 'student' | 'faculty';

export type AcademicDomain = 
  | 'Deep Learning & AI'
  | 'Computer Vision'
  | 'Natural Language Processing'
  | 'Smart Cities & IoT'
  | 'Distributed Systems & Cloud'
  | 'Robotics & Autonomous Systems'
  | 'Cybersecurity & Privacy'
  | 'Bioinformatics & Health Tech'
  | 'Data Science & Analytics';

export interface Publication {
  id: string;
  title: string;
  conference: string;
  year: number;
  citations: number;
  abstract: string;
  link?: string;
  tags: string[];
}

export interface StudentReview {
  id: string;
  studentName: string;
  studentMajor: string;
  year: string;
  projectTitle: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FacultyGuide {
  id: string;
  name: string;
  title: string;
  department: string;
  campus: string;
  avatar: string;
  email: string;
  bio: string;
  researchPhilosophy: string;
  matchScore: number; // 0-100%
  capacity: {
    current: number;
    max: number;
  };
  availabilityStatus: 'High' | 'Medium' | 'Full';
  experienceYears: number;
  rating: number;
  reviewCount: number;
  publicationsCount: number;
  citationsCount: number;
  successRate: number; // percentage e.g. 96
  meetingCadence: string;
  primaryDomain: string;
  researchInterests: string[];
  technologies: string[];
  whyMatchReason: string;
  pastSupervisedProjects: string[];
  publications: Publication[];
  reviews: StudentReview[];
}

export interface ProjectProposal {
  id: string;
  title: string;
  domain: AcademicDomain;
  timeline: '1 Semester' | '2 Semesters' | 'Full Year' | 'Summer Intensive';
  academicLevel: 'Undergraduate Capstone' | 'Master Thesis' | 'Ph.D. Dissertation' | 'Honors Research';
  problemStatement: string;
  methodology: string;
  technologies: string[];
  preferredGuideLevel: 'Academic Researcher' | 'Industry Professional' | 'Either';
  mentorshipStyle: 'Hands-on Weekly' | 'Bi-weekly Strategic' | 'Milestone-based Independent';
  completionPercentage: number;
  status: 'Draft' | 'Analyzed' | 'Submitted' | 'In Progress' | 'Completed';
  submittedDate?: string;
  assignedGuideId?: string;
  assignedGuideName?: string;
  nextMilestone?: {
    name: string;
    dueDate: string;
  };
}

export interface AIProjectAnalysisResult {
  projectId: string;
  projectTitle: string;
  complexityLevel: number; // 1 to 5
  complexityLabel: string; // e.g. "Level 4: Advanced Graduate/Capstone"
  theoreticalDepth: number; // percentage
  practicalImplementation: number; // percentage
  detectedDomains: string[];
  requiredTechnologies: string[];
  recommendedTechnologies: string[];
  summary: string;
  methodologyStrengths: string[];
  recommendedImprovements: string[];
  idealGuideCriteria: string[];
  estimatedCompletionWeeks: number;
  topRecommendedGuideIds: string[];
}

export interface MentorshipRequest {
  id: string;
  projectId: string;
  projectTitle: string;
  projectDomain: string;
  studentId: string;
  studentName: string;
  studentMajor: string;
  studentGpa: string;
  studentYear: string;
  studentAvatar: string;
  guideId: string;
  guideName: string;
  guideTitle: string;
  guideAvatar: string;
  guideDepartment: string;
  matchScore: number;
  message: string;
  submittedDate: string;
  status: 'Pending' | 'Accepted' | 'Declined' | 'Completed';
  feedbackNotes?: string;
  scheduledInterview?: string;
}

export interface ActiveMentee {
  id: string;
  name: string;
  avatar: string;
  projectTitle: string;
  degree: string;
  progress: number;
  lastCheckIn: string;
  nextDeadline: string;
  status: 'On Track' | 'Needs Review' | 'Milestone Due';
}

export interface MilestoneItem {
  id: string;
  title: string;
  dueDate: string;
  type: 'Proposal' | 'Literature Review' | 'Code Demo' | 'Final Paper' | 'Defense';
  studentName: string;
  completed: boolean;
}
