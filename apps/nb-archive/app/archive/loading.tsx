export default function ArchiveLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="h-12 w-64 animate-pulse rounded bg-archive-mist" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-lg border border-archive-ink/10 bg-white/35">
            <div className="aspect-[4/3] animate-pulse bg-archive-mist" />
            <div className="space-y-3 p-5">
              <div className="h-4 w-24 animate-pulse rounded bg-archive-mist" />
              <div className="h-7 w-4/5 animate-pulse rounded bg-archive-mist" />
              <div className="h-16 animate-pulse rounded bg-archive-mist" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
