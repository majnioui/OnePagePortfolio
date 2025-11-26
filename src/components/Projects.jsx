import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Github01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons';

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
        <section className="space-y-8">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-zinc-500 uppercase tracking-widest"
            >
                Selected Works
            </motion.h2>

            <div className="grid grid-cols-1 gap-12">
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
                        className="group block space-y-4"
                    >
                        <div className="aspect-video w-full bg-zinc-900/50 rounded-lg border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors">
                            {/* Placeholder for image */}
                            <div className="w-full h-full bg-gradient-to-br from-zinc-800/20 to-zinc-900/20" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-xl font-medium text-zinc-100 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} className="text-zinc-600 group-hover:text-zinc-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300" />
                            </div>
                            <p className="text-zinc-400 text-base font-light leading-relaxed max-w-xl">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3 pt-1">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium text-zinc-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
