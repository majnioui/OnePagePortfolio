import { motion, useSpring, useTransform } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { useState, useRef } from 'react';

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

const ProjectCard = ({ project, index }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: isHovered 
                    ? `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.1}deg) rotateY(${(mousePosition.x - 50) * -0.1}deg)` 
                    : 'perspective(1000px) rotateX(0) rotateY(0)',
            }}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-900/50"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
            
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
            />

            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 50%)`,
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-700 pointer-events-none" />

            <div className="absolute top-4 left-4">
                <span className="text-xs font-mono text-white/30 group-hover:text-white/60 transition-colors duration-500">
                    0{index + 1}
                </span>
            </div>

            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4"
                onClick={(e) => e.stopPropagation()}
            >
                <motion.div 
                    className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all cursor-pointer"
                    animate={isHovered ? { rotate: 45 } : { rotate: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} className="text-white/70" />
                </motion.div>
            </a>

            <div className="absolute inset-x-4 bottom-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white truncate">
                        {project.title}
                    </h3>
                </div>

                <motion.p 
                    className="text-sm text-zinc-400 line-clamp-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    {project.description}
                </motion.p>

                <motion.div 
                    className="flex flex-wrap gap-1.5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                >
                    {project.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] md:text-xs font-medium text-zinc-300 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-[10px] md:text-xs font-medium text-zinc-500 px-2.5 py-1">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </motion.div>
            </div>
        </motion.div>
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
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
