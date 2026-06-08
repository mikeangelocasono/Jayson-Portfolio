"use client";

import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Process from "@/components/portfolio/Process";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import CTABanner from "@/components/portfolio/CTABanner";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import CustomCursor from "@/components/portfolio/CustomCursor";
import BackToTop from "@/components/portfolio/BackToTop";
import SectionDivider from "@/components/portfolio/SectionDivider";
import TechMarquee from "@/components/portfolio/TechMarquee";
import Certificates from "@/components/portfolio/Certificates";
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
        
        <TechMarquee />
        <About />
        <SectionDivider />
        <Education />
        <Certificates />
        <Skills />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}