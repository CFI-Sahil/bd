import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { WashiTape, WaxSeal } from '../ScrapbookElements';
import cutout2 from '../../assets/2_nobg.png';

export const Slide2 = () => (
  <div className="w-full h-full bg-texture-cream flex flex-col items-center justify-center p-3 sm:p-6 md:p-10 relative select-none overflow-hidden">
    {/* Subtle Background Elements */}
    <Heart className="absolute top-4 left-6 sm:top-8 sm:left-12 text-[#721c24] opacity-15" size={20} fill="currentColor" />
    <Sparkles className="absolute bottom-6 right-8 sm:bottom-10 sm:right-14 text-amber-700 opacity-20" size={24} />

    {/* Header & Subtitle */}
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="text-center max-w-xl mb-3 sm:mb-6 md:mb-8 px-2"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-1 sm:mb-3 text-[#3d2727]">
        <strong className="font-semibold text-[#721c24]">Happy Birthday</strong> to my favorite person.
      </h2>
      <p className="text-center text-xs sm:text-sm md:text-base font-serif leading-relaxed text-[#4a3b3b]/90 max-w-lg mx-auto">
        Today is all about celebrating you—the way you smile, the way you care, and the endless happiness you bring into my life.
      </p>
      <p className="text-center text-[11px] sm:text-xs md:text-sm font-serif italic text-[#721c24] mt-1 sm:mt-2 opacity-85">
        I made this scrapbook letter so you can always remember how deeply loved you are.
      </p>
    </motion.div>

    {/* Romantic Centerpiece - Mobile-First Layout */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="flex flex-col md:flex-row gap-3 sm:gap-6 md:gap-8 items-center justify-center max-w-3xl w-full px-2"
    >
      {/* Center: Beautiful Cutout Portrait (Hero on mobile) */}
      <div className="relative flex flex-col items-center order-1 md:order-2">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-rose-100 via-amber-50 to-pink-100 border-[4px] md:border-[5px] border-white shadow-xl overflow-hidden flex items-end justify-center">
          <img 
            src={cutout2} 
            alt="Her lovely smile" 
            className="w-full h-full object-contain scale-110 translate-y-1 drop-shadow-md"
          />
        </div>
        <div className="absolute -bottom-2 right-1 z-20">
          <WaxSeal size="md" />
        </div>
      </div>

      {/* Flanking Cards Row on Mobile / Left & Right on Desktop */}
      <div className="flex flex-row md:contents gap-3 sm:gap-6 justify-center items-center w-full max-w-md md:max-w-none order-2">
        {/* Left Note Card */}
        <div className="bg-[#fffef9] p-3 sm:p-5 shadow-lg border border-stone-200/90 rounded-xs flex-1 md:flex-initial max-w-[170px] sm:max-w-[210px] text-center rotate-[-3deg] relative order-1">
          <WashiTape className="-top-2 left-1/2 -translate-x-1/2 scale-75 sm:scale-100" color="rgba(235, 205, 170, 0.6)" rotate="1deg" />
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-[#721c24]/70 block mb-0.5">
            Forever & Always
          </span>
          <p className="font-serif italic text-[11px] sm:text-xs md:text-sm text-[#4a3b3b] leading-tight sm:leading-snug">
            "You are my favorite notification, and my favorite reason to smile."
          </p>
        </div>

        {/* Right Greeting Badge */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white shadow-xl flex flex-col items-center justify-center font-cursive text-xl sm:text-2xl md:text-3xl text-center text-[#721c24] p-2 sm:p-3 rotate-[7deg] border border-stone-100 relative shrink-0 order-3">
          <Heart size={12} fill="currentColor" className="text-rose-400 mb-0.5" />
          <span className="leading-tight">Happy<br/>Birthday!</span>
          <span className="font-serif text-[8px] sm:text-[9px] uppercase tracking-wider text-stone-500 mt-0.5 font-semibold">with love</span>
        </div>
      </div>

    </motion.div>
  </div>
);

export default Slide2;
