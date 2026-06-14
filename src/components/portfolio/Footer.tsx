"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/share/1BqcSrjY7Z/" },
    { name: "Instagram", href: "#" },
    { name: "GitHub", href: "https://github.com/Jayson25-BSIS" },
    { name: "LinkedIn", href: "https://ph.linkedin.com/in/balbiran-jayson-74a384311" },
  ];

  return (
    <footer className="bg-navy dark:bg-slate-950 text-white pt-24 pb-10 overflow-hidden relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-28 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20"
        >
          <motion.div variants={slideInLeft} className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-8 text-white transition-colors duration-300">
              Let's build <br />
              <span className="text-gold">something great</span> <br />
              together<span className="text-gold">.</span>
            </h2>
            <a 
              href="mailto:jaysonbalbiran16@gmail.com" 
              className="text-lg md:text-2xl font-black tracking-tighter hover:text-gold transition-colors border-b-2 border-gold pb-1 text-white"
            >
              jaysonbalbiran16@gmail.com
            </a>
          </motion.div>
          
          <motion.div variants={slideInRight} className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 transition-colors duration-300">Socials</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group border-b border-white/10 dark:border-white/5 pb-1.5 hover:border-gold hover:text-gold transition-colors text-white"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 transition-colors duration-300">Location</h4>
              <p className="text-sm font-black tracking-tighter text-white leading-relaxed transition-colors duration-300">Panabo City, Philippines <br />Available Worldwide</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 dark:border-white/5 gap-6 transition-colors duration-300"
        >
          <div className="text-lg font-black tracking-tighter text-white transition-colors duration-300">
            Jayson<span className="text-gold">.</span>
          </div>
          
          <div className="flex gap-6 text-[9px] font-black uppercase tracking-widest text-white/40 transition-colors duration-300">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gold transition-colors">Cookie Policy</Link>
          </div>
          
          <div className="text-[9px] font-bold uppercase tracking-widest text-white/20 transition-colors duration-300">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </motion.div>
      </div>
      
      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] translate-y-1/3">
        <div className="text-[15vw] font-black leading-none tracking-tighter whitespace-nowrap text-white text-center w-full">
          DESIGNER DEVELOPER CREATIVE
        </div>
      </div>
    </footer>
  );
};

export default Footer;