import React from 'react';
import { Code2, Globe, Bot, BrainCircuit, Lightbulb, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  // Category icon mapping
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code2 className="w-5 h-5 text-blue-700" />;
      case "Web Development":
        return <Globe className="w-5 h-5 text-teal-700" />;
      case "Artificial Intelligence":
        return <Bot className="w-5 h-5 text-indigo-700" />;
      case "Core Competencies":
        return <BrainCircuit className="w-5 h-5 text-zinc-800" />;
      default:
        return <Lightbulb className="w-5 h-5 text-zinc-700" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-zinc-200/80 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Technical Repertoire
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Skills & Current Competencies
          </h2>
          <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
            Organized transparently by proficiency level. As a first-year student, I focus on building rock-solid foundations in Python, standard web semantics, and foundational AI prompt engineering.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-xl border border-zinc-200/90 bg-white shadow-2xs hover:border-zinc-300 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-zinc-100">
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200/60">
                    {getCategoryIcon(category.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                      {category.category}
                    </h3>
                    <p className="text-xs text-zinc-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List within this Category */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-lg bg-[#FAF9F8] border border-zinc-200/70"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-semibold text-zinc-900">
                          {skill.name}
                        </div>
                        {/* Clean unboxed level indicator */}
                        <div className="text-xs font-mono text-zinc-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-700 shrink-0" />
                          <span>{skill.level}</span>
                        </div>
                      </div>

                      {/* Details & Concepts */}
                      <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                        {skill.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrity Note */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Verified student assessment</span>
                <span>Zero exaggerated metrics</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
