export default function SkeletonCard() {
  return (
    <article
      className="
        relative
        overflow-hidden
        h-48
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
      "
    >
      <div
        className="
          absolute
          inset-0
          animate-pulse
          bg-gradient-to-r
          from-zinc-900
          via-zinc-800
          to-zinc-900
        "
      />

      <div className="relative p-6">
        <div className="h-8 w-8 rounded-lg bg-zinc-800" />

        <div className="mt-6 h-4 w-2/3 rounded bg-zinc-800" />

        <div className="mt-3 h-4 w-1/2 rounded bg-zinc-800" />

        <div className="mt-8 h-2 w-full rounded-full bg-zinc-800" />
      </div>
    </article>
  );
}
