"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-[#0a0a0a] border-b border-white/10 flex items-center justify-between px-6 z-[100]">
        <div className="text-white font-bold text-xl">JOHN.DEV</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Button - Visible only when menu is CLOSED */}
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden p-4 -mr-4 flex flex-col gap-1.5"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] z-[200] flex flex-col transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Close Button INSIDE the menu container to guarantee visibility */}
        <div className="h-20 flex items-center justify-end px-6 border-b border-white/5">
          <button 
            onClick={() => setIsOpen(false)}
            className="p-4 -mr-4 text-white text-4xl font-light"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 gap-10">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-bold text-white hover:text-gray-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}