import { cn } from "@/lib/utils";
import { Leaf } from "@/components/brand/botanicals";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  className,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-6xl scroll-mt-24 px-4 py-14 md:py-20", className)}
    >
      {(eyebrow || title || intro) && (
        <div className="mb-10 max-w-2xl md:mb-14">
          {eyebrow && (
            <p className="text-sage-deep mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase">
              <Leaf className="text-sage size-4 -rotate-12" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-primary text-[2.3rem] leading-[1.08] font-medium tracking-tight md:text-[3.4rem]">
              {title}
            </h2>
          )}
          {intro && <div className="text-muted mt-5 text-lg leading-relaxed">{intro}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
