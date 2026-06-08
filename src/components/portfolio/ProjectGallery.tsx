"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ProjectGallery = () => {
  const images = [
    { title: "Dashboard View", category: "Interface" },
    { title: "Mobile Experience", category: "Responsive" },
    { title: "Design System", category: "Architecture" },
    { title: "User Flow", category: "UX Research" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative aspect-video rounded-[2.5rem] overflow-hidden border border-border bg-accent/30"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-black/5 font-black uppercase tracking-tighter text-4xl group-hover:scale-110 transition-transform duration-700">
              {img.title}
            </span>
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-10 text-center">
            <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">{img.category}</div>
            <h4 className="text-2xl font-black text-white tracking-tighter">{img.title}</h4>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGallery;