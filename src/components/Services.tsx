import { motion } from 'framer-motion';
import { Bot, Cpu, Database, Layers, Network, Rocket } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Bot,
      title: 'AI Model Development',
      description: 'Custom machine learning models tailored to your business needs, from computer vision to NLP solutions.',
      features: ['Custom ML Models', 'Model Training & Tuning', 'Performance Optimization'],
    },
    {
      icon: Cpu,
      title: 'Deep Learning Solutions',
      description: 'Advanced neural network architectures for complex problems requiring state-of-the-art AI capabilities.',
      features: ['Neural Networks', 'Transfer Learning', 'Model Deployment'],
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure to support your AI and analytics initiatives.',
      features: ['ETL Pipelines', 'Data Warehousing', 'Real-time Processing'],
    },
    {
      icon: Network,
      title: 'MLOps & Deployment',
      description: 'End-to-end ML pipeline automation, monitoring, and scaling for production environments.',
      features: ['CI/CD for ML', 'Model Monitoring', 'Auto-scaling'],
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'Complete web and mobile applications with modern frameworks and best practices.',
      features: ['React/Node.js', 'Cloud Native', 'Microservices'],
    },
    {
      icon: Rocket,
      title: 'AI Consulting',
      description: 'Strategic guidance on AI adoption, technology selection, and implementation roadmaps.',
      features: ['Strategy Planning', 'Tech Assessment', 'Team Training'],
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-blue-950/10 to-purple-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span> & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive AI and software engineering services to transform your vision into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="inline-block p-3 bg-cyan-500/10 rounded-lg mb-4 group-hover:bg-cyan-500/20 transition-all">
                  <service.icon className="text-cyan-400" size={32} />
                </div>
                
                <h3 className="text-2xl mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
