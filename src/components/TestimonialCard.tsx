
import React from 'react';
import { Star, MapPin } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    service: string;
    text: string;
    rating: number;
    location: string;
    image: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="w-80 h-96 rounded-xl glass-morphism border border-white/20 bg-gradient-to-br from-purple-600/20 to-magenta-600/20 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 p-6">
      <div className="flex flex-col h-full">
        {/* User Image and Info */}
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              {testimonial.name}
            </h3>
            <div className="flex items-center text-purple-400 text-sm mb-2">
              <MapPin size={14} className="mr-1" />
              {testimonial.location}
            </div>
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Service Badge */}
        <div className="mb-4">
          <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-magenta-600 rounded-full text-white text-xs font-semibold">
            {testimonial.service}
          </span>
        </div>

        {/* Testimonial Text */}
        <div className="flex-1 flex items-center">
          <p className="text-gray-300 text-sm leading-relaxed italic">
            "{testimonial.text}"
          </p>
        </div>

        {/* Bottom decoration */}
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-magenta-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
