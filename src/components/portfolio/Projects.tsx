"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHover, buttonHover } from '@/lib/animations';
import { projects } from '@/lib/data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState<any>(null);
  const [filter, setFilter] = React.useState("All");

  const categories = ["All", "Web", "System", "Website"];

  const filteredProjects = React.useMemo(() => {
    if (filter === "All") return projects;
    if (filter === "Web") return projects; // All current projects are web-based
    return projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-3 text-black">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 font-medium text-sm md:text-base">
            A selection of my recent work where I've applied my skills to solve real-world problems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <motion.div key={cat} {...buttonHover}>
                <Button
                  variant={filter === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-5 font-bold uppercase tracking-widest text-[8px] h-8 transition-all ${
                    filter === cat ? 'bg-black text-white' : 'border-2 border-black/10 text-black hover:border-black hover:bg-black hover:text-white'
                  }`}
                >
                  {cat}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={fadeInUp}
                {...cardHover}
              >
                <Card className="group h-full overflow-hidden border-border bg-white hover:border-primary/50 hover:shadow-xl transition-all duration-500 rounded-[1.5rem]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-accent">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-2 p-4">
                      <motion.div {...buttonHover} className="w-full max-w-[140px]">
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          className="rounded-full w-full font-bold uppercase tracking-widest text-[8px] bg-white text-black hover:bg-primary hover:text-white h-9"
                          onClick={() => setSelectedProject(project)}
                        >
                          <Maximize2 className="mr-2 h-3 w-3" /> Quick View
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                  <CardHeader className="p-5 pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-black tracking-tighter text-black">{project.title}</CardTitle>
                      <Badge className="bg-primary text-white font-black uppercase tracking-widest text-[6px] px-1.5 py-0.5 border-none">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <p className="text-muted-foreground text-[11px] leading-relaxed font-medium line-clamp-2">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="px-5 pb-5 pt-0 gap-2">
                    <motion.div {...buttonHover} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full rounded-full border-2 border-black/10 text-black hover:border-black hover:bg-black hover:text-white font-bold uppercase tracking-widest text-[8px] h-8">
                        <Github className="mr-2 h-3 w-3" /> Code
                      </Button>
                    </motion.div>
                    <motion.div {...buttonHover} className="flex-1">
                      <Button size="sm" className="w-full rounded-full bg-black text-white hover:bg-primary font-bold uppercase tracking-widest text-[8px] h-8">
                        <ExternalLink className="mr-2 h-3 w-3" /> Demo
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;