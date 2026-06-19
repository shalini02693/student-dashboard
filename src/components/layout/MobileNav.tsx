"use client";

import { motion } from "framer-motion";
import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

import { useDashboard } from "@/context/DashboardContext";

const navItems = [
  {
    id: "home",
    icon: Home,
    label: "Home",
  },
  {
    id: "courses",
    icon: BookOpen,
    label: "Courses",
  },
  {
    id: "activity",
    icon: BarChart3,
    label: "Activity",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

export default function MobileNav() {
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
        fixed
        bottom-0
        left-0
        right-0

        z-50

        flex
        items-center
        justify-around

        border-t
        border-zinc-800

        bg-zinc-950/90
        backdrop-blur-xl

        md:hidden
      "
    >
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="
              relative
              flex
              flex-col
              items-center
              justify-center

              px-4
              py-3
            "
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="active-mobile-nav"
                className="
                  absolute
                  inset-1
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

            <Icon
              size={18}
              className="
                relative
                z-10
                text-white
              "
            />

            <span
              className="
                relative
                z-10
                mt-1
                text-xs
                text-white
              "
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
