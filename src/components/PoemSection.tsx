import { useMemo } from "react";
import { motion } from "framer-motion";

interface PoemSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const sonnet = `No te amo como si fueras rosa de sal, topacio
o flecha de claveles que propagan el fuego:
te amo como se aman ciertas cosas oscuras,
secretamente, entre la sombra y el alma.

Te amo como la planta que no florece y lleva
dentro de sí, escondida, la luz de aquellas flores,
y gracias a tu amor vive oscuro en mi cuerpo
el apretado aroma que ascendió de la tierra.

Te amo sin saber cómo, ni cuándo, ni de dónde,
te amo directamente sin problemas ni orgullo:
así te amo porque no sé amar de otra manera,

sino así de este modo en que no soy ni eres,
tan cerca que tu mano sobre mi pecho es mía,
tan cerca que se cierran tus ojos con mi sueño.`;

const PoemSection = ({ isOpen, onClose }: PoemSectionProps) => {
  const dustParticles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      delay: Math.random() * 4,
      duration: 5 + Math.random() * 6,
      opacity: 0.1 + Math.random() * 0.2,
    }));
  }, []);

  if (!isOpen) return null;

  const stanzas = sonnet.split("\n\n");

  return (
    <motion.div
      className="fixed inset-0 z-40 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Dark parchment background with rose gradient */}
      <motion.div
        className="fixed inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, hsl(340 30% 14% / 0.8) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, hsl(345 25% 12% / 0.6) 0%, transparent 50%),
            linear-gradient(180deg, hsl(340 30% 8%) 0%, hsl(345 20% 6%) 50%, hsl(340 30% 8%) 100%)
          `,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Parchment texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(345 50% 60% / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, hsl(340 40% 70% / 0.2) 0%, transparent 40%),
            radial-gradient(circle at 50% 70%, hsl(340 35% 55% / 0.15) 0%, transparent 45%)
          `,
        }}
      />

      {/* Floating dust particles (like illuminated parchment dust) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {dustParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: `hsl(340 50% 80% / ${p.opacity})`,
              boxShadow: `0 0 ${p.size * 3}px hsl(340 50% 80% / ${p.opacity * 0.4})`,
            }}
            animate={{
              y: [0, -20 - Math.random() * 30, 0],
              x: [0, Math.random() * 10 - 5, 0],
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

      {/* Close button */}
      <motion.button
        className="fixed top-6 right-6 z-50 font-display text-lg text-foreground/50 hover:text-carmine-soft transition-colors duration-500"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        ✕
      </motion.button>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Title */}
        <motion.h2
          className="font-display text-3xl sm:text-4xl font-light italic text-glow-carmine mb-6"
          style={{ color: "hsl(340 50% 90%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          Soneto XVII
        </motion.h2>

        <motion.p
          className="font-display text-sm tracking-widest uppercase mb-16"
          style={{ color: "hsl(340 30% 65%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Pablo Neruda
        </motion.p>

        {/* Decorative divider before poem */}
        <motion.div
          className="divider-carmine h-px w-32 mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.6, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        />

        {/* Poem stanzas */}
        <div className="max-w-xl w-full space-y-10 mb-20">
          {stanzas.map((stanza, i) => (
            <motion.p
              key={i}
              className="font-display text-lg sm:text-xl leading-loose text-center whitespace-pre-line"
              style={{ color: "hsl(340 40% 88%)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.5, duration: 1.4 }}
            >
              {stanza}
            </motion.p>
          ))}
        </div>

        {/* Bottom decorative divider */}
        <motion.div
          className="divider-carmine h-px w-24"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.4, scaleX: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default PoemSection;
