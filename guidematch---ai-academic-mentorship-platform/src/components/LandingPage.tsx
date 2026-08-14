import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Star, 
  Compass, 
  Users, 
  Award, 
  Layers, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  Cpu,
  Target,
  Zap
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setActiveView, setUserRole, guides, openRequestModalForGuide } = useApp();
  
  // Interactive test preview state
  const [testDomain, setTestDomain] = useState<'Deep Learning' | 'Robotics' | 'NLP' | 'Distributed Systems'>('Deep Learning');
  
  const sampleMatchByDomain = {
    'Deep Learning': {
      title: 'Autonomous Drone Navigation in GPS-Denied Corridors',
      domain: 'Deep Learning & Edge AI',
      guide: guides[0], // Dr. Marcus Thorne
      score: 98,
      tags: ['PyTorch', 'ROS2', 'Spatio-Temporal GNN', 'GIS'],
      reason: 'Specializes in spatio-temporal AI and real-time robotic sensor streams.'
    },
    'Robotics': {
      title: 'Sub-millisecond Visual SLAM on Edge Hardware',
      domain: 'Computer Vision & Robotics',
      guide: guides[1], // Dr. Elena Rostova
      score: 96,
      tags: ['C++', 'TensorRT', 'OpenCV', 'Micro-UAV'],
      reason: '14+ years research in edge computer vision and autonomous robotics perception.'
    },
    'NLP': {
      title: 'Multi-Agent RAG over Scientific Literature',
      domain: 'Natural Language Processing',
      guide: guides[2], // Dr. Sarah Chen
      score: 95,
      tags: ['LangChain', 'vLLM', 'HuggingFace', 'FastAPI'],
      reason: 'NSF CAREER awardee in LLMs and dynamic knowledge graph retrieval.'
    },
    'Distributed Systems': {
      title: 'High-Throughput Geo-Distributed Telemetry Broker',
      domain: 'Cloud Systems & Big Data',
      guide: guides[3], // Dr. James Lin
      score: 92,
      tags: ['Go', 'Kafka', 'Kubernetes', 'Redis'],
      reason: 'Expert in streaming pipelines and sub-millisecond cloud backends.'
    }
  }[testDomain];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden border-b border-slate-200/80 bg-linear-to-b from-white via-indigo-50/20 to-slate-50">
        
        {/* Background decorative grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                <span>Next-Gen Academic Matching Powered by AI</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                Find the Right <span className="text-indigo-600">Guide</span> for Your Project
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                Match with faculty mentors based on your project goals, research domain, and tech stack powered by AI intelligence. Eliminate guesswork and secure expert guidance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="hero-find-guide-btn"
                  onClick={() => {
                    setUserRole('student');
                    setActiveView('submit-project');
                  }}
                  className="flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all hover:translate-y-[-1px]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Find My Guide</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </button>

                <button
                  id="hero-explore-faculty-btn"
                  onClick={() => {
                    setActiveView('recommended-guides');
                  }}
                  className="flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold rounded-xl border border-slate-200 shadow-xs transition-all"
                >
                  <Users className="w-4 h-4 text-slate-500" />
                  <span>Explore Faculty Directory</span>
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 flex items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Faculty Directory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Real-time Workload Balancer</span>
                </div>
              </div>

            </div>

            {/* Right Column: Live Interactive Match Preview Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/90 relative group hover:border-indigo-300 transition-all">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Live Match Simulation
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {(['Deep Learning', 'Robotics', 'NLP', 'Distributed Systems'] as const).map((d) => (
                      <button
                        key={d}
                        onClick={() => setTestDomain(d)}
                        className={`px-2 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                          testDomain === d ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {d.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Input Mock */}
                <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                  <span className="text-[10px] font-bold uppercase text-indigo-600 tracking-wider block mb-1">
                    Student Project Proposal
                  </span>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {sampleMatchByDomain.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {sampleMatchByDomain.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Match Result Output */}
                <div className="mt-4 p-4 bg-indigo-50/70 rounded-xl border border-indigo-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={sampleMatchByDomain.guide.avatar}
                        alt={sampleMatchByDomain.guide.name}
                        className="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-xs"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {sampleMatchByDomain.guide.name}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {sampleMatchByDomain.guide.department}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-black text-indigo-600 leading-none">
                        {sampleMatchByDomain.score}%
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                        Top Match
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 bg-white/80 p-2.5 rounded-lg border border-indigo-100/60 leading-relaxed">
                    <strong>Why it matches:</strong> {sampleMatchByDomain.reason}
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>Capacity: <strong>{sampleMatchByDomain.guide.capacity.current}/{sampleMatchByDomain.guide.capacity.max}</strong> slots filled</span>
                    </div>
                    <button
                      onClick={() => openRequestModalForGuide(sampleMatchByDomain.guide)}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      Request as Guide
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight">500+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">Active Faculty Mentors</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight">2,400+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">Successful Project Matches</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight">98%</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">Matching Satisfaction</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight">4.9 / 5</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">Average Mentee Rating</div>
            </div>

          </div>
        </div>
      </section>

      {/* How GuideMatch Works (3 Steps) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Streamlined Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
              How GuideMatch Works
            </h2>
            <p className="text-slate-600 text-base">
              A frictionless academic journey from your initial project idea to finding the ideal research mentor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs relative flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Submit Project Details
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Provide your project title, target domain, problem statement, and requested tech stack. Our form formats everything cleanly for faculty review.
                </p>
              </div>
              <div className="pt-6 flex items-center text-xs font-semibold text-indigo-600 gap-1">
                <span>Structured Proposals</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 border border-indigo-200 shadow-xs relative flex flex-col justify-between hover:shadow-md transition-shadow ring-2 ring-indigo-600/10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-indigo-600/20">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  AI Smart Matching
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our algorithm evaluates semantic compatibility against faculty publications, ongoing grants, research interests, and real-time workload capacity.
                </p>
              </div>
              <div className="pt-6 flex items-center text-xs font-semibold text-indigo-600 gap-1">
                <span>Multi-Variable Scoring</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs relative flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Connect & Collaborate
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Send tailored mentorship requests with a single click, compare multiple faculty guides side-by-side, and track your milestone schedule seamlessly.
                </p>
              </div>
              <div className="pt-6 flex items-center text-xs font-semibold text-indigo-600 gap-1">
                <span>Real-Time Request Tracker</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose GuideMatch? Bento Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Platform Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
              Why Academic Departments Choose GuideMatch
            </h2>
            <p className="text-slate-600 text-base">
              Built specifically for academic institutions to eliminate advising friction and supercharge student capstone outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1: Large */}
            <div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Contextual AI Compatibility Scoring
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                  Unlike keyword search engines, our engine reads project abstracts, detects underlying architectural requirements, and matches against recent conference publications and verified research labs.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
                <div>
                  <span className="block text-2xl font-bold text-slate-900">45+</span>
                  <span className="text-xs text-slate-500">Research Domains</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-slate-900">&lt; 3 mins</span>
                  <span className="text-xs text-slate-500">Matching Time</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-indigo-600">100%</span>
                  <span className="text-xs text-slate-500">Curated Faculty</span>
                </div>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Workload & Capacity Balancer
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Prevent faculty burnout by displaying active mentoring capacity in real-time. Students know exactly who has open slots before sending requests.
                </p>
              </div>
              <div className="pt-6">
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                  <span className="text-slate-600">Open Mentee Slots:</span>
                  <span className="font-bold text-emerald-600">2 Available</span>
                </div>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Verified Publications & Grants
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Direct access to professors' recent papers, citation metrics, lab focus areas, and previous student success stories.
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-indigo-600">
                Peer-Reviewed Indexing
              </div>
            </div>

            {/* Bento Card 4: Large */}
            <div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Side-by-Side Faculty Comparison Matrix
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                  Evaluate multiple mentors simultaneously across match score, past student outcomes, meeting frequency, and technical toolchains.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700">
                  Meeting Cadence Comparison
                </span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700">
                  Supervised Project History
                </span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700">
                  Student Feedback Ratings
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Academic Success Stories */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Verified Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
              Academic Success Stories
            </h2>
            <p className="text-slate-600 text-base">
              Hear from students and professors who built published, award-winning capstones together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "GuideMatch paired me with Dr. Marcus Thorne for my thesis on Graph Neural Networks. His guidance led to our workshop paper getting accepted at NeurIPS 2024!"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Student"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Emma Watson</h4>
                  <p className="text-[11px] text-slate-500">M.S. Computer Science • Stanford</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "As a faculty member, receiving well-structured project proposals with pre-screened tech stacks saves me hours each semester. The match accuracy is astonishing."
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                  alt="Faculty"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Dr. Elena Rostova</h4>
                  <p className="text-[11px] text-slate-500">Chair of Computer Vision • ECE Dept</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "The side-by-side comparison tool helped me choose between two great professors with complementary domain focus. Secured my capstone guide in less than 48 hours."
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Student"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Julian Alvarez</h4>
                  <p className="text-[11px] text-slate-500">B.S. Robotics • Class of 2024</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto text-white shadow-lg shadow-indigo-600/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Find Your Project Guide?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            Submit your research narrative or explore available faculty in your department in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                setUserRole('student');
                setActiveView('submit-project');
              }}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-md"
            >
              Start Project Proposal
            </button>
            <button
              onClick={() => setActiveView('recommended-guides')}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-all"
            >
              Browse Faculty Directory
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
