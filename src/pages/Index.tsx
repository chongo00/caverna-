import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Butterfly from "@/components/Butterfly";
import NavigationSymbol from "@/components/NavigationSymbol";
import CavernMenu from "@/components/CavernMenu";
import PoemSection from "@/components/PoemSection";
import PlaylistSection from "@/components/PlaylistSection";
import SoundToggle from "@/components/SoundToggle";
import FinalMessage from "@/components/FinalMessage";
import LightParticles from "@/components/LightParticles";
import cavernBg from "@/assets/cavern-bg.jpg";

// Importa tu archivo de audio - asegúrate de que el nombre coincida con el archivo que copies
// Si tu archivo se llama diferente, cambia "background.mp3" por el nombre correcto
import backgroundMusic from "@/assets/music/background.mp3";

const LYRICS = [
  "La plus belle des malédictions",
  "Can I just have one more moondance with you, my love?",
  "Your favorite song was on the oldies station",
  "Oh, won't you kiss me on the mouth and love me like a sailor?\nAnd when you get a taste, can you tell me what's my flavor?",
  "Are you shining just for me?",
  "You can act all shy, But you know that I want you",
  "Quiero clavar mis colmillos, En tu carne, morena",
  "The way you touch, the way you taste",
];

const BUTTERFLY_POSITIONS = [
  { x: 10, y: 25 },
  { x: 75, y: 15 },
  { x: 25, y: 60 },
  { x: 60, y: 45 },
  { x: 45, y: 20 },
  { x: 85, y: 55 },
  { x: 15, y: 75 },
  { x: 55, y: 70 },
];

const Index = () => {
  const [entranceComplete, setEntranceComplete] = useState(false);
  const [activatedButterflies, setActivatedButterflies] = useState<Set<number>>(new Set());
  const [allActivated, setAllActivated] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [poemOpen, setPoemOpen] = useState(false);
  const [playlistOpen, setPlaylistOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setEntranceComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Control de audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.log("Autoplay blocked:", error);
        // El navegador puede bloquear autoplay hasta que el usuario interactúe
      });
    }
  }, [isMuted]);

  const handleActivate = useCallback((id: number) => {
    setActivatedButterflies((prev) => {
      const next = new Set(prev);
      next.add(id);
      if (next.size === 8) {
        setTimeout(() => {
          setAllActivated(true);
          setTimeout(() => setShowFinalMessage(true), 2000);
        }, 5500);
      }
      return next;
    });
  }, []);

  const handleFinalComplete = useCallback(() => {
    setShowFinalMessage(false);
    setAllActivated(false);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Cavern background */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cavernBg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Dark overlay for depth with subtle carmine tint */}
      <div className="fixed inset-0" style={{
        background: `
          linear-gradient(180deg, hsl(220 45% 4% / 0.35) 0%, hsl(345 30% 5% / 0.15) 50%, hsl(220 45% 4% / 0.4) 100%),
          radial-gradient(ellipse at 20% 80%, hsl(345 40% 15% / 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, hsl(345 30% 12% / 0.08) 0%, transparent 50%)
        `
      }} />

      {/* Entrance fade from black */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ background: "hsl(220 45% 4%)" }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Light particles */}
      <AnimatePresence>
        {entranceComplete && <LightParticles />}
      </AnimatePresence>

      {/* Butterflies */}
      <div className="fixed inset-0 z-10">
        {BUTTERFLY_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 + i * 0.3, duration: 1.5 }}
          >
            <Butterfly
              id={i}
              lyric={LYRICS[i]}
              startX={pos.x}
              startY={pos.y}
              activated={activatedButterflies.has(i)}
              onActivate={handleActivate}
              allDone={allActivated}
            />
          </motion.div>
        ))}
      </div>

      {/* Final message */}
      <FinalMessage show={showFinalMessage} onComplete={handleFinalComplete} />

      {/* Navigation */}
      <NavigationSymbol onClick={() => setMenuOpen(true)} />

      {/* Sound toggle */}
      <SoundToggle isMuted={isMuted} onToggle={() => setIsMuted(!isMuted)} />

      {/* Background music */}
      <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
        preload="auto"
      />

      {/* Cavern Menu */}
      <AnimatePresence>
        {menuOpen && (
          <CavernMenu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            onOpenPoem={() => setPoemOpen(true)}
            onOpenPlaylist={() => setPlaylistOpen(true)}
          />
        )}
      </AnimatePresence>

      {/* Poem Section */}
      <AnimatePresence>
        {poemOpen && (
          <PoemSection isOpen={poemOpen} onClose={() => setPoemOpen(false)} />
        )}
      </AnimatePresence>

      {/* Playlist Section */}
      <AnimatePresence>
        {playlistOpen && (
          <PlaylistSection isOpen={playlistOpen} onClose={() => setPlaylistOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
