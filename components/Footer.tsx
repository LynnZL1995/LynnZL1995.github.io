import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white tracking-wide">AETHER</h3>
          <p className="text-slate-500 text-sm mt-1">Designing the future, one pixel at a time.</p>
        </div>
        
        <div className="flex gap-6">
          {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-slate-500 hover:text-primary transition-colors transform hover:scale-110"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        
        <div className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Aether Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;