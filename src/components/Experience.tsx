"use client";

import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: "Excel Automation Specialist",
      company: "BPO Services",
      location: "Kawit, Tanza Cavite",
      period: "2025 - Present",
      description: [
        "Developing automated performance trackers using Excel Web, integrating complex formulas to automatically process and display real-time team data.",
        "Engineered end-to-end tracking solutions for specific entire teams, handling cross-functional data streams and team-wide process oversight.",
        "Implementing advanced Excel functions and custom formatting to maintain high data precision across the team productivity dashboard."
      ]
    },
    {
      title: "Web Developer",
      company: "Macro Wiring Technologies Co. Inc.",
      location: "General Trias, Cavite",
      period: "2025 - Present",
      description: [
        "Developing and maintaining the company website to showcase products and services.",
        "Managing vendor inquiries and communications through integrated systems.",
        "Handling admin access and overseeing inquiry management functions."
      ]
    },
    {
      title: "Tech Support",
      company: "HRD Singapore, PTE, LTD.",
      location: "General Trias, Cavite",
      period: "2025",
      description: [
        "Provided technical support for applications, systems, hardware, and software concerns across multiple departments.",
        "Resolved daily technical issues related to production software to ensure smooth business operations."
      ]
    },
    {
      title: "Computer Laboratory Intern",
      company: "PUP Maragondon Campus, Laboratory Office",
      location: "Maragondon, Cavite",
      period: "2021 - 2024",
      description: [
        "Assisted in installation, troubleshooting, and maintenance of computer systems, printers, and networks.",
        "Supported inventory management, data encoding, and asset tracking.",
        "Assisted in system setups and IT support for major campus events and laboratory operations."
      ]
    }
  ];

  // Limit display to 3 initially
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0a0a] border-t border-gray-900 transition-colors duration-300 dark:bg-[#0a0a0a] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Experience</h2>
          <div className="h-1 w-20 bg-[#7fffd4] shadow-[0_0_10px_#7fffd4]"></div>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          
          {displayedExperiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-[#7fffd4] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-[#7fffd4] transition-colors duration-500">
                <Briefcase size={18} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-xl hover:border-[#7fffd4]/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#7fffd4] transition-colors">{exp.title}</h4>
                  <div className="flex items-center gap-2 px-3 py-1 bg-[#7fffd4]/5 border border-[#7fffd4]/20 rounded-full">
                    <Calendar size={12} className="text-[#7fffd4]" />
                    <span className="text-[10px] font-bold text-[#7fffd4] uppercase tracking-wider">{exp.period}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 dark:text-white font-medium mb-1">{exp.company}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex gap-3">
                      <span className="text-[#7fffd4] mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-[#7fffd4]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Placeholder/Message when expanded */}
          {showAll && (
            <div className="relative flex justify-center py-4">
               <span className="text-xs font-mono text-gray-500 tracking-[0.2em] uppercase italic">
                 More Experience will display here once it is available
               </span>
            </div>
          )}
        </div>

        {/* View More Button */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-full text-xs font-bold tracking-widest text-gray-600 dark:text-gray-400 hover:border-[#7fffd4] hover:text-[#7fffd4] transition-all duration-300 shadow-lg"
          >
            {showAll ? 'SHOW LESS' : 'VIEW MORE EXPERIENCE'}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}