"use client";

import dynamic from "next/dynamic";
import { Navigation } from "../components/Navigation";

// Lazy load components for better performance
const Hero = dynamic(() => import("../components/Hero").then((mod) => ({ default: mod.Hero })), {
  ssr: true,
});
const About = dynamic(() => import("../components/About").then((mod) => ({ default: mod.About })), {
  ssr: false,
});
const Services = dynamic(() => import("../components/Services").then((mod) => ({ default: mod.Services })), {
  ssr: false,
});
const Projects = dynamic(() => import("../components/Projects").then((mod) => ({ default: mod.Projects })), {
  ssr: false,
});
const Blog = dynamic(() => import("../components/Blog").then((mod) => ({ default: mod.Blog })), {
  ssr: false,
});
const Contact = dynamic(() => import("../components/Contact").then((mod) => ({ default: mod.Contact })), {
  ssr: false,
});

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
