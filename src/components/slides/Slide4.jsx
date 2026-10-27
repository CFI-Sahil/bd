import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import VinylRecord from '../VinylRecord';

export const Slide4 = () => (
  <div className="w-full h-full bg-texture-red flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 select-none relative overflow-hidden">
    {/* Background Decorative Accents */}
    <Sparkles className="absolute top-6 left-8 sm:top-12 sm:left-16 text-pink-100 opacity-20" size={22} />
    <Heart className="absolute bottom-6 right-8 sm:bottom-16 sm:right-16 text-pink-200 opacity-20" size={22} fill="currentColor" />

    <motion.h2 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-lg sm:text-2xl md:text-3xl font-serif text-center flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center text-[#fdfbf7] mb-1 sm:mb-2"
    >
      <span>This song</span>
      <span className="font-cursive text-4xl sm:text-5xl md:text-6xl text-pink-100 px-1.5 drop-shadow-sm">reminds</span>
      <span>me of you</span>
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="w-full flex justify-center"
    >
      <VinylRecord />
    </motion.div>
  </div>
);

export default Slide4;
