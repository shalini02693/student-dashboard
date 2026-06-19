"use client";

import { motion } from "framer-motion";
import { itemVariants } from "../motion/variants";
import CardWrapper from "../ui/CardWrapper";
import { useDashboard } from "@/context/DashboardContext";

export default function HeroTile() {
  const { activeSection } = useDashboard();

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
      }}
      animate={{
        scale: activeSection === "home" ? 1.03 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        boxShadow:
          activeSection === "home"
            ? "0 0 40px rgba(34,211,238,.25)"
            : "0 0 0px rgba(0,0,0,0)",
      }}
    >
      <CardWrapper
        className="
          col-span-1
          md:col-span-2
          p-8
        "
      >
        <div className="space-y-4">
          <p className="text-zinc-400">Welcome back</p>

          <h1 className="text-4xl font-bold">Shalini 👋</h1>

          <div className="flex items-center gap-2">
            <span>🔥</span>
            <span>14 Day Streak</span>
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  );
}
