import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] py-12 border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          
          {/* Logo with Aquamarine Accent */}
          <div className="group cursor-default">
            <span className="text-white font-black text-xl tracking-[0.4em] uppercase transition-all duration-300 group-hover:tracking-[0.5em]">
              John<span className="text-[#7fffd4]">.</span>Dev
            </span>
          </div>

          {/* Minimal Divider */}
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Professional Copyright Line */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-500 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
              &copy; 2026 All Rights Reserved
            </p>
            <p className="text-gray-600 text-[9px] uppercase tracking-widest font-light">
              Built with Precision by John Paul
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;