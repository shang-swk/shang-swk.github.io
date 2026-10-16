"use client";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.24em] text-archive-red">Error</p>
      <h1 className="mt-3 font-editorial text-5xl">The archive hit a loading issue</h1>
      <p className="mt-4 text-archive-graphite">Check the database connection and try again.</p>
      <Button onClick={reset} className="mt-8">Retry</Button>
    </div>
  );
}
