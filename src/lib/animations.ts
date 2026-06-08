import type { MotionProps } from "framer-motion";

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
} satisfies MotionProps;

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true, amount: 0.2 },
} satisfies MotionProps;

export const cardHover: Pick<MotionProps, "whileHover"> = {
  whileHover: { 
    y: -8,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  }
};

export const buttonHover: Pick<MotionProps, "whileHover" | "whileTap"> = {
  whileHover: { 
    scale: 1.02,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
  },
  whileTap: { scale: 0.98 }
};