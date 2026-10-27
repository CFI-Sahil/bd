import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

/**
 * Aesthetic washi tape strip
 */
export const WashiTape = ({ className = '', color = 'rgba(255,255,255,0.4)', rotate = '2deg' }) => (
  <div 
    className={`absolute h-5 w-20 backdrop-blur-xs shadow-xs z-30 pointer-events-none ${className}`}
    style={{
      backgroundColor: color,
      transform: `rotate(${rotate})`,
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      clipPath: 'polygon(0% 10%, 4% 0%, 96% 0%, 100% 10%, 98% 90%, 94% 100%, 6% 100%, 0% 90%)',
    }}
  />
);

/**
 * Vintage wax seal emblem
 */
export const WaxSeal = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  return (
    <div 
      className={`rounded-full bg-gradient-to-br from-[#8a1f26] via-[#66161b] to-[#450d11] text-pink-100/90 shadow-md flex items-center justify-center border border-red-900/40 select-none ${sizeMap[size] || sizeMap.md} ${className}`}
      style={{
        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.25), 0 4px 8px rgba(0,0,0,0.3)',
      }}
    >
      <Heart size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14} fill="currentColor" className="opacity-90 drop-shadow-xs" />
    </div>
  );
};

/**
 * Vintage postage stamp badge
 */
export const StampBadge = ({ label = "SPECIAL DELIVERY", subtext = "AIR MAIL", rotate = "-3deg", className = "" }) => (
  <div 
    className={`bg-[#f7f2e7] text-[#6b2226] border-2 border-dashed border-[#8a2228]/50 p-2 text-center shadow-md select-none inline-flex flex-col items-center justify-center ${className}`}
    style={{ transform: `rotate(${rotate})` }}
  >
    <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono font-bold opacity-80">
      <Sparkles size={10} /> {subtext}
    </div>
    <span className="font-serif font-bold text-xs tracking-wider my-0.5">{label}</span>
    <span className="text-[8px] font-mono opacity-70">★ POSTAGE PAID ★</span>
  </div>
);

/**
 * Little handwritten decorative sticky note
 */
export const LoveNote = ({ title, message, rotate = "1deg", className = "" }) => (
  <div 
    className={`bg-[#fffef9] text-[#3a2828] p-4 shadow-lg border border-amber-900/10 relative ${className}`}
    style={{ transform: `rotate(${rotate})` }}
  >
    <WashiTape className="-top-3 left-1/2 -translate-x-1/2" color="rgba(240, 215, 180, 0.65)" rotate="-1deg" />
    {title && <h4 className="font-cursive text-2xl text-[#721c24] leading-tight mb-1">{title}</h4>}
    <p className="font-serif text-xs md:text-sm leading-relaxed opacity-90">{message}</p>
  </div>
);
