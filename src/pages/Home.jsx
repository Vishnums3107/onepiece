import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview - Bento Grid */}
      <ServicesPreview />

      {/* Tech Stack */}
      <TechStackSection />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Animated Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
            ONE PIECE
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-4">
            One Destination. Infinite Possibilities.
          </p>
          <p className="text-sm md:text-base text-gray-500 font-light tracking-wide max-w-2xl mx-auto">
            Engineering digital products at the intersection of software, intelligence, and markets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(100, 100, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 glass rounded-full text-lg font-medium hover:bg-white/20 transition-all border border-white/20"
            >
              Start the Collaboration
            </motion.button>
          </Link>

          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              Explore Capabilities
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      title: 'Website Development',
      icon: '{ }',
      description: 'High-performance websites, portfolios, and product interfaces engineered for clarity, speed, and trust.',
      microLine: 'Design. Code. Deploy.',
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      title: 'App Development',
      icon: '📱',
      description: 'Native and cross-platform mobile applications built for performance and user experience.',
      microLine: 'iOS. Android. Both.',
      gradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      title: 'AI & Automation',
      icon: '◈',
      description: 'Hands-on AI systems, applied machine learning, and real-world project guidance.',
      microLine: 'Models that work in practice.',
      gradient: 'from-emerald-500/10 to-teal-500/10',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center">
          What We Do
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Building digital solutions that matter
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

                <div className="text-6xl mb-6 font-light">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest border-t border-current/10 pt-4">
                  {service.microLine}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const techStack = [
    'React', 'Next.js', 'Python', 'TensorFlow', 'Node.js', 'PostgreSQL',
    'MongoDB', 'React Native', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'Framer Motion'
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          Tech Stack
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Technologies we work with
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass rounded-xl px-6 py-3 text-sm font-medium hover:bg-white/10 transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold">
            Featured Work
          </h2>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full text-sm font-medium"
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-tight">
          Have a serious idea?<br />Let's build it properly.
        </h2>

        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(100, 100, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 glass-strong rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
          >
            Start the Conversation
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
