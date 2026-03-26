
import React from 'react';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const members: TeamMember[] = [
    {
      name: "Trần Văn Quốc",
      role: "Thành Viên",
      image: "https://media.discordapp.net/attachments/1438510824275709956/1486275855478165605/image.png?ex=69c4e9c1&is=69c39841&hm=fb985eefceb321924fd77b8f35efc49c34935d82397ba2cc4f4315c1df5424c9&=&format=webp&quality=lossless&width=625&height=810",
      bio: "Linh hồn của QVP, người biến những ý tưởng trừu tượng thành những khung hình đầy cảm xúc và sức sống."
    },
   {
      name: "Trần Thiên Phụng",
      role: "Trưởng Nhóm",
      image: "https://media.discordapp.net/attachments/1438510824275709956/1486276332022399076/image.png?ex=69c4ea33&is=69c398b3&hm=b1e9faf5c744011cf0b7dfb17e716f4c3fd688982aa25a45fff8cc1bf3a0884a&=&format=webp&quality=lossless&width=608&height=810",
      bio: "Nhà điều hành tài ba, giữ cho nhịp đập sáng tạo của studio luôn ổn định và chuyên nghiệp."
    },
    {
      name: "Lê Chí Vĩ",
      role: "Thành Viên",
      image: "https://media.discordapp.net/attachments/1438510824275709956/1468520825626955959/z7446297221413_68ac1cbf27895b7674c06c786d28cb2d.jpg?ex=69c442d8&is=69c2f158&hm=ad454c35f93f583212b68dba16e0bb55dae51ee3474ad0048f67bac6a8164037&=&format=webp&width=453&height=680",
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
            <div className={`relative mb-10 w-full max-w-[320px] aspect-[3/4] transition-all duration-700 ease-in-out ${
              idx === 0 ? '-rotate-2 group-hover:rotate-1' : 
              idx === 1 ? 'rotate-1 group-hover:-rotate-1' : 
              'rotate-3 group-hover:rotate-0'
            }`}>
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
