import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { CometCard } from "@/components/ui/comet-card";

const projects = [
    {
        title: "FPLRadar.com",
        description: "Real-time Fantasy Premier League analytics with live points tracking, player statistics, fixture difficulty ratings, and transfer insights.",
        link: "https://fplradar.com",
        tags: ["Tanstack Start", "Shadcn", "Tailwind CSS", "Bun"],
        image: "/image01.jpg"
    },
    {
        title: "Minimal NextJS Portfolio/blog",
        description: "A minimalistic portfolio/blog website built with Next.js",
        link: "https://github.com/majnioui/minimal-nextjs-blog",
        tags: ["NextJS", "MDX", "Tailwind CSS"],
        image: "/image01.jpg"
    },
    {
        title: "Simple Portfolio",
        description: "Something experimental and fun.",
        link: "https://majnioui.github.io/Personal-portfolio/",
        tags: ["JavaScript", "HTML", "CSS"],
        image: "/image03.png"
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
                    <CometCard key={index} className="w-full h-full">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden"
                        >
                            <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-xl font-medium text-zinc-100">
                                        {project.title}
                                    </h3>
                                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} className="text-zinc-500" />
                                </div>
                                <p className="text-zinc-400 text-base font-light leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-zinc-600 bg-zinc-800/50 px-2 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </CometCard>
                ))}
            </div>
        </section>
    );
};

export default Projects;
