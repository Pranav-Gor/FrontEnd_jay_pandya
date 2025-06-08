import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Phone, Clock } from 'lucide-react';
import { validateEmail, validatePhone, validateName } from '../utils/api';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) {
      newErrors.name = 'Please enter your name';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'Please enter a valid name';
    }
    if (!formData.email) {
      newErrors.email = 'Please enter your email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message) {
      newErrors.message = 'Please enter your message';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      info: '+91 98244 66677',
      subInfo: 'Available 24/7'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      info: 'jay_2705@yahoo.com',
      subInfo: 'Quick Response'
    },
    {
      icon: <Clock size={24} />,
      title: 'Service Hours',
      info: 'Round the Clock',
      subInfo: 'Always Ready to Help'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            We're here to help you 24/7. Whether it's day or night, our team is ready to assist with your travel needs.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="glass-morphism rounded-2xl p-8 border border-purple-500/20 text-center hover:scale-105 transition-all duration-300 group">
              <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-3 text-lg">{item.title}</h3>
              <p className="text-gray-300 text-base mb-2 font-medium">{item.info}</p>
              <p className="text-purple-400 text-sm">{item.subInfo}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="glass-morphism rounded-3xl p-10 border border-purple-500/30 bg-gradient-to-br from-purple-600/10 to-magenta-600/10 relative overflow-hidden">
          {/* Form decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-magenta-500/20 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-magenta-600 rounded-2xl mb-4">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Send us a Message</h3>
              <p className="text-gray-300">We'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-900/60 border ${errors.name ? 'border-red-500' : 'border-gray-600/50'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-900/60 border ${errors.email ? 'border-red-500' : 'border-gray-600/50'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900/60 border ${errors.phone ? 'border-red-500' : 'border-gray-600/50'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  How can we help you? *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 bg-gray-900/60 border ${errors.message ? 'border-red-500' : 'border-gray-600/50'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm`}
                  placeholder="Tell us about your travel plans or any questions you have..."
                />
                {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-5 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden ${
                  isSubmitted
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-magenta-600 hover:to-purple-600 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2 relative z-10">
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
                {!isSubmitted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
