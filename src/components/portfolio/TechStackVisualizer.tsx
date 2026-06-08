"use client";

import { motion } from 'framer-motion';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Zap,
  Shield,
  Cpu
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Next.js": <Globe width={24} height={24} />,
  "TypeScript": <Cpu width={24} height={24} />,
  "Tailwind": <Layout width={24} height={24} />,
  "Prisma": <Layers width={24} height={24} />,
  "PostgreSQL": <Database width={24} height={24} />,
  "AWS": <Zap width={24} height={24} />,
  "Auth.js": <Shield width={24} height={24} />,
};

const TechStackVisualizer = () => {
  const stack = [
    { name: "Next.js", category: "Frontend", description: "React framework for production-grade applications." },
    { name: "TypeScript", category: "Language", description: "Static typing for better developer experience and reliability." },
    { name: "Tailwind", category: "Styling", description: "Utility-first CSS framework for rapid UI development." },
    { name: "Prisma", category: "ORM", description: "Next-generation Node.js and TypeScript ORM." },
    { name: "PostgreSQL", category: "Database", description: "Powerful, open source object-relational database system." },
    { name: "AWS", category: "Infrastructure", description: "Cloud computing services for scalable hosting." },
    { name: "Auth.js", category: "Security", description: "Authentication for Next.js applications." },
  ];

  return (
    <div className="my-20">
      <h3 className="text-2xl font-black uppercase tracking-tighter mb-10">The Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        <TooltipProvider>
          {stack.map((tech, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-[2rem] border border-border bg-white hover:border-primary/30 hover:shadow-xl transition-all cursor-help group text-center"
                >
                  <div className="mb-4 p-3 rounded-2xl bg-accent/50 text-primary group-hover:bg-primary group-hover:text-white transition-colors inline-flex">
                    {iconMap[tech.name]}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest">{tech.name}</div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent className="p-4 rounded-2xl border-border bg-white shadow-2xl max-w-[200px]">
                <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{tech.category}</div>
                <div className="font-bold text-sm mb-2">{tech.name}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{tech.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default TechStackVisualizer;