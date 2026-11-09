import { LeafSolid } from "@/components/brand/botanicals";

/** Numbered steps along a winding, hand-drawn vine with leaf markers. */
export function Timeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="relative">
      {/* the vine: a dashed wavy line running down the marker column */}
      <span aria-hidden className="vine-line absolute top-4 bottom-4 left-[1.05rem] w-3" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative pb-9 pl-16 last:pb-0">
          <span className="absolute top-0 left-0 flex size-[2.6rem] items-center justify-center">
            <LeafSolid
              className={`absolute inset-0 size-full ${i % 2 ? "text-sage-deep -scale-x-100" : "text-accent"}`}
            />
            <span className="text-primary-foreground relative -mt-0.5 font-serif text-lg font-semibold italic">
              {i + 1}
            </span>
          </span>
          <h3 className="text-primary pt-1 text-2xl font-semibold">{s.title}</h3>
          <p className="text-muted mt-1 leading-relaxed">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
