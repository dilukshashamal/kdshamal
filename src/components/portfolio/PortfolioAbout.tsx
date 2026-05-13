"use client";

import { experience, headingStyle } from "./data";

export function PortfolioAbout() {
  return (
    <section
      id="about"
      data-section
      className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/10"
    >
      <div className="mx-auto max-w-4xl">
        <h2 style={headingStyle} className="text-4xl font-semibold text-white">
          Overview
        </h2>

        <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
          <div>
            <h3 className="font-semibold text-white">
              Professional Background
            </h3>
            <p className="mt-2">
              Full-stack engineer and AI systems architect with expertise in
              building production-grade intelligent systems, scalable cloud
              architectures, and mission-critical data pipelines. Currently
              leading engineering teams at Codezela Technologies in AI platform
              development and infrastructure optimization.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Technical Focus</h3>
            <p className="mt-2">
              Specialized in AI/ML systems (RAG platforms, agentic workflows
              with LangGraph), cloud infrastructure on AWS and Azure, full-stack
              development (Next.js, Python, FastAPI), and enterprise data
              engineering (Apache Airflow, ETL optimization). Proven track
              record of delivering measurable impact: 99.9% uptime, 26% latency
              reduction, 25% cost optimization.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Education</h3>
            <p className="mt-2">
              BSc (Hons) in Software Engineering from NSBM Green University (GPA
              3.71, First Class honors, 2020-2024). AWS Certified (Sales & Cloud
              Economics Accreditation, SAA-C03 in progress). Career Essentials
              in Generative AI by Microsoft & LinkedIn.
            </p>
          </div>
        </div>

        <h2
          style={headingStyle}
          className="mt-16 text-3xl font-semibold text-white"
        >
          Work Experience
        </h2>

        <div className="mt-8 space-y-8">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="border-l-2 border-cyan-300/30 pl-6"
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                <span className="text-sm text-slate-400">{job.period}</span>
              </div>
              <p className="text-sm text-cyan-200">{job.company}</p>

              <ul className="mt-3 space-y-2 text-slate-300">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
