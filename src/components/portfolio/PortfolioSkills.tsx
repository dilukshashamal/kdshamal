"use client";

import { motion, useReducedMotion } from "framer-motion";
import { headingStyle, skillAreas } from "./data";

export function PortfolioSkills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" data-section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Skills</p>
          <h2 style={headingStyle} className="mt-4 text-5xl font-semibold text-white sm:text-6xl">
            Technical stack with a creative edge
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300">
            The goal is not just shipping code. It&apos;s building systems that are scalable, useful, and visually
            memorable. These strengths come directly from the experience already reflected in your portfolio data.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {skillAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.8rem] border border-white/10 bg-slate-950/65 p-6 sm:p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <div className="inline-flex rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-3 text-cyan-200">
                    <area.icon size={20} />
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold text-white">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{area.description}</p>
                </div>

                <div className="grid gap-4">
                  {area.tools.map((tool) => (
                    <div key={tool.name}>
                      <div className="mb-2 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-slate-300">
                        <span>{tool.name}</span>
                        <span>{tool.level}%</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={shouldReduceMotion ? false : { width: 0 }}
                          whileInView={{ width: `${tool.level}%` }}
                          viewport={{ once: true, amount: 0.7 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-[linear-gradient(90deg,#67e8f9_0%,#8b5cf6_55%,#fb923c_100%)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
