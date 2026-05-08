"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' }, // Added Experience link
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 z-[300]">
        <div className="text-white font-bold text-xl tracking-tighter">
          JOHN<span className="text-[#7fffd4]">.</span>DEV
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-[#7fffd4] transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Animated Toggle Button - Stays on top with z-[310] */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden relative z-[310] p-2 flex flex-col gap-1.5 items-end group"
        >
          {/* Top Line */}
          <span className={`h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
          }`}></span>
          {/* Middle Line */}
          <span className={`h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'w-4 group-hover:w-6'
          }`}></span>
          {/* Bottom Line */}
          <span className={`h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5 group-hover:w-6'
          }`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] z-[250] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {links.map((link, index) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-bold tracking-[0.1em] text-white hover:text-[#7fffd4] transition-all duration-300 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-8 flex flex-col items-center gap-2">
             <div className="w-8 h-[1px] bg-[#7fffd4]/30 mb-4"></div>
             <span className="text-[10px] text-gray-500 tracking-[0.4em] uppercase">John.Dev</span>
          </div>
        </div>
      </div>
    </>
  );
}