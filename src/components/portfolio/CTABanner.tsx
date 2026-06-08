"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-black px-6 py-12 text-center text-white shadow-xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-5 leading-none text-white">
              Ready to bring your <br />
              <span className="text-primary">digital vision</span> to life?
            </h2>
            <p className="text-sm md:text-base text-white mb-8 font-medium leading-relaxed">
              Let's collaborate to create something extraordinary. I'm currently available for new projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button size="lg" className="rounded-full px-8 h-12 text-[10px] font-black uppercase tracking-widest bg-primary text-white hover:bg-white hover:text-black transition-all group">
                Start a Project <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-[10px] font-black uppercase tracking-widest border-2 border-white bg-white text-black hover:bg-primary hover:text-white hover:border-primary transition-all">
                Book a Call
              </Button>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-primary blur-[100px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;