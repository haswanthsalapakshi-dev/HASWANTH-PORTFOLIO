import React from 'react';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Custom SVG icon for LinkedIn & GitHub to ensure crisp rendering
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.76.78 1.76 1.75-.79 1.76-1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Split Grid: Left Column Text & CTAs, Right Column Developer Visual */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean kicker without pill enclosure or pulsing dots */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
              <span>Student Developer</span>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <span>B.Tech First Semester</span>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <span>AI Explorer</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-zinc-950 tracking-tight leading-[1.12] [text-wrap:balance]">
              {PERSONAL_INFO.heroHeading}
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl font-medium text-zinc-700 leading-relaxed [text-wrap:balance]">
              {PERSONAL_INFO.heroSubheading}
            </h2>

            {/* Supporting description */}
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg shadow-xs transition-colors whitespace-nowrap"
              >
                Explore My Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-100 border border-zinc-300 rounded-lg shadow-xs transition-colors whitespace-nowrap"
              >
                Connect With Me
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Verified Social Media Links */}
            <div className="pt-4 flex items-center gap-4 text-xs text-zinc-500">
              <span className="font-medium text-zinc-700">Official Profiles:</span>
              
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-blue-700 transition-colors py-1"
                aria-label="Haswanth Salapakshi on LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-700" />
                <span className="font-medium">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>

              <span aria-hidden="true" className="text-zinc-300">·</span>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-950 transition-colors py-1"
                aria-label="Haswanth Salapakshi on GitHub"
              >
                <GitHubIcon className="w-4 h-4 text-zinc-800" />
                <span className="font-medium">GitHub</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Developer / AI Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-zinc-200/90 bg-white shadow-sm p-3 group">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-100">
                <img
                  src="/src/assets/images/abstract_ai_concept_1794054092268.jpg"
                  alt="Minimalist abstract algorithmic geometry and neural node structures symbolizing AI exploration"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Subtle caption overlay for context */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-zinc-950/80 via-zinc-950/40 to-transparent text-white">
                  <div className="text-[11px] font-mono tracking-wider uppercase text-zinc-300">
                    Concept Visualization
                  </div>
                  <div className="text-xs font-medium text-zinc-100">
                    Algorithmic Logic · Neural Architectures · Generative AI
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Context Metrics Strip (Frontend Design Pattern) */}
        <div className="mt-14 pt-8 border-t border-zinc-200/70 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-0.5">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Academic Year</div>
            <div className="text-lg font-bold text-zinc-900 tracking-tight">B.Tech First Year</div>
            <div className="text-xs text-zinc-500">First Semester Student</div>
          </div>

          <div className="space-y-0.5">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Primary Language</div>
            <div className="text-lg font-bold text-zinc-900 tracking-tight">Python Core</div>
            <div className="text-xs text-zinc-500">Algorithms & CLI Projects</div>
          </div>

          <div className="space-y-0.5">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Projects Built</div>
            <div className="text-lg font-bold text-zinc-900 tracking-tight font-mono tabular-nums">5 Repositories</div>
            <div className="text-xs text-zinc-500">Python & Web Applications</div>
          </div>

          <div className="space-y-0.5">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Active Engagement</div>
            <div className="text-lg font-bold text-zinc-900 tracking-tight">Hackathons & Ideathons</div>
            <div className="text-xs text-zinc-500">Idea Pitching & Prototyping</div>
          </div>
        </div>

      </div>
    </section>
  );
};
