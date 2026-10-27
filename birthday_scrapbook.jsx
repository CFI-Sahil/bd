import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slideVariants } from './src/animations/variants';
import Slide1 from './src/components/slides/Slide1';
import Slide2 from './src/components/slides/Slide2';
import Slide3 from './src/components/slides/Slide3';
import Slide4 from './src/components/slides/Slide4';
import Slide5 from './src/components/slides/Slide5';
import Slide6 from './src/components/slides/Slide6';
import Slide7 from './src/components/slides/Slide7';
import Slide8 from './src/components/slides/Slide8';

const SLIDES = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
];

export default function BirthdayScrapbook() {
  const [[page, direction], setPage] = useState([0, 0]);
  const isAnimatingRef = useRef(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isSwiping = useRef(false);

  // Strictly advance or rewind by EXACTLY 1 page
  const paginate = useCallback((newDirection) => {
    // Prevent double-triggering during active slide animation
    if (isAnimatingRef.current) return;
    
    setPage(([currentPage]) => {
      const next = currentPage + newDirection;
      if (next >= 0 && next < SLIDES.length) {
        isAnimatingRef.current = true;
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 450);
        return [next, newDirection];
      }
      return [currentPage, 0];
    });
  }, []);

  const handleNext = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    paginate(1);
  }, [paginate]);

  const handlePrev = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    paginate(-1);
  }, [paginate]);

  const goToSlide = useCallback((index) => {
    if (isAnimatingRef.current) return;
    setPage(([currentPage]) => {
      if (index === currentPage) return [currentPage, 0];
      const newDirection = index > currentPage ? 1 : -1;
      isAnimatingRef.current = true;
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 450);
      return [index, newDirection];
    });
  }, []);

  // Keyboard navigation support (Arrow Left & Arrow Right, Spacebar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe handling - only triggers on deliberate horizontal swipe gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = touchStartX.current - currentX;
    const diffY = touchStartY.current - currentY;

    // Detect intentional horizontal swipe (ignore vertical scroll/tap)
    if (Math.abs(diffX) > 25 && Math.abs(diffX) > Math.abs(diffY)) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = (e) => {
    if (!isSwiping.current || touchStartX.current === null) {
      touchStartX.current = null;
      touchStartY.current = null;
      isSwiping.current = false;
      return;
    }

    const endX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - endX;
    const minSwipeDistance = 45;

    if (Math.abs(diff) >= minSwipeDistance) {
      if (diff > 0) {
        // Swiped Left -> Next Page
        paginate(1);
      } else {
        // Swiped Right -> Previous Page
        paginate(-1);
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    isSwiping.current = false;
  };

  const CurrentSlide = SLIDES[page];

  return (
    <div className="w-full min-h-[100dvh] h-[100dvh] bg-[#7A1C21] md:bg-[#140c0c] md:p-4 lg:p-8 flex items-center justify-center selection:bg-pink-300 selection:text-black overflow-hidden">
      {/* Main Scrapbook Album Frame */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[100dvh] md:h-[90vh] md:max-h-[850px] max-w-6xl md:rounded-2xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden flex border-0 md:border md:border-white/10"
      >
        
        {/* Animated Slide Viewport - Covers 100% of the screen with zero black gaps */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>

        {/* Floating Scrapbook Navigation Dock */}
        <div 
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 md:gap-6 bg-black/60 backdrop-blur-md px-3.5 sm:px-5 py-2 md:py-2.5 rounded-full z-50 shadow-2xl border border-white/20 select-none"
        >
          {/* Back / Previous Button */}
          <button 
            type="button"
            onClick={handlePrev}
            disabled={page === 0}
            className={`min-w-[38px] min-h-[38px] sm:min-w-[42px] sm:min-h-[42px] flex items-center justify-center rounded-full transition-all ${
              page === 0 
                ? 'text-gray-500/30 cursor-not-allowed' 
                : 'text-white hover:bg-white/20 active:scale-90 cursor-pointer'
            }`}
            aria-label="Previous Page"
          >
            <ChevronLeft size={22} />
          </button>
          
          {/* Page Indicators */}
          <div className="flex gap-1.5 sm:gap-2 items-center">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === page 
                    ? 'bg-pink-200 w-4 sm:w-5 md:w-6 h-1.5 sm:h-2 shadow-xs' 
                    : 'bg-white/35 w-1.5 sm:w-2 h-1.5 sm:h-2 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            type="button"
            onClick={handleNext}
            disabled={page === SLIDES.length - 1}
            className={`min-w-[38px] min-h-[38px] sm:min-w-[42px] sm:min-h-[42px] flex items-center justify-center rounded-full transition-all ${
              page === SLIDES.length - 1 
                ? 'text-gray-500/30 cursor-not-allowed' 
                : 'text-white hover:bg-white/20 active:scale-90 cursor-pointer'
            }`}
            aria-label="Next Page"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </div>
  );
}
