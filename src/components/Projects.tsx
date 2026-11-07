import React, { useState } from 'react';
import { ExternalLink, Terminal, Play, CheckCircle } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Featured Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
              Projects I've Built
            </h2>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
              Practical applications created during my first semester to strengthen Python logic, algorithmic branching, object handling, and responsive web development.
            </p>
          </div>

          <a
            href="https://github.com/haswanthsalapakshi-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-800 hover:text-zinc-950 px-3.5 py-2 rounded-lg border border-zinc-300 hover:border-zinc-400 bg-[#FBFBFA] transition-colors self-start md:self-auto shrink-0"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub Profile & Repos</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`rounded-xl border border-zinc-200/90 bg-[#FDFDFC] hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between p-6 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Quiet 1-line text kicker & category (Zero-Pill discipline) */}
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-700" />
                    <span className="font-medium text-zinc-700">{project.category}</span>
                  </div>
                  <span className="font-mono text-[11px] text-zinc-400">0{index + 1}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-base font-bold text-zinc-900 tracking-tight mb-2.5">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Features preview */}
                <div className="space-y-1.5 mb-5 border-t border-zinc-100 pt-3">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-zinc-600">
                      <CheckCircle className="w-3 h-3 text-blue-600 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack rendered as clean unboxed text with typographic separators */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pb-4 mb-4 border-b border-zinc-100">
                  {project.techStack.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {idx < project.techStack.length - 1 && (
                        <span aria-hidden="true" className="text-zinc-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Play className="w-3 h-3" />
                    <span>Run Simulation</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-white hover:bg-zinc-100 border border-zinc-300 rounded-lg transition-colors"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Repository URLs */}
        <div className="mt-8 p-4 rounded-xl border border-zinc-200 bg-[#FBFBFA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-600">
          <div>
            <span className="font-semibold text-zinc-800">Direct GitHub Profile:</span> All source projects are hosted on Haswanth Salapakshi's GitHub workspace.
          </div>
          <a
            href="https://github.com/haswanthsalapakshi-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 shrink-0"
          >
            <span>Browse All Repositories</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>

      {/* Project Interactive Simulator / Code View Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
