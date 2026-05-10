"use client";

import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import { FaFacebook, FaInstagram, FaLinkedinIn, FaUsers } from "react-icons/fa6";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";

export default function Contact() {
  const contactInfo = [
    { icon: IoMailOutline, label: 'Email', value: 'valconfi1212@gmail.com', href: 'mailto:valconfi1212@gmail.com' },
    { icon: IoCallOutline, label: 'Contact Number', value: '+63 999 470 2919', href: 'tel:+639994702919' },
  ];

  const personalSocials = [
    { icon: FaFacebook, href: 'https://www.facebook.com/paulunicus/', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/paulunicus/', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/john-paul-valdez-3335733b7/', label: 'Linkedin' },
  ];

  const teamSocials = [
    { icon: FaUsers, href: 'https://www.facebook.com/share/189H2n8uPR/', label: 'Team Projects Page' },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Left Side: Text */}
        <div className="flex-1 w-full space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Get In Touch</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
        </div>

        {/* Right Side: Info & Socials */}
        <div className="flex-1 w-full space-y-12">
          <div className="space-y-10">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-gray-800 rounded-xl group-hover:border-[#7fffd4] transition-all duration-300 bg-[#111111]">
                  <item.icon className="w-6 h-6 text-[#7fffd4]" />
                </div>
                <div>
                    <p className="text-gray-500 text-sm uppercase tracking-widest leading-tight mb-1">{item.label}</p>
                    <a href={item.href} className="text-xl md:text-2xl font-bold text-white group-hover:text-[#7fffd4] transition-colors">
                      {item.value}
                    </a>
                </div>
              </div>
            ))}
          </div>

          {/* SOCIAL MEDIA SECTION */}
          <div className="border-t border-gray-900 pt-10 space-y-10">
            <div>
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-6">Social Media</h3>
              <div className="flex flex-wrap items-center gap-4">
                  {personalSocials.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center border border-gray-800 rounded-xl hover:border-[#7fffd4] hover:bg-[#7fffd4]/5 transition-all duration-300 bg-[#111111] group"
                      >
                          <social.icon className="w-5 h-5 text-gray-500 group-hover:text-[#7fffd4] transition-colors" />
                      </a>
                  ))}
              </div>
            </div>

            {/* TEAM SOCIAL MEDIA PAGE SECTION */}
            <div>
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-6">Team Social Media Page</h3>
              <div className="flex flex-wrap items-center gap-4">
                  {teamSocials.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 pl-4 pr-6 h-14 border border-gray-800 rounded-xl hover:border-[#7fffd4] hover:bg-[#7fffd4]/5 transition-all duration-300 bg-[#111111] group"
                      >
                          {/* Team Logo Image Integration with updated filename */}
                          <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                            <Image 
                              src="/LIKNAYAN.jpg" 
                              alt="Team Logo" 
                              fill
                              className="object-contain"
                            />
                          </div>
                          
                          <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">
                            View Team Page
                          </span>
                      </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}