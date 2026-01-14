"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Sparkles, Award } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep Learning, NLP, Computer Vision, TensorFlow, PyTorch",
    },
    {
      icon: Code2,
      title: "Software Engineering",
      description: "Full-stack Development, System Design, Cloud Architecture",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Cutting-edge Research, Prototyping, Product Development",
    },
    {
      icon: Award,
      title: "Leadership",
      description: "Team Management, Technical Strategy, Mentorship",
    },
  ];

  const experience = [
    {
      period: "02/2025 – Present",
      role: "Software Engineer",
      company: "Codezela Technologies",
      description: [
        "Led Business Process Automation initiatives, designing and deploying advanced web scraping and workflow automation systems.",
        "Developed AI-driven image generation and recognition platforms, integrating GPT-4 Vision and custom generative models.",
        "Architected and managed scalable cloud infrastructure on Azure and AWS, optimizing resource utilization by 25%.",
        "Engineered cross-platform AI integrations using Vertex AI and Azure AI Foundry.",
        "Spearheaded development of KAIRO and Character AI, growing user base to 2,000+ users.",
        "Led team in Next.js and Laravel development to fulfill client requirements.",
      ],
    },
    {
      period: "05/2024 – 02/2025",
      role: "AI Engineer",
      company: "Omdena",
      description: [
        "Enhanced regulatory decision-making for Sri Lanka Tea Board via LlamaIndex and OCR.",
        "Selected Google Cloud for scalability, increasing processing speed.",
        "Streamlined multilingual document preprocessing to boost model accuracy.",
      ],
    },
    {
      period: "02/2024 – 05/2024",
      role: "Infrastructure Engineer (Contract)",
      company: "Insighture",
      description: [
        "Optimized AWS infrastructure using CloudFormation, reducing deployment time.",
        "Configured Wazuh alerts, reducing average resolution time from 3 days to 1 day.",
        "Streamlined identity management with Azure Active Directory.",
      ],
    },
    {
      period: "10/2022 – 02/2024",
      role: "Infrastructure Engineer Intern",
      company: "Virtusa (UHG – OPTUM)",
      description: [
        "Ensured 99.9% data workflow uptime by managing Airflow DAGs.",
        "Optimized ETL processes on IBM DataStage/Teradata, improving efficiency by 35%.",
        "Reduced incident MTTR by 40% through analysis and resolution.",
        "Automated monitoring with Apache Airflow, decreasing manual intervention by 25%.",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-black to-blue-950/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate about leveraging artificial intelligence to solve complex
            problems and create innovative solutions that make a real impact
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all"
            >
              <skill.icon className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl mb-8 text-center">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative pl-8 border-l-2 border-cyan-500/30"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500" />
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                  <div className="text-sm text-cyan-400 mb-2">{exp.period}</div>
                  <h4 className="text-xl mb-1 text-white font-semibold">{exp.role}</h4>
                  <div className="text-gray-300 mb-4 font-medium">{exp.company}</div>
                  <ul className="text-gray-400 list-disc list-inside space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
