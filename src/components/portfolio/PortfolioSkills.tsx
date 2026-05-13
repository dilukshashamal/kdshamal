"use client";

import { headingStyle, skillAreas } from "./data";

export function PortfolioSkills() {
  return (
    <section
      id="skills"
      data-section
      className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/10"
    >
      <div className="mx-auto max-w-4xl">
        <h2 style={headingStyle} className="text-4xl font-semibold text-white">
          Technical Skills
        </h2>

        <div className="mt-8 space-y-8">
          {skillAreas.map((area) => (
            <div key={area.title}>
              <h3 className="text-lg font-semibold text-white">{area.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{area.description}</p>

              <div className="mt-4 space-y-3">
                {area.tools.map((tool) => (
                  <div key={tool.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">{tool.name}</span>
                      <span className="text-xs text-slate-500">
                        {tool.level}%
                      </span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-cyan-400/60"
                        style={{ width: `${tool.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
