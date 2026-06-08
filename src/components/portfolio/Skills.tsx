"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Redux"]
    },
    {
      title: "Design",
      skills: ["UI/UX Design", "Figma", "Responsive Design", "Prototyping", "Design Systems"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Node.js", "PostgreSQL", "Prisma", "Vercel", "Jest"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-3">My Skills</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base font-medium">
            I've spent years mastering these technologies to build high-quality digital products.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              {...cardHover}
            >
              <Card className="border-border bg-accent/50 hover:bg-white hover:border-primary/30 transition-all duration-500 group rounded-[1.25rem] overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-1 w-8 bg-primary rounded-full" />
                    <h3 className="text-lg font-black uppercase tracking-tighter text-black">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest bg-white text-black border border-border group-hover:border-primary/40 group-hover:text-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;