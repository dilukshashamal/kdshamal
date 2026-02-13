"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Sparkles, Award } from "lucide-react";

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
      <>Led Business Process Automation initiatives, designing and deploying <span className="text-cyan-400 font-semibold">advanced web scraping</span> and workflow automation systems.</>,
      <>Developed AI-driven image generation and recognition platforms, integrating <span className="text-cyan-400 font-semibold">GPT-4 Vision</span> and custom generative models.</>,
      <>Architected and managed scalable cloud infrastructure on Azure and AWS, optimizing resource utilization by <span className="text-cyan-400 font-semibold">25%</span>.</>,
      <>Engineered cross-platform AI integrations using <span className="text-cyan-400 font-semibold">Vertex AI</span> and Azure AI Foundry.</>,
      <>Spearheaded development of KAIRO and Character AI, growing user base to <span className="text-cyan-400 font-semibold">2,000+ users</span>.</>,
      "Led team in Next.js and Laravel development to fulfill client requirements.",
    ],
    tech: ["Next.js", "Python", "Azure", "AWS", "GPT-4", "Laravel"],
  },
  {
    period: "05/2024 – 02/2025",
    role: "AI Engineer",
    company: "Omdena",
    description: [
      <>Enhanced regulatory decision-making for Sri Lanka Tea Board via <span className="text-cyan-400 font-semibold">LlamaIndex</span> and OCR.</>,
      <>Selected <span className="text-cyan-400 font-semibold">Google Cloud</span> for scalability, increasing processing speed.</>,
      <>Streamlined multilingual document preprocessing to boost model accuracy.</>,
    ],
    tech: ["LlamaIndex", "OCR", "Google Cloud", "Python", "NLP"],
  },
  {
    period: "02/2024 – 05/2024",
    role: "Infrastructure Engineer (Contract)",
    company: "Insighture",
    description: [
      <>Optimized AWS infrastructure using <span className="text-cyan-400 font-semibold">CloudFormation</span>, reducing deployment time.</>,
      <>Configured Wazuh alerts, reducing average resolution time from <span className="text-cyan-400 font-semibold">3 days to 1 day</span>.</>,
      <>Streamlined identity management with Azure Active Directory.</>,
    ],
    tech: ["AWS", "CloudFormation", "Wazuh", "Azure AD", "DevOps"],
  },
  {
    period: "10/2022 – 02/2024",
    role: "Infrastructure Engineer Intern",
    company: "Virtusa (UHG – OPTUM)",
    description: [
      <>Ensured <span className="text-cyan-400 font-semibold">99.9%</span> data workflow uptime by managing Airflow DAGs.</>,
      <>Optimized ETL processes on IBM DataStage/Teradata, improving efficiency by <span className="text-cyan-400 font-semibold">35%</span>.</>,
      <>Reduced incident MTTR by <span className="text-cyan-400 font-semibold">40%</span> through analysis and resolution.</>,
      <>Automated monitoring with Apache Airflow, decreasing manual intervention by <span className="text-cyan-400 font-semibold">25%</span>.</>,
    ],
    tech: ["Apache Airflow", "ETL", "Teradata", "Python", "DataStage"],
  },
];

export function About() {
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
          <h3 className="text-3xl mb-12 text-center">Professional Experience</h3>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative pl-8 sm:pl-12 border-l-2 border-cyan-500/30"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-black" />
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h4>
                    <span className="text-sm font-medium text-cyan-400/80 px-3 py-1 bg-cyan-500/10 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-lg text-gray-300 mb-6 font-medium border-b border-white/5 pb-4">
                    {exp.company}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm sm:text-base leading-relaxed flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500/50 flex-shrink-0" />
                        <div className="flex-1">{item}</div>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full hover:bg-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
