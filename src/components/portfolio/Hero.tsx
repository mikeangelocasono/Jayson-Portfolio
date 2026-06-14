"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { staggerContainer, slideInLeft, scaleIn, buttonHover } from '@/lib/animations';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-light-blue dark:bg-slate-800/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-navy/5 dark:bg-slate-800/20 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="whileInView"
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-28 w-full relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-12">
          
          {/* Left Column: Text Content */}
          <motion.div variants={slideInLeft} className="flex flex-col space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark font-bold uppercase tracking-widest mx-auto lg:mx-0 border border-gold/20 text-[10px]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                Available for work
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-deep-navy dark:text-white leading-[1.1]">
                Hi, I'm Jayson<span className="text-gold">.</span> <br />
                <span className="text-dark-gray dark:text-slate-300 text-3xl md:text-3xl lg:text-4xl">Information Systems Developer & Student Leader</span>
              </h1>
              
              <p className="text-base text-dark-gray dark:text-slate-400 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I am a graduating Bachelor of Science in Information Systems student at Davao del Norte State College, passionate about developing innovative digital solutions that address real-world challenges. I specialize in web development, information systems, UI/UX design, and technology-driven community initiatives, combining technical expertise with leadership and project management experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.div {...buttonHover} className="w-full sm:w-auto">
                <Button asChild size="lg" className="h-12 px-6 rounded-full bg-gold text-deep-navy hover:bg-gold/90 font-black uppercase tracking-widest text-[11px] gap-2 shadow-md shadow-gold/20 w-full transition-all">
                  <a href="/Balbiran CV.pdf" download="Balbiran CV.pdf">
                    <Download className="h-4 w-4" /> Download CV
                  </a>
                </Button>
              </motion.div>
              
              <div className="flex items-center gap-3">
                {[
                  { icon: <Github className="h-4 w-4" />, href: "https://github.com/Jayson25-BSIS" },
                  { icon: <Linkedin className="h-4 w-4" />, href: "https://ph.linkedin.com/in/balbiran-jayson-74a384311" },
                  { icon: <Facebook className="h-4 w-4" />, href: "https://www.facebook.com/share/1BqcSrjY7Z/" },
                  { icon: <Mail className="h-4 w-4" />, href: "mailto:jaysonbalbiran16@gmail.com" }
                ].map((social, i) => (
                  <motion.a 
                    {...buttonHover}
                    key={i}
                    href={social.href}
                    className="h-11 w-11 rounded-full bg-navy flex items-center justify-center text-white hover:bg-gold hover:text-deep-navy transition-all duration-300 shadow-sm"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-royal/10 mt-6">
              {[
                { label: "Projects Developed", value: "10+" },
                { label: "Awards & Recognitions", value: "15+" },
                { label: "Leadership Roles", value: "5" },
                { label: "Certifications", value: "20+" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black text-deep-navy dark:text-white">{stat.value}</span>
                  <span className="text-[10px] font-bold text-dark-gray dark:text-slate-400 uppercase tracking-wider leading-snug mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image/Visual (Circular Profile Frame) */}
          <motion.div variants={scaleIn} className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] flex items-center justify-center">
            
            {/* Outer Decorative Elements */}
            <div className="absolute inset-0 -m-8 border border-dashed border-royal/30 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-0 -m-4 border border-gold/40 rounded-full border-t-transparent animate-[spin_10s_linear_infinite]" />
            
            {/* Floating Dots */}
            <div className="absolute top-4 -right-4 h-3 w-3 bg-gold rounded-full shadow-sm" />
            <div className="absolute bottom-10 -left-6 h-4 w-4 bg-navy rounded-full shadow-sm" />
            <div className="absolute -bottom-8 right-12 h-2 w-2 bg-royal rounded-full shadow-sm" />

            {/* Main Circular Profile Holder */}
            <div className="relative w-full aspect-square rounded-full p-2 bg-white dark:bg-slate-900 shadow-xl shadow-navy/10 dark:shadow-none border-2 border-navy dark:border-slate-800 overflow-hidden">
              <div className="w-full h-full rounded-full bg-light-blue dark:bg-slate-800 overflow-hidden relative border border-royal/20 dark:border-slate-700 flex items-center justify-center">
                <Image
                  src="/Profile.jpg"
                  alt="Jayson S. Balbiran profile photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 380px"
                  priority
                />
              </div>
            </div>
            
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;