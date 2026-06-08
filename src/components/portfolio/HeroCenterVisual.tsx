"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroCenterVisual = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10" />
      
      {/* Profile Image with Orange Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex items-center justify-center mb-8"
      >
        {/* Orange Circle Background */}
        <div className="absolute h-56 w-56 rounded-full bg-primary md:h-72 md:w-72 lg:h-80 lg:w-80" />
        
        {/* Profile Image */}
        <Image
          src="/Ron Profile.png"
          alt="Ronie"
          width={500}
          height={600}
          priority
          className="relative z-10 h-auto w-[240px] object-contain md:w-[320px] lg:w-[380px]"
        />
      </motion.div>

      {/* Large Name Typography */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-none tracking-tighter uppercase">
          Ronie<span className="text-primary">.</span>
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroCenterVisual;