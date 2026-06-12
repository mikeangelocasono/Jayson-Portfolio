"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp, buttonHover } from '@/lib/animations';
import { X, ArrowRight, ArrowLeft, Cpu, Users, FileText, Presentation, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CertificateItem {
  category: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  skills: string[];
  image: string;
  color: string;
  icon: React.ReactNode;
}

const Certificates = () => {
  const certifications: CertificateItem[] = [
    {
      category: "Technology",
      title: "Full-Stack Web Development Bootcamp",
      issuer: "Tech Academy",
      year: "2024",
      description: "Comprehensive intensive training focusing on the MERN stack and Next.js modern architecture. Developed multiple full-stack applications.",
      skills: ["React", "Next.js", "Node.js", "MongoDB"],
      image: "placeholder",
      color: "bg-navy",
      icon: <Cpu className="h-6 w-6" />
    },
    {
      category: "Leadership",
      title: "Youth Leadership Summit Certificate",
      issuer: "National Youth Commission",
      year: "2023",
      description: "Completed intensive leadership and community building workshop. Focused on team management, conflict resolution, and public speaking.",
      skills: ["Leadership", "Communication", "Management"],
      image: "placeholder",
      color: "bg-royal",
      icon: <Users className="h-6 w-6" />
    },
    {
      category: "Research",
      title: "Data Analysis & Research Methodologies",
      issuer: "University Research Council",
      year: "2023",
      description: "Advanced training in qualitative and quantitative research methods, including statistical analysis and structured reporting.",
      skills: ["Data Analysis", "Research", "Statistics"],
      image: "placeholder",
      color: "bg-gold-dark",
      icon: <FileText className="h-6 w-6" />
    },
    {
      category: "Workshops",
      title: "UI/UX Design Masterclass",
      issuer: "Design Guild",
      year: "2022",
      description: "Hands-on workshop focusing on user-centered design principles, wireframing, prototyping, and modern accessibility standards.",
      skills: ["UI/UX Design", "Figma", "Accessibility"],
      image: "placeholder",
      color: "bg-navy",
      icon: <Presentation className="h-6 w-6" />
    },
    {
      category: "Seminars",
      title: "Cybersecurity Awareness Training",
      issuer: "IT Security Dept",
      year: "2022",
      description: "Seminar on modern web vulnerabilities, secure coding practices, and implementing robust authentication flows.",
      skills: ["Web Security", "Authentication", "Best Practices"],
      image: "placeholder",
      color: "bg-deep-navy",
      icon: <ShieldCheck className="h-6 w-6" />
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<CertificateItem | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  }, [certifications.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  }, [certifications.length]);

  // Auto-play logic
  useEffect(() => {
    if (isHovered || selectedImage) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext, isHovered, selectedImage]);

  // Modals & Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight' && !selectedImage) handleNext();
      if (e.key === 'ArrowLeft' && !selectedImage) handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, selectedImage]);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  const activeCert = certifications[activeIndex];

  return (
    <>
      <section 
        id="certifications" 
        className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300 min-h-screen flex items-center border-t border-royal/10 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading */}
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-3 flex flex-col justify-center text-center lg:text-left"
            >
              <div className="inline-flex lg:flex items-center justify-center lg:justify-start gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-[10px] font-bold uppercase tracking-widest mb-6 border border-gold/20 self-center lg:self-start">
                Awards & Certifications
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-deep-navy dark:text-white tracking-tighter leading-[1.1] mb-6">
                Certificates <br className="hidden lg:block"/> <span className="text-gold">& Honors</span>
              </h2>
              <div className="w-12 h-1 bg-gold mb-6 mx-auto lg:mx-0 rounded-full" />
              <p className="text-sm md:text-base text-dark-gray dark:text-slate-400 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                A collection of certifications, trainings, recognitions, and achievements that highlight my continuous growth, technical skills, and professional development.
              </p>
            </motion.div>

            {/* Center Column: Stacked Carousel */}
            <div 
              className="lg:col-span-5 relative h-[350px] sm:h-[450px] lg:h-[500px] w-full flex items-center justify-center perspective-[1000px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="popLayout">
                {certifications.map((cert, index) => {
                  const offset = (index - activeIndex + certifications.length) % certifications.length;
                  
                  // Calculate stacked layout properties
                  let scale = 1;
                  let y = 0;
                  let opacity = 1;
                  let zIndex = 10;
                  
                  if (offset === 0) {
                    // Active card
                    scale = 1;
                    y = 0;
                    opacity = 1;
                    zIndex = 20;
                  } else if (offset === certifications.length - 1) {
                    // Exiting card (dropping down)
                    scale = 1.05;
                    y = 120;
                    opacity = 0;
                    zIndex = 21;
                  } else if (offset === 1) {
                    // Behind 1
                    scale = 0.92;
                    y = -24;
                    opacity = 0.7;
                    zIndex = 10;
                  } else if (offset === 2) {
                    // Behind 2
                    scale = 0.84;
                    y = -48;
                    opacity = 0.4;
                    zIndex = 5;
                  } else {
                    // Hidden deep behind
                    scale = 0.76;
                    y = -72;
                    opacity = 0;
                    zIndex = 0;
                  }

                  // Hide inactive cards completely from screen readers and tab order
                  const isVisible = offset === 0 || offset === 1 || offset === 2 || offset === certifications.length - 1;
                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={`${cert.title}-${index}`}
                      initial={false}
                      animate={{ scale, y, opacity, zIndex }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      onClick={() => offset === 0 ? setSelectedImage(cert) : setActiveIndex(index)}
                      className={`absolute w-[85%] sm:w-[320px] lg:w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl ${offset === 0 ? 'cursor-pointer hover:border-gold/50 shadow-navy/20 dark:shadow-black/50' : 'cursor-pointer shadow-navy/10 dark:shadow-none'} transition-colors duration-300 bg-deep-navy group`}
                    >
                      {/* Card Background Pattern (Kept dark for premium certificate look) */}
                      <div className={`absolute inset-0 ${cert.color} opacity-20`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                      
                      {/* Premium Certificate Content Wrapper */}
                      <div className="absolute inset-2 border border-white/5 rounded-[1.5rem] p-6 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold border border-white/10">
                            {cert.icon}
                          </div>
                          <span className="text-[9px] font-black tracking-widest uppercase text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                            {cert.year}
                          </span>
                        </div>
                        
                        <div className="text-center mt-auto mb-auto">
                          <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                            Certificate of Completion
                          </div>
                          <div className="text-white text-xl sm:text-2xl font-black leading-tight line-clamp-3 px-2">
                            {cert.title}
                          </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 pt-6 border-t border-white/10 mt-6">
                          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gold text-center">
                            {cert.issuer}
                          </span>
                          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </div>
                      </div>

                      {/* Hover Overlay indicating clickability */}
                      {offset === 0 && (
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="text-white text-sm font-bold uppercase tracking-widest bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-md">
                            View Document
                          </span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right Column: Dynamic Info */}
            <div className="lg:col-span-4 flex flex-col h-full justify-center">
              <div className="bg-white dark:bg-slate-900 border border-royal/10 dark:border-slate-800 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-navy/5 dark:shadow-none relative overflow-hidden transition-colors duration-300">
                
                {/* Fixed Header */}
                <div className="flex items-center gap-3 mb-8 border-b border-royal/10 dark:border-slate-800 pb-6 transition-colors duration-300">
                  <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-dark-gray dark:text-slate-400">
                    Certificate Details
                  </span>
                </div>

                {/* Dynamic Content */}
                <div className="min-h-[220px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex flex-col h-full"
                    >
                      <div className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-2">
                        {activeCert.category}
                      </div>
                      <h3 className="text-2xl font-black text-deep-navy dark:text-white leading-tight mb-4 transition-colors duration-300">
                        {activeCert.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm">
                        <div className="flex items-center gap-2 text-dark-gray dark:text-slate-400">
                          <span className="font-bold text-navy/50 dark:text-slate-500">Issued By:</span> {activeCert.issuer}
                        </div>
                        <div className="flex items-center gap-2 text-dark-gray dark:text-slate-400">
                          <span className="font-bold text-navy/50 dark:text-slate-500">Year:</span> {activeCert.year}
                        </div>
                      </div>

                      <p className="text-sm text-dark-gray dark:text-slate-400 leading-relaxed mb-8 transition-colors duration-300">
                        {activeCert.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {activeCert.skills.map((skill, idx) => (
                          <span key={idx} className="text-[10px] font-bold uppercase tracking-widest bg-light-blue dark:bg-slate-800 text-navy dark:text-slate-300 px-3 py-1.5 rounded-md border border-royal/10 dark:border-slate-700 transition-colors duration-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-10 pt-8 border-t border-royal/10 dark:border-slate-800 transition-colors duration-300">
                  <div className="flex gap-2 items-center">
                    {certifications.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 h-2 bg-gold shadow-sm shadow-gold/20' : 'w-2 h-2 bg-royal/20 dark:bg-slate-700 hover:bg-royal/40 dark:hover:bg-slate-600'}`}
                        aria-label={`Go to certificate ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={handlePrev}
                      className="h-10 w-10 rounded-full border-royal/30 dark:border-slate-700 bg-white dark:bg-slate-900 text-deep-navy dark:text-white hover:bg-gold hover:text-deep-navy hover:border-gold transition-all duration-300"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={handleNext}
                      className="h-10 w-10 rounded-full border-royal/30 dark:border-slate-700 bg-white dark:bg-slate-900 text-deep-navy dark:text-white hover:bg-gold hover:text-deep-navy hover:border-gold transition-all duration-300"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Screen Certificate Modal */}
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
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-[4/3] max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-deep-navy flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent z-10 flex flex-col">
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1">{selectedImage.issuer}</span>
                <span className="text-white text-xl md:text-2xl font-black">{selectedImage.title}</span>
              </div>
              
              <div className={`absolute inset-0 ${selectedImage.color} opacity-10`} />
              
              {/* Actual Certificate Document Image Placeholder */}
              <div className="relative w-full h-full flex items-center justify-center p-8 mt-12">
                 <div className="w-full h-full flex flex-col items-center justify-center border-4 border-double border-white/10 bg-white/5 rounded-sm relative z-10 p-10 text-center">
                    {selectedImage.icon}
                    <h2 className="text-white/60 font-black text-2xl md:text-4xl mt-6 mb-2 uppercase tracking-widest font-serif">Certificate</h2>
                    <p className="text-white/40 text-sm md:text-base font-medium max-w-md">
                      This is where the high-resolution certificate scan or image will be placed using <code className="bg-black/30 px-2 py-1 rounded mx-1 text-gold">object-contain</code>.
                    </p>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;