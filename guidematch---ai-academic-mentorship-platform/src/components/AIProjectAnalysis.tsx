import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Award, 
  TrendingUp, 
  Clock, 
  Users, 
  Lightbulb, 
  Check, 
  ShieldCheck, 
  Download 
} from 'lucide-react';

export const AIProjectAnalysis: React.FC = () => {
  const { aiAnalysis, currentProject, setActiveView, addToast } = useApp();

  if (!aiAnalysis) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <Sparkles className="w-12 h-12 text-indigo-600 mx-auto" />
        <h2 className="text-xl font-bold text-slate-900">No Project Analyzed Yet</h2>
        <p className="text-slate-600 text-sm">Submit your proposal first to generate AI complexity benchmarks and guide recommendations.</p>
        <button
          onClick={() => setActiveView('submit-project')}
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
        >
          Go to Proposal Submission
        </button>
      </div>
    );
  }

  // Circular gauge SVG calculations for Level 1-5 (e.g. 4/5 = 80%)
  const percentage = (aiAnalysis.complexityLevel / 5) * 100;
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const handleExport = () => {
    addToast('success', 'Summary Exported', 'AI Evaluation report downloaded in PDF/Markdown format.');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI Neural Evaluation Complete</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            AI Project Analysis & Compatibility Report
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Evaluating: <strong>{aiAnalysis.projectTitle}</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="export-analysis-btn"
            onClick={handleExport}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>
          <button
            id="view-matched-guides-cta-top"
            onClick={() => setActiveView('recommended-guides')}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            <Users className="w-3.5 h-3.5" />
            <span>View Recommended Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* AI Synthesis Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Sparkles className="w-48 h-48 text-indigo-400" />
        </div>

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Executive AI Synthesis</span>
          </div>

          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
            "{aiAnalysis.summary}"
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>Est. Execution: <strong>{aiAnalysis.estimatedCompletionWeeks} Weeks</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Research Rigor: <strong>High Capstone Tier</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Complexity Radial Gauge + Required Tech Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Radial Complexity Gauge (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Complexity Benchmark
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700">
                Grade: Lvl {aiAnalysis.complexityLevel}
              </span>
            </div>

            {/* Circular Gauge */}
            <div className="flex flex-col items-center justify-center pt-6 pb-2">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  {/* Background Track */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    className="text-slate-100"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  {/* Active Progress */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    className="text-indigo-600 transition-all duration-1000 ease-out"
                    strokeWidth="12"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>

                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-slate-900">
                    Lvl {aiAnalysis.complexityLevel}
                  </span>
                  <span className="text-[11px] font-semibold text-indigo-600">
                    / Level 5 Max
                  </span>
                </div>
              </div>

              <p className="text-center text-xs font-bold text-slate-800 mt-3">
                {aiAnalysis.complexityLabel}
              </p>
            </div>
          </div>

          {/* Theoretical vs Implementation Bars */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600">Theoretical Depth</span>
                <span className="font-bold text-slate-900">{aiAnalysis.theoreticalDepth}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${aiAnalysis.theoreticalDepth}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600">Practical Implementation Depth</span>
                <span className="font-bold text-slate-900">{aiAnalysis.practicalImplementation}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${aiAnalysis.practicalImplementation}%` }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Domain & Technologies Breakdown (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Detected Domains & Technologies */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
              Detected Domain Classification & Toolchains
            </h3>

            {/* Domains */}
            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-2">
                Primary Research Domains
              </span>
              <div className="flex flex-wrap gap-2">
                {aiAnalysis.detectedDomains.map((domain) => (
                  <span
                    key={domain}
                    className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-800 text-xs font-semibold border border-indigo-200/80"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            {/* Required Technologies */}
            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-2">
                Core Required Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {aiAnalysis.requiredTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Suggested Stack Upgrades */}
            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-2">
                AI-Recommended Companion Tooling
              </span>
              <div className="flex flex-wrap gap-2">
                {aiAnalysis.recommendedTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200"
                  >
                    + {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Ideal Guide Criteria Checklist Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-indigo-600">
              <Award className="w-5 h-5" />
              <h3 className="text-sm font-bold text-slate-900">
                Ideal Faculty Guide Criteria
              </h3>
            </div>

            <div className="space-y-2.5">
              {aiAnalysis.idealGuideCriteria.map((crit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed font-medium">{crit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Methodology Strengths vs AI Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Strengths */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-emerald-600">
            <CheckCircle2 className="w-5 h-5" />
            <h3 className="text-sm font-bold text-slate-900">
              Methodology Strengths
            </h3>
          </div>
          <ul className="space-y-2 text-xs text-slate-600">
            {aiAnalysis.methodologyStrengths.map((str, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Improvements */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-indigo-600">
            <Lightbulb className="w-5 h-5" />
            <h3 className="text-sm font-bold text-slate-900">
              Refinements for Faculty Pitching
            </h3>
          </div>
          <ul className="space-y-2 text-xs text-slate-600">
            {aiAnalysis.recommendedImprovements.map((imp, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                <span>{imp}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-indigo-950">
            Ready to Connect with Matched Advisors?
          </h4>
          <p className="text-xs text-indigo-800">
            We discovered 4 faculty members matching your exact research requirements.
          </p>
        </div>

        <button
          id="view-matched-guides-cta-bottom"
          onClick={() => setActiveView('recommended-guides')}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/30 transition-all shrink-0 flex items-center gap-2"
        >
          <Users className="w-4 h-4" />
          <span>Browse Matching Faculty Guides</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
