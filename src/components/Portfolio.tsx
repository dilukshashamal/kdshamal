"use client";

import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const PROFILE = {
  name: "Diluksha Shamal",
  title: "Software Engineer & Intelligent Systems Designer",
  image: "/image/dpimg.png",
  email: "dilukshashamal2001@gmail.com",
  phone: "+94 76 916 7522",
  location: "Matara, Sri Lanka",
  github: "https://github.com/dilukshashamal",
  linkedin: "https://www.linkedin.com/in/dilukshashamal/",
};

const EXPERIENCE = [
  {
    period: "02/2025 – Present",
    role: "Software Engineer",
    company: "Codezela Technologies",
    points: [
      "Led architecture decisions and mentored 4–6 engineers building production-grade AI platforms.",
      "Architected production-grade legal RAG platform using LangGraph agentic workflows with pgvector retrieval and grounded citations.",
      "Evaluated Amazon Bedrock with POC testing, reducing latency by ~26% (4.2s → 3.1s) and optimizing costs by 20–30% through prompt tuning.",
      "Designed cloud-native microservices with Docker, CI/CD, Terraform (IaC), Grafana observability, and MLflow integrations.",
      "Developed AI-driven image generation and recognition platforms using GPT-4 Vision, achieving 2,000+ active users (KAIRO & Character AI).",
      "Architected cross-platform cloud solutions on AWS and Azure, achieving 25% resource cost reduction.",
    ],
  },
  {
    period: "05/2024 – 02/2025",
    role: "Software Engineer",
    company: "Omdena",
    points: [
      "Collaborated with Sri Lanka Tea Board stakeholders to analyze regulatory requirements and translate into technical designs.",
      "Designed and implemented RAG-based Intelligent Document Processing system using LlamaIndex, LlamaParse, and ChromaDB.",
      "Built structured knowledge pipelines for multilingual regulatory documents, improving accuracy by ~20–25%.",
      "Implemented retrieval validation mechanisms to reduce hallucination rates and ensure grounded responses.",
    ],
  },
  {
    period: "02/2024 – 05/2024",
    role: "Infrastructure Engineer (Contract)",
    company: "Insighture",
    points: [
      "Optimized AWS infrastructure by automating deployments with CloudFormation, reducing deployment time.",
      "Configured Wazuh automated alerts for critical logs, reducing average resolution time from 3 days to 1 day.",
      "Streamlined identity management with Azure Active Directory, improving security across the organization.",
    ],
  },
  {
    period: "10/2022 – 02/2024",
    role: "Infrastructure Engineer Intern",
    company: "Virtusa (UHG – OPTUM)",
    points: [
      "Monitored critical 24/7 data pipelines across global environments, maintaining 99.9% uptime.",
      "Optimized ETL processes on IBM DataStage and Teradata, improving warehousing efficiency by 35%.",
      "Reduced MTTR by 40% through systematic root cause analysis and monitoring enhancements.",
      'Won "Best Observability Implementation" award for CloudWatch/SNS/Lambda/X-Ray integration achieving 95% anomaly detection accuracy.',
    ],
  },
];

const PROJECTS = [
  {
    title: "Production Legal RAG Platform",
    category: "AI Systems & Agentic Workflows",
    summary:
      "End-to-end legal document intelligence system built with agentic workflows, retrieval-augmented generation, and validation layers to ensure accuracy and reduce hallucinations.",
    impact:
      "Improved answer accuracy through LangGraph orchestration, pgvector retrieval optimization, and retrieval policy tuning. Enabled production-grade document analysis with reduced hallucinations.",
    stack: ["LangGraph", "pgvector", "LlamaIndex", "RAG", "Validation Layers"],
    meta: "Codezela Technologies · 02/2025",
  },
  {
    title: "Amazon Bedrock Evaluation & Optimization",
    category: "Cloud AI Infrastructure",
    summary:
      "Comprehensive POC and benchmarking of Amazon Bedrock LLMs against existing models, including latency testing, token optimization, and cost analysis with microservices architecture.",
    impact:
      "Reduced response latency by ~26% (4.2s → 3.1s) and optimized inference costs by 20–30% through prompt tuning and retrieval filtering.",
    stack: ["Amazon Bedrock", "Docker", "Terraform", "Grafana", "MLflow", "CI/CD"],
    meta: "Codezela Technologies · 2025",
  },
  {
    title: "KAIRO & Character AI Platforms",
    category: "AI Product Delivery",
    summary:
      "AI-powered image generation and recognition platforms scaled to 2,000+ active users. Integrated GPT-4 Vision and custom generative models for content creation.",
    impact:
      "Demonstrated strong product-market fit through rapid user growth to 2,000+. Led team of engineers in architecting scalable enterprise solutions.",
    stack: ["GPT-4 Vision", "Next.js", "Python", "Cloud Infrastructure"],
    meta: "Codezela Technologies · 2025",
  },
  {
    title: "Sri Lanka Tea Board Intelligence Platform",
    category: "Document Intelligence & RAG",
    summary:
      "Multilingual regulatory document processing system built with LlamaIndex, LlamaParse, and ChromaDB to improve decision-making through intelligent retrieval.",
    impact:
      "Improved document understanding accuracy by ~20–25%. Reduced manual review effort and processing time by ~30% through optimized Google Cloud infrastructure.",
    stack: ["LlamaIndex", "LlamaParse", "ChromaDB", "Google Cloud", "RAG"],
    meta: "Omdena · 05/2024 – 02/2025",
  },
  {
    title: "Cross-Cloud Infrastructure Optimization",
    category: "Cloud Architecture & DevOps",
    summary:
      "Architected and optimized cloud solutions across Azure and AWS platforms including infrastructure automation with CloudFormation, Wazuh security alerting, and identity management.",
    impact:
      "Achieved 25% resource cost reduction. Reduced infrastructure incident resolution from 3 days to 1 day through automated monitoring.",
    stack: ["AWS", "Azure", "CloudFormation", "Terraform", "Wazuh", "Azure AD"],
    meta: "Insighture & Codezela · 2024–2025",
  },
  {
    title: "Enterprise Data Pipeline Operations",
    category: "Infrastructure & Data Engineering",
    summary:
      "Managed and optimized critical 24/7 data pipelines across global enterprise environments using Apache Airflow, IBM DataStage, and Teradata.",
    impact:
      "Maintained 99.9% uptime. Improved ETL efficiency by 35%. Reduced MTTR by 40% through systematic root cause analysis.",
    stack: ["Apache Airflow", "IBM DataStage", "Teradata", "CloudWatch", "SQL"],
    meta: "Virtusa / UHG OPTUM · 10/2022 – 02/2024",
  },
];

const SKILLS = [
  {
    title: "AI / ML Systems",
    tools: ["Python", "LangGraph", "LangChain", "LlamaIndex", "RAG / LLM Systems", "TensorFlow", "PyTorch", "Azure AI Foundry", "Vertex AI"],
  },
  {
    title: "Full-Stack Development",
    tools: ["Next.js", "React", "TypeScript", "JavaScript", "FastAPI", "Flask", "REST API Design"],
  },
  {
    title: "Cloud & DevOps",
    tools: ["AWS (CloudWatch, Lambda, X-Ray)", "Azure", "Docker", "Kubernetes", "Terraform", "CloudFormation", "CI/CD Pipelines", "Grafana", "Prometheus"],
  },
  {
    title: "Data Engineering",
    tools: ["Apache Airflow", "IBM DataStage", "Teradata", "SQL", "ChromaDB", "pgvector", "ETL Optimization"],
  },
  {
    title: "Architecture & Design",
    tools: ["System Modeling (UML/ERD)", "Microservices Architecture", "Solution Architecture", "Technical Specifications"],
  },
];

const EDUCATION = [
  {
    degree: "BSc (Hons) in Software Engineering",
    school: "NSBM Green University",
    period: "2020 – 2024",
    gpa: "3.71",
    honors: "First Class",
  },
];

const AWARDS = [
  {
    title: "Best Observability Implementation",
    org: "Virtusa (UHG – OPTUM)",
    year: "2023–2024",
    description:
      "Recognized for elevating microservice observability and achieving exceptional anomaly detection accuracy.",
    highlights: [
      "CloudWatch, SNS, Lambda, X-Ray, Open Telemetry integration",
      "95% anomaly detection accuracy",
      "40% reduction in Mean-Time-To-Recovery",
    ],
  },
];

const CERTIFICATIONS = [
  "AWS Cloud Sales Accreditation",
  "AWS Cloud Economics Accreditation",
  "AWS Solutions Architect – Associate (SAA-C03) · In Progress",
  "Career Essentials in Generative AI by Microsoft & LinkedIn",
];

/* ─── Component ─────────────────────────────────────────────── */

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* Scroll-spy */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(id);
    setMobileNavOpen(false);
  }

  return (
    <>
      {/* ── Masthead ── */}
      <header className="masthead">
        <div className="masthead__inner">
          <span className="masthead__title">
            <a href="#overview" onClick={(e) => { e.preventDefault(); scrollTo("overview"); }}>
              Diluksha Shamal
            </a>
          </span>

          {/* Desktop nav */}
          <nav aria-label="Main navigation">
            <ul className="masthead__nav">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? "active" : ""}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/innovations" className="masthead__nav-innovations">
                  Innovations
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            className="masthead__toggle"
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <nav className={`mobile-nav${mobileNavOpen ? " open" : ""}`} aria-label="Mobile navigation">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/innovations">Innovations</a>
          </li>
        </ul>
      </nav>

      {/* ── Layout ── */}
      <div className="layout">
        {/* ── Sidebar ── */}
        <aside className="sidebar" aria-label="Profile">
          <div className="author__avatar">
            <img src={PROFILE.image} alt={PROFILE.name} />
          </div>

          <div className="author__content">
            <h2 className="author__name">{PROFILE.name}</h2>
            <p className="author__bio">{PROFILE.title}</p>
          </div>

          <ul className="author__urls">
            <li>
              <a href={`mailto:${PROFILE.email}`}>
                <Mail size={14} className="icon" />
                {PROFILE.email}
              </a>
            </li>
            <li>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
                <Phone size={14} className="icon" />
                {PROFILE.phone}
              </a>
            </li>
            <li>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0", fontSize: "0.8rem", color: "#494e52" }}>
                <MapPin size={14} className="icon" />
                {PROFILE.location}
              </span>
            </li>
            <li>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                <Github size={14} className="icon" />
                github.com/dilukshashamal
              </a>
            </li>
            <li>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={14} className="icon" />
                linkedin.com/in/dilukshashamal
              </a>
            </li>
          </ul>

          {/* Sidebar section nav */}
          <nav className="sidebar__nav" aria-label="Page sections">
            <p className="sidebar__nav-title">Sections</p>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? "active" : ""}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/innovations">Innovations ↗</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* ── Main content ── */}
        <main className="page__content" id="main-content">

          {/* Overview */}
          <section id="overview" ref={(el) => { sectionRefs.current.overview = el; }}>
            <h2>Overview</h2>

            <p>
              I am a <strong>Software Engineer at Codezela Technologies</strong>, specializing in
              building production-grade AI systems, scalable cloud architectures, and intelligent
              platforms. My work focuses on AI/ML systems including RAG platforms, agentic workflows
              with LangGraph, and enterprise data engineering.
            </p>

            <h3>Professional Background</h3>
            <p>
              Full-stack engineer and AI systems architect with expertise in building production-grade
              intelligent systems, scalable cloud architectures, and mission-critical data pipelines.
              Currently leading engineering teams at Codezela Technologies in AI platform development
              and infrastructure optimization.
            </p>
            <p>
              I have experience architecting cross-platform cloud solutions on AWS and Azure,
              developing full-stack applications with Next.js and Python, and optimizing infrastructure
              for cost efficiency and reliability. I&apos;ve led engineering teams building AI-driven
              platforms reaching 2,000+ active users.
            </p>

            <h3>Technical Focus</h3>
            <p>
              Specialized in AI/ML systems (RAG platforms, agentic workflows with LangGraph), cloud
              infrastructure on AWS and Azure, full-stack development (Next.js, Python, FastAPI), and
              enterprise data engineering (Apache Airflow, ETL optimization). Proven track record of
              delivering measurable impact: 99.9% uptime, 26% latency reduction, 25% cost optimization.
            </p>

            <h3>Open to Collaboration</h3>
            <p>
              I am always open to collaborations in AI systems engineering, cloud architecture,
              solution design, and leadership opportunities. Feel free to reach out via{" "}
              <a href={`mailto:${PROFILE.email}`}>email</a> or connect on{" "}
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>.
            </p>
          </section>

          {/* Experience */}
          <section id="experience" ref={(el) => { sectionRefs.current.experience = el; }}>
            <h2>Work Experience</h2>
            <ul className="timeline">
              {EXPERIENCE.map((job, i) => (
                <li key={i} className="timeline__item">
                  <div className="timeline__header">
                    <span className="timeline__role">{job.role}</span>
                    <span className="timeline__period">{job.period}</span>
                  </div>
                  <span className="timeline__company">{job.company}</span>
                  <ul className="timeline__points">
                    {job.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          {/* Projects */}
          <section id="projects" ref={(el) => { sectionRefs.current.projects = el; }}>
            <h2>Key Projects</h2>
            <div className="project-list">
              {PROJECTS.map((proj, i) => (
                <div key={i} className="project-card">
                  <div className="project-card__header">
                    <span className="project-card__title">{proj.title}</span>
                    <span className="project-card__category">{proj.category}</span>
                  </div>
                  <p className="project-card__summary">{proj.summary}</p>
                  <div className="project-card__impact">
                    <p className="project-card__impact-label">Impact</p>
                    <p className="project-card__impact-text">{proj.impact}</p>
                  </div>
                  <div className="project-card__stack">
                    {proj.stack.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <p className="project-card__meta">{proj.meta}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" ref={(el) => { sectionRefs.current.skills = el; }}>
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {SKILLS.map((group, i) => (
                <div key={i} className="skill-group">
                  <p className="skill-group__title">{group.title}</p>
                  <div className="skill-group__tags">
                    {group.tools.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education" ref={(el) => { sectionRefs.current.education = el; }}>
            <h2>Education &amp; Recognition</h2>

            <h3>Education</h3>
            <div style={{ marginTop: "0.75rem" }}>
              {EDUCATION.map((edu, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-item__header">
                    <span className="edu-item__degree">{edu.degree}</span>
                    <span className="edu-item__period">{edu.period}</span>
                  </div>
                  <span className="edu-item__school">{edu.school}</span>
                  <p className="edu-item__meta">
                    GPA: <strong>{edu.gpa}</strong> &bull; {edu.honors}
                  </p>
                </div>
              ))}
            </div>

            <h3>Awards</h3>
            <div style={{ marginTop: "0.75rem" }}>
              {AWARDS.map((award, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-item__header">
                    <span className="edu-item__degree">{award.title}</span>
                    <span className="edu-item__period">{award.year}</span>
                  </div>
                  <span className="edu-item__school">{award.org}</span>
                  <p className="edu-item__meta">{award.description}</p>
                  <ul className="cert-list" style={{ marginTop: "0.5rem" }}>
                    {award.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3>Certifications</h3>
            <ul className="cert-list" style={{ marginTop: "0.75rem" }}>
              {CERTIFICATIONS.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section id="contact" ref={(el) => { sectionRefs.current.contact = el; }}>
            <h2>Contact</h2>
            <p>
              Open to collaborations in AI systems engineering, cloud architecture, solution design,
              and leadership opportunities. Feel free to reach out.
            </p>
            <div className="contact-grid">
              {[
                { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
                { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: "Location", value: PROFILE.location, href: null },
                { icon: Github, label: "GitHub", value: "github.com/dilukshashamal", href: PROFILE.github },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dilukshashamal", href: PROFILE.linkedin },
              ].map((item, i) => (
                <div key={i} className="contact-card">
                  <div className="contact-card__icon">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <span className="contact-card__label">{item.label}</span>
                    <div className="contact-card__value">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* ── Footer ── */}
      <footer className="page__footer">
        <p>
          &copy; 2026 Diluksha Shamal
        </p>
      </footer>
    </>
  );
}
