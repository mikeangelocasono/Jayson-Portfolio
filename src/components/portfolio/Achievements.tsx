"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, cardHover, scaleIn } from '@/lib/animations';
import { Trophy, Medal, Award, Star, Zap, Code, ExternalLink, Calendar, Building2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const achievements = [
  {
    title: "BYTEFEST Champion",
    category: "Competition",
    year: "2024",
    organization: "BYTEFEST Competition",
    description: "Recognized as champion for outstanding project performance and innovation in the annual web development tournament.",
    image: "/awards/bytefest.png", // Placeholder
    icon: <Trophy className="h-5 w-5 text-gold" />,
    isMajor: true,
    highlights: ["Overall Champion", "Project Innovation", "Technical Excellence"]
  },
  {
    title: "Saludo Champion",
    category: "Award",
    year: "2023",
    organization: "Saludo Awards",
    description: "Awarded as the overall champion for outstanding performance and project execution among all participants.",
    image: "/awards/saludo.png", // Placeholder
    icon: <Medal className="h-5 w-5 text-gold" />,
    isMajor: true,
    highlights: ["Overall Champion", "Project Execution", "Team Performance"]
  },
  {
    title: "ASEAN AI Hackathon Top 15",
    category: "Recognition",
    year: "2023",
    organization: "ASEAN AI Hackathon",
    description: "Placed in the Top 15 across Southeast Asia for developing innovative AI-driven web solutions.",
    image: "/awards/asean-ai-hackathon.png", // Placeholder
    icon: <Award className="h-5 w-5 text-navy dark:text-slate-300" />,
    isMajor: false,
    highlights: ["Top 15 Finalist", "AI Innovation", "Southeast Asia Region"]
  },
  {
    title: "Best Project Presenter",
    category: "Award",
    year: "2023",
    organization: "Annual Tech Symposium",
    description: "Awarded for exceptional communication and technical presentation skills during the project defense.",
    image: "/awards/presenter.png", // Placeholder
    icon: <Star className="h-5 w-5 text-royal dark:text-slate-300" />,
    isMajor: false,
    highlights: ["Best Speaker", "Clear Communication", "Technical Defense"]
  },
  {
    title: "Leadership Recognition",
    category: "Recognition",
    year: "2022",
    organization: "Student Developer Group",
    description: "Recognized for leading technical teams to success in high-pressure environments and delivering on time.",
    image: "/awards/leadership.png", // Placeholder
    icon: <Zap className="h-5 w-5 text-royal dark:text-slate-300" />,
    isMajor: false,
    highlights: ["Team Leadership", "Project Management", "Agile Execution"]
  },
  {
    title: "Research Innovation Award",
    category: "Award",
    year: "2022",
    organization: "University Research Council",
    description: "Awarded for pioneering research in modern web architecture, performance optimization, and scalable systems.",
    image: "/awards/research.png", // Placeholder
    icon: <Code className="h-5 w-5 text-navy dark:text-slate-300" />,
    isMajor: false,
    highlights: ["Web Architecture", "Performance Research", "Scalability"]
  }
];

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);

  return (
    <section id="achievements" className="py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      


      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 relative z-10">
        
        {/* Header */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-[10px] font-bold uppercase tracking-widest mb-4 border border-gold/20 backdrop-blur-sm">
            Our Excellence
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-deep-navy dark:text-white tracking-tighter transition-colors duration-300 mb-4">
            Achievements & Awards
          </h2>
          <p className="text-sm md:text-base text-dark-gray dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Recognitions, competitions, and awards that highlight my growth, dedication, and excellence in web development. Click any card to view details.
          </p>
        </motion.div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <motion.div 
                {...cardHover}
                onClick={() => setSelectedAchievement(achievement)}
                className={`relative cursor-pointer h-full border ${achievement.isMajor ? 'bg-deep-navy border-gold shadow-lg shadow-gold/10' : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-royal/20 dark:border-slate-800 shadow-sm'} rounded-[1.5rem] p-6 transition-all duration-300 group hover:border-gold hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${achievement.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedAchievement(achievement);
                  }
                }}
              >
                {achievement.isMajor && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-gold text-deep-navy text-[9px] font-black uppercase tracking-widest py-1 px-3 rounded-full flex items-center gap-1 shadow-md shadow-gold/20">
                    <Star className="h-3 w-3 fill-current" /> Major Award
                  </div>
                )}
                
                <div className="flex flex-col gap-5 h-full">
                  <div className="flex justify-between items-start">
                    <div className={`h-12 w-12 rounded-xl ${achievement.isMajor ? 'bg-navy border-gold/30' : 'bg-light-blue dark:bg-slate-800 border-royal/10 dark:border-slate-700'} flex items-center justify-center border transition-colors duration-300`}>
                      {achievement.icon}
                    </div>
                    <span className={`text-[9px] font-bold border px-2 py-1 rounded-md transition-colors duration-300 ${achievement.isMajor ? 'text-white border-gold/30 bg-navy' : 'text-deep-navy dark:text-slate-300 border-royal/10 dark:border-slate-700 bg-light-blue dark:bg-slate-800'}`}>
                      {achievement.year}
                    </span>
                  </div>
                  
                  <div className="flex flex-col flex-1">
                    <span className={`text-[9px] font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${achievement.isMajor ? 'text-gold' : 'text-royal dark:text-slate-400'}`}>
                      {achievement.category}
                    </span>
                    
                    <h3 className={`text-lg font-black mb-2 transition-colors duration-300 line-clamp-2 ${achievement.isMajor ? 'text-white' : 'text-deep-navy dark:text-white group-hover:text-royal dark:group-hover:text-gold'}`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-sm font-medium leading-relaxed transition-colors duration-300 line-clamp-3 ${achievement.isMajor ? 'text-slate-300' : 'text-dark-gray dark:text-slate-400'}`}>
                      {achievement.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 flex items-center justify-end border-t border-royal/10 dark:border-slate-800/50">
                    <span className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 transition-colors duration-300 ${achievement.isMajor ? 'text-gold' : 'text-royal dark:text-slate-400 group-hover:text-gold'}`}>
                      View Details <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* shadcn/ui Dialog Modal for Award Details */}
      <Dialog open={!!selectedAchievement} onOpenChange={(open) => !open && setSelectedAchievement(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white dark:bg-slate-950 border-royal/20 dark:border-slate-800 rounded-2xl md:rounded-3xl shadow-2xl">
          {selectedAchievement && (
            <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] md:max-h-[80vh] overflow-y-auto md:overflow-y-visible">
              
              {/* Left: Image Viewer */}
              <div className="relative bg-light-blue/50 dark:bg-slate-900 border-b md:border-b-0 md:border-r border-royal/10 dark:border-slate-800 flex items-center justify-center min-h-[300px] md:min-h-full p-6 md:p-10">
                <div className="absolute inset-0 bg-grid-royal/5 dark:bg-grid-slate-700/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
                <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square max-w-sm mx-auto shadow-2xl rounded-xl overflow-hidden border border-royal/20 dark:border-slate-700 bg-white dark:bg-slate-950">
                  {/* Fallback styling just in case the placeholder image is missing */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-50 dark:bg-slate-900">
                    {selectedAchievement.icon}
                    <span className="text-xs font-bold text-slate-400 mt-4 uppercase tracking-widest">Image Unavailable</span>
                  </div>
                  
                  {/* Next.js Image Component */}
                  <Image 
                    src={selectedAchievement.image} 
                    alt={selectedAchievement.title}
                    fill
                    className="object-contain relative z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Award Details */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col">
                <DialogHeader className="text-left mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded-md border border-gold/20">
                      {selectedAchievement.category}
                    </span>
                    {selectedAchievement.isMajor && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-deep-navy px-2 py-1 rounded-md border border-royal/30 flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" /> Major Award
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

                <div className="space-y-6 mt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1 p-3 rounded-xl bg-light-blue/30 dark:bg-slate-900 border border-royal/10 dark:border-slate-800">
                      <span className="text-[10px] font-bold text-royal dark:text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Date Awarded
                      </span>
                      <span className="text-sm font-black text-deep-navy dark:text-white">
                        {selectedAchievement.year}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 p-3 rounded-xl bg-light-blue/30 dark:bg-slate-900 border border-royal/10 dark:border-slate-800">
                      <span className="text-[10px] font-bold text-royal dark:text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        <Building2 className="h-3 w-3" /> Organization
                      </span>
                      <span className="text-sm font-black text-deep-navy dark:text-white">
                        {selectedAchievement.organization}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-deep-navy dark:text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                      Key Highlights <span className="h-px flex-1 bg-royal/10 dark:bg-slate-800"></span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedAchievement.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-dark-gray dark:text-slate-400 font-medium">
                          <Star className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
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
