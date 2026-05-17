"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────── */

const INNOVATIONS = [
  {
    name: "Helixora AI",
    tagline: "Precision treatment tailored to your biology.",
    domain: "Healthcare AI · Precision Medicine",
    status: "Active Development",
    github: "https://github.com/dilukshashamal/personalized-medicine-system",
    problem:
      "Modern medicine relies on population-level averages that ignore individual genetics, metabolism, lifestyle, and disease trajectory - leading to delayed therapy optimization, avoidable adverse effects, and higher care costs.",
    solution:
      "A clinical decision-support platform that unifies genomic data, clinical history, lifestyle factors, and disease progression to generate explainable, personalized treatment recommendations with full clinician review workflows and an append-only audit trail.",
    businessOutcome:
      "Reduces trial-and-error treatment selection, cuts avoidable adverse effects, and gives clinicians AI-backed decision support with traceable rationale - targeting the precision oncology, chronic disease, and pharmacogenomics markets.",
    stack: [
      "Django",
      "Django REST Framework",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Gemini AI",
      "Python",
    ],
    highlights: [
      "Consent-gated AI recommendation workflow with durable pre-provider validation",
      "Role-aware, patient-scoped clinical API with append-only audit events",
      "Safe fallback behavior when AI provider is unavailable or low-confidence",
      "Production settings validation, CI checks, and deployment gate script",
    ],
    architecture: [
      {
        label: "API Layer",
        value:
          "Django REST Framework with role-aware, patient-scoped access controls",
      },
      {
        label: "Domain Models",
        value:
          "Patients, Genomics, Recommendations, Clinical Reviews, Audit Events",
      },
      {
        label: "AI Orchestration",
        value:
          "Celery async workflows with Gemini provider + placeholder fallback",
      },
      {
        label: "Audit Trail",
        value:
          "Append-only audit events across the full recommendation lifecycle",
      },
      {
        label: "Safety Rules",
        value:
          "Contraindication checks, missing-data guards, low-confidence review gates",
      },
    ],
  },
  {
    name: "Synkora AI",
    tagline:
      "Enterprise document intelligence with grounded, auditable answers.",
    domain: "Enterprise AI · RAG Platform",
    status: "Active Development",
    github: "https://github.com/dilukshashamal/synkora-client-project-poc",
    problem:
      "Enterprise teams struggle to extract reliable answers from large internal document libraries - existing tools lack source attribution, multi-turn memory, and the observability needed for production trust.",
    solution:
      "A multi-document RAG chatbot platform with a multi-agent orchestration layer (Router, Citation, Memory, Analytical, Tool-Use agents), hybrid pgvector + Azure AI Search retrieval, multi-level memory (short-term, long-term, knowledge graph), and a full MLflow / Prometheus / Grafana observability stack.",
    businessOutcome:
      "Enables enterprises to chat with their internal knowledge base with grounded citations, conversation continuity, and full ML experiment tracking - reducing manual document review time and improving decision quality at scale.",
    stack: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "pgvector",
      "Azure OpenAI",
      "Azure AI Search",
      "LangGraph",
      "MLflow",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    highlights: [
      "Multi-agent orchestration: Router, Citation, Analytical, Memory, and Tool-Use agents",
      "Hybrid retrieval: pgvector + Azure AI Search with automatic fallback",
      "Multi-level memory: short-term, long-term semantic, and knowledge-graph layers",
      "Full observability: MLflow experiment tracking, Prometheus metrics, Grafana dashboards",
    ],
    architecture: [
      {
        label: "Frontend",
        value:
          "Next.js dashboard with document management, chat, and citation UI",
      },
      {
        label: "Backend",
        value:
          "FastAPI with multi-agent orchestration via LangGraph supervisor pattern",
      },
      {
        label: "Retrieval",
        value:
          "Hybrid pgvector + Azure AI Search with score normalization and BM25 blending",
      },
      {
        label: "Memory",
        value:
          "Short-term (10 turns), long-term semantic embeddings, knowledge-graph nodes",
      },
      {
        label: "Observability",
        value:
          "MLflow experiment registry, Prometheus metrics scraping, Grafana dashboards",
      },
    ],
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export function InnovationsPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {/* ── Masthead ── */}
      <header className="masthead">
        <div className="masthead__inner">
          <span className="masthead__title">
            <a href="/">Diluksha Shamal</a>
          </span>

          <nav aria-label="Main navigation">
            <ul className="masthead__nav">
              <li>
                <a href="/">Overview</a>
              </li>
              <li>
                <a href="/#experience">Experience</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
              <li>
                <a href="/#skills">Skills</a>
              </li>
              <li>
                <a href="/#education">Education</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a
                  href="/innovations"
                  className="active masthead__nav-innovations"
                >
                  Innovations
                </a>
              </li>
            </ul>
          </nav>

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
      <nav
        className={`mobile-nav${mobileNavOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul>
          <li>
            <a href="/" onClick={() => setMobileNavOpen(false)}>
              Overview
            </a>
          </li>
          <li>
            <a href="/#experience" onClick={() => setMobileNavOpen(false)}>
              Experience
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={() => setMobileNavOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#skills" onClick={() => setMobileNavOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="/#education" onClick={() => setMobileNavOpen(false)}>
              Education
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={() => setMobileNavOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="/innovations"
              className="active"
              onClick={() => setMobileNavOpen(false)}
            >
              Innovations
            </a>
          </li>
        </ul>
      </nav>

      {/* ── Page content ── */}
      <div className="inno-page">
        {/* Hero */}
        <div className="inno-hero">
          <p className="inno-hero__eyebrow">Independent Research</p>
          <h1 className="inno-hero__title">Innovation Projects</h1>
          <p className="inno-hero__sub">
            Personal projects built to explore high-impact problem spaces - from
            precision medicine to enterprise document intelligence. Each one is
            a full-stack, production-minded system designed around real business
            outcomes.
          </p>
          <a href="/" className="inno-hero__back">
            ← Back to portfolio
          </a>
        </div>

        {/* Cards */}
        <div className="inno-grid">
          {INNOVATIONS.map((proj, i) => (
            <article key={i} className="inno-card">
              {/* Card header */}
              <div className="inno-card__header">
                <div className="inno-card__title-row">
                  <h2 className="inno-card__name">{proj.name}</h2>
                  <span className="inno-card__status">{proj.status}</span>
                </div>
                <span className="inno-card__domain">{proj.domain}</span>
                <p className="inno-card__tagline">{proj.tagline}</p>
              </div>

              {/* Problem / Solution / Outcome */}
              <div className="inno-card__blocks">
                <div className="inno-card__block">
                  <p className="inno-card__block-label">Problem</p>
                  <p className="inno-card__block-text">{proj.problem}</p>
                </div>
                <div className="inno-card__block">
                  <p className="inno-card__block-label">Solution</p>
                  <p className="inno-card__block-text">{proj.solution}</p>
                </div>
                <div className="inno-card__block inno-card__block--outcome">
                  <p className="inno-card__block-label">Business Outcome</p>
                  <p className="inno-card__block-text">
                    {proj.businessOutcome}
                  </p>
                </div>
              </div>

              {/* Architecture breakdown */}
              <div className="inno-card__arch">
                <p className="inno-card__section-title">Architecture</p>
                <dl className="inno-card__arch-list">
                  {proj.architecture.map((row, j) => (
                    <div key={j} className="inno-card__arch-row">
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Highlights */}
              <div className="inno-card__highlights">
                <p className="inno-card__section-title">Key Highlights</p>
                <ul>
                  {proj.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="inno-card__footer">
                <div className="inno-card__stack">
                  {proj.stack.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inno-card__github-btn"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="page__footer">
        <p>&copy; 2026 Diluksha Shamal</p>
      </footer>
    </>
  );
}
