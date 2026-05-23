"use client";

import React, { useState } from 'react';
import { ChevronDown, Globe, ExternalLink } from 'lucide-react';
// Using React Icons for brand stability
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Projects() {
  // Fixed: explicitly allowing number or null for the state
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Fixed: Explicitly typed 'index' as a number to satisfy Vercel/TypeScript
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const completedProjects = [
    {
      title: "Macro Wiring Technologies Co. Inc.",
      type: "Corporate Website (Static to Dynamic)",
      description: "Transformed a static landing page into a dynamic corporate platform. Integrated inquiry handling systems and a secure admin dashboard for data management.",
      stack: ["Laravel", "SQL", "Tailwind", "Bluehost"],
      period: "1 Month",
      status: "Completed",
      image: "/project-images/macro.png",
      link: "https://www.macrowiring.com/",
      team: [
        { 
          name: "Drexel Santos", 
          role: "Programmer",
          socials: [
            { icon: FaFacebook, href: "https://www.facebook.com/deysqui" },
            { icon: FaInstagram, href: "https://www.instagram.com/drk_iel/" },
            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/santos-drexel-944252255/" },
            { icon: Globe, href: "https://drex-portfolio.vercel.app/?fbclid=IwY2xjawRswgNleHRuA2FlbQIxMABicmlkETF3VHpnYlJEY005MlpLc08xc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsty0b7T3qPTtUPHGiT03p8fHJn-hGwzE4sxPNAQzhpnYA2n0Wu9uYqXfudL_aem_F90OglW_DRqhAyHL0gO1rw", isPortfolio: true }
          ]
        },
        { 
          name: "Lyn Ciara Cabrera", 
          role: "Data Analyst & UI Designer",
          socials: [
            { icon: FaFacebook, href: "https://www.facebook.com/linsydee" },
            { icon: FaInstagram, href: "https://www.instagram.com/_ciar4lyn/" },
            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/lyn-ciara-cabrera-b215073b0/" },
            { icon: Globe, href: "#", isPortfolio: true }
          ]
        }
      ]
    }
  ];

  const ongoingProjects = [
    {
      title: "SIS Web Based (Cavite Westpoint College)",
      type: "School Management System",
      description: "A comprehensive web-based platform designed to streamline academic and administrative processes. Automates workflows, secures student record management, and connects various institutional roles.",
      stack: ["React", "Node.js", "TypeScript", "Firebase", "Cloud"],
      features: [
        "Public Website & Content Management System (CMS)",
        "Online Admission System",
        "Student & Faculty Portals",
        "Registrar Portal & Academic Workflows"
      ],
      status: "Proposed / Requirements Gathering"
    },
    {
      title: "MChat Communication System",
      type: "Internal Messaging & Collaboration",
      description: "A secure internal communication tool for employees featuring real-time messaging, file sharing, group channels, and admin controls for employee status tracking.",
      stack: ["Laravel", "React", "MySQL", "Pusher/WebSockets"],
      features: ["File Downloads", "Report Generation", "Active/Inactive Status"],
      status: "Upcoming Project"
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

        <div className="mb-20">
          <h3 className="text-xl font-semibold text-gray-500 uppercase tracking-[0.2em] mb-10">Completed Work</h3>
          <div className="grid grid-cols-1 gap-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="bg-[#111111] border border-gray-800 rounded-2xl hover:border-[#7fffd4]/50 transition-all group shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="p-8 lg:w-3/5 flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <span className="text-[#7fffd4] text-sm font-mono mb-2 block">{project.type}</span>
                        {project.link ? (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-2xl font-bold text-white group-hover:text-[#7fffd4] transition-colors"
                          >
                            {project.title}
                            <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#7fffd4] transition-colors" />
                          </a>
                        ) : (
                          <h4 className="text-2xl font-bold text-white group-hover:text-[#7fffd4] transition-colors">{project.title}</h4>
                        )}
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="text-gray-500 text-sm italic">Duration: {project.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-8">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="px-4 py-1 bg-black border border-gray-800 text-gray-400 text-xs rounded-full group-hover:border-[#7fffd4]/30 transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-2 text-[#7fffd4] text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-all w-fit group/btn"
                    >
                      {expandedIndex === index ? 'Hide Team Info' : 'View Project Team'}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden bg-gray-900">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        />
                      </a>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent to-[#111111] pointer-events-none"></div>
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-black/40 ${expandedIndex === index ? 'max-h-[500px] border-t border-gray-800' : 'max-h-0'}`}>
                  <div className="p-8">
                    <h5 className="text-[#7fffd4] text-xs font-black uppercase tracking-[0.2em] mb-8">Development Team</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {project.team.map((member, i) => (
                        <div key={i} className="space-y-4">
                          <div>
                            <span className="text-white text-lg font-bold block">{member.name}</span>
                            <span className="text-[#7fffd4] text-xs font-mono uppercase tracking-widest">{member.role}</span>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            {member.socials.map((social, sIndex) => (
                              <a 
                                key={sIndex}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center transition-all duration-300 hover:text-[#7fffd4] 
                                  ${social.isPortfolio 
                                    ? 'border border-gray-800 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-tighter gap-2 text-gray-400 hover:border-[#7fffd4]' 
                                    : 'text-gray-500'}`}
                              >
                                <social.icon size={social.isPortfolio ? 14 : 20} />
                                {social.isPortfolio && "Portfolio"}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-500 uppercase tracking-[0.2em] mb-10">Upcoming Projects</h3>
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
                    <span key={i} className="text-[10px] text-gray-600 font-mono uppercase mr-2">{tech}</span>
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