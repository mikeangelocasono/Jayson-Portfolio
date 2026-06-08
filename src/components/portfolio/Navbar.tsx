"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-black tracking-tighter">
              RonDev<span className="text-primary">.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[9px] font-bold uppercase tracking-widest transition-all hover:text-primary text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                <Button size="sm" className="rounded-full px-5 bg-black text-white hover:bg-primary transition-colors font-bold uppercase tracking-wider text-[9px] h-8">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X size={20} />: <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-3 text-sm font-black uppercase tracking-tighter border-b border-border/50 text-foreground"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block w-full">
                <Button className="w-full rounded-full h-11 font-bold uppercase tracking-widest bg-black text-white hover:bg-primary text-[10px]">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;