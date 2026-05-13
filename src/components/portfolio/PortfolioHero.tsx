"use client";

import { headingStyle } from "./data";

export function PortfolioHero() {
  return (
    <section id="home" data-section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-[auto_1fr]">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="h-32 w-32 rounded-lg border border-white/10 bg-white/5 overflow-hidden">
              <img
                src="/image/dpimg.png"
                alt="Diluksha Shamal"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Bio Section */}
          <div>
            <h1
              style={headingStyle}
              className="text-4xl font-semibold text-white"
            >
              Diluksha Shamal
            </h1>
            <p className="mt-2 text-lg text-slate-300">
              Software Engineer & AI Systems Architect
            </p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Building production-grade AI systems, scalable cloud
              architectures, and intelligent platforms. Expertise in full-stack
              development, RAG systems, infrastructure optimization, and team
              leadership.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="mailto:dilukshashamal2001@gmail.com"
                className="text-sm text-cyan-200 hover:text-cyan-100 transition-colors"
              >
                dilukshashamal2001@gmail.com
              </a>
              <span className="text-slate-500">•</span>
              <a
                href="tel:+94769167522"
                className="text-sm text-cyan-200 hover:text-cyan-100 transition-colors"
              >
                +94 76 916 7522
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
