import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { CheckList } from "@/components/marketing/check-list";
import { Timeline } from "@/components/marketing/timeline";
import { FaqList } from "@/components/marketing/faq-list";
import { StickyCta } from "@/components/marketing/sticky-cta";
import { Disclaimer } from "@/components/marketing/disclaimer";
import { JsonLd } from "@/components/marketing/jsonld";
import { HillsEdge, Leaf, Sprig, SunMark, WavyDivider } from "@/components/brand/botanicals";
import { Button } from "@/components/ui/button";
import { requirementsList, type DonorType } from "@/config/eligibility";
import { FAQ } from "@/content/faq";
import { faqJsonLd } from "@/lib/seo";

export interface DonorLandingContent {
  type: DonorType;
  hero: { eyebrow: string; title: React.ReactNode; subtitle: string };
  comp: { amount: string; covered: string[]; note?: React.ReactNode };
  partnerNote?: React.ReactNode;
  steps: { title: string; body: string }[];
  concerns: { title: string; body: string }[];
}

export function DonorLanding({ c }: { c: DonorLandingContent }) {
  const applyHref = `/apply/${c.type}`;
  const faq = FAQ[c.type];
  return (
    <>
      <JsonLd data={faqJsonLd(faq.items)} />
      <Hero eyebrow={c.hero.eyebrow} title={c.hero.title} subtitle={c.hero.subtitle} art={c.type}>
        <Button asChild size="lg">
          <Link href={applyHref}>Start Your Application</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="#requirements">See Requirements</Link>
        </Button>
      </Hero>

      {c.partnerNote && (
        <div className="mx-auto max-w-6xl px-4">
          <p className="bg-primary-soft border-sage/40 flex gap-3 rounded-2xl border p-5 text-sm leading-relaxed">
            <Leaf className="text-sage-deep mt-0.5 size-5 shrink-0" />
            <span>{c.partnerNote}</span>
          </p>
        </div>
      )}

      <Section id="requirements" eyebrow="Requirements" title="Who can apply">
        <CheckList items={requirementsList(c.type)} />
        <p className="text-muted mt-6 text-sm italic">
          These are initial guidelines. Final eligibility is determined by our partner medical
          providers.
        </p>
      </Section>

      <HillsEdge className="text-muted-bg" />
      <div className="bg-muted-bg">
        <Section eyebrow="Compensation" title="Compensation & covered costs">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <div className="bg-card border-border relative overflow-hidden rounded-t-[12rem] rounded-b-[1.75rem] border px-7 pt-14 pb-8 text-center md:px-10">
              <SunMark className="text-ochre mx-auto size-11" />
              <p className="text-sage-deep mt-4 text-xs font-semibold tracking-[0.22em] uppercase">
                Compensation
              </p>
              <p className="text-primary mt-3 font-serif text-[2.1rem] leading-tight font-semibold md:text-[2.6rem]">
                {c.comp.amount}
              </p>
              <p className="text-muted mx-auto mt-4 max-w-sm text-sm leading-relaxed">
                {c.comp.note ??
                  "Paid for your time, effort, and commitment. Amounts vary by program."}
              </p>
            </div>
            <div className="bg-card border-border relative overflow-hidden rounded-[1.75rem] border p-7 md:p-10">
              <Sprig className="text-sage/30 pointer-events-none absolute -right-1 bottom-0 h-40 w-14" />
              <p className="text-primary font-serif text-2xl font-semibold italic">
                Covered at no cost to you
              </p>
              <ul className="relative mt-5 space-y-3">
                {c.comp.covered.map((x) => (
                  <li key={x} className="flex gap-3 leading-relaxed">
                    <Leaf className="text-accent mt-1 size-4 shrink-0" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>
      <HillsEdge className="text-muted-bg rotate-180" />

      <Section eyebrow="The process" title="What to expect, step by step">
        <div className="max-w-2xl">
          <Timeline steps={c.steps} />
        </div>
      </Section>

      <WavyDivider />

      <Section
        eyebrow="Your questions"
        title="Things you might be wondering about"
        intro="We want you to make an informed decision. These are general answers — please talk with a physician about your personal health."
      >
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {c.concerns.map((x) => (
            <div key={x.title} className="border-accent/40 border-l-2 pl-6">
              <h3 className="text-primary text-2xl font-semibold italic">{x.title}</h3>
              <p className="text-muted mt-2 leading-relaxed">{x.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <WavyDivider />

      <Section eyebrow="FAQ" title={`${faq.title} FAQ`}>
        <FaqList items={faq.items} />
      </Section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-t-[10rem] rounded-b-[2rem] px-6 pt-16 pb-12 text-center md:rounded-t-[14rem]">
          <Sprig className="pointer-events-none absolute bottom-0 left-6 h-36 w-12 text-[#c9d3bb]/40 md:left-16 md:h-48 md:w-16" />
          <Sprig className="pointer-events-none absolute right-6 bottom-0 h-32 w-11 -scale-x-100 text-[#c9d3bb]/40 md:right-16 md:h-44 md:w-14" />
          <h2 className="relative text-4xl font-medium md:text-5xl">
            Ready to take the <em className="font-normal">first step?</em>
          </h2>
          <p className="relative mt-3 opacity-90">The pre-screen takes about 3 minutes.</p>
          <Button asChild size="lg" className="relative mt-7">
            <Link href={applyHref}>Start Your Application</Link>
          </Button>
        </div>
      </section>

      <Disclaimer />
      <StickyCta href={applyHref} label="Start Your Application" note={c.comp.amount} />
    </>
  );
}
