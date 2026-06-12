"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects & Research', href: '#projects' },
    { name: 'Achievements & Certifications', href: '#achievements' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="fixed top-0 w-full z-50 bg-navy/95 backdrop-blur-xl border-b border-royal/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-28">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-black tracking-tighter text-white">
              Jayson<span className="text-gold">.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[9px] font-bold uppercase tracking-widest transition-all hover:text-gold text-white/90"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                <Button size="sm" className="rounded-full px-5 bg-gold text-deep-navy hover:bg-gold/90 transition-colors font-bold uppercase tracking-wider text-[9px] h-8 shadow-md shadow-gold/20">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gold focus:outline-none transition-colors"
            >
              {isOpen ? <X size={20} />: <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy dark:bg-slate-950 border-b border-royal/30 dark:border-slate-800 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-3 text-sm font-black uppercase tracking-tighter border-b border-royal/20 dark:border-slate-800 text-white hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block w-full">
                <Button className="w-full rounded-full h-11 font-bold uppercase tracking-widest bg-gold text-deep-navy hover:bg-gold/90 text-[10px] shadow-md shadow-gold/20">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;