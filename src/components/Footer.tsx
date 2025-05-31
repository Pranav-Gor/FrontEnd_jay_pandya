
import React from 'react';
import { Mail, FileText, Plane } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Jay Panday</h3>
            <p className="text-gray-400">Your personal travel assistant</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <div className="p-3 glass-morphism rounded-full hover:bg-purple-600/20 transition-all duration-300 cursor-pointer animate-bounce">
              <Mail size={20} className="text-purple-400" />
            </div>
            <div className="p-3 glass-morphism rounded-full hover:bg-purple-600/20 transition-all duration-300 cursor-pointer animate-bounce delay-200">
              <FileText size={20} className="text-purple-400" />
            </div>
            <div className="p-3 glass-morphism rounded-full hover:bg-purple-600/20 transition-all duration-300 cursor-pointer animate-bounce delay-500">
              <Plane size={20} className="text-purple-400" />
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Jay Panday. All rights reserved.
            </p>
          </div>
        </div>

        {/* Subtle glow bar */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mt-8"></div>
      </div>
    </footer>
  );
};

export default Footer;
