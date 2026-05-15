import { InnovationsPage } from "../../components/InnovationsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation Projects | Diluksha Shamal",
  description:
    "Personal innovation projects by Diluksha Shamal — Helixora AI (precision medicine platform) and Synkora AI (enterprise RAG chatbot with multi-agent orchestration).",
  keywords: [
    "Diluksha Shamal",
    "innovation projects",
    "Helixora AI",
    "Synkora AI",
    "precision medicine",
    "RAG platform",
    "healthcare AI",
    "enterprise AI",
    "LangGraph",
    "Django",
    "FastAPI",
  ],
};

export default function Innovations() {
  return <InnovationsPage />;
}
