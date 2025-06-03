"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type SlideUpProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const SlideUp = ({ children, delay = 0, duration = 0.6, className = "" }: SlideUpProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideUpVariants}
      custom={{ delay, duration }}
      
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
