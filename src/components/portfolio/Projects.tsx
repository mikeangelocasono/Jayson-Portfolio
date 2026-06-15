"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, cardHover } from '@/lib/animations';
import { ArrowRight, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Layers, Code, CheckCircle2, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects, PortfolioProject } from '@/data/portfolio';

const INITIAL_VISIBLE = 3;

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("All");

  // Dynamically extract categories from the data
  const CATEGORIES = useMemo(() => {
    const uniqueCategories = new Set(projects.map(p => p.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return projects;
    return projects.filter(p => p.category === activeTab);
  }, [activeTab]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleViewMore = () => {
    if (hasMore) {
      setVisibleCount(prev => prev + 3);
    } else {
      setVisibleCount(INITIAL_VISIBLE);
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (project: PortfolioProject) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length);
    }
  };

  // Keyboard navigation for modal carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        {/* Top Area: Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy/5 text-navy dark:bg-gold/10 dark:text-gold text-[10px] font-black uppercase tracking-widest mb-4 border border-navy/10 dark:border-gold/20 backdrop-blur-sm">
              Portfolio Showcase
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-deep-navy dark:text-white tracking-tighter transition-colors duration-300 mb-6 leading-tight">
              Projects & Research
            </h2>
            <p className="text-base md:text-lg text-dark-gray dark:text-slate-400 font-medium leading-relaxed">
              A curated selection of complex management systems, interactive web applications, and innovative research outputs designed to solve real-world problems.
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center gap-3 overflow-x-auto custom-scrollbar pb-4 mb-10 w-full"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-royal/10 dark:border-slate-700 shadow-sm shrink-0">
            <Filter className="h-4 w-4 text-royal dark:text-gold" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-deep-navy dark:text-white">Filter</span>
          </div>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1 shrink-0" />
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap shrink-0 border ${
                activeTab === tab 
                  ? 'bg-navy text-white border-navy shadow-md shadow-navy/20 dark:bg-gold dark:text-deep-navy dark:border-gold dark:shadow-gold/10' 
                  : 'bg-white text-dark-gray border-royal/10 hover:bg-slate-50 hover:text-navy dark:bg-slate-900/50 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeTab} // Force re-animation on tab change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[450px]"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                className="h-full"
              >
                <div 
                  {...cardHover}
                  onClick={() => openModal(project)}
                  className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-royal/10 dark:border-slate-800 shadow-xl shadow-royal/5 rounded-[2rem] overflow-hidden transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold hover:-translate-y-2 hover:border-gold/50 dark:hover:border-gold/50"
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${project.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(project);
                    }
                  }}
                >
                  {/* Image Preview - Compact h-44 */}
                  <div className="relative w-full h-44 bg-slate-100 dark:bg-slate-800/50 overflow-hidden border-b border-royal/5 dark:border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-royal/10 dark:border-slate-700 shadow-sm flex items-center gap-1.5 z-20">
                      <Layers className="h-3 w-3 text-gold" />
                      <span className="text-[9px] font-bold text-navy dark:text-slate-200 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Compact Content - p-5 */}
                  <div className="p-5 flex flex-col flex-1 bg-white dark:bg-slate-900">
                    <h3 className="text-lg font-black text-deep-navy dark:text-white mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-royal dark:group-hover:text-gold leading-tight" title={project.title}>
                      {project.shortTitle || project.title}
                    </h3>
                    
                    <p className="text-sm text-dark-gray dark:text-slate-400 font-medium leading-relaxed mb-5 line-clamp-3 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Compact Tech Badges */}
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50 flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[9px] font-bold uppercase tracking-widest text-navy dark:text-slate-300 transition-colors duration-300 group-hover:border-royal/20 dark:group-hover:border-gold/20">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[9px] font-bold text-slate-500 transition-colors duration-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors duration-300 px-3 py-1.5 rounded-lg bg-royal/5 text-navy dark:bg-slate-800 dark:text-slate-300 group-hover:bg-gold/10 group-hover:text-gold">
                        View Details <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Button */}
        {filteredProjects.length > INITIAL_VISIBLE && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <Button 
              onClick={handleViewMore}
              className="group h-12 px-8 rounded-full bg-navy dark:bg-slate-800 text-white hover:bg-gold hover:text-deep-navy font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-navy/10 hover:shadow-gold/20 border border-transparent dark:border-slate-700 flex items-center gap-2"
            >
              {hasMore ? (
                <>View More Projects <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" /></>
              ) : (
                <>View Less Projects <ChevronUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </Button>
          </motion.div>
        )}

      </div>

      {/* shadcn/ui Dialog Modal for Project Details & Image Carousel */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden bg-white dark:bg-slate-950 border-royal/20 dark:border-slate-800 rounded-2xl md:rounded-3xl shadow-2xl">
          {selectedProject && (
            <div className="flex flex-col lg:flex-row h-[90vh] lg:h-[80vh]">
              
              {/* Left: Interactive Image Carousel */}
              <div className="relative w-full lg:w-[60%] h-[45vh] lg:h-full bg-slate-900 dark:bg-black border-b lg:border-b-0 lg:border-r border-royal/20 dark:border-slate-800 flex flex-col group">
                
                {/* Main Carousel Image */}
                <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-black/50">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full p-2 lg:p-6"
                    >
                      <Image
                        src={selectedProject.screenshots[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel Navigation Buttons */}
                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-2 lg:left-4 p-2 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/10 hover:bg-gold hover:text-deep-navy transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-2 lg:right-4 p-2 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/10 hover:bg-gold hover:text-deep-navy transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                      
                      {/* Image Counter Badge */}
                      <div className="absolute top-4 right-4 bg-black/60 text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md tracking-widest z-20">
                        {currentImageIndex + 1} / {selectedProject.screenshots.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails Strip */}
                {selectedProject.screenshots.length > 1 && (
                  <div className="h-20 lg:h-24 bg-slate-950 border-t border-white/10 flex items-center gap-2 px-4 overflow-x-auto overflow-y-hidden snap-x pb-2 pt-2 custom-scrollbar">
                    {selectedProject.screenshots.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative h-14 w-24 lg:h-16 lg:w-28 flex-shrink-0 rounded-md overflow-hidden snap-center transition-all duration-300 border-2 ${currentImageIndex === idx ? 'border-gold opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="120px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Project Details Information */}
              <div className="w-full lg:w-[40%] flex flex-col bg-white dark:bg-slate-950 overflow-y-auto">
                <div className="p-6 lg:p-10 flex-1">
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1.5 rounded-lg border border-gold/20 flex items-center gap-1.5">
                      <Layers className="h-3 w-3" /> {selectedProject.category}
                    </span>
                  </div>

                  <DialogTitle className="text-3xl lg:text-4xl font-black text-deep-navy dark:text-white tracking-tight mb-6 leading-tight">
                    {selectedProject.title}
                  </DialogTitle>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-royal dark:text-gold uppercase tracking-widest mb-3 border-b border-royal/10 dark:border-slate-800 pb-2">
                      Project Overview
                    </h4>
                    <DialogDescription className="text-base text-dark-gray dark:text-slate-300 font-medium leading-relaxed mt-2">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-royal dark:text-gold uppercase tracking-widest mb-3 border-b border-royal/10 dark:border-slate-800 pb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> Project Outcomes
                    </h4>
                    <p className="text-sm font-bold text-deep-navy dark:text-white leading-relaxed bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-royal/10 dark:border-slate-800 shadow-inner mt-2">
                      {selectedProject.outcome}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-royal dark:text-gold uppercase tracking-widest mb-3 border-b border-royal/10 dark:border-slate-800 pb-2 flex items-center gap-2">
                      <Code className="h-4 w-4" /> Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-navy text-white dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(128, 128, 128, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(128, 128, 128, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(253, 181, 21, 0.8);
        }
      `}</style>
    </section>
  );
};

export default Projects;