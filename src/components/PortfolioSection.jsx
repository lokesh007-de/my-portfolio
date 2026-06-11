import { motion } from 'framer-motion';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

const projects = [
  {
    name: "Salon AI Chatbot",
    tags: ["Next.js", "Groq AI", "Supabase"],
    desc: "AI-powered salon assistant chatbot",
    repo: "salon-ai-chatbot"
  },
  {
    name: "VASTRA-LOK",
    tags: ["Next.js", "Tailwind CSS"],
    desc: "Luxury Indian fashion e-commerce platform",
    repo: "vastra-lok"
  },
  {
    name: "Amazona Clone",
    tags: ["React", "Node.js"],
    desc: "Full-stack Amazon clone with cart & auth",
    repo: "amazona-clone"
  },
  {
    name: "Ecommerce Sneaker",
    tags: ["Next.js", "Three.js", "MongoDB"],
    desc: "3D interactive sneaker store",
    repo: "ecommerce-sneaker"
  },
  {
    name: "Flipkart Clone",
    tags: ["React", "CSS"],
    desc: "Pixel-perfect Flipkart UI replica",
    repo: "flipkart-clone"
  },
  {
    name: "CalcPro X1",
    tags: ["JavaScript", "Vercel"],
    desc: "Advanced calculator with Google AdSense",
    repo: "calcpro-x1"
  },
  {
    name: "Language Translator",
    tags: ["JavaScript", "API"],
    desc: "Real-time multi-language translator",
    repo: "language-translator"
  },
  {
    name: "Periodic Table",
    tags: ["React"],
    desc: "Interactive animated periodic table",
    repo: "periodic-table"
  },
  {
    name: "Digital Clock",
    tags: ["JavaScript"],
    desc: "Flip clock desktop widget",
    repo: "digital-clock"
  },
  {
    name: "Portfolio Website",
    tags: ["HTML", "CSS", "JS"],
    desc: "Personal portfolio website",
    repo: "portfolio-website"
  }
];

export default function PortfolioSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="portfolio" className="relative py-24 bg-dark-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold uppercase tracking-widest text-white">
            PORTFOLIO
          </h2>
          <div className="h-[4px] w-20 bg-accent mt-2 rounded-full" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -8,
                borderColor: "rgba(0, 212, 255, 0.6)",
                boxShadow: "0 0 25px rgba(0, 212, 255, 0.25)"
              }}
              className="bg-dark/60 border border-gray-900 rounded-2xl p-6 flex flex-col justify-between hover:bg-dark-card/90 transition-all duration-300 relative group"
            >
              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider text-accent px-2 py-0.5 rounded border border-accent/25 bg-accent/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Name */}
                <h3 className="text-lg font-heading font-bold text-white mb-2 leading-snug group-hover:text-accent transition-colors duration-200">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 font-light mb-6">
                  {project.desc}
                </p>
              </div>

              {/* View Link */}
              <div className="pt-4 border-t border-gray-900/60 flex items-center justify-between">
                <a
                  href={`https://github.com/lokesh007-de/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  <IconBrandGithub size={16} />
                  <span>View on GitHub</span>
                </a>
                
                <a
                  href={`https://github.com/lokesh007-de/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 group-hover:text-accent transition-colors duration-200"
                >
                  <IconExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
