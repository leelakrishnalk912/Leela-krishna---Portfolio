import React from 'react';
import { HACKATHON_PILLARS } from '../data/portfolioData';
import { Target, Clock, Users, Presentation, Hammer, Zap, GitCommit, CheckCircle2 } from 'lucide-react';

export const Hackathons: React.FC = () => {
  const getPillarStyles = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          icon: <Target className="w-5 h-5 text-blue-600" aria-hidden="true" />,
          bg: 'bg-gradient-to-br from-blue-50/70 via-indigo-50/20 to-white',
          border: 'border-blue-200/80 hover:border-blue-400',
          numberColor: 'text-blue-500'
        };
      case 1:
        return {
          icon: <Clock className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
          bg: 'bg-gradient-to-br from-indigo-50/70 via-purple-50/20 to-white',
          border: 'border-indigo-200/80 hover:border-indigo-400',
          numberColor: 'text-indigo-500'
        };
      case 2:
        return {
          icon: <Users className="w-5 h-5 text-emerald-600" aria-hidden="true" />,
          bg: 'bg-gradient-to-br from-emerald-50/70 via-teal-50/20 to-white',
          border: 'border-emerald-200/80 hover:border-emerald-400',
          numberColor: 'text-emerald-500'
        };
      case 3:
        return {
          icon: <Presentation className="w-5 h-5 text-amber-600" aria-hidden="true" />,
          bg: 'bg-gradient-to-br from-amber-50/70 via-orange-50/20 to-white',
          border: 'border-amber-200/80 hover:border-amber-400',
          numberColor: 'text-amber-500'
        };
      case 4:
        return {
          icon: <Hammer className="w-5 h-5 text-purple-600" aria-hidden="true" />,
          bg: 'bg-gradient-to-br from-purple-50/70 via-pink-50/20 to-white',
          border: 'border-purple-200/80 hover:border-purple-400',
          numberColor: 'text-purple-500'
        };
      default:
        return {
          icon: <Target className="w-5 h-5 text-blue-600" aria-hidden="true" />,
          bg: 'bg-white',
          border: 'border-slate-200',
          numberColor: 'text-slate-400'
        };
    }
  };

  return (
    <section id="experience" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Hackathons & Ideathons
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Learning Through Building
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            As a first-semester student, hackathons and ideathons are my primary testing ground for practical problem solving, team collaboration, and rapid prototyping.
          </p>
        </div>

        {/* The 5 Key Pillars Grid with vibrant pastel themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHON_PILLARS.map((pillar, idx) => {
            const styles = getPillarStyles(idx);
            return (
              <div
                key={pillar.title}
                className={`${styles.bg} rounded-3xl p-6 border ${styles.border} shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center shadow-2xs">
                      {styles.icon}
                    </div>
                    <span className={`font-mono text-xs font-bold ${styles.numberColor}`}>
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wide">
                    Core Competency
                  </span>
                  <span className="text-xs font-bold text-slate-800 mt-0.5 block">
                    {pillar.takeaway}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authentic Statement & Sprint Flow Banner with deep colorful gradient */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 text-white shadow-xl shadow-indigo-950/20 border border-indigo-900/50">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                Hands-on Engineering Philosophy
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Why Ideathons & Hackathons Accelerate Growth
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                In competitive sprints, software isn't just theory—it is a live tool to resolve concrete friction. Working under constraints teaches real engineering discipline: scoping MVP features, collaborating with peers, and clearly explaining the technical architecture.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-3 text-xs text-slate-200 shrink-0 w-full lg:w-72 shadow-inner">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">Rapid Prototyping Under 36h</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-blue-400/20 text-blue-300 flex items-center justify-center shrink-0">
                  <GitCommit className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">Iterative Logic & Git Versioning</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">Zero Fake Accolades, 100% Practice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
