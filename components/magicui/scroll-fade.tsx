"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useAnimation, Variants } from "motion/react";
import { useEffect, useRef } from "react";

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
  staggerChildren?: number;
  staggerDirection?: "forward" | "reverse";
}

export function ScrollFade({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 50,
  once = true,
  threshold = 0.1,
  staggerChildren = 0,
  staggerDirection = "forward",
  ...props
}: ScrollFadeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();

  // Define animation variants
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth easing
        when: "beforeChildren",
        staggerChildren: staggerChildren,
        staggerDirection: staggerDirection === "reverse" ? -1 : 1,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Child component for staggered animations
export function ScrollFadeItem({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 20,
}: Omit<ScrollFadeProps, "once" | "threshold" | "staggerChildren" | "staggerDirection">) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div variants={variants} className={cn(className)}>
      {children}
    </motion.div>
  );
}