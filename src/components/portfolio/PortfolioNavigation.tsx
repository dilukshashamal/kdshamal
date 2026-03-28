"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { navItems } from "./data";

type PortfolioNavigationProps = {
  activeSection: string;
  menuOpen: boolean;
  onNavigate: (id: string) => void;
  onToggleMenu: () => void;
  reduceMotion: boolean | null;
};

export function PortfolioNavigation({
  activeSection,
  menuOpen,
  onNavigate,
  onToggleMenu,
  reduceMotion,
}: PortfolioNavigationProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex w-[min(94%,1240px)] items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_20px_80px_rgba(2,6,23,0.65)] backdrop-blur-xl md:px-6">
        <button type="button" onClick={() => onNavigate("home")} className="flex items-center gap-3 text-left">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-cyan-200">
            <Sparkles size={16} />
          </span>
          <span>
            <span className="block text-sm uppercase tracking-[0.34em] text-cyan-200">Diluksha Shamal</span>
            <span className="block text-xs uppercase tracking-[0.28em] text-slate-400">
              Developer / AI Engineer / Architect
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] ${
                  isActive
                    ? "bg-cyan-300 text-slate-950"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onToggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            className="mx-auto mt-3 flex w-[min(94%,1240px)] flex-col gap-2 rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-3 shadow-[0_20px_80px_rgba(2,6,23,0.65)] backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`rounded-2xl px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.26em] ${
                  activeSection === item.id ? "bg-cyan-300 text-slate-950" : "bg-white/5 text-slate-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
