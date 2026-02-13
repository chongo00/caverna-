import { useMemo } from "react";
import { motion } from "framer-motion";

const LightParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 6,
      opacity: 0.15 + Math.random() * 0.35,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `hsl(188 85% 60% / ${p.opacity})`,
            boxShadow: `0 0 ${p.size * 3}px hsl(188 85% 60% / ${p.opacity * 0.5})`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default LightParticles;
