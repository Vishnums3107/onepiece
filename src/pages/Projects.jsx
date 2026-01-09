import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData, categories } from '../data/projectsData';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);

    return (
        <div className="relative overflow-hidden">
            {/* Hero Section */}
            <section className="min-h-[50vh] flex items-center justify-center px-6 py-32 relative">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-glow-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
                        Projects
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary font-light">
                        A showcase of systems designed with precision and purpose
                    </p>
                </motion.div>
            </section>

            {/* Filter Section */}
            <section className="px-6 md:px-12 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                        ? 'glass-strong text-primary shadow-lg'
                                        : 'glass text-secondary hover:text-primary'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Projects Grid */}
            <section className="px-6 md:px-12 pb-32">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-secondary text-lg">No projects found in this category.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">
                        Have a project in mind?
                    </h2>
                    <p className="text-xl text-secondary mb-12">
                        Let's turn your vision into reality.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(100, 100, 255, 0.2)' }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-12 py-5 glass-strong rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
                    >
                        Start a Conversation
                    </motion.a>
                </motion.div>
            </section>
        </div>
    );
};

export default Projects;
