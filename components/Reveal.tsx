"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/constants";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={reveal.whileInView}
      viewport={reveal.viewport}
      transition={{ ...reveal.transition, delay }}
    >
      {children}
    </motion.div>
  );
}
