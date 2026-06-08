"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  ShieldCheck, 
  Network, 
  Briefcase, 
  Palette, 
  Eye,
  Calendar,
  Building2
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations';
import Image from 'next/image';

const certificates = [
  {
    title: "Advanced Seminar Series Day 1",
    provider: "Davao del Norte State College",
    description: "Journey from Science Practitioner to Information Technology Specialist",
    date: "October 8, 2025",
    image: "/Certificates/day-1-seminar.jpg",
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Advanced Seminar Series Day 2",
    provider: "Davao del Norte State College",
    description: "The Power of Color in Graphic Design: Theory, Psychology, and Practice",
    date: "November 5, 2025",
    image: "/Certificates/day-2-seminar.jpg",
    icon: <Palette className="h-5 w-5" />
  },
  {
    title: "Introduction to Packet Tracer",
    provider: "Cisco Networking Academy",
    description: "Completed through the Cisco Networking Academy program",
    date: "February 5, 2024",
    image: "/Certificates/introduction-to-packet-tracer.jpg",
    icon: <Network className="h-5 w-5" />
  },
  {
    title: "Ethical Hacker",
    provider: "Cisco Networking Academy",
    description: "Completed through the Cisco Networking Academy program",
    date: "November 26, 2025",
    image: "/Certificates/ethical-hacker.jpg",
    icon: <ShieldCheck className="h-5 w-5" />
  },
  {
    title: "On-the-Job Training Completion",
    provider: "PropulseVA / Zappify",
    description: "486 hours of On-the-Job Training",
    date: "May 27, 2026",
    image: "/Certificates/propulseva-ojt.jpg",
    icon: <Briefcase className="h-5 w-5" />
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-sm text-primary text-[10px] font-black uppercase tracking-widest mb-4">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            CREDENTIALS
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-black">Certificates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-medium">
            Certifications and training certificates I've earned throughout my learning journey.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              {...cardHover}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer"
            >
              <div className="h-full p-6 rounded-[2rem] border border-border bg-white hover:border-primary/50 transition-all duration-500 group shadow-sm flex flex-col">
                <div className="mb-4 p-3 rounded-xl bg-primary/5 text-primary w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {cert.icon}
                </div>
                
                <div className="flex-grow space-y-3">
                  <h3 className="font-black text-lg tracking-tighter leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-3 w-3 text-primary/60" />
                      <span className="text-[9px] font-bold uppercase tracking-widest">{cert.provider}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-3 w-3 text-primary/60" />
                      <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] bg-primary/5 px-2 py-0.5 rounded-full">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-[11px] text-muted-foreground font-medium leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary">View Certificate</span>
                  <div className="h-7 w-7 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Eye className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="w-[95vw] max-w-6xl max-h-[92vh] p-0 border-none rounded-3xl bg-white overflow-hidden flex flex-col">
          <DialogHeader>
            <VisuallyHidden>
              <DialogTitle>{selectedCert?.title}</DialogTitle>
              <DialogDescription>{selectedCert?.description}</DialogDescription>
            </VisuallyHidden>
          </DialogHeader>

          <div className="flex items-center justify-between border-b border-border px-5 py-3 shrink-0">
            <div>
              <div className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">
                {selectedCert?.provider}
              </div>
              <h2 className="text-xl md:text-2xl font-black tracking-tighter leading-tight text-black">
                {selectedCert?.title}
              </h2>
            </div>
          </div>
          
          <div className="flex h-[78vh] w-full items-center justify-center bg-accent/10 p-3">
            {selectedCert && (
              <Image
                src={selectedCert.image}
                alt={`${selectedCert.title} certificate`}
                width={1400}
                height={900}
                className="max-h-full max-w-full object-contain"
                priority
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certificates;