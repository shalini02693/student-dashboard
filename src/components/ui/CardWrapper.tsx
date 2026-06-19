"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function CardWrapper({ children, className }: Props) {
  return (
    <motion.article
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/60
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </motion.article>
  );
}
