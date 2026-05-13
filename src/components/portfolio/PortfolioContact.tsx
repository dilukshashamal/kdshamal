"use client";

import { motion, useReducedMotion } from "framer-motion";
import { contactLinks, headingStyle } from "./data";

export function PortfolioContact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      data-section
      className="px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">
            Contact & Connect
          </p>
          <h2
            style={headingStyle}
            className="mt-4 text-5xl font-semibold text-white sm:text-6xl"
          >
            Get in touch
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            I&apos;m open to collaborations in AI systems engineering, cloud
            architecture, solution design, and leadership opportunities. Feel
            free to reach out via email, phone, or connect on social platforms.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((item, index) => (
            <motion.div
              key={item.label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-3 text-cyan-200">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="mt-2 block text-sm font-medium text-slate-100 hover:text-cyan-200 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm font-medium text-slate-100">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
