"use client";

import { motion } from "framer-motion";
import { itemVariants } from "../motion/variants";
import CardWrapper from "../ui/CardWrapper";
import { useDashboard } from "@/context/DashboardContext";

export default function SettingsTile() {
  const { activeSection } = useDashboard();

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
      }}
      animate={{
        scale: activeSection === "settings" ? 1.03 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        boxShadow:
          activeSection === "settings"
            ? "0 0 40px rgba(34,211,238,.25)"
            : "0 0 0px rgba(0,0,0,0)",
      }}
    >
      <CardWrapper className="p-6">
        <h2 className="text-3xl font-bold">Settings</h2>

        <p className="mt-3 text-zinc-400">Future settings panel.</p>
      </CardWrapper>
    </motion.div>
  );
}
