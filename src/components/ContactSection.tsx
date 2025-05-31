
import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Phone, MapPin, Clock, MessageCircle, User, FileText, Plane } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    passportNumber: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      subInfo: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      info: 'help@jaypanday.com',
      subInfo: '24/7 Response Time'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      info: '123 Travel Street',
      subInfo: 'New York, NY 10001'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      info: 'Mon-Fri: 9AM-6PM',
      subInfo: 'Weekend: By Appointment'
    }
  ];

  const services = [
    { icon: <FileText size={20} />, name: 'Passport Services', color: 'purple' },
    { icon: <Plane size={20} />, name: 'Flight Booking', color: 'magenta' },
    { icon: <User size={20} />, name: 'Travel Consultation', color: 'cyan' },
    { icon: <MessageCircle size={20} />, name: 'General Inquiry', color: 'violet' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Ready to start your journey? We're here to make your travel dreams come true with personalized service and expert guidance.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="glass-morphism rounded-2xl p-6 border border-purple-500/20 text-center hover:scale-105 transition-all duration-300">
              <div className="text-purple-400 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-1">{item.info}</p>
              <p className="text-gray-400 text-xs">{item.subInfo}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <div className="glass-morphism rounded-2xl p-8 border border-purple-500/20">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Send us a Message</h3>
              <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="passport">Passport Services</option>
                    <option value="flight">Flight Booking</option>
                    <option value="consultation">Travel Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Passport Number (Optional)
                </label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="123456789"
                />
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
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your travel plans, passport needs, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-magenta-600 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
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
              </button>
            </form>
          </div>

          {/* Services & FAQ Section */}
          <div className="space-y-8">
            {/* Quick Service Selection */}
            <div className="glass-morphism rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setFormData({...formData, service: service.name.toLowerCase().replace(' ', '')})}
                    className={`p-4 rounded-lg bg-gradient-to-r from-${service.color}-600/20 to-${service.color}-400/20 border border-${service.color}-500/30 hover:scale-105 transition-all duration-300 text-left`}
                  >
                    <div className={`text-${service.color}-400 mb-2`}>
                      {service.icon}
                    </div>
                    <span className="text-white text-sm font-medium">{service.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="glass-morphism rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-purple-400 font-semibold mb-2">How long does passport processing take?</h4>
                  <p className="text-gray-300 text-sm">Standard processing takes 6-8 weeks, expedited takes 2-3 weeks.</p>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-purple-400 font-semibold mb-2">Do you help with flight changes?</h4>
                  <p className="text-gray-300 text-sm">Yes, we provide full support for flight modifications and cancellations.</p>
                </div>
                <div className="pb-4">
                  <h4 className="text-purple-400 font-semibold mb-2">What documents do I need?</h4>
                  <p className="text-gray-300 text-sm">Requirements vary by service. We'll provide a complete checklist after consultation.</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="glass-morphism rounded-2xl p-8 border border-red-500/20 bg-gradient-to-r from-red-600/10 to-orange-600/10">
              <h3 className="text-2xl font-bold text-white mb-4">Emergency Assistance</h3>
              <p className="text-gray-300 mb-4">Need urgent help with travel documents? Our emergency hotline is available 24/7.</p>
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Call Emergency Line
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
