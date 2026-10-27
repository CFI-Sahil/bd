import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import Polaroid from '../Polaroid';
import { WashiTape, WaxSeal, StampBadge } from '../ScrapbookElements';
import photo3 from '../../assets/3_polaroid.jpg';

export const Slide3 = () => (
  <div className="w-full h-full bg-texture-red flex flex-col items-center justify-center p-3 sm:p-6 md:p-10 select-none overflow-hidden relative">
    {/* Subtle Star Accents */}
    <Sparkles className="absolute top-6 left-8 sm:top-10 sm:left-16 text-pink-200 opacity-25" size={20} />
    <Heart className="absolute bottom-6 right-8 sm:bottom-12 sm:right-20 text-rose-300 opacity-20" size={22} fill="currentColor" />

    {/* Section Header */}
    <motion.h2 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-lg sm:text-2xl font-serif text-center mb-3 sm:mb-8 md:mb-10 flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center text-[#fdfbf7]"
    >
      <span>one of my</span>
      <span className="font-cursive text-4xl sm:text-6xl text-pink-100 px-1.5 drop-shadow-sm">favorite</span>
      <span>moments</span>
    </motion.h2>

    {/* Scrapbook Spread - Mobile 1st Layout */}
    <div className="relative w-full max-w-4xl flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-6 md:gap-10 px-2">
      
      {/* Center: Her Beautiful Polaroid (Hero on mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-20 shrink-0 order-1 md:order-2"
      >
        <Polaroid 
          src={photo3} 
          size="normal" 
          rotate="1deg" 
          caption="Pure elegance and joy"
          className="shadow-2xl scale-100 sm:scale-105"
          tapeRotate="-2deg"
        />
        <div className="absolute -bottom-2 -right-2 z-30">
          <WaxSeal size="md" />
        </div>
      </motion.div>

      {/* Flanking Notes Container for Mobile */}
      <div className="flex flex-row md:contents gap-2.5 sm:gap-6 justify-center items-stretch w-full max-w-md md:max-w-none order-2">
        {/* Left Keepsake Ticket */}
        <motion.div 
          initial={{ opacity: 0, x: -20, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: -4 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="bg-[#faf5eb] text-[#3e2723] p-3 sm:p-5 shadow-xl rounded-xs border border-amber-900/20 flex-1 md:flex-initial max-w-[170px] sm:max-w-xs relative order-1"
        >
          <WashiTape className="-top-2 left-4 scale-75 sm:scale-100" color="rgba(255, 255, 255, 0.6)" rotate="-3deg" />
          <div className="flex items-center justify-between border-b border-amber-900/20 pb-1 mb-1.5 sm:mb-2.5">
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#721c24] font-bold">No. 01</span>
            <span className="text-[8px] font-mono text-[#721c24] uppercase font-bold">Priceless</span>
          </div>
          <h4 className="font-cursive text-xl sm:text-3xl text-[#721c24] mb-0.5 sm:mb-1">That Radiant Glow</h4>
          <p className="font-serif text-[10px] sm:text-xs md:text-sm text-[#4a3b3b] leading-tight sm:leading-relaxed">
            The moment you looked over with that gentle smile, time stopped completely.
          </p>
        </motion.div>

        {/* Right Handwritten Note */}
        <motion.div 
          initial={{ opacity: 0, x: 20, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 4 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="bg-[#fffdfa] text-[#3a2828] p-3 sm:p-5 shadow-xl rounded-xs border border-stone-300/80 flex-1 md:flex-initial max-w-[170px] sm:max-w-xs relative order-3"
        >
          <WashiTape className="-top-2 right-4 scale-75 sm:scale-100" color="rgba(240, 215, 180, 0.7)" rotate="2deg" />
          <h4 className="font-cursive text-xl sm:text-3xl text-[#721c24] mb-0.5 sm:mb-1">Pure Joy</h4>
          <p className="font-serif text-[10px] sm:text-xs md:text-sm text-[#4a3b3b] leading-tight sm:leading-relaxed">
            "Your laughter is my favorite sound in the world. Every moment with you is magic."
          </p>
          <div className="mt-1 sm:mt-2 text-right">
            <span className="font-cursive text-base sm:text-2xl text-[#721c24]">Always</span>
          </div>
        </motion.div>
      </div>

    </div>
  </div>
);

export default Slide3;
