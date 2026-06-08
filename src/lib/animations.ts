export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true, amount: 0.2 },
};

export const cardHover = {
  whileHover: { 
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const buttonHover = {
  whileHover: { 
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  whileTap: { scale: 0.98 }
};