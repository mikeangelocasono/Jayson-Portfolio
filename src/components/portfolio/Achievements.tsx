"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, cardHover } from '@/lib/animations';
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
    <section id="achievements" className="py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Background SVG Trophy Watermark */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 0.03, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-1/4 right-[-10%] md:right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none z-0 text-navy dark:text-white"
      >
        <Trophy className="w-full h-full" strokeWidth={0.5} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        {/* Header (Centered) */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-[10px] font-black uppercase tracking-widest mb-6 border border-gold/20 backdrop-blur-sm shadow-sm">
            <Trophy className="h-3 w-3" /> Our Excellence
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-deep-navy dark:text-white tracking-tighter transition-colors duration-300 mb-6 leading-tight">
            Achievements & Awards
          </h2>
          <p className="text-base md:text-lg text-dark-gray dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Recognitions, honors, and competitive awards that highlight my dedication to excellence and continuous growth in the technology sector.
          </p>
        </motion.div>

        {/* Category Tabs (Horizontal) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border backdrop-blur-md ${
                activeTab === tab 
                  ? 'bg-navy text-white border-navy shadow-lg shadow-navy/20 dark:bg-gold dark:text-deep-navy dark:border-gold dark:shadow-gold/10' 
                  : 'bg-white/50 text-navy border-royal/10 hover:bg-gold/10 hover:text-deep-navy hover:border-gold/30 dark:bg-slate-900/50 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid (Staggered / Masonry-feel) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeTab} // Force re-animation on tab change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {visibleAchievements.map((achievement, i) => (
              <motion.div
                key={achievement.id}
                layout
                variants={itemVariants}
                className={`h-full ${achievement.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div 
                  {...cardHover}
                  onClick={() => setSelectedAchievement(achievement)}
                  className={`relative flex flex-col h-full cursor-pointer backdrop-blur-xl border ${
                    achievement.featured 
                      ? 'bg-gradient-to-br from-deep-navy to-navy border-gold/50 shadow-2xl shadow-gold/10 dark:shadow-gold/5' 
                      : 'bg-white/70 dark:bg-slate-900/70 border-royal/10 dark:border-slate-800 shadow-xl shadow-royal/5'
                  } rounded-[2rem] overflow-hidden transition-all duration-500 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold hover:-translate-y-2`}
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
                  <div className={`relative w-full overflow-hidden ${achievement.featured ? 'h-64 md:h-72 lg:h-80' : 'h-56'} bg-slate-100 dark:bg-slate-950/50 flex items-center justify-center p-6 border-b ${achievement.featured ? 'border-gold/20' : 'border-royal/5 dark:border-slate-800'}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none z-10" />
                    
                    <div className={`relative w-full h-full overflow-hidden shadow-xl ${achievement.featured ? 'rounded-2xl border border-gold/30' : 'rounded-xl border border-royal/10 dark:border-slate-700 bg-white'}`}>
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        sizes={achievement.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {achievement.featured && (
                      <div className="absolute top-6 right-6 bg-gradient-to-r from-gold to-yellow-400 text-deep-navy text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full flex items-center gap-1.5 shadow-lg shadow-gold/30 z-20">
                        <Star className="h-3 w-3 fill-current" /> Major Award
                      </div>
                    )}
                    {achievement.year && (
                      <div className={`absolute bottom-6 left-6 text-[10px] font-bold backdrop-blur-md px-3 py-1.5 rounded-lg border z-20 uppercase tracking-widest ${
                        achievement.featured ? 'bg-black/50 text-gold border-gold/30' : 'bg-black/70 text-white border-white/20'
                      }`}>
                        {achievement.year}
                      </div>
                    )}
                  </div>
                  
                  {/* Card Content */}
                  <div className={`p-8 flex flex-col flex-1 ${achievement.featured ? '' : ''}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className={`h-4 w-4 ${achievement.featured ? 'text-gold' : 'text-royal dark:text-gold'}`} />
                      <span className={`text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${achievement.featured ? 'text-gold' : 'text-royal dark:text-gold'}`}>
                        {achievement.category}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl lg:text-2xl font-black mb-3 transition-colors duration-300 leading-tight ${achievement.featured ? 'text-white' : 'text-deep-navy dark:text-white group-hover:text-navy dark:group-hover:text-gold'}`}>
                      {achievement.displayTitle}
                    </h3>
                    <p className={`text-sm md:text-base font-medium leading-relaxed transition-colors duration-300 ${achievement.featured ? 'text-slate-300 line-clamp-3' : 'text-dark-gray dark:text-slate-400 line-clamp-2'}`}>
                      {achievement.description}
                    </p>
                    
                    <div className={`mt-auto pt-6 flex items-center justify-end border-t ${achievement.featured ? 'border-gold/20' : 'border-royal/5 dark:border-slate-800'}`}>
                      <span className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors duration-300 px-4 py-2 rounded-xl ${
                        achievement.featured 
                          ? 'bg-gold/10 text-gold hover:bg-gold hover:text-deep-navy' 
                          : 'bg-royal/5 text-navy dark:bg-slate-800 dark:text-slate-300 hover:bg-royal/10 dark:hover:bg-gold/10 group-hover:text-royal dark:group-hover:text-gold'
                      }`}>
                        View Details <ExternalLink className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less */}
        {filteredAchievements.length > INITIAL_VISIBLE && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleViewMore}
              className="group flex items-center gap-2 bg-navy dark:bg-slate-800 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-deep-navy transition-all duration-300 shadow-xl shadow-navy/10 hover:shadow-gold/20"
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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1.5 rounded-lg border border-gold/20">
                      {selectedAchievement.category}
                    </span>
                    {selectedAchievement.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-deep-navy px-3 py-1.5 rounded-lg border border-royal/30 flex items-center gap-1.5 shadow-md">
                        <Star className="h-3 w-3 fill-current" /> Major Award
                      </span>
                    )}
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-black text-deep-navy dark:text-white tracking-tight mb-2 leading-tight">
                    {selectedAchievement.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-dark-gray dark:text-slate-400 font-medium leading-relaxed mt-4">
                    {selectedAchievement.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 mt-auto pt-6 border-t border-royal/10 dark:border-slate-800">
                  {selectedAchievement.year && (
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-bold text-royal dark:text-gold uppercase tracking-widest flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Date / Year
                      </span>
                      <span className="text-sm font-black text-deep-navy dark:text-white">
                        {selectedAchievement.year}
                      </span>
                    </div>
                  )}
                  {selectedAchievement.issuer && (
                    <div className="flex flex-col gap-1.5 mt-4">
                      <span className="text-[10px] font-bold text-royal dark:text-gold uppercase tracking-widest flex items-center gap-1">
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
