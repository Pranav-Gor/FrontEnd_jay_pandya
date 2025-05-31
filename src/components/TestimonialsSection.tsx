
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      service: 'Passport Renewal',
      text: 'Amazing service! They helped me renew my passport so quickly. The process was seamless and stress-free. Highly recommended!',
      rating: 5,
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      service: 'Flight Booking',
      text: 'Found the best flight deals through their service. Saved me $300 on my international trip! Excellent customer support.',
      rating: 5,
      location: 'California, USA',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      service: 'Passport Application',
      text: 'First-time passport application made easy. They guided me through every step and answered all my questions patiently.',
      rating: 5,
      location: 'Texas, USA',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
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
