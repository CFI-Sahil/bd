import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Disc3, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import songSrc from '../assets/song.mp3';

export const VinylRecord = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const musicNotes = ['♪', '♫', '♩', '♬', '♥'];

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio playback error:", err);
      });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Pause audio when unmounted (e.g. moving between slides)
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-2 sm:mt-4 md:mt-6 w-full max-w-sm px-2">
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src={songSrc} 
        preload="auto"
        loop
        onEnded={() => setIsPlaying(false)}
      />

      <div className="relative flex justify-center items-center">
        {/* Tonearm graphic on top right for vintage turntable feel */}
        <div 
          className="absolute -top-4 -right-3 md:-top-6 md:-right-6 w-12 md:w-16 h-20 md:h-28 pointer-events-none z-30 transition-transform duration-700 origin-top-right hidden sm:block"
          style={{
            transform: isPlaying ? 'rotate(18deg)' : 'rotate(0deg)',
          }}
        >
          <div className="w-1.5 md:w-2 h-16 md:h-24 bg-gradient-to-b from-stone-400 via-stone-300 to-amber-200 shadow-md rounded-full mx-auto" />
          <div className="w-3.5 h-4.5 bg-stone-800 border border-stone-500 rounded-xs shadow-md mx-auto -mt-1" />
        </div>

        {/* The CD / Vinyl Disc */}
        <motion.div
          onClick={togglePlay}
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ repeat: isPlaying ? Infinity : 0, duration: 3.5, ease: "linear" }}
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-[#111] border-[5px] md:border-[6px] border-[#0a0a0a] shadow-2xl flex items-center justify-center cursor-pointer relative group transition-transform active:scale-98"
          title={isPlaying ? "Click to Pause" : "Click to Play"}
        >
          {/* Vinyl Grooves */}
          <div className="absolute inset-2.5 sm:inset-3 rounded-full border border-gray-700/35 pointer-events-none" />
          <div className="absolute inset-5 sm:inset-7 rounded-full border border-gray-700/35 pointer-events-none" />
          <div className="absolute inset-8 sm:inset-12 rounded-full border border-gray-700/35 pointer-events-none" />
          <div className="absolute inset-12 sm:inset-16 rounded-full border border-gray-700/35 pointer-events-none" />
          
          {/* Vinyl Light Sheen Reflection */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/8 to-transparent pointer-events-none" />

          {/* Center Label */}
          <div className="w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-rose-100 flex flex-col items-center justify-center relative z-10 overflow-hidden shadow-inner border border-rose-300/70">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/40 via-rose-200/30 to-transparent opacity-80" />
            
            {/* Play / Pause Interactive Button Center */}
            <motion.div 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full ${
                isPlaying 
                  ? 'bg-[#721c24] text-pink-100 shadow-md' 
                  : 'bg-[#721c24] text-white shadow-lg animate-pulse'
              } flex items-center justify-center z-20 transition-colors`}
            >
              {isPlaying ? (
                <Pause size={16} fill="currentColor" className="text-pink-100" />
              ) : (
                <Play size={16} fill="currentColor" className="text-white ml-0.5" />
              )}
            </motion.div>

            <span className="font-serif text-[8px] sm:text-[9px] text-[#721c24] tracking-tight uppercase font-bold relative z-10 mt-0.5">
              {isPlaying ? "Playing" : "Play Song"}
            </span>
          </div>
        </motion.div>

        {/* Floating animated music notes when playing */}
        <AnimatePresence>
          {isPlaying && (
            <div className="absolute -top-5 -right-3 pointer-events-none flex gap-1.5 z-40">
              {musicNotes.map((note, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10, scale: 0.6 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    y: [-8, -42 - index * 9], 
                    x: [0, (index % 2 === 0 ? 12 : -12)],
                    scale: [0.8, 1.25, 0.9] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.2, 
                    delay: index * 0.4,
                    ease: "easeOut"
                  }}
                  className="text-pink-200 font-serif text-base sm:text-lg font-bold drop-shadow-md select-none"
                >
                  {note}
                </motion.span>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Turntable Control Bar / Prompt */}
      <div className="mt-4 sm:mt-5 flex flex-col items-center text-center w-full">
        <button
          type="button"
          onClick={togglePlay}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-serif text-xs sm:text-sm transition-all shadow-lg border ${
            isPlaying 
              ? 'bg-rose-950/70 border-rose-400/40 text-pink-100' 
              : 'bg-[#721c24] hover:bg-[#85232c] border-white/20 text-white animate-bounce'
          }`}
        >
          {isPlaying ? (
            <>
              <Pause size={14} fill="currentColor" />
              <span>Pause Music</span>
            </>
          ) : (
            <>
              <Play size={14} fill="currentColor" />
              <span>Click to Play Track</span>
            </>
          )}

          {/* Equalizer Wave Bars */}
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-3 ml-1">
              <span className="w-0.5 bg-pink-200 h-2 animate-pulse" />
              <span className="w-0.5 bg-pink-300 h-3 animate-ping" />
              <span className="w-0.5 bg-pink-200 h-1.5 animate-pulse" />
            </div>
          )}
        </button>

        <div className="flex items-center gap-2 mt-2 text-white/80">
          <Disc3 size={14} className={`text-pink-300 shrink-0 ${isPlaying ? 'animate-spin' : ''}`} />
          <span className="text-[11px] sm:text-xs font-serif italic tracking-wide">
            {isPlaying ? "Now Playing: A Song That Reminds Me of You ♪" : "Click anywhere on the CD or button to start"}
          </span>
          <button 
            type="button" 
            onClick={toggleMute} 
            className="p-1 hover:text-white transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={13} className="text-rose-300" /> : <Volume2 size={13} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VinylRecord;
