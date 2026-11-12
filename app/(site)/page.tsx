import Link from "next/link";
import { ArrowRight, CalendarClock, Dna, Stethoscope } from "lucide-react";
import { Em, Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { FaqList } from "@/components/marketing/faq-list";
import { ReferralBanner } from "@/components/marketing/referral-banner";
import { JsonLd } from "@/components/marketing/jsonld";
import { LogoMark } from "@/components/brand/logo-mark";
import {
  BlossomSketch,
  HillsEdge,
  Leaf,
  LemonIcon,
  LemonSlice,
  Sprig,
  WateringCan,
  WavyDivider,
} from "@/components/brand/botanicals";
import { Button } from "@/components/ui/button";
import { SITE, spermComp } from "@/config/site";
import { HOME_FAQ } from "@/content/faq";
import { organizationJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const UNFOLDS = [
  {
    title: "Begin with a few questions",
    body: "A three-minute pre-screen, answered wherever you happen to be.",
  },
  {
    title: "Tell us your story",
    body: "Finish your application at your own pace, then meet the coordinator who will stay beside you.",
  },
  {
    title: "Meet a family",
    body: "We introduce your profile to intended parents; screening follows at a partner clinic.",
  },
  {
    title: "Be compensated",
    body: "For your time, your effort and your commitment.",
  },
];

const JOURNAL = [
  {
    art: BlossomSketch,
    title: "A coordinator who knows your name",
    body: "One real person, from your very first question to the end of the journey — someone you can simply call or write to.",
  },
  {
    art: LemonSlice,
    title: "Compensation, stated plainly",
    body: "Clear amounts from the start, paid for your time and commitment — never for your looks or any other personal trait.",
  },
  {
    art: WateringCan,
    title: "Your story, kept close",
    body: "What you share with us is encrypted, never sold, and passed only to our partner clinics.",
  },
  {
    art: LemonIcon,
    title: "Near or far",
    body: `${SITE.serviceArea}. If a program needs you to travel, it is arranged and paid for.`,
  },
];

const PERKS = [
  { icon: Stethoscope, label: "Every medical cost covered" },
  { icon: Dna, label: "Genetic testing at no cost to you" },
  { icon: CalendarClock, label: "Appointments that fit your life" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Hero
        art="home"
        eyebrow={SITE.subtitle}
        title={
          <>
            Every family tree <Em>begins with a kindness.</Em>
          </>
        }
        subtitle="Become an egg or sperm donor and help someone grow the family they have been hoping for — with a coordinator beside you, every medical cost covered, and compensation for your time."
        footnote={
          <ul className="text-muted flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {PERKS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="text-leaf size-4" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        }
      >
        <Button asChild size="lg">
          <Link href="/egg-donor">Become an Egg Donor</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/sperm-donor">Become a Sperm Donor</Link>
        </Button>
      </Hero>

      <WavyDivider />

      {/* I. A letter */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24" aria-labelledby="letter-title">
        <div className="relative mx-auto max-w-2xl">
          <Sprig className="text-leaf/40 pointer-events-none absolute top-6 -left-24 hidden h-64 w-24 -rotate-6 lg:block" />
          <Sprig className="text-lemon-deep/40 pointer-events-none absolute -right-24 bottom-0 hidden h-56 w-20 -scale-x-100 rotate-6 lg:block" />
          <article className="bg-card relative rounded-[0.25rem] px-6 py-10 shadow-[0_24px_60px_-30px_rgba(44,58,30,0.4)] sm:px-12 md:py-14">
            <p className="text-muted text-xs font-semibold tracking-[0.24em] uppercase">
              A letter, before anything else
            </p>
            <h2 id="letter-title" className="text-foreground mt-4 text-4xl italic md:text-5xl">
              To our future donors,
            </h2>
            <div className="text-foreground/90 mt-6 space-y-5 text-lg leading-[1.85]">
              <p className="drop-cap">
                Thank you for stopping here a while. To donate is a quiet and generous thing — a
                kindness that may help someone you will never meet hold the family they have been
                hoping for.
              </p>
              <p>
                It is also a real decision, and it deserves room. So we will go slowly and speak
                plainly: what is involved, what is asked of you, and what isn&apos;t. A coordinator
                will answer every question you bring, and there is never any pressure to continue.
              </p>
              <blockquote className="border-lemon text-primary my-8 border-l-2 pl-6 font-serif text-2xl leading-snug italic md:text-[1.7rem]">
                “Take your time. When you&apos;re ready, we&apos;ll be glad to walk alongside you.”
              </blockquote>
            </div>
            <div className="mt-10 flex items-end justify-between gap-4">
              <p className="font-serif text-xl leading-snug">
                <span className="text-muted italic">Warmly,</span>
                <br />
                <span className="text-primary text-2xl">The {SITE.brand} team</span>
              </p>
              <LogoMark className="h-14 w-12 shrink-0 opacity-90" />
            </div>
          </article>
        </div>
      </section>

      {/* II. How it unfolds — a winding vine */}
      <Section
        eyebrow="How it unfolds"
        title={
          <>
            Four small steps, <Em>taken at your pace</Em>
          </>
        }
        className="md:pb-24"
      >
        <ol className="relative mx-auto max-w-4xl">
          <svg
            aria-hidden
            viewBox="0 0 100 400"
            preserveAspectRatio="none"
            className="absolute inset-y-0 left-1/2 hidden h-full w-28 -translate-x-1/2 md:block"
          >
            <path
              d="M50 0 C 95 50, 5 100, 50 150 S 95 250, 50 300 S 5 370, 50 400"
              fill="none"
              stroke="#8fae6a"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span
            aria-hidden
            className="vine-line absolute top-4 bottom-4 left-[1.3rem] w-3 md:hidden"
          />
          {UNFOLDS.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <li
                key={s.title}
                className="relative pb-10 pl-16 last:pb-0 md:grid md:grid-cols-2 md:gap-24 md:pb-14 md:pl-0"
              >
                <span className="absolute top-0 left-0 flex size-11 items-center justify-center md:left-1/2 md:size-14 md:-translate-x-1/2">
                  <span
                    aria-hidden
                    className={cn(
                      "leaf-shape absolute inset-0",
                      right ? "bg-accent -scale-x-100" : "bg-lemon",
                    )}
                  />
                  <span
                    className={cn(
                      "relative font-serif text-xl italic md:text-2xl",
                      right ? "text-white" : "text-foreground",
                    )}
                  >
                    {i + 1}
                  </span>
                </span>
                <div className={cn(right ? "md:col-start-2" : "md:text-right")}>
                  <h3 className="text-foreground text-2xl md:text-3xl">{s.title}</h3>
                  <p className="text-muted mt-2 leading-relaxed">{s.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* III. Compensation in arch-topped cards */}
      <HillsEdge className="text-muted-bg" />
      <div className="bg-muted-bg">
        <Section
          eyebrow="For your time"
          title={
            <>
              Compensation, <Em>offered plainly</Em>
            </>
          }
        >
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {[
              {
                href: "/egg-donor",
                who: "For egg donors",
                amount: SITE.eggComp,
                art: <LemonIcon className="mx-auto size-14" />,
              },
              {
                href: "/sperm-donor",
                who: "For sperm donors",
                amount: spermComp,
                art: <Leaf className="text-leaf mx-auto size-12" />,
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group border-border bg-card relative flex flex-col items-center overflow-hidden rounded-t-[14rem] rounded-b-[1.75rem] border px-7 pt-16 pb-9 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_50px_-30px_rgba(44,58,30,0.5)]"
              >
                {c.art}
                <p className="text-muted mt-5 text-xs font-semibold tracking-[0.22em] uppercase">
                  {c.who}
                </p>
                <p
                  className={cn(
                    "text-foreground mt-3 font-serif",
                    c.amount.length > 32
                      ? "max-w-xs text-[1.6rem]/[1.25] md:text-[1.85rem]/[1.25]"
                      : "text-[2rem]/[1.15] md:text-[2.4rem]/[1.15]",
                  )}
                >
                  {c.amount}
                </p>
                <p className="text-accent mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold underline decoration-1 underline-offset-4">
                  Read the chapter
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                </p>
              </Link>
            ))}
          </div>
          <p className="text-muted mx-auto mt-8 max-w-4xl text-center text-sm italic">
            Amounts vary by program and are paid for your time, effort and commitment.
          </p>
        </Section>
      </div>
      <HillsEdge className="text-muted-bg rotate-180" />

      {/* IV. Why us — a two-page journal spread */}
      <Section
        eyebrow="From our garden journal"
        title={
          <>
            What you can <Em>count on from us</Em>
          </>
        }
      >
        <div className="border-border bg-card relative grid rounded-[0.25rem] border shadow-[0_24px_60px_-40px_rgba(44,58,30,0.45)] md:grid-cols-2">
          {/* the book's gutter */}
          <span
            aria-hidden
            className="from-border/0 via-border to-border/0 absolute inset-y-6 left-1/2 hidden w-px bg-gradient-to-b md:block"
          />
          {[JOURNAL.slice(0, 2), JOURNAL.slice(2)].map((page, p) => (
            <div
              key={p}
              className={cn(
                "space-y-10 px-6 py-10 sm:px-10 md:py-12",
                p === 1 && "border-border border-t md:border-t-0",
              )}
            >
              {page.map(({ art: Art, title, body }, i) => (
                <div key={title} className="flex gap-5">
                  <Art className="size-14 shrink-0 md:size-16" />
                  <div>
                    <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
                      No. {p * 2 + i + 1}
                    </p>
                    <h3 className="text-foreground mt-1 text-2xl italic">{title}</h3>
                    <p className="text-muted mt-1.5 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      {/* V. Mission band — a pull-quote */}
      <HillsEdge className="text-primary mt-6" />
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <Sprig className="pointer-events-none absolute top-10 left-4 hidden h-56 w-20 -rotate-12 text-[#d9e6bf]/35 md:left-16 md:block md:h-72 md:w-24" />
        <Sprig className="pointer-events-none absolute right-4 bottom-6 hidden h-56 w-20 -scale-x-100 rotate-12 text-[#d9e6bf]/35 md:right-16 md:block md:h-72 md:w-24" />
        <figure className="relative mx-auto max-w-3xl px-8 py-16 text-center md:py-24">
          <span
            aria-hidden
            className="text-lemon block font-serif text-7xl leading-none italic md:text-8xl"
          >
            “
          </span>
          <blockquote className="font-serif text-[2rem] leading-snug font-normal italic md:text-5xl md:leading-[1.2]">
            A family tree has many roots. Some are planted by strangers — and we mean to honour each
            one with care, honesty and respect.
          </blockquote>
          <figcaption className="mt-8 text-xs font-semibold tracking-[0.24em] uppercase opacity-80">
            Why we do this work
          </figcaption>
        </figure>
      </section>
      <HillsEdge className="text-primary rotate-180" />

      {/* VI. FAQ */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.8fr] md:gap-16">
          <div>
            <p className="text-leaf-deep mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase">
              <Leaf className="text-leaf size-4 -rotate-12" />
              Questions
            </p>
            <h2 className="text-primary text-[2.3rem] leading-[1.08] md:text-[3.2rem]">
              Things people <Em>often ask us</Em>
            </h2>
            <p className="text-muted mt-4 leading-relaxed">
              A few honest answers, to begin with. There are more whenever you want them.
            </p>
            <Link
              href="/faq"
              className="link-underline text-primary mt-6 inline-flex items-center gap-1.5 font-semibold"
            >
              Read every question <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <FaqList items={HOME_FAQ} />
        </div>
      </Section>

      {/* VII. Referral */}
      <ReferralBanner />
    </>
  );
}
