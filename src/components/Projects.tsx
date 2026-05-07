"use client";

import React from 'react';

export default function Projects() {
  const completedProjects = [
    {
      title: "Macro Wiring Technologies Co. Inc.",
      type: "Corporate Website (Static to Dynamic)",
      description: "Transformed a static landing page into a dynamic corporate platform. Integrated inquiry handling systems and a secure admin dashboard for data management.",
      stack: ["Laravel", "SQL", "Tailwind", "Bluehost"],
      period: "1 Month",
      status: "Completed"
    }
  ];

  const ongoingProjects = [
    {
      title: "MChat Communication System",
      type: "Internal Messaging & Collaboration",
      description: "A secure internal communication tool for employees featuring real-time messaging, file sharing, group channels, and admin controls for employee status tracking.",
      stack: ["Laravel", "React", "MySQL", "Pusher/WebSockets"],
      features: ["File Downloads", "Report Generation", "Active/Inactive Status"],
      status: "In Development"
    },
    {
      title: "Task Management System",
      type: "Enterprise Resource Planning",
      description: "An integrated module for task delegation. Allows admins to assign tasks to employees with a full feedback loop for completion and review.",
      stack: ["Laravel", "Tailwind", "MySQL"],
      features: ["Admin Assignment", "Task Tracking", "Reporting"],
      status: "Planning / Integration Phase"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="h-1 w-20 bg-[#7fffd4] shadow-[0_0_10px_#7fffd4]"></div>
        </div>

        {/* Completed Projects Section */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-gray-500 uppercase tracking-[0.2em] mb-10">Completed Work</h3>
          <div className="grid grid-cols-1 gap-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:border-[#7fffd4]/50 transition-all group shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <span className="text-[#7fffd4] text-sm font-mono mb-2 block">{project.type}</span>
                    <h4 className="text-2xl font-bold text-white group-hover:text-[#7fffd4] transition-colors">{project.title}</h4>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <span className="text-gray-500 text-sm">Duration: {project.period}</span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-4 py-1 bg-black border border-gray-800 text-gray-400 text-xs rounded-full group-hover:border-[#7fffd4]/30 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Projects Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-500 uppercase tracking-[0.2em] mb-10">In Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:border-[#7fffd4]/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-2 w-2 rounded-full bg-[#7fffd4] animate-pulse"></div>
                    <span className="text-[#7fffd4] text-xs font-bold uppercase tracking-widest">{project.status}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
                  <ul className="space-y-2 mb-8">
                    {project.features?.map((feature, i) => (
                      <li key={i} className="text-gray-500 text-xs flex items-center gap-2">
                        <span className="text-[#7fffd4]">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-900">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-[10px] text-gray-600 font-mono uppercase">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}