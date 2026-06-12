import type { MotionProps } from "framer-motion";

// Clean, smooth easeOut curve as requested
const easeOut: [number, number, number, number] = [0.25, 1, 0.5, 1];
const duration = 0.6;
const amount = 0.2;

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount },
  transition: { duration, ease: easeOut }
} satisfies MotionProps;

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount },
  transition: { duration, ease: easeOut }
} satisfies MotionProps;

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount },
  transition: { duration, ease: easeOut }
} satisfies MotionProps;

export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount },
  transition: { duration, ease: easeOut }
} satisfies MotionProps;

export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount },
  transition: { duration, ease: easeOut }
} satisfies MotionProps;

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true, amount },
} satisfies MotionProps;

export const cardHover: Pick<MotionProps, "whileHover"> = {
  whileHover: { 
    y: -4,
    scale: 1.02,
    transition: { duration: 0.3, ease: easeOut }
  }
};

export const buttonHover: Pick<MotionProps, "whileHover" | "whileTap"> = {
  whileHover: { 
    scale: 1.02,
    transition: { duration: 0.2, ease: easeOut }
  },
  whileTap: { scale: 0.98 }
};