import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail, Cpu, Brain, Sparkles } from 'lucide-react';
import { FloatingCubes } from './FloatingCubes';
import { RoboticsVisual } from './RoboticsVisual';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-purple-950/20" />
      
      {/* 3D Floating Elements */}
      <FloatingCubes />

      {/* Robotics Visual */}
      <RoboticsVisual />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
                AI Engineer & Software Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Diluksha Shamal
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-400 mb-8"
            >
              Transforming ideas into intelligent solutions through cutting-edge AI technology,
              robotics innovation, and modern software engineering
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                View My Work
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-all">
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-6"
            >
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image with innovative frame */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Animated rings around profile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[400px] h-[400px] border-2 border-cyan-500/20 rounded-full" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[450px] h-[450px] border-2 border-blue-500/20 rounded-full border-dashed" />
            </motion.div>

            {/* Profile image container */}
            <div className="relative flex items-center justify-center h-[500px]">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                {/* Placeholder for profile image - Replace src with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                  {/* Animated gradient overlay */}
                  <motion.div
                    animate={{
                      background: [
                        'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                        'radial-gradient(circle at 50% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
                      ],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0"
                  />
                  <div className="text-center z-10">
                    <div className="mb-4 relative">
                      {/* Wireframe user icon */}
                      <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100" fill="none">
                        <motion.circle
                          cx="50"
                          cy="35"
                          r="15"
                          stroke="url(#profile-gradient)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.path
                          d="M 25 75 Q 25 55 50 55 Q 75 55 75 75"
                          stroke="url(#profile-gradient)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                        />
                        <defs>
                          <linearGradient id="profile-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Add your photo here</p>
                    <p className="text-gray-500 text-xs mt-1">Uncomment ImageWithFallback in Hero.tsx</p>
                  </div>
                </div>
                {/* Uncomment and use this when you have your image */}
                {/* <ImageWithFallback
                  src="/path-to-your-image.jpg"
                  alt="Diluksha Shamal"
                  className="w-full h-full object-cover"
                /> */}
              </div>

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 -left-10 px-4 py-3 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-lg shadow-cyan-500/20"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-cyan-500/20 rounded">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">Robotics</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-32 -right-10 px-4 py-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-md border border-blue-500/30 rounded-lg shadow-lg shadow-blue-500/20"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-500/20 rounded">
                    <Brain className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-blue-400 font-medium">AI/ML</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-32 -left-10 px-4 py-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-md border border-purple-500/30 rounded-lg shadow-lg shadow-purple-500/20"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-purple-500/20 rounded">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-sm text-purple-400 font-medium">Innovation</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-gray-400" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}