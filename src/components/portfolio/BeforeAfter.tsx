"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && event.type !== 'mousemove') return;
    
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
    const relativeX = x - rect.left;
    const position = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    
    setSliderPosition(position);
  };

  return (
    <div className="my-20 space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">The Transformation</h3>
        <p className="text-muted-foreground font-medium">Slide to compare the legacy system with the new experience.</p>
      </div>

      <div 
        ref={containerRef}
        className="relative aspect-video rounded-[3rem] overflow-hidden border-4 border-black cursor-ew-resize select-none shadow-2xl"
        onMouseMove={handleMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After Image (Base) */}
        <div className="absolute inset-0 bg-primary flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-50">After</div>
            <div className="text-6xl font-black tracking-tighter">MODERN</div>
          </div>
        </div>

        {/* Before Image (Overlay) */}
        <div 
          className="absolute inset-0 bg-accent border-r-2 border-white z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-black/20">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Before</div>
              <div className="text-6xl font-black tracking-tighter">LEGACY</div>
            </div>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black rounded-full border-4 border-white flex items-center justify-center shadow-xl">
            <MoveHorizontal className="text-white h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;