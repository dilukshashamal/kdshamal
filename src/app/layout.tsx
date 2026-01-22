import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diluksha Shamal - AI Engineer & Software Developer",
  description:
    "Portfolio of Diluksha Shamal, an AI Engineer and Software Developer specializing in AI, Machine Learning, and modern software engineering. Expert in building intelligent solutions through cutting-edge technology.",
  keywords: [
    "AI Engineer",
    "Software Developer",
    "Machine Learning",
    "Full-stack Development",
    "Diluksha Shamal",
  ],
  authors: [{ name: "Diluksha Shamal" }],
  openGraph: {
    type: "website",
    title: "Diluksha Shamal - AI Engineer & Software Developer",
    description:
      "Portfolio of Diluksha Shamal, specializing in AI, Machine Learning, and modern software engineering",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06b6d4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
