"use client";

import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Certificates from "@/components/portfolio/Certificates";
import Testimonials from "@/components/portfolio/Testimonials";
import Gallery from "@/components/portfolio/Gallery";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import CustomCursor from "@/components/portfolio/CustomCursor";
import BackToTop from "@/components/portfolio/BackToTop";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-geist-sans)]">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main>
        <section id="hero">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
          </motion.div>
        </section>
        
        <About />
        <Projects />
        <Achievements />
        <Certificates />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}