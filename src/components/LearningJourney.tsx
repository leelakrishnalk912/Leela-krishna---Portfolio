import React, { useState } from 'react';
import { ROADMAP_STEPS } from '../data/portfolioData';
import { ArrowDown, CheckCircle2, Clock, Sparkles, Target, Compass } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const activeStepData = ROADMAP_STEPS.find((s) => s.step === selectedStep) || ROADMAP_STEPS[0];

  const getStepColor = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return { text: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-300', dot: 'bg-blue-500' };
      case 2:
        return { text: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-300', dot: 'bg-indigo-500' };
      case 3:
        return { text: 'text-teal-600', bg: 'bg-teal-100', border: 'border-teal-300', dot: 'bg-teal-500' };
      case 4:
        return { text: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-300', dot: 'bg-purple-500' };
      case 5:
        return { text: 'text-pink-600', bg: 'bg-pink-100', border: 'border-pink-300', dot: 'bg-pink-500' };
      case 6:
        return { text: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-300', dot: 'bg-amber-500' };
      default:
        return { text: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-300', dot: 'bg-indigo-500' };
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-purple-50/20 to-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
            Evolution & Vision
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            My Learning Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            A roadmap showing my learning direction from computer science fundamentals to AI Engineering. This illustrates my learning path rather than claimed mastery.
          </p>
        </div>

        {/* Interactive Step Bar with colorful active gradients */}
        <div className="mb-10 p-2 bg-white rounded-3xl border border-indigo-100 shadow-md shadow-indigo-500/5 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[620px] gap-2 p-1">
            {ROADMAP_STEPS.map((step) => {
              const isSelected = selectedStep === step.step;
              const isCurrent = step.status === 'current';
              const isInProgress = step.status === 'in-progress';
              const colors = getStepColor(step.step);

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setSelectedStep(step.step)}
                  className={`flex-1 px-3.5 py-3 rounded-2xl text-left transition-all relative ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className={`font-mono font-bold ${isSelected ? 'text-white/80' : colors.text}`}>
                      0{step.step}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        isSelected
                          ? 'text-cyan-200'
                          : isCurrent
                          ? 'text-blue-600'
                          : isInProgress
                          ? 'text-amber-600'
                          : 'text-slate-400'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                  <span className="block text-xs font-bold truncate">
                    {step.stage}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Spotlight Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-indigo-100 shadow-lg shadow-indigo-500/5 mb-12 ring-1 ring-indigo-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                  STAGE 0{activeStepData.step}
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Status: {activeStepData.status}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {activeStepData.stage}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                {activeStepData.description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wide">
                  Curriculum & Core Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStepData.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-xs font-semibold text-indigo-900 bg-indigo-50/80 rounded-xl border border-indigo-200/80 shadow-2xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-white p-5 rounded-2xl border border-indigo-100 space-y-3">
              <div className="flex items-center gap-2 text-indigo-900">
                <Target className="w-4 h-4 text-indigo-600" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Long-Term Goal</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Step-by-step evolution toward an AI Engineer capable of designing, building, and deploying real-world solutions that create actual user value.
              </p>
              <div className="text-[11px] font-mono text-indigo-600 font-semibold pt-2 border-t border-indigo-100">
                Active Year: 2026 · College Fresher
              </div>
            </div>
          </div>
        </div>

        {/* Visual Flowchart Stack */}
        <div className="max-w-xl mx-auto space-y-2">
          {ROADMAP_STEPS.map((step, idx) => {
            const isSelected = selectedStep === step.step;
            const colors = getStepColor(step.step);

            return (
              <div key={step.stage}>
                <div
                  onClick={() => setSelectedStep(step.step)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-indigo-500 shadow-md ring-1 ring-indigo-400/30'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
                    <span className="text-xs font-mono font-bold opacity-70">0{step.step}</span>
                    <span className="text-xs sm:text-sm font-bold">{step.stage}</span>
                  </div>
                  <span className={`text-[11px] font-semibold font-mono px-2 py-0.5 rounded-md ${
                    isSelected ? 'text-cyan-300 bg-white/10' : `${colors.text} ${colors.bg}`
                  }`}>
                    {step.status}
                  </span>
                </div>
                {idx < ROADMAP_STEPS.length - 1 && (
                  <div className="flex justify-center py-1.5">
                    <ArrowDown className="w-4 h-4 text-indigo-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
