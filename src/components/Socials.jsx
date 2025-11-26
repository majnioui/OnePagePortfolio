import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socials = [
    { icon: Github, href: "https://github.com/majnioui", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/m_majnioui", label: "X" },
    { icon: Linkedin, href: "https://linkedin.com/in/elmajnioui", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@majnioui.xyz", label: "Email" }
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
                        <social.icon className="w-6 h-6" />
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
