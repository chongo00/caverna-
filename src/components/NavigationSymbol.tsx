import { motion } from "framer-motion";

interface NavigationSymbolProps {
  onClick: () => void;
}

const NavigationSymbol = ({ onClick }: NavigationSymbolProps) => {
  return (
    <motion.button
      className="fixed top-6 left-6 z-50 w-14 h-14 flex items-center justify-center group"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1.5 }}
      aria-label="Abrir menú"
    >
      {/* Carmine halo on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, hsl(345 72% 47% / 0.35), transparent 70%)",
          width: "160%",
          height: "160%",
          left: "-30%",
          top: "-30%",
        }}
      />

      {/* Heraldic Bee + Trident Emblem SVG */}
      <svg
        viewBox="0 0 100 120"
        className="w-10 h-12 drop-shadow-[0_0_10px_hsl(345_72%_47%/0.3)] transition-all duration-500 group-hover:drop-shadow-[0_0_16px_hsl(345_72%_47%/0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ornamental frame - art nouveau curves */}
        <path
          d="M50 5 C50 5, 30 10, 20 25 C10 40, 12 60, 20 75 C28 90, 42 100, 50 105 C58 100, 72 90, 80 75 C88 60, 90 40, 80 25 C70 10, 50 5, 50 5Z"
          stroke="white"
          strokeWidth="0.8"
          strokeOpacity="0.25"
          fill="none"
        />
        {/* Inner ornamental ring */}
        <ellipse cx="50" cy="58" rx="28" ry="32" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />

        {/* Trident (trishula) emerging from bee head */}
        {/* Central prong */}
        <line x1="50" y1="12" x2="50" y2="38" stroke="white" strokeWidth="1.5" strokeOpacity="0.9" />
        <polygon points="50,6 47,14 53,14" fill="white" fillOpacity="0.9" />
        {/* Left prong */}
        <path d="M50 30 C46 26, 40 20, 38 14" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" fill="none" />
        <polygon points="37,9 36,16 40,14" fill="white" fillOpacity="0.85" />
        {/* Right prong */}
        <path d="M50 30 C54 26, 60 20, 62 14" stroke="white" strokeWidth="1.2" strokeOpacity="0.85" fill="none" />
        <polygon points="63,9 64,16 60,14" fill="white" fillOpacity="0.85" />
        {/* Crossbar */}
        <line x1="40" y1="30" x2="60" y2="30" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" />

        {/* Bee body - thorax */}
        <ellipse cx="50" cy="48" rx="8" ry="6" fill="white" fillOpacity="0.85" stroke="white" strokeWidth="0.5" />
        {/* Geometric pattern on thorax */}
        <line x1="46" y1="48" x2="54" y2="48" stroke="hsl(220 40% 6%)" strokeWidth="0.5" strokeOpacity="0.6" />
        <line x1="50" y1="43" x2="50" y2="53" stroke="hsl(220 40% 6%)" strokeWidth="0.5" strokeOpacity="0.4" />

        {/* Bee abdomen */}
        <ellipse cx="50" cy="62" rx="10" ry="12" fill="white" fillOpacity="0.8" stroke="white" strokeWidth="0.6" />
        {/* Abdomen stripes */}
        <line x1="41" y1="57" x2="59" y2="57" stroke="hsl(220 40% 6%)" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="40" y1="61" x2="60" y2="61" stroke="hsl(220 40% 6%)" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="41" y1="65" x2="59" y2="65" stroke="hsl(220 40% 6%)" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="43" y1="69" x2="57" y2="69" stroke="hsl(220 40% 6%)" strokeWidth="0.8" strokeOpacity="0.4" />
        {/* Geometric diamond on abdomen */}
        <polygon points="50,55 54,62 50,69 46,62" fill="none" stroke="hsl(220 40% 6%)" strokeWidth="0.5" strokeOpacity="0.3" />

        {/* Wings - left */}
        <path
          d="M42 46 C30 34, 18 36, 22 46 C25 52, 34 52, 42 48Z"
          fill="white"
          fillOpacity="0.3"
          stroke="white"
          strokeWidth="0.7"
          strokeOpacity="0.7"
        />
        <path
          d="M42 52 C32 56, 24 64, 30 62 C34 60, 38 56, 42 54Z"
          fill="white"
          fillOpacity="0.2"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />
        {/* Wings - right */}
        <path
          d="M58 46 C70 34, 82 36, 78 46 C75 52, 66 52, 58 48Z"
          fill="white"
          fillOpacity="0.3"
          stroke="white"
          strokeWidth="0.7"
          strokeOpacity="0.7"
        />
        <path
          d="M58 52 C68 56, 76 64, 70 62 C66 60, 62 56, 58 54Z"
          fill="white"
          fillOpacity="0.2"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />

        {/* Bee head */}
        <circle cx="50" cy="41" r="4" fill="white" fillOpacity="0.9" stroke="white" strokeWidth="0.5" />
        {/* Eyes */}
        <circle cx="48" cy="40" r="1" fill="hsl(220 40% 6%)" fillOpacity="0.6" />
        <circle cx="52" cy="40" r="1" fill="hsl(220 40% 6%)" fillOpacity="0.6" />

        {/* Stinger */}
        <line x1="50" y1="74" x2="50" y2="80" stroke="white" strokeWidth="0.8" strokeOpacity="0.7" />
        <polygon points="50,80 48.5,76 51.5,76" fill="white" fillOpacity="0.6" />

        {/* Bottom ornamental scrollwork */}
        <path
          d="M35 85 C38 80, 45 78, 50 80 C55 78, 62 80, 65 85"
          stroke="white"
          strokeWidth="0.6"
          strokeOpacity="0.3"
          fill="none"
        />
        <path
          d="M30 90 C35 84, 44 82, 50 84 C56 82, 65 84, 70 90"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          fill="none"
        />
        {/* Top decorative curls */}
        <path
          d="M36 18 C32 22, 28 20, 30 16"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.25"
          fill="none"
        />
        <path
          d="M64 18 C68 22, 72 20, 70 16"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.25"
          fill="none"
        />
      </svg>
    </motion.button>
  );
};

export default NavigationSymbol;
