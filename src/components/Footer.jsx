import { IconBrandGithub, IconMail, IconArrowUp } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-footer border-t border-gray-950/80 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative z-10">
        
        {/* Name centered in cyan */}
        <h3 className="text-xl font-heading font-extrabold tracking-widest text-accent mb-6 select-none uppercase">
          Lokesh Kumar
        </h3>

        {/* Social / Contact Links */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 text-gray-400">
          <a
            href="https://github.com/lokesh007-de"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200 flex items-center space-x-2 text-sm font-mono"
          >
            <IconBrandGithub size={18} />
            <span>github.com/lokesh007-de</span>
          </a>
          
          <span className="text-gray-800 hidden sm:inline">|</span>

          <a
            href="mailto:lokeshkumark026@gmail.com"
            className="hover:text-accent transition-colors duration-200 flex items-center space-x-2 text-sm font-mono"
          >
            <IconMail size={18} />
            <span>lokeshkumark026@gmail.com</span>
          </a>
        </div>

        {/* Scroll To Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 212, 255, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full border border-gray-800 bg-dark-card text-gray-400 hover:text-accent hover:border-accent hover:shadow-glow-cyan transition-all duration-300 mb-8 cursor-pointer"
          aria-label="Scroll to top"
        >
          <IconArrowUp size={18} />
        </motion.button>

        {/* Credit */}
        <p className="text-xs text-gray-600 font-light tracking-wide">
          Made with ❤️ by <span className="text-gray-400 font-medium">Lokesh Kumar</span> &copy; {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  );
}
