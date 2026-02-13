import { motion } from "framer-motion";

interface FinalMessageProps {
  show: boolean;
  onComplete: () => void;
}

const FinalMessage = ({ show, onComplete }: FinalMessageProps) => {
  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Darkening overlay */}
      <motion.div
        className="absolute inset-0 bg-cavern-deep/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="relative z-10 text-center px-8 max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 2 }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 6000);
        }}
      >
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-foreground/90 text-glow-carmine">
          Gracias por ser el verbo{" "}
          <span className="font-semibold not-italic tracking-wide" style={{ color: "hsl(345 72% 55%)", textShadow: "0 0 25px hsl(345 72% 47% / 0.6), 0 0 50px hsl(345 72% 47% / 0.25)" }}>
            TO BE
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FinalMessage;
