import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Process Section */}
      <ProcessSection />

      {/* Packages Section */}
      <PackagesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

const ServicesHero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-32 relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 mb-6"
        >
          💼 Professional Solutions
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
          Transform Your<br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Digital Presence
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-10">
          End-to-end technology solutions designed to accelerate growth,
          streamline operations, and deliver measurable business outcomes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(100, 100, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get a Free Consultation
            </motion.button>
          </Link>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full text-lg font-medium hover:bg-white/10 transition-all"
            >
              View Our Work
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const ServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      tagline: 'Custom websites that convert visitors into customers',
      description: 'From landing pages to complex web applications, we build fast, secure, and scalable solutions tailored to your business goals.',
      features: [
        'Custom React/Next.js applications',
        'E-commerce solutions with payment integration',
        'Progressive Web Apps (PWA)',
        'CMS integration & headless architecture',
        'Performance optimization & SEO',
      ],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconBg: 'bg-blue-500/10',
    },
    {
      icon: '📱',
      title: 'App Development',
      tagline: 'Native & cross-platform mobile experiences',
      description: 'Build powerful mobile applications that your users will love. iOS, Android, or both — we deliver exceptional app experiences.',
      features: [
        'React Native cross-platform apps',
        'Native iOS & Android development',
        'App Store optimization & deployment',
        'Push notifications & analytics',
        'Offline-first architecture',
      ],
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconBg: 'bg-purple-500/10',
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      tagline: 'Intelligent solutions that work while you sleep',
      description: 'Leverage cutting-edge AI to automate workflows, gain insights from data, and create intelligent customer experiences.',
      features: [
        'Custom AI/ML model development',
        'Chatbots & virtual assistants',
        'Process automation (RPA)',
        'Predictive analytics & forecasting',
        'Natural language processing',
      ],
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconBg: 'bg-emerald-500/10',
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      tagline: 'Turn your data into actionable business intelligence',
      description: 'Unlock the power of your data with custom dashboards, reporting systems, and analytics platforms.',
      features: [
        'Business intelligence dashboards',
        'Data pipeline & ETL development',
        'Real-time analytics & monitoring',
        'Custom reporting solutions',
        'Data visualization & insights',
      ],
      gradient: 'from-orange-500/20 to-yellow-500/20',
      iconBg: 'bg-orange-500/10',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      tagline: 'Beautiful designs that drive user engagement',
      description: 'User-centered design that combines aesthetics with functionality. We create interfaces people love to use.',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Design systems & style guides',
        'Usability testing',
        'Responsive & accessible design',
      ],
      gradient: 'from-rose-500/20 to-fuchsia-500/20',
      iconBg: 'bg-rose-500/10',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology solutions for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

                {/* Icon */}
                <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                  {service.icon}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-green-400 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business goals, target audience, and requirements to create a winning strategy.',
      icon: '🔍',
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description: 'Interactive prototypes and designs that bring your vision to life before development.',
      icon: '🎨',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing ensures quality at every stage.',
      icon: '⚙️',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'Seamless deployment and ongoing support to ensure your success post-launch.',
      icon: '🚀',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology that delivers results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -z-10" />
              )}

              <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all h-full text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <span className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const PackagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const packages = [
    {
      name: 'Starter Package',
      description: 'Perfect for startups and small businesses looking to establish their digital presence.',
      features: [
        'Single page website or landing page',
        'Mobile responsive design',
        'Basic SEO optimization',
        'Post-launch support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional Package',
      description: 'Best for growing businesses that need robust digital solutions.',
      features: [
        'Multi-page website or web app',
        'Custom UI/UX design',
        'Advanced functionality & integrations',
        'Analytics & performance tracking',
        'Extended support',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise Package',
      description: 'For large-scale projects requiring comprehensive solutions.',
      features: [
        'Full-stack custom development',
        'Mobile app development',
        'AI/ML integration',
        'Dedicated project manager',
        'Priority support',
        'Ongoing maintenance',
      ],
      cta: 'Contact Us',
      popular: false,
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 relative">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our Packages
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible engagement options designed to fit your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass rounded-3xl p-8 ${pkg.popular ? 'border-2 border-blue-500/50' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-sm font-medium">
                  Recommended
                </div>
              )}

              <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-full text-sm font-semibold transition-all ${pkg.popular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'glass hover:bg-white/10'
                    }`}
                >
                  {pkg.cta}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Custom packages available. Contact us to discuss your specific requirements.
        </p>
      </motion.div>
    </section>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications may take 2-4 months. We provide detailed timelines during the discovery phase.',
    },
    {
      question: 'Do you work with clients remotely?',
      answer: 'Yes, we work with clients from anywhere. We use modern collaboration tools for seamless communication regardless of location.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in React, Next.js, React Native, Node.js, Python, and various database technologies. We choose the best stack for your specific needs.',
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes, we offer maintenance packages to keep your application secure, up-to-date, and performing optimally.',
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We believe in transparent communication with regular progress updates and real-time collaboration through your preferred tools.',
    },
    {
      question: 'Can you help with an existing project?',
      answer: 'Yes! We can take over, improve, or scale existing projects. We\'ll conduct a thorough review and provide recommendations.',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-gray-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start<br />Your Project?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(100, 100, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
