import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE, spermComp } from "@/config/site";
import { HeroArt } from "@/components/brand/hero-art";
import { Leaf } from "@/components/brand/botanicals";

export const metadata: Metadata = {
  title: "Apply to Become a Donor",
  description: `Choose your program: apply to become an egg donor (${SITE.eggComp}) or a sperm donor with ${SITE.brand}. The pre-screen takes about 3 minutes.`,
  alternates: { canonical: "/apply" },
};

const OPTIONS = [
  {
    href: "/apply/egg",
    title: "Egg donor",
    comp: SITE.eggComp,
    learn: "/egg-donor",
    art: "egg" as const,
  },
  {
    href: "/apply/sperm",
    title: "Sperm donor",
    comp: spermComp,
    learn: "/sperm-donor",
    art: "sperm" as const,
  },
];

export default function ApplyChooserPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-leaf-deep flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase">
          <Leaf className="text-accent size-4 -rotate-12" />
          Apply
        </p>
        <h1 className="text-primary mt-4 text-[2.6rem] leading-[1.05] font-medium md:text-6xl">
          Which program are you <em className="text-lemon-ink font-normal">applying for?</em>
        </h1>
        <p className="text-muted mt-5 text-lg">The pre-screen takes about 3 minutes.</p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {OPTIONS.map((o) => (
          <div
            key={o.href}
            className="border-border bg-card flex flex-col rounded-t-[14rem] rounded-b-[1.75rem] border p-4 pb-8 shadow-[0_24px_50px_-36px_rgba(44,58,30,0.55)]"
          >
            <HeroArt
              variant={o.art}
              compact
              className="aspect-[5/4] max-w-none [&>div]:aspect-[5/4]"
            />
            <div className="flex flex-1 flex-col px-3 pt-6 text-center">
              <h2 className="text-primary text-3xl font-medium">{o.title}</h2>
              <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">{o.comp}</p>
              <Link
                href={o.href}
                className="bg-accent text-accent-foreground hover:bg-accent-hover mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full font-semibold shadow-[0_8px_20px_-10px_rgba(79,122,50,0.7)] transition-colors"
              >
                Apply as {o.title.toLowerCase()} <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href={o.learn} className="link-underline text-primary mt-4 block text-sm">
                Learn about the program first
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
