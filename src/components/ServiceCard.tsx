
import React, { useState } from 'react';
import { FileText, Plane, ArrowRight } from 'lucide-react';

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
      title: 'Book Your Flight',
      gradient: 'from-magenta-600 to-cyan-600'
    }
  };

  const backContent = {
    passport: {
      title: 'We Help With:',
      items: ['🔹 New Application Help', '🔸 Renewal Assistance', '🔹 Document Guidance', '🔸 Status Tracking']
    },
    flight: {
      title: 'Easy Booking:',
      items: ['🔸 Send us your details', '🔹 We handle everything', '🔸 Best prices guaranteed', '🔹 Instant confirmation']
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

        {/* Back Side */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl glass-morphism border border-white/20 bg-gradient-to-br ${frontContent[type].gradient}/30 neon-glow`}>
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-6">
              {backContent[type].title}
            </h3>
            <div className="space-y-3 mb-8">
              {backContent[type].items.map((item, index) => (
                <p key={index} className="text-gray-300 text-sm">
                  {item}
                </p>
              ))}
            </div>
            <button className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${frontContent[type].gradient} rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300`}>
              <span>Start Now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
