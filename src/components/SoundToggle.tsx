import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface SoundToggleProps {
  isMuted: boolean;
  onToggle: () => void;
}

const SoundToggle = ({ isMuted, onToggle }: SoundToggleProps) => {
  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center text-foreground/40 hover:text-primary transition-colors duration-500"
      onClick={onToggle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
    </motion.button>
  );
};

export default SoundToggle;
