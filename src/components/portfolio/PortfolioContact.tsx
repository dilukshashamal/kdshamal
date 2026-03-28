"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { contactLinks, headingStyle } from "./data";

export function PortfolioContact() {
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" data-section className="px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-slate-950/75 p-6 shadow-[0_30px_100px_rgba(2,6,23,0.6)] backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Contact</p>
            <h2 style={headingStyle} className="mt-4 text-5xl font-semibold text-white sm:text-6xl">
              Let&apos;s build something memorable
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              I&apos;m open to collaborations, engineering roles, AI projects, and opportunities where technical
              thinking and creative direction need to work together.
            </p>

            <div className="mt-8 grid gap-3">
              {contactLinks.map((item) => (
                <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                          className="mt-2 block text-sm text-slate-100 hover:text-cyan-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm text-slate-100">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.92))] p-5 sm:p-6"
          >
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-xs uppercase tracking-[0.24em] text-slate-400">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-xs uppercase tracking-[0.24em] text-slate-400">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.24em] text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-[0.24em] text-slate-400">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.24em] text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                  placeholder="Tell me about your idea, team, or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending" : "Send Message"}
                <Send size={16} />
              </button>

              {submitStatus === "success" && (
                <p className="rounded-[1.2rem] border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="rounded-[1.2rem] border border-orange-400/30 bg-orange-400/10 px-4 py-3 text-sm text-orange-100">
                  Failed to send message. Please try again or email me directly at dilukshashamal2001@gmail.com.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
