
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center pt-32 md:pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-50/30 -skew-x-12 origin-top-right -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-6 md:w-8 h-[1px] bg-[#1e40af]"></div>
            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] text-[#1e40af] font-montserrat opacity-70">EST. 2024</span>
          </div>
          
          <div className="relative inline-block w-full">
            <h1 className="text-[32px] sm:text-4xl md:text-6xl lg:text-[72px] font-bold text-stone-900 leading-[1.3] md:leading-[1.05] tracking-[-0.02em] font-playfair flex flex-row flex-wrap md:flex-col items-baseline md:items-start gap-x-2 gap-y-0.5 md:gap-x-0">
              <span className="flex items-baseline gap-2 md:gap-3">
                <span className="text-stone-900">Nơi</span>
                <span className="italic text-[#1e40af]">Câu Chuyện</span>
              </span>
              <span className="text-stone-900 block">Được Dựng Lên</span>
              <span className="flex items-baseline gap-2 md:gap-3">
                <span className="text-stone-900">Bằng </span>
                <span className="italic text-[#1e40af]">Hình Ảnh.</span>
              </span>
            </h1>
          </div>
          
          <div className="mt-8 md:mt-10 space-y-6 max-w-sm">
            <p className="text-[11px] md:text-base text-stone-500 leading-relaxed font-roboto italic border-l-2 border-blue-100 pl-4">
              <span className="font-bold text-stone-900 font-montserrat not-italic uppercase text-[9px] md:text-[10px] tracking-wider">QVP Studio</span> — Nơi mỗi khung hình là một di sản tinh thần, tinh tế và đầy cảm hứng.
            </p>
            
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="px-5 md:px-7 py-2 md:py-2.5 bg-[#1e40af] text-white font-bold rounded-sm shadow-md hover:shadow-blue-200 hover:-translate-y-0.5 transition-all uppercase text-[8px] md:text-[9px] tracking-[0.2em] font-montserrat whitespace-nowrap">
                Dự Án
              </button>
              <button className="text-stone-900 font-bold border-b border-stone-900 pb-0.5 hover:text-[#1e40af] hover:border-[#1e40af] transition-all uppercase text-[8px] md:text-[9px] tracking-[0.2em] font-montserrat whitespace-nowrap">
                Liên Hệ
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative group mt-10 md:mt-0 lg:pl-16">
          <div className="floating">
            {/* Bo góc lớn cho khung chứa ảnh và bóng đổ */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[10px_10px_0px_0px_#1e40af] md:shadow-[15px_15px_0px_0px_#1e40af] border border-blue-100 transition-all duration-500 group-hover:shadow-[5px_5px_0px_0px_#1e40af]">
               <div className="max-w-md mx-auto">
                 <img 
                   src="https://media.discordapp.net/attachments/1438510824275709956/1486740327837597866/z7661532867840_f09514e076ef041edd57a0949db12fe2.jpg?ex=69c69a54&is=69c548d4&hm=0c2edc8e390776b13e239759cf9099fdfbdda973450400d3db86974ad3248b6d&=&format=webp&width=573&height=810" 
                   alt="Artistic Animation" 
                   className="w-auto h-auto object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 mx-auto"
                 />
               </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-20 md:w-32 h-20 md:h-32 border border-blue-100/40 rounded-full -z-10 animate-pulse hidden sm:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
