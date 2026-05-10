"use client";

import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1); // Default to 1 for server-side

  const experiences = [
    {
      title: "Excel Automation Specialist",
      company: "BPO Services",
      location: "Kawit, Tanza Cavite",
      period: "2025 - Present",
      description: [
        "Developing automated performance trackers using Excel Web, integrating complex formulas.",
        "Engineered end-to-end tracking solutions for specific entire teams.",
        "Implementing advanced Excel functions to maintain high data precision."
      ]
    },
    {
      title: "Web Developer",
      company: "Macro Wiring Technologies Co. Inc.",
      location: "General Trias, Cavite",
      period: "2026 Ongoing",
      description: [
        "Developing and maintaining the company website to showcase products.",
        "Managing vendor inquiries and communications through integrated systems.",
        "Handling admin access and overseeing inquiry management functions."
      ]
    },
    {
      title: "Tech Support",
      company: "HRD Singapore, PTE, LTD.",
      location: "2025",
      period: "2025",
      description: [
        "Provided technical support for applications, systems, and hardware.",
        "Resolved daily technical issues related to production software."
      ]
    },
    {
      title: "Computer Laboratory Intern",
      company: "PUP Maragondon Campus",
      location: "Maragondon, Cavite",
      period: "2021 - 2024",
      description: [
        "Assisted in installation and maintenance of computer systems and networks.",
        "Supported inventory management and asset tracking.",
        "IT support for major campus events and laboratory operations."
      ]
    }
  ];

  // Safely handle window width after component mounts
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    // Prevent sliding past the end
    const maxIndex = experiences.length - itemsPerView;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - itemsPerView : prev - 1));
  };

  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0a0a] border-t border-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Experience</h2>
            <div className="h-1 w-20 bg-[#7fffd4] shadow-[0_0_10px_#7fffd4]"></div>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-800 bg-[#111] text-[#7fffd4] hover:border-[#7fffd4] transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-800 bg-[#111] text-[#7fffd4] hover:border-[#7fffd4] transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-out" 
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {experiences.map((exp, index) => (
              <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-3">
                <div className="h-full bg-[#111] border border-gray-800 p-8 rounded-3xl shadow-2xl hover:border-[#7fffd4]/40 transition-all duration-300 group">
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-[#0a0a0a] border border-gray-800 group-hover:border-[#7fffd4] transition-colors">
                      <Briefcase className="text-[#7fffd4]" size={24} />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#7fffd4]/5 border border-[#7fffd4]/20 rounded-full">
                      <Calendar size={12} className="text-[#7fffd4]" />
                      <span className="text-[10px] font-bold text-[#7fffd4] uppercase tracking-wider">{exp.period}</span>
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#7fffd4] transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-[#7fffd4] font-medium mb-1 opacity-80">{exp.company}</p>
                  
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-6">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                        <span className="text-[#7fffd4] mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-[#7fffd4]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {experiences.slice(0, experiences.length - (itemsPerView - 1)).map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-8 bg-[#7fffd4]' : 'w-2 bg-gray-800'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}