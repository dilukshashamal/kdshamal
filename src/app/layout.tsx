import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diluksha Shamal",
  description:
    "Portfolio of Diluksha Shamal — Software Engineer specializing in production-grade AI systems, scalable cloud architectures, RAG platforms, and agentic workflows.",
  keywords: [
    "Diluksha Shamal",
    "software engineer",
    "AI engineer",
    "solution architect",
    "RAG systems",
    "cloud architecture",
    "LangGraph",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Diluksha Shamal" }],
  openGraph: {
    type: "website",
    title: "Diluksha Shamal | Software Engineer & AI Systems Architect",
    description:
      "Portfolio of Diluksha Shamal — Software Engineer specializing in production-grade AI systems, scalable cloud architectures, and intelligent platforms.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#52adc8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
