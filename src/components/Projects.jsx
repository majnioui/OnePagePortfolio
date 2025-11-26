import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Github01Icon } from '@hugeicons/core-free-icons';

const projects = [
    {
        title: "Project One",
        description: "A cool open source project built with React.",
        link: "https://github.com/majnioui/project-one",
        tags: ["React", "Tailwind", "Vite"]
    },
    {
        title: "Project Two",
        description: "Another awesome tool for developers.",
        link: "https://github.com/majnioui/project-two",
        tags: ["Node.js", "CLI"]
    },
    {
        title: "Project Three",
        description: "Something experimental and fun.",
        link: "https://github.com/majnioui/project-three",
        tags: ["Three.js", "WebGL"]
    }
];

const Projects = () => {
    return (
        <section className="py-20 px-8 max-w-4xl mx-auto z-10 relative">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-12 text-center"
            >
                Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group block p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <HugeiconsIcon icon={Github01Icon} size={20} color="currentColor" strokeWidth={1.5} className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
