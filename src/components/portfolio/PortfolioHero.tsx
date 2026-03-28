"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { accentPanels, headingStyle, heroStats, heroTechStack } from "./data";

type PortfolioHeroProps = {
  onNavigate: (id: string) => void;
};

export function PortfolioHero({ onNavigate }: PortfolioHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" data-section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">
            <Sparkles size={14} />
            Cyber-creative portfolio
          </div>

          <h1 style={headingStyle} className="mt-6 text-6xl font-semibold leading-[0.88] tracking-tight text-white sm:text-7xl lg:text-[6.5rem]">
            Diluksha Shamal
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Developer, AI engineer, and beginner solution architect blending intelligent systems,
            cloud thinking, and visual artistry into work that feels both precise and alive.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
            I build software with a maker&apos;s eye: interfaces that communicate clearly, AI workflows that
            solve real problems, and system decisions that hold together under pressure.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("work")}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white hover:-translate-y-0.5 hover:border-violet-300/40 hover:bg-violet-400/10"
            >
              Start a Conversation
            </button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-orange-400/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_30px_100px_rgba(2,6,23,0.7)] backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,47,73,0.45),rgba(76,29,149,0.28),rgba(120,53,15,0.24))] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Live signal board</p>
                  <h2 style={headingStyle} className="mt-2 text-4xl font-semibold text-white">
                    Technical depth with visual instinct
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-slate-300">
                  Real profile data
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                <div className="absolute -left-12 top-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-orange-400/15 blur-3xl" />
                <svg viewBox="0 0 600 360" className="absolute inset-0 h-full w-full opacity-80" aria-hidden="true">
                  <defs>
                    <linearGradient id="signal-stroke" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="50%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#fdba74" />
                    </linearGradient>
                  </defs>
                  {[
                    "M20,280 C120,210 160,90 250,130 S420,290 580,80",
                    "M30,210 C130,120 230,290 330,220 S470,120 570,230",
                    "M50,95 C170,190 260,30 350,95 S450,260 560,300",
                  ].map((path, index) => (
                    <motion.path
                      key={path}
                      d={path}
                      fill="none"
                      stroke="url(#signal-stroke)"
                      strokeWidth={index === 1 ? 3 : 2}
                      strokeLinecap="round"
                      strokeDasharray="12 12"
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { pathLength: [0.3, 1, 0.85], opacity: [0.25, 0.8, 0.35] }
                      }
                      transition={{ duration: 8 + index * 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </svg>

                <div className="relative grid gap-4 lg:grid-cols-2">
                  {accentPanels.map((panel) => (
                    <motion.div
                      key={panel.title}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      className={`rounded-[1.35rem] border p-4 backdrop-blur ${panel.tone}`}
                    >
                      <div className="flex items-center gap-3">
                        <panel.icon size={18} />
                        <p className="text-sm font-semibold uppercase tracking-[0.24em]">{panel.title}</p>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-100/85">{panel.text}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="relative mt-4 flex flex-wrap gap-3">
                  {heroTechStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
