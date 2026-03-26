
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-end mb-24">
          <div className="space-y-8">
            <h2 className="text-6xl font-bold leading-[1.25] font-playfair">
              Cùng <span className="no-italic-q">Q</span>VP <span className="italic text-stone-100">kể lại</span> <br /> 
              <span className="italic text-stone-100">câu chuyện của bạn?</span>
            </h2>
            <div className="flex space-x-12 text-[10px] uppercase tracking-[0.2em] font-bold font-montserrat">
               <a href="https://www.tiktok.com/@qvpstudio.vn" className="hover:text-blue-400 transition-colors">TikTok</a>
               <a href="https://www.instagram.com/qvpstudio.vn/" className="hover:text-blue-400 transition-colors">Instagram</a>
               <a href="https://www.facebook.com/profile.php?id=61581945975785" className="hover:text-blue-400 transition-colors">Facebook</a>
            </div>
          </div>
          <div className="text-stone-400 space-y-4">
            <p className="text-lg italic font-playfair leading-relaxed opacity-80">"Nghệ thuật không phải là điều chúng ta thấy, mà là điều chúng ta làm cho người khác thấy."</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-montserrat">— Edgar Degas</p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-stone-500 text-[10px] uppercase tracking-widest font-bold font-montserrat">
          <div className="flex items-center space-x-8">
            <span>© {new Date().getFullYear()} QVP Studio</span>
            <span>Vietnam Creative Hub</span>
          </div>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
