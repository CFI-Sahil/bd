import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Sparkles } from 'lucide-react';
import Polaroid from '../Polaroid';
import { WashiTape, WaxSeal, StampBadge } from '../ScrapbookElements';
import photo1 from '../../assets/1_polaroid.jpg';

export const Slide8 = () => (
  <div className="w-full h-full bg-texture-cream flex flex-col items-center justify-center p-3 sm:p-6 md:p-10 select-none overflow-hidden relative">
    
    {/* Scattered Star Accents */}
    <Star className="absolute top-4 left-6 sm:top-12 sm:left-16 text-[#721c24] opacity-35" size={16} fill="currentColor" />
    <Star className="absolute top-1/4 right-1/4 text-[#721c24] opacity-25 hidden sm:block" size={14} fill="currentColor" />
    <Star className="absolute bottom-6 left-[15%] text-[#721c24] opacity-40" size={18} fill="currentColor" />
    <Star className="absolute bottom-6 right-8 sm:bottom-20 sm:right-16 text-[#721c24] opacity-30" size={16} fill="currentColor" />

    {/* Section Header */}
    <motion.h2 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-lg sm:text-2xl md:text-3xl font-serif text-center mb-3 sm:mb-6 md:mb-8 text-[#3d2727] relative z-20 px-2"
    >
      The Little Things You Do That Make Me Smile
    </motion.h2>

    {/* Scrapbook Spread - Mobile 1st Layout */}
    <div className="relative w-full max-w-4xl flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 px-2">
      
      {/* Center: Vintage Lined Notepad (Hero on mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="bg-[#fffdf9] p-3.5 sm:p-5 md:p-7 shadow-xl md:shadow-2xl rotate-[1deg] relative z-20 border border-stone-200/80 max-w-xs sm:max-w-sm w-full mx-1 order-1 md:order-2"
      >
        <WashiTape className="-top-2.5 left-1/2 -translate-x-1/2 scale-75 sm:scale-100" color="rgba(114, 28, 36, 0.18)" rotate="-2deg" />
        
        <h3 className="font-cursive text-3xl sm:text-4xl mb-2 sm:mb-4 text-[#721c24] drop-shadow-xs">
          The Little Things
        </h3>

        <ul className="font-serif text-[#4a3b3b] space-y-1.5 sm:space-y-3 text-[11px] sm:text-xs md:text-sm">
          <li className="flex items-start gap-2">
            <Heart size={12} className="text-[#721c24] shrink-0 mt-0.5" fill="currentColor" /> 
            <span>You remember the small details nobody else notices</span>
          </li>
          <li className="flex items-start gap-2">
            <Heart size={12} className="text-[#721c24] shrink-0 mt-0.5" fill="currentColor" /> 
            <span>Your sweet random texts just to check on my day</span>
          </li>
          <li className="flex items-start gap-2">
            <Heart size={12} className="text-[#721c24] shrink-0 mt-0.5" fill="currentColor" /> 
            <span>The way your eyes crinkle when you laugh so hard</span>
          </li>
          <li className="flex items-start gap-2">
            <Heart size={12} className="text-[#721c24] shrink-0 mt-0.5" fill="currentColor" /> 
            <span>How you always know how to make me laugh</span>
          </li>
          <li className="flex items-start gap-2">
            <Heart size={12} className="text-[#721c24] shrink-0 mt-0.5" fill="currentColor" /> 
            <span>The warmth of your hand resting gently in mine</span>
          </li>
        </ul>
      </motion.div>

      {/* Flanking Polaroid & Certificate on Mobile */}
      <div className="flex flex-row md:contents gap-2.5 sm:gap-6 justify-center items-center w-full max-w-md md:max-w-none order-2">
        {/* Left: Her Polaroid */}
        <motion.div
          initial={{ opacity: 0, x: -15, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: -4 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 shrink-0 order-1"
        >
          <Polaroid 
            src={photo1} 
            size="small" 
            caption="My favorite view" 
            rotate="-4deg"
            tapeRotate="2deg"
            className="shadow-lg scale-90 sm:scale-100"
          />
          <div className="absolute -bottom-2 -left-2 z-20">
            <WaxSeal size="sm" />
          </div>
        </motion.div>

        {/* Right: Vintage Appreciation Certificate */}
        <motion.div
          initial={{ opacity: 0, x: 15, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="bg-[#faf5ea] p-3 sm:p-5 shadow-lg border-2 border-dashed border-[#721c24]/30 flex-1 md:flex-initial max-w-[160px] sm:max-w-xs text-center relative order-3"
        >
          <WashiTape className="-top-2 right-4 scale-75 sm:scale-100" color="rgba(240, 210, 180, 0.7)" rotate="2deg" />
          <div className="flex items-center justify-center gap-1 text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-[#721c24] font-bold mb-0.5">
            <Sparkles size={9} /> OFFICIAL
          </div>
          <h4 className="font-cursive text-xl sm:text-3xl text-[#721c24] mb-0.5">Pure Magic</h4>
          <p className="font-serif italic text-[10px] sm:text-xs text-[#523e3e] leading-tight sm:leading-relaxed mb-2">
            Awarded for making every ordinary day feel like a magical celebration.
          </p>
          <div className="flex justify-center">
            <StampBadge label="100% LOVED" subtext="VERIFIED" rotate="-3deg" className="py-0.5 px-2 scale-85 sm:scale-100" />
          </div>
        </motion.div>
      </div>

    </div>
  </div>
);

export default Slide8;
