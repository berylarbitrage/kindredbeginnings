import Link from "next/link";
import { SITE } from "@/config/site";
import { LogoMark } from "@/components/brand/logo-mark";

export function Logo({ showSubtitle = true }: { showSubtitle?: boolean }) {
  const [first, ...rest] = SITE.brand.split(" ");
  return (
    <Link
      href="/"
      className="group flex items-center gap-2 rounded-sm"
      aria-label={`${SITE.brand} home`}
    >
      <LogoMark className="h-12 w-14 shrink-0 transition-transform duration-500 group-hover:-rotate-3 sm:h-14 sm:w-16" />
      <span className="flex flex-col leading-none">
        <span className="text-primary font-serif text-[1.3rem] leading-[1.05] font-semibold tracking-tight">
          {first}
        </span>
        <span className="text-lemon-ink font-serif text-[1.3rem] leading-[1.05] font-medium tracking-tight italic">
          {rest.join(" ")}
        </span>
        {showSubtitle && (
          <span className="text-muted mt-1 hidden text-[0.58rem] font-medium tracking-[0.22em] uppercase sm:block">
            {SITE.subtitle}
          </span>
        )}
      </span>
    </Link>
  );
}
