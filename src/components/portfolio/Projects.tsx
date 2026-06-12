"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover, buttonHover } from '@/lib/animations';
import { Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "SK Connect to YPFMS",
      category: "Web Application",
      description: "A comprehensive management system connecting the Sangguniang Kabataan with the Youth Profiling and Financial Management System.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      outcomes: "Improved data accuracy by 85% and streamlined financial reporting for local youth councils.",
      color: "bg-navy/5 dark:bg-slate-800/50"
    },
    {
      title: "Green Bean Café TPS / The 4S",
      category: "Transaction Processing System",
      description: "A tailored POS and transaction processing system designed for a local café, integrating inventory and sales tracking.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      outcomes: "Reduced transaction time by 30% and provided real-time inventory insights.",
      color: "bg-royal/5 dark:bg-royal/20"
    },
    {
      title: "AquaSnap",
      category: "Mobile & Web Solution",
      description: "An innovative application for monitoring water quality and capturing real-time environmental data.",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      outcomes: "Enabled local authorities to quickly identify and respond to water quality issues.",
      color: "bg-light-blue dark:bg-slate-700/50"
    },
    {
      title: "R2-D2",
      category: "Research Project",
      description: "An automated data-gathering and reporting tool designed for academic research automation.",
      technologies: ["Python", "Django", "Data Visualization"],
      outcomes: "Cut down research data processing time from weeks to hours.",
      color: "bg-gold/5 dark:bg-gold/10"
    },
    {
      title: "SSC Management Systems",
      category: "Management System",
      description: "A centralized platform for the Supreme Student Council to manage events, student concerns, and organizational funds.",
      technologies: ["Next.js", "Prisma", "Tailwind CSS"],
      outcomes: "Increased student engagement by 40% through transparent event tracking.",
      color: "bg-navy/10 dark:bg-slate-800"
    }
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-28">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold font-bold uppercase tracking-widest mb-4 border border-gold/20 text-[10px]">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-deep-navy dark:text-white tracking-tighter transition-colors duration-300">
              Projects & Research
            </h2>
          </div>
          <p className="text-sm text-dark-gray dark:text-slate-400 font-medium max-w-sm transition-colors duration-300">
            A selection of my best work, ranging from complex web applications to innovative research solutions.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {visibleProjects.map((project, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              {...cardHover}
              className="group flex flex-col bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-4 hover:shadow-lg dark:hover:shadow-none hover:border-gold/50 dark:hover:border-gold/50 transition-all duration-300 h-full"
            >
              {/* Compact Project Image Placeholder */}
              <div className="w-full h-40 md:h-48 rounded-xl overflow-hidden relative border border-royal/10 dark:border-slate-800 bg-light-blue dark:bg-slate-800 shadow-inner mb-5 transition-colors duration-300">
                <div className={`absolute inset-0 flex items-center justify-center ${project.color} transition-colors duration-500 group-hover:bg-transparent dark:group-hover:bg-slate-950/20`}>
                  <div className="text-center px-4">
                    <div className="text-navy dark:text-slate-300 font-black text-base uppercase tracking-widest transition-colors duration-300 line-clamp-1">{project.title}</div>
                    <div className="text-navy/50 dark:text-slate-500 text-[10px] mt-1 font-bold transition-colors duration-300">Mockup Placeholder</div>
                  </div>
                </div>
                {/* Simulated UI elements for placeholder */}
                <div className="absolute top-3 left-3 right-3 h-4 bg-white/60 dark:bg-slate-800/60 rounded border border-white/40 dark:border-slate-700 backdrop-blur-sm transition-colors duration-300" />
                <div className="absolute top-10 left-3 bottom-3 right-3 bg-white/60 dark:bg-slate-800/60 rounded-lg border border-white/40 dark:border-slate-700 backdrop-blur-sm shadow-sm transition-colors duration-300" />
              </div>

              {/* Project Details */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex px-2 py-1 rounded-md bg-light-blue dark:bg-slate-800 text-navy dark:text-slate-300 text-[9px] font-bold uppercase tracking-widest border border-royal/10 dark:border-slate-700 transition-colors duration-300">
                    {project.category}
                  </div>
                </div>
                
                <h3 className="text-lg font-black text-deep-navy dark:text-white mb-2 line-clamp-1 transition-colors duration-300" title={project.title}>
                  {project.title}
                </h3>
                
                <p className="text-sm text-dark-gray dark:text-slate-300 font-medium leading-relaxed mb-4 line-clamp-3 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-royal/10 dark:border-slate-800 mb-5 transition-colors duration-300">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white dark:bg-slate-800 border border-royal/20 dark:border-slate-700 rounded-md text-[9px] font-bold text-deep-navy dark:text-slate-300 shadow-sm transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <motion.div {...buttonHover} className="flex-1">
                    <Button className="w-full h-9 rounded-xl bg-gold text-deep-navy hover:bg-gold/90 font-black uppercase tracking-widest text-[9px] gap-1 transition-all shadow-sm">
                      View Details <ArrowRight className="h-3 w-3" />
                    </Button>
                  </motion.div>
                  <motion.div {...buttonHover}>
                    <Button variant="outline" className="h-9 px-3 rounded-xl border-royal/30 dark:border-slate-700 bg-white dark:bg-slate-900 text-deep-navy dark:text-white hover:bg-light-blue dark:hover:bg-slate-800 hover:text-navy font-bold transition-colors duration-300" aria-label="Source Code">
                      <Github className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More / View Less Button */}
        {projects.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <Button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="h-10 px-6 rounded-full bg-navy dark:bg-slate-800 text-white hover:bg-navy/90 dark:hover:bg-slate-700 font-black uppercase tracking-widest text-[10px] transition-all shadow-md dark:shadow-none border border-transparent dark:border-slate-700"
            >
              {showAllProjects ? "View Less Projects" : "View More Projects"}
            </Button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;