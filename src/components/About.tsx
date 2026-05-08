"use client";

import React from 'react';

export default function About() {
  const stats = [
    { label: 'Completed Projects', value: '1' },
    { label: 'Ongoing Projects', value: '2' },
    { label: 'Client Satisfaction', value: '100 %' },
    { label: 'Years of Experience', value: '1 +' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* Left Side: Specialized Services & Navigation Links */}
        <div className="flex flex-col gap-8 md:gap-12 order-2 md:order-1">
          {/* Career Goal Card (New Inclusion) */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl text-[#7fffd4]">🎯</span>
            </div>
            <h3 className="text-[#7fffd4] text-xs font-bold uppercase tracking-[0.2em] mb-3">Career Goal</h3>
            <p className="text-gray-300 text-sm leading-relaxed relative z-10">
              To evolve into a <span className="text-white font-semibold">Senior Solutions Architect</span>, 
              focusing on the development of high-performance, AI-integrated enterprise systems 
              that drive digital transformation for global businesses.
            </p>
          </div>

          {/* Static Service: Website Development */}
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-gray-800 rounded-xl group-hover:border-[#7fffd4] transition-all duration-300 shadow-sm">
              <span className="text-[#7fffd4] font-mono text-xl">&lt;/&gt;</span>
            </div>
            <p className="text-gray-400 font-medium group-hover:text-white transition-colors">Website Development</p>
          </div>
          
          {/* Static Service: System Development */}
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-gray-800 rounded-xl group-hover:border-[#7fffd4] transition-all duration-300 shadow-sm">
              <span className="text-[#7fffd4] text-xl">⚙️</span>
            </div>
            <p className="text-gray-400 font-medium group-hover:text-white transition-colors">System Development</p>
          </div>

          {/* Interactive Link: Active Projects */}
          <a href="#projects" className="flex items-center gap-6 group cursor-pointer">
            <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center border border-gray-800 rounded-xl group-hover:border-[#7fffd4] group-hover:bg-[#7fffd4]/5 transition-all duration-300 shadow-sm">
              <span className="text-[#7fffd4] text-xl">🚀</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7fffd4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7fffd4]"></span>
              </span>
            </div>
            <p className="text-[#7fffd4] font-medium group-hover:text-white transition-colors underline underline-offset-8 decoration-gray-800 group-hover:decoration-[#7fffd4]">
              Active Projects (2 Ongoing)
            </p>
          </a>
        </div>

        {/* Right Side: Narrative and Professional Summary */}
        <div className="flex flex-col order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About me</h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
            <p>
              I am a proud graduate of <span className="text-[#7fffd4] font-semibold">Polytechnic University of the Philippines (PUP) Maragondon</span>. 
              My technical foundation empowers me to build robust, user-centric solutions that solve complex real-world problems.
            </p>
            <p>
              Currently, I operate as a <span className="text-white font-medium">Web Developer</span>, managing everything from intricate front-end designs to complex 
              back-end architectures. I am actively engaged in <span className="text-white">developing 2 ongoing projects</span>, 
              consistently turning technical requirements into elegant digital experiences.
            </p>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1">
                <p className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value.split(' ')[0]} 
                  <span className="text-[#7fffd4]"> {stat.value.split(' ')[1] || ''}</span>
                </p>
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}