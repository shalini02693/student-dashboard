import SkeletonCard from "@/components/ui/SkeletonCard";

export default function Loading() {
  return (
    <main className="p-6">
      <div
        className="
          grid
          gap-4
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </main>
  );
}
