"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '@/lib/animations';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Prof. Maria Santos",
      role: "IT Department Head, University",
      message: "Ronie has consistently demonstrated exceptional programming skills and a deep understanding of software engineering principles. His capstone project was one of the best in his batch.",
      avatar: "MS"
    },
    {
      name: "Juan Dela Cruz",
      role: "Owner, Green Bean Café",
      message: "The POS system Ronie built for our café completely transformed how we handle daily transactions. It's fast, reliable, and incredibly easy for my staff to use.",
      avatar: "JD"
    },
    {
      name: "Sarah Lim",
      role: "Event Coordinator, SSC",
      message: "Working with Ronie to develop our student council management system was a breeze. He listened to our needs and delivered a platform that exceeded our expectations.",
      avatar: "SL"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-light-blue/30 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-28">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-[10px] font-bold uppercase tracking-widest mb-4 border border-gold/20">
            Feedback
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-deep-navy dark:text-white tracking-tighter transition-colors duration-300">
            What People Say
          </h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              {...cardHover}
              className="bg-white dark:bg-slate-900 border border-royal/10 dark:border-slate-800 rounded-[1.5rem] p-6 hover:shadow-lg dark:hover:shadow-none hover:border-gold/30 dark:hover:border-gold/50 transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-gold/20 dark:text-gold/10">
                <Quote size={36} />
              </div>
              
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="h-12 w-12 rounded-full bg-navy dark:bg-slate-800 text-white flex items-center justify-center font-black text-base border-2 border-white dark:border-slate-700 shadow-md dark:shadow-none transition-colors duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-deep-navy dark:text-white text-base leading-tight transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-[10px] font-bold text-dark-gray dark:text-slate-400 uppercase tracking-widest mt-0.5 transition-colors duration-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-dark-gray dark:text-slate-300 font-medium leading-relaxed relative z-10 italic transition-colors duration-300">
                "{testimonial.message}"
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;