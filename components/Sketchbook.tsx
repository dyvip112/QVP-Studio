
import React from 'react';

const Sketchbook: React.FC = () => {
  const sketches = [
    'https://media.discordapp.net/attachments/1438510824275709956/1486742161331589191/image.png?ex=69c69c09&is=69c54a89&hm=e3b2e9135b7ec22743020104b3be47051ac84d4188df89c139f5dffb984b784f&=&format=webp&quality=lossless&width=1214&height=680',
    'https://media.discordapp.net/attachments/1438510824275709956/1486742161738305696/image.png?ex=69c69c09&is=69c54a89&hm=2aa5319a2f7e9525dfe9d6ce66873385eb9a8e6bf0294a01a0481dd3338cf0cd&=&format=webp&quality=lossless&width=1241&height=680',
    'https://media.discordapp.net/attachments/1438510824275709956/1486742162459590777/image.png?ex=69c69c09&is=69c54a89&hm=74b3bdcae87ba4437df82549317217319230ca3abcbe23f419df4c4c8bcefc98&=&format=webp&quality=lossless&width=1239&height=680',
    'https://media.discordapp.net/attachments/1438510824275709956/1486742162841534765/image.png?ex=69c69c09&is=69c54a89&hm=2ff27085fb0b7a90e26d9e4ea499a469db0fc91b6250b8864cb5b3d4b5f9bd34&=&format=webp&quality=lossless&width=1218&height=680',
    'https://media.discordapp.net/attachments/1438510824275709956/1486742163332005948/image.png?ex=69c69c0a&is=69c54a8a&hm=ab85f0b0f6a10bc023963264ac8258e8d9cf18da87721468fd22d3d9ae63fce4&=&format=webp&quality=lossless&width=1244&height=680',
    'https://media.discordapp.net/attachments/1438510824275709956/1486742163923406979/image.png?ex=69c69c0a&is=69c54a8a&hm=2e636243c978b05a6b32d80fe27007326e2332c3f9bed5603cd6d2c90565a46e&=&format=webp&quality=lossless&width=1239&height=680'
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-[#1e40af] text-[10px] font-bold tracking-[0.3em] uppercase rounded-full font-montserrat">
            The Raw Soul
          </div>
          <h2 className="text-5xl font-bold text-stone-900 font-playfair leading-tight">
            Góc Phác Thảo <br />
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed font-roboto">
            Trước khi trở thành những thước phim mượt mà, mọi ý tưởng đều bắt đầu từ những nét chì nguệch ngoạc trên giấy trắng. Đây là nơi chúng tôi lưu giữ linh hồn sơ khai của mọi dự án.
          </p>
          <div className="pt-6">
            <div className="flex -space-x-4">
              {[].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                   <img src={`https://i.pravatar.cc/150?u=${i}`} alt="artist" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#1e40af] flex items-center justify-center text-white text-xs font-bold shadow-md">
                +3
              </div>
            </div>
            <p className="mt-4 text-xs font-semibold text-stone-400 uppercase tracking-widest font-montserrat">Hơn 1,000 phác thảo được thực hiện mỗi năm</p>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 rotate-3 scale-95 hover:rotate-0 transition-transform duration-700">
            {sketches.map((img, idx) => (
              <div key={idx} className={`sketch-border p-2 bg-white shadow-xl ${idx % 2 === 0 ? 'mt-8' : '-mt-4'} hover:-translate-y-4 transition-transform duration-500`}>
                <img src={img} alt="sketch" className="w-full aspect-[3/4] object-cover rounded grayscale" />
              </div>
            ))}
          </div>
          {/* Decorative ink splash element in blue */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#1e40af" d="M44.7,-76.4C58.2,-69.2,70,-58.5,77.3,-45.4C84.7,-32.3,87.6,-16.1,86.1,-0.9C84.5,14.4,78.5,28.8,69.8,41.2C61.1,53.5,49.7,63.9,36.5,70.9C23.3,77.9,8.4,81.6,-6.6,83C-21.7,84.4,-36.8,83.5,-49.4,76.5C-62.1,69.5,-72.3,56.4,-78.9,42.1C-85.4,27.8,-88.4,12.4,-86.3,-2.2C-84.2,-16.8,-77,-30.6,-67.6,-42.6C-58.2,-54.6,-46.6,-64.8,-33.6,-72.3C-20.6,-79.8,-6.2,-84.6,8.6,-86.1C23.4,-87.6,31.2,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sketchbook;
