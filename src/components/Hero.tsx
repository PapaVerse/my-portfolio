"use client";

import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center pt-32 md:pt-40 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="text-left order-2 md:order-1">
          <h2 className="text-[#7fffd4] font-bold text-xl mb-2 drop-shadow-[0_0_8px_rgba(127,255,212,0.5)]">
            Hello .
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            I'm John <br />
            <span className="text-gray-400">Software Developer</span>
          </h1>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-[#7fffd4] text-black font-bold rounded-md hover:bg-[#64eec2] transition-all shadow-[0_0_20px_rgba(127,255,212,0.3)]"
            >
              Got a project?
            </a>
            <a 
              href="#resume" 
              className="px-8 py-3 bg-transparent text-white font-bold rounded-md border border-gray-700 hover:border-[#7fffd4] transition-all"
            >
              My resume
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-gray-500 font-medium text-sm uppercase tracking-widest">
            <span>HTML5</span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>React</span>
            <span>Laravel</span>
            <span>Next.js</span>
          </div>
        </div>

        {/* Right Side: Profile with Aquamarine Glow */}
        <div className="relative order-1 md:order-2 flex justify-center items-center">
          <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] border-2 border-[#7fffd4]/30 rounded-full animate-pulse"></div>
          <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#1a1a1a]">
            <img
              src="/profile.jpg"
              alt="John Paul Castilla Valdez"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* --- REDUNDANT SECTION REMOVED FROM HERE --- */}
    </section>
  );
}