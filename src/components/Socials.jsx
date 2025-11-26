import { motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Github01Icon, NewTwitterRectangleIcon, Linkedin01Icon, Mail01Icon } from '@hugeicons/core-free-icons';

const socials = [
    { icon: Github01Icon, href: "https://github.com/majnioui", label: "GitHub" },
    { icon: NewTwitterRectangleIcon, href: "https://x.com/m_majnioui", label: "X" },
    { icon: Linkedin01Icon, href: "https://linkedin.com/in/elmajnioui", label: "LinkedIn" },
    { icon: Mail01Icon, href: "mailto:contact@majnioui.xyz", label: "Email" }
];

const Socials = () => {
    return (
        <section className="py-20 px-8 text-center z-10 relative">
            <div className="flex justify-center gap-8">
                {socials.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-gray-400 hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 border border-white/5"
                        aria-label={social.label}
                    >
                        <HugeiconsIcon icon={social.icon} size={24} color="currentColor" strokeWidth={1.5} />
                    </motion.a>
                ))}
            </div>
            <footer className="mt-12 text-gray-600 text-sm">
                © {new Date().getFullYear()} majnioui.xyz
            </footer>
        </section>
    );
};

export default Socials;
