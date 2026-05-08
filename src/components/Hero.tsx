"use client";

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  // State for the tech stack modal
  const [activeCategory, setActiveCategory] = useState<null | { label: string, techs: string[] }>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Prevent scrolling when any modal is open
  useEffect(() => {
    if (isResumeOpen || activeCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isResumeOpen, activeCategory]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const techStackGroups = [
    { label: "Front End", techs: ["Next.js", "React.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS"] },
    { label: "Back End", techs: ["Laravel", "Node.js", "Php", "Blade"] },
    { label: "Database", techs: ["MySQL", "phpMyAdmin", "Supabase"] },
    { label: "Design & Tools", techs: ["Figma", "Git", "Github", "Vercel", "Bluehost"] }
  ];

  return (
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
            I am a <span className="text-white font-medium">Web Developer</span> specialized in building responsive and modern web applications for businesses.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="px-7 py-3.5 bg-[#7fffd4] text-black text-sm font-bold rounded-xl hover:bg-[#64eec2] transition-all shadow-[0_10px_30px_-10px_rgba(127,255,212,0.4)]">
              Start a Project
            </a>
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="px-7 py-3.5 bg-transparent text-white text-sm font-bold rounded-xl border border-gray-800 hover:border-[#7fffd4] transition-all"
            >
              View Resume
            </button>
          </div>

          {/* Interactive Tech Stack Containers */}
          <div className="pt-8 border-t border-gray-900/50">
            <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">Click to view Tech Stack</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStackGroups.map((group) => (
                <div 
                  key={group.label}
                  onClick={() => setActiveCategory(group)}
                  className="group cursor-pointer p-4 rounded-xl border border-gray-800 bg-white/5 hover:border-[#7fffd4] hover:bg-[#7fffd4]/5 transition-all duration-300"
                >
                  <p className="text-[#7fffd4] text-[10px] font-bold uppercase tracking-widest mb-1 group-hover:text-white transition-colors">
                    {group.label}
                  </p>
                  <p className="text-gray-500 text-[9px] uppercase">
                    {group.techs.length} Skills
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image */}
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

      {/* --- TECH STACK POPUP OVERLAY --- */}
      {activeCategory && (
        <div 
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/95 backdrop-blur-md p-6"
          onClick={() => setActiveCategory(null)}
        >
          <div 
            className="max-w-2xl w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveCategory(null)}
              className="mb-8 text-gray-500 hover:text-[#7fffd4] transition-colors uppercase text-xs font-bold tracking-[0.3em]"
            >
              [ Close Category ]
            </button>
            <h2 className="text-[#7fffd4] text-4xl md:text-6xl font-extrabold uppercase mb-12 tracking-tighter">
              {activeCategory.label}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {activeCategory.techs.map((tech) => (
                <span key={tech} className="text-white text-xl md:text-3xl font-medium opacity-80 hover:opacity-100 hover:text-[#7fffd4] transition-all cursor-default uppercase tracking-tight">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- RESUME MODAL POPUP --- */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10">
          <div className="relative w-full h-full max-w-5xl bg-[#111] rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-white/10">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a0a0a]">
              <h3 className="text-[#7fffd4] font-bold text-xs tracking-widest uppercase">My Resume</h3>
              <div className="flex items-center gap-2">
                <a 
                  href="/cv/myresume.pdf" 
                  download="John_Paul_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#7fffd4]/10 text-white hover:text-[#7fffd4] rounded-lg transition-all text-xs font-bold border border-white/10 hover:border-[#7fffd4]/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download
                </a>
                <button onClick={() => setIsResumeOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>
            <div className="flex-1 bg-[#1a1a1a]">
              <iframe 
                src="/cv/myresume.pdf#toolbar=0&navpanes=0&scrollbar=1" 
                className="w-full h-full min-h-[500px] border-none"
                title="John Paul CV"
              />
            </div>
          </div>
        </div>
      )}

      {/* Scroll Button */}
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