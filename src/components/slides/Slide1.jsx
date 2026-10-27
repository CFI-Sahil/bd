import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
import Polaroid from '../Polaroid';
import { WaxSeal } from '../ScrapbookElements';
import photo1 from '../../assets/1_polaroid.jpg';

export const Slide1 = () => (
  <div className="w-full h-full bg-texture-red flex flex-col md:flex-row items-center justify-center p-4 sm:p-8 md:p-12 gap-5 sm:gap-8 md:gap-16 relative overflow-hidden select-none">
    {/* Floating Stars */}
    <Star className="absolute top-6 left-6 sm:top-12 sm:left-12 text-[#fdfbf7] opacity-25" size={24} />
    <Star className="absolute bottom-6 right-8 sm:bottom-12 sm:right-16 text-[#fdfbf7] opacity-20" size={32} />
    <Star className="absolute top-1/4 right-1/4 text-pink-200 opacity-20 hidden sm:block" size={16} />

    {/* Hero Photo with Washi Tape */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
      animate={{ opacity: 1, scale: 1, rotate: -3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative shrink-0 mt-2 sm:mt-0"
    >
      <Polaroid 
        src={photo1} 
        caption="Happy Birthday, Gorgeous" 
        size="large" 
        rotate="-3deg" 
        tapeRotate="2deg"
        tapeColor="rgba(255, 255, 255, 0.45)"
      />
      <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3">
        <WaxSeal size="md" />
      </div>
    </motion.div>
    
    {/* Title & Greeting */}
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm sm:max-w-md relative z-10"
    >
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[11px] sm:text-xs font-serif text-pink-100 mb-2 sm:mb-3 border border-white/15">
        <Heart size={11} fill="currentColor" className="text-pink-200" />
        <span>A Letter Made Just For You</span>
      </div>

      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-cursive text-[#fdfbf7] drop-shadow-md leading-none mb-1 sm:mb-2">
        Happy Birthday
      </h1>
      <p className="text-lg sm:text-2xl font-serif tracking-widest text-pink-100/90 font-light">
        To My Favorite Girl
      </p>
      <p className="text-[11px] sm:text-sm font-serif opacity-75 mt-0.5 sm:mt-1 tracking-wider">
        31.10.2026 • Celebrating You
      </p>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-3 sm:my-5" />

      <p className="text-base sm:text-xl font-serif text-[#fdfbf7] font-medium">
        Happy Birthday, My Love
      </p>
      <p className="text-xs sm:text-sm font-serif italic text-pink-100/80 mt-1 max-w-sm leading-relaxed px-2 sm:px-0">
        Turn the pages to see all the reasons why you make the world so much brighter.
      </p>
    </motion.div>
  </div>
);

export default Slide1;
