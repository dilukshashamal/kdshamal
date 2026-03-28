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

export const headingStyle = { fontFamily: '"Cormorant Garamond", serif' } as const;

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const heroStats: HeroStat[] = [
  { value: "2,000+", label: "users reached across KAIRO and Character AI" },
  { value: "25%", label: "cloud resource optimization through architecture work" },
  { value: "99.9%", label: "workflow uptime supported in enterprise data systems" },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "KAIRO & Character AI",
    category: "AI Product Delivery",
    summary:
      "AI-driven platforms built for real users, combining image generation, recognition workflows, and product-focused engineering.",
    impact:
      "Scaled to more than 2,000 users while balancing UX, model integration, and delivery speed.",
    stack: ["Next.js", "Python", "GPT-4 Vision", "Azure AI", "Product Delivery"],
    availability: "Private case study",
    glow: "from-cyan-400/30 via-sky-500/15 to-transparent",
    line: "bg-cyan-300",
  },
  {
    title: "Sri Lanka Tea Board Intelligence Workflow",
    category: "Applied AI / OCR",
    summary:
      "A multilingual document intelligence pipeline built to improve regulatory decision-making through OCR, retrieval, and better document preprocessing.",
    impact:
      "Improved processing speed and model usefulness by pairing LlamaIndex with cloud-scale thinking.",
    stack: ["LlamaIndex", "OCR", "Google Cloud", "Python", "NLP"],
    availability: "Details on request",
    glow: "from-violet-400/30 via-fuchsia-500/15 to-transparent",
    line: "bg-violet-300",
  },
  {
    title: "Cross-Cloud AI Integration",
    category: "Solution Architecture",
    summary:
      "Integrated AI workflows across Azure AI Foundry, Vertex AI, AWS, and Azure infrastructure to support production-ready intelligent systems.",
    impact:
      "Brought architecture thinking into practical delivery by choosing scalable services and reducing waste.",
    stack: ["Azure", "AWS", "Vertex AI", "Architecture", "Automation"],
    availability: "Architecture walkthrough available",
    glow: "from-amber-400/30 via-orange-500/15 to-transparent",
    line: "bg-amber-300",
  },
  {
    title: "Infrastructure Reliability Operations",
    category: "Cloud & Security Ops",
    summary:
      "Hands-on infrastructure work spanning CloudFormation, Wazuh alerting, Azure AD, Airflow, ETL systems, and incident resolution.",
    impact:
      "Reduced deployment time, improved MTTR, and supported reliable enterprise-scale data workflows.",
    stack: ["CloudFormation", "Wazuh", "Azure AD", "Airflow", "Teradata"],
    availability: "Operational snapshots on request",
    glow: "from-emerald-400/30 via-teal-500/15 to-transparent",
    line: "bg-emerald-300",
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "02/2025 - Present",
    role: "Software Engineer",
    company: "Codezela Technologies",
    points: [
      "Led business process automation with advanced web scraping and workflow systems.",
      "Built AI image generation and recognition platforms with GPT-4 Vision and custom generative flows.",
      "Architected Azure and AWS infrastructure with a 25% resource optimization outcome.",
    ],
  },
  {
    period: "05/2024 - 02/2025",
    role: "AI Engineer",
    company: "Omdena",
    points: [
      "Enhanced regulatory decision-making for Sri Lanka Tea Board using LlamaIndex and OCR.",
      "Selected Google Cloud infrastructure for better scalability and faster processing.",
      "Improved multilingual document preprocessing for stronger model accuracy.",
    ],
  },
  {
    period: "02/2024 - 05/2024",
    role: "Infrastructure Engineer (Contract)",
    company: "Insighture",
    points: [
      "Optimized AWS infrastructure with CloudFormation for faster deployments.",
      "Configured Wazuh alerts and reduced resolution time from 3 days to 1 day.",
      "Streamlined identity management with Azure Active Directory.",
    ],
  },
  {
    period: "10/2022 - 02/2024",
    role: "Infrastructure Engineer Intern",
    company: "Virtusa (UHG - OPTUM)",
    points: [
      "Maintained 99.9% data workflow uptime by managing Airflow DAGs.",
      "Improved ETL efficiency by 35% across IBM DataStage and Teradata systems.",
      "Reduced incident MTTR by 40% through monitoring and faster issue resolution.",
    ],
  },
];

export const skillAreas: SkillArea[] = [
  {
    icon: Code2,
    title: "Development",
    description: "Modern frontend and full-stack delivery with production-minded implementation.",
    tools: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript / JavaScript", level: 89 },
      { name: "Laravel / APIs", level: 76 },
    ],
  },
  {
    icon: Brain,
    title: "AI Engineering",
    description: "Applied AI systems that connect models, interfaces, and actual product needs.",
    tools: [
      { name: "GPT / Vision Workflows", level: 87 },
      { name: "LlamaIndex / RAG", level: 79 },
      { name: "OCR / NLP Pipelines", level: 82 },
    ],
  },
  {
    icon: Network,
    title: "Architecture",
    description: "Beginner solution architecture with a strong bias toward practical system design.",
    tools: [
      { name: "Azure / AWS Foundations", level: 80 },
      { name: "System Mapping", level: 77 },
      { name: "Scalability Thinking", level: 74 },
    ],
  },
  {
    icon: Sparkles,
    title: "Visual Direction",
    description: "A visual-art mindset applied to interface tone, motion, contrast, and composition.",
    tools: [
      { name: "Creative UI Composition", level: 84 },
      { name: "Motion Storytelling", level: 78 },
      { name: "Art / Tech Integration", level: 86 },
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
    title: "Developer",
    text: "Building polished interfaces and production-ready flows.",
    tone: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
  },
  {
    icon: Brain,
    title: "AI Engineer",
    text: "Connecting models to useful experiences and decision systems.",
    tone: "border-violet-400/30 bg-violet-400/10 text-violet-100",
  },
  {
    icon: Layers3,
    title: "Architect in Progress",
    text: "Learning to design systems that scale cleanly and communicate clearly.",
    tone: "border-amber-400/30 bg-amber-400/10 text-amber-100",
  },
];

export const detailCards: DetailCard[] = [
  { icon: Briefcase, label: "Current role", value: "Software Engineer at Codezela Technologies" },
  { icon: Building2, label: "Base", value: "Matara, Sri Lanka" },
  { icon: Cloud, label: "Focus", value: "AI systems, cloud workflows, and expressive web products" },
  { icon: Sparkles, label: "Creative lens", value: "Visual artistry integrated into technical work" },
];

export const heroTechStack = ["Next.js", "Python", "Azure", "AWS", "GPT-4 Vision", "LlamaIndex"];
