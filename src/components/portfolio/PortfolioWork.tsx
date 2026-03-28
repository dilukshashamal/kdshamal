"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, headingStyle } from "./data";

type PortfolioWorkProps = {
  onNavigate: (id: string) => void;
};

export function PortfolioWork({ onNavigate }: PortfolioWorkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" data-section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Selected Work</p>
            <h2 style={headingStyle} className="mt-4 text-5xl font-semibold text-white sm:text-6xl">
              Real projects, real systems, real outcomes
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300">
            These case-study cards are rebuilt from the actual experience already present in the repo:
            AI product delivery, OCR and retrieval systems, cross-cloud integration, and infrastructure
            reliability.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.map((project, index) => (
            <motion.article
              key={project.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_30px_80px_rgba(2,6,23,0.45)]"
            >
              <div className={`relative overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.glow} p-6`}>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/15 bg-slate-950/50 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-200">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-300">
                      {project.availability}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[1, 2, 3].map((level) => (
                      <motion.div
                        key={level}
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : { y: [0, -5, 0], opacity: [0.55, 0.95, 0.55] }
                        }
                        transition={{ duration: 3.5 + level, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-[1.3rem] border border-white/10 bg-slate-950/55 p-4 backdrop-blur"
                      >
                        <div className={`mb-3 h-2 rounded-full ${project.line}`} />
                        <div className="flex items-end justify-between">
                          <span className="text-2xl font-semibold text-white">0{level}</span>
                          <span className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">signal</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
                  <button
                    type="button"
                    onClick={() => onNavigate("contact")}
                    className="hidden rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 hover:border-cyan-300/40 hover:text-cyan-200 sm:inline-flex"
                    aria-label={`Ask about ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-300">{project.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Outcome</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{project.impact}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  className="mt-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200 hover:gap-4"
                >
                  Ask for more detail
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
