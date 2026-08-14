import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Send, Sparkles, CheckCircle2, ShieldCheck, Clock, UserCheck } from 'lucide-react';

export const SendRequestModal: React.FC = () => {
  const { 
    isRequestModalOpen, 
    setIsRequestModalOpen, 
    requestTargetGuide, 
    currentProject, 
    sendMentorshipRequest,
    studentProfile 
  } = useApp();

  const [customMessage, setCustomMessage] = useState(
    `Dear ${requestTargetGuide?.name || 'Professor'},\n\nI am reaching out regarding my ${currentProject.academicLevel} project "${currentProject.title}". Given your research in ${requestTargetGuide?.primaryDomain || 'this domain'} and your work on related technologies, I believe your guidance would be invaluable. I have attached my preliminary research narrative and methodology for your consideration.\n\nThank you for your time and mentorship.`
  );

  const [selectedTimeline, setSelectedTimeline] = useState(currentProject.timeline);
  const [meetingPreference, setMeetingPreference] = useState('Weekly 1-on-1 (30 mins)');

  if (!isRequestModalOpen || !requestTargetGuide) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMentorshipRequest(requestTargetGuide.id, customMessage);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        id="send-request-modal-container"
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden"
      >
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            id="close-request-modal-btn"
            onClick={() => setIsRequestModalOpen(false)}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Formal Mentorship Proposal</span>
          </div>

          <h2 className="text-xl font-bold text-white">
            Request Mentorship with {requestTargetGuide.name}
          </h2>
          <p className="text-slate-300 text-sm mt-1">
            {requestTargetGuide.title} • {requestTargetGuide.department}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Match Context Banner */}
          <div className="p-4 bg-indigo-50/70 border border-indigo-100 rounded-xl flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              {requestTargetGuide.matchScore}%
            </div>
            <div className="text-xs text-indigo-950 space-y-1">
              <p className="font-semibold text-indigo-900">
                AI Compatibility Recommendation: Strong Match
              </p>
              <p className="text-indigo-800">
                {requestTargetGuide.whyMatchReason}
              </p>
            </div>
          </div>

          {/* Project Summary Card */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Associated Project
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-100 text-emerald-800">
                {currentProject.status}
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              {currentProject.title}
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded text-xs">
                {currentProject.domain}
              </span>
              {currentProject.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Student Profile Quick Check */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-white border border-slate-200 rounded-xl text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Applicant</span>
              <span className="font-semibold text-slate-800">{studentProfile.preferredName}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Major & Standing</span>
              <span className="font-semibold text-slate-800">{studentProfile.degree}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Current GPA</span>
              <span className="font-semibold text-indigo-600">{studentProfile.gpa}</span>
            </div>
          </div>

          {/* Customized Pitch Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Personalized Statement & Research Rationale
            </label>
            <textarea
              id="request-custom-message-input"
              rows={4}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full text-xs text-slate-800 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all font-mono leading-relaxed"
              required
            />
          </div>

          {/* Preferences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Requested Mentorship Cadence
              </label>
              <select
                id="request-meeting-cadence-select"
                value={meetingPreference}
                onChange={(e) => setMeetingPreference(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              >
                <option>Weekly 1-on-1 (30 mins)</option>
                <option>Bi-weekly Strategic Review (45 mins)</option>
                <option>Monthly Milestone Evaluation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Target Project Duration
              </label>
              <select
                id="request-timeline-select"
                value={selectedTimeline}
                onChange={(e) => setSelectedTimeline(e.target.value as any)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              >
                <option>1 Semester</option>
                <option>2 Semesters</option>
                <option>Full Academic Year</option>
                <option>Summer Research Intensive</option>
              </select>
            </div>
          </div>

          {/* Guide Availability Note */}
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>
              {requestTargetGuide.name} typically reviews proposals within <strong>48-72 hours</strong>.
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              id="cancel-request-btn"
              onClick={() => setIsRequestModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              id="confirm-submit-request-btn"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm shadow-indigo-600/30 transition-all hover:translate-y-px"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Mentorship Request</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
