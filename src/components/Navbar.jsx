import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX, IconCopy, IconCheck } from '@tabler/icons-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('lokeshkumark026@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav-scrolled py-4' : 'glass-nav py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-heading font-extrabold tracking-widest text-white hover:text-accent transition-colors">
          LOKESH<span className="text-accent">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-gray-400 hover:text-white transition-colors duration-200 uppercase relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Email Badge */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={copyEmail}
            className="flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-full border border-gray-800 bg-dark-card hover:border-accent hover:shadow-glow-cyan text-gray-300 hover:text-accent transition-all duration-300 cursor-pointer"
          >
            <span>lokeshkumark026@gmail.com</span>
            {copied ? (
              <IconCheck size={14} className="text-accent" />
            ) : (
              <IconCopy size={14} className="opacity-60 hover:opacity-100" />
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-accent transition-colors"
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-dark border-b border-gray-900 p-6 md:hidden flex flex-col space-y-6 shadow-2xl glass-nav-scrolled"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold tracking-widest text-gray-400 hover:text-accent transition-colors duration-200 uppercase py-2 border-b border-gray-900/50"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Mobile Email Button */}
            <button
              onClick={() => {
                copyEmail();
                setTimeout(() => setIsOpen(false), 1000);
              }}
              className="flex justify-between items-center text-xs font-semibold px-4 py-3 rounded-lg border border-gray-800 bg-dark-card text-gray-300 hover:text-accent hover:border-accent"
            >
              <span>lokeshkumark026@gmail.com</span>
              {copied ? (
                <IconCheck size={14} className="text-accent" />
              ) : (
                <IconCopy size={14} />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
