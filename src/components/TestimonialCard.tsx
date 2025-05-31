
import React, { useState } from 'react';
import { Star, User, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    service: string;
    text: string;
    rating: number;
    location: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [isFlipped, setIsFlipped] = useState(false);

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
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl glass-morphism border border-white/20 bg-gradient-to-br from-purple-600/20 to-magenta-600/20 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-magenta-600 rounded-full flex items-center justify-center mb-6">
              <User size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {testimonial.name}
            </h3>
            <p className="text-purple-400 text-sm mb-4">
              {testimonial.location}
            </p>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-magenta-600 rounded-full animate-glow-pulse"></div>
          </div>
        </div>

        {/* Back Side - Review */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl glass-morphism border border-white/20 bg-gradient-to-br from-purple-600/30 to-magenta-600/30 neon-glow">
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <Quote size={32} className="text-purple-400 mb-4" />
            
            <p className="text-gray-300 text-sm mb-6 italic leading-relaxed">
              "{testimonial.text}"
            </p>
            
            <div className="text-center">
              <p className="text-white font-semibold mb-1">
                {testimonial.name}
              </p>
              <p className="text-purple-400 text-sm mb-2">
                {testimonial.service}
              </p>
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
