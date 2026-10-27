import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import Polaroid from '../Polaroid';
import { WashiTape, WaxSeal, StampBadge } from '../ScrapbookElements';
import photo3 from '../../assets/3_polaroid.jpg';

export const Slide7 = () => (
  <div className="w-full h-full bg-texture-red flex flex-col md:flex-row items-center justify-center p-3 sm:p-6 md:p-10 gap-3 sm:gap-6 md:gap-14 select-none overflow-hidden relative">
    
    {/* Left Side: Scrapbook Collage with Her Real Photo & Vintage Ephemera */}
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-xs md:max-w-sm flex flex-col items-center justify-center relative shrink-0 order-1"
    >
      <div className="relative">
        <Polaroid 
          src={photo3} 
          caption="Forever my favorite girl" 
          rotate="-3deg" 
          size="normal" 
          className="shadow-2xl scale-95 sm:scale-100 md:scale-105"
          tapeRotate="1deg"
        />

        {/* Vintage Stamp Badge Layered on Corner */}
        <div className="absolute -top-3 -left-4 sm:-top-4 sm:-left-6 z-30 scale-75 sm:scale-100">
          <StampBadge label="LOVE LETTER" subtext="EXPRESS" rotate="-10deg" />
        </div>

        {/* Wax Seal Layered at Bottom Corner */}
        <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 z-30">
          <WaxSeal size="md" />
        </div>
      </div>

      <div className="mt-2 sm:mt-3 flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/15 text-pink-100 text-[10px] sm:text-xs font-serif italic">
        <Heart size={10} fill="currentColor" className="text-pink-300" />
        <span>Written straight from the heart</span>
      </div>
    </motion.div>

    {/* Right Side: The Love Letter Card */}
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="w-full max-w-sm md:max-w-md bg-black/25 p-3.5 sm:p-6 md:p-8 rounded-lg border border-white/15 shadow-2xl backdrop-blur-md relative order-2"
    >
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-300/10 rounded-full blur-md" />
      
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cursive text-pink-100 drop-shadow-md">
          A Letter for You
        </h2>
        <Sparkles size={16} className="text-pink-200 opacity-60" />
      </div>

      <div className="font-serif text-[11px] sm:text-xs md:text-sm leading-relaxed space-y-2 sm:space-y-3 opacity-90 overflow-y-auto max-h-[140px] sm:max-h-[200px] md:max-h-[280px] pr-2.5 custom-scrollbar text-[#fdfbf7]">
        <p className="font-semibold text-pink-200">My dearest,</p>
        
        <p>
          From the moment you entered my life, everything felt lighter, warmer, and endlessly more meaningful. This scrapbook is just a small reflection of all the warmth and joy you bring into my world every single day.
        </p>

        <p>
          I want you to always remember how deeply you are loved, how genuinely appreciated you are, and how much you inspire me. Your gentle kindness, your quiet strength, and that breathtaking smile of yours are gifts that brighten my entire life.
        </p>

        <p>
          Thank you for simply being you, and thank you for all the laughter and memories we have created. May this birthday bring you as much happiness as you continuously give to everyone around you.
        </p>

        <p>Happy Birthday to the one who holds my heart entirely.</p>

        <div className="pt-1 text-right">
          <p className="font-cursive text-2xl sm:text-3xl text-pink-100 drop-shadow-sm">Forever Yours</p>
          <p className="font-serif text-[9px] sm:text-[11px] text-pink-200/70 tracking-widest uppercase mt-0.5">With all my love ♥</p>
        </div>
      </div>
    </motion.div>

  </div>
);

export default Slide7;
