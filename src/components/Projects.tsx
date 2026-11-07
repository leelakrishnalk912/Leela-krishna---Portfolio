import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Terminal, Code2, ArrowUpRight, Calculator, Vote, Landmark, GraduationCap, Eye, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectVisualTheme = (id: string) => {
    switch (id) {
      case 'voter-eligibility':
        return {
          icon: <Vote className="w-5 h-5 text-blue-600" aria-hidden="true" />,
          iconBg: 'bg-blue-100/90 text-blue-700',
          border: 'border-blue-200/90 hover:border-blue-400 hover:shadow-blue-500/10',
          topbar: 'from-blue-950 via-indigo-950 to-slate-900',
          chip: 'bg-blue-50 text-blue-700 border-blue-200',
          terminalText: 'text-cyan-300',
          techBadge: 'text-blue-300 bg-blue-900/60'
        };
      case 'calculator':
        return {
          icon: <Calculator className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
          iconBg: 'bg-indigo-100/90 text-indigo-700',
          border: 'border-indigo-200/90 hover:border-indigo-400 hover:shadow-indigo-500/10',
          topbar: 'from-indigo-950 via-purple-950 to-slate-900',
          chip: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          terminalText: 'text-indigo-300',
          techBadge: 'text-indigo-300 bg-indigo-900/60'
        };
      case 'atm-system':
        return {
          icon: <Landmark className="w-5 h-5 text-emerald-600" aria-hidden="true" />,
          iconBg: 'bg-emerald-100/90 text-emerald-700',
          border: 'border-emerald-200/90 hover:border-emerald-400 hover:shadow-emerald-500/10',
          topbar: 'from-emerald-950 via-teal-950 to-slate-900',
          chip: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          terminalText: 'text-emerald-300',
          techBadge: 'text-emerald-300 bg-emerald-900/60'
        };
      case 'grade-calculator':
        return {
          icon: <GraduationCap className="w-5 h-5 text-amber-600" aria-hidden="true" />,
          iconBg: 'bg-amber-100/90 text-amber-700',
          border: 'border-amber-200/90 hover:border-amber-400 hover:shadow-amber-500/10',
          topbar: 'from-amber-950 via-rose-950 to-slate-900',
          chip: 'bg-amber-50 text-amber-800 border-amber-200',
          terminalText: 'text-amber-300',
          techBadge: 'text-amber-300 bg-amber-900/60'
        };
      default:
        return {
          icon: <Code2 className="w-5 h-5 text-slate-700" aria-hidden="true" />,
          iconBg: 'bg-slate-100 text-slate-700',
          border: 'border-slate-200 hover:border-slate-400',
          topbar: 'from-slate-900 to-slate-950',
          chip: 'bg-slate-100 text-slate-700 border-slate-200',
          terminalText: 'text-emerald-400',
          techBadge: 'text-slate-300 bg-slate-800'
        };
    }
  };

  return (
    <section id="projects" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Selected Work
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Featured Python Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Beginner-level applications created to solidify programming logic, user input validation, control flow branching, and algorithm design.
            </p>
          </div>

          <div className="text-xs font-mono text-indigo-700 shrink-0 bg-indigo-50/80 px-3.5 py-2 rounded-xl border border-indigo-100 font-semibold shadow-2xs">
            <span>Runtime: Python 3.x · 4 Built Programs</span>
          </div>
        </div>

        {/* Project Cards Grid with colorful aesthetic identities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project: ProjectItem) => {
            const theme = getProjectVisualTheme(project.id);
            return (
              <article
                key={project.id}
                className={`group bg-white rounded-3xl border ${theme.border} hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs`}
              >
                {/* Card Header: Stylized Colorful Topbar */}
                <div>
                  <div className={`px-5 py-3.5 bg-gradient-to-r ${theme.topbar} text-slate-300 border-b border-white/10 flex items-center justify-between`}>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" aria-hidden="true" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" aria-hidden="true" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" aria-hidden="true" />
                      <span className="ml-2 font-mono text-xs text-white/90 font-medium">
                        {project.id.replace(/-/g, '_')}.py
                      </span>
                    </div>
                    <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${theme.techBadge}`}>
                      {project.technology}
                    </span>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6 bg-white space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className={`w-11 h-11 rounded-2xl ${theme.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                        {theme.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {project.name}
                        </h3>
                        <div className="mt-1 text-xs text-slate-500 flex items-center gap-2 font-medium">
                          <span>Console Application</span>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span>Semester 1</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Concepts Applied */}
                    <div className="pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Concepts Implemented
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.concepts.map((concept) => (
                          <span
                            key={concept}
                            className={`px-2.5 py-0.5 text-xs font-medium rounded-lg border ${theme.chip}`}
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sample Output Terminal Snippet */}
                  <div className="px-5 py-3.5 bg-slate-950 text-slate-300 font-mono text-xs border-y border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span className={`truncate font-medium ${theme.terminalText}`}>{project.sampleOutput}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider shrink-0 ml-2">Output</span>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 bg-slate-50/60 flex items-center justify-between gap-4 mt-auto border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-medium">
                    Live Simulator Ready
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-slate-900 to-indigo-950 hover:from-blue-600 hover:to-indigo-600 rounded-xl transition-all shadow-xs hover:shadow-md hover:shadow-indigo-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 active:scale-98"
                  >
                    <Eye className="w-3.5 h-3.5 text-indigo-300" aria-hidden="true" />
                    <span>View Project & Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/60" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Verification & Transparency Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-indigo-50/60 via-purple-50/30 to-white border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">
              Verified Student Code
            </h4>
            <p className="text-xs text-slate-600 max-w-xl">
              All projects represent beginner console applications developed during first-semester coursework. Full code walkthroughs and interactive testers are built directly into the "View Project" modals.
            </p>
          </div>
          <a
            href="https://github.com/leelakrishnalk912"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all shadow-md shadow-indigo-500/20 whitespace-nowrap shrink-0"
          >
            <span>Visit My GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
