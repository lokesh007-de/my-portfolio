import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconChevronRight } from '@tabler/icons-react';
import heroBg from '../assets/hero-bg.png';

export default function HeroSection() {
  const firstName = "LOKESH".split("");
  const lastName = "KUMAR".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 150 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ===== FULL PAGE BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Workspace"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.55)' }}
        />
        {/* Left side extra dark so text is readable — like Jason Martin reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Vertical divider line — like Jason Martin */}
      <div className="absolute top-0 bottom-0 left-[52%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-10 hidden lg:block" />

      {/* ===== CONTENT — Left aligned on top of bg ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-24">

        {/* Animated Name */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="select-none mb-3"
        >
          {/* LOKESH */}
          <div className="flex flex-row flex-nowrap font-heading font-extrabold tracking-tight text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
            {firstName.map((letter, idx) => (
              <motion.span key={`first-${idx}`} variants={letterVariants} className="inline-block cursor-default">
                {letter}
              </motion.span>
            ))}
          </div>

          {/* KUMAR */}
          <div className="flex flex-row flex-nowrap font-heading font-extrabold tracking-tight text-accent leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
            {lastName.map((letter, idx) => (
              <motion.span key={`last-${idx}`} variants={letterVariants} className="inline-block cursor-default">
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-gray-400 font-heading text-xs sm:text-sm tracking-widest uppercase mb-8"
        >
          Full Stack Developer
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap gap-4 items-center mb-10"
        >
          <motion.a
            href="#resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 rounded-full border border-white/40 text-white font-bold tracking-widest text-xs uppercase hover:border-accent hover:text-accent transition-all duration-300"
          >
            Resume
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 rounded-full border border-white/40 text-white font-bold tracking-widest text-xs uppercase hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-2"
          >
            Portfolio <IconChevronRight size={14} stroke={3} />
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center space-x-4"
        >
          <a href="https://github.com/lokesh007-de" target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/20 text-gray-400 hover:text-accent hover:border-accent transition-all duration-300">
            <IconBrandGithub size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/20 text-gray-400 hover:text-accent hover:border-accent transition-all duration-300">
            <IconBrandLinkedin size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/20 text-gray-400 hover:text-accent hover:border-accent transition-all duration-300">
            <IconBrandInstagram size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
