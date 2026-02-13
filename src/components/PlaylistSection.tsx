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
    description:
      "El carmesí puro de la devoción prohibida. Una guitarra acústica que tiembla como un primer beso robado bajo la luna, voz que promete salvación y condena al mismo tiempo.",
  },
  {
    title: "Ma meilleure ennemie",
    artist: "Stromae & Pomme",
    description:
      "Carmesí tóxico y magnético. Amor-odio que baila en círculos, como dos llamas que se persiguen y se queman mutuamente. Electrónica sofisticada con alma francesa y corazón herido.",
  },
  {
    title: "City of Stars",
    artist: "Ryan Gosling",
    description:
      "El carmesí nostálgico de los sueños de Hollywood al atardecer. Piano suave, jazz cinematográfico y un anhelo que brilla como luces de neón reflejadas en charcos rojos.",
  },
  {
    title: "Everyone Adores You (quiet)",
    artist: "Matt Maltese",
    description:
      "Carmesí tímido, casi secreto. Admiración que se guarda en el pecho, susurros de \"al menos yo sí te adoro\" mientras el mundo pasa de largo. Melancolía delicada y aterciopelada.",
  },
  {
    title: "Californica",
    artist: "La Gusana Ciega",
    description:
      "El carmesí ardiente del rock mexicano, piel bronceada bajo el sol de medianoche, caderas que se mueven y miradas que nunca se alcanzan. Inalcanzable, sensual, adictivo.",
  },
  {
    title: "The Death of Peace of Mind",
    artist: "Bad Omens",
    description:
      "Carmesí oscuro, casi burdeos. Metal alternativo que late como un corazón acelerado después de una pelea apasionada. Intensidad cruda, catarsis que mancha y libera.",
  },
  {
    title: "Moon Dance",
    artist: "Michael Bublé",
    description:
      "Cierre en carmesí elegante y lunar. Swing suave, voz aterciopelada y la promesa de bailar bajo una luz rojiza hasta que amanezca. Porque incluso la pasión más intensa merece un vals final.",
  },
  {
    title: "Talk That Talk",
    artist: "TWICE",
    description:
      "Carmesí eléctrico y juguetón. Un guiño K-pop que vibra como neones en la madrugada, donde la timidez se derrite ante una confesión irresistible. Ritmo adictivo, dulzura con filo.",
  },
];

const introText = `Sumérgete en un lienzo de rojos profundos donde el deseo, la contradicción y la melancolía se funden como terciopelo quemado. Esta selección late con tonos carmesí: pasión que roza el peligro, amores que duelen hermosamente, admiración silenciosa y noches que huelen a sal y promesas rotas.`;

const introText2 = `Un viaje sonoro que va desde baladas indie-folk que te abrazan el alma hasta ritmos electrónicos que te aceleran el pulso, pasando por jazz elegante y rock mexicano con alma californiana. Cada canción es un latido más intenso, un rojo más oscuro.`;

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
          className="font-display text-3xl sm:text-4xl font-light italic text-glow-carmine mb-8 text-center"
          style={{ color: "hsl(340 50% 90%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          Canciones en Carmesí
        </motion.h2>

        {/* Intro text */}
        <motion.p
          className="font-display text-base sm:text-lg italic leading-relaxed text-center max-w-2xl mb-4"
          style={{ color: "hsl(340 35% 70%)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {introText}
        </motion.p>

        <motion.p
          className="font-display text-base sm:text-lg italic leading-relaxed text-center max-w-2xl mb-12"
          style={{ color: "hsl(340 35% 65%)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          {introText2}
        </motion.p>

        {/* Divider */}
        <motion.div
          className="divider-carmine h-px w-48 mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.7, scaleX: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        />

        {/* Songs list */}
        <div className="max-w-2xl w-full space-y-1">
          {songs.map((song, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.2, duration: 0.8 }}
            >
              {/* Song card */}
              <div className="relative px-6 py-5 rounded-lg transition-all duration-500 group-hover:bg-white/[0.03]">
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

                    {/* Description */}
                    <p
                      className="font-display text-sm sm:text-base italic leading-relaxed"
                      style={{ color: "hsl(340 25% 55% / 0.8)" }}
                    >
                      {song.description}
                    </p>
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
