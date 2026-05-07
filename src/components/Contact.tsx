"use client";

import React from 'react';
// We are using React Icons instead of Lucide to avoid export errors
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";

export default function Contact() {
  const contactInfo = [
    { icon: IoMailOutline, label: 'Email', value: 'valconfi1212@gmail.com', href: 'mailto:valconfi1212@gmail.com' },
    { icon: IoCallOutline, label: 'Contact Number', value: '+63 999 470 2919', href: 'tel:+639994702919' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/paulunicus/', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/paulunicus/', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/john-paul-valdez-3335733b7/', label: 'Linkedin' },
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

          <div className="border-t border-gray-900 pt-10">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] mb-8">Social Media</h3>
            <div className="flex items-center gap-6">
                {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center border border-gray-800 rounded-xl hover:border-[#7fffd4] hover:bg-[#7fffd4]/5 transition-all duration-300 bg-[#111111] group"
                    >
                        <social.icon className="w-6 h-6 text-gray-500 group-hover:text-[#7fffd4] transition-colors" />
                    </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}