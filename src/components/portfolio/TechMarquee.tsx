"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Smartphone, 
  Zap,
  Figma,
  Github
} from 'lucide-react';

const TechMarquee = () => {
  const techs = [
    { name: "React", icon: <Code2 className="h-5 w-5" /> },
    { name: "Next.js", icon: <Globe className="h-5 w-5" /> },
    { name: "TypeScript", icon: <Cpu className="h-5 w-5" /> },
    { name: "Tailwind", icon: <Layout className="h-5 w-5" /> },
    { name: "Node.js", icon: <Zap className="h-5 w-5" /> },
    { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
    { name: "Prisma", icon: <Layers className="h-5 w-5" /> },
    { name: "Figma", icon: <Figma className="h-5 w-5" /> },
    { name: "GitHub", icon: <Github className="h-5 w-5" /> },
    { name: "Mobile", icon: <Smartphone className="h-5 w-5" /> },
  ];

  // Duplicate the list to create a seamless loop
  const duplicatedTechs = [...techs, ...techs, ...techs];

  return (
    <div className="relative w-full overflow-hidden bg-muted/10 py-6 border-y border-border/50">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: [0, 0, 1, 1],
          }}
          className="flex gap-12 items-center"
        >
          {duplicatedTechs.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-default group"
            >
              <div className="p-2 rounded-lg bg-background border border-border group-hover:border-primary/50 transition-colors">
                {tech.icon}
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
};

export default TechMarquee;