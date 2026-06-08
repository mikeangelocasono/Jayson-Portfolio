"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search className="h-5 w-5" />,
      title: "Discovery",
      description: "We start by understanding your goals, target audience, and project requirements through deep research."
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "Design",
      description: "Creating intuitive user interfaces and seamless experiences that align with your brand identity."
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Development",
      description: "Turning designs into high-performance, scalable code using the latest modern technologies."
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Launch",
      description: "Rigorous testing and optimization followed by a smooth deployment to your production environment."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-3">My Creative Process</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base font-medium">
            A structured approach to delivering high-quality digital solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-10 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative p-6 rounded-[1.5rem] border border-border bg-accent/30 hover:bg-white hover:shadow-xl transition-all duration-500 group z-10"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-black text-sm shadow-lg group-hover:bg-primary transition-colors">
                {index + 1}
              </div>
              <div className="mb-6 p-3 rounded-xl bg-white text-primary border border-border w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-black tracking-tighter mb-2">{step.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed mb-5 font-medium">
                {step.description}
              </p>
              <div className="flex items-center text-primary font-black uppercase tracking-widest text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="ml-2 h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;