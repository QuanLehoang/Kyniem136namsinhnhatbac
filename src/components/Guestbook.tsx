import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  location: string;
  content: string;
  date: string;
}

const Guestbook: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('bac_ho_messages');
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      const initial = [
        { id: '1', name: 'Phan Hữu Đăng', location: 'Nghệ An', content: 'Chúc mừng sinh nhật Bác. Chúng cháu hứa sẽ luôn học tập và làm theo tấm gương đạo đức của Bác.', date: '2026-05-17' },
        { id: '2', name: 'Nguyễn Văn Nam', location: 'Nghệ An', content: 'Đời đời nhớ ơn Bác Hồ vĩ đại. Tình yêu của Bác dành cho thiếu nhi luôn là động lực cho chúng em.', date: '2026-05-19' },
      ];
      setMessages(initial);
      localStorage.setItem('bac_ho_messages', JSON.stringify(initial));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      name,
      location,
      content,
      date: new Date().toLocaleDateString('vi-VN'),
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem('bac_ho_messages', JSON.stringify(updated));

    setName('');
    setLocation('');
    setContent('');
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a0a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vn-red/10 rounded-full blur-[100px]" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-lotus-pink/10 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lotus-pink font-dancing text-4xl mb-2"
          >
            Chúng cháu dâng lên Bác...
          </motion.h3>
          <h2 className="text-3xl md:text-5xl font-vietnam font-bold text-white uppercase">Bảng tin yêu thương</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-12 border-vn-red/30"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Họ và tên của bạn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-vn-red transition-all"
                required
              />
              <input
                type="text"
                placeholder="Địa phương (VD: Nghệ An)..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-vn-red transition-all"
              />
            </div>
            <textarea
              placeholder="Lời chúc, tấm lòng dâng lên Bác..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-vn-red transition-all resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-vn-red hover:bg-red-600 text-white font-vietnam font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Gửi tấm lòng của em
            </button>
          </form>
        </motion.div>

        {/* Lotus cards display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-pink-50/10 to-pink-200/5 border border-pink-200/20 relative group hover:shadow-[0_10px_30px_rgba(253,202,210,0.1)] transition-all"
              >
                <div className="absolute top-4 right-4 text-lotus-pink/30 group-hover:text-lotus-pink/60 transition-colors">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-vn-red/20 flex items-center justify-center text-vn-red font-bold">
                    {msg.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{msg.name}</h4>
                    <p className="text-white/40 text-xs">{msg.location}</p>
                  </div>
                </div>
                <p className="text-white/80 font-lora text-sm italic line-clamp-4">
                  "{msg.content}"
                </p>
                <p className="mt-4 text-[10px] text-white/30 font-vietnam uppercase tracking-tighter">
                  {msg.date}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
