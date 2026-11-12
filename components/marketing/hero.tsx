import { HeroArt } from "@/components/brand/hero-art";

export function Hero({
  eyebrow,
  title,
  subtitle,
  art,
  children,
  footnote,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  art: "home" | "egg" | "sperm";
  children: React.ReactNode;
  footnote?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-16 md:grid-cols-[1.2fr_1fr] md:gap-16 md:pt-16 md:pb-20">
        <div>
          {eyebrow && (
            <p className="text-muted mb-6 text-xs font-semibold tracking-[0.24em] uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="text-foreground text-[2.7rem] leading-[1.04] tracking-tight md:text-6xl lg:text-[4.3rem]">
            {title}
          </h1>
          <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed md:text-[1.2rem]">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>
          {footnote && <div className="mt-9">{footnote}</div>}
        </div>
        <HeroArt variant={art} className="max-w-[18rem] md:max-w-[22rem]" />
      </div>
    </section>
  );
}

/** Italic lemon emphasis: the second line of a headline. */
export function Em({ children }: { children: React.ReactNode }) {
  return <em className="text-lemon-ink block font-serif font-normal italic">{children}</em>;
}
