import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ButterflyProps {
  id: number;
  lyric: string;
  startX: number;
  startY: number;
  activated: boolean;
  onActivate: (id: number) => void;
  allDone: boolean;
}

const floatVariants = [
  { x: [0, 30, -20, 40, 0], y: [0, -40, -70, -30, 0], rotate: [0, 5, -3, 4, 0] },
  { x: [0, -40, 30, -20, 0], y: [0, -30, -60, -40, 0], rotate: [0, -5, 3, -4, 0] },
  { x: [0, 50, -30, 0], y: [0, -50, -80, 0], rotate: [0, 6, -4, 0] },
  { x: [0, -35, 25, -45, 15, 0], y: [0, -55, -35, -65, -25, 0], rotate: [0, -3, 5, -6, 2, 0] },
];

const ButterflyWingSVG = ({ size, glowIntensity }: { size: number; glowIntensity: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="wingGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(188 85% 70%)" stopOpacity={0.9} />
        <stop offset="50%" stopColor="hsl(188 85% 55%)" stopOpacity={0.6} />
        <stop offset="100%" stopColor="hsl(200 80% 40%)" stopOpacity={0.2} />
      </radialGradient>
      <radialGradient id="bodyGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(188 90% 75%)" stopOpacity={1} />
        <stop offset="100%" stopColor="hsl(200 80% 50%)" stopOpacity={0.5} />
      </radialGradient>
      <filter id="butterflyBlur">
        <feGaussianBlur stdDeviation={1 + glowIntensity * 2} />
      </filter>
    </defs>
    {/* Glow layer */}
    <g filter="url(#butterflyBlur)" opacity={0.5 + glowIntensity * 0.3}>
      <path d="M50 45 C35 20, 5 15, 10 45 C15 60, 35 55, 50 50Z" fill="url(#wingGlow)" />
      <path d="M50 45 C65 20, 95 15, 90 45 C85 60, 65 55, 50 50Z" fill="url(#wingGlow)" />
      <path d="M50 55 C38 60, 20 80, 30 70 C38 62, 45 58, 50 55Z" fill="url(#wingGlow)" />
      <path d="M50 55 C62 60, 80 80, 70 70 C62 62, 55 58, 50 55Z" fill="url(#wingGlow)" />
    </g>
    {/* Wing shapes */}
    <path d="M50 45 C35 20, 5 15, 10 45 C15 60, 35 55, 50 50Z" fill="url(#wingGlow)" opacity={0.85} />
    <path d="M50 45 C65 20, 95 15, 90 45 C85 60, 65 55, 50 50Z" fill="url(#wingGlow)" opacity={0.85} />
    <path d="M50 55 C38 60, 20 80, 30 70 C38 62, 45 58, 50 55Z" fill="url(#wingGlow)" opacity={0.7} />
    <path d="M50 55 C62 60, 80 80, 70 70 C62 62, 55 58, 50 55Z" fill="url(#wingGlow)" opacity={0.7} />
    {/* Wing veins */}
    <path d="M50 47 C40 30, 20 25, 15 40" stroke="hsl(188 90% 80%)" strokeWidth="0.5" opacity={0.4} fill="none" />
    <path d="M50 47 C60 30, 80 25, 85 40" stroke="hsl(188 90% 80%)" strokeWidth="0.5" opacity={0.4} fill="none" />
    {/* Body */}
    <ellipse cx="50" cy="50" rx="2" ry="8" fill="url(#bodyGlow)" />
    {/* Antennae */}
    <path d="M49 42 C47 36, 44 32, 42 30" stroke="hsl(188 80% 65%)" strokeWidth="0.6" opacity={0.6} fill="none" />
    <path d="M51 42 C53 36, 56 32, 58 30" stroke="hsl(188 80% 65%)" strokeWidth="0.6" opacity={0.6} fill="none" />
    <circle cx="42" cy="30" r="1" fill="hsl(188 90% 75%)" opacity={0.7} />
    <circle cx="58" cy="30" r="1" fill="hsl(188 90% 75%)" opacity={0.7} />
  </svg>
);

const Butterfly = ({ id, lyric, startX, startY, activated, onActivate, allDone }: ButterflyProps) => {
  const [showLyric, setShowLyric] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const floatVariant = useMemo(() => floatVariants[id % floatVariants.length], [id]);
  const duration = useMemo(() => 12 + (id % 4) * 3, [id]);
  const size = useMemo(() => 50 + (id % 3) * 15, [id]);
  const blurAmount = useMemo(() => id % 3 === 0 ? 1 : id % 3 === 1 ? 0 : 2, [id]);

  const glowIntensity = (activated || allDone) ? 1 : hasBeenClicked ? 0.6 : 0.3;

  const handleClick = useCallback(() => {
    if (hasBeenClicked || showLyric) return;
    setHasBeenClicked(true);
    setShowPulse(true);
    setShowLyric(true);
    onActivate(id);
    setTimeout(() => setShowPulse(false), 1500);
    setTimeout(() => setShowLyric(false), 5000);
  }, [hasBeenClicked, showLyric, id, onActivate]);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        filter: `blur(${blurAmount}px) drop-shadow(0 0 ${8 + glowIntensity * 15}px hsl(188 85% 60% / ${0.4 + glowIntensity * 0.4}))`,
        zIndex: blurAmount === 0 ? 10 : blurAmount === 1 ? 20 : 5,
      }}
      animate={showLyric ? {} : floatVariant}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      onClick={handleClick}
    >
      {/* Carmine pulse on click */}
      <AnimatePresence>
        {showPulse && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(345 72% 47% / 0.4), transparent 70%)",
              width: size * 3, height: size * 3,
              left: -(size), top: -(size),
            }}
            initial={{ scale: 0.5, opacity: 0.6 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* SVG Butterfly */}
      <motion.div
        animate={{ scaleX: [1, 0.85, 1] }}
        transition={{ duration: 0.8 + (id % 3) * 0.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ButterflyWingSVG size={size} glowIntensity={glowIntensity} />
      </motion.div>

      {/* Lyric display */}
      <AnimatePresence>
        {showLyric && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
            style={{ top: -80 - (lyric.length > 60 ? 30 : 0) }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div
              className="px-6 py-3 rounded-lg font-display text-base sm:text-lg italic text-foreground text-glow-carmine whitespace-pre-line text-center max-w-[80vw]"
              style={{
                background: "radial-gradient(ellipse, hsl(340 50% 75% / 0.12), transparent 80%)",
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                maxWidth: "80vw",
                width: "max-content",
              }}
            >
              {lyric}
            </div>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: "hsl(340 50% 75% / 0.7)",
                  left: `${30 + Math.random() * 40}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 1, y: 0, scale: 1 }}
                animate={{ opacity: 0, y: -60, scale: 0.3 }}
                transition={{ duration: 2, delay: i * 0.2, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Butterfly;
