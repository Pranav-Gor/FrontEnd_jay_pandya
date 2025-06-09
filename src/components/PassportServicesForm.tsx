import React, { useState } from 'react';
import { FileText, Mail, Phone, MessageSquare, Loader2, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Validation functions
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string) => /^\d{10}$/.test(phone);

const PassportServicesForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    message: '',
    passportType: 'renewal',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'countryCode') {
      // Always start with '+' and only allow numbers after it
      let code = value.replace(/[^\d]/g, '');
      setFormData(prev => ({ ...prev, countryCode: '+' + code }));
    } else if (name === 'phone') {
      // Only allow numbers
      let phone = value.replace(/[^\d]/g, '');
      setFormData(prev => ({ ...prev, phone }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Please enter your name';
    if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!validatePhone(formData.phone)) newErrors.phone = 'Phone must be exactly 10 digits';
    if (!formData.countryCode) newErrors.countryCode = 'Country code is required';
    if (!formData.passportType) newErrors.passportType = 'Please select a passport type';
    if (!formData.message) newErrors.message = 'Please enter your message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const requestData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          passportServiceType: formData.passportType,
          message: formData.message
        };

        console.log('Sending passport request with data:', requestData);

        const response = await fetch('https://backend-jay-pandya-0.onrender.com/api/passport', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(requestData),
          mode: 'cors'
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response body:', errorText);
          throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
        }

        const data = await response.json();
        console.log('Success response:', data);

        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          countryCode: '+91',
          message: '',
          passportType: 'renewal'
        });

        // Show success message for 5 seconds then redirect
        setTimeout(() => {
          setIsSubmitted(false);
          navigate('/'); // Redirect to home page
        }, 5000);

      } catch (error) {
        console.error('Passport form submission error:', error);
        let errorMessage = 'Failed to send message. ';
        if (error instanceof Error) {
          errorMessage += error.message;
        } else {
          errorMessage += 'Please try again later.';
        }
        setErrors(prev => ({
          ...prev,
          submit: errorMessage
        }));
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-purple-900 p-6">
      <div className="max-w-3xl w-full bg-black/80 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-purple-800">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl font-bold text-purple-400 text-center">Passport Services</h1>
        </div>
        {isSubmitted ? (
          <div className="text-center text-green-500 text-xl">Our agent will contact you very soon!</div>
        ) : (
          <div className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(['name', 'email'] as const).map(field => (
                <div key={field} className="relative">
                  <label className="block text-sm font-medium text-white/80 mb-2 capitalize">{field} *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full border-2 border-purple-500 bg-black">
                      {field === 'name' ? <FileText className="text-purple-400" size={18} /> : <Mail className="text-purple-400" size={18} />}
                    </span>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full pl-12 py-3 bg-black border border-white/20 text-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                  {errors[field] && <div className="text-red-500 text-xs mt-1">{errors[field]}</div>}
                </div>
              ))}
            </div>
            
            {/* Phone & Passport Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone field with country code */}
              <div className="relative">
                <label className="block text-sm font-medium text-white/80 mb-2 capitalize w-full">Phone *</label>
                <div className="flex w-full">
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    onKeyDown={e => {
                      // Prevent deleting the '+'
                      if (
                        (e.currentTarget.selectionStart === 0 && (e.key === 'Backspace' || e.key === 'Delete')) ||
                        (e.currentTarget.selectionStart === 0 && e.key.length === 1 && e.key !== '+')
                      ) {
                        e.preventDefault();
                      }
                    }}
                    className="w-20 px-3 py-3 bg-black border border-white/20 text-white rounded-l-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                    placeholder="+91"
                    maxLength={4}
                    required
                    pattern="\+\d*"
                    inputMode="numeric"
                  />
                  <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full border-2 border-purple-500 bg-black">
                      <Phone className="text-purple-400" size={18} />
                    </span>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 py-3 bg-black border-t border-b border-r border-white/20 text-white rounded-r-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your phone number"
                      maxLength={10}
                      required
                      inputMode="numeric"
                    />
                  </div>
                </div>
                {errors.countryCode && <div className="text-red-500 text-xs mt-1">{errors.countryCode}</div>}
                {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
              </div>
              
              {/* Passport Type */}
              <div className="relative">
                <label className="block text-sm font-medium text-white/80 mb-2">Passport Type *</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full border-2 border-purple-500 bg-black">
                    <FileText className="text-purple-400" size={18} />
                  </span>
                  <select
                    name="passportType"
                    value={formData.passportType}
                    onChange={handleChange}
                    className="w-full pl-12 py-3 bg-black border border-white/20 text-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                  >
                    <option value="renewal">Passport Renewal</option>
                    <option value="new">New Passport Application</option>
                  </select>
                </div>
                {errors.passportType && <div className="text-red-500 text-xs mt-1">{errors.passportType}</div>}
              </div>
            </div>
            
            {/* Message Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-white/80 mb-2">Message *</label>
              <div className="relative">
                <span className="absolute left-3 top-3 flex items-center justify-center w-8 h-8 rounded-full border-2 border-purple-500 bg-black">
                  <MessageSquare className="text-purple-400" size={18} />
                </span>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 py-3 bg-black border border-white/20 text-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us about your passport needs..."
                />
              </div>
              {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full md:w-1/2 px-6 py-3 bg-purple-600 rounded-full text-white font-bold text-lg shadow-md hover:bg-purple-500 hover:scale-105 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PassportServicesForm;