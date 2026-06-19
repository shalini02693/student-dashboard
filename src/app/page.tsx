import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";
import BentoGrid from "@/components/dashboard/BentoGrid";
import HeroTile from "@/components/dashboard/HeroTile";
import CourseCard from "@/components/dashboard/CourseCard";
import ActivityTile from "@/components/dashboard/ActivityTile";
import SettingsTile from "@/components/dashboard/SettingsTile";

import { supabase } from "@/lib/supabase/server";

export default async function HomePage() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (
    <section className="flex min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <main className="flex-1 overflow-y-auto p-6 pb-24 scroll-smooth">
        <BentoGrid>
          {/* Hero */}
          <section
            id="home"
            className="scroll-mt-6 col-span-1 md:col-span-2"
          >
            <HeroTile />
          </section>

          {/* Courses */}
          <section
            id="courses"
            className="
              scroll-mt-6
              col-span-1
              md:col-span-2
              xl:col-span-2
              grid
              gap-4
              md:grid-cols-2
              content-start
            "
          >
            {courses?.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </section>

          {/* Activity */}
          <section
            id="activity"
            className="scroll-mt-6 col-span-1 md:col-span-2"
          >
            <ActivityTile />
          </section>

          {/* Settings */}
          <section
            id="settings"
            className="scroll-mt-6 col-span-1 md:col-span-2"
          >
            <SettingsTile />
          </section>
        </BentoGrid>
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </section>
  );
}