/** Numbered steps along a winding stem with leaf-shaped markers (lemon / green). */
export function Timeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="relative">
      {/* the stem: a gently winding line running down the marker column */}
      <span aria-hidden className="vine-line absolute top-4 bottom-4 left-[0.95rem] w-3" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative pb-9 pl-16 last:pb-0">
          <span className="absolute top-0 left-0 flex size-[2.4rem] items-center justify-center">
            <span
              aria-hidden
              className={`leaf-shape absolute inset-0 ${i % 2 ? "bg-accent -scale-x-100" : "bg-lemon"}`}
            />
            <span
              className={`relative font-serif text-lg italic ${i % 2 ? "text-white" : "text-foreground"}`}
            >
              {i + 1}
            </span>
          </span>
          <h3 className="text-foreground pt-1 text-2xl">{s.title}</h3>
          <p className="text-muted mt-1 leading-relaxed">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
