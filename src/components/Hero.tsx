import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const nam_hien_tai = new Date().getFullYear();
  const so_nam_da_qua = nam_hien_tai - 1890;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video với Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Quân nhớ kiểm tra tên file trong thư mục public phải là .mp4 nhé */}
          <source src="/HoChiMinh.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ xem video.
        </video>
        {/* Lớp phủ màu tối để chữ nổi bật hơn */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/60" />
      </div>

      {/* Nội dung chính */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-vn-gold/50 text-vn-gold text-xs md:text-sm font-vietnam uppercase tracking-widest mb-4 bg-vn-red/20 backdrop-blur-sm">
            Kỷ niệm {so_nam_da_qua} năm (1890 - {nam_hien_tai})
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-4xl md:text-7xl lg:text-8xl font-vietnam font-extrabold text-white leading-tight"
        >
          Mừng Sinh Nhật <br />
          <span className="text-vn-gold text-gold-gradient animate-gold-shimmer">
            Bác Hồ Kính Yêu
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 text-white/80 font-lora text-lg md:text-xl italic max-w-2xl mx-auto"
        >
          "Người là niềm tin tất thắng sáng ngời, <br className="hidden md:block" />
          là vì sao lung linh giữa bầu trời Việt Nam."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12"
        >
          <a
            href="#timeline"
            className="px-8 py-3 bg-vn-red hover:bg-red-600 text-white rounded-full font-vietnam font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(218,37,29,0.5)] flex items-center gap-2 mx-auto w-fit"
          >
            Tìm hiểu về Bác
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Hiệu ứng mờ dần ở đáy trang */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
};

export default Hero;