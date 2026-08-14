import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Users, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Sliders, 
  Plus, 
  X, 
  Check, 
  MessageSquare, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileText
} from 'lucide-react';

export const FacultyDashboard: React.FC = () => {
  const { 
    requests, 
    updateRequestStatus, 
    facultyMentees, 
    milestones, 
    toggleMilestone, 
    facultyCapacity, 
    updateFacultyCapacity, 
    facultyTags, 
    addFacultyTag, 
    removeFacultyTag,
    addToast 
  } = useApp();

  const [newTagInput, setNewTagInput] = useState('');
  const [acceptingRequests, setAcceptingRequests] = useState(true);

  const pendingRequests = requests.filter((r) => r.status === 'Pending');

  const handleAddTag = () => {
    if (newTagInput.trim()) {
      addFacultyTag(newTagInput.trim());
      setNewTagInput('');
      addToast('success', 'Tag Added', 'Added research specialization tag.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Faculty Mentorship Hub
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              Dr. Marcus Thorne • CS Dept
            </span>
          </div>
          <p className="text-slate-600 text-sm mt-1">
            Manage incoming student project proposals, mentee workload capacity, and review milestone deliverables.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold cursor-pointer shadow-xs">
            <span className="text-slate-700">Accepting New Proposals</span>
            <input
              type="checkbox"
              checked={acceptingRequests}
              onChange={(e) => {
                setAcceptingRequests(e.target.checked);
                addToast('info', 'Status Updated', e.target.checked ? 'Lab marked as open for new proposals.' : 'Lab marked as full.');
              }}
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
          </label>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Pending Proposals</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">
            {pendingRequests.length}
          </p>
          <p className="text-[11px] text-amber-600 font-medium">Requires your review</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Active Mentees</span>
            <Users className="w-4 h-4 text-indigo-600" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">
            {facultyCapacity.current} / {facultyCapacity.max}
          </p>
          <p className="text-[11px] text-emerald-600 font-medium">
            {facultyCapacity.max - facultyCapacity.current} Slots open this quarter
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Avg Mentee Progress</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">
            68%
          </p>
          <p className="text-[11px] text-slate-500">On-track for Fall defense</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Review Checkpoints</span>
            <Calendar className="w-4 h-4 text-indigo-600" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">
            {milestones.filter(m => !m.completed).length}
          </p>
          <p className="text-[11px] text-indigo-600 font-medium">Upcoming this month</p>
        </div>

      </div>

      {/* Main Grid: Pending Requests Queue (7 Cols) & Capacity Settings (5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Pending Mentorship Requests Queue (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Pending Mentorship Requests</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                {pendingRequests.length}
              </span>
            </h3>
            <span className="text-xs text-slate-500">Auto-ranked by AI Match Fit</span>
          </div>

          {pendingRequests.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
              <h4 className="text-sm font-bold text-slate-900">All proposals reviewed!</h4>
              <p className="text-xs text-slate-500">No pending student requests in your queue.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 hover:border-indigo-300 transition-all"
                >
                  
                  {/* Student & Project Details */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <img
                        src={req.studentAvatar}
                        alt={req.studentName}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                      />
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900">{req.studentName}</h4>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="text-xs text-slate-600 font-medium">{req.studentMajor}</span>
                        </div>
                        <p className="text-xs text-slate-500">
                          {req.studentYear} • GPA: <strong>{req.studentGpa}</strong>
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {req.matchScore}% Match
                      </span>
                      <span className="block text-[10px] text-slate-400 mt-1">{req.submittedDate}</span>
                    </div>
                  </div>

                  {/* Project Proposal Synopsis */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                        Proposed Project
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {req.projectDomain}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 leading-snug">
                      {req.projectTitle}
                    </p>
                    <p className="text-xs text-slate-600 italic leading-relaxed pt-1">
                      "{req.message}"
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                    <button
                      id={`decline-request-${req.id}`}
                      onClick={() => updateRequestStatus(req.id, 'Declined')}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Decline</span>
                    </button>

                    <button
                      id={`accept-request-${req.id}`}
                      onClick={() => updateRequestStatus(req.id, 'Accepted')}
                      className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Accept Mentorship</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* Current Mentees Progress Tracker Table */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">
                Active Supervised Mentees
              </h3>
              <span className="text-xs text-slate-500">
                {facultyMentees.length} Students Active
              </span>
            </div>

            <div className="space-y-3">
              {facultyMentees.map((mentee) => (
                <div
                  key={mentee.id}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={mentee.avatar}
                        alt={mentee.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{mentee.name}</h4>
                        <p className="text-[11px] text-slate-500">{mentee.degree}</p>
                      </div>
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        mentee.status === 'On Track'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {mentee.status}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-800">
                    {mentee.projectTitle}
                  </p>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-500">Milestone Completion</span>
                      <span className="font-bold text-indigo-600">{mentee.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full"
                        style={{ width: `${mentee.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span>Last Check-in: <strong>{mentee.lastCheckIn}</strong></span>
                    <span>Next: <strong>{mentee.nextDeadline}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Capacity Controls & Research Focus (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Capacity Slider Widget */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">
                Mentorship Capacity Control
              </h3>
              <span className="text-xs font-bold text-indigo-600">
                {facultyCapacity.current} / {facultyCapacity.max} Active
              </span>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Max Mentee Limit (Quarterly)
              </label>
              
              <input
                id="faculty-capacity-slider"
                type="range"
                min="1"
                max="8"
                step="1"
                value={facultyCapacity.max}
                onChange={(e) => updateFacultyCapacity(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />

              <div className="flex justify-between text-xs text-slate-500">
                <span>Min: 1 Student</span>
                <span>Max: 8 Students</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 leading-relaxed">
                When maximum capacity is reached, your profile automatically indicates <strong>Lab Full</strong> in the student directory.
              </div>
            </div>
          </div>

          {/* Research Focus Tags Manager */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">
                Research Focus & Keywords
              </h3>
              <span className="text-xs text-slate-400">Used for AI weights</span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newTagInput}
                onChange={(e) => setNewTagInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleAddTag(); }}
                placeholder="Add research topic (e.g. Graph Neural Networks)..."
                className="flex-1 text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleAddTag}
                className="px-3 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {facultyTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-800 rounded-full text-xs font-semibold"
                >
                  <span>{tag}</span>
                  <button
                    onClick={() => removeFacultyTag(tag)}
                    className="p-0.5 hover:bg-indigo-200 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Upcoming Review Milestones */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">
                Upcoming Advising Milestones
              </h3>
              <span className="text-xs text-slate-400">Review Calendar</span>
            </div>

            <div className="space-y-2.5">
              {milestones.map((ms) => (
                <div
                  key={ms.id}
                  onClick={() => toggleMilestone(ms.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-colors flex items-start gap-3 ${
                    ms.completed ? 'bg-slate-50 border-slate-200 opacity-60' : 'bg-white border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={ms.completed}
                    onChange={() => toggleMilestone(ms.id)}
                    className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <div className="space-y-0.5 flex-1">
                    <p className={`text-xs font-bold ${ms.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                      {ms.title}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Mentee: <strong>{ms.studentName}</strong> • Due: {ms.dueDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
