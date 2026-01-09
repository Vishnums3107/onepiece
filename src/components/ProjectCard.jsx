import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Limit rotation to ±15 degrees
        const rotateXVal = (mouseY / (rect.height / 2)) * -10;
        const rotateYVal = (mouseX / (rect.width / 2)) * 10;

        setRotateX(rotateXVal);
        setRotateY(rotateYVal);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
            }}
            className="relative group cursor-pointer"
        >
            <div className="glass rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Placeholder gradient when no image */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
                        style={{ transform: 'translateZ(20px)' }}
                    />

                    {/* Hover Glow Effect */}
                    <motion.div
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    />

                    {/* Featured Badge */}
                    {project.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 glass-strong rounded-full text-xs font-semibold">
                            Featured
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4" style={{ transform: 'translateZ(30px)' }}>
                    {/* Category */}
                    <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                        {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-primary group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-secondary line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted border border-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                        {project.tags.length > 3 && (
                            <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted">
                                +{project.tags.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                        <motion.a
                            href={project.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-blue-400 transition-colors"
                        >
                            <span>View Project</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>

                        {project.github && project.github !== '#' && (
                            <motion.a
                                href={project.github}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                <span>Code</span>
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>

            {/* Glow effect on hover */}
            <motion.div
                animate={{ opacity: isHovered ? 0.5 : 0 }}
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl -z-10"
            />
        </motion.div>
    );
};

export default ProjectCard;
