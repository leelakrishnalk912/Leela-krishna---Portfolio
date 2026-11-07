import React, { useState } from 'react';
import { BookOpen, Compass, Code, Lightbulb, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, CURRENTLY_LEARNING_PIPELINE } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const stageThemes = [
    {
      border: 'border-blue-300',
      activeBg: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white',
      badgeBg: 'bg-blue-100 text-blue-700',
      iconColor: 'text-blue-600',
      checkColor: 'text-blue-600'
    },
    {
      border: 'border-teal-300',
      activeBg: 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white',
      badgeBg: 'bg-teal-100 text-teal-700',
      iconColor: 'text-teal-600',
      checkColor: 'text-teal-600'
    },
    {
      border: 'border-purple-300',
      activeBg: 'bg-gradient-to-r from-purple-500 to-violet-600 text-white',
      badgeBg: 'bg-purple-100 text-purple-700',
      iconColor: 'text-purple-600',
      checkColor: 'text-purple-600'
    },
    {
      border: 'border-amber-300',
      activeBg: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white',
      badgeBg: 'bg-amber-100 text-amber-800',
      iconColor: 'text-amber-600',
      checkColor: 'text-amber-600'
    }
  ];

  const stageDetails = [
    {
      topics: ['Variables & Data Types', 'Conditional Logic (if/else)', 'Loops (while/for)', 'Functions & Modular Design'],
      practicalGoal: 'Write robust console applications with user input validation.'
    },
    {
      topics: ['HTML5 Semantic Elements', 'CSS3 Layouts & Responsive Flexbox', 'JavaScript Fundamentals', 'DOM Manipulation'],
      practicalGoal: 'Build clean, accessible web interfaces for software.'
    },
    {
      topics: ['Prompt Engineering Paradigms', 'LLM API Integration', 'Zero-shot / Few-shot Techniques', 'Practical AI Productivity'],
      practicalGoal: 'Understand modern generative workflows without relying on buzzwords.'
    },
    {
      topics: ['Linear Algebra & Matrices', 'Probability & Statistics', 'Vector Spaces', 'Introductory ML Model Concepts'],
      practicalGoal: 'Master the rigorous mathematical foundation behind machine learning.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Background & Direction
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            A first-semester engineering student focused on genuine fundamentals, steady practice, and practical software engineering.
          </p>
        </div>

        {/* Narrative & Visual Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed">
            {PERSONAL_INFO.detailedBio.map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Working Philosophy with subtle colorful gradients */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-white border border-blue-100 hover:border-blue-200 transition-colors shadow-2xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Code className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Concept to Code
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reinforcing programming principles by building functional console programs, handling errors, and validating user inputs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50/70 via-pink-50/30 to-white border border-purple-100 hover:border-purple-200 transition-colors shadow-2xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Lightbulb className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Real-World Mindset
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aiming to harness AI not as abstract hype, but as reliable software tools that solve concrete real-world friction.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Currently Learning Progression (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-indigo-100 shadow-lg shadow-indigo-500/5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-slate-900 mb-1">
                <Compass className="w-4 h-4 text-indigo-600" aria-hidden="true" />
                <h3 className="text-sm font-bold tracking-tight text-slate-900">
                  Currently Learning Pipeline
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Click any stage below to inspect syllabus topics and active focus:
              </p>
            </div>

            {/* Interactive Stage Selector with colorful themes */}
            <div className="space-y-2.5">
              {CURRENTLY_LEARNING_PIPELINE.map((stage, idx) => {
                const isSelected = activeStageIndex === idx;
                const theme = stageThemes[idx];
                return (
                  <button
                    key={stage.name}
                    type="button"
                    onClick={() => setActiveStageIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? `${theme.activeBg} shadow-md`
                        : 'bg-slate-50/80 hover:bg-white border-slate-200/80 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-700 shadow-2xs'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold">{stage.name}</h4>
                        <p className={`text-[11px] ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                          {stage.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs font-medium ${isSelected ? 'text-white' : 'text-slate-600'}`}>
                        {stage.status}
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white rotate-90' : 'text-slate-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stage Detail Card */}
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 font-mono">
                  {CURRENTLY_LEARNING_PIPELINE[activeStageIndex].name} Curriculum:
                </span>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${stageThemes[activeStageIndex].badgeBg}`}>
                  Stage 0{activeStageIndex + 1}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {stageDetails[activeStageIndex].topics.map((topic) => (
                  <div key={topic} className="flex items-center gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${stageThemes[activeStageIndex].iconColor}`} aria-hidden="true" />
                    <span className="truncate">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Target Outcome: </span>
                {stageDetails[activeStageIndex].practicalGoal}
              </div>
            </div>

            {/* Educational Snapshot */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3 text-xs text-slate-600">
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                  <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    B.Tech in Computer Science & Engineering
                  </p>
                  <p className="text-slate-500">
                    Specialization: Artificial Intelligence & Machine Learning · 1st Semester
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
