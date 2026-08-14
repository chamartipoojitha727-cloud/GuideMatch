import React from 'react';
import { useApp, ActiveView } from '../context/AppContext';
import { 
  Compass, 
  LayoutDashboard, 
  FileText, 
  Sparkles, 
  Users, 
  Columns3, 
  Inbox, 
  User, 
  GraduationCap, 
  ArrowRightLeft, 
  Layers
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    activeView, 
    setActiveView, 
    userRole, 
    setUserRole, 
    requests, 
    comparedGuideIds, 
    studentProfile 
  } = useApp();

  const pendingRequestsCount = requests.filter(r => r.status === 'Pending').length;

  const handleRoleToggle = () => {
    if (userRole === 'student') {
      setUserRole('faculty');
      setActiveView('faculty-dashboard');
    } else {
      setUserRole('student');
      setActiveView('dashboard');
    }
  };

  const navItems: { id: ActiveView; label: string; icon: React.ComponentType<{ className?: string }>; badge?: number }[] = 
    userRole === 'student'
      ? [
          { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'submit-project', label: 'Submit Project', icon: FileText },
          { id: 'project-analysis', label: 'AI Analysis', icon: Sparkles },
          { id: 'recommended-guides', label: 'Recommended Guides', icon: Users },
          { id: 'compare-guides', label: 'Compare', icon: Columns3, badge: comparedGuideIds.length },
          { id: 'requests', label: 'Requests', icon: Inbox, badge: pendingRequestsCount },
          { id: 'student-profile', label: 'Profile', icon: User },
        ]
      : [
          { id: 'faculty-dashboard', label: 'Faculty Hub', icon: LayoutDashboard, badge: pendingRequestsCount },
          { id: 'recommended-guides', label: 'Directory', icon: Users },
          { id: 'compare-guides', label: 'Compare Matrix', icon: Columns3, badge: comparedGuideIds.length },
          { id: 'requests', label: 'Review Queue', icon: Inbox, badge: pendingRequestsCount },
        ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button 
              id="nav-logo-btn"
              onClick={() => setActiveView('landing')}
              className="flex items-center gap-2.5 text-left group focus:outline-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20 group-hover:bg-indigo-700 transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
                  Guide<span className="text-indigo-600">Match</span>
                  <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded-sm bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                    AI
                  </span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium block -mt-0.5">
                  Academic Mentorship
                </span>
              </div>
            </button>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              id="nav-landing-link"
              onClick={() => setActiveView('landing')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeView === 'landing'
                  ? 'text-indigo-600 bg-indigo-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50/80 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-indigo-600 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Perspective Switcher & Profile */}
          <div className="flex items-center gap-3">
            
            {/* Quick Role Toggle */}
            <div className="flex items-center p-0.5 bg-slate-100 rounded-xl border border-slate-200/80">
              <button
                id="role-switch-student"
                onClick={() => {
                  setUserRole('student');
                  setActiveView('dashboard');
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  userRole === 'student'
                    ? 'bg-white text-indigo-700 shadow-xs font-semibold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Student</span>
              </button>
              <button
                id="role-switch-faculty"
                onClick={() => {
                  setUserRole('faculty');
                  setActiveView('faculty-dashboard');
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  userRole === 'faculty'
                    ? 'bg-white text-indigo-700 shadow-xs font-semibold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Faculty</span>
              </button>
            </div>

            {/* Quick Switch Button (Mobile / Tablet) */}
            <button
              id="switch-perspective-btn"
              onClick={handleRoleToggle}
              title="Toggle Student/Faculty Perspective"
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>

            {/* User Pill */}
            <button
              id="user-profile-pill-btn"
              onClick={() => setActiveView(userRole === 'student' ? 'student-profile' : 'faculty-dashboard')}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-left"
            >
              <img
                src={userRole === 'student' ? studentProfile.avatar : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"}
                alt="Avatar"
                className="w-7 h-7 rounded-full object-cover border border-slate-200"
              />
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-slate-800 leading-tight">
                  {userRole === 'student' ? studentProfile.preferredName : 'Dr. M. Thorne'}
                </p>
                <p className="text-[10px] text-slate-500">
                  {userRole === 'student' ? 'Senior Capstone' : 'CS Dept Lead'}
                </p>
              </div>
            </button>

          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="lg:hidden flex items-center gap-1 py-2 overflow-x-auto no-scrollbar border-t border-slate-100">
          <button
            onClick={() => setActiveView('landing')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
              activeView === 'landing' ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-slate-100'
            }`}
          >
            Home
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap flex items-center gap-1 ${
                activeView === item.id ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="px-1 py-0.2 rounded-full text-[9px] bg-white text-indigo-700 font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

      </div>
    </header>
  );
};
