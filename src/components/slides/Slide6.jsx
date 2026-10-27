import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { WashiTape, WaxSeal } from '../ScrapbookElements';
import cutout2 from '../../assets/2_nobg.png';

const THREE_WORDS = [
  {
    word: "Kind",
    sub: "A Pure Heart",
    desc: "Your heart holds a tenderness that softens the sharpest days. You love selflessly and bring peace to everyone around you.",
    rotate: "-2deg",
  },
  {
    word: "Radiant",
    sub: "A Brilliant Light",
    desc: "A glowing, infectious warmth that instantly illuminates every room. Your presence alone makes everything feel vibrant.",
    rotate: "1deg",
    hasCutout: true,
  },
  {
    word: "Irreplaceable",
    sub: "One in Eight Billion",
    desc: "There is nobody on earth who can match the depth of your soul, your sweet quirks, and the genuine magic of who you are.",
    rotate: "2deg",
  },
];

export const Slide6 = () => (
  <div className="w-full h-full bg-texture-red flex flex-col items-center justify-center p-3 sm:p-6 md:p-10 select-none overflow-hidden relative">
    {/* Decorative Accents */}
    <Sparkles className="absolute top-6 left-8 sm:top-12 sm:left-16 text-pink-100 opacity-20" size={20} />
    <Heart className="absolute bottom-6 right-8 sm:bottom-12 sm:right-16 text-pink-200 opacity-20" size={22} fill="currentColor" />

    {/* Section Header */}
    <motion.h2 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-lg sm:text-2xl md:text-3xl font-serif text-center mb-3 sm:mb-8 md:mb-10 text-[#fdfbf7]"
    >
      If I Had to Describe You in Three Words
    </motion.h2>

    {/* Three Keepsake Cards - Mobile 1st Responsive */}
    <div className="flex flex-col md:flex-row gap-2.5 sm:gap-6 md:gap-8 w-full max-w-4xl justify-center items-center px-2">
      {THREE_WORDS.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          whileHover={{ scale: 1.04, y: -4, zIndex: 30 }}
          className="bg-black/25 backdrop-blur-md p-3 sm:p-5 md:p-6 rounded-md border border-white/20 shadow-xl flex flex-col items-center text-center max-w-xs w-full relative transition-shadow hover:shadow-pink-900/30"
          style={{ transform: `rotate(${item.rotate})` }}
        >
          {item.hasCutout ? (
            <div className="relative -mt-10 sm:-mt-14 mb-1 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-pink-200/30 to-white/20 border-2 border-white/40 overflow-hidden flex items-end justify-center shadow-lg">
                <img 
                  src={cutout2} 
                  alt="Radiant" 
                  className="w-full h-full object-contain scale-110 drop-shadow-md translate-y-1" 
                />
              </div>
              <div className="absolute -bottom-1 -right-1">
                <WaxSeal size="sm" />
              </div>
            </div>
          ) : (
            <div className="mb-1">
              <WashiTape className="-top-2.5 left-1/2 -translate-x-1/2 scale-70 sm:scale-100" color="rgba(255, 255, 255, 0.35)" rotate="1deg" />
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-pink-200 border border-white/20 mx-auto">
                <Heart size={12} fill="currentColor" />
              </div>
            </div>
          )}

          <h3 className="font-cursive text-3xl sm:text-5xl md:text-6xl text-pink-100 drop-shadow-sm mb-0.5 leading-tight">
            {item.word}
          </h3>

          <span className="font-serif text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-pink-200/80 font-bold mb-1 sm:mb-2">
            {item.sub}
          </span>

          <p className="font-serif text-[10px] sm:text-xs md:text-sm text-[#fdfbf7]/90 leading-tight sm:leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Slide6;
