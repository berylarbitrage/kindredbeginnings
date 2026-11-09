import { HeroArt } from "@/components/brand/hero-art";
import { Leaf } from "@/components/brand/botanicals";

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
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-10 pb-16 md:grid-cols-[1.15fr_1fr] md:gap-16 md:pt-16 md:pb-24">
        <div>
          {eyebrow && (
            <p className="text-sage-deep mb-6 flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase">
              <Leaf className="text-accent size-5 -rotate-12" />
              {eyebrow}
            </p>
          )}
          <h1 className="text-primary text-[2.9rem] leading-[1.02] font-medium tracking-tight md:text-6xl lg:text-[4.6rem]">
            {title}
          </h1>
          <p className="text-muted mt-6 max-w-xl text-lg leading-relaxed md:text-xl">{subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>
          {footnote && <div className="mt-9">{footnote}</div>}
        </div>
        <HeroArt variant={art} className="max-w-[19rem] md:max-w-sm" />
      </div>
    </section>
  );
}

/** Italic terracotta emphasis for a word or phrase inside a headline. */
export function Em({ children }: { children: React.ReactNode }) {
  return <em className="text-accent font-serif font-normal italic">{children}</em>;
}
