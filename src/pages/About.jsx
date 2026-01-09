import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Journey Timeline */}
      <JourneySection />

      {/* Principles Grid */}
      <PrinciplesGrid />
    </div>
  );
};

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 relative">
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-glow-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center space-y-12"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
          Built on Logic.<br />Driven by Vision.
        </h1>

        <div className="space-y-8 text-xl md:text-3xl font-light leading-relaxed text-gray-400">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I work at the intersection of computer science, finance, and rational thinking.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            To me, technology is not about trends.<br />
            It is about systems — designed carefully, tested rigorously, and improved continuously.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white font-medium mt-12 max-w-3xl mx-auto"
          >
            Whether it is software, artificial intelligence, or trading models,
            the principle remains the same:
            clarity over complexity, logic over noise.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const milestones = [
    {
      year: '2023',
      title: 'The Beginning',
      description: 'Started exploring programming and fell in love with building systems that solve real problems.',
    },
    {
      year: '2024',
      title: 'Deep Dive into AI & Web',
      description: 'Immersed in machine learning and full-stack development, building real-world applications.',
    },
    {
      year: '2025',
      title: 'Finance Meets Code',
      description: 'Discovered quantitative trading, merging analytical skills with market dynamics.',
    },
    {
      year: '2026',
      title: 'Building the Future',
      description: 'Creating systems that matter, delivering end-to-end solutions for clients worldwide.',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
          The Journey
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping opacity-20" />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
                >
                  <span className="text-sm font-mono text-blue-400">{milestone.year}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 text-sm">{milestone.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const PrinciplesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const principles = [
    {
      title: 'Systems Thinking',
      text: 'Every product is a system. I design from fundamentals, not shortcuts.',
      icon: '◇',
    },
    {
      title: 'Real-World Execution',
      text: 'Ideas are meaningless without implementation. Code must run. Models must perform.',
      icon: '▸',
    },
    {
      title: 'Long-Term Value',
      text: 'I optimize for durability, scalability, and trust — not quick wins.',
      icon: '◈',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 relative">
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          Core Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl p-10 hover:bg-white/10 transition-all group"
            >
              <div className="text-4xl mb-6 text-blue-400 group-hover:scale-110 transition-transform inline-block">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {principle.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
