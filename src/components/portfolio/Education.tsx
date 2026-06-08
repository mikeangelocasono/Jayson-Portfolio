"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Education = () => {
  const education = [
    {
      title: "Bachelor of Science in Information Technology",
      school: "Davao del Norte State College",
      period: "2022 – Present",
      description: "Currently pursuing a degree in Information Technology, focusing on web development, programming, database systems, networking, and modern software development.",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      title: "Senior High School / High School",
      school: "Nabunturan National Comprehensive High School",
      period: "2016 – 2022",
      description: "Completed secondary education and developed foundational academic skills, discipline, and interest in technology.",
      icon: <School className="h-5 w-5" />
    },
    {
      title: "Elementary Education",
      school: "Cabidianan Elementary School",
      period: "2010 – 2016",
      description: "Completed elementary education and built the foundation for continuous learning and personal growth.",
      icon: <BookOpen className="h-5 w-5" />
    }
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-sm text-primary text-[10px] font-black uppercase tracking-widest mb-4">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            MY JOURNEY
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-black">Educational Background</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg font-medium">
            My academic journey and the schools that shaped my learning foundation.
          </p>
        </motion.div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Dot/Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black bg-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                {edu.icon}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-[2.5rem] border border-border bg-accent/30 hover:bg-white hover:border-primary/30 transition-all duration-500 shadow-sm group-hover:shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h3 className="font-black text-xl tracking-tighter text-black group-hover:text-primary transition-colors">
                    {edu.title}
                  </h3>
                  <span className="font-black text-[9px] uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full whitespace-nowrap h-fit">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-4 bg-primary/30" />
                  <div className="text-black font-black uppercase tracking-widest text-[10px]">
                    {edu.school}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;