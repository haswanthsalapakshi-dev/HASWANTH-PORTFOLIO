import React from 'react';
import { GraduationCap, Sparkles, Terminal, BookOpen, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Background & Focus
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            A Little About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authentic Student Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-zinc-700 leading-relaxed text-base">
            <p className="font-normal">
              {PERSONAL_INFO.aboutIntroduction[0]}
            </p>

            <p className="font-normal">
              {PERSONAL_INFO.aboutIntroduction[1]}
            </p>

            <p className="font-normal">
              {PERSONAL_INFO.aboutIntroduction[2]}
            </p>

            <p className="font-normal text-zinc-900 font-medium border-l-2 border-zinc-900 pl-4 py-1">
              {PERSONAL_INFO.aboutIntroduction[3]}
            </p>

            <div className="pt-4 flex items-center gap-6 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-700" />
                <span>Curiosity-Driven Problem Solving</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-700" />
                <span>Consistent Coding Habits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Clean Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Current Role */}
            <div className="p-5 rounded-xl border border-zinc-200/90 bg-[#FBFBFA] hover:border-zinc-300 transition-colors shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-zinc-100 text-zinc-800 shrink-0">
                  <GraduationCap className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Current Role
                  </div>
                  <div className="text-base font-bold text-zinc-900 mt-0.5">
                    B.Tech Student
                  </div>
                  <div className="text-xs text-zinc-600 mt-1">
                    First-Year Undergraduate · First Semester
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Career Interest */}
            <div className="p-5 rounded-xl border border-zinc-200/90 bg-[#FBFBFA] hover:border-zinc-300 transition-colors shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-zinc-100 text-zinc-800 shrink-0">
                  <Sparkles className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Career Interest
                  </div>
                  <div className="text-base font-bold text-zinc-900 mt-0.5">
                    Aspiring AI Engineer
                  </div>
                  <div className="text-xs text-zinc-600 mt-1">
                    Intelligent Systems, Machine Learning & Automation
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Learning Focus */}
            <div className="p-5 rounded-xl border border-zinc-200/90 bg-[#FBFBFA] hover:border-zinc-300 transition-colors shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-zinc-100 text-zinc-800 shrink-0">
                  <Terminal className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    Learning Focus
                  </div>
                  <div className="text-base font-bold text-zinc-900 mt-0.5">
                    Python · Web Dev · Gen AI
                  </div>
                  <div className="text-xs text-zinc-600 mt-1">
                    Foundational logic, UI principles & modern prompt patterns
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
