
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'QVP Studio' },
    { id: 'projects', label: 'Dự Án' },
    { id: 'sketchbook', label: 'Phác Thảo' },
    { id: 'team', label: 'Đội Ngũ' },
    { id: 'philosophy', label: 'Kết Nối' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#fcfaf5]/95 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-24 flex items-center justify-between">
        {/* Logo Section */}
        <div 
          className="flex items-center cursor-pointer group shrink-0"
          onClick={() => scrollTo('home')}
        >
          <img 
            src="/images/qvp-logo.png"
            alt="QVP STUDIO Logo" 
            className="h-10 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 lg:space-x-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-sm uppercase tracking-[0.2em] font-bold transition-all relative py-2 font-montserrat ${
                  activeSection === item.id ? 'text-[#1e40af]' : 'text-stone-400 hover:text-stone-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1e40af] rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-0.5 bg-[#1e40af] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#1e40af] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#1e40af] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        <div className="hidden lg:block w-px h-8 bg-stone-200 mx-4"></div>
        
        <button className="hidden lg:block italic serif text-stone-600 hover:text-[#1e40af] transition-colors font-medium font-playfair">
          Liên hệ?
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-[#fcfaf5] border-b border-blue-100 shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-xs uppercase tracking-[0.3em] font-bold font-montserrat w-full text-left transition-colors ${
                  activeSection === item.id ? 'text-[#1e40af]' : 'text-stone-500 hover:text-[#1e40af]'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
