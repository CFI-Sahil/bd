import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Disc3, Play, Pause, Volume2, VolumeX, Sparkles, RotateCcw, RotateCw } from 'lucide-react';
import songSrc from '../assets/song.mp3';
import { SONG_LYRICS } from '../data/lyrics';

export const VinylRecord = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(197.37);
  const audioRef = useRef(null);

  const musicNotes = ['♪', '♫', '♩', '♬', '♥'];

  // Calculate the currently active lyric line based on playback time
  const currentLyricIndex = SONG_LYRICS.reduce((lastIdx, item, idx) => {
    return item.time <= currentTime ? idx : lastIdx;
  }, 0);
  const currentLyric = SONG_LYRICS[currentLyricIndex];

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

  // Skip time forward or backward by N seconds
  const skipTime = (seconds) => {
    if (!audioRef.current) return;
    const newTime = Math.min(Math.max(audioRef.current.currentTime + seconds, 0), duration);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Seek bar scrub handler
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
  };

  // Format seconds as m:ss
  const formatTime = (secs) => {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
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

  // Smooth, real-time audio playback tracking using requestAnimationFrame
  useEffect(() => {
    let animId;
    if (isPlaying && audioRef.current) {
      const update = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
        animId = requestAnimationFrame(update);
      };
      animId = requestAnimationFrame(update);
    }
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isPlaying]);

  return (
    <div className="flex flex-col items-center mt-2 sm:mt-4 md:mt-6 w-full max-w-sm px-2">
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src={songSrc} 
        preload="auto"
        loop
        onLoadedMetadata={(e) => {
          if (e.target.duration && !isNaN(e.target.duration)) {
            setDuration(e.target.duration);
          }
        }}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
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
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-[#111] border-[5px] md:border-[6px] border-[#0a0a0a] shadow-2xl flex items-center justify-center cursor-pointer relative group transition-transform active:scale-98"
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
      <div className="mt-3 sm:mt-4 flex flex-col items-center text-center w-full">
        {/* Playback Controls with Skip -15s and +15s */}
        <div className="flex items-center gap-2 sm:gap-3 justify-center">
          <button
            type="button"
            onClick={() => skipTime(-15)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-pink-100 text-[11px] sm:text-xs font-serif transition-all active:scale-95 border border-white/15 shadow-sm"
            title="Rewind 15 seconds"
          >
            <RotateCcw size={12} />
            <span>-15s</span>
          </button>

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

          <button
            type="button"
            onClick={() => skipTime(15)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-pink-100 text-[11px] sm:text-xs font-serif transition-all active:scale-95 border border-white/15 shadow-sm"
            title="Skip forward 15 seconds"
          >
            <span>+15s</span>
            <RotateCw size={12} />
          </button>
        </div>

        {/* Interactive Timeline Scrubber to jump anywhere in the song */}
        <div className="w-full max-w-[280px] sm:max-w-xs flex items-center gap-2 mt-2 px-1">
          <span className="text-[10px] font-mono text-pink-200/80 w-7 text-right select-none">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max={duration || 197}
            step="0.5"
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1.5 bg-rose-950/70 rounded-lg appearance-none cursor-pointer accent-pink-300 transition-all hover:h-2"
            title="Drag or click to jump anywhere in the song"
          />
          <span className="text-[10px] font-mono text-pink-200/80 w-7 text-left select-none">
            {formatTime(duration)}
          </span>
        </div>

        {/* Synchronized Flowing Lyrics Box - Locked strictly to active line until next line arrives */}
        <div className="w-full max-w-[320px] sm:max-w-sm mt-2.5 px-3.5 py-2 rounded-2xl bg-black/45 backdrop-blur-md border border-rose-300/25 shadow-xl min-h-[52px] sm:min-h-[58px] flex items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key={currentLyricIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex items-center justify-center gap-2 text-center w-full px-2"
              >
                <Music size={13} className="text-pink-300 shrink-0 animate-pulse" />
                <p className="text-xs sm:text-sm font-serif italic text-pink-100 font-semibold tracking-wide leading-snug drop-shadow-md">
                  "{currentLyric?.text}"
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="paused-prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-center gap-1.5 text-center px-2 text-pink-100/75"
              >
                <Sparkles size={13} className="text-pink-300/80 shrink-0" />
                <span className="text-[11px] sm:text-xs font-serif italic tracking-wide">
                  {currentTime > 0 ? "Music paused — click Play to resume lyrics" : "Click to Play Track to watch lyrics sing along"}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 mt-2 text-white/80">
          <Disc3 size={14} className={`text-pink-300 shrink-0 ${isPlaying ? 'animate-spin' : ''}`} />
          <span className="text-[11px] sm:text-xs font-serif italic tracking-wide">
            {isPlaying ? "Now Playing: Mishri - Anuv Jain ♪" : "Click anywhere on the CD or button to start"}
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
