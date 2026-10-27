import React from 'react';
import { motion } from 'framer-motion';
import { WashiTape } from './ScrapbookElements';

export const Polaroid = ({ 
  src, 
  caption, 
  rotate = "0deg", 
  size = "normal", 
  className = "", 
  zIndex = 1,
  showTape = true,
  tapeRotate = "3deg",
  tapeColor = "rgba(255, 255, 255, 0.45)",
  isCutout = false,
}) => {
  const sizeClasses = {
    small: 'h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28',
    normal: 'h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44',
    large: 'h-36 w-36 sm:h-48 sm:w-48 md:h-60 md:w-60',
    wide: 'h-32 w-38 sm:h-44 sm:w-52 md:h-56 md:w-64',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 50 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={`bg-white p-2 sm:p-2.5 pb-5 sm:pb-7 shadow-xl inline-flex flex-col items-center border border-stone-200/80 relative select-none shrink-0 ${className}`}
      style={{ transform: `rotate(${rotate})`, zIndex }}
    >
      {showTape && (
        <WashiTape 
          className="-top-2 sm:-top-3 left-1/2 -translate-x-1/2 scale-80 sm:scale-100" 
          color={tapeColor} 
          rotate={tapeRotate} 
        />
      )}

      <div className={`w-full overflow-hidden relative ${isCutout ? 'bg-gradient-to-b from-rose-50 to-stone-100 flex items-center justify-center' : 'bg-stone-100'} ${sizeClasses[size] || sizeClasses.normal}`}>
        <img 
          src={src} 
          className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${isCutout ? 'object-contain drop-shadow-md p-1' : 'sepia-[12%] contrast-105'}`} 
          alt={caption || "Memory"} 
          loading="lazy"
        />
      </div>

      {caption && (
        <p className="font-serif text-[#333] mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-sm text-center px-1 leading-tight tracking-wide font-medium">
          {caption}
        </p>
      )}
    </motion.div>
  );
};

export default Polaroid;
