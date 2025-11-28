import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Github01Icon, NewTwitterRectangleIcon, Linkedin01Icon, Mail01Icon } from '@hugeicons/core-free-icons';

const socials = [
    { icon: Github01Icon, href: "https://github.com/majnioui", label: "GitHub" },
    { icon: NewTwitterRectangleIcon, href: "https://x.com/m_majnioui", label: "X" },
    { icon: Linkedin01Icon, href: "https://linkedin.com/in/elmajnioui", label: "LinkedIn" },
    { icon: Mail01Icon, href: "mailto:contact@majnioui.xyz", label: "Email" }
];

const Hero = () => {
    return (
        <section className="flex flex-col items-start justify-center min-h-[40vh]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
            >
                <div className="space-y-6">
                    <h1 className="h-[40rem] flex items-center justify-center text-6xl md:text-8xl font-bold tracking-tighter text-white">
                        majnioui.xyz
                    </h1>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-xl md:text-2xl text-zinc-400 font-light tracking-wide">
                        <p>IT Consultant</p>
                        <span className="hidden md:block text-zinc-700">/</span>
                        <p>IBM Products Certified</p>
                        <span className="hidden md:block text-zinc-700">/</span>
                        <p>OSS Developer</p>
                    </div>
                </div>

                <div className="flex gap-6 pt-2">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-white transition-colors"
                            aria-label={social.label}
                        >
                            <HugeiconsIcon icon={social.icon} size={24} strokeWidth={1.5} />
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
