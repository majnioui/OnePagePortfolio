import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 z-10 relative">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
                majnioui.xyz
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-400 font-light space-y-2"
            >
                <p>IT Consultant <span className="text-gray-600 mx-2">/</span> IBM Products Certified</p>
                <p>OSS <span className="text-gray-600 mx-2">/</span> Developer</p>
            </motion.div>
        </section>
    );
};

export default Hero;
