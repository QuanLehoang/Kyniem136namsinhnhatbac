import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex flex-col items-center justify-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]"
    >
      <h1 className="text-vn-gold font-dancing text-2xl md:text-3xl lg:text-4xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        Ngày 19 Tháng 5
      </h1>
      <p className="text-white/90 font-vietnam text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1 font-semibold">
        Đời đời nhớ ơn Chủ tịch Hồ Chí Minh vĩ đại
      </p>
    </motion.header>
  );
};

export default Header;
