"use client";

import { motion } from "framer-motion";
import { itemVariants } from "../motion/variants";
import { Code2, Database, Layers, Sparkles } from "lucide-react";

import CardWrapper from "../ui/CardWrapper";
import ProgressBar from "../ui/ProgressBar";

import { Course } from "@/lib/supabase/types";
import { useDashboard } from "@/context/DashboardContext";

const iconMap = {
  Code2,
  Database,
  Layers,
  Sparkles,
};

export default function CourseCard({ course }: { course: Course }) {
  const { activeSection } = useDashboard();

  const Icon = iconMap[course.icon_name as keyof typeof iconMap] || Code2;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      animate={{
        scale: activeSection === "courses" ? 1.03 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        boxShadow:
          activeSection === "courses"
            ? "0 0 40px rgba(168,85,247,.25)"
            : "0 0 0px rgba(0,0,0,0)",
      }}
    >
      <CardWrapper className="p-6">
        <div className="space-y-4">
          <Icon size={28} />

          <h3 className="font-semibold text-lg">{course.title}</h3>

          <ProgressBar value={course.progress} />

          <p className="text-sm text-zinc-400">{course.progress}% Complete</p>
        </div>
      </CardWrapper>
    </motion.div>
  );
}
