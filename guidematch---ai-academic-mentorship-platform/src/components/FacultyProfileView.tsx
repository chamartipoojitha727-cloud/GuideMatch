import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  Star, 
  BookOpen, 
  Users, 
  Award, 
  ExternalLink, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  ArrowLeft, 
  Columns3, 
  Send,
  Building,
  MapPin,
  Clock,
  Quote
} from 'lucide-react';

export const FacultyProfileView: React.FC = () => {
  const { 
    selectedGuide, 
    guides, 
    setActiveView, 
    openRequestModalForGuide, 
    comparedGuideIds, 
    toggleCompareGuide,
    addToast 
  } = useApp();

  const guide = selectedGuide || guides[0];
  const isCompared = comparedGuideIds.includes(guide.id);
  const [activeTab, setActiveTab] = useState<'overview' | 'publications' | 'reviews'>('overview');

  const handleSendQuickMessage = () => {
    addToast('info', 'Message Drafted', `Direct email drafted to ${guide.email}.`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back navigation & compare toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveView('recommended-guides')}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Faculty Directory</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleCompareGuide(guide.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
              isCompared
                ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Columns3 className="w-3.5 h-3.5" />
            <span>{isCompared ? 'In Comparison Matrix' : 'Add to Compare'}</span>
          </button>
        </div>
      </div>

      {/* Main Faculty Header Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6 relative overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Avatar & Basic Info (8 Cols) */}
          <div className="md:col-span-8 flex flex-col sm:flex-row items-start gap-5">
            <img
              src={guide.avatar}
              alt={guide.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-white shadow-md shrink-0"
            />

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  {guide.name}
                </h1>
                <span className="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>{guide.matchScore}% Match</span>
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-700">
                {guide.title}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                <div className="flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>{guide.department}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{guide.campus}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-indigo-600 pt-1">
                <Mail className="w-3.5 h-3.5" />
                <span className="font-mono">{guide.email}</span>
              </div>
            </div>
          </div>

          {/* Direct CTA Box (4 Cols) */}
          <div className="md:col-span-4 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Mentorship Status</span>
              <span className="px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800 text-[11px]">
                {guide.capacity.max - guide.capacity.current} Open Slots
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-snug">
              Accepting new capstone and thesis students for the upcoming term.
            </p>

            <div className="space-y-2 pt-1">
              <button
                id="request-as-guide-profile-cta"
                onClick={() => openRequestModalForGuide(guide)}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request as Guide</span>
              </button>

              <button
                id="send-message-profile-cta"
                onClick={handleSendQuickMessage}
                className="w-full py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                <span>Send Direct Inquiry</span>
              </button>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
            <div className="text-xl font-bold text-slate-900">{guide.publicationsCount}</div>
            <div className="text-xs text-slate-500">Publications</div>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
            <div className="text-xl font-bold text-slate-900">{guide.citationsCount}+</div>
            <div className="text-xs text-slate-500">Citations</div>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
            <div className="text-xl font-bold text-indigo-600">{guide.capacity.current}/{guide.capacity.max}</div>
            <div className="text-xs text-slate-500">Active Mentees</div>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-center">
            <div className="text-xl font-bold text-emerald-600">{guide.successRate}%</div>
            <div className="text-xs text-slate-500">Success Rate</div>
          </div>
        </div>

      </div>

      {/* Profile Tabs Navigation */}
      <div className="flex border-b border-slate-200 gap-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-3 text-sm font-bold transition-colors relative ${
            activeTab === 'overview'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Research Overview & Background
        </button>
        <button
          onClick={() => setActiveTab('publications')}
          className={`pb-3 text-sm font-bold transition-colors relative flex items-center gap-1.5 ${
            activeTab === 'publications'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Selected Publications</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-100 text-slate-700">
            {guide.publications.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`pb-3 text-sm font-bold transition-colors relative flex items-center gap-1.5 ${
            activeTab === 'reviews'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Student Feedback & Reviews</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-50 text-amber-800">
            ★ {guide.rating}
          </span>
        </button>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          
          {/* Bio & Philosophy */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
              Biography & Research Philosophy
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {guide.bio}
            </p>
            <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 text-xs text-indigo-950 space-y-1">
              <span className="font-bold text-indigo-900 block">Mentorship Philosophy:</span>
              <p className="text-indigo-800 leading-relaxed italic">
                "{guide.researchPhilosophy}"
              </p>
            </div>
          </div>

          {/* Research Focus & Tech Tooling Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900">
                Core Research Interests
              </h3>
              <div className="space-y-2">
                {guide.researchInterests.map((interest, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900">
                Technologies & Computing Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {guide.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Past Supervised Projects */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900">
              Past Supervised Capstone & Thesis Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {guide.pastSupervisedProjects.map((proj, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 space-y-2">
                  <div className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <p>{proj}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Publications */}
      {activeTab === 'publications' && (
        <div className="space-y-4">
          {guide.publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 self-start">
                  {pub.conference} • {pub.year}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {pub.citations} Citations
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 leading-snug">
                {pub.title}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                {pub.abstract}
              </p>

              <div className="flex flex-wrap items-center justify-between pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#paper"
                  onClick={(e) => { e.preventDefault(); addToast('info', 'Paper Link', 'Opening academic preprint repository.'); }}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>Read Paper</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Reviews */}
      {activeTab === 'reviews' && (
        <div className="space-y-4">
          <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-sm font-bold text-amber-950">
                {guide.rating} Average Rating across {guide.reviewCount} Supervised Students
              </span>
            </div>
            <span className="text-xs font-semibold text-amber-900">
              100% Verified Capstones
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guide.reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-900">{rev.studentName}</p>
                  <p className="text-[11px] text-slate-500">{rev.studentMajor} • Project: {rev.projectTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
