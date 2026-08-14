import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  User, 
  Sparkles, 
  Plus, 
  X, 
  ExternalLink, 
  Github, 
  Linkedin, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Briefcase, 
  FileText, 
  CheckCircle2, 
  Clock,
  Edit3
} from 'lucide-react';

export const StudentProfile: React.FC = () => {
  const { studentProfile, updateStudentProfile, currentProject, setActiveView, addToast } = useApp();

  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioInput, setBioInput] = useState(studentProfile.bio);
  const [newSkillInput, setNewSkillInput] = useState('');
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [newInterestInput, setNewInterestInput] = useState('');
  const [isAddingInterest, setIsAddingInterest] = useState(false);

  const handleSaveBio = () => {
    updateStudentProfile({ bio: bioInput });
    setIsEditingBio(false);
    addToast('success', 'Profile Updated', 'Student bio statement saved.');
  };

  const handleAddSkill = () => {
    if (newSkillInput.trim() && !studentProfile.technicalSkills.includes(newSkillInput.trim())) {
      updateStudentProfile({
        technicalSkills: [...studentProfile.technicalSkills, newSkillInput.trim()]
      });
      setNewSkillInput('');
      setIsAddingSkill(false);
      addToast('success', 'Skill Added', `Added ${newSkillInput.trim()} to technical inventory.`);
    }
  };

  const handleRemoveSkill = (skill: string) => {
    updateStudentProfile({
      technicalSkills: studentProfile.technicalSkills.filter((s) => s !== skill)
    });
  };

  const handleAddInterest = () => {
    if (newInterestInput.trim() && !studentProfile.researchInterests.includes(newInterestInput.trim())) {
      updateStudentProfile({
        researchInterests: [...studentProfile.researchInterests, newInterestInput.trim()]
      });
      setNewInterestInput('');
      setIsAddingInterest(false);
      addToast('success', 'Interest Added', `Added ${newInterestInput.trim()} to research topics.`);
    }
  };

  const handleRemoveInterest = (interest: string) => {
    updateStudentProfile({
      researchInterests: studentProfile.researchInterests.filter((i) => i !== interest)
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Hero Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <img
              src={studentProfile.avatar}
              alt={studentProfile.preferredName}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-white shadow-md shrink-0"
            />

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  {studentProfile.preferredName}
                </h1>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {studentProfile.academicLevel}
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-700">
                {studentProfile.degree} • {studentProfile.graduationYear}
              </p>

              <p className="text-xs text-slate-500">
                {studentProfile.campus} • GPA: <strong className="text-indigo-600 font-bold">{studentProfile.gpa}</strong>
              </p>

              {/* Linked Accounts */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={studentProfile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={studentProfile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => addToast('info', 'Public Profile Link', 'Public link copied to clipboard.')}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
            >
              View Public Profile
            </button>
          </div>

        </div>

        {/* Bio Narrative */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Researcher Statement
            </span>
            <button
              onClick={() => setIsEditingBio(!isEditingBio)}
              className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" />
              <span>{isEditingBio ? 'Cancel' : 'Edit Bio'}</span>
            </button>
          </div>

          {isEditingBio ? (
            <div className="space-y-2">
              <textarea
                value={bioInput}
                onChange={(e) => setBioInput(e.target.value)}
                rows={3}
                className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleSaveBio}
                className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <p className="text-sm text-slate-700 leading-relaxed">
              {studentProfile.bio}
            </p>
          )}
        </div>

      </div>

      {/* Grid: Technical Skills + Research Interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Technical Skills Inventory */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
              Technical Skills Inventory
            </h3>
            <button
              onClick={() => setIsAddingSkill(!isAddingSkill)}
              className="text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Skill</span>
            </button>
          </div>

          {isAddingSkill && (
            <div className="flex gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200">
              <input
                type="text"
                value={newSkillInput}
                onChange={(e) => setNewSkillInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleAddSkill(); }}
                placeholder="e.g. PyTorch, CUDA, React..."
                className="flex-1 text-xs p-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleAddSkill}
                className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
              >
                Save
              </button>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {studentProfile.technicalSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
              >
                <span>{skill}</span>
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="p-0.5 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
              Research Interests
            </h3>
            <button
              onClick={() => setIsAddingInterest(!isAddingInterest)}
              className="text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Topic</span>
            </button>
          </div>

          {isAddingInterest && (
            <div className="flex gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200">
              <input
                type="text"
                value={newInterestInput}
                onChange={(e) => setNewInterestInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleAddInterest(); }}
                placeholder="e.g. Graph Transformers..."
                className="flex-1 text-xs p-2 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleAddInterest}
                className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
              >
                Save
              </button>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {studentProfile.researchInterests.map((interest) => (
              <span
                key={interest}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-800 text-xs font-semibold border border-indigo-200/80"
              >
                <span>{interest}</span>
                <button
                  onClick={() => handleRemoveInterest(interest)}
                  className="p-0.5 hover:bg-indigo-200 rounded-full text-indigo-400 hover:text-indigo-700"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Career Interests & Target Domains */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
          Career Aspirations & Target Roles
        </h3>
        <div className="flex flex-wrap gap-2">
          {studentProfile.careerInterests.map((career) => (
            <span
              key={career}
              className="px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold border border-emerald-200 flex items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
              <span>{career}</span>
            </span>
          ))}
        </div>
      </div>

      {/* My Projects Portfolio Showcase */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              My Academic Projects
            </h3>
            <p className="text-xs text-slate-500">
              Active and past capstone / honors deliverables
            </p>
          </div>

          <button
            onClick={() => setActiveView('submit-project')}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Project Proposal</span>
          </button>
        </div>

        <div className="space-y-4">
          
          {/* Active Project */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                In Progress (65%)
              </span>
              <span className="text-xs text-slate-400">Assigned Guide: <strong>Dr. Marcus Thorne</strong></span>
            </div>

            <h4 className="text-sm font-bold text-slate-900">
              {currentProject.title}
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              {currentProject.problemStatement}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {currentProject.technologies.map((t) => (
                <span key={t} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] text-slate-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setActiveView('project-analysis')}
                className="text-xs font-semibold text-indigo-600 hover:underline"
              >
                View AI Analysis Report →
              </button>
            </div>
          </div>

          {/* Past Completed Project */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 opacity-85">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                Completed
              </span>
              <span className="text-xs text-slate-400">Junior Year Capstone</span>
            </div>

            <h4 className="text-sm font-bold text-slate-900">
              Campus Sustainability Dashboard & Energy Forecasting
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              Full-stack IoT dashboard visualizing building power load metrics with Prophet predictive time-series modeling.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
