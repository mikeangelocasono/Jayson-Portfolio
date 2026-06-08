"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GraduationCap, Send, LayoutGrid } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import Magnetic from './Magnetic';

const HeroTopButtons = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttons = [
    { label: "See My Work", icon: <LayoutGrid className="h-3.5 w-3.5 text-primary" />, href: "#projects" },
    { label: "Education", icon: <GraduationCap className="h-3.5 w-3.5 text-primary" />, href: "#education" },
    { label: "Contact Me", icon: <Send className="h-3.5 w-3.5 text-primary" />, href: "#contact" },
  ];

  return (
    <motion.div 
      variants={fadeInUp}
      className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-20"
    >
      {buttons.map((btn, i) => (
        <Magnetic key={i}>
          <Button
            variant="outline"
            className="rounded-full px-6 h-11 bg-white/50 border-black/10 text-black hover:bg-black hover:text-white transition-all font-bold uppercase tracking-widest text-[10px] gap-2 backdrop-blur-md"
            onClick={() => scrollToSection(btn.href)}
          >
            {btn.icon}
            {btn.label}
          </Button>
        </Magnetic>
      ))}
    </motion.div>
  );
};

export default HeroTopButtons;