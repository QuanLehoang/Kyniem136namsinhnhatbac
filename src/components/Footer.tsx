import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-vn-red rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(218,37,29,0.3)]">
            <svg viewBox="0 0 100 100" className="w-10 h-10 fill-vn-gold">
              <path d="M50 10 L61 38 L91 38 L67 56 L76 84 L50 67 L24 84 L33 56 L9 38 L39 38 Z" />
            </svg>
          </div>
        </div>

        <p className="text-white/80 font-lora text-lg md:text-xl italic mb-4">
          "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh"
        </p>

        <div className="w-12 h-0.5 bg-vn-gold mx-auto mb-8" />

        <p className="text-white/30 text-xs font-vietnam uppercase tracking-widest">
          &copy; {new Date().getFullYear()} - Website by Quanle
        </p>
      </div>
    </footer>
  );
};

export default Footer;
