"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import HeroTopButtons from './HeroTopButtons';
import HeroCenterVisual from './HeroCenterVisual';
import HeroTechStack from './HeroTechStack';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="whileInView"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"
      >
        {/* Top Action Buttons */}
        <HeroTopButtons />

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-0">
          {/* Left Text Block - Role */}
          <motion.div 
            variants={fadeInUp}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="w-12 h-1 bg-primary mb-6 mx-auto lg:mx-0" />
            <h2 className="text-2xl md:text-3xl font-black text-black tracking-tighter uppercase leading-tight">
              Junior Web <br />
              <span className="text-muted-foreground">Developer</span>
            </h2>
            <p className="mt-4 text-[9px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
              Based in Panabo City
            </p>
          </motion.div>

          {/* Center Visual Area */}
          <div className="order-1 lg:order-2">
            <HeroCenterVisual />
          </div>

          {/* Right Text Block - Intro */}
          <motion.div 
            variants={fadeInUp}
            className="order-3 text-center lg:text-right"
          >
            <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-xs mx-auto lg:ml-auto lg:mr-0">
              Hi, I’m Ronie, a junior web developer who enjoys building responsive, modern, and easy-to-use websites with a focus on clean design and great user experience.
            </p>
            <div className="mt-8 flex justify-center lg:justify-end gap-4">
              <div className="h-px w-12 bg-black/10 self-center" />
              <span className="text-[9px] font-black text-primary uppercase tracking-widest">Scroll to explore</span>
            </div>
          </motion.div>
        </div>

        {/* Lower Tech Stack Row */}
        <HeroTechStack />
      </motion.div>
    </section>
  );
};

export default Hero;