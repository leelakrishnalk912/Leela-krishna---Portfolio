import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';
import { Code2, Globe, Cpu, Compass, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const categories = [
    { label: 'All', count: SKILLS_DATA.length, color: 'text-indigo-600' },
    { label: 'Programming', count: SKILLS_DATA.filter(s => s.category === 'Programming').length, color: 'text-blue-600' },
    { label: 'Web Development', count: SKILLS_DATA.filter(s => s.category === 'Web Development').length, color: 'text-emerald-600' },
    { label: 'AI', count: SKILLS_DATA.filter(s => s.category === 'AI').length, color: 'text-purple-600' },
    { label: 'Foundations & Practices', count: SKILLS_DATA.filter(s => s.category === 'Foundations & Practices').length, color: 'text-amber-600' }
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case 'Programming':
        return {
          icon: <Code2 className="w-4 h-4 text-blue-600" aria-hidden="true" />,
          iconBg: 'bg-blue-100/80',
          badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
          hoverBorder: 'hover:border-blue-300'
        };
      case 'Web Development':
        return {
          icon: <Globe className="w-4 h-4 text-emerald-600" aria-hidden="true" />,
          iconBg: 'bg-emerald-100/80',
          badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
          hoverBorder: 'hover:border-emerald-300'
        };
      case 'AI':
        return {
          icon: <Cpu className="w-4 h-4 text-purple-600" aria-hidden="true" />,
          iconBg: 'bg-purple-100/80',
          badgeColor: 'text-purple-700 bg-purple-50 border-purple-200',
          hoverBorder: 'hover:border-purple-300'
        };
      default:
        return {
          icon: <Compass className="w-4 h-4 text-amber-600" aria-hidden="true" />,
          iconBg: 'bg-amber-100/80',
          badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
          hoverBorder: 'hover:border-amber-300'
        };
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Technical Competencies
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Skills & Current Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Honest competency indicators reflecting my first-semester learning stage. No fabricated percentages or mastery claims—only genuine practice.
          </p>
        </div>

        {/* Colorful Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/90 backdrop-blur-xs rounded-2xl border border-slate-200 shadow-2xs max-w-fit mb-8" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-[11px] ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Colorful Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill: SkillItem) => {
            const isExpanded = activeSkill === skill.name;
            const styles = getCategoryStyles(skill.category);
            return (
              <div
                key={skill.name}
                onClick={() => setActiveSkill(isExpanded ? null : skill.name)}
                className={`bg-white rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'border-indigo-600 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-600/10'
                    : `border-slate-200/90 ${styles.hoverBorder} hover:shadow-md hover:shadow-indigo-500/5`
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl ${styles.iconBg} flex items-center justify-center`}>
                        {styles.icon}
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{skill.name}</h3>
                    </div>
                    {/* Honest status badge */}
                    <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border ${styles.badgeColor}`}>
                      {skill.level}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3 font-medium">
                    <span>{skill.category}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>Semester 1</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Stage: {skill.level}</span>
                  <span className="text-indigo-600 font-bold hover:underline">
                    {isExpanded ? 'Less' : 'Details'} →
                  </span>
                </div>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl space-y-1 animate-in fade-in duration-150">
                    <p className="font-bold text-slate-800">Application Context:</p>
                    <p>
                      Applied in college lab practicals, algorithmic exercises, and personal project building.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Methodology & Commitment */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-indigo-100 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <p>
            <strong className="text-slate-900 font-bold">Commitment to Integrity:</strong> Skill levels represent actual hands-on exploration and first-semester computer science coursework. No inflated metrics.
          </p>
          <a
            href="https://github.com/leelakrishnalk912"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:text-indigo-700 font-bold hover:underline whitespace-nowrap shrink-0"
          >
            Review GitHub Commits →
          </a>
        </div>
      </div>
    </section>
  );
};
