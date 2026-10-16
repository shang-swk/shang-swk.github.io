import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.24em] text-archive-red">404</p>
      <h1 className="mt-3 font-editorial text-5xl">Archive entry not found</h1>
      <p className="mt-4 text-archive-graphite">This sneaker may not have been indexed yet.</p>
      <Button asChild className="mt-8">
        <Link href="/archive">Return to archive</Link>
      </Button>
    </div>
  );
}
