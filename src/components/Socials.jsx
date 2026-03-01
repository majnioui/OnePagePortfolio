import { HugeiconsIcon } from '@hugeicons/react';
import { Github01Icon, NewTwitterRectangleIcon, Linkedin01Icon, Mail01Icon } from '@hugeicons/core-free-icons';
import { motion } from "motion/react";

const socials = [
    { icon: Github01Icon, href: "https://github.com/majnioui", label: "GitHub" },
    { icon: NewTwitterRectangleIcon, href: "https://x.com/m_majnioui", label: "X" },
    { icon: Linkedin01Icon, href: "https://linkedin.com/in/elmajnioui", label: "LinkedIn" },
    { icon: Mail01Icon, href: "mailto:mo@majnioui.me", label: "Email" }
];

const Socials = () => {
    return (
        <section className="flex flex-col gap-8">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-zinc-500 uppercase tracking-widest"
            >
                Connect
            </motion.h2>
            <div className="flex gap-6">
                {socials.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-zinc-400 hover:text-white transition-colors"
                        aria-label={social.label}
                    >
                        <HugeiconsIcon icon={social.icon} size={24} strokeWidth={1.5} />
                    </motion.a>
                ))}
            </div>
            <footer className="mt-12 text-zinc-800 text-sm font-mono">
                © {new Date().getFullYear()} majnioui.me
            </footer>
        </section>
    );
};

export default Socials;
