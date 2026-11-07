import React from 'react';
import { Trophy, Lightbulb, Code, Users, Cpu, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_ACTIVITIES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case "Hackathons":
        return <Trophy className="w-5 h-5 text-amber-700" />;
      case "Ideathons":
        return <Lightbulb className="w-5 h-5 text-indigo-700" />;
      case "Technical Competitions":
        return <Code className="w-5 h-5 text-blue-700" />;
      case "Collaborative Brainstorming":
        return <Users className="w-5 h-5 text-teal-700" />;
      case "Innovative Problem-Solving":
        return <Cpu className="w-5 h-5 text-zinc-800" />;
      default:
        return <Lightbulb className="w-5 h-5 text-zinc-700" />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-zinc-200/80 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Activities & Participation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Beyond the Classroom
          </h2>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed font-normal">
            "I enjoy participating in hackathons and ideathons where I can explore new ideas, collaborate with others, think creatively, and understand how technology can solve real-world challenges."
          </p>
        </div>

        {/* Experience & Activity Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCE_ACTIVITIES.map((activity, idx) => (
            <div
              key={activity.title}
              className={`p-6 rounded-xl border border-zinc-200/90 bg-white hover:border-zinc-300 transition-all duration-200 flex flex-col justify-between shadow-2xs ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200/60">
                    {getIcon(activity.title)}
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    Active Engagement
                  </span>
                </div>

                <div className="text-xs font-medium text-blue-700 mb-1">
                  {activity.role} · {activity.focus}
                </div>

                <h3 className="text-base font-bold text-zinc-900 tracking-tight mb-2">
                  {activity.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {activity.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                  Core Growth Takeaway:
                </div>
                <div className="text-xs text-zinc-700 italic">
                  "{activity.takeaway}"
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community & Teamwork Note */}
        <div className="mt-10 p-5 rounded-xl border border-zinc-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-zinc-900">
              Open to Student Hackathon Teams & Collaborative Projects
            </h4>
            <p className="text-xs text-zinc-600">
              Looking for a motivated teammate in Python scripting, ideation, or AI prompt architecture? Let's connect.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors shrink-0"
          >
            <span>Team Up With Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
