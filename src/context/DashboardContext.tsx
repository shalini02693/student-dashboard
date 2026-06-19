"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type Section =
  | "home"
  | "courses"
  | "activity"
  | "settings";

interface DashboardContextType {
  activeSection: Section;
  setActiveSection: (
    section: Section
  ) => void;
}

const DashboardContext =
  createContext<DashboardContextType | null>(
    null
  );

export function DashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] =
    useState<Section>("home");

  return (
    <DashboardContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context =
    useContext(DashboardContext);

  if (!context) {
    throw new Error(
      "useDashboard must be used inside DashboardProvider"
    );
  }

  return context;
}