import Link from "next/link";
import { SITE } from "@/config/site";
import { LogoMark } from "@/components/brand/logo-mark";

export function Logo({ showSubtitle = true }: { showSubtitle?: boolean }) {
  const [first, ...rest] = SITE.brand.split(" ");
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 rounded-sm"
      aria-label={`${SITE.brand} home`}
    >
      <LogoMark className="h-10 w-9 shrink-0 transition-transform duration-500 group-hover:-rotate-3" />
      <span className="flex flex-col leading-none">
        <span className="text-primary font-serif text-[1.55rem] leading-none font-medium tracking-tight">
          {first} <span className="text-lemon-ink font-medium italic">{rest.join(" ")}</span>
        </span>
        {showSubtitle && (
          <span className="text-muted mt-1 hidden text-[0.62rem] font-medium tracking-[0.24em] uppercase sm:block">
            {SITE.subtitle}
          </span>
        )}
      </span>
    </Link>
  );
}
