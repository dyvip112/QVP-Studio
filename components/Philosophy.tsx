import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

const Philosophy: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formBody = new URLSearchParams({
      name: form.name,
      phone: form.phone,
      email: form.email,
      service: form.service,
      description: form.description,
      message: form.description,
      content: form.description,
      mota: form.description,
    }).toString();

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbypqmQSDFcjSIcIRfnAPjZaddvlS_UgWGL6HatOP_3QA_4dj9he3TuOpZxoZy2sV2W-/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: formBody,
        }
      );

      if (!response.ok) {
        setError('Gửi thông tin thất bại. Vui lòng thử lại!');
        console.error('Response not ok', response.status, await response.text());
        return;
      }

      setSuccess(true);
      setForm({
        name: '',
        phone: '',
        email: '',
        service: '',
        description: '',
      });
    } catch (err) {
      setError('Có lỗi xảy ra. Vui lòng thử lại!');
      console.error('Fetch error', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(30,64,175,0.08),_transparent_38%),linear-gradient(180deg,_#fcfbf8_0%,_#f7f2ea_100%)] px-4 py-16 md:py-24">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-montserrat text-xs font-bold uppercase tracking-[0.55em] text-[#1e40af] md:text-sm">
            Kết Nối Ý Tưởng
          </p>

          <h2 className="font-playfair mt-6 text-5xl italic leading-none text-stone-900 md:text-7xl">
            Chung Tay Sáng Tạo
          </h2>

          <div className="font-lora mx-auto mt-10 max-w-4xl space-y-7 text-xl italic leading-relaxed text-stone-700 md:text-[2rem]">
            <p>
              QVP Studio không chỉ tìm kiếm dự án. Chúng tôi tìm những người đồng hành
              cùng tin rằng một ý tưởng đẹp có thể trở thành một dấu ấn chạm đến cảm xúc.
            </p>
            <p>
              Nếu bạn đang ôm ấp một câu chuyện, một thương hiệu, hay một giấc mơ sáng tạo,
              chúng tôi sẵn sàng ngồi lại, lắng nghe thật kỹ và biến nó thành một hành trình
              hợp tác có chiều sâu, rõ bản sắc và lan tỏa được giá trị.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 text-center md:grid-cols-3">
          <div className="space-y-4 rounded-[2rem] bg-white/65 px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1e40af]/10 text-2xl text-[#1e40af]">
              Y
            </div>
            <h3 className="font-montserrat text-xs font-bold uppercase tracking-[0.35em] text-stone-900">
              Đồng Cảm
            </h3>
            <p className="font-roboto text-sm leading-7 text-stone-600">
              Bắt đầu bằng việc lắng nghe ý tưởng, mục tiêu và tinh thần riêng của bạn.
            </p>
          </div>

          <div className="space-y-4 rounded-[2rem] bg-white/65 px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1e40af]/10 text-2xl text-[#1e40af]">
              +
            </div>
            <h3 className="font-montserrat text-xs font-bold uppercase tracking-[0.35em] text-stone-900">
              Hợp Tác
            </h3>
            <p className="font-roboto text-sm leading-7 text-stone-600">
              Cùng nhau phát triển hướng đi sáng tạo phù hợp, rõ ràng và khả thi.
            </p>
          </div>

          <div className="space-y-4 rounded-[2rem] bg-white/65 px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1e40af]/10 text-2xl text-[#1e40af]">
              *
            </div>
            <h3 className="font-montserrat text-xs font-bold uppercase tracking-[0.35em] text-stone-900">
              Lan Tỏa
            </h3>
            <p className="font-roboto text-sm leading-7 text-stone-600">
              Biến dự án thành một tác phẩm có chất riêng, có khả năng kết nối với cộng
              đồng của bạn.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="font-lora text-lg italic leading-relaxed text-stone-700 md:text-2xl">
            Bạn có muốn biến ý tưởng của mình trở thành sự thật không? Hãy để chúng tôi
            giúp bạn biến những hình ảnh trong đầu thành hiện thực.
          </p>
        </div>

        <div className="pt-16">
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-2xl space-y-6 rounded-[2rem] border border-white/70 bg-white/85 p-8 text-left shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur"
          >
            <div className="text-center">
              <p className="font-montserrat text-xs font-bold uppercase tracking-[0.4em] text-[#1e40af]">
                Mở Lời Hợp Tác
              </p>
              <h3 className="font-lora mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">
                Nhập Thông Tin Của Bạn
              </h3>
            </div>

            <div>
              <label
                htmlFor="name"
                className="font-montserrat mb-2 block text-xs font-bold uppercase tracking-widest text-[#1e40af]"
              >
                Họ tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af]"
                placeholder="Nhập tên của bạn"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="font-montserrat mb-2 block text-xs font-bold uppercase tracking-widest text-[#1e40af]"
              >
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af]"
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-montserrat mb-2 block text-xs font-bold uppercase tracking-widest text-[#1e40af]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af]"
                placeholder="Nhập email của bạn"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="font-montserrat mb-2 block text-xs font-bold uppercase tracking-widest text-[#1e40af]"
              >
                Dịch vụ quan tâm
              </label>
              <CustomSelect
                name="service"
                value={form.service}
                onChange={handleServiceChange}
                placeholder="Chọn dịch vụ quan tâm"
                options={[
                  { value: 'animation', label: 'Hoạt hình' },
                  { value: 'design', label: 'Thiết kế' },
                  { value: 'consulting', label: 'Tư vấn sáng tạo' },
                  { value: 'other', label: 'Khác' },
                ]}
                className="font-montserrat"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="font-montserrat mb-2 block text-xs font-bold uppercase tracking-widest text-[#1e40af]"
              >
                Nội dung hợp tác
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                required
                value={form.description}
                onChange={handleChange}
                className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-[#1e40af]"
                placeholder="Mô tả ngắn về ý tưởng, mục tiêu và điều bạn muốn cùng chúng tôi thực hiện"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#1e40af] px-8 py-4 font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-200"
              disabled={loading}
            >
              {loading ? 'Đang gửi...' : 'Bắt Đầu Cuộc Trò Chuyện'}
            </button>

            {success && (
              <div className="rounded-xl bg-green-50 px-4 py-3 text-center text-sm text-green-700">
                Thông tin đã được gửi thành công.
              </div>
            )}
            {error && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-center text-sm text-red-700">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
