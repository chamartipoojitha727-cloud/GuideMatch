import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, GraduationCap, Users, ShieldCheck, Github, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveView, setUserRole } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Guide<span className="text-indigo-400">Match</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              AI-Powered Academic Mentorship & Project Guide Matching platform connecting university students with world-class faculty.
            </p>
          </div>

          {/* Col 2: Student Portals */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Student Navigation
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => { setUserRole('student'); setActiveView('dashboard'); }}
                  className="hover:text-white transition-colors"
                >
                  Student Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setUserRole('student'); setActiveView('submit-project'); }}
                  className="hover:text-white transition-colors"
                >
                  Submit Project Proposal
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setUserRole('student'); setActiveView('project-analysis'); }}
                  className="hover:text-white transition-colors"
                >
                  AI Project Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setUserRole('student'); setActiveView('recommended-guides'); }}
                  className="hover:text-white transition-colors"
                >
                  Faculty Directory & Matching
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setUserRole('student'); setActiveView('compare-guides'); }}
                  className="hover:text-white transition-colors"
                >
                  Compare Guides Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Faculty & Department */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Faculty & Advising
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => { setUserRole('faculty'); setActiveView('faculty-dashboard'); }}
                  className="hover:text-white transition-colors"
                >
                  Faculty Mentorship Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setUserRole('faculty'); setActiveView('requests'); }}
                  className="hover:text-white transition-colors"
                >
                  Review Queue & Requests
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setUserRole('student'); setActiveView('student-profile'); }}
                  className="hover:text-white transition-colors"
                >
                  Student Portfolio Profile
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform Security & Standards */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Academic Standards
            </h4>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 space-y-1.5 text-[11px]">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FERPA & Institutional Compliant</span>
              </div>
              <p className="text-slate-400 leading-snug">
                Encrypted student proposals and verified faculty advising limits.
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 GuideMatch Academic Platform. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Silicon Valley Campus</span>
            <span>•</span>
            <span>Terms of Research Mentorship</span>
            <span>•</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
