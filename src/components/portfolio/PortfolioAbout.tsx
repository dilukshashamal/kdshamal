"use client";

import { motion, useReducedMotion } from "framer-motion";
import { detailCards, experience, headingStyle } from "./data";

export function PortfolioAbout() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" data-section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">About</p>
          <h2 style={headingStyle} className="mt-4 text-5xl font-semibold text-white sm:text-6xl">
            Engineering systems that still feel human
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
            <p>
              My work sits between software engineering, applied AI, cloud architecture, and visual
              expression. I enjoy building things that are technically solid but still have character,
              rhythm, and presence.
            </p>
            <p>
              I&apos;m especially interested in intelligent interfaces, automation systems, and
              architecture decisions that make complex products easier to scale and easier to understand.
            </p>
            <p>
              As a beginner solution architect, I&apos;m growing into the systems side of my practice while
              keeping a creative eye on how every piece feels to the people using it.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {detailCards.map((item) => (
              <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3 text-cyan-200">
                  <item.icon size={18} />
                  <span className="text-xs uppercase tracking-[0.26em] text-slate-400">{item.label}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-200">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.25)]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="text-base text-slate-300">{item.company}</p>
                </div>
                <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
                  {item.period}
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                {item.points.map((point) => (
                  <div key={point} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
