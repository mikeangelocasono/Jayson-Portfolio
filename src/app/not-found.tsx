"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[10rem] md:text-[15rem] font-black text-black/5 leading-none select-none">404</h1>
          <h2 className="text-4xl md:text-6xl font-black mt-[-2rem] mb-6 tracking-tighter">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-12 font-medium text-lg">
            Oops! The page you are looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button asChild size="lg" className="rounded-full px-10 h-16 bg-black text-white hover:bg-primary font-black uppercase tracking-widest text-xs">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" /> Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 border-2 border-black font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white">
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
              </button>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}