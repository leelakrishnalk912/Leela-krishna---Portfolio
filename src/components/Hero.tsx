import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Terminal, Play, RotateCcw, BookOpen, Sparkles, Laptop, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'workspace'>('terminal');
  const [selectedDemo, setSelectedDemo] = useState<'voter' | 'atm' | 'calc'>('voter');
  const [demoInput, setDemoInput] = useState<string>('19');
  const [demoOutput, setDemoOutput] = useState<string>(
    '>>> Initialized Python 3.12 Runtime\n>>> Script: voter_check.py\n>>> Input Age: 19\n>>> Output: Eligible: You are 19 years old and eligible to vote.'
  );

  const handleRunScript = () => {
    if (selectedDemo === 'voter') {
      const val = parseInt(demoInput, 10);
      if (isNaN(val)) {
        setDemoOutput('>>> Error: Invalid numerical input for age.');
      } else if (val < 0) {
        setDemoOutput('>>> Error: Age cannot be negative.');
      } else if (val >= 18) {
        setDemoOutput(`>>> [SUCCESS]\n>>> Input Age: ${val}\n>>> Result: Eligible to cast vote in elections!`);
      } else {
        setDemoOutput(`>>> [INFO]\n>>> Input Age: ${val}\n>>> Result: Not eligible yet. ${18 - val} year(s) until voting eligibility.`);
      }
    } else if (selectedDemo === 'atm') {
      const val = parseFloat(demoInput);
      if (isNaN(val) || val <= 0) {
        setDemoOutput('>>> [ATM Error]: Enter a positive transaction amount.');
      } else {
        const remaining = 1000 - val;
        if (remaining < 0) {
          setDemoOutput(`>>> [ATM Declined]: Withdrawal of $${val.toFixed(2)} exceeds $1,000.00 current balance.`);
        } else {
          setDemoOutput(`>>> [ATM Transaction Complete]\n>>> Withdrew: $${val.toFixed(2)}\n>>> Remaining Balance: $${remaining.toFixed(2)}\n>>> Status: 200 OK`);
        }
      }
    } else if (selectedDemo === 'calc') {
      try {
        const parts = demoInput.split('+').map(s => parseFloat(s.trim()));
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
          setDemoOutput(`>>> [CALCULATOR]\n>>> Expression: ${parts[0]} + ${parts[1]}\n>>> Result: ${(parts[0] + parts[1]).toFixed(2)}`);
        } else {
          setDemoOutput('>>> Tip: Enter two numbers separated by + (e.g., 45 + 15)');
        }
      } catch {
        setDemoOutput('>>> Calculation error. Check input format.');
      }
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-colorful-mesh">
      {/* Aesthetic glowing ambient color orbs */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/3 w-80 h-80 bg-teal-300/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic & Career Direction */}
          <div className="lg:col-span-7 space-y-6">
            {/* Colorful aesthetic kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-extrabold">
                First-Semester Student
              </span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="text-slate-700">B.Tech CSE (AI/ML)</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="text-indigo-600 font-mono font-medium">Class of 2029</span>
            </div>

            {/* Main Headline with colorful gradient text */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  LEELA KRISHNA
                </span>
                .
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-700 leading-snug">
                An aspiring AI Engineer building my foundation in{' '}
                <span className="text-blue-600">Python</span>,{' '}
                <span className="text-teal-600">Web Development</span> &{' '}
                <span className="text-violet-600">Generative AI</span>.
              </p>
            </div>

            {/* Supporting description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bioSummary}
            </p>

            {/* CTAs and verified social links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => handleScrollTo('#projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 rounded-xl transition-all shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-98"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-indigo-300 rounded-xl transition-all shadow-xs hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-98"
              >
                <span>Connect With Me</span>
                <ArrowUpRight className="w-4 h-4 text-indigo-500" aria-hidden="true" />
              </button>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile (opens in new tab)"
                  className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all shadow-2xs hover:shadow-xs focus-visible:ring-2 focus-visible:ring-indigo-600"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile (opens in new tab)"
                  className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl border border-slate-200 hover:border-blue-200 transition-all shadow-2xs hover:shadow-xs focus-visible:ring-2 focus-visible:ring-indigo-600"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Aesthetic colorful credential highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg">
              <div className="p-3 bg-gradient-to-br from-blue-50/80 to-white rounded-xl border border-blue-100 shadow-2xs">
                <span className="block text-xl font-extrabold font-mono text-blue-600">4</span>
                <span className="block text-xs font-medium text-slate-600">Python Projects</span>
              </div>
              <div className="p-3 bg-gradient-to-br from-indigo-50/80 to-white rounded-xl border border-indigo-100 shadow-2xs">
                <span className="block text-xl font-extrabold font-mono text-indigo-600">Sem 1</span>
                <span className="block text-xs font-medium text-slate-600">Current Standing</span>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-50/80 to-white rounded-xl border border-purple-100 shadow-2xs">
                <span className="block text-xl font-extrabold font-mono text-purple-600">AI / ML</span>
                <span className="block text-xs font-medium text-slate-600">Specialization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Developer Terminal & Study Studio */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-indigo-100/80 shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow overflow-hidden ring-1 ring-slate-900/5">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950 text-slate-300 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span className="ml-2 text-xs font-mono text-indigo-300 font-medium">
                    {activeTab === 'terminal' ? 'python3_repl.py' : 'student_desk.view'}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Terminal
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('workspace')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                      activeTab === 'workspace'
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Workspace
                  </button>
                </div>
              </div>

              {/* Card Body */}
              {activeTab === 'terminal' ? (
                <div className="p-5 space-y-4">
                  {/* Script Selector Controls */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Select Python Script:</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDemo('voter');
                          setDemoInput('19');
                          setDemoOutput('>>> Script switched to voter_check.py\n>>> Ready. Click "Run Code".');
                        }}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-all ${
                          selectedDemo === 'voter'
                            ? 'bg-blue-100 text-blue-700 border border-blue-300'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        voter.py
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDemo('atm');
                          setDemoInput('250');
                          setDemoOutput('>>> Script switched to atm_system.py\n>>> Ready. Click "Run Code".');
                        }}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-all ${
                          selectedDemo === 'atm'
                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        atm.py
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDemo('calc');
                          setDemoInput('45 + 15');
                          setDemoOutput('>>> Script switched to calculator.py\n>>> Ready. Click "Run Code".');
                        }}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-all ${
                          selectedDemo === 'calc'
                            ? 'bg-purple-100 text-purple-700 border border-purple-300'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        calc.py
                      </button>
                    </div>
                  </div>

                  {/* Input Tester */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-slate-500">Input:</span>
                    <input
                      type="text"
                      value={demoInput}
                      onChange={(e) => setDemoInput(e.target.value)}
                      placeholder={selectedDemo === 'calc' ? 'e.g. 50 + 20' : 'e.g. 19'}
                      className="flex-1 px-3 py-1.5 text-xs font-mono bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-indigo-600 focus:outline-hidden transition-colors"
                    />
                    <button
                      type="button"
                      onClick={handleRunScript}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg transition-all shadow-xs shrink-0 active:scale-98"
                    >
                      <Play className="w-3 h-3 text-emerald-300" aria-hidden="true" />
                      <span>Run Code</span>
                    </button>
                  </div>

                  {/* Output Terminal Console with aesthetic glow */}
                  <div className="bg-slate-950 text-emerald-400 font-mono text-xs p-4 rounded-xl border border-slate-800 min-h-[140px] max-h-[160px] overflow-y-auto leading-relaxed shadow-inner">
                    <pre className="whitespace-pre-wrap">{demoOutput}</pre>
                  </div>

                  {/* Footer metadata */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="text-indigo-600 font-medium">Python 3.x Standard Library</span>
                    <span className="font-mono text-slate-500">Local Execution Sandbox</span>
                  </div>
                </div>
              ) : (
                <div className="relative group">
                  <img
                    src="/src/assets/images/student_workspace_1794055752697.jpg"
                    alt="Minimalist modern engineering student study desk with Python code and algorithm flowcharts"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white">
                    <span className="text-xs font-mono text-cyan-400 font-bold mb-1">
                      STUDY & CODE ENVIRONMENT
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Curriculum Practice & Problem Solving
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Translating algorithm flowcharts and mathematical logic into working code.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
