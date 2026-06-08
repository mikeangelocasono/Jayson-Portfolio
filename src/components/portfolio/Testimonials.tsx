"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechFlow",
      content: "Working with this developer was a game-changer for our startup. The attention to detail and speed of delivery were exceptional."
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "The UI/UX design skills are top-notch. Our user engagement increased by 40% after the redesign. The code quality is excellent."
    },
    {
      name: "Emily Davis",
      role: "Founder of Bloom",
      content: "Professional, communicative, and highly skilled. I couldn't have asked for a better partner for our web project."
    }
  ];

  return (
    <section className="py-20 bg-accent/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-3">Client Testimonials</h2>
            <p className="text-muted-foreground text-sm md:text-base font-medium">
              Don't just take my word for it. Here's what industry leaders have to say.
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollPrev}
              className="rounded-full h-9 w-9 border-2 border-black/10 bg-white hover:border-primary hover:text-primary transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollNext}
              className="rounded-full h-9 w-9 border-2 border-black/10 bg-white hover:border-primary hover:text-primary transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((t, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3">
                <Card className="h-full border-border bg-white hover:border-primary/30 transition-all duration-500 rounded-[1.5rem] overflow-hidden">
                  <CardContent className="pt-6 pb-6 px-6 flex flex-col h-full">
                    <Quote className="h-6 w-6 text-primary/10 mb-5" />
                    <p className="text-muted-foreground mb-6 italic text-[11px] font-medium flex-grow leading-relaxed">"{t.content}"</p>
                    <div className="flex items-center gap-3 pt-5 border-t border-border">
                      <div className="h-8 w-8 rounded-lg bg-primary/5 flex items-center justify-center font-black text-primary text-sm">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-black uppercase tracking-tighter text-sm">{t.name}</div>
                        <div className="text-[7px] font-bold uppercase tracking-widest text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;