import type { FaqItem } from "@/content/faq";
import { Plus } from "lucide-react";

/** Accessible accordion built on <details>, works without JS. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-border border-t">
      {items.map((item) => (
        <details
          key={item.q}
          className="group border-border border-b py-5 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="text-primary flex cursor-pointer list-none items-start justify-between gap-4 rounded-sm font-serif text-xl leading-snug font-medium md:text-[1.4rem]">
            <span>{item.q}</span>
            <span className="border-leaf-deep/40 text-accent group-open:bg-accent group-open:text-accent-foreground mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors group-open:border-transparent">
              <Plus aria-hidden className="size-4 transition-transform group-open:rotate-45" />
            </span>
          </summary>
          <p className="text-muted mt-3 max-w-3xl pr-12 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
