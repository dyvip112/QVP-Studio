
import React from 'react';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const members: TeamMember[] = [
    {
      name: "Trần Văn Quốc",
      role: "Thành Viên",
      image: "/images/team-tran-van-quoc.jpg",
      bio: "Linh hồn của QVP, người biến những ý tưởng trừu tượng thành những khung hình đầy cảm xúc và sức sống."
    },
   {
      name: "Trần Thiên Phụng",
      role: "Trưởng Nhóm",
      image: "/images/team-tran-thien-phung.jpg",
      bio: "Nhà điều hành tài ba, giữ cho nhịp đập sáng tạo của studio luôn ổn định và chuyên nghiệp."
    },
    {
      name: "Lê Chí Vĩ",
      role: "Thành Viên",
      image: "/images/team-le-chi-vi.jpg",
      bio: "Người thổi bừng màu sắc vào thế giới QVP, mang đến sự rạng rỡ và tinh tế trong từng nét vẽ tay."
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24 space-y-6">
        <div className="inline-flex items-center space-x-3 mb-2">
           <div className="h-[1px] w-8 bg-[#1e40af]"></div>
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#1e40af] font-montserrat">Những Người Thiết Kế</span>
           <div className="h-[1px] w-8 bg-[#1e40af]"></div>
        </div>
        <h3 className="text-5xl md:text-6xl font-semibold text-stone-900 font-lora">Đội Ngũ Sáng Tạo</h3>
        <p className="text-stone-500 italic max-w-2xl mx-auto font-playfair text-xl leading-relaxed opacity-80">
          "Chúng tôi không chỉ là cộng sự, chúng tôi là những người bạn cùng chung một lý tưởng: Kể chuyện bằng cả trái tim."
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
        {members.map((member, idx) => (
          <div key={idx} className="group flex flex-col items-center">
            <div className="relative mb-10 w-full max-w-[320px] aspect-[3/4] transition-all duration-700 ease-in-out">
              <div className="absolute inset-0 bg-blue-100 translate-x-2 translate-y-2 rounded-sm -z-10 opacity-30"></div>
              <div className="w-full h-full bg-white p-3 shadow-2xl border border-stone-100 flex flex-col">
                <div className="relative flex-1 overflow-hidden rounded-sm bg-stone-50">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover transition-all duration-1000 brightness-[1.02] contrast-[1.02] group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent opacity-30"></div>
                   <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#1e40af] rounded-full flex items-center justify-center text-white shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                     <span className="text-xl">✦</span>
                   </div>
                </div>
                <div className="h-10 flex items-center justify-center">
                   <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-300 font-montserrat">QVP STUDIO ARCHIVE</span>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-3 max-w-[280px]">
              <h4 className="text-2xl font-bold text-stone-900 font-playfair tracking-tight">{member.name}</h4>
              <div className="inline-block px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
                <p className="text-[#1e40af] text-[10px] font-bold uppercase tracking-[0.2em] font-montserrat">{member.role}</p>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed italic pt-2 font-roboto">
                "{member.bio}"
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-32 flex justify-center opacity-30">
        <div className="w-24 h-[1px] bg-stone-300"></div>
        <div className="mx-6 text-xl text-[#1e40af]">𓇬</div>
        <div className="w-24 h-[1px] bg-stone-300"></div>
      </div>
    </div>
  );
};

export default Team;
