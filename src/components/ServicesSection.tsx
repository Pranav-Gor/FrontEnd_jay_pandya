import React from 'react';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hover over the cards to discover how we can help with your travel needs
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <ServiceCard type="passport" />
          <ServiceCard type="flight" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
