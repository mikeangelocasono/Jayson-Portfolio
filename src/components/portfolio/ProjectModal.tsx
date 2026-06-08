"use client";

import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, CheckCircle2, X } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-none rounded-[3rem] bg-white">
        <div className="relative">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
          
          <div className="p-10 md:p-16 space-y-12">
            <DialogHeader>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((t: string) => (
                  <Badge key={t} variant="secondary" className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-primary text-white border-none">
                    {t}
                  </Badge>
                ))}
              </div>
              <DialogTitle className="text-4xl md:text-6xl font-black tracking-tighter leading-none">{project.title}</DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-black uppercase tracking-tighter border-b-2 border-primary w-fit pb-1">Overview</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    {project.longDescription || project.description}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-black uppercase tracking-tighter border-b-2 border-primary w-fit pb-1">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(project.features || ["Responsive Design", "User Authentication", "Real-time Updates"]).map((feature: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-8 p-8 rounded-[2rem] bg-accent/30 border border-border">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Role</h4>
                    <p className="font-black uppercase tracking-tighter text-lg">Lead Developer</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Timeline</h4>
                    <p className="font-black uppercase tracking-tighter text-lg">3 Months</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Button className="w-full h-14 rounded-full bg-black text-white hover:bg-primary font-black uppercase tracking-widest text-xs transition-all">
                    <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                  </Button>
                  <Button variant="outline" className="w-full h-14 rounded-full border-2 border-black font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
                    <Github className="mr-2 h-5 w-5" /> View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;