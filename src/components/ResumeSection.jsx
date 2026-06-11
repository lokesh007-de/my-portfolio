import { motion } from 'framer-motion';
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPython,
  IconTerminal2,
  IconMusic,
  IconDeviceGamepad2,
  IconCamera,
  IconCircleCheck
} from '@tabler/icons-react';

function SkillBar({ name, percentage, Icon }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center space-x-2 text-gray-300">
          {Icon && <Icon size={16} className="text-accent" />}
          <span className="text-sm font-semibold tracking-wide">{name}</span>
        </div>
        <span className="text-xs font-mono text-accent font-semibold">{percentage}%</span>
      </div>
      <div className="w-full h-[6px] bg-dark rounded-full overflow-hidden border border-gray-900/60">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          className="h-full bg-accent rounded-full"
        />
      </div>
    </div>
  );
}

export default function ResumeSection() {
  const columnVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const timelineItems = [
    { year: "2026", title: "Salon AI Chatbot", desc: "AI Chatbot App (Next.js + Groq + Supabase)", link: "github.com/lokesh007-de/salon-ai-chatbot" },
    { year: "2026", title: "VASTRA-LOK", desc: "Fashion E-commerce (Next.js + Tailwind)" },
    { year: "2026", title: "Amazona Clone", desc: "Amazon Clone (React + Node.js)" },
    { year: "2026", title: "Ecommerce Sneaker", desc: "3D Sneaker Store (Next.js + Three.js + MongoDB)" },
    { year: "2025", title: "Flipkart Clone", desc: "Flipkart UI Clone (React)" },
    { year: "2025", title: "CalcPro X1", desc: "Calculator Web App (JS, deployed Vercel)", link: "github.com/lokesh007-de/calcpro-x1" },
    { year: "2025", title: "Language Translator", desc: "Translation App" },
    { year: "2025", title: "Periodic Table", desc: "Interactive Periodic Table (React)" },
    { year: "2025", title: "Digital Clock", desc: "Flip Clock Widget (JS)" },
    { year: "2025", title: "Portfolio Website", desc: "Personal Portfolio (HTML/CSS/JS)" },
  ];

  const whatICanDo = [
    "AI-Powered Web Apps",
    "Full Stack Development",
    "REST API Integration",
    "3D Interactive UI (Three.js)",
    "E-commerce Platforms",
    "Clone & Replica Projects"
  ];

  const devSkills = [
    { group: "Practices", items: ["Clean UI", "Performance", "Scalability"] },
    { group: "Tools & CI/CD", items: ["Git", "Vercel", "GitHub CI/CD"] },
    { group: "Databases", items: ["MongoDB", "Supabase", "PostgreSQL"] }
  ];

  const hobbies = [
    { name: "Coding", Icon: IconTerminal2 },
    { name: "Music", Icon: IconMusic },
    { name: "Gaming", Icon: IconDeviceGamepad2 },
    { name: "Photography", Icon: IconCamera },
  ];

  return (
    <section id="resume" className="relative py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold uppercase tracking-widest text-white">
            RESUME & SKILLS
          </h2>
          <div className="h-[4px] w-20 bg-accent mt-2 rounded-full" />
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Column 1: Software Skills, Languages, Personal Skills */}
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col text-left"
          >
            {/* Software Skills */}
            <div className="mb-12 bg-dark-card/35 p-6 rounded-2xl border border-gray-900/60 backdrop-blur-sm">
              <h3 className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-6 border-b border-gray-900/80 pb-2">
                SOFTWARE SKILLS
              </h3>
              <SkillBar name="Next.js" percentage={90} Icon={IconBrandNextjs} />
              <SkillBar name="React.js" percentage={85} Icon={IconBrandReact} />
              <SkillBar name="Tailwind CSS" percentage={90} Icon={IconBrandTailwind} />
              <SkillBar name="Node.js" percentage={75} Icon={IconBrandNodejs} />
              <SkillBar name="Python" percentage={70} Icon={IconBrandPython} />
            </div>

            {/* Languages */}
            <div className="mb-12 bg-dark-card/35 p-6 rounded-2xl border border-gray-900/60 backdrop-blur-sm">
              <h3 className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-6 border-b border-gray-900/80 pb-2">
                LANGUAGES
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-300">English</span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-accent/10 text-accent rounded-md border border-accent/20">Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-300">Hindi</span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-accent/10 text-accent rounded-md border border-accent/20">Native</span>
                </div>
              </div>
            </div>

            {/* Personal Skills */}
            <div className="bg-dark-card/35 p-6 rounded-2xl border border-gray-900/60 backdrop-blur-sm">
              <h3 className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-6 border-b border-gray-900/80 pb-2">
                PERSONAL SKILLS
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Creativity", "Team Work", "Problem Solving"].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold text-gray-300 px-3 py-1.5 rounded-full bg-dark border border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Projects Timeline & Education */}
          <motion.div
            custom={1}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col text-left lg:border-x lg:border-gray-900/80 lg:px-8"
          >
            {/* Timeline */}
            <div className="mb-8">
              <h3 className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-8 border-b border-gray-900/80 pb-2">
                PROJECTS TIMELINE
              </h3>
              
              <div className="relative pl-6 border-l-2 border-accent/20 space-y-6">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Connector dot */}
                    <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-dark border-2 border-accent group-hover:bg-accent hover:shadow-glow-cyan transition-colors duration-300 z-10" />
                    
                    <div className="text-[10px] font-mono font-bold text-accent tracking-wider mb-0.5">{item.year}</div>
                    <h4 className="text-sm font-semibold text-white tracking-wide group-hover:text-accent transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    {item.link && (
                      <a
                        href={`https://${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-[10px] text-accent/75 hover:text-accent font-mono mt-1 underline hover:no-underline transition-colors"
                      >
                        {item.link}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-4 pt-6 border-t border-gray-900/80">
              <h3 className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-6">
                EDUCATION
              </h3>
              <div className="relative pl-6 border-l-2 border-accent/20">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-dark border-2 border-accent z-10" />
                <h4 className="text-sm font-semibold text-white">B.Tech Information Technology</h4>
                <p className="text-xs text-accent font-mono mt-0.5">2022–2025</p>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Institute of Technology and Management, Aligarh (AKTU)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 3: What Can I Do, Design & Dev Skills, Hobbies & Interests */}
          <motion.div
            custom={2}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col text-left"
          >
            {/* What Can I Do */}
            <div className="mb-12 bg-dark-card/35 p-6 rounded-2xl border border-gray-900/60 backdrop-blur-sm">
              <h3 className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-6 border-b border-gray-900/80 pb-2">
                WHAT CAN I DO?
              </h3>
              <div className="space-y-3">
                {whatICanDo.map((item) => (
                  <div key={item} className="flex items-start space-x-3 text-sm text-gray-300">
                    <IconCircleCheck size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design & Dev Skills */}
            <div className="mb-12 bg-dark-card/35 p-6 rounded-2xl border border-gray-900/60 backdrop-blur-sm">
              <h3 className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-6 border-b border-gray-900/80 pb-2">
                DESIGN & DEV SKILLS
              </h3>
              <div className="space-y-4">
                {devSkills.map((group, idx) => (
                  <div key={idx}>
                    <p className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-2">
                      {group.group}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs text-gray-300 px-2.5 py-1 rounded bg-dark border border-gray-900/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="bg-dark-card/35 p-6 rounded-2xl border border-gray-900/60 backdrop-blur-sm">
              <h3 className="text-xs uppercase text-gray-500 font-bold tracking-widest mb-6 border-b border-gray-900/80 pb-2">
                HOBBIES & INTERESTS
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {hobbies.map((hobby) => {
                  const HobbyIcon = hobby.Icon;
                  return (
                    <motion.div
                      key={hobby.name}
                      whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 255, 0.4)", backgroundColor: "rgba(0, 212, 255, 0.02)" }}
                      className="flex items-center space-x-3 p-3 rounded-xl border border-gray-900/80 bg-dark/40 cursor-default transition-all duration-300"
                    >
                      <HobbyIcon size={20} className="text-accent" />
                      <span className="text-xs font-semibold text-gray-300">{hobby.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
