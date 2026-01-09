import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RoboticsVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Robotic Arm Visual */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2 }}
        className="absolute left-0 top-1/4 w-1/3 h-1/2"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGFybSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3OTc0ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Robotics"
          className="w-full h-full object-cover mix-blend-lighten"
        />
      </motion.div>

      {/* Circuit Board Pattern */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute right-0 top-1/3 w-1/3 h-1/2"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1640552421163-5a8e34827550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Nzg5NjkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Circuit"
          className="w-full h-full object-cover mix-blend-lighten"
        />
      </motion.div>

      {/* Neural Network Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzY3OTM2NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Neural Network"
          className="w-full h-full object-cover mix-blend-lighten"
        />
      </motion.div>

      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Animated circuit paths */}
        <motion.path
          d="M 100 100 L 300 100 L 300 300 L 500 300"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 800 200 L 600 200 L 600 400 L 400 400"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 200 600 L 400 600 L 400 450 L 650 450"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Connection nodes */}
        {[
          { cx: 100, cy: 100 },
          { cx: 300, cy: 300 },
          { cx: 500, cy: 300 },
          { cx: 800, cy: 200 },
          { cx: 600, cy: 400 },
          { cx: 400, cy: 400 },
          { cx: 200, cy: 600 },
          { cx: 650, cy: 450 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="#06b6d4"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Hexagonal tech pattern */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20"
            style={{
              left: `${(i * 15) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="none"
                stroke="rgba(6, 182, 212, 0.1)"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
