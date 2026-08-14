import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  FileText, 
  Calendar, 
  ExternalLink, 
  AlertCircle, 
  Layers, 
  Plus, 
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { 
    setActiveView, 
    currentProject, 
    guides, 
    requests, 
    milestones, 
    toggleMilestone, 
    studentProfile, 
    setSelectedGuide,
    openRequestModalForGuide 
  } = useApp();

  const topGuides = guides.slice(0, 3);
  const pendingRequests = requests.filter(r => r.status === 'Pending');
  const acceptedRequests = requests.filter(r => r.status === 'Accepted');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Welcome back, {studentProfile.preferredName.split(' ')[0]} 👋
            </h1>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              {studentProfile.degree}
            </span>
          </div>
          <p className="text-slate-600 text-sm mt-1">
            Track your capstone project progress, AI faculty recommendations, and mentorship request statuses.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="dashboard-new-project-btn"
            onClick={() => setActiveView('submit-project')}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Project Proposal</span>
          </button>
        </div>
      </div>

      {/* Current Project & AI Insights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Current Active Project Card (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Current Active Project
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              {currentProject.status}
            </span>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentProject.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                {currentProject.domain}
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                {currentProject.timeline}
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700">
                {currentProject.academicLevel}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Milestone Progress</span>
              <span className="font-bold text-indigo-600">{currentProject.completionPercentage}% Completed</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${currentProject.completionPercentage}%` }}
              />
            </div>
          </div>

          {/* Assigned Guide or Status */}
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={guides[0].avatar}
                alt="Guide"
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <p className="text-xs text-slate-500">Assigned Guide</p>
                <p className="text-xs font-bold text-slate-900">{currentProject.assignedGuideName || 'Dr. Marcus Thorne'}</p>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedGuide(guides[0]);
                setActiveView('faculty-profile');
              }}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              <span>View Profile</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              id="view-project-analysis-btn"
              onClick={() => setActiveView('project-analysis')}
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View AI Project Analysis</span>
            </button>

            <button
              id="edit-proposal-btn"
              onClick={() => setActiveView('submit-project')}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
            >
              Edit Proposal Specs
            </button>
          </div>

        </div>

        {/* AI Suggestion Card & Quick Stats (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* AI Suggestion Alert Card */}
          <div className="bg-linear-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-15">
              <Sparkles className="w-24 h-24" />
            </div>

            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-indigo-200 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                <span>AI Guidance Match Insight</span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug">
                Your project complexity is Level 4 (Advanced).
              </h3>

              <p className="text-slate-300 text-xs leading-relaxed">
                Based on your graph modeling and GIS pipeline, <strong>Dr. Marcus Thorne</strong> has the highest semantic alignment (94%) with 2 open graduate slots.
              </p>

              <div className="pt-2">
                <button
                  id="view-thorne-suggestion-btn"
                  onClick={() => {
                    setSelectedGuide(guides[0]);
                    setActiveView('faculty-profile');
                  }}
                  className="w-full py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-colors text-center"
                >
                  View Dr. Thorne's Profile & Lab Specs
                </button>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Pending Requests</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 mt-2">
                {pendingRequests.length}
              </p>
              <button 
                onClick={() => setActiveView('requests')}
                className="text-[11px] text-indigo-600 hover:underline mt-1 block"
              >
                Manage requests →
              </button>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Top Matches Found</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 mt-2">
                {guides.length}
              </p>
              <button 
                onClick={() => setActiveView('recommended-guides')}
                className="text-[11px] text-emerald-600 hover:underline mt-1 block"
              >
                Browse faculty →
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Top Recommended Guides Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Top Recommended Guides for Your Project
            </h3>
            <p className="text-xs text-slate-500">
              Evaluated against your problem statement, required libraries, and research focus.
            </p>
          </div>
          <button
            id="view-all-guides-btn"
            onClick={() => setActiveView('recommended-guides')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>View All Guides ({guides.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <img
                    src={guide.avatar}
                    alt={guide.name}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                  />
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {guide.matchScore}% Match
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">
                      {guide.capacity.current}/{guide.capacity.max} Slots Full
                    </span>
                  </div>
                </div>

                {/* Name & Dept */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{guide.name}</h4>
                  <p className="text-xs text-slate-500 line-clamp-1">{guide.department}</p>
                </div>

                {/* Why match rationale */}
                <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 line-clamp-2">
                  {guide.whyMatchReason}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1">
                  {guide.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium">
                      {tech}
                    </span>
                  ))}
                  {guide.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px]">
                      +{guide.technologies.length - 3}
                    </span>
                  )}
                </div>

              </div>

              {/* Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setSelectedGuide(guide);
                    setActiveView('faculty-profile');
                  }}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors text-center"
                >
                  View Profile
                </button>
                <button
                  onClick={() => openRequestModalForGuide(guide)}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-colors text-center"
                >
                  Send Request
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Requests Status & Upcoming Deadlines Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Pending Requests Tracker (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Mentorship Requests Status
            </h3>
            <button
              onClick={() => setActiveView('requests')}
              className="text-xs text-indigo-600 hover:underline font-semibold"
            >
              View all ({requests.length})
            </button>
          </div>

          <div className="space-y-3">
            {requests.slice(0, 3).map((req) => (
              <div
                key={req.id}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={req.guideAvatar}
                    alt={req.guideName}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{req.guideName}</h4>
                    <p className="text-[11px] text-slate-500">{req.projectTitle}</p>
                    <span className="text-[10px] text-slate-400">Sent {req.submittedDate}</span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                      req.status === 'Accepted'
                        ? 'bg-emerald-100 text-emerald-800'
                        : req.status === 'Pending'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Project Milestones (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Upcoming Deadlines
            </h3>
            <span className="text-xs text-slate-400">Fall Semester</span>
          </div>

          <div className="space-y-3">
            {milestones.map((ms) => (
              <div
                key={ms.id}
                onClick={() => toggleMilestone(ms.id)}
                className={`p-3 rounded-xl border cursor-pointer transition-colors flex items-start gap-3 ${
                  ms.completed
                    ? 'bg-slate-50/50 border-slate-200 opacity-60'
                    : 'bg-white border-slate-200 hover:border-indigo-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={ms.completed}
                  onChange={() => toggleMilestone(ms.id)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
                <div className="space-y-0.5 flex-1">
                  <p className={`text-xs font-bold ${ms.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                    {ms.title}
                  </p>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Due: {ms.dueDate}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
