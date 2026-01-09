import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Real-time data analysis using advanced machine learning algorithms for predictive insights.',
      tags: ['Python', 'TensorFlow', 'React', 'AWS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Computer Vision System',
      description: 'Object detection and recognition system for automated quality control in manufacturing.',
      tags: ['PyTorch', 'OpenCV', 'Docker', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&q=80',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'NLP Chatbot Framework',
      description: 'Intelligent conversational AI with context awareness and multi-language support.',
      tags: ['Transformers', 'LangChain', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'MLOps Pipeline Platform',
      description: 'Automated ML model training, deployment, and monitoring infrastructure.',
      tags: ['Kubernetes', 'MLflow', 'GitHub Actions', 'Terraform'],
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
      gradient: 'from-green-500 to-cyan-500',
    },
    {
      title: 'Recommendation Engine',
      description: 'Personalized content recommendation system using collaborative filtering and deep learning.',
      tags: ['Python', 'Scikit-learn', 'Redis', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Autonomous System Simulator',
      description: 'Reinforcement learning environment for training autonomous agents in complex scenarios.',
      tags: ['Gym', 'PyTorch', 'Unity ML', 'C#'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of innovative AI and software engineering projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
