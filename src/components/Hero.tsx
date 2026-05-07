"use client";

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const techStack = [
    "HTML5", "CSS", "Javascript", "React", 
    "Laravel", "Next.js", "Tailwind", "MySQL"
  ];

  return (
    // mt-20 ensures it starts after the 80px Navbar
    // pt-12 adds extra breathing room on mobile
    <section id="home" className="min-h-[calc(100vh-80px)] mt-20 w-full flex items-center justify-center bg-[#0a0a0a] px-6 py-12 lg:py-0 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
          <div className="inline-block w-fit px-4 py-1.5 mb-6 rounded-full border border-[#7fffd4]/20 bg-[#7fffd4]/5 text-[#7fffd4] text-[10px] font-bold tracking-[0.2em] uppercase">
            Available for Freelance
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tighter">
            John Paul <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
              Castilla Valdez.
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            I am a <span className="text-white font-medium">Web Developer</span> specialized in building high-performance 
            enterprise systems and modern digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="px-7 py-3.5 bg-[#7fffd4] text-black text-sm font-bold rounded-xl hover:bg-[#64eec2] transition-all shadow-[0_10px_30px_-10px_rgba(127,255,212,0.4)]">
              Start a Project
            </a>
            <a href="#resume" className="px-7 py-3.5 bg-transparent text-white text-sm font-bold rounded-xl border border-gray-800 hover:border-[#7fffd4] transition-all">
              View Resume
            </a>
          </div>

          <div className="pt-8 border-t border-gray-900/50">
            <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-500 font-medium text-xs">
              {techStack.map((tech) => (
                <span key={tech} className="hover:text-[#7fffd4] transition-colors cursor-default uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image - Responsive Sizes */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 scale-110 border border-[#7fffd4]/20 rounded-full animate-pulse"></div>
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-8 border-[#111] shadow-2xl">
              <img
                src="/myprofile.jpg"
                alt="John Paul"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[50] p-4 rounded-full bg-[#7fffd4] text-black shadow-lg transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </section>
  );
}