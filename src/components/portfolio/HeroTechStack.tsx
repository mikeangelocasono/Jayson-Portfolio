"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const HeroTechStack = () => {
  const techs = ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "Framer Motion"];

  return (
    <motion.div 
      variants={fadeInUp}
      className="mt-16 lg:mt-24 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-60 hover:opacity-100 transition-opacity duration-500"
    >
      {techs.map((tech, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-primary" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">{tech}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default HeroTechStack;