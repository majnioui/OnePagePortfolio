import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';

const projects = [
    {
        title: "FPLRadar.com",
        description: "Real-time Fantasy Premier League analytics with live points tracking, player statistics, fixture difficulty ratings, and transfer insights.",
        link: "https://fplradar.com",
        tags: ["Tanstack Start", "Shadcn", "Tailwind CSS", "Bun"],
        image: "/image01.webp"
    },
    {
        title: "Minimal NextJS Portfolio/blog",
        description: "A minimalistic portfolio/blog website built with Next.js",
        link: "https://github.com/majnioui/minimal-nextjs-blog",
        tags: ["NextJS", "MDX", "Tailwind CSS"],
        image: "/image02.webp"
    },
    {
        title: "Simple Portfolio",
        description: "Something experimental and fun.",
        link: "https://majnioui.github.io/Personal-portfolio/",
        tags: ["JavaScript", "HTML", "CSS"],
        image: "/image03.webp"
    }
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

// Reveal Card Component
const RevealCard = ({ project, index }) => {
    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="group relative block aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
        >
            {/* Image Layer */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-fill object-center"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
            </div>

            {/* Subtle vignette - always visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />

            {/* Hover Overlay - slides up */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Index Number - Top Left (always visible, faded) */}
            <div className="absolute top-5 left-5 z-10">
                <span className="text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors duration-300">
                    0{index + 1}
                </span>
            </div>

            {/* Arrow - Top Right (reveals on hover) */}
            <div className="absolute top-5 right-5 z-10">
                <div className="w-10 h-10 rounded-full border border-white/0 group-hover:border-white/30 bg-white/0 group-hover:bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} className="text-white" />
                </div>
            </div>

            {/* Content Panel - slides up from bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Title - always partially visible */}
                <h3 className="text-xl md:text-2xl font-medium text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {project.title}
                </h3>

                {/* Description - reveals on hover */}
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {project.description}
                </p>

                {/* Tags - reveal with stagger effect */}
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-150">
                    {project.tags.map((tag, i) => (
                        <span
                            key={tag}
                            className="text-xs font-medium text-zinc-300 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Border highlight on hover */}
            <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />

            {/* Minimal title hint at bottom when not hovered */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-sm font-medium text-white/80 truncate">
                    {project.title}
                </span>
                <span className="text-xs text-white/40 flex-shrink-0 ml-2">
                    View →
                </span>
            </div>
        </motion.a>
    );
};

const Projects = () => {
    return (
        <section className="space-y-8">
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium text-zinc-500 uppercase tracking-widest"
            >
                Selected Works
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
                {projects.map((project, index) => (
                    <RevealCard key={project.title} project={project} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
