"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, cardHover, scaleIn } from '@/lib/animations';
import { Trophy, Star, ExternalLink, Calendar, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { achievements, PortfolioDocument } from '@/data/portfolio';

const CATEGORIES = ["All", "Academic Honors", "Capstone", "Competitions", "Leadership", "Systems Developed"];
const INITIAL_VISIBLE = 6;

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<PortfolioDocument | null>(null);
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredAchievements = useMemo(() => {
    if (activeTab === "All") return achievements;
    return achievements.filter(a => a.category === activeTab);
  }, [activeTab]);

  const visibleAchievements = filteredAchievements.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAchievements.length;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleViewMore = () => {
    if (hasMore) {
      setVisibleCount(prev => prev + 6);
    } else {
      setVisibleCount(INITIAL_VISIBLE);
      document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="achievements" className="py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        {/* Header */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-[10px] font-bold uppercase tracking-widest mb-4 border border-gold/20 backdrop-blur-sm">
            Our Excellence
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-deep-navy dark:text-white tracking-tighter transition-colors duration-300 mb-4">
            Achievements & Awards
          </h2>
          <p className="text-sm md:text-base text-dark-gray dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Recognitions, honors, and awards that highlight my continuous growth and dedication.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-navy text-white shadow-md shadow-navy/20 dark:bg-slate-800' 
                  : 'bg-light-blue text-navy hover:bg-gold hover:text-deep-navy dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {visibleAchievements.map((achievement, i) => (
              <motion.div
                key={achievement.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="h-full"
              >
                <div 
                  {...cardHover}
                  onClick={() => setSelectedAchievement(achievement)}
                  className={`relative flex flex-col h-full cursor-pointer border ${achievement.featured ? 'bg-deep-navy border-gold shadow-lg shadow-gold/10' : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-royal/20 dark:border-slate-800 shadow-sm'} rounded-[1.5rem] overflow-hidden transition-all duration-300 group hover:border-gold hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${achievement.displayTitle}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedAchievement(achievement);
                    }
                  }}
                >
                  {/* Image Preview */}
                  <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-royal/10 dark:border-slate-700/50">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                    {achievement.featured && (
                      <div className="absolute top-4 right-4 bg-gold text-deep-navy text-[9px] font-black uppercase tracking-widest py-1 px-3 rounded-full flex items-center gap-1 shadow-md shadow-gold/20 z-10">
                        <Star className="h-3 w-3 fill-current" /> Featured
                      </div>
                    )}
                    {achievement.year && (
                      <div className="absolute bottom-4 right-4 text-[10px] font-bold bg-black/60 text-white backdrop-blur-sm px-2 py-1 rounded-md border border-white/20 z-10">
                        {achievement.year}
                      </div>
                    )}
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className={`h-4 w-4 ${achievement.featured ? 'text-gold' : 'text-royal dark:text-slate-400'}`} />
                      <span className={`text-[9px] font-bold uppercase tracking-widest transition-colors duration-300 ${achievement.featured ? 'text-gold' : 'text-royal dark:text-slate-400'}`}>
                        {achievement.category}
                      </span>
                    </div>
                    
                    <h3 className={`text-lg font-black mb-2 transition-colors duration-300 line-clamp-2 ${achievement.featured ? 'text-white' : 'text-deep-navy dark:text-white group-hover:text-royal dark:group-hover:text-gold'}`}>
                      {achievement.displayTitle}
                    </h3>
                    <p className={`text-sm font-medium leading-relaxed transition-colors duration-300 line-clamp-2 ${achievement.featured ? 'text-slate-300' : 'text-dark-gray dark:text-slate-400'}`}>
                      {achievement.description}
                    </p>
                    
                    <div className="mt-auto pt-4 flex items-center justify-end">
                      <span className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 transition-colors duration-300 ${achievement.featured ? 'text-gold' : 'text-royal dark:text-slate-400 group-hover:text-gold'}`}>
                        View Details <ExternalLink className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less */}
        {filteredAchievements.length > INITIAL_VISIBLE && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleViewMore}
              className="group flex items-center gap-2 bg-navy dark:bg-slate-800 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-deep-navy transition-all duration-300 shadow-md shadow-navy/10"
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

      {/* shadcn/ui Dialog Modal for Award Details */}
      <Dialog open={!!selectedAchievement} onOpenChange={(open) => !open && setSelectedAchievement(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-white dark:bg-slate-950 border-royal/20 dark:border-slate-800 rounded-2xl md:rounded-3xl shadow-2xl">
          {selectedAchievement && (
            <div className="flex flex-col md:flex-row h-[85vh] md:h-[75vh]">
              
              {/* Left: Image Viewer */}
              <div className="relative w-full md:w-3/5 bg-slate-100 dark:bg-slate-900/50 border-b md:border-b-0 md:border-r border-royal/10 dark:border-slate-800 flex items-center justify-center p-4 min-h-[40vh] md:min-h-full">
                <div className="absolute inset-0 bg-grid-royal/5 dark:bg-grid-slate-700/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
                <div className="relative w-full h-full max-h-[100%] shadow-xl rounded-lg overflow-hidden border border-royal/10 dark:border-slate-700 bg-white dark:bg-slate-950">
                  <Image 
                    src={selectedAchievement.image} 
                    alt={selectedAchievement.title}
                    fill
                    className="object-contain p-2 relative z-10"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              </div>

              {/* Right: Award Details */}
              <div className="w-full md:w-2/5 p-6 md:p-8 lg:p-10 flex flex-col overflow-y-auto">
                <DialogHeader className="text-left mb-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded-md border border-gold/20">
                      {selectedAchievement.category}
                    </span>
                    {selectedAchievement.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-deep-navy px-2 py-1 rounded-md border border-royal/30 flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" /> Featured
                      </span>
                    )}
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-black text-deep-navy dark:text-white tracking-tight mb-2">
                    {selectedAchievement.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-dark-gray dark:text-slate-400 font-medium leading-relaxed">
                    {selectedAchievement.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 mt-auto pt-4 border-t border-royal/10 dark:border-slate-800">
                  {selectedAchievement.year && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-royal dark:text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Date / Year
                      </span>
                      <span className="text-sm font-black text-deep-navy dark:text-white">
                        {selectedAchievement.year}
                      </span>
                    </div>
                  )}
                  {selectedAchievement.issuer && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-royal dark:text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        <Building2 className="h-3 w-3" /> Organization / Issuer
                      </span>
                      <span className="text-sm font-black text-deep-navy dark:text-white">
                        {selectedAchievement.issuer}
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

export default Achievements;
