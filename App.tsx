
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Sketchbook from './components/Sketchbook';
import Philosophy from './components/Philosophy';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'sketchbook', 'team', 'philosophy'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-200 selection:text-blue-900">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="projects" className="py-24">
          <Projects />
        </section>
        
        <section id="sketchbook" className="py-24 bg-stone-100/50">
          <Sketchbook />
        </section>

        <section id="team" className="py-24">
          <Team />
        </section>
        
        <section id="philosophy" className="py-24 bg-blue-50/30">
          <Philosophy />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
