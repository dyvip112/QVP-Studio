
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Kịch Bản & Concept",
      desc: "Xây dựng nền tảng cốt truyện và phong cách nghệ thuật phù hợp.",
      img: "https://picsum.photos/seed/p1/400/300"
    },
    {
      title: "Storyboard & Layout",
      desc: "Phác thảo khung cảnh và góc quay để hình dung nhịp điệu câu chuyện.",
      img: "https://picsum.photos/seed/p2/400/300"
    },
    {
      title: "Diễn Hoạt (Animation)",
      desc: "Thổi hồn vào nhân vật qua từng chuyển động mượt mà, sống động.",
      img: "https://picsum.photos/seed/p3/400/300"
    },
    {
      title: "Hậu Kỳ & Âm Thanh",
      desc: "Tinh chỉnh màu sắc và lồng ghép âm thanh để tạo trải nghiệm hoàn hảo.",
      img: "https://picsum.photos/seed/p4/400/300"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">Quy Trình Sáng Tạo</h2>
          <p className="text-stone-500 leading-relaxed">
            Chúng tôi không chỉ làm việc, chúng tôi tận hưởng từng giai đoạn để đảm bảo "Chất lượng trong từng khung hình" đúng như giá trị cốt lõi đã đề ra.
          </p>
        </div>
        <div className="text-[#4a5d23] font-bold serif italic text-xl">
          "The Art of Visual Storytelling"
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="mb-6 overflow-hidden rounded-xl border-2 border-stone-200 sketch-border">
              <img src={step.img} alt={step.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#4a5d23] text-white flex items-center justify-center rounded-full font-bold shadow-lg">
              0{idx + 1}
            </div>
            <h3 className="text-lg font-bold text-stone-800 mb-2">{step.title}</h3>
            <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-8 md:p-12 bg-[#4a5d23] rounded-3xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Bạn có ý tưởng cho một câu chuyện?</h3>
            <p className="text-olive-50/80 mb-8 text-lg">
              Đừng để nó chỉ là suy nghĩ. Hãy cùng QVP Studio biến ý tưởng của bạn thành những thước phim hoạt hình đầy nghệ thuật.
            </p>
            <button className="px-8 py-3 bg-white text-[#4a5d23] font-bold rounded-lg hover:bg-olive-50 transition-colors">
              Bắt Đầu Ngay
            </button>
          </div>
          <div className="hidden md:block">
            <img src="https://picsum.photos/seed/sketch/600/400" alt="Sketching" className="rounded-xl shadow-2xl rotate-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
