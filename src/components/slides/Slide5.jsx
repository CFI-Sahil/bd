import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smile, Sparkles, Sun, Feather } from 'lucide-react';
import { WashiTape } from '../ScrapbookElements';

// Custom Hug Icon representing an affectionate embrace
const HugIcon = ({ size = 14, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="9" cy="7" r="2.5" />
    <circle cx="15" cy="7" r="2.5" />
    <path d="M4.5 20v-2a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v2" />
    <path d="M7 15.5c1.8 1.8 4.2 1.8 6 0" />
    <path d="M17 15.5c-1.8 1.8-4.2 1.8-6 0" />
  </svg>
);

const REASONS = [
  {
    icon: Smile,
    title: "Your Radiant Smile",
    text: "The way your entire face lights up and effortlessly turns even my hardest days into pure joy.",
    rotate: "-2deg",
    tapeColor: "rgba(240, 215, 180, 0.65)",
  },
  {
    icon: HugIcon,
    title: "Your Warm Hugs",
    text: "The safest haven in the entire world, where all worries dissolve and time stands still.",
    rotate: "2deg",
    tapeColor: "rgba(245, 200, 205, 0.65)",
  },
  {
    icon: Feather,
    title: "Your Gentle Kindness",
    text: "The tender, thoughtful way you care for everyone around you with pure empathy and grace.",
    rotate: "-1.5deg",
    tapeColor: "rgba(230, 220, 200, 0.65)",
  },
  {
    icon: Sparkles,
    title: "The Way You Laugh",
    text: "That genuine, uncontrollable giggle that is easily the sweetest music I have ever heard.",
    rotate: "2.5deg",
    tapeColor: "rgba(250, 230, 190, 0.65)",
  },
  {
    icon: Sun,
    title: "Your Patient Heart",
    text: "How you always listen, understand, and hold space with endless tenderness and reassurance.",
    rotate: "-2deg",
    tapeColor: "rgba(245, 200, 205, 0.65)",
  },
  {
    icon: Heart,
    title: "Everything About You",
    text: "Every small quirk, every sweet gesture—the fact that you exist as your true, beautiful self.",
    rotate: "2deg",
    tapeColor: "rgba(240, 215, 180, 0.65)",
  },
];

export const Slide5 = () => (
  <div className="w-full h-full bg-texture-cream flex flex-col items-center justify-center p-2.5 sm:p-5 md:p-8 select-none overflow-hidden relative">
    {/* Subtle Background Heart */}
    <Heart className="absolute top-4 right-6 text-[#721c24] opacity-15" size={26} fill="currentColor" />

    {/* Section Header */}
    <motion.h2 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xl sm:text-2xl md:text-3xl font-serif text-center mb-3 sm:mb-6 md:mb-8 flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center text-[#3d2727]"
    >
      <span>Reasons I</span>
      <span className="font-cursive text-4xl sm:text-5xl md:text-6xl text-[#721c24] px-1.5 font-bold drop-shadow-xs">Love</span>
      <span>You</span>
    </motion.h2>

    {/* 6 Aesthetic Romantic Parchment Cards - Mobile First Responsive Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-7 max-w-4xl w-full justify-items-center px-1 sm:px-2">
      {REASONS.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ scale: 1.04, y: -4, zIndex: 30 }}
            className="bg-[#fffefb] p-2.5 sm:p-4 md:p-5 shadow-md hover:shadow-xl border border-stone-200/90 rounded-xs flex flex-col items-center text-center relative max-w-[260px] w-full transition-shadow cursor-default"
            style={{ transform: `rotate(${item.rotate})` }}
          >
            <WashiTape 
              className="-top-2 left-1/2 -translate-x-1/2 scale-70 sm:scale-90" 
              color={item.tapeColor} 
              rotate={index % 2 === 0 ? "2deg" : "-2deg"} 
            />

            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-rose-50 border border-rose-200/60 flex items-center justify-center mb-1 sm:mb-2 text-[#721c24] shadow-xs">
              <IconComponent size={index % 2 === 0 ? 13 : 14} />
            </div>

            <h3 className="font-serif font-bold text-xs sm:text-sm md:text-base text-[#3d2727] mb-0.5 sm:mb-1.5 tracking-tight">
              {item.title}
            </h3>

            <p className="font-serif text-[9px] sm:text-[11px] md:text-xs text-[#5c4a4a] leading-tight sm:leading-relaxed opacity-95">
              {item.text}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default Slide5;
