import React, { useState, useEffect } from 'react';
import { Plane, FileText, Mail, Users, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
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
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-magenta-600 rounded-lg flex items-center justify-center">
              <Plane size={24} className="text-white" />
            </div>
            <div className="font-bold text-xl gradient-text cursor-pointer" onClick={() => scrollToSection('home')}>
              Jay Panday
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
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

        {/* Mobile navigation menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-48 opacity-100 mt-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-2">
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
