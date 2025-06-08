import React from 'react';
import { FileText, Plane, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Travel Made
          <span className="gradient-text block">Simple & Secure</span>
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Get expert assistance with passport applications, renewals, and flight bookings. 
          Professional service you can trust for all your travel needs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => navigate('/passport-services')}
            className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <FileText size={20} />
            <span>Passport Services</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => navigate('/book-flight')}
            className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-magenta-600 hover:to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <Plane size={20} />
            <span>Book Your Flight</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Floating Elements */}
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-magenta-600/20 rounded-full blur-2xl animate-float delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
