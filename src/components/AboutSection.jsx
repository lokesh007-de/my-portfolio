import { motion } from 'framer-motion';
import { IconMapPin, IconMail } from '@tabler/icons-react';
import aboutPortrait from '../assets/about-portrait.png';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">

      {/* RIGHT SIDE — Full height photo, no box, fades into background */}
      <div className="absolute right-0 top-0 bottom-0 w-[65%] z-0">
        <img
          src={aboutPortrait}
          alt="Lokesh Kumar"
          className="w-full h-full object-contain object-right-top"
          style={{ filter: 'brightness(0.75) contrast(1.1)' }}
        />
        {/* Left fade — blends into dark bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
      </div>

      {/* LEFT SIDE — Text content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="max-w-lg">

          {/* ABOUT heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold uppercase tracking-widest text-white">
              ABOUT
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[3px] bg-accent mt-3 rounded-full"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 text-accent/80 hover:text-accent font-mono text-sm mb-8 transition-colors duration-200 w-fit"
          >
            <IconMail size={16} />
            <a href="mailto:lokeshkumark026@gmail.com">lokeshkumark026@gmail.com</a>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-12 font-light"
          >
            Final-year B.Tech IT student and self-taught Full Stack Developer. I build modern web applications using Next.js, Tailwind CSS, Supabase, and AI integrations. Passionate about creating seamless digital experiences.
          </motion.p>

          {/* Location — bottom left like reference */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center space-x-2 text-gray-500 text-sm"
          >
            <IconMapPin size={16} className="text-accent" />
            <div>
              <p className="text-gray-200 font-medium">Aligarh, Uttar Pradesh</p>
              <p className="text-gray-500 text-xs">India</p>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
