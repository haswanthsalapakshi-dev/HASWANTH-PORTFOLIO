import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, Play, Code, CheckCircle, AlertTriangle, ArrowRight, RefreshCw, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');

  // Voter State
  const [voterAge, setVoterAge] = useState<string>('19');
  const [voterResult, setVoterResult] = useState<string | null>(null);

  // Calculator State
  const [calcNum1, setCalcNum1] = useState<string>('24');
  const [calcNum2, setCalcNum2] = useState<string>('8');
  const [calcOp, setCalcOp] = useState<'+' | '-' | '*' | '/'>('+');
  const [calcResult, setCalcResult] = useState<string | null>(null);

  // ATM State
  const [atmPin, setAtmPin] = useState<string>('1234');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [atmBalance, setAtmBalance] = useState<number>(5000);
  const [atmAmount, setAtmAmount] = useState<string>('500');
  const [atmLogs, setAtmLogs] = useState<string[]>([
    'System initialized with base balance: $5,000.00',
    'PIN verified successfully.'
  ]);

  // Grade Calculator State
  const [grades, setGrades] = useState<{ [subject: string]: number }>({
    'Python Programming': 88,
    'Applied Mathematics': 82,
    'Digital Electronics': 76,
    'Engineering Physics': 85,
    'Communication Skills': 90
  });
  const [gradeResult, setGradeResult] = useState<{ total: number; average: number; grade: string } | null>(null);

  // Run Voter Checker
  const handleRunVoter = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(voterAge, 10);
    if (isNaN(age)) {
      setVoterResult("Error: Invalid input. Please enter a valid numerical age.");
      return;
    }
    if (age < 0 || age > 125) {
      setVoterResult("Warning: Please enter a realistic human age between 0 and 125.");
      return;
    }
    if (age >= 18) {
      setVoterResult(`Eligible to vote! You are ${age} years old and meet the minimum constitutional threshold of 18 years.`);
    } else {
      const left = 18 - age;
      setVoterResult(`Not eligible yet. You are ${age} years old. You will be eligible to register in ${left} year${left > 1 ? 's' : ''}.`);
    }
  };

  // Run Calculator
  const handleRunCalc = (e: React.FormEvent) => {
    e.preventDefault();
    const n1 = parseFloat(calcNum1);
    const n2 = parseFloat(calcNum2);
    if (isNaN(n1) || isNaN(n2)) {
      setCalcResult("Error: Please provide valid numbers.");
      return;
    }
    if (calcOp === '/' && n2 === 0) {
      setCalcResult("ZeroDivisionError: Division by zero is mathematically undefined.");
      return;
    }
    let res = 0;
    switch (calcOp) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/': res = n1 / n2; break;
    }
    setCalcResult(`${n1} ${calcOp} ${n2} = ${parseFloat(res.toFixed(4))}`);
  };

  // ATM Actions
  const handleAtmDeposit = () => {
    const amt = parseFloat(atmAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmLogs(prev => [`[Error] Please enter a valid deposit amount > 0.`, ...prev.slice(0, 5)]);
      return;
    }
    setAtmBalance(prev => {
      const newBal = prev + amt;
      setAtmLogs(l => [`[Deposit] Added $${amt.toFixed(2)}. New balance: $${newBal.toFixed(2)}`, ...l.slice(0, 5)]);
      return newBal;
    });
    setAtmAmount('');
  };

  const handleAtmWithdraw = () => {
    const amt = parseFloat(atmAmount);
    if (isNaN(amt) || amt <= 0) {
      setAtmLogs(prev => [`[Error] Please enter a valid withdrawal amount > 0.`, ...prev.slice(0, 5)]);
      return;
    }
    if (amt > atmBalance) {
      setAtmLogs(prev => [`[Declined] Insufficient balance for withdrawal of $${amt.toFixed(2)}. Current balance: $${atmBalance.toFixed(2)}`, ...prev.slice(0, 5)]);
      return;
    }
    setAtmBalance(prev => {
      const newBal = prev - amt;
      setAtmLogs(l => [`[Withdrawal] Dispensed $${amt.toFixed(2)}. Remaining: $${newBal.toFixed(2)}`, ...l.slice(0, 5)]);
      return newBal;
    });
    setAtmAmount('');
  };

  // Run Grade Calculator
  const handleCalculateGrades = () => {
    const marks = Object.values(grades);
    const total = marks.reduce((acc, m) => acc + m, 0);
    const avg = total / marks.length;
    let letter = 'F (Needs Improvement)';
    if (avg >= 90) letter = 'A+ (Outstanding)';
    else if (avg >= 80) letter = 'A (Excellent)';
    else if (avg >= 70) letter = 'B (Good)';
    else if (avg >= 60) letter = 'C (Satisfactory)';
    else if (avg >= 50) letter = 'D (Pass)';

    setGradeResult({
      total,
      average: parseFloat(avg.toFixed(2)),
      grade: letter
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FDFDFC] rounded-xl border border-zinc-200 shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200/80 bg-zinc-50/50">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-0.5">
              <span>{project.category} Project</span>
              <span>·</span>
              <span>{project.techStack.join(' · ')}</span>
            </div>
            <h3 id="modal-headline" className="text-lg font-semibold text-zinc-900 tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-between px-6 py-2 border-b border-zinc-200 bg-white text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('demo')}
              className={`flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-md transition-colors ${
                activeTab === 'demo'
                  ? 'bg-zinc-900 text-white'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              Interactive Simulation
            </button>
            {project.pythonCodeSnippet && (
              <button
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-medium rounded-md transition-colors ${
                  activeTab === 'code'
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                Python Implementation
              </button>
            )}
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-900 transition-colors"
          >
            View GitHub Profile
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Brief & Key Features */}
          <div className="space-y-3">
            <p className="text-sm text-zinc-700 leading-relaxed">
              {project.description}
            </p>
            <div className="border border-zinc-200/80 rounded-lg p-3 bg-zinc-50/70">
              <h4 className="text-xs font-semibold text-zinc-800 uppercase tracking-wider mb-2">Key Implementation Features</h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-zinc-600">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ACTIVE TAB: DEMO */}
          {activeTab === 'demo' && (
            <div className="bg-white border border-zinc-200 rounded-lg p-5">
              {/* Voter Checker Demo */}
              {project.demoType === 'voter' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-700">Test Age Eligibility Logic</span>
                    <span className="text-xs text-zinc-400">threshold: 18 years</span>
                  </div>
                  <form onSubmit={handleRunVoter} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="number"
                      value={voterAge}
                      onChange={(e) => setVoterAge(e.target.value)}
                      placeholder="Enter age (e.g. 19)"
                      className="px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 w-full sm:w-48"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors"
                    >
                      Check Eligibility
                    </button>
                  </form>
                  {voterResult && (
                    <div className={`p-3 text-xs rounded-md font-mono ${
                      voterResult.includes('Eligible to vote')
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : voterResult.includes('Error') || voterResult.includes('Warning')
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-zinc-100 text-zinc-800 border border-zinc-200'
                    }`}>
                      {voterResult}
                    </div>
                  )}
                </div>
              )}

              {/* Calculator Demo */}
              {project.demoType === 'calculator' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-700">Arithmetic Engine Simulator</span>
                    <span className="text-xs text-zinc-400">modular arithmetic operations</span>
                  </div>
                  <form onSubmit={handleRunCalc} className="flex flex-wrap items-center gap-2">
                    <input
                      type="number"
                      step="any"
                      value={calcNum1}
                      onChange={(e) => setCalcNum1(e.target.value)}
                      className="w-24 px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      placeholder="Num 1"
                    />
                    <div className="flex border border-zinc-300 rounded-md overflow-hidden text-xs font-medium">
                      {(['+', '-', '*', '/'] as const).map((op) => (
                        <button
                          type="button"
                          key={op}
                          onClick={() => setCalcOp(op)}
                          className={`px-3 py-2 transition-colors ${
                            calcOp === op ? 'bg-zinc-900 text-white font-bold' : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100'
                          }`}
                        >
                          {op}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      step="any"
                      value={calcNum2}
                      onChange={(e) => setCalcNum2(e.target.value)}
                      className="w-24 px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      placeholder="Num 2"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors"
                    >
                      Calculate
                    </button>
                  </form>
                  {calcResult && (
                    <div className="p-3 text-xs rounded-md bg-zinc-900 text-zinc-100 font-mono">
                      Output: {calcResult}
                    </div>
                  )}
                </div>
              )}

              {/* ATM Simulator Demo */}
              {project.demoType === 'atm' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                    <div>
                      <span className="text-xs text-zinc-500 uppercase tracking-wider">Simulated Account Balance</span>
                      <div className="text-xl font-bold font-mono text-zinc-900">
                        ${atmBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setAtmBalance(5000);
                        setAtmLogs(['System reset to default initial state ($5,000.00).']);
                      }}
                      className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-800"
                    >
                      <RefreshCw className="w-3 h-3" /> Reset
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="number"
                      value={atmAmount}
                      onChange={(e) => setAtmAmount(e.target.value)}
                      placeholder="Transaction amount ($)"
                      className="px-3 py-2 text-sm border border-zinc-300 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleAtmDeposit}
                        className="px-4 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors"
                      >
                        + Deposit
                      </button>
                      <button
                        onClick={handleAtmWithdraw}
                        className="px-4 py-2 text-xs font-medium text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md transition-colors"
                      >
                        - Withdraw
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Audit Log / Terminal:</span>
                    <div className="bg-zinc-950 text-zinc-300 p-3 rounded-md font-mono text-xs space-y-1 max-h-32 overflow-y-auto">
                      {atmLogs.map((log, i) => (
                        <div key={i} className="leading-snug">{log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Grade Calculator Demo */}
              {project.demoType === 'grade' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-700">Academic Marks Entry</span>
                    <span className="text-xs text-zinc-400">Scale: 0 - 100</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {Object.entries(grades).map(([subject, mark]) => (
                      <div key={subject} className="flex items-center justify-between p-2 rounded border border-zinc-200 bg-zinc-50">
                        <span className="text-zinc-700 truncate pr-2">{subject}</span>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={mark}
                          onChange={(e) => {
                            const val = Math.min(100, Math.max(0, parseInt(e.target.value, 10) || 0));
                            setGrades(prev => ({ ...prev, [subject]: val }));
                          }}
                          className="w-16 px-2 py-1 text-right font-mono bg-white border border-zinc-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleCalculateGrades}
                    className="w-full py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors"
                  >
                    Evaluate Cumulative Academic Performance
                  </button>

                  {gradeResult && (
                    <div className="p-3 bg-zinc-900 text-white rounded-md text-xs font-mono grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-zinc-400 text-[10px]">TOTAL MARKS</div>
                        <div className="text-base font-bold">{gradeResult.total} / 500</div>
                      </div>
                      <div>
                        <div className="text-zinc-400 text-[10px]">AVERAGE %</div>
                        <div className="text-base font-bold">{gradeResult.average}%</div>
                      </div>
                      <div>
                        <div className="text-zinc-400 text-[10px]">FINAL GRADE</div>
                        <div className="text-base font-bold text-emerald-400">{gradeResult.grade}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Portfolio Architecture Demo */}
              {project.demoType === 'portfolio' && (
                <div className="space-y-3 text-xs text-zinc-600">
                  <div className="p-4 border border-zinc-200 rounded-md bg-zinc-50 space-y-2">
                    <p className="font-semibold text-zinc-800">
                      Portfolio Architecture Overview
                    </p>
                    <p>
                      This site is built with modern React 19, TypeScript, and Tailwind CSS. It highlights a student's journey into Artificial Intelligence with zero-pill visual discipline, accessible typography, interactive project simulators, and a clear learning trajectory.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-zinc-700 font-mono text-[11px]">
                      <div>· Framework: React 19 (TypeScript)</div>
                      <div>· Styling: Tailwind CSS v4</div>
                      <div>· Icons: Lucide React</div>
                      <div>· Interactive: Native Python Simulators</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ACTIVE TAB: CODE */}
          {activeTab === 'code' && project.pythonCodeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>Python Source Implementation</span>
                <span className="font-mono text-[11px]">script.py</span>
              </div>
              <pre className="p-4 bg-zinc-950 text-zinc-200 rounded-lg text-xs font-mono overflow-x-auto leading-relaxed border border-zinc-800">
                <code>{project.pythonCodeSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between">
          <div className="text-xs text-zinc-500">
            Student Project · Haswanth Salapakshi
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-900 bg-white border border-zinc-300 rounded-md hover:bg-zinc-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
