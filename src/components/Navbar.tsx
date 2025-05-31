
import React, { useState, useEffect } from 'react';
import { Plane, FileText, Mail, Users } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl gradient-text">
            Jay Panday
          </div>
          
          <div className="flex space-x-6">
            <button
              onClick={() => scrollToSection('services')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'services'
                  ? 'bg-purple-600/30 text-purple-300 neon-glow'
                  : 'text-gray-300 hover:text-purple-400'
              }`}
            >
              <FileText size={18} />
              <span>Services</span>
            </button>
            
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'testimonials'
                  ? 'bg-purple-600/30 text-purple-300 neon-glow'
                  : 'text-gray-300 hover:text-purple-400'
              }`}
            >
              <Users size={18} />
              <span>Testimonials</span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === 'contact'
                  ? 'bg-purple-600/30 text-purple-300 neon-glow'
                  : 'text-gray-300 hover:text-purple-400'
              }`}
            >
              <Mail size={18} />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
