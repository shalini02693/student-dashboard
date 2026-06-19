"use client";

import { motion } from "framer-motion";
import { containerVariants } from "../motion/variants";

export default function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={containerVariants}
      className="
        grid
        gap-4
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        auto-rows-min
      "
    >
      {children}
    </motion.div>
  );
}
