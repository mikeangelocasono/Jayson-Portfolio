"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices or small screens
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationFrameId: number;

    const moveMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Initially snap cursor to mouse to prevent starting from 0,0
      if (cursorRef.current && cursorRef.current.style.opacity === '0') {
         cursorRef.current.style.opacity = '1';
         cursorX = mouseX;
         cursorY = mouseY;
         cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHover = !!target.closest('a, button, .cursor-pointer, input, textarea');
      
      if (cursorRef.current) {
        if (isHover) {
          cursorRef.current.style.width = '60px';
          cursorRef.current.style.height = '60px';
          cursorRef.current.style.backgroundColor = 'rgba(6, 42, 92, 0.1)';
          cursorRef.current.style.borderWidth = '2px';
        } else {
          cursorRef.current.style.width = '20px';
          cursorRef.current.style.height = '20px';
          cursorRef.current.style.backgroundColor = 'rgba(6, 42, 92, 0.2)';
          cursorRef.current.style.borderWidth = '1px';
        }
      }
    };

    const animate = () => {
      // Smooth follow with lerp. 1 = instant, 0.1 = loose. 0.4 feels snappy and smooth.
      cursorX += (mouseX - cursorX) * 0.4;
      cursorY += (mouseY - cursorY) * 0.4;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', moveMouse, { passive: true });
    window.addEventListener('mouseover', handleHover, { passive: true });
    animate();

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHover);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block rounded-full transition-[width,height,background-color,border-width] duration-300 ease-out`}
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: 'rgba(6, 42, 92, 0.2)',
        borderWidth: '1px',
        borderColor: 'rgba(6, 42, 92, 1)',
        opacity: 0,
        willChange: 'transform, width, height, background-color',
      }}
    />
  );
};

export default CustomCursor;