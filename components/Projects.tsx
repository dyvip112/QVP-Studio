
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: '1',
      title: 'Quay Về',
      subtitle: 'Hành Trình Của Hoà',
      description: 'Một bộ phim hoạt hình ngắn về ký ức và sự kết nối giữa các thế hệ. Với phong cách vẽ tay truyền thống kết hợp màu nước, "Quay Về" đưa khán giả vào một không gian tĩnh lặng, nơi những kỷ niệm sống lại.',
      image: '/images/project-quay-ve.jpg',
      tag: 'Phim Ngắn Animation'
    },
    {
      id: '2',
      title: 'Phép Màu',
      subtitle: 'Hành Trình Tìm Kiếm Phép Màu',
      description: 'Tập truyện kể về một hành trình gian nan cực khổ của hai mẹ con trên con đường tìm kiếm lại ảnh sáng cho người mẹ. Qua góc nhìn của nhân vật con.',
      image: '/images/project-phep-mau.jpg',
      tag: 'Truyện Tranh'
    }
  ];

  const renderSubtitle = (text: string) => {
    return text.split('').map((char, index) => (
      char === 'Q' ? <span key={index} className="no-italic-q">Q</span> : char
    ));
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.3em] text-stone-400 mb-4 font-montserrat font-extrabold">Các Dự Án Đã Làm</h2>
        <h3 className="text-5xl font-bold text-stone-900 font-playfair italic">Dự Án Nổi Bật</h3>
      </div>

      <div className="space-y-32">
        {projects.map((project, idx) => (
          <div key={project.id} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center group`}>
            <div className="w-full md:w-3/5 overflow-hidden sketch-border rounded-lg bg-white p-2">
               <div className="overflow-hidden rounded-md aspect-video relative">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
               </div>
            </div>
            
            <div className="w-full md:w-2/5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e40af] px-3 py-1 bg-blue-50 rounded-full border border-blue-100 font-montserrat">
                {project.tag}
              </span>
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-stone-900 leading-tight font-playfair">{project.title}</h4>
                <p className="text-xl font-playfair italic text-stone-500 leading-relaxed">
                  {renderSubtitle(project.subtitle)}
                </p>
              </div>
              <p className="text-stone-600 leading-[1.8] text-lg font-roboto font-normal italic">
                "{project.description}"
              </p>
              <div className="pt-4">
                <button className="group flex items-center space-x-4 text-[#1e40af] font-bold text-sm tracking-widest uppercase font-montserrat">
                  <span>Cảm Ơn Bạn Đã Quan Tâm</span>
                  <div className="w-12 h-[1px] bg-[#1e40af] group-hover:w-20 transition-all"></div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
