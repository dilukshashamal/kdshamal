"use client";

import { useReducedMotion } from "framer-motion";
import { startTransition, useEffect, useState } from "react";
import { PortfolioAbout } from "./portfolio/PortfolioAbout";
import { PortfolioContact } from "./portfolio/PortfolioContact";
import { PortfolioHero } from "./portfolio/PortfolioHero";
import { PortfolioNavigation } from "./portfolio/PortfolioNavigation";
import { PortfolioSkills } from "./portfolio/PortfolioSkills";
import { PortfolioWork } from "./portfolio/PortfolioWork";

export function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) {
          return;
        }

        startTransition(() => {
          setActiveSection(visible.target.id);
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });

    startTransition(() => {
      setActiveSection(id);
      setMenuOpen(false);
    });
  }

  return (
    <div className="relative overflow-x-hidden text-slate-100">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[70] -translate-y-20 rounded-full bg-cyan-300 px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-950 focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.16),transparent_24%),radial-gradient(circle_at_50%_55%,rgba(249,115,22,0.12),transparent_24%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      </div>

      <PortfolioNavigation
        activeSection={activeSection}
        menuOpen={menuOpen}
        onNavigate={scrollToSection}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        reduceMotion={shouldReduceMotion}
      />

      <main id="main-content" className="relative z-10">
        <PortfolioHero onNavigate={scrollToSection} />
        <PortfolioAbout />
        <PortfolioWork onNavigate={scrollToSection} />
        <PortfolioSkills />
        <PortfolioContact />
      </main>

      <footer className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Diluksha Shamal. All rights reserved.</p>
          <p className="uppercase tracking-[0.22em] text-slate-500">
            Built with Next.js, Tailwind CSS, Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
