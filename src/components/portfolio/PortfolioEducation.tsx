"use client";

import {
  awardItems,
  certifications,
  educationItems,
  headingStyle,
} from "./data";

export function PortfolioEducation() {
  return (
    <section
      id="education"
      data-section
      className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/10"
    >
      <div className="mx-auto max-w-4xl">
        <h2 style={headingStyle} className="text-4xl font-semibold text-white">
          Education & Recognition
        </h2>

        {/* Education */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white">Education</h3>
          <div className="mt-4 space-y-4">
            {educationItems.map((edu) => (
              <div
                key={`${edu.school}-${edu.degree}`}
                className="border-l-2 border-cyan-300/30 pl-6"
              >
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h4 className="font-semibold text-white">{edu.degree}</h4>
                  <span className="text-sm text-slate-400">{edu.period}</span>
                </div>
                <p className="text-sm text-cyan-200">{edu.school}</p>
                <p className="mt-2 text-sm text-slate-300">
                  GPA: <strong>{edu.gpa}</strong> • {edu.honors}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        {awardItems.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white">Awards</h3>
            <div className="mt-4 space-y-4">
              {awardItems.map((award) => (
                <div
                  key={award.title}
                  className="border-l-2 border-amber-300/30 pl-6"
                >
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h4 className="font-semibold text-white">{award.title}</h4>
                    <span className="text-sm text-slate-400">{award.year}</span>
                  </div>
                  <p className="text-sm text-amber-200">{award.organization}</p>
                  <p className="mt-2 text-sm text-slate-300">
                    {award.description}
                  </p>
                  {award.highlights.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {award.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-sm text-slate-400"
                        >
                          <span>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white">Certifications</h3>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-3 text-sm text-slate-300">
                  <span className="text-cyan-300">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
