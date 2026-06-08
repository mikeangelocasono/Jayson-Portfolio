"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { 
  Download, 
  MessageSquare, 
  Target, 
  Monitor, 
  Code2, 
  Rocket, 
  Lightbulb, 
  Zap, 
  User 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    {
      value: "4+",
      label: "YEARS OF EXPLORING",
      icon: <Target className="h-12 w-12 opacity-10" />,
      className: "bg-black text-white",
      valueColor: "text-primary"
    },
    {
      value: "3+",
      label: "PROJECTS COMPLETED",
      icon: <Monitor className="h-12 w-12 opacity-20" />,
      className: "bg-primary text-white",
      valueColor: "text-white"
    },
    {
      value: "10+",
      label: "TECHNOLOGIES LEARNED",
      icon: <Code2 className="h-12 w-12 opacity-10" />,
      className: "bg-white text-black border border-border shadow-sm",
      valueColor: "text-primary"
    },
    {
      value: "100%",
      label: "PASSION FOR GROWTH",
      icon: <Rocket className="h-12 w-12 opacity-10" />,
      className: "bg-white text-black border border-border shadow-sm",
      valueColor: "text-primary"
    }
  ];

  const features = [
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Creative Vision",
      description: "Blending clean design with functional web experiences."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Fast Execution",
      description: "Building responsive layouts with efficient workflows."
    },
    {
      icon: <User className="h-6 w-6 text-primary" />,
      title: "User-Centric",
      description: "Designing interfaces that are simple, accessible, and easy to use."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Left Content */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-sm text-primary text-[10px] font-black uppercase tracking-widest">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              ABOUT ME
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-black">
              Crafting digital <br />
              <span className="text-muted-foreground/40">experiences</span> <br />
              that matter<span className="text-primary">.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-xl">
              I'm Ronie, a junior web developer based in Panabo City. 
              I focus on building clean, responsive, and user-friendly 
              web experiences using modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="h-14 px-8 rounded-2xl bg-primary text-white hover:bg-primary/90 font-black uppercase tracking-widest text-[10px] gap-3 shadow-lg shadow-primary/20">
                <Download className="h-4 w-4" /> DOWNLOAD CV
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-border bg-white text-black hover:bg-accent font-black uppercase tracking-widest text-[10px] gap-3">
                <MessageSquare className="h-4 w-4" /> LET'S CONNECT
              </Button>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`relative p-8 rounded-[2.5rem] flex flex-col justify-between aspect-square overflow-hidden ${stat.className}`}
              >
                <div className="relative z-10">
                  <div className={`text-4xl font-black mb-2 ${stat.valueColor}`}>{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest leading-tight opacity-80">
                    {stat.label.split(' ').map((word, idx) => (
                      <React.Fragment key={idx}>{word}<br /></React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-6 right-6">
                  {stat.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Feature Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="p-10 rounded-[2.5rem] bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-black tracking-tighter">{feature.title}</h4>
                  <div className="h-0.5 w-8 bg-primary/30" />
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;