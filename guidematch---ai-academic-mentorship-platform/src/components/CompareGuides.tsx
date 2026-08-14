import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Columns3, 
  Sparkles, 
  Trash2, 
  Plus, 
  Star, 
  Check, 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';

export const CompareGuides: React.FC = () => {
  const { 
    comparedGuideIds, 
    guides, 
    toggleCompareGuide, 
    clearComparison, 
    setActiveView, 
    setSelectedGuide, 
    openRequestModalForGuide,
    currentProject 
  } = useApp();

  const comparedGuides = guides.filter((g) => comparedGuideIds.includes(g.id));

  if (comparedGuides.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <Columns3 className="w-12 h-12 text-slate-400 mx-auto" />
        <h2 className="text-xl font-bold text-slate-900">No Guides Selected for Comparison</h2>
        <p className="text-slate-600 text-sm">
          Select 2 to 3 faculty members from the directory to view a side-by-side evaluation matrix.
        </p>
        <button
          onClick={() => setActiveView('recommended-guides')}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold"
        >
          Browse Recommended Guides
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1">
            <Columns3 className="w-4 h-4" />
            <span>Faculty Compatibility Matrix</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Compare Faculty Guides
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Side-by-side comparison evaluated against project: <strong>"{currentProject.title}"</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="clear-comparison-btn"
            onClick={clearComparison}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 text-slate-600 hover:text-rose-600 rounded-xl text-xs font-semibold transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Matrix</span>
          </button>

          {comparedGuides.length < 3 && (
            <button
              id="add-guide-compare-btn"
              onClick={() => setActiveView('recommended-guides')}
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Guide to Compare ({3 - comparedGuides.length} slot left)</span>
            </button>
          )}
        </div>
      </div>

      {/* Comparison Matrix Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            {/* Table Header: Guides Profiles */}
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="p-6 w-1/4 min-w-[200px] text-xs font-bold text-slate-500 uppercase tracking-wider align-top">
                  Evaluation Criteria
                </th>
                {comparedGuides.map((guide) => (
                  <th key={guide.id} className="p-6 w-1/4 min-w-[260px] align-top">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <img
                          src={guide.avatar}
                          alt={guide.name}
                          className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-xs"
                        />
                        <button
                          onClick={() => toggleCompareGuide(guide.id)}
                          className="text-slate-400 hover:text-rose-500 p-1"
                          title="Remove from comparison"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {guide.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-normal mt-0.5">
                          {guide.title}
                        </p>
                        <p className="text-[11px] text-slate-400 font-normal">
                          {guide.department}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {guide.matchScore}% Match
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {guide.capacity.max - guide.capacity.current} Open Slots
                        </span>
                      </div>

                      <button
                        onClick={() => openRequestModalForGuide(guide)}
                        className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
                      >
                        Request as Guide
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Rows */}
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              
              {/* Row: Match Rationale */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-5 font-bold text-slate-900 bg-slate-50/40">
                  AI Match Fit
                </td>
                {comparedGuides.map((guide) => (
                  <td key={guide.id} className="p-5 leading-relaxed bg-indigo-50/20">
                    <p className="text-indigo-950 font-medium">
                      {guide.whyMatchReason}
                    </p>
                  </td>
                ))}
              </tr>

              {/* Row: Primary Domain */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-5 font-bold text-slate-900 bg-slate-50/40">
                  Primary Domain
                </td>
                {comparedGuides.map((guide) => (
                  <td key={guide.id} className="p-5 font-semibold text-slate-900">
                    {guide.primaryDomain}
                  </td>
                ))}
              </tr>

              {/* Row: Research Interests */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-5 font-bold text-slate-900 bg-slate-50/40">
                  Research Focus Areas
                </td>
                {comparedGuides.map((guide) => (
                  <td key={guide.id} className="p-5 space-y-1">
                    {guide.researchInterests.map((interest, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                        <span>{interest}</span>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>

              {/* Row: Technologies */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-5 font-bold text-slate-900 bg-slate-50/40">
                  Technologies & Tools
                </td>
                {comparedGuides.map((guide) => (
                  <td key={guide.id} className="p-5">
                    <div className="flex flex-wrap gap-1.5">
                      {guide.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row: Availability Status */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-5 font-bold text-slate-900 bg-slate-50/40">
                  Capacity & Availability
                </td>
                {comparedGuides.map((guide) => (
                  <td key={guide.id} className="p-5">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                        guide.availabilityStatus === 'High'
                          ? 'bg-emerald-100 text-emerald-800'
                          : guide.availabilityStatus === 'Medium'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {guide.availabilityStatus} Availability ({guide.capacity.current}/{guide.capacity.max} Mentees)
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row: Supervised Projects */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-5 font-bold text-slate-900 bg-slate-50/40">
                  Past Supervised Student Projects
                </td>
                {comparedGuides.map((guide) => (
                  <td key={guide.id} className="p-5 space-y-2">
                    {guide.pastSupervisedProjects.map((p, i) => (
                      <div key={i} className="p-2 bg-slate-50 rounded-lg border border-slate-200/70 text-[11px] font-medium text-slate-800">
                        {p}
                      </div>
                    ))}
                  </td>
                ))}
              </tr>

              {/* Row: Meeting Cadence */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-5 font-bold text-slate-900 bg-slate-50/40">
                  Meeting Cadence
                </td>
                {comparedGuides.map((guide) => (
                  <td key={guide.id} className="p-5 font-medium text-slate-700">
                    {guide.meetingCadence}
                  </td>
                ))}
              </tr>

              {/* Row: Academic Output & Rating */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-5 font-bold text-slate-900 bg-slate-50/40">
                  Publications & Rating
                </td>
                {comparedGuides.map((guide) => (
                  <td key={guide.id} className="p-5 space-y-1">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-amber-500" />
                      <span>{guide.rating} / 5.0</span>
                      <span className="text-slate-400 font-normal">({guide.reviewCount} reviews)</span>
                    </div>
                    <p className="text-slate-500 text-[11px]">
                      {guide.publicationsCount} Papers • {guide.citationsCount} Citations
                    </p>
                  </td>
                ))}
              </tr>

            </tbody>

            {/* Bottom Footer Actions */}
            <tfoot>
              <tr className="border-t border-slate-200 bg-slate-50/50">
                <td className="p-5 font-bold text-slate-500">
                  Action
                </td>
                {comparedGuides.map((guide) => (
                  <td key={guide.id} className="p-5">
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => openRequestModalForGuide(guide)}
                        className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
                      >
                        Request as Guide
                      </button>
                      <button
                        onClick={() => {
                          setSelectedGuide(guide);
                          setActiveView('faculty-profile');
                        }}
                        className="w-full py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors"
                      >
                        View Full Profile
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            </tfoot>

          </table>
        </div>
      </div>

    </div>
  );
};
