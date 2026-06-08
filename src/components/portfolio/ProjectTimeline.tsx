"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, CheckCircle2 } from 'lucide-react';

const ProjectTimeline = () => {
  const milestones = [
    {
      phase: "Discovery",
      date: "Week 1-2",
      title: "Research & Strategy",
      description: "Deep dive into user needs, competitor analysis, and technical feasibility studies.",
      icon: <Search className="h-5 w-5" />,
      status: "completed"
    },
    {
      phase: "Design",
      date: "Week 3-5",
      title: "UI/UX Prototyping",
      description: "Creating high-fidelity wireframes and interactive prototypes for stakeholder feedback.",
      icon: <PenTool className="h-5 w-5" />,
      status: "completed"
    },
    {
      phase: "Development",
      date: "Week 6-10",
      title: "Core Implementation",
      description: "Building the frontend architecture and integrating the backend microservices.",
      icon: <Code className="h-5 w-5" />,
      status: "completed"
    },
    {
      phase: "Launch",
      date: "Week 12",
      title: "Deployment & QA",
      description: "Rigorous testing, performance optimization, and final production rollout.",
      icon: <Rocket className="h-5 w-5" />,
      status: "completed"
    }
  ];

  return (
    <div className="my-20">
      <h3 className="text-2xl font-black uppercase tracking-tighter mb-12">Project Journey</h3>
      <div className="space-y-8">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-12 pb-8 border-l-2 border-border last:border-0 last:pb-0"
          >
            <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center z-10">
              <div className="text-primary">{m.icon}</div>
            </div>
            
            <div className="p-8 rounded-[2.5rem] border border-border bg-accent/30 hover:bg-white hover:border-primary/30 transition-all group">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <div>
                  <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">{m.phase} • {m.date}</div>
                  <h4 className="text-2xl font-black tracking-tighter">{m.title}</h4>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-[10px] font-black uppercase tracking-widest">
                  <CheckCircle2 className="h-3 w-3" /> Completed
                </div>
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed">{m.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;