import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { StudentDashboard } from './components/StudentDashboard';
import { SubmitProjectProposal } from './components/SubmitProjectProposal';
import { AIProjectAnalysis } from './components/AIProjectAnalysis';
import { RecommendedGuides } from './components/RecommendedGuides';
import { CompareGuides } from './components/CompareGuides';
import { FacultyProfileView } from './components/FacultyProfileView';
import { FacultyDashboard } from './components/FacultyDashboard';
import { MentorshipRequests } from './components/MentorshipRequests';
import { StudentProfile } from './components/StudentProfile';
import { SendRequestModal } from './components/SendRequestModal';
import { ToastContainer } from './components/ToastContainer';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { activeView } = useApp();

  const renderActiveView = () => {
    switch (activeView) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <StudentDashboard />;
      case 'submit-project':
        return <SubmitProjectProposal />;
      case 'project-analysis':
        return <AIProjectAnalysis />;
      case 'recommended-guides':
        return <RecommendedGuides />;
      case 'compare-guides':
        return <CompareGuides />;
      case 'faculty-profile':
        return <FacultyProfileView />;
      case 'faculty-dashboard':
        return <FacultyDashboard />;
      case 'requests':
        return <MentorshipRequests />;
      case 'student-profile':
        return <StudentProfile />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        {renderActiveView()}
      </main>
      <Footer />
      <SendRequestModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
