
import React from 'react';
import { ValueItem } from '../types';

const About: React.FC = () => {
  const values: ValueItem[] = [
    {
      title: "Sáng Tạo Không Giới Hạn",
      description: "Chúng tôi luôn tìm kiếm những phong cách mới, ý tưởng độc bản để kể những câu chuyện khác biệt.",
      icon: "🎨"
    },
    {
      title: "Chất Lượng Từng Khung Hình",
      description: "Tập trung vào từng chi tiết nhỏ nhất, từ thẩm mỹ đến chuyển động mượt mà của nhân vật.",
      icon: "✨"
    },
    {
      title: "Câu Chuyện Là Cốt Lõi",
      description: "Dưới mọi nét vẽ là một thông điệp nhân văn, gắn kết cảm xúc mạnh mẽ với người xem.",
      icon: "📖"
    },
    {
      title: "Nghệ Thuật & Công Nghệ",
      description: "Kết hợp phương pháp vẽ tay truyền thống với quy trình sản xuất hoạt hình hiện đại.",
      icon: "💻"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Câu Chuyện Thương Hiệu</h2>
            <div className="w-20 h-1.5 bg-[#4a5d23] mb-8"></div>
            <p className="text-stone-600 leading-relaxed mb-6">
              QVP Studio được thành lập bởi ba người bạn đồng hành: <strong>Quốc, Vi, Phụng</strong>. Cái tên QVP còn đại diện cho <strong>Quick (Nhanh chóng) - Value (Giá trị) - Professional (Chuyên nghiệp)</strong>.
            </p>
            <p className="text-stone-600 leading-relaxed italic border-l-4 border-olive-200 pl-6 py-2">
              "Chúng tôi tin rằng mỗi nét bút đều mang một năng lượng nhất định, và mọi câu chuyện đều có giá trị để được kể lại."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#4a5d23] flex items-center">
                <span className="mr-2">🚀</span> Tầm Nhìn
              </h3>
              <p className="text-sm text-stone-500">
                Trở thành studio hàng đầu về minh họa và hoạt hình tại Việt Nam, đưa những概念 nghệ thuật Việt vươn tầm quốc tế.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#4a5d23] flex items-center">
                <span className="mr-2">🎯</span> Sứ Mệnh
              </h3>
              <p className="text-sm text-stone-500">
                Tạo ra những tác phẩm hoạt hình chất lượng cao, kết hợp giữa nghệ thuật vẽ tay và công nghệ, chạm tới trái tim khán giả.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Giá Trị Cốt Lõi</h2>
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className="group p-6 bg-white border border-stone-100 rounded-xl hover:border-olive-200 hover:shadow-xl hover:shadow-olive-100/50 transition-all flex items-start space-x-6"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">{value.icon}</div>
              <div className="space-y-2">
                <h4 className="font-bold text-stone-800">{value.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
