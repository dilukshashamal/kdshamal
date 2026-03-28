import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diluksha Shamal | Developer, AI Engineer, Solution Architect",
  description:
    "Portfolio of Diluksha Shamal, a developer, AI engineer, and beginner solution architect building intelligent systems with strong visual thinking.",
  keywords: [
    "portfolio",
    "developer",
    "AI engineer",
    "solution architect",
    "Diluksha Shamal",
    "creative technologist",
  ],
  authors: [{ name: "Diluksha Shamal" }],
  openGraph: {
    type: "website",
    title: "Diluksha Shamal | Creative Systems Portfolio",
    description:
      "A cyber-creative portfolio blending technical depth, AI engineering, architecture thinking, and visual expression.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#22d3ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Cormorant+Garamond:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="overflow-x-hidden bg-slate-950 text-slate-100 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
