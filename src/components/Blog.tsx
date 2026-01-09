import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Blog() {
  const posts = [
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we write code and build applications.',
      date: 'Jan 5, 2026',
      readTime: '8 min read',
      category: 'AI Insights',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    },
    {
      title: 'Building Scalable ML Pipelines',
      excerpt: 'Best practices for designing and implementing production-ready machine learning systems at scale.',
      date: 'Dec 28, 2025',
      readTime: '12 min read',
      category: 'MLOps',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    },
    {
      title: 'Transformers: A Deep Dive',
      excerpt: 'Understanding the architecture that powers modern language models and revolutionized NLP.',
      date: 'Dec 15, 2025',
      readTime: '15 min read',
      category: 'Deep Learning',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    },
    {
      title: 'Ethics in AI Development',
      excerpt: 'Discussing the importance of responsible AI development and addressing bias in machine learning.',
      date: 'Dec 1, 2025',
      readTime: '10 min read',
      category: 'AI Ethics',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&q=80',
    },
    {
      title: 'Optimizing Neural Networks',
      excerpt: 'Techniques and strategies for improving model performance and reducing computational costs.',
      date: 'Nov 20, 2025',
      readTime: '11 min read',
      category: 'Optimization',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
    },
    {
      title: 'Cloud-Native AI Applications',
      excerpt: 'Leveraging cloud infrastructure for deploying and scaling AI-powered applications efficiently.',
      date: 'Nov 10, 2025',
      readTime: '9 min read',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
  ];

  return (
    <section id="blog" className="relative py-20 bg-gradient-to-b from-black to-blue-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span> & Insights
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Thoughts on AI, machine learning, and the future of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-xs text-cyan-400">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-sm text-cyan-400 group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/5 hover:border-cyan-500/50 transition-all">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
