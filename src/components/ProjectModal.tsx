import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, Play, RotateCcw, Code2, Cpu } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'simulator' | 'code' | 'logic'>('simulator');

  // Interactive Simulator States
  // Voter Simulator
  const [voterAge, setVoterAge] = useState<string>('19');
  const [voterResult, setVoterResult] = useState<string | null>(null);

  // Calculator Simulator
  const [calcNum1, setCalcNum1] = useState<string>('12');
  const [calcNum2, setCalcNum2] = useState<string>('4');
  const [calcOp, setCalcOp] = useState<string>('+');
  const [calcResult, setCalcResult] = useState<string | null>(null);

  // ATM Simulator
  const [atmBalance, setAtmBalance] = useState<number>(1000);
  const [atmAmount, setAtmAmount] = useState<string>('150');
  const [atmLog, setAtmLog] = useState<string[]>([
    'Welcome to ATM Simulation.',
    'Initial starting balance: $1,000.00'
  ]);

  // Grade Simulator
  const [gradeMarks, setGradeMarks] = useState<string>('85, 92, 78, 88');
  const [gradeResult, setGradeResult] = useState<{
    avg: number;
    grade: string;
    details: string;
  } | null>(null);

  // Reset states when project changes
  useEffect(() => {
    if (project) {
      setCopied(false);
      setActiveTab('simulator');
      setVoterResult(null);
      setCalcResult(null);
      setAtmBalance(1000);
      setAtmLog(['Welcome to ATM Simulation.', 'Initial starting balance: $1,000.00']);
      setGradeResult(null);
    }
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Voter Simulation Logic
  const runVoterTest = () => {
    const age = parseInt(voterAge, 10);
    if (isNaN(age)) {
      setVoterResult('Error: Please enter a valid numerical whole number.');
      return;
    }
    if (age < 0) {
      setVoterResult('Error: Age cannot be negative.');
    } else if (age >= 18) {
      setVoterResult(`Eligible: At ${age} years old, you meet the legal voting requirement.`);
    } else {
      const remaining = 18 - age;
      setVoterResult(`Not Eligible: You will be eligible to vote in ${remaining} year(s).`);
    }
  };

  // Calculator Simulation Logic
  const runCalcTest = () => {
    const n1 = parseFloat(calcNum1);
    const n2 = parseFloat(calcNum2);
    if (isNaN(n1) || isNaN(n2)) {
      setCalcResult('Error: Invalid numerical values.');
      return;
    }
    if (calcOp === '+') setCalcResult(`${n1} + ${n2} = ${(n1 + n2).toFixed(2)}`);
    else if (calcOp === '-') setCalcResult(`${n1} - ${n2} = ${(n1 - n2).toFixed(2)}`);
    else if (calcOp === '*') setCalcResult(`${n1} × ${n2} = ${(n1 * n2).toFixed(2)}`);
    else if (calcOp === '/') {
      if (n2 === 0) setCalcResult('Error: Division by zero is undefined.');
      else setCalcResult(`${n1} ÷ ${n2} = ${(n1 / n2).toFixed(2)}`);
    }
  };

  // ATM Simulation Logic
  const handleAtmDeposit = () => {
    const amt = parseFloat(atmAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmLog((prev) => [...prev, 'Error: Deposit amount must be positive.']);
      return;
    }
    const newBal = atmBalance + amt;
    setAtmBalance(newBal);
    setAtmLog((prev) => [
      ...prev,
      `Deposited: $${amt.toFixed(2)} · New Balance: $${newBal.toFixed(2)}`
    ]);
  };

  const handleAtmWithdraw = () => {
    const amt = parseFloat(atmAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmLog((prev) => [...prev, 'Error: Withdrawal amount must be positive.']);
      return;
    }
    if (amt > atmBalance) {
      setAtmLog((prev) => [
        ...prev,
        `Declined: Insufficient funds. Available: $${atmBalance.toFixed(2)}`
      ]);
      return;
    }
    const newBal = atmBalance - amt;
    setAtmBalance(newBal);
    setAtmLog((prev) => [
      ...prev,
      `Withdrew: $${amt.toFixed(2)} · Remaining Balance: $${newBal.toFixed(2)}`
    ]);
  };

  // Grade Simulation Logic
  const runGradeTest = () => {
    const parts = gradeMarks.split(',').map((p) => parseFloat(p.trim())).filter((n) => !isNaN(n));
    if (parts.length === 0) {
      setGradeResult({
        avg: 0,
        grade: 'N/A',
        details: 'Please enter comma-separated numbers (e.g., 85, 90, 78).'
      });
      return;
    }
    const avg = parts.reduce((a, b) => a + b, 0) / parts.length;
    let grade = 'F';
    let details = 'Needs Improvement';
    if (avg >= 90) {
      grade = 'A';
      details = 'Outstanding performance';
    } else if (avg >= 80) {
      grade = 'B';
      details = 'Very Good';
    } else if (avg >= 70) {
      grade = 'C';
      details = 'Good';
    } else if (avg >= 60) {
      grade = 'D';
      details = 'Pass';
    }

    setGradeResult({
      avg: parseFloat(avg.toFixed(2)),
      grade,
      details
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full border border-indigo-100 shadow-2xl overflow-hidden my-8 ring-1 ring-slate-900/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Chrome Header with vibrant gradient */}
        <div className="flex items-start justify-between p-6 border-b border-white/10 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white">
          <div>
            <div className="flex items-center gap-2 text-xs text-indigo-300 font-mono mb-1.5">
              <span className="text-cyan-400 font-bold">{project.technology} 3.x</span>
              <span aria-hidden="true">·</span>
              <span>Console Application</span>
              <span aria-hidden="true">·</span>
              <span>Semester 1</span>
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-extrabold text-white">
              {project.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Subnav Tabs with active gradient */}
        <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('simulator')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'code'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Python Source Code</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('logic')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'logic'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Problem & Logic</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {activeTab === 'simulator' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">
                  Live Browser Simulator
                </h3>
                <p className="text-xs text-slate-600">
                  Experience the exact algorithmic logic of this Python program in real time:
                </p>
              </div>

              {/* Voter Simulator */}
              {project.interactiveType === 'voter' && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/60 to-white border border-blue-200/80 space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <label htmlFor="voter-age-input" className="text-xs font-bold text-slate-800">
                      Enter Age to Test:
                    </label>
                    <input
                      id="voter-age-input"
                      type="number"
                      value={voterAge}
                      onChange={(e) => setVoterAge(e.target.value)}
                      className="w-28 px-3 py-1.5 text-xs font-mono bg-white border border-slate-300 rounded-xl focus:border-indigo-600 focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={runVoterTest}
                      className="px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all shadow-xs"
                    >
                      Evaluate Age
                    </button>
                  </div>

                  {voterResult && (
                    <div className="p-4 bg-slate-950 text-emerald-400 rounded-2xl font-mono text-xs border border-slate-800 shadow-inner">
                      {voterResult}
                    </div>
                  )}

                  <div className="text-[11px] text-slate-500 pt-2 border-t border-blue-100">
                    <strong>Rule Evaluated:</strong> <code className="font-mono bg-blue-100 text-blue-900 px-1 py-0.5 rounded">if age &gt;= 18: eligible</code> else <code className="font-mono bg-blue-100 text-blue-900 px-1 py-0.5 rounded">18 - age years left</code>.
                  </div>
                </div>
              )}

              {/* Calculator Simulator */}
              {project.interactiveType === 'calculator' && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/60 to-white border border-indigo-200/80 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <input
                      type="number"
                      value={calcNum1}
                      onChange={(e) => setCalcNum1(e.target.value)}
                      className="w-24 px-3 py-1.5 text-xs font-mono bg-white border border-slate-300 rounded-xl focus:border-indigo-600 focus:outline-hidden"
                      placeholder="Number 1"
                    />
                    <select
                      value={calcOp}
                      onChange={(e) => setCalcOp(e.target.value)}
                      className="px-3 py-1.5 text-xs font-mono bg-white border border-slate-300 rounded-xl"
                    >
                      <option value="+">+ (Add)</option>
                      <option value="-">- (Subtract)</option>
                      <option value="*">× (Multiply)</option>
                      <option value="/">÷ (Divide)</option>
                    </select>
                    <input
                      type="number"
                      value={calcNum2}
                      onChange={(e) => setCalcNum2(e.target.value)}
                      className="w-24 px-3 py-1.5 text-xs font-mono bg-white border border-slate-300 rounded-xl focus:border-indigo-600 focus:outline-hidden"
                      placeholder="Number 2"
                    />
                    <button
                      type="button"
                      onClick={runCalcTest}
                      className="px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all shadow-xs"
                    >
                      Compute
                    </button>
                  </div>

                  {calcResult && (
                    <div className="p-4 bg-slate-950 text-indigo-300 rounded-2xl font-mono text-xs border border-slate-800 shadow-inner">
                      {calcResult}
                    </div>
                  )}

                  <div className="text-[11px] text-slate-500 pt-2 border-t border-indigo-100">
                    <strong>Exception Handled:</strong> ZeroDivisionError prevented when divisor equals zero.
                  </div>
                </div>
              )}

              {/* ATM Simulator */}
              {project.interactiveType === 'atm' && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-200/80 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">Virtual Bank Account Balance:</span>
                    <span className="font-mono font-bold text-emerald-700 text-sm">${atmBalance.toFixed(2)}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-600">$</span>
                    <input
                      type="number"
                      value={atmAmount}
                      onChange={(e) => setAtmAmount(e.target.value)}
                      className="w-28 px-3 py-1.5 text-xs font-mono bg-white border border-slate-300 rounded-xl focus:border-indigo-600 focus:outline-hidden"
                      placeholder="Amount"
                    />
                    <button
                      type="button"
                      onClick={handleAtmDeposit}
                      className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors"
                    >
                      Deposit Funds
                    </button>
                    <button
                      type="button"
                      onClick={handleAtmWithdraw}
                      className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors"
                    >
                      Withdraw Funds
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setAtmBalance(1000);
                        setAtmLog(['Reset ATM session.', 'Current balance: $1,000.00']);
                      }}
                      className="p-1.5 text-slate-400 hover:text-slate-700 ml-auto"
                      title="Reset Simulator"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="bg-slate-950 text-emerald-300 p-3.5 rounded-2xl font-mono text-xs max-h-32 overflow-y-auto space-y-1 border border-slate-800 shadow-inner">
                    {atmLog.map((log, i) => (
                      <div key={i}>{log}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grade Simulator */}
              {project.interactiveType === 'grade' && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/60 to-white border border-amber-200/80 space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      Enter Subject Marks (comma-separated, 0 to 100):
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={gradeMarks}
                        onChange={(e) => setGradeMarks(e.target.value)}
                        className="flex-1 px-3 py-1.5 text-xs font-mono bg-white border border-slate-300 rounded-xl focus:border-indigo-600 focus:outline-hidden"
                        placeholder="e.g. 85, 92, 78, 90"
                      />
                      <button
                        type="button"
                        onClick={runGradeTest}
                        className="px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-xl transition-all shrink-0 shadow-xs"
                      >
                        Compute Grade
                      </button>
                    </div>
                  </div>

                  {gradeResult && (
                    <div className="p-4 bg-slate-950 text-amber-300 rounded-2xl font-mono text-xs border border-slate-800 flex items-center justify-between shadow-inner">
                      <span>Percentage: {gradeResult.avg}%</span>
                      <span className="font-bold text-white">Grade: {gradeResult.grade} ({gradeResult.details})</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-600 font-semibold">
                  Executable Python Script
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 rounded-xl border border-indigo-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto max-h-80 border border-slate-800 shadow-inner">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}

          {activeTab === 'logic' && (
            <div className="space-y-5">
              {/* Problem Statement */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Problem Statement
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {project.problemStatement}
                </p>
              </div>

              {/* Concepts */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Algorithmic Concepts Demonstrated
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="px-3 py-1 text-xs font-semibold text-indigo-800 bg-indigo-50 rounded-xl border border-indigo-200"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Logic Explanation */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Algorithm & Control Flow Rationale
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.logicExplanation}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 px-6 border-t border-slate-200 bg-slate-50 text-xs text-slate-500">
          <p>
            Developed during 1st Semester Python Programming Coursework.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
