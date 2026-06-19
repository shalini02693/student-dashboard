"use client";

import { motion } from "framer-motion";
import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

import { useDashboard } from "@/context/DashboardContext";

const navItems = [
  {
    id: "home",
    icon: Home,
  },
  {
    id: "courses",
    icon: BookOpen,
  },
  {
    id: "activity",
    icon: BarChart3,
  },
  {
    id: "settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const { activeSection, setActiveSection } = useDashboard();

  const handleClick = (id: string) => {
    setActiveSection(id as any);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className="
        hidden
        md:flex

        sticky
        top-0

        h-screen
        w-20

        flex-col
        items-center
        gap-4

        border-r
        border-zinc-800

        bg-zinc-950/80
        backdrop-blur-xl

        py-6

        z-50
      "
    >
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="
              group
              relative
              rounded-xl
              p-4
            "
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="active-nav"
                className="
                  absolute
                  inset-0
                  rounded-xl

                  bg-zinc-800
                "
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            )}

            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                relative
                z-10
              "
            >
              <Icon
                size={22}
                className="
                  text-white
                  transition-colors
                  duration-200

                  group-hover:text-cyan-400
                "
              />
            </motion.div>
          </button>
        );
      })}
    </nav>
  );
}
