import { motion, AnimatePresence } from "framer-motion";

interface CavernMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPoem: () => void;
  onOpenPlaylist: () => void;
}

const CavernMenu = ({ isOpen, onClose, onOpenPoem, onOpenPlaylist }: CavernMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(345 30% 6% / 0.92), hsl(220 45% 4% / 0.96))",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        onClick={onClose}
      />

      {/* Floating dust particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 1.5 + Math.random() * 2,
            height: 1.5 + Math.random() * 2,
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            background: `hsl(340 60% 80% / ${0.15 + Math.random() * 0.2})`,
          }}
          animate={{
            y: [0, -20 - Math.random() * 30, 0],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Close button */}
      <motion.button
        className="fixed top-6 right-6 z-50 font-display text-xl text-foreground/50 hover:text-carmine-soft transition-colors duration-500"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        ✕
      </motion.button>

      {/* Menu content */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Emblem glow */}
        <motion.div
          className="w-20 h-20 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(345 72% 47% / 0.2), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Menu options */}
        <div className="flex flex-col items-center gap-8 -mt-8">
          <motion.button
            className="group relative px-10 py-5 text-center"
            onClick={() => {
              onClose();
              onOpenPoem();
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(ellipse, hsl(345 72% 47% / 0.12), transparent 80%)",
              }}
            />
            <span className="font-display text-2xl sm:text-3xl font-light italic text-foreground/80 group-hover:text-foreground transition-colors duration-500 text-glow-carmine">
              Soneto XVII
            </span>
            <p className="font-display text-sm text-foreground/40 mt-2 tracking-widest uppercase">
              Pablo Neruda
            </p>
            {/* Underline */}
            <motion.div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 transition-all duration-500"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(345 60% 55%), transparent)",
              }}
            />
          </motion.button>

          {/* Divider */}
          <motion.div
            className="divider-carmine h-px w-24"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.5, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.button
            className="group relative px-10 py-5 text-center"
            onClick={() => {
              onClose();
              onOpenPlaylist();
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(ellipse, hsl(345 72% 47% / 0.12), transparent 80%)",
              }}
            />
            <span className="font-display text-2xl sm:text-3xl font-light italic text-foreground/80 group-hover:text-foreground transition-colors duration-500 text-glow-carmine">
              Canciones en Carmesí
            </span>
            <p className="font-display text-sm text-foreground/40 mt-2 tracking-widest uppercase">
              Playlist
            </p>
            <motion.div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 transition-all duration-500"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(345 60% 55%), transparent)",
              }}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CavernMenu;
