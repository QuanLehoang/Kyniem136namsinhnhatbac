import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { url: '/Anh1.png', title: 'Bác Hồ đọc tuyên ngôn độc lập', desc: 'Khoảnh khắc lịch sử tại Quảng trường Ba Đình ngày 2/9/1945, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.' },
  { url: '/AnhBacdanglamviectaiBacBo.jpg', title: 'Bác Hồ đang làm việc tại Bắc Bó', desc: 'Hình ảnh bác Hồ làm việc trong hang đá ở Việt Bắc năm 1951.' },
  { url: '/Bacvoithieunhi.png', title: 'Bác Hồ với thiếu nhi', desc: 'Hình ảnh Bác Hồ với thiếu niên, nhi đồng Việt Nam.' },
  { url: '/LoidaycuaBacvecaytrong.png', title: 'Bác Hồ giữa thiên nhiên', desc: 'Hình ảnh thể hiện lối sống giản dị, thanh cao và tình yêu thiên nhiên của Bác Hồ.' },
  { url: '/HinhanhBacchupcungcacnhanvatnoitieng.jpg', title: 'Ảnh lưu niệm Bác Hồ và các tướng', desc: 'Hình ảnh Bác chụp cùng các lãnh đạo, sĩ quan quân đội trong một sự kiện chính trị - quân sự' },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-vietnam font-bold text-white mb-4">Hình ảnh tư liệu</h2>
          <p className="text-white/60 font-lora italic text-lg">Những khoảnh khắc đời thường của một vĩ nhân.</p>
        </motion.div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-12 px-6 scrollbar-hide snap-x">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="min-w-[300px] md:min-w-[450px] aspect-[4/3] rounded-3xl overflow-hidden relative group snap-center"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h4 className="text-vn-gold font-bold text-xl mb-2">{img.title}</h4>
              <p className="text-white/80 text-sm font-inter">{img.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
