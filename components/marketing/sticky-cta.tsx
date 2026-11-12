import Link from "next/link";
import { Button } from "@/components/ui/button";

/** Mobile-only CTA bar pinned to the bottom of landing pages. */
export function StickyCta({ href, label, note }: { href: string; label: string; note?: string }) {
  return (
    <>
      <div className="h-20 md:hidden" aria-hidden />
      <div className="border-border bg-card/95 fixed inset-x-0 bottom-0 z-30 rounded-t-3xl border-t px-4 py-3 shadow-[0_-12px_30px_-20px_rgba(44,58,30,0.5)] backdrop-blur md:hidden">
        <div className="flex items-center gap-3">
          {note && (
            <p className="text-primary line-clamp-2 min-w-0 flex-1 font-serif text-base leading-tight font-medium">
              {note}
            </p>
          )}
          <Button asChild className={note ? "shrink-0" : "w-full"}>
            <Link href={href}>{label}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
