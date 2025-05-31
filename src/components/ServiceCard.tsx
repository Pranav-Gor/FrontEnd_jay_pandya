
import React, { useState } from 'react';
import { FileText, Plane, ArrowRight, Clock, Shield, Award } from 'lucide-react';

interface ServiceCardProps {
  type: 'passport' | 'flight';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ type }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isPassport = type === 'passport';

  const frontContent = {
    passport: {
      icon: <FileText size={48} />,
      title: 'Passport Services',
      gradient: 'from-purple-600 to-violet-600'
    },
    flight: {
      icon: <Plane size={48} />,
      title: 'Flight Booking',
      gradient: 'from-magenta-600 to-cyan-600'
    }
  };

  const backContent = {
    passport: {
      features: [
        { icon: <Clock size={20} />, text: 'Fast Processing' },
        { icon: <Shield size={20} />, text: 'Secure Application' },
        { icon: <Award size={20} />, text: 'Expert Assistance' }
      ],
      description: 'Complete passport application and renewal services with professional guidance.'
    },
    flight: {
      features: [
        { icon: <Clock size={20} />, text: 'Best Prices' },
        { icon: <Shield size={20} />, text: 'Safe Booking' },
        { icon: <Award size={20} />, text: '24/7 Support' }
      ],
      description: 'Find and book the perfect flights with our expert travel assistance.'
    }
  };

  return (
    <div
      className="relative w-80 h-96 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-xl glass-morphism border border-white/20 bg-gradient-to-br ${frontContent[type].gradient}/20 hover:shadow-2xl hover:shadow-${isPassport ? 'purple' : 'magenta'}-500/50 transition-all duration-300`}>
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className={`text-${isPassport ? 'purple' : 'magenta'}-400 mb-6 animate-float`}>
              {frontContent[type].icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {frontContent[type].title}
            </h3>
            <div className={`w-16 h-1 bg-gradient-to-r ${frontContent[type].gradient} rounded-full animate-glow-pulse`}></div>
          </div>
        </div>

        {/* Back Side - Features (Fixed mirroring) */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-xl glass-morphism border border-white/20 bg-gradient-to-br ${frontContent[type].gradient}/30 neon-glow`} style={{ transform: 'rotateY(180deg)' }}>
          <div className="flex flex-col items-center justify-center h-full p-8 text-center" style={{ transform: 'rotateY(180deg)' }}>
            <h3 className="text-xl font-bold text-white mb-6">
              Why Choose Us?
            </h3>
            
            <div className="space-y-4 mb-6">
              {backContent[type].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <div className={`text-${isPassport ? 'purple' : 'magenta'}-400`}>
                    {feature.icon}
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-300 text-sm mb-6 text-center">
              {backContent[type].description}
            </p>
            
            <button className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${frontContent[type].gradient} rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300`}>
              <span>Get Started</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
