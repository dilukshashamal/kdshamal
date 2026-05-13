import {
  Brain,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type CaseStudy = {
  title: string;
  category: string;
  summary: string;
  impact: string;
  stack: string[];
  availability: string;
  glow: string;
  line: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  points: string[];
};

export type SkillTool = {
  name: string;
  level: number;
};

export type SkillArea = {
  icon: LucideIcon;
  title: string;
  description: string;
  tools: SkillTool[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string | null;
  icon: LucideIcon;
};

export type AccentPanel = {
  icon: LucideIcon;
  title: string;
  text: string;
  tone: string;
};

export type DetailCard = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  gpa: string;
  honors: string;
};

export type AwardItem = {
  title: string;
  organization: string;
  year: string;
  description: string;
  highlights: string[];
};

export const headingStyle = {
  fontFamily: '"Cormorant Garamond", serif',
} as const;

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const heroStats: HeroStat[] = [
  {
    value: "2,000+",
    label: "active users reached across AI platforms (KAIRO, Character AI)",
  },
  {
    value: "25%",
    label: "cloud infrastructure cost reduction through optimization",
  },
  {
    value: "99.9%",
    label: "data pipeline uptime maintained across enterprise environments",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Production Legal RAG Platform",
    category: "AI Systems & Agentic Workflows",
    summary:
      "End-to-end legal document intelligence system built with agentic workflows, retrieval-augmented generation, and validation layers to ensure accuracy and reduce hallucinations.",
    impact:
      "Improved answer accuracy and grounded responses through LangGraph orchestration, pgvector retrieval optimization, and retrieval policy tuning. Enabled production-grade document analysis with reduced hallucinations.",
    stack: ["LangGraph", "pgvector", "LlamaIndex", "RAG", "Validation Layers"],
    availability: "Codezela Technologies (02/2025)",
    glow: "from-cyan-400/30 via-sky-500/15 to-transparent",
    line: "bg-cyan-300",
  },
  {
    title: "Amazon Bedrock Evaluation & Optimization",
    category: "Cloud AI Infrastructure",
    summary:
      "Comprehensive POC and benchmarking of Amazon Bedrock LLMs against existing models, including latency testing, token optimization, and cost analysis with microservices architecture.",
    impact:
      "Reduced response latency by ~26% (4.2s → 3.1s) and optimized inference costs by 20–30% through prompt tuning and retrieval filtering. Designed cloud-native architecture with Docker, CI/CD, Terraform, Grafana, and MLflow.",
    stack: [
      "Amazon Bedrock",
      "Docker",
      "Terraform",
      "Grafana",
      "MLflow",
      "CI/CD",
    ],
    availability: "Codezela Technologies (2025)",
    glow: "from-violet-400/30 via-fuchsia-500/15 to-transparent",
    line: "bg-violet-300",
  },
  {
    title: "KAIRO & Character AI Platforms",
    category: "AI Product Delivery",
    summary:
      "AI-powered image generation and recognition platforms scaled to 2,000+ active users. Integrated GPT-4 Vision and custom generative models for content creation and visual quality enhancement.",
    impact:
      "Demonstrated strong product-market fit through rapid user growth to 2,000+. Faster content creation with enhanced visual output quality. Led team of engineers in architecting scalable enterprise solutions.",
    stack: ["GPT-4 Vision", "Next.js", "Python", "Cloud Infrastructure"],
    availability: "Codezela Technologies (2025)",
    glow: "from-amber-400/30 via-orange-500/15 to-transparent",
    line: "bg-amber-300",
  },
  {
    title: "Sri Lanka Tea Board Intelligence Platform",
    category: "Document Intelligence & RAG",
    summary:
      "Multilingual regulatory document processing system built with LlamaIndex, LlamaParse, and ChromaDB. Designed to improve decision-making through intelligent retrieval and structured knowledge pipelines.",
    impact:
      "Improved document understanding accuracy by ~20–25%. Reduced manual review effort and processing time by ~30% through optimized Google Cloud infrastructure. Enhanced regulatory analysis capabilities.",
    stack: ["LlamaIndex", "LlamaParse", "ChromaDB", "Google Cloud", "RAG"],
    availability: "Omdena (05/2024 - 02/2025)",
    glow: "from-emerald-400/30 via-teal-500/15 to-transparent",
    line: "bg-emerald-300",
  },
  {
    title: "Cross-Cloud Infrastructure Optimization",
    category: "Cloud Architecture & DevOps",
    summary:
      "Architected and optimized cloud solutions across Azure and AWS platforms. Included infrastructure automation with CloudFormation, Wazuh security alerting, and identity management.",
    impact:
      "Achieved 25% resource cost reduction through optimization. Reduced infrastructure incident resolution from 3 days to 1 day through automated monitoring. Improved security posture with Azure AD integration.",
    stack: ["AWS", "Azure", "CloudFormation", "Terraform", "Wazuh", "Azure AD"],
    availability: "Insighture & Codezela (2024-2025)",
    glow: "from-pink-400/30 via-rose-500/15 to-transparent",
    line: "bg-pink-300",
  },
  {
    title: "Enterprise Data Pipeline Operations",
    category: "Infrastructure & Data Engineering",
    summary:
      "Managed and optimized critical 24/7 data pipelines across global enterprise environments using Apache Airflow, IBM DataStage, and Teradata. Focused on reliability, performance, and observability.",
    impact:
      "Maintained 99.9% uptime for critical workflows. Improved ETL efficiency by 35%. Reduced Mean-Time-To-Recovery (MTTR) by 40% through systematic root cause analysis and monitoring enhancements.",
    stack: ["Apache Airflow", "IBM DataStage", "Teradata", "CloudWatch", "SQL"],
    availability: "Virtusa / UHG OPTUM (10/2022 - 02/2024)",
    glow: "from-blue-400/30 via-indigo-500/15 to-transparent",
    line: "bg-blue-300",
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "02/2025 - Present",
    role: "Software Engineer",
    company: "Codezela Technologies",
    points: [
      "Led architecture decisions and mentored 4–6 engineers building production-grade AI platform with scalable solutions for enterprise use cases.",
      "Architected and delivered production-grade legal RAG platform using LangGraph agentic workflows with pgvector retrieval and grounded citations.",
      "Evaluated Amazon Bedrock with POC testing, reducing latency by ~26% (4.2s → 3.1s) and optimizing costs by 20–30% through prompt tuning.",
      "Designed cloud-native microservices architecture with Docker, CI/CD, Terraform (IaC), Grafana observability, and MLflow integrations.",
      "Developed AI-driven image generation and recognition platforms using GPT-4 Vision, achieving 2,000+ active users (KAIRO & Character AI).",
      "Architected cross-platform cloud solutions on Azure and AWS, optimizing resources for 25% cost reduction and improved reliability.",
    ],
  },
  {
    period: "05/2024 - 02/2025",
    role: "Software Engineer",
    company: "Omdena",
    points: [
      "Collaborated with Sri Lanka Tea Board stakeholders to analyze regulatory requirements and translate into technical designs.",
      "Designed and implemented RAG-based Intelligent Document Processing (IDP) system using LlamaIndex, LlamaParse, and ChromaDB.",
      "Built structured knowledge pipelines for multilingual regulatory documents, improving accuracy by ~20–25% and reducing manual review effort.",
      "Implemented retrieval validation mechanisms to reduce hallucination rates and ensure grounded responses.",
      "Selected Google Cloud infrastructure for 30% processing speed improvement through efficient pipeline design and scalable infrastructure.",
    ],
  },
  {
    period: "02/2024 - 05/2024",
    role: "Infrastructure Engineer (Contract)",
    company: "Insighture",
    points: [
      "Optimized AWS infrastructure by automating deployments with CloudFormation, reducing deployment time and enhancing environment consistency.",
      "Configured Wazuh automated alerts for critical logs, reducing average resolution time from 3 days to 1 day.",
      "Streamlined identity management with Azure Active Directory, improving security and reducing access issues across the organization.",
    ],
  },
  {
    period: "10/2022 - 02/2024",
    role: "Infrastructure Engineer Intern",
    company: "Virtusa (UHG - OPTUM)",
    points: [
      "Monitored critical 24/7 data pipelines across global environments, maintaining 99.9% uptime through proactive Airflow DAG management.",
      "Optimized ETL processes on IBM DataStage and Teradata, improving warehousing efficiency by 35% through refined scheduling and tuning.",
      "Performed root cause analysis for Level 3 technical support, reducing MTTR by 40% through systematic troubleshooting.",
      "Enhanced monitoring with Apache Airflow automation, reducing manual intervention by 25% and improving SLA compliance.",
      "Won 'Best Observability Implementation' award for CloudWatch/SNS/Lambda/X-Ray integration achieving 95% anomaly detection accuracy.",
    ],
  },
];

export const skillAreas: SkillArea[] = [
  {
    icon: Layers3,
    title: "Solution Architecture",
    description:
      "System modeling, microservices design, REST APIs, technical specifications, and requirement analysis.",
    tools: [
      { name: "System Modeling (UML/ERD)", level: 85 },
      { name: "Microservices Architecture", level: 82 },
      { name: "REST API Design", level: 88 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, Docker, Kubernetes, CI/CD pipelines, Infrastructure as Code, and observability.",
    tools: [
      { name: "AWS (CloudWatch, Lambda, X-Ray)", level: 85 },
      { name: "Docker & Kubernetes", level: 82 },
      { name: "Terraform / CloudFormation", level: 80 },
      { name: "CI/CD Pipelines", level: 83 },
      { name: "Grafana & Prometheus", level: 78 },
    ],
  },
  {
    icon: Brain,
    title: "Development & AI",
    description:
      "Full-stack development with focus on AI/ML systems, LLMs, RAG, and agentic architectures.",
    tools: [
      { name: "Python (LangGraph, LangChain, LlamaIndex)", level: 88 },
      { name: "Next.js / React / JavaScript", level: 86 },
      { name: "FastAPI / Flask", level: 82 },
      { name: "RAG/LLM Systems", level: 85 },
      { name: "TensorFlow / PyTorch", level: 76 },
      { name: "Azure AI Foundry & Vertex AI", level: 80 },
    ],
  },
  {
    icon: Network,
    title: "Data & Databases",
    description:
      "Data pipeline orchestration, SQL, NoSQL, vector databases, and ETL optimization.",
    tools: [
      { name: "Apache Airflow", level: 84 },
      { name: "SQL & Teradata", level: 83 },
      { name: "ChromaDB & pgvector", level: 81 },
      { name: "ETL Optimization", level: 82 },
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "dilukshashamal2001@gmail.com",
    href: "mailto:dilukshashamal2001@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+94 76 916 7522",
    href: "tel:+94769167522",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Matara, Sri Lanka",
    href: null,
    icon: MapPin,
  },
  {
    label: "GitHub",
    value: "github.com/dilukshashamal",
    href: "https://github.com/dilukshashamal",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dilukshashamal",
    href: "https://www.linkedin.com/in/dilukshashamal/",
    icon: Linkedin,
  },
];

export const accentPanels: AccentPanel[] = [
  {
    icon: Cpu,
    title: "Full-Stack Developer",
    text: "Building scalable applications with Next.js, Python, and cloud-native architectures.",
    tone: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
  },
  {
    icon: Brain,
    title: "AI Systems Engineer",
    text: "Designing production RAG systems, agentic workflows, and intelligent document processing.",
    tone: "border-violet-400/30 bg-violet-400/10 text-violet-100",
  },
  {
    icon: Layers3,
    title: "Solution Architect",
    text: "Designing scalable cloud architectures on AWS and Azure with focus on cost optimization.",
    tone: "border-amber-400/30 bg-amber-400/10 text-amber-100",
  },
];

export const detailCards: DetailCard[] = [
  {
    icon: Briefcase,
    label: "Current role",
    value: "Software Engineer at Codezela Technologies",
  },
  { icon: Building2, label: "Base", value: "Matara, Sri Lanka" },
  {
    icon: Cloud,
    label: "Focus",
    value: "AI systems, cloud architecture, and scalable platforms",
  },
  {
    icon: Sparkles,
    label: "Expertise",
    value: "Solution architecture, agentic AI, RAG systems",
  },
];

export const educationItems: EducationItem[] = [
  {
    degree: "BSc (Hons) in Software Engineering",
    school: "NSBM Green University",
    period: "2020 - 2024",
    gpa: "3.71",
    honors: "First Class",
  },
];

export const awardItems: AwardItem[] = [
  {
    title: "Best Observability Implementation",
    organization: "Virtusa (UHG - OPTUM)",
    year: "2023-2024",
    description:
      "Recognized for elevating microservice observability and achieving exceptional anomaly detection accuracy.",
    highlights: [
      "CloudWatch, SNS, Lambda, X-Ray, Open Telemetry integration",
      "95% anomaly detection accuracy",
      "40% reduction in Mean-Time-To-Recovery",
    ],
  },
];

export const certifications = [
  "AWS Cloud Sales Accreditation",
  "AWS Cloud Economics Accreditation",
  "AWS Solutions Architect - Associate (SAA-C03) - In Progress",
  "Career Essentials in Generative AI by Microsoft & LinkedIn",
];

export const heroTechStack = [
  "Python",
  "Next.js",
  "AWS",
  "Azure",
  "LLMs",
  "Kubernetes",
  "Terraform",
  "Apache Airflow",
];
