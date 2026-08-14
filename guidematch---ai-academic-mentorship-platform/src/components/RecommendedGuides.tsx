import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { FacultyGuide } from '../types';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  Users, 
  Star, 
  BookOpen, 
  Columns3, 
  ArrowRight, 
  Check, 
  Plus, 
  Sparkles, 
  ExternalLink,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

export const RecommendedGuides: React.FC = () => {
  const { 
    guides, 
    setSelectedGuide, 
    setActiveView, 
    comparedGuideIds, 
    toggleCompareGuide, 
    openRequestModalForGuide,
    currentProject 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [availabilityFilter, setAvailabilityFilter] = useState<'All' | 'Open' | 'Plentiful'>('All');
  const [minMatchScore, setMinMatchScore] = useState<number>(75);

  const availableDepts = useMemo(() => {
    const depts = new Set(guides.map((g) => g.department));
    return ['All', ...Array.from(depts)];
  }, [guides]);

  const allAvailableSkills = ['Python', 'PyTorch', 'ROS2', 'Computer Vision', 'GIS Data', 'C++', 'Go', 'Kubernetes', 'LLMs'];

  const filteredGuides = useMemo(() => {
    return guides.filter((guide) => {
      // Search
      const matchesSearch = 
        guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.primaryDomain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.researchInterests.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
        guide.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      // Department
      if (selectedDept !== 'All' && guide.department !== selectedDept) return false;

      // Tech skills
      if (selectedTech.length > 0) {
        const hasSkill = selectedTech.some((s) => 
          guide.technologies.includes(s) || 
          guide.researchInterests.some(i => i.toLowerCase().includes(s.toLowerCase()))
        );
        if (!hasSkill) return false;
      }

      // Availability
      if (availabilityFilter === 'Open' && guide.capacity.current >= guide.capacity.max) return false;
      if (availabilityFilter === 'Plentiful' && (guide.capacity.max - guide.capacity.current) < 2) return false;

      // Match Score
      if (guide.matchScore < minMatchScore) return false;

      return true;
    });
  }, [guides, searchQuery, selectedDept, selectedTech, availabilityFilter, minMatchScore]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDept('All');
    setSelectedTech([]);
    setAvailabilityFilter('All');
    setMinMatchScore(70);
  };

  const toggleSkill = (skill: string) => {
    setSelectedTech((prev) => 
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>AI Faculty Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Recommended Faculty Guides
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Showing mentors ranked by contextual match to <strong>"{currentProject.title}"</strong>.
          </p>
        </div>

        {/* Compare quick trigger */}
        {comparedGuideIds.length > 0 && (
          <div className="flex items-center gap-3 p-2 bg-indigo-50 border border-indigo-200 rounded-xl">
            <div className="text-xs text-indigo-900 font-semibold px-2">
              <strong>{comparedGuideIds.length}</strong> guide{comparedGuideIds.length > 1 ? 's' : ''} selected
            </div>
            <button
              id="view-comparison-matrix-btn"
              onClick={() => setActiveView('compare-guides')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors"
            >
              <Columns3 className="w-3.5 h-3.5" />
              <span>Compare Side-by-Side</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Layout: Filters Sidebar + Guide Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Filter Sidebar (3.5 Cols) */}
        <aside className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6 lg:sticky lg:top-20">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
              <span>Filter Guides</span>
            </div>
            <button
              id="reset-filters-btn"
              onClick={handleResetFilters}
              className="text-xs text-slate-500 hover:text-indigo-600 flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Search Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Keyword or Professor Name
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                id="guide-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, topic, or tech..."
                className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Department Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Academic Department
            </label>
            <select
              id="guide-department-filter"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            >
              {availableDepts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Minimum Match Score Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 uppercase tracking-wider">
                Min Match Score
              </span>
              <span className="font-bold text-indigo-600">{minMatchScore}%</span>
            </div>
            <input
              id="guide-min-score-slider"
              type="range"
              min="70"
              max="95"
              step="1"
              value={minMatchScore}
              onChange={(e) => setMinMatchScore(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>70%</span>
              <span>85%</span>
              <span>95%</span>
            </div>
          </div>

          {/* Capacity / Availability */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Mentee Capacity Availability
            </label>
            <div className="space-y-1.5">
              {[
                { id: 'All', label: 'All Faculty (Including Full)' },
                { id: 'Open', label: 'Has Open Mentee Slots (≥ 1)' },
                { id: 'Plentiful', label: 'High Availability (≥ 2 Open Slots)' }
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs cursor-pointer ${
                    availabilityFilter === opt.id ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="availFilter"
                    checked={availabilityFilter === opt.id}
                    onChange={() => setAvailabilityFilter(opt.id as any)}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Technical Skills Multi-Tags */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Technical Specializations
            </label>
            <div className="flex flex-wrap gap-1.5">
              {allAvailableSkills.map((skill) => {
                const isSelected = selectedTech.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>

        </aside>

        {/* Right Cards List (8 Cols) */}
        <main className="lg:col-span-8 space-y-6">
          
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Showing <strong>{filteredGuides.length}</strong> matching mentors</span>
            <span>Sorted by: <strong>AI Compatibility Match</strong></span>
          </div>

          {filteredGuides.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
              <Users className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-900">No matching faculty found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try loosening your minimum match score or clearing technical skill tags.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredGuides.map((guide) => {
                const isCompared = comparedGuideIds.includes(guide.id);
                const openSlots = guide.capacity.max - guide.capacity.current;

                return (
                  <div
                    key={guide.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all space-y-5"
                  >
                    
                    {/* Top Row: Avatar, Name, Dept, Score */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      
                      <div className="flex items-start gap-4">
                        <img
                          src={guide.avatar}
                          alt={guide.name}
                          className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-xs shrink-0"
                        />
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-slate-950">
                              {guide.name}
                            </h3>
                            <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700">
                              {guide.experienceYears} yrs exp
                            </span>
                          </div>
                          
                          <p className="text-xs text-slate-600 font-medium">
                            {guide.title} • {guide.department}
                          </p>
                          
                          <p className="text-[11px] text-slate-400">
                            {guide.campus}
                          </p>
                        </div>
                      </div>

                      {/* Match Score & Capacity Badges */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 shrink-0">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm font-black">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{guide.matchScore}% Match</span>
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          {openSlots > 0 ? (
                            <span className="text-emerald-600 font-semibold">
                              {openSlots} spot{openSlots > 1 ? 's' : ''} available ({guide.capacity.current}/{guide.capacity.max})
                            </span>
                          ) : (
                            <span className="text-amber-600 font-semibold">
                              Lab Full ({guide.capacity.current}/{guide.capacity.max})
                            </span>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Rationale Highlight Card */}
                    <div className="p-3.5 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-indigo-950 space-y-1">
                      <div className="font-bold text-indigo-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Why this is a strong match for your project:</span>
                      </div>
                      <p className="text-indigo-800 leading-relaxed">
                        {guide.whyMatchReason}
                      </p>
                    </div>

                    {/* Research Interests & Tech Badges */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-semibold text-slate-500 mr-1">
                          Research Focus:
                        </span>
                        {guide.researchInterests.slice(0, 3).map((item) => (
                          <span key={item} className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[11px] font-medium">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-semibold text-slate-500 mr-1">
                          Technologies:
                        </span>
                        {guide.technologies.slice(0, 5).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 text-[11px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Meta Stats Row & Actions */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4 text-slate-400" />
                          <span><strong>{guide.publicationsCount}</strong> Papers</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <span><strong>{guide.rating}</strong> ({guide.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-slate-400" />
                          <span><strong>{guide.successRate}%</strong> Success Rate</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Compare Toggle */}
                        <button
                          id={`toggle-compare-guide-${guide.id}`}
                          onClick={() => toggleCompareGuide(guide.id)}
                          className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                            isCompared
                              ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <Columns3 className="w-3.5 h-3.5" />
                          <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                        </button>

                        <button
                          id={`view-profile-guide-${guide.id}`}
                          onClick={() => {
                            setSelectedGuide(guide);
                            setActiveView('faculty-profile');
                          }}
                          className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
                        >
                          View Profile
                        </button>

                        <button
                          id={`send-request-guide-${guide.id}`}
                          onClick={() => openRequestModalForGuide(guide)}
                          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
                        >
                          Send Request
                        </button>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </main>

      </div>

    </div>
  );
};
