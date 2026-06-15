"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, cardHover } from '@/lib/animations';
import { Award, ExternalLink, Calendar, Building2, ChevronDown, ChevronUp, Star, Filter } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { certifications, PortfolioDocument } from '@/data/portfolio';

const CATEGORIES = ["All", "Capstone & OJT", "Competitions", "Leadership", "Participation", "Python", "Workshops & Trainings"];
const INITIAL_VISIBLE = 6;

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<PortfolioDocument | null>(null);
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredCertifications = useMemo(() => {
    if (activeTab === "All") return certifications;
    return certifications.filter(c => c.category === activeTab);
  }, [activeTab]);

  const visibleCertifications = filteredCertifications.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCertifications.length;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleViewMore = () => {
    if (hasMore) {
      setVisibleCount(prev => prev + 6);
    } else {
      setVisibleCount(INITIAL_VISIBLE);
      document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="certifications" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden transition-colors duration-300 border-t border-royal/10 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Sticky Header & Filters */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 lg:h-max">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.2 }}
              className="text-left mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 text-navy dark:bg-gold/10 dark:text-gold text-[10px] font-bold uppercase tracking-widest mb-6 border border-navy/10 dark:border-gold/20 backdrop-blur-sm">
                Continuous Learning
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-deep-navy dark:text-white tracking-tighter transition-colors duration-300 mb-6 leading-tight">
                Certifications & <br className="hidden lg:block"/> Trainings
              </h2>
              <p className="text-base text-dark-gray dark:text-slate-400 font-medium leading-relaxed mb-8">
                A curated collection of my professional development journey, showcasing specialized seminars, workshops, and technical certifications.
              </p>
            </motion.div>

            {/* Vertical Category Filters (Desktop) / Horizontal (Mobile) */}
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-3xl border border-royal/10 dark:border-slate-800 shadow-xl shadow-royal/5">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-royal/10 dark:border-slate-800">
                <Filter className="h-4 w-4 text-royal dark:text-gold" />
                <h3 className="text-xs font-black uppercase tracking-widest text-deep-navy dark:text-white">Filter by Category</h3>
              </div>
              <div className="flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2">
                {CATEGORIES.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`text-left px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between group ${
                      activeTab === tab 
                        ? 'bg-navy text-white shadow-md shadow-navy/20 dark:bg-gold dark:text-deep-navy' 
                        : 'bg-transparent text-dark-gray hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 hover:text-navy dark:hover:text-white'
                    }`}
                  >
                    <span>{tab}</span>
                    <ChevronDown className={`h-4 w-4 -rotate-90 transition-transform duration-300 ${activeTab === tab ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certificate Grid */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              key={activeTab} // Force re-animation on tab change
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {visibleCertifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    layout
                    variants={itemVariants}
                    className="h-full"
                  >
                    <div 
                      {...cardHover}
                      onClick={() => setSelectedCertificate(cert)}
                      className="relative flex flex-col h-full cursor-pointer bg-white dark:bg-slate-900 border border-royal/10 dark:border-slate-800 shadow-sm rounded-3xl overflow-hidden transition-all duration-300 group hover:border-gold hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      tabIndex={0}
                      role="button"
                      aria-label={`View details for ${cert.displayTitle}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedCertificate(cert);
                        }
                      }}
                    >
                      {/* Image Preview (Landscape optimized for certificates) */}
                      <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800/50 overflow-hidden border-b border-royal/5 dark:border-slate-800 flex items-center justify-center p-6">
                        <div className="absolute inset-0 bg-gradient-to-tr from-navy/5 to-transparent dark:from-gold/5 dark:to-transparent pointer-events-none" />
                        <div className="relative w-full h-full shadow-lg border border-royal/10 dark:border-slate-700 rounded-lg overflow-hidden bg-white">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        
                        {cert.featured && (
                          <div className="absolute top-4 right-4 bg-gold text-deep-navy text-[9px] font-black uppercase tracking-widest py-1.5 px-3 rounded-full flex items-center gap-1 shadow-md shadow-gold/20 z-10">
                            <Star className="h-3 w-3 fill-current" /> Featured
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 text-[9px] font-bold bg-white/90 text-navy dark:bg-slate-900/90 dark:text-white backdrop-blur-md px-2.5 py-1 rounded-md border border-royal/10 dark:border-slate-700 z-10 uppercase tracking-widest shadow-sm">
                          {cert.type}
                        </div>
                      </div>
                      
                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-1 bg-white dark:bg-slate-900">
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="h-4 w-4 text-royal dark:text-gold" />
                          <span className="text-[9px] font-bold uppercase tracking-widest text-royal dark:text-gold transition-colors duration-300">
                            {cert.category}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-black mb-3 text-deep-navy dark:text-white transition-colors duration-300 line-clamp-2 group-hover:text-royal dark:group-hover:text-gold leading-tight">
                          {cert.displayTitle}
                        </h3>
                        <p className="text-sm font-medium leading-relaxed text-dark-gray dark:text-slate-400 transition-colors duration-300 line-clamp-2">
                          {cert.description}
                        </p>
                        
                        <div className="mt-auto pt-6 flex items-center justify-end border-t border-slate-100 dark:border-slate-800">
                          <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 text-navy dark:text-slate-300 group-hover:text-royal dark:group-hover:text-gold transition-colors duration-300 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg group-hover:bg-royal/5 dark:group-hover:bg-gold/10">
                            View Document <ExternalLink className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* View More / View Less */}
            {filteredCertifications.length > INITIAL_VISIBLE && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={handleViewMore}
                  className="group flex items-center gap-2 bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-700 text-navy dark:text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-deep-navy hover:border-gold transition-all duration-300 shadow-xl shadow-navy/5"
                >
                  {hasMore ? (
                    <>View More <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" /></>
                  ) : (
                    <>View Less <ChevronUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* shadcn/ui Dialog Modal for Certificate Details */}
      <Dialog open={!!selectedCertificate} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-white dark:bg-slate-950 border-royal/20 dark:border-slate-800 rounded-2xl md:rounded-3xl shadow-2xl">
          {selectedCertificate && (
            <div className="flex flex-col md:flex-row h-[85vh] md:h-[75vh]">
              
              {/* Left: Image Viewer */}
              <div className="relative w-full md:w-3/5 bg-slate-100 dark:bg-slate-900/50 border-b md:border-b-0 md:border-r border-royal/10 dark:border-slate-800 flex items-center justify-center p-4 min-h-[40vh] md:min-h-full">
                <div className="absolute inset-0 bg-grid-royal/5 dark:bg-grid-slate-700/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
                <div className="relative w-full h-full max-h-[100%] shadow-xl rounded-lg overflow-hidden border border-royal/10 dark:border-slate-700 bg-white dark:bg-slate-950">
                  <Image 
                    src={selectedCertificate.image} 
                    alt={selectedCertificate.title}
                    fill
                    className="object-contain p-2 relative z-10"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              </div>

              {/* Right: Certificate Details */}
              <div className="w-full md:w-2/5 p-6 md:p-8 lg:p-10 flex flex-col overflow-y-auto">
                <DialogHeader className="text-left mb-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded-md border border-gold/20">
                      {selectedCertificate.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-navy px-2 py-1 rounded-md border border-royal/30">
                      {selectedCertificate.type}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-black text-deep-navy dark:text-white tracking-tight mb-2 leading-tight">
                    {selectedCertificate.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-dark-gray dark:text-slate-400 font-medium leading-relaxed mt-4">
                    {selectedCertificate.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 mt-auto pt-6 border-t border-royal/10 dark:border-slate-800">
                  {selectedCertificate.year && (
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-bold text-royal dark:text-gold uppercase tracking-widest flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Date / Year
                      </span>
                      <span className="text-sm font-black text-deep-navy dark:text-white">
                        {selectedCertificate.year}
                      </span>
                    </div>
                  )}
                  {selectedCertificate.issuer && (
                    <div className="flex flex-col gap-1.5 mt-4">
                      <span className="text-[10px] font-bold text-royal dark:text-gold uppercase tracking-widest flex items-center gap-1">
                        <Building2 className="h-3 w-3" /> Organization / Issuer
                      </span>
                      <span className="text-sm font-black text-deep-navy dark:text-white">
                        {selectedCertificate.issuer}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certificates;