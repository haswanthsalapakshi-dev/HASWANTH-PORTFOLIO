import React from 'react';
import { ArrowRight, CheckCircle2, Compass, Layers } from 'lucide-react';
import { LEARNING_ROADMAP } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 border-b border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Evolution & Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Currently Learning & Exploring
          </h2>
          <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
            A clear roadmap illustrating my deliberate path from first-semester B.Tech student and beginner programmer to an innovative AI Engineer.
          </p>
        </div>

        {/* Roadmap Steps */}
        <div className="relative border-l border-zinc-200 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
          {LEARNING_ROADMAP.map((item, idx) => {
            const isCompleted = idx === 0;
            const isCurrent = idx === 1 || idx === 2 || idx === 3;
            return (
              <div key={item.step} className="relative group">
                
                {/* Node marker on the line */}
                <div className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-white transition-colors ${
                  isCompleted 
                    ? 'border-blue-700 bg-blue-700' 
                    : isCurrent 
                    ? 'border-zinc-900 bg-zinc-900' 
                    : 'border-zinc-300 bg-white'
                }`} />

                {/* Step Card */}
                <div className="p-6 rounded-xl border border-zinc-200/90 bg-[#FDFDFC] hover:border-zinc-300 transition-all shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-blue-700">
                        STAGE {item.step}
                      </span>
                      <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Unboxed Status Marker */}
                    <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                      <span>{item.status}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Milestones / Topics */}
                  <div className="border-t border-zinc-100 pt-3">
                    <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                      Key Practice Areas:
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-700">
                      {item.milestones.map((milestone, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                          <span>{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Long-Term North Star Banner */}
        <div className="mt-14 p-6 rounded-xl border border-zinc-900 bg-zinc-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>North Star Objective</span>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
              To grow into an innovative AI Engineer creating meaningful technology that solves real-world challenges.
            </h4>
            <p className="text-xs text-zinc-400">
              Anchoring theory in daily code, participating in hackathons, and understanding the mathematics behind intelligence.
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Inspect Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
