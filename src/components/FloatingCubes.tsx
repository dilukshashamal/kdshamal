"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const cubesData = [
  { size: 80, x: "10%", y: "20%", duration: 20, delay: 0 },
  { size: 60, x: "80%", y: "30%", duration: 25, delay: 2 },
  { size: 100, x: "70%", y: "70%", duration: 30, delay: 1 },
  { size: 50, x: "20%", y: "80%", duration: 22, delay: 3 },
  { size: 70, x: "90%", y: "60%", duration: 28, delay: 1.5 },
];

const particlesCount = 20;

export const FloatingCubes = memo(function FloatingCubes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cubesData.map((cube, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: cube.x,
            top: cube.y,
            width: cube.size,
            height: cube.size,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: cube.duration,
            repeat: Infinity,
            delay: cube.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm transform rotate-45"
            style={{
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.1)",
            }}
          />
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(particlesCount)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
});
