/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Image optimization for external images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // Build optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
