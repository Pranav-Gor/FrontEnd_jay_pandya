import React, { useState } from 'react';
import { MessageCircle, FileText, Plane, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! How can I help you today?' }
  ]);

  const handleOptionClick = (option: string) => {
    const userMessage = option === 'passport' ? '📦 Help with Passport' : '✈️ Book My Flight';
    const botResponse = option === 'passport' 
      ? 'Great! I can help you with passport applications and renewals. Please fill out the contact form above with your details.'
      : 'Perfect! I can assist with flight bookings. Please share your travel dates and destination in the contact form.';

    setMessages(prev => [
      ...prev,
      { type: 'user', text: userMessage },
      { type: 'bot', text: botResponse }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 glass-morphism rounded-2xl border border-purple-500/20 flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-magenta-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle size={20} className="text-white" />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick Options */}
            {messages.length === 1 && (
              <div className="space-y-2 mt-4">
                <button
                  onClick={() => handleOptionClick('passport')}
                  className="w-full flex items-center space-x-2 p-3 bg-gray-800/50 hover:bg-purple-600/30 rounded-lg transition-colors text-left text-sm text-gray-200"
                >
                  <FileText size={16} />
                  <span>📦 Help with Passport</span>
                </button>
                <button
                  onClick={() => handleOptionClick('flight')}
                  className="w-full flex items-center space-x-2 p-3 bg-gray-800/50 hover:bg-purple-600/30 rounded-lg transition-colors text-left text-sm text-gray-200"
                >
                  <Plane size={16} />
                  <span>✈️ Book My Flight</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-magenta-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 animate-glow-pulse"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default Chatbot;
