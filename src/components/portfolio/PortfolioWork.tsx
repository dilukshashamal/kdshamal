"use client";

import { caseStudies, headingStyle } from "./data";

export function PortfolioWork() {
  return (
    <section
      id="work"
      data-section
      className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/10"
    >
      <div className="mx-auto max-w-4xl">
        <h2 style={headingStyle} className="text-4xl font-semibold text-white">
          Key Projects
        </h2>

        <div className="mt-8 space-y-8">
          {caseStudies.map((project) => (
            <div
              key={project.title}
              className="border-l-2 border-cyan-300/30 pl-6"
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <p className="mt-2 text-slate-300">{project.summary}</p>

              <div className="mt-3 rounded border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Impact
                </p>
                <p className="mt-2 text-sm text-slate-200">{project.impact}</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-2 text-xs text-slate-500">
                {project.availability}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
