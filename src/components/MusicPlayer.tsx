import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Volume2 } from 'lucide-react';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicUrl = "Nhucobachotrongngayvuidaithang.mp3";

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch(() => console.log("Autoplay blocked or link broken"));
      }

      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <audio ref={audioRef} src={musicUrl} loop />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isPlaying
            ? 'bg-vn-red shadow-[0_0_20px_rgba(218,37,29,0.6)]'
            : 'bg-white/10 backdrop-blur-md border border-white/20'
          }`}
      >
        {isPlaying ? (
          <div className="relative">
            <Volume2 className="text-white w-6 h-6" />

            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute inset-0 bg-white rounded-full"
            />
          </div>
        ) : (
          <Music className="text-white w-6 h-6" />
        )}
      </motion.button>

      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 whitespace-nowrap"
        >
          <p className="text-xs text-white font-vietnam">
            Đang phát nhạc...
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default MusicPlayer;