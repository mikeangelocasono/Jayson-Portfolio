"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, slideInLeft, slideInRight, cardHover } from '@/lib/animations';
import { 
  GraduationCap, 
  Users, 
  Code2, 
  Database, 
  Palette,
  BookOpen,
  User,
  Briefcase,
  FolderKanban,
  MonitorSmartphone,
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-28">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark font-bold uppercase tracking-widest mb-4 border border-gold/20 text-[10px]">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-deep-navy dark:text-white tracking-tighter transition-colors duration-300">
            My Journey & Expertise
          </h2>
          <p className="text-sm text-dark-gray dark:text-slate-400 font-medium mt-4 max-w-2xl mx-auto transition-colors duration-300">
            A summary of my background, education, leadership experience, and professional skills.
          </p>
        </div>

        {/* SUBSECTION 1: BACKGROUND & EDUCATION */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-10 rounded-full bg-navy dark:bg-slate-800 text-white flex items-center justify-center shrink-0 border-[3px] border-light-blue dark:border-slate-700 shadow-sm">
              <BookOpen className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-black text-deep-navy dark:text-white uppercase tracking-widest">Background & Education</h3>
            <div className="flex-grow h-px bg-royal/20 dark:bg-slate-800" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Personal Background */}
            <motion.div variants={slideInLeft} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-6 lg:p-8 hover:shadow-md transition-all duration-300 h-full flex flex-col">
              <h3 className="text-lg font-black text-deep-navy dark:text-white mb-6 flex items-center gap-3 transition-colors duration-300 border-b border-royal/10 dark:border-slate-800 pb-4">
                <span className="h-8 w-8 rounded-full bg-navy/10 dark:bg-slate-800 flex items-center justify-center text-navy dark:text-slate-300">
                  <User className="h-4 w-4" />
                </span>
                Personal Background
              </h3>
              
              <div className="relative pl-6 border-l-2 border-dashed border-light-blue dark:border-slate-700 flex-1">
                <p className="text-sm text-dark-gray dark:text-slate-300 font-medium leading-relaxed mb-4 transition-colors duration-300">
                  I am Jayson S. Balbiran, a BS Information Systems student, freelance designer, developer, and student leader from Panabo City. Throughout my academic journey, I have led and contributed to various technology, research, and innovation projects focused on digital transformation, process automation, and community development.
                </p>
                <p className="text-sm text-dark-gray dark:text-slate-300 font-medium leading-relaxed mb-4 transition-colors duration-300">
                  My interests include web development, systems analysis and design, business process management, UI/UX design, entrepreneurship, and emerging technologies. I am passionate about creating practical solutions that improve efficiency, transparency, and user experience across organizations and communities.
                </p>
                <p className="text-sm text-dark-gray dark:text-slate-300 font-medium leading-relaxed transition-colors duration-300 mb-8">
                  Beyond academics, I actively participate in hackathons, pitching competitions, research conferences, and leadership initiatives that promote innovation and technological advancement.
                </p>
                
                <div className="grid grid-cols-3 gap-3 mt-auto">
                   <div className="bg-light-blue/40 dark:bg-slate-800 p-3 rounded-xl border border-royal/10 dark:border-slate-700 text-center flex flex-col justify-center">
                     <p className="text-[9px] font-bold uppercase tracking-widest text-navy dark:text-slate-400 mb-1">Age</p>
                     <p className="text-xs font-black text-deep-navy dark:text-white">22 Years Old</p>
                   </div>
                   <div className="bg-light-blue/40 dark:bg-slate-800 p-3 rounded-xl border border-royal/10 dark:border-slate-700 text-center flex flex-col justify-center">
                     <p className="text-[9px] font-bold uppercase tracking-widest text-navy dark:text-slate-400 mb-1">Location</p>
                     <p className="text-xs font-black text-deep-navy dark:text-white">Panabo City, Ph.</p>
                   </div>
                   <div className="bg-light-blue/40 dark:bg-slate-800 p-3 rounded-xl border border-royal/10 dark:border-slate-700 text-center flex flex-col justify-center">
                     <p className="text-[9px] font-bold uppercase tracking-widest text-navy dark:text-slate-400 mb-1">Passion</p>
                     <p className="text-[9px] leading-[1.2] font-black text-deep-navy dark:text-white">Teaching, Innovation & Solutions</p>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Educational Journey */}
            <motion.div variants={slideInRight} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-6 lg:p-8 hover:shadow-md transition-all duration-300 h-full">
              <h3 className="text-lg font-black text-deep-navy dark:text-white mb-6 flex items-center gap-3 transition-colors duration-300 border-b border-royal/10 dark:border-slate-800 pb-4">
                <span className="h-8 w-8 rounded-full bg-navy/10 dark:bg-slate-800 flex items-center justify-center text-navy dark:text-slate-300">
                  <GraduationCap className="h-4 w-4" />
                </span>
                Educational Journey
              </h3>
              
              <div className="space-y-8 pl-2">
                <div className="relative pl-6 border-l-2 border-gold">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gold shadow-[0_0_0_4px_#FFFFFF] dark:shadow-[0_0_0_4px_#0f172a]" />
                  <h4 className="text-base font-bold text-deep-navy dark:text-white transition-colors duration-300 leading-tight">Bachelor of Science in Information Systems</h4>
                  <p className="text-gold font-bold text-[10px] uppercase tracking-widest mt-1 mb-2">2022 - 2026 • Davao del Norte State College</p>
                  <p className="text-sm text-dark-gray dark:text-slate-400 font-medium transition-colors duration-300 bg-light-blue/30 dark:bg-slate-800/50 p-3 rounded-lg border border-royal/5 dark:border-slate-700">
                    Graduated as a Cum Laude. Developed strong knowledge and practical experience in information systems, web development, database management, software engineering, business process management, and digital innovation. Actively participated in research, technology competitions, leadership initiatives, and community-based projects.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-royal/30 dark:border-slate-700">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-royal/30 dark:bg-slate-700 shadow-[0_0_0_4px_#FFFFFF] dark:shadow-[0_0_0_4px_#0f172a]" />
                  <h4 className="text-base font-bold text-deep-navy dark:text-white transition-colors duration-300 leading-tight">Senior High School – General Academic Strand (GAS)</h4>
                  <p className="text-dark-gray dark:text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1 mb-2 transition-colors duration-300">2020 - 2022 • Malativas National High School</p>
                  <p className="text-sm text-dark-gray dark:text-slate-400 font-medium transition-colors duration-300 bg-light-blue/30 dark:bg-slate-800/50 p-3 rounded-lg border border-royal/5 dark:border-slate-700">
                    Graduated as Valedictorian and awarded With High Honors. Demonstrated academic excellence, leadership, and active involvement in school and community activities.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-royal/30 dark:border-slate-700">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-royal/30 dark:bg-slate-700 shadow-[0_0_0_4px_#FFFFFF] dark:shadow-[0_0_0_4px_#0f172a]" />
                  <h4 className="text-base font-bold text-deep-navy dark:text-white transition-colors duration-300 leading-tight">Junior High School</h4>
                  <p className="text-dark-gray dark:text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1 mb-2 transition-colors duration-300">2016 - 2020 • Malativas National High School</p>
                  <p className="text-sm text-dark-gray dark:text-slate-400 font-medium transition-colors duration-300 bg-light-blue/30 dark:bg-slate-800/50 p-3 rounded-lg border border-royal/5 dark:border-slate-700">
                    Consistent Top 1 Student and recipient of With Honors recognition throughout junior high school, reflecting dedication, discipline, and commitment to academic excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SUBSECTION 2: LEADERSHIP & PROFESSIONAL EXPERIENCE */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-10 rounded-full bg-navy dark:bg-slate-800 text-white flex items-center justify-center shrink-0 border-[3px] border-light-blue dark:border-slate-700 shadow-sm">
              <Users className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-black text-deep-navy dark:text-white uppercase tracking-widest">Leadership & Professional Experience</h3>
            <div className="flex-grow h-px bg-royal/20 dark:bg-slate-800" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                role: "DPDM Secretary",
                org: "Federal Student Government",
                year: "A.Y. 2025–2026",
                desc: "Managed and monitored income-generating projects (IGPs), developed digital systems to improve organizational operations, and assisted in planning, documentation, and implementation of student government initiatives.",
                highlight: true
              },
              {
                role: "Project Manager",
                org: "Income-Generating Project Management Information System",
                year: "February 2025 – June 2026",
                desc: "Directed the end-to-end development lifecycle of the capstone project, coordinating project planning, system design, development, testing, and deployment while ensuring timely completion and stakeholder satisfaction.",
                highlight: true
              },
              {
                role: "IC Representative",
                org: "Supreme Student Government",
                year: "A.Y. 2024–2025",
                desc: "Represented the Institute of Computing in student governance, authored and deliberated resolutions, and developed digital systems that enhanced organizational efficiency and student engagement.",
                highlight: false
              },
              {
                role: "Team Lead",
                org: "ASEAN AI Hackathon",
                year: "April 2026 – May 2026",
                desc: "Led a multidisciplinary development team in designing and presenting an AI-driven solution, achieving a Top 15 ranking among participating teams across ASEAN countries.",
                highlight: false
              },
              {
                role: "Treasurer",
                org: "Institute of Computing Student Association",
                year: "A.Y. 2022–2023",
                desc: "Oversaw organizational finances, prepared financial reports, maintained accurate records of transactions, and ensured responsible fund management.",
                highlight: false
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                {...cardHover}
                className={`relative bg-white dark:bg-slate-900 border ${item.highlight ? 'border-gold/40 shadow-lg shadow-gold/5 dark:shadow-none' : 'border-royal/20 dark:border-slate-800 shadow-sm'} rounded-[1.5rem] p-6 transition-all duration-300 h-full flex flex-col`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`h-10 w-10 rounded-xl ${item.highlight ? 'bg-gold/10 text-gold-dark' : 'bg-light-blue dark:bg-slate-800 text-royal dark:text-slate-300'} flex items-center justify-center mb-2 border border-transparent transition-colors duration-300`}>
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <span className="text-[9px] font-bold text-deep-navy dark:text-slate-300 bg-light-blue dark:bg-slate-800 border border-royal/10 dark:border-slate-700 px-2 py-1 rounded-md transition-colors duration-300">{item.year}</span>
                </div>
                
                <h4 className="text-lg font-black text-deep-navy dark:text-white mb-1 transition-colors duration-300">{item.role}</h4>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 transition-colors duration-300 ${item.highlight ? 'text-gold' : 'text-royal dark:text-slate-400'}`}>{item.org}</p>
                <p className="text-sm text-dark-gray dark:text-slate-400 font-medium leading-relaxed transition-colors duration-300 mt-auto">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SUBSECTION 3: TECHNICAL SKILLS */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-10 rounded-full bg-navy dark:bg-slate-800 text-white flex items-center justify-center shrink-0 border-[3px] border-light-blue dark:border-slate-700 shadow-sm">
              <Code2 className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-black text-deep-navy dark:text-white uppercase tracking-widest">Technical Skills</h3>
            <div className="flex-grow h-px bg-royal/20 dark:bg-slate-800" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Development */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-5 hover:shadow-lg dark:hover:border-slate-600 hover:border-navy transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-navy/10 dark:bg-slate-800 flex items-center justify-center text-navy dark:text-slate-300 mb-4 border border-transparent dark:border-slate-700">
                <MonitorSmartphone className="h-4 w-4" />
              </div>
              <h4 className="text-base font-black mb-3 text-deep-navy dark:text-white transition-colors duration-300">Development</h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "Tailwind CSS"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-light-blue dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-md text-[10px] font-bold text-navy dark:text-slate-300 transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Information Systems */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-5 hover:shadow-lg dark:hover:border-slate-600 hover:border-royal transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-royal/10 dark:bg-slate-800 flex items-center justify-center text-royal dark:text-slate-300 mb-4 border border-transparent dark:border-slate-700">
                <Database className="h-4 w-4" />
              </div>
              <h4 className="text-base font-black mb-3 text-deep-navy dark:text-white transition-colors duration-300">Information Systems</h4>
              <div className="flex flex-wrap gap-2">
                {["Systems Analysis & Design", "BPMN", "SDLC", "Database Design", "Requirements Analysis"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-light-blue dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-md text-[10px] font-bold text-navy dark:text-slate-300 transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Design & Multimedia */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-5 hover:shadow-lg dark:hover:border-slate-600 hover:border-gold transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-gold/10 dark:bg-slate-800 flex items-center justify-center text-gold-dark dark:text-gold mb-4 border border-transparent dark:border-slate-700">
                <Palette className="h-4 w-4" />
              </div>
              <h4 className="text-base font-black mb-3 text-deep-navy dark:text-white transition-colors duration-300">Design & Multimedia</h4>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Figma", "Canva", "Graphic Design", "Video Editing"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-light-blue dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-md text-[10px] font-bold text-navy dark:text-slate-300 transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Professional Skills */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-5 hover:shadow-lg dark:hover:border-slate-600 hover:border-dark-gray transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-dark-gray dark:text-slate-300 mb-4 border border-transparent dark:border-slate-700">
                <FolderKanban className="h-4 w-4" />
              </div>
              <h4 className="text-base font-black mb-3 text-deep-navy dark:text-white transition-colors duration-300">Professional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Project Management", "Team Leadership", "Research", "Technical Writing", "Agile Collaboration"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-light-blue dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-md text-[10px] font-bold text-navy dark:text-slate-300 transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;