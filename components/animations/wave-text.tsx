"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface GradientWaveTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientWaveText({
  children,
  className,
}: GradientWaveTextProps) {
  return (
    <motion.span
      className={className}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
      transition={{
        duration: 4,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        backgroundImage:
          "linear-gradient(90deg, #38bdf8, #a78bfa, #ec4899, #38bdf8)",
        backgroundSize: "300% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
      }}
    >
      {children}
    </motion.span>
  );
}
