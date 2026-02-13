import { motion } from "framer-motion";

interface JournalSectionProps {
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

const songs = [
  { title: "Sailor Song", artist: "Gigi Perez" },
  { title: "Ma meilleure ennemie", artist: "Stromae" },
  { title: "Euclid", artist: "Sleep Token" },
  { title: "Ma Meilleure Ennemie (Arcane Season 2 OST)", artist: "Stromae & Pomme" },
];

const JournalSection = ({ isOpen, onClose }: JournalSectionProps) => {
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
      {/* Background overlay */}
      <motion.div
        className="fixed inset-0 bg-journal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Subtle texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(345 72% 47% / 0.2) 0%, transparent 50%),
                            radial-gradient(circle at 80% 30%, hsl(340 50% 75% / 0.15) 0%, transparent 40%)`,
        }}
      />

      {/* Close button */}
      <motion.button
        className="fixed top-6 right-6 z-50 font-display text-lg text-foreground/60 hover:text-accent transition-colors duration-500"
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
          className="font-display text-2xl sm:text-3xl font-light italic text-foreground/70 mb-16 text-glow-carmine"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Soneto XVII
        </motion.h2>

        <motion.p
          className="font-display text-sm text-muted-foreground mb-12 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Pablo Neruda
        </motion.p>

        {/* Poem stanzas */}
        <div className="max-w-xl w-full space-y-8 mb-20">
          {stanzas.map((stanza, i) => (
            <motion.p
              key={i}
              className="font-display text-base sm:text-lg leading-relaxed text-foreground/80 text-center whitespace-pre-line"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.4, duration: 1.2 }}
            >
              {stanza}
            </motion.p>
          ))}
        </div>

        {/* Carmine divider */}
        <motion.div
          className="divider-carmine h-px w-48 mb-20"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        />

        {/* Songs section */}
        <motion.h3
          className="font-display text-xl sm:text-2xl font-light italic text-foreground/60 mb-12 text-glow-carmine"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
        >
          Songs that remind me of you
        </motion.h3>

        <div className="space-y-6 mb-20">
          {songs.map((song, i) => (
            <motion.div
              key={i}
              className="text-center group cursor-default"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 + i * 0.3, duration: 0.8 }}
            >
              <div className="relative inline-block">
                <span className="font-display text-lg sm:text-xl text-foreground/75 group-hover:text-accent transition-colors duration-500">
                  {song.title}
                </span>
                <span className="font-display text-base text-muted-foreground ml-2">
                  — {song.artist}
                </span>
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default JournalSection;
