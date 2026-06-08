"use client";

import React from 'react';

const BlogTableOfContents = () => {
  const items = [
    { id: "introduction", label: "Introduction" },
    { id: "ai-revolution", label: "The AI Revolution" },
    { id: "edge-computing", label: "Edge Computing" },
    { id: "conclusion", label: "Conclusion" },
  ];

  return (
    <div className="hidden lg:block sticky top-40 h-fit space-y-8">
      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Table of Contents</h4>
      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-sm font-bold uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary pl-4"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default BlogTableOfContents;