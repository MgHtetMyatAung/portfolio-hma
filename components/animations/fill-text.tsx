"use client";

import { motion } from "motion/react";

export function FillText() {
  return (
    <motion.h1
      initial={{ backgroundPosition: "100% 0" }}
      animate={{ backgroundPosition: "0% 0" }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      style={{
        backgroundImage: "linear-gradient(to right, #1b1b1b 50%, #b3b3b3 50%)",
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block",
      }}
      className="text-5xl font-bold"
    >
      BUILD THE FUTURE
    </motion.h1>
  );
}
