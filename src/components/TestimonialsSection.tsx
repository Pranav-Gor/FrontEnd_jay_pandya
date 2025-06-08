import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      service: 'Passport Renewal',
      text: 'As an Indian citizen living abroad, I was worried about my passport renewal process. Jay made it incredibly smooth and efficient. His knowledge of both Indian and international travel requirements is impressive!',
      rating: 5,
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Rahul Patel',
      service: 'Flight Booking',
      text: 'Found amazing deals for my family trip to India. The personalized service and attention to detail made all the difference. They even helped with visa documentation!',
      rating: 5,
      location: 'Toronto, Canada',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ananya Gupta',
      service: 'Travel Consultation',
      text: 'Being a frequent traveler between India and the US, I needed someone who understands both cultures. Jay\'s expertise in international travel made my journey hassle-free. Highly recommended!',
      rating: 5,
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real stories from satisfied customers who trusted us with their travel needs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
