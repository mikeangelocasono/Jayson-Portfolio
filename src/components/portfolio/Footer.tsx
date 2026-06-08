"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.85] mb-10">
              Let's build <br />
              <span className="text-primary">something great</span> <br />
              together<span className="text-primary">.</span>
            </h2>
            <a 
              href="mailto:ronienaungayan828@gmail.com" 
              className="text-xl md:text-3xl font-black tracking-tighter hover:text-primary transition-colors border-b-2 border-primary pb-1"
            >
              ronienaungayan828@gmail.com
            </a>
          </div>
          
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-5">Socials</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group border-b border-white/10 pb-1.5 hover:border-primary transition-colors"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-5">Location</h4>
              <p className="text-base font-black tracking-tighter">Panabo City, Philippines <br />Available Worldwide</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-6">
          <div className="text-xl font-black tracking-tighter">
            RonDev<span className="text-primary">.</span>
          </div>
          
          <div className="flex gap-6 text-[9px] font-black uppercase tracking-widest text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
          
          <div className="text-[9px] font-bold uppercase tracking-widest text-white/20">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </div>
      
      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02] translate-y-1/2">
        <div className="text-[20vw] font-black leading-none tracking-tighter whitespace-nowrap">
          DESIGNER DEVELOPER CREATIVE
        </div>
      </div>
    </footer>
  );
};

export default Footer;