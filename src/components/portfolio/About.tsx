"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';
import { 
  GraduationCap, 
  Users, 
  Briefcase, 
  Code2, 
  Database, 
  Wrench, 
  Palette,
  CheckCircle2,
  BookOpen,
  User,
  MessageSquare,
  FolderKanban,
  RefreshCw,
  BrainCircuit,
  Clock,
  Flag,
  Puzzle
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-28">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold font-bold uppercase tracking-widest mb-4 border border-gold/20 text-[10px]">
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
        <div className="mb-20">
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
            <motion.div variants={slideInLeft} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-6 lg:p-8 hover:shadow-md transition-all duration-300 h-full">
              <h3 className="text-lg font-black text-deep-navy dark:text-white mb-6 flex items-center gap-3 transition-colors duration-300 border-b border-royal/10 dark:border-slate-800 pb-4">
                <span className="h-8 w-8 rounded-full bg-navy/10 dark:bg-slate-800 flex items-center justify-center text-navy dark:text-slate-300">
                  <User className="h-4 w-4" />
                </span>
                Personal Background
              </h3>
              
              <div className="relative pl-6 border-l-2 border-dashed border-light-blue dark:border-slate-700">
                <p className="text-sm text-dark-gray dark:text-slate-300 font-medium leading-relaxed mb-4 transition-colors duration-300">
                  I am a passionate junior web developer dedicated to creating intuitive, dynamic, and visually stunning digital experiences. With a keen eye for modern design aesthetics, I strive to bridge the gap between complex functionality and seamless user interaction.
                </p>
                <p className="text-sm text-dark-gray dark:text-slate-300 font-medium leading-relaxed transition-colors duration-300 mb-8">
                  When I'm not coding, I'm continuously exploring new technologies, participating in hackathons, and refining my skills to stay ahead in the fast-paced tech landscape.
                </p>
                
                <div className="grid grid-cols-3 gap-3">
                   <div className="bg-light-blue/40 dark:bg-slate-800 p-3 rounded-xl border border-royal/10 dark:border-slate-700 text-center">
                     <p className="text-[9px] font-bold uppercase tracking-widest text-navy dark:text-slate-400 mb-1">Age</p>
                     <p className="text-xs font-black text-deep-navy dark:text-white">22 Years Old</p>
                   </div>
                   <div className="bg-light-blue/40 dark:bg-slate-800 p-3 rounded-xl border border-royal/10 dark:border-slate-700 text-center">
                     <p className="text-[9px] font-bold uppercase tracking-widest text-navy dark:text-slate-400 mb-1">Location</p>
                     <p className="text-xs font-black text-deep-navy dark:text-white">Panabo City</p>
                   </div>
                   <div className="bg-light-blue/40 dark:bg-slate-800 p-3 rounded-xl border border-royal/10 dark:border-slate-700 text-center">
                     <p className="text-[9px] font-bold uppercase tracking-widest text-navy dark:text-slate-400 mb-1">Passion</p>
                     <p className="text-xs font-black text-deep-navy dark:text-white">Building Solutions</p>
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
                  <h4 className="text-base font-bold text-deep-navy dark:text-white transition-colors duration-300">Bachelor of Science in Information System</h4>
                  <p className="text-gold font-bold text-[10px] uppercase tracking-widest mt-1 mb-2">2021 - Present</p>
                  <p className="text-sm text-dark-gray dark:text-slate-400 font-medium transition-colors duration-300 bg-light-blue/30 dark:bg-slate-800/50 p-3 rounded-lg border border-royal/5 dark:border-slate-700">
                    Focusing on web development, software engineering, and system architecture. Consistent academic excellence.
                  </p>
                </div>
                <div className="relative pl-6 border-l-2 border-royal/30 dark:border-slate-700">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-royal/30 dark:bg-slate-700 shadow-[0_0_0_4px_#FFFFFF] dark:shadow-[0_0_0_4px_#0f172a]" />
                  <h4 className="text-base font-bold text-deep-navy dark:text-white transition-colors duration-300">Senior High School - TVL ICT</h4>
                  <p className="text-dark-gray dark:text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1 mb-2 transition-colors duration-300">2019 - 2021</p>
                  <p className="text-sm text-dark-gray dark:text-slate-400 font-medium transition-colors duration-300 bg-light-blue/30 dark:bg-slate-800/50 p-3 rounded-lg border border-royal/5 dark:border-slate-700">
                    Graduated with High Honors. Specialized in computer programming and digital technologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SUBSECTION 2: LEADERSHIP & PROFESSIONAL SKILLS */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-10 rounded-full bg-navy dark:bg-slate-800 text-white flex items-center justify-center shrink-0 border-[3px] border-light-blue dark:border-slate-700 shadow-sm">
              <Users className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-black text-deep-navy dark:text-white uppercase tracking-widest">Leadership & Professional Skills</h3>
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
            {/* Leadership & Organizations */}
            <motion.div variants={slideInLeft} className="bg-navy dark:bg-slate-900 border border-navy dark:border-slate-800 rounded-[1.5rem] p-6 lg:p-8 text-white shadow-lg relative overflow-hidden transition-colors duration-300 h-full">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold rounded-full blur-[80px] opacity-10 pointer-events-none" />
              
              <h3 className="text-lg font-black mb-6 flex items-center gap-3 relative z-10 text-white border-b border-white/10 pb-4">
                <span className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-gold">
                  <Users className="h-4 w-4" />
                </span>
                Leadership & Organizations
              </h3>
              
              <div className="space-y-6 relative z-10 pl-2">
                {[
                  { role: "President", org: "Society of Information Technology Enthusiasts", desc: "Spearheaded numerous tech events and led a team of 15 officers." },
                  { role: "Team Lead", org: "ASEAN AI Hackathon", desc: "Led the development team to secure a Top 15 finish internationally." },
                  { role: "Project Manager", org: "Capstone Project (SK Connect)", desc: "Managed end-to-end development, ensuring on-time delivery." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 shrink-0 bg-white/10 p-1 rounded-full h-fit">
                      <CheckCircle2 className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-white">{item.role}</h4>
                      <p className="text-light-blue dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1.5">{item.org}</p>
                      <p className="text-white/70 dark:text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Skills */}
            <motion.div variants={slideInRight} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-6 lg:p-8 hover:shadow-md transition-all duration-300 h-full">
              <h3 className="text-lg font-black text-deep-navy dark:text-white mb-6 flex items-center gap-3 transition-colors duration-300 border-b border-royal/10 dark:border-slate-800 pb-4">
                <span className="h-8 w-8 rounded-full bg-navy/10 dark:bg-slate-800 flex items-center justify-center text-navy dark:text-slate-300">
                  <Briefcase className="h-4 w-4" />
                </span>
                Professional Skills
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[
                  { name: "Communication", icon: MessageSquare },
                  { name: "Teamwork", icon: Users },
                  { name: "Project Management", icon: FolderKanban },
                  { name: "Problem-Solving", icon: Puzzle },
                  { name: "Adaptability", icon: RefreshCw },
                  { name: "Leadership", icon: Flag },
                  { name: "Critical Thinking", icon: BrainCircuit },
                  { name: "Time Management", icon: Clock }
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 bg-light-blue/20 dark:bg-slate-800/50 border border-royal/10 dark:border-slate-700 rounded-xl hover:border-navy/30 dark:hover:border-slate-500 transition-colors">
                    <skill.icon className="h-4 w-4 text-navy dark:text-slate-400 shrink-0" />
                    <span className="text-xs font-bold text-deep-navy dark:text-slate-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
            {/* Frontend */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-5 hover:shadow-lg dark:hover:border-slate-600 hover:border-navy transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-navy/10 dark:bg-slate-800 flex items-center justify-center text-navy dark:text-slate-300 mb-4 border border-transparent dark:border-slate-700">
                <Code2 className="h-4 w-4" />
              </div>
              <h4 className="text-base font-black mb-3 text-deep-navy dark:text-white transition-colors duration-300">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-light-blue dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-md text-[10px] font-bold text-navy dark:text-slate-300 transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-5 hover:shadow-lg dark:hover:border-slate-600 hover:border-royal transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-royal/10 dark:bg-slate-800 flex items-center justify-center text-royal dark:text-slate-300 mb-4 border border-transparent dark:border-slate-700">
                <Database className="h-4 w-4" />
              </div>
              <h4 className="text-base font-black mb-3 text-deep-navy dark:text-white transition-colors duration-300">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "REST API", "PostgreSQL", "Firebase"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-light-blue dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-md text-[10px] font-bold text-navy dark:text-slate-300 transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-5 hover:shadow-lg dark:hover:border-slate-600 hover:border-dark-gray transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-dark-gray dark:text-slate-300 mb-4 border border-transparent dark:border-slate-700">
                <Wrench className="h-4 w-4" />
              </div>
              <h4 className="text-base font-black mb-3 text-deep-navy dark:text-white transition-colors duration-300">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["Git & GitHub", "VS Code", "Figma", "Postman"].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-light-blue dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-md text-[10px] font-bold text-navy dark:text-slate-300 transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </motion.div>

            {/* Others */}
            <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-900 border border-royal/20 dark:border-slate-800 rounded-[1.5rem] p-5 hover:shadow-lg dark:hover:border-slate-600 hover:border-gold transition-all duration-300">
              <div className="h-8 w-8 rounded-xl bg-gold/10 dark:bg-slate-800 flex items-center justify-center text-gold-dark dark:text-gold mb-4 border border-transparent dark:border-slate-700">
                <Palette className="h-4 w-4" />
              </div>
              <h4 className="text-base font-black mb-3 text-deep-navy dark:text-white transition-colors duration-300">Others</h4>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Responsive Design", "Agile Methodology", "SEO Basics"].map(skill => (
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