"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, buttonHover } from '@/lib/animations';
import { X, ArrowRight, Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { galleryImages, GalleryImage } from '@/data/portfolio';

const Gallery = () => {
  // Triplicate the array to create a full continuous circle for the rotating layout
  const rotatingItems = [...galleryImages, ...galleryImages, ...galleryImages];

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) setSelectedImage(null);
        else if (isViewAllOpen) setIsViewAllOpen(false);
      }
    };
    if (selectedImage || isViewAllOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, isViewAllOpen]);

  // Prevent background scrolling when any modal is open
  useEffect(() => {
    if (selectedImage || isViewAllOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage, isViewAllOpen]);

  return (
    <>
      <section 
        id="gallery" 
        className="pt-24 pb-0 bg-white dark:bg-slate-950 relative overflow-hidden border-t border-royal/10 dark:border-slate-800 transition-colors duration-300 h-[500px] md:h-[550px] lg:h-[650px] w-full"
      >
        
        {/* The Invisible Auto-Rotating Wheel */}
        <div 
          className="absolute top-[420px] md:top-[600px] lg:top-[800px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] z-0"
          style={{ 
            '--radius': '320px', 
          } as React.CSSProperties}
        >
          {/* Responsive radius for the circle */}
          <div className="absolute inset-0 sm:[--radius:450px] lg:[--radius:650px] animate-spin hover:[animation-play-state:paused] flex items-center justify-center" style={{ animationDuration: '60s' }}>
            
            {rotatingItems.map((item, index) => {
              const angle = index * (360 / rotatingItems.length);
              
              return (
                <div
                  key={index}
                  className="absolute cursor-pointer group"
                  style={{
                    transform: `rotate(${angle}deg) translateY(calc(-1 * var(--radius)))`,
                    transformOrigin: 'center center',
                  }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="w-32 h-40 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-3xl overflow-hidden border border-royal/20 dark:border-slate-800 shadow-xl shadow-navy/10 dark:shadow-none bg-light-blue/50 dark:bg-slate-900 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-gold/50 relative">
                    
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 150px, 200px"
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-5">
                      <span className="text-[9px] font-bold text-gold uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {item.category}
                      </span>
                      <h4 className="text-white text-xs sm:text-sm lg:text-base font-black translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 line-clamp-2 leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Content */}
        <div className="absolute top-[65%] md:top-[65%] lg:top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 z-10 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="text-center max-w-xl mx-auto pointer-events-auto p-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-[10px] font-bold uppercase tracking-widest mb-6 border border-gold/20">
              Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-deep-navy dark:text-white tracking-tighter leading-tight mb-6">
              Create Stunning <br className="hidden sm:block" /> Experiences Instantly
            </h2>
            <p className="text-sm sm:text-base text-dark-gray dark:text-slate-400 font-medium mb-8 leading-relaxed max-w-md mx-auto">
              Transform your ideas into breathtaking visuals and projects. A collection of event photos, showcases, and highlights.
            </p>
            <motion.div {...buttonHover} className="inline-block">
              <Button 
                onClick={() => setIsViewAllOpen(true)}
                className="h-12 px-8 rounded-full bg-navy dark:bg-slate-800 text-white dark:text-white hover:bg-gold dark:hover:bg-gold dark:hover:text-deep-navy font-black uppercase tracking-widest text-xs gap-2 transition-all shadow-md z-20 relative pointer-events-auto"
              >
                View All Photos <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-navy/95 dark:bg-slate-950/95 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 dark:bg-slate-800 text-white hover:bg-gold hover:text-deep-navy dark:hover:text-slate-900 transition-colors z-50"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[90vh] rounded-[1.5rem] overflow-hidden shadow-2xl flex flex-col border border-white/10 dark:border-slate-800 bg-navy dark:bg-slate-900"
            >
              <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent z-10 flex flex-col pointer-events-none">
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest">{selectedImage.category}</span>
                <span className="text-white text-lg md:text-2xl font-black">{selectedImage.title}</span>
              </div>
              
              <div className="relative w-full h-full bg-black/50">
                 <Image
                   src={selectedImage.src}
                   alt={selectedImage.alt}
                   fill
                   className="object-contain"
                   sizes="100vw"
                   priority
                 />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View All Photos Grid Modal */}
      <AnimatePresence>
        {isViewAllOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setIsViewAllOpen(false)}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsViewAllOpen(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-navy/10 dark:bg-slate-800 text-navy dark:text-white hover:bg-gold hover:text-deep-navy transition-colors z-50"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-7xl h-full max-h-[90vh] flex flex-col"
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-black text-deep-navy dark:text-white tracking-tighter">
                  All Gallery Photos
                </h2>
                <p className="text-dark-gray dark:text-slate-400 mt-2 font-medium">
                  A complete look at my moments, events, and experiences.
                </p>
              </div>
              
              <div className="overflow-y-auto pr-2 pb-12 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedImage(item)}
                      className="group relative w-full aspect-video rounded-3xl overflow-hidden border border-royal/20 dark:border-slate-800 shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gold/50"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                        <span className="text-[10px] font-bold text-gold uppercase tracking-widest mb-2">
                          {item.category}
                        </span>
                        <h4 className="text-white text-lg font-black leading-tight flex items-center justify-between">
                          {item.title}
                          <Expand className="h-4 w-4 text-white/50" />
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(253, 181, 21, 0.8);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
};

export default Gallery;
