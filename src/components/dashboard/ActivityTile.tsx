"use client";

import { motion } from "framer-motion";
import { itemVariants } from "../motion/variants";
import CardWrapper from "../ui/CardWrapper";
import { useDashboard } from "@/context/DashboardContext";

const activityData = [
  1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1,
  0, 1, 1, 0, 1, 0,
];

export default function ActivityTile() {
  const { activeSection } = useDashboard();

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
      }}
      animate={{
        scale: activeSection === "activity" ? 1.03 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        boxShadow:
          activeSection === "activity"
            ? "0 0 40px rgba(34,211,238,.25)"
            : "0 0 0px rgba(0,0,0,0)",
      }}
    >
      <CardWrapper
        className="
          col-span-1
          md:col-span-2
          p-6
        "
      >
        <h3 className="mb-4 text-xl">Learning Activity</h3>

        <div className="grid grid-cols-14 gap-1">
          {activityData.map((active, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.01,
              }}
              className={`
                  h-3
                  w-3
                  rounded-sm
                  ${active ? "bg-cyan-500" : "bg-zinc-800"}
                `}
            />
          ))}
        </div>
      </CardWrapper>
    </motion.div>
  );
}
