import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AcademicDomain, ProjectProposal } from '../types';
import { 
  Sparkles, 
  FileText, 
  Layers, 
  Cpu, 
  Plus, 
  X, 
  ArrowRight, 
  Save, 
  CheckCircle2, 
  HelpCircle,
  Wand2,
  Loader2
} from 'lucide-react';

const DOMAIN_OPTIONS: AcademicDomain[] = [
  'Deep Learning & AI',
  'Computer Vision',
  'Natural Language Processing',
  'Smart Cities & IoT',
  'Distributed Systems & Cloud',
  'Robotics & Autonomous Systems',
  'Cybersecurity & Privacy',
  'Bioinformatics & Health Tech',
  'Data Science & Analytics'
];

export const SubmitProjectProposal: React.FC = () => {
  const { currentProject, updateCurrentProject, runAiProjectAnalysis, isAnalyzing, addToast } = useApp();

  const [formData, setFormData] = useState<ProjectProposal>({ ...currentProject });
  const [techInput, setTechInput] = useState('');
  const [isEnhancingWithAI, setIsEnhancingWithAI] = useState(false);

  const handleAddTech = () => {
    if (!techInput.trim()) return;
    if (!formData.technologies.includes(techInput.trim())) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, techInput.trim()]
      });
    }
    setTechInput('');
  };

  const handleRemoveTech = (tech: string) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((t) => t !== tech)
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTech();
    }
  };

  const handleEnhanceWithAI = () => {
    setIsEnhancingWithAI(true);
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        methodology: prev.methodology + '\n\nAdditionally, the pipeline leverages adaptive graph convolution filters with Kalman state estimators to ensure high-fidelity fault tolerance across sparse physical detector nodes.'
      }));
      setIsEnhancingWithAI(false);
      addToast('success', 'AI Enhanced', 'Added technical rigor and fault-tolerance methodology specs.');
    }, 800);
  };

  const handleSaveDraft = (e: React.FormEvent) => {
    e.preventDefault();
    updateCurrentProject(formData);
    addToast('info', 'Draft Saved', 'Your project proposal draft has been saved locally.');
  };

  const handleSubmitAndAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      addToast('warning', 'Title Required', 'Please enter a project title.');
      return;
    }
    updateCurrentProject(formData);
    await runAiProjectAnalysis(formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1">
          <FileText className="w-4 h-4" />
          <span>Academic Project Proposal Formulation</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Submit Project Proposal
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Provide your research narrative, objectives, and technology stack. Our AI will analyze project complexity and match you with ideal faculty advisors.
        </p>
      </div>

      {/* AI Optimization Banner */}
      <div className="bg-linear-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-500/40 text-indigo-200">
                <Sparkles className="w-4 h-4" />
              </span>
              <h3 className="text-sm font-bold text-white">
                AI Project Optimizer Active
              </h3>
            </div>
            <p className="text-xs text-indigo-200 leading-relaxed max-w-xl">
              Our neural matching engine evaluates vocabulary depth, methodology soundness, and research overlap with over 500+ faculty publications.
            </p>
          </div>

          <button
            type="button"
            onClick={handleSubmitAndAnalyze}
            disabled={isAnalyzing}
            className="shrink-0 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl text-xs font-bold transition-all shadow-xs disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Analyzing Project...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Analyze My Project</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmitAndAnalyze} className="space-y-8">
        
        {/* Section 1: Core Details */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Core Details</h2>
              <p className="text-xs text-slate-500">Essential identifiers for your project and academic standing</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Project Title <span className="text-rose-500">*</span>
              </label>
              <input
                id="proposal-title-input"
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Real-time Traffic Prediction using LSTM & ST-GNN"
                className="w-full text-sm font-medium p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Research Domain
                </label>
                <select
                  id="proposal-domain-select"
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value as AcademicDomain })}
                  className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                >
                  {DOMAIN_OPTIONS.map((domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Expected Timeline
                </label>
                <select
                  id="proposal-timeline-select"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value as any })}
                  className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                >
                  <option>1 Semester</option>
                  <option>2 Semesters</option>
                  <option>Full Year</option>
                  <option>Summer Intensive</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Academic Level
                </label>
                <select
                  id="proposal-level-select"
                  value={formData.academicLevel}
                  onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value as any })}
                  className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                >
                  <option>Undergraduate Capstone</option>
                  <option>Master Thesis</option>
                  <option>Ph.D. Dissertation</option>
                  <option>Honors Research</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Research Narrative */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Research Narrative</h2>
                <p className="text-xs text-slate-500">Problem statement and methodology specifications</p>
              </div>
            </div>

            <button
              type="button"
              id="auto-enhance-ai-btn"
              onClick={handleEnhanceWithAI}
              disabled={isEnhancingWithAI}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold transition-colors disabled:opacity-50"
            >
              {isEnhancingWithAI ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Wand2 className="w-3.5 h-3.5" />
              )}
              <span>Auto-Enhance with AI</span>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Problem Statement & Research Question <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="proposal-problem-statement"
                rows={3}
                value={formData.problemStatement}
                onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                placeholder="Describe the scientific or engineering problem your project aims to address..."
                className="w-full text-xs text-slate-800 p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 leading-relaxed"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Project Description & Methodology <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="proposal-methodology"
                rows={4}
                value={formData.methodology}
                onChange={(e) => setFormData({ ...formData, methodology: e.target.value })}
                placeholder="Outline your planned technical approach, models, experimental testbeds, and datasets..."
                className="w-full text-xs text-slate-800 p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 leading-relaxed"
                required
              />
            </div>
          </div>
        </div>

        {/* Section 3: Mentorship & Technical Needs */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Mentorship & Technical Needs</h2>
              <p className="text-xs text-slate-500">Specify tooling, libraries, and preferred advising style</p>
            </div>
          </div>

          {/* Technologies Tag Builder */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Required Technologies & Toolchains
            </label>

            <div className="flex items-center gap-2">
              <input
                type="text"
                id="proposal-tech-input"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a technology (e.g. PyTorch, ROS2, GIS Data, Redis) and press Enter"
                className="flex-1 text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                id="proposal-add-tech-btn"
                onClick={handleAddTech}
                className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>

            {/* Pill Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {formData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-200/80 text-indigo-800 rounded-full text-xs font-medium"
                >
                  <span>{tech}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTech(tech)}
                    className="p-0.5 rounded-full hover:bg-indigo-200/60 text-indigo-600 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Guide Preference Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Preferred Guide Expertise Level
              </label>
              <div className="space-y-2">
                {[
                  { id: 'Academic Researcher', label: 'Academic Researcher', desc: 'Focus on publications, theoretical rigor & thesis defense' },
                  { id: 'Industry Professional', label: 'Industry Professional', desc: 'Focus on production deployability & engineering best practices' },
                  { id: 'Either', label: 'Open to Either', desc: 'Flexible advisor alignment' }
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      formData.preferredGuideLevel === opt.id
                        ? 'bg-indigo-50/70 border-indigo-300'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="guideLevel"
                      checked={formData.preferredGuideLevel === opt.id}
                      onChange={() => setFormData({ ...formData, preferredGuideLevel: opt.id as any })}
                      className="mt-0.5 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{opt.label}</p>
                      <p className="text-[11px] text-slate-500">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Mentorship Meeting Style
              </label>
              <div className="space-y-2">
                {[
                  { id: 'Hands-on Weekly', label: 'Hands-on Weekly', desc: 'Weekly 1-on-1 sprint reviews and architecture deep dives' },
                  { id: 'Bi-weekly Strategic', label: 'Bi-weekly Strategic', desc: 'Every 2 weeks with asynchronous code and paper reviews' },
                  { id: 'Milestone-based Independent', label: 'Milestone-based Independent', desc: 'High autonomy with checkpoint validations' }
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      formData.mentorshipStyle === opt.id
                        ? 'bg-indigo-50/70 border-indigo-300'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="mentorStyle"
                      checked={formData.mentorshipStyle === opt.id}
                      onChange={() => setFormData({ ...formData, mentorshipStyle: opt.id as any })}
                      className="mt-0.5 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{opt.label}</p>
                      <p className="text-[11px] text-slate-500">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            id="proposal-save-draft-btn"
            onClick={handleSaveDraft}
            className="flex items-center gap-1.5 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Draft</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              id="proposal-analyze-btn"
              disabled={isAnalyzing}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/30 transition-all hover:translate-y-[-1px] disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Computing AI Match Weights...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Submit & Run AI Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

      </form>

    </div>
  );
};
