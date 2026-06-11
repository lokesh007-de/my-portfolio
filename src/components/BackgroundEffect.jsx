import { motion } from 'framer-motion';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Top-Right Glow Blob (Cyan) */}
      <motion.div
        className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-accent glow-blob"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Bottom-Left Glow Blob (Deep Cyan/Blue) */}
      <motion.div
        className="absolute bottom-[-15%] left-[-15%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-[#005a73] glow-blob"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Center Ambient Accent */}
      <div className="absolute top-[40%] left-[30%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-[#00D4FF] opacity-5 glow-blob" />
    </div>
  );
}
