"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">
          Failed to load dashboard
        </h1>

        <button
          onClick={reset}
          className="
            mt-6
            rounded-xl
            bg-cyan-500
            px-4
            py-2
            text-black
          "
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
