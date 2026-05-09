"use client";

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", toggleVisibility);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Lock scroll only when the Resume Modal is open
  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isResumeOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const techStackGroups = [
    { label: "Front End", techs: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Blade", "HTML5", "CSS"] },
    { label: "Back End", techs: ["PHP", "Laravel", "Node.js"] },
    { label: "Database", techs: ["MySQL", "Supabase"] },
    { label: "Design & Tools", techs: ["phpMyAdmin", "Git", "Github", "VSCode", "Vercel", "Bluehost"] }
  ];

  return (
    <section id="home" className="relative z-0 min-h-[calc(100vh-80px)] mt-20 w-full flex items-center justify-center bg-[#0a0a0a] px-6 py-12 lg:py-0 overflow-hidden">
      
      {/* GLOW EFFECT */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(350px at ${mousePos.x}px ${mousePos.y}px, rgba(127, 255, 212, 0.12), transparent 80%)`
        }}
      />

      {/* HERO CONTENT */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#7fffd4]/20 bg-[#7fffd4]/5 text-[#7fffd4] text-[10px] font-bold tracking-[0.2em] uppercase">
              Available for Freelance
            </div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase">
              Digital Solutions Consultant
            </div>
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

          {/* UPDATED INLINE TECH STACK (REPLACES OVERLAY) */}
          <div className="pt-8 border-t border-gray-900/50">
            <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">Click a category to view skills</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {techStackGroups.map((group) => (
                <button 
                  key={group.label}
                  onClick={() => setActiveCategory(activeCategory === group.label ? null : group.label)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                    activeCategory === group.label 
                    ? "border-[#7fffd4] bg-[#7fffd4]/10 shadow-[0_0_20px_rgba(127,255,212,0.1)]" 
                    : "border-gray-800 bg-white/5 hover:border-gray-600"
                  }`}
                >
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${activeCategory === group.label ? "text-[#7fffd4]" : "text-gray-400"}`}>
                    {group.label}
                  </p>
                  <p className="text-gray-600 text-[9px] uppercase">
                    {group.techs.length} Skills
                  </p>
                </button>
              ))}
            </div>

            {/* Content that appears when a category is selected */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeCategory ? "max-h-64 opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex flex-wrap gap-3">
                  {techStackGroups.find(g => g.label === activeCategory)?.techs.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-xs font-medium hover:border-[#7fffd4]/50 hover:text-[#7fffd4] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROFILE IMAGE */}
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

      {/* RESUME MODAL (Keep original z-index for full screen focus) */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 pt-20 md:p-10">
          <div className="relative w-full h-[80vh] max-w-5xl bg-[#111] rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-white/10">
            <div className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#0a0a0a] shrink-0">
              <h3 className="text-[#7fffd4] font-bold text-xs tracking-widest uppercase">My Resume</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="/myresume.pdf" 
                  download="John_Paul_Valdez_Resume.pdf" 
                  className="text-[10px] font-bold text-[#7fffd4] hover:text-white transition-colors uppercase tracking-widest bg-[#7fffd4]/10 px-3 py-2 rounded-lg border border-[#7fffd4]/20"
                >
                  Download PDF
                </a>
                <button onClick={() => setIsResumeOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 bg-[#1a1a1a] overflow-hidden relative">
              <iframe src="/myresume.pdf" className="w-full h-full border-none" title="Resume" />
            </div>
          </div>
        </div>
      )}


    </section>
  );
}