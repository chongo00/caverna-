import { motion } from "framer-motion";
import { Music } from "lucide-react";

interface PlaylistSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const songs = [
  {
    title: "Sailor Song",
    artist: "Gigi Perez",
    youtubeId: "1lrFsXkT_rM",
  },
  {
    title: "Ma meilleure ennemie",
    artist: "Stromae & Pomme",
    youtubeId: "j-RpvIuazmc",
  },
  {
    title: "City of Stars",
    artist: "Ryan Gosling",
    youtubeId: "fQLAyvDNmUU",
  },
  {
    title: "Everyone Adores You (quiet)",
    artist: "Matt Maltese",
    youtubeId: "xO78bGYEMEs",
  },
  {
    title: "Californica",
    artist: "La Gusana Ciega",
    youtubeId: "i2OOruTFi80",
  },
  {
    title: "The Death of Peace of Mind",
    artist: "Bad Omens",
    youtubeId: "ouW_RCAI0sg",
  },
  {
    title: "Moon Dance",
    artist: "Michael Bublé",
    youtubeId: "wPpJOpXp0UA",
  },
  {
    title: "Volar sin ti",
    artist: "Buena Fe",
    youtubeId: "PLC2HOODPHU",
  },
];



const PlaylistSection = ({ isOpen, onClose }: PlaylistSectionProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-40 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Deep crimson background */}
      <motion.div
        className="fixed inset-0 bg-playlist"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Atmospheric overlays */}
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, hsl(345 60% 20% / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, hsl(345 50% 15% / 0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, hsl(345 40% 12% / 0.2) 0%, transparent 60%)
          `,
        }}
      />

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
      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-20">
        {/* Header */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Music className="w-5 h-5" style={{ color: "hsl(345 60% 55%)" }} />
          <span
            className="font-display text-sm tracking-[0.3em] uppercase"
            style={{ color: "hsl(345 50% 60%)" }}
          >
            Playlist
          </span>
        </motion.div>

        <motion.h2
          className="font-display text-3xl sm:text-4xl font-light italic text-glow-carmine mb-12 text-center"
          style={{ color: "hsl(340 50% 90%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          8 songs that will remind you of me
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="divider-carmine h-px w-48 mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.7, scaleX: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        />

        {/* Songs list */}
        <div className="max-w-2xl w-full space-y-6">
          {songs.map((song, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.2, duration: 0.8 }}
            >
              {/* Song card */}
              <div className="relative px-6 py-6 rounded-lg transition-all duration-500 group-hover:bg-white/[0.03]">
                {/* Track number */}
                <div className="flex items-start gap-5">
                  <span
                    className="font-display text-lg mt-0.5 w-6 text-right shrink-0"
                    style={{ color: "hsl(345 50% 45% / 0.5)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    {/* Title and artist */}
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-2">
                      <span
                        className="font-display text-xl sm:text-2xl font-medium transition-colors duration-500 group-hover:text-glow-carmine"
                        style={{ color: "hsl(340 45% 85%)" }}
                      >
                        {song.title}
                      </span>
                      <span
                        className="font-display text-base"
                        style={{ color: "hsl(340 30% 55%)" }}
                      >
                        — {song.artist}
                      </span>
                    </div>

                    {/* YouTube embed */}
                    <div className="mt-4 rounded-lg overflow-hidden" style={{
                      border: "1px solid hsl(345 60% 45% / 0.2)",
                      boxShadow: "0 0 20px hsl(345 60% 50% / 0.1)"
                    }}>
                      <iframe
                        width="100%"
                        height="120"
                        src={`https://www.youtube.com/embed/${song.youtubeId}?color=white&modestbranding=1`}
                        title={`${song.title} - ${song.artist}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom border */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, hsl(345 50% 35% / 0.3), transparent)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom spacer and decorative element */}
        <motion.div
          className="mt-16 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          <div
            className="w-2 h-2 rounded-full mx-auto"
            style={{
              background: "hsl(345 60% 50%)",
              boxShadow: "0 0 12px hsl(345 60% 50% / 0.5)",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlaylistSection;
