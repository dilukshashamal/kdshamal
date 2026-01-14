"use client";

import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { Navigation } from "../components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}
