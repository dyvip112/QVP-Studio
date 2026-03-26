import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange, placeholder, name }) => {
  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-blue-100 bg-white text-stone-700 focus:outline-none focus:ring-2 focus:ring-[#1e40af] font-roboto text-sm transition-all appearance-none shadow-sm hover:border-[#1e40af] cursor-pointer pr-10"
        style={{ minHeight: '44px' }}
      >
        {placeholder && (
          <option value="" disabled hidden>{placeholder}</option>
        )}
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#1e40af] text-lg">
        ▼
      </span>
    </div>
  );
};

export default CustomSelect;
