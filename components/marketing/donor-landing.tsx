import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { Timeline } from "@/components/marketing/timeline";
import { FaqList } from "@/components/marketing/faq-list";
import { StickyCta } from "@/components/marketing/sticky-cta";
import { Disclaimer } from "@/components/marketing/disclaimer";
import { JsonLd } from "@/components/marketing/jsonld";
import { Leaf, LemonIcon, Sprig, WavyDivider } from "@/components/brand/botanicals";
import { Button } from "@/components/ui/button";
import { requirementsList, type DonorType } from "@/config/eligibility";
import { FAQ } from "@/content/faq";
import { faqJsonLd } from "@/lib/seo";

export interface DonorLandingContent {
  type: DonorType;
  hero: { eyebrow: string; title: React.ReactNode; subtitle: string };
  /** The chapter's opening paragraphs (first one gets a drop cap). */
  opening: string[];
  comp: { amount: string; covered: string[]; note?: React.ReactNode };
  partnerNote?: React.ReactNode;
  steps: { title: string; body: string }[];
  concerns: { title: string; body: string }[];
}

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

/** A chapter heading: small numeral, then Petrona italic. */
function ChapterHeading({ n, id, children }: { n: string; id: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      <span className="text-lemon-ink font-serif text-lg italic" aria-hidden>
        {n}.
      </span>
      <h2 id={id} className="text-primary scroll-mt-24 text-3xl italic md:text-[2.4rem]">
        {children}
      </h2>
    </div>
  );
}

/** Egg / sperm landing page, written like a chapter in a garden journal. */
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
          <Link href="#requirements">Is this for me?</Link>
        </Button>
      </Hero>

      <WavyDivider />

      <div className="mx-auto grid max-w-6xl gap-x-16 px-4 pt-14 pb-10 md:pt-20 lg:grid-cols-[minmax(0,1fr)_19rem]">
        {/* the margin card: requirements as a side note */}
        <aside className="lg:col-start-2 lg:row-start-1" aria-labelledby="requirements">
          <div className="bg-card border-border relative mb-12 rounded-t-[9rem] rounded-b-[1.25rem] border px-6 pt-12 pb-7 lg:sticky lg:top-28">
            <LemonIcon className="mx-auto size-10" />
            <h2
              id="requirements"
              className="text-primary mt-3 scroll-mt-28 text-center text-2xl italic"
            >
              Is this for you?
            </h2>
            <p className="text-muted mt-1 text-center text-sm">A few first guidelines</p>
            <ul className="mt-5 space-y-2.5 text-[0.95rem] leading-snug">
              {requirementsList(c.type).map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Leaf className="text-leaf mt-0.5 size-4 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted mt-5 text-xs leading-relaxed italic">
              These are initial guidelines. Final eligibility is determined by our partner medical
              providers.
            </p>
            <Button asChild className="mt-5 w-full">
              <Link href={applyHref}>Take the 3-minute pre-screen</Link>
            </Button>
          </div>
        </aside>

        {/* the chapter: one narrow reading column */}
        <article className="max-w-[40rem] lg:col-start-1 lg:row-start-1">
          <div className="text-foreground/90 space-y-5 text-lg leading-[1.85]">
            {c.opening.map((p, i) => (
              <p key={i} className={i === 0 ? "drop-cap" : undefined}>
                {p}
              </p>
            ))}
          </div>

          {c.partnerNote && (
            <p className="border-lemon mt-8 border-l-2 pl-5 text-[0.95rem] leading-relaxed">
              {c.partnerNote}
            </p>
          )}

          {/* i. compensation as an inset arch */}
          <section className="mt-16" aria-labelledby="ch-comp">
            <ChapterHeading n="i" id="ch-comp">
              What you&apos;ll receive
            </ChapterHeading>
            <div className="bg-muted-bg arch-outline mx-auto max-w-md rounded-t-[12rem] rounded-b-[1.5rem] px-7 pt-14 pb-8 text-center sm:float-right sm:mt-1 sm:mb-6 sm:ml-8 sm:w-64 sm:px-5 sm:pt-12">
              <p className="text-muted text-xs font-semibold tracking-[0.22em] uppercase">
                Compensation
              </p>
              <p
                className={`text-foreground mt-3 font-serif ${c.comp.amount.length > 32 ? "text-xl/snug" : "text-[1.7rem]/tight"}`}
              >
                {c.comp.amount}
              </p>
            </div>
            <p className="mt-6 text-lg leading-[1.85] sm:mt-0">
              {c.comp.note ??
                "It is paid for your time, effort and commitment, and amounts vary by program."}{" "}
              Alongside it, these are covered at no cost to you:
            </p>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed">
              {c.comp.covered.map((x) => (
                <li key={x} className="flex gap-3">
                  <Leaf className="text-leaf mt-1.5 size-4 shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
            <div className="clear-both" />
          </section>

          {/* ii. the vine */}
          <section className="mt-16" aria-labelledby="ch-steps">
            <ChapterHeading n="ii" id="ch-steps">
              How the days unfold
            </ChapterHeading>
            <Timeline steps={c.steps} />
          </section>

          {/* iii. a reading list of concerns */}
          <section className="mt-16" aria-labelledby="ch-ask">
            <ChapterHeading n="iii" id="ch-ask">
              Things people ask us
            </ChapterHeading>
            <p className="text-muted -mt-2 mb-8 leading-relaxed">
              General answers, offered so you can decide with clear eyes — please talk with a
              physician about your own health.
            </p>
            <ol className="border-border divide-border divide-y border-y">
              {c.concerns.map((x, i) => (
                <li key={x.title} className="grid grid-cols-[2rem_1fr] gap-x-3 py-6">
                  <span className="text-lemon-ink pt-1 font-serif italic" aria-hidden>
                    {ROMAN[i]}
                  </span>
                  <div>
                    <h3 className="text-foreground text-2xl italic">{x.title}</h3>
                    <p className="text-muted mt-2 leading-relaxed">{x.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* iv. FAQ */}
          <section className="mt-16" aria-labelledby="ch-faq">
            <ChapterHeading n="iv" id="ch-faq">
              A few more questions, answered
            </ChapterHeading>
            <FaqList items={faq.items} />
          </section>
        </article>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-t-[10rem] rounded-b-[2rem] px-6 pt-16 pb-12 text-center md:rounded-t-[14rem]">
          <Sprig className="pointer-events-none absolute bottom-0 left-6 h-36 w-12 text-[#d9e6bf]/40 md:left-16 md:h-48 md:w-16" />
          <Sprig className="pointer-events-none absolute right-6 bottom-0 h-32 w-11 -scale-x-100 text-[#d9e6bf]/40 md:right-16 md:h-44 md:w-14" />
          <h2 className="relative text-4xl md:text-5xl">
            Whenever you&apos;re ready,
            <em className="text-lemon block font-normal">the first page is short.</em>
          </h2>
          <p className="relative mt-3 opacity-90">The pre-screen takes about 3 minutes.</p>
          <Button
            asChild
            size="lg"
            className="bg-lemon text-foreground relative mt-7 shadow-none hover:bg-[#f2d04a]"
          >
            <Link href={applyHref}>Start Your Application</Link>
          </Button>
        </div>
      </section>

      <Disclaimer />
      <StickyCta href={applyHref} label="Start Your Application" note={c.comp.amount} />
    </>
  );
}
