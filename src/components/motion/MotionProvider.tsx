"use client";

import { AnimatePresence, MotionConfig } from "framer-motion";

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      reducedMotion="user"
    >
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </MotionConfig>
  );
}
