import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MentorshipRequest } from '../types';
import { 
  Inbox, 
  Plus, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  CheckCheck, 
  Sparkles, 
  Calendar, 
  MessageSquare, 
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const MentorshipRequests: React.FC = () => {
  const { requests, setActiveView, setSelectedGuide, guides, addToast } = useApp();

  const [activeTab, setActiveTab] = useState<'All' | 'Pending' | 'Accepted' | 'Completed'>('All');
  const [selectedRequestDetails, setSelectedRequestDetails] = useState<MentorshipRequest | null>(null);

  const filteredRequests = requests.filter((req) => {
    if (activeTab === 'All') return true;
    return req.status === activeTab;
  });

  const countByStatus = {
    All: requests.length,
    Pending: requests.filter((r) => r.status === 'Pending').length,
    Accepted: requests.filter((r) => r.status === 'Accepted').length,
    Completed: requests.filter((r) => r.status === 'Completed').length,
  };

  const handleWithdraw = (reqId: string) => {
    addToast('info', 'Request Withdrawn', 'Mentorship proposal has been withdrawn.');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1">
            <Inbox className="w-4 h-4" />
            <span>Advising Applications</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Mentorship Requests Center
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Track communication, review responses, and formal acceptances from prospective faculty guides.
          </p>
        </div>

        <button
          id="new-request-top-btn"
          onClick={() => setActiveView('recommended-guides')}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Mentorship Request</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-2 sm:gap-6 overflow-x-auto no-scrollbar">
        {(['All', 'Pending', 'Accepted', 'Completed'] as const).map((tab) => (
          <button
            key={tab}
            id={`request-tab-${tab.toLowerCase()}`}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-xs sm:text-sm font-bold transition-all whitespace-nowrap relative flex items-center gap-2 ${
              activeTab === tab
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>{tab === 'All' ? 'All Requests' : tab}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab ? 'bg-indigo-100 text-indigo-800 font-bold' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {countByStatus[tab]}
            </span>
          </button>
        ))}
      </div>

      {/* Requests List */}
      {filteredRequests.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
          <Inbox className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-900">No requests in this category</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            You don't have any {activeTab.toLowerCase()} mentorship proposals right now.
          </p>
          <button
            onClick={() => setActiveView('recommended-guides')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
          >
            Browse Faculty Directory
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredRequests.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 hover:border-indigo-200 transition-all"
            >
              
              {/* Header: Faculty Info & Status */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                <div className="flex items-start gap-4">
                  <img
                    src={req.guideAvatar}
                    alt={req.guideName}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shrink-0"
                  />
                  <div className="space-y-0.5">
                    <h3 className="text-base font-bold text-slate-900">
                      {req.guideName}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {req.guideTitle} • {req.guideDepartment}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700">
                        {req.matchScore}% Match
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Submitted {req.submittedDate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                      req.status === 'Accepted'
                        ? 'bg-emerald-100 text-emerald-800'
                        : req.status === 'Pending'
                        ? 'bg-amber-100 text-amber-800'
                        : req.status === 'Completed'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {req.status === 'Accepted' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {req.status === 'Pending' && <Clock className="w-3.5 h-3.5" />}
                    {req.status === 'Completed' && <CheckCheck className="w-3.5 h-3.5" />}
                    <span>Status: {req.status}</span>
                  </span>
                </div>

              </div>

              {/* Project Card Snippet */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold uppercase tracking-wider text-indigo-600">
                    Project Proposal
                  </span>
                  <span>{req.projectDomain}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {req.projectTitle}
                </h4>
                <p className="text-xs text-slate-600 italic">
                  "{req.message}"
                </p>
              </div>

              {/* Feedback Note if Accepted or Available */}
              {req.feedbackNotes && (
                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-950 space-y-1">
                  <span className="font-bold text-emerald-900">Faculty Feedback Note:</span>
                  <p className="text-emerald-800">{req.feedbackNotes}</p>
                  {req.scheduledInterview && (
                    <p className="text-emerald-900 font-semibold pt-1">
                      📅 Scheduled Kickoff Sync: {req.scheduledInterview}
                    </p>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const matchedGuide = guides.find((g) => g.id === req.guideId);
                    if (matchedGuide) {
                      setSelectedGuide(matchedGuide);
                      setActiveView('faculty-profile');
                    }
                  }}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>View Faculty Profile</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {req.status === 'Pending' && (
                    <button
                      onClick={() => handleWithdraw(req.id)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-xs font-semibold transition-colors"
                    >
                      Withdraw
                    </button>
                  )}
                  {req.status === 'Accepted' && (
                    <button
                      onClick={() => addToast('success', 'Calendar Invite', 'Opening Stanford Google Calendar sync...')}
                      className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Join Kickoff Room</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};
