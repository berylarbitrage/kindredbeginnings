import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Dna,
  HeartHandshake,
  MapPin,
  Receipt,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Em, Hero } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { FaqList } from "@/components/marketing/faq-list";
import { ReferralBanner } from "@/components/marketing/referral-banner";
import { JsonLd } from "@/components/marketing/jsonld";
import { LogoMark } from "@/components/brand/logo-mark";
import { HillsEdge, Leaf, LemonIcon, Sprig, WavyDivider } from "@/components/brand/botanicals";
import { Button } from "@/components/ui/button";
import { SITE, spermComp } from "@/config/site";
import { HOME_FAQ } from "@/content/faq";
import { organizationJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const PROCESS = [
  {
    title: "Apply",
    body: "Answer a few gentle questions online. It takes about 3 minutes.",
  },
  {
    title: "Complete your profile",
    body: "Finish your application at your own pace and meet your coordinator.",
  },
  {
    title: "Get matched with a family",
    body: "We introduce your profile to intended parents; screening follows at a partner clinic.",
  },
  {
    title: "Get compensated",
    body: "Receive compensation for your time, effort and commitment.",
  },
];

const WHY = [
  {
    icon: HeartHandshake,
    title: "A dedicated coordinator",
    body: "One real person walks beside you through every step and answers your questions.",
  },
  {
    icon: Receipt,
    title: "Transparent compensation",
    body: "Clear amounts up front. Compensation is for your time, never based on personal traits.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy protected",
    body: "Your information is encrypted, never sold, and only shared with partner clinics.",
  },
  {
    icon: MapPin,
    title: "U.S. & international",
    body: `${SITE.serviceArea}.`,
  },
];

const PERKS = [
  { icon: Stethoscope, label: "All medical costs covered" },
  { icon: Dna, label: "Free genetic testing" },
  { icon: CalendarClock, label: "Flexible scheduling" },
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
            Where kindness <Em>becomes kin.</Em>
          </>
        }
        subtitle="Become an egg or sperm donor and help someone become a parent — with a dedicated coordinator, every medical cost covered, and thoughtful compensation for your time."
        footnote={
          <ul className="text-muted flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {PERKS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="text-leaf-deep size-4" aria-hidden />
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

      {/* A letter to future donors */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="relative mx-auto max-w-2xl">
          <Sprig className="text-leaf/40 pointer-events-none absolute top-6 -left-24 hidden h-64 w-24 -rotate-6 lg:block" />
          <Sprig className="text-lemon-deep/40 pointer-events-none absolute -right-24 bottom-0 hidden h-56 w-20 -scale-x-100 rotate-6 lg:block" />
          <article className="bg-card relative rounded-[0.25rem] px-6 py-10 shadow-[0_24px_60px_-30px_rgba(44,58,30,0.4)] sm:px-12 md:py-14">
            <p className="text-muted text-xs font-semibold tracking-[0.24em] uppercase">
              A note from us
            </p>
            <h2 className="text-foreground mt-4 text-4xl italic md:text-5xl">
              To our future donors,
            </h2>
            <div className="text-foreground/90 mt-6 space-y-5 text-lg leading-[1.85]">
              <p>
                Thank you for being curious. Choosing to donate is a quiet, generous act — the kind
                that can help someone you may never meet hold the family they&apos;ve hoped for.
              </p>
              <p>
                We know it&apos;s also a big decision. So we&apos;ll keep things honest and
                unhurried: clear information about what&apos;s involved, a real coordinator to
                answer your questions, and no pressure at any point along the way.
              </p>
              <p>Whenever you&apos;re ready, we&apos;d be glad to walk beside you.</p>
            </div>
            <div className="mt-10 flex items-end justify-between gap-4">
              <p className="font-serif text-xl leading-snug">
                <span className="text-muted italic">With gratitude,</span>
                <br />
                <span className="text-primary text-2xl">The {SITE.brand} team</span>
              </p>
              <LogoMark className="h-14 w-12 shrink-0 opacity-90" />
            </div>
          </article>
        </div>
      </section>

      {/* Compensation in arch-topped cards */}
      <HillsEdge className="text-muted-bg" />
      <div className="bg-muted-bg">
        <Section
          eyebrow="Compensation"
          title={
            <>
              Compensated for your <Em>time and commitment</Em>
            </>
          }
        >
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {[
              {
                href: "/egg-donor",
                who: "Egg donors",
                amount: SITE.eggComp,
                art: <LemonIcon className="mx-auto size-14" />,
                tone: "bg-card",
              },
              {
                href: "/sperm-donor",
                who: "Sperm donors",
                amount: spermComp,
                art: <Leaf className="text-leaf mx-auto size-12" />,
                tone: "bg-card",
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={cn(
                  "group border-border relative flex flex-col items-center overflow-hidden rounded-t-[14rem] rounded-b-[1.75rem] border px-7 pt-16 pb-9 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_50px_-30px_rgba(44,58,30,0.5)]",
                  c.tone,
                )}
              >
                {c.art}
                <p className="text-muted mt-5 text-xs font-semibold tracking-[0.22em] uppercase">
                  {c.who}
                </p>
                <p
                  className={cn(
                    "text-foreground mt-3 font-serif leading-tight",
                    c.amount.length > 32
                      ? "max-w-xs text-[1.6rem] md:text-[1.85rem]"
                      : "text-[2rem] md:text-[2.4rem]",
                  )}
                >
                  {c.amount}
                </p>
                <p className="text-accent mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold underline decoration-1 underline-offset-4">
                  Learn more
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                </p>
              </Link>
            ))}
          </div>
          <p className="text-muted mx-auto mt-8 max-w-4xl text-center text-sm italic">
            Compensation amounts vary by program and are paid for your time, effort, and commitment.
          </p>
        </Section>
      </div>
      <HillsEdge className="text-muted-bg rotate-180" />

      {/* How it works — a winding path */}
      <Section eyebrow="How it works" title="Four simple steps" className="md:pb-24">
        <ol className="relative mx-auto max-w-4xl">
          {/* winding vine through the centre on wide screens */}
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
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {/* straight vine on small screens */}
          <span
            aria-hidden
            className="vine-line absolute top-4 bottom-4 left-[1.3rem] w-3 md:hidden"
          />
          {PROCESS.map((s, i) => {
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

      <WavyDivider />

      {/* Why donors choose us */}
      <Section
        eyebrow="Why us"
        title={
          <>
            Why donors choose <Em>{SITE.brand}</Em>
          </>
        }
      >
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {WHY.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="flex gap-5">
              <span
                className={cn(
                  "flex size-16 shrink-0 items-center justify-center",
                  i % 2 ? "blob-2 bg-accent-soft" : "blob bg-primary-soft",
                )}
              >
                <Icon
                  className={cn("size-7", i % 2 ? "text-lemon-ink" : "text-leaf")}
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              <div>
                <h3 className="text-foreground text-2xl">{title}</h3>
                <p className="text-muted mt-1.5 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Mission band */}
      <HillsEdge className="text-primary mt-6" />
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <Sprig className="pointer-events-none absolute top-10 left-4 hidden h-56 w-20 -rotate-12 text-[#d9e6bf]/35 md:left-16 md:block md:h-72 md:w-24" />
        <Sprig className="pointer-events-none absolute right-4 bottom-6 hidden h-56 w-20 -scale-x-100 rotate-12 text-[#d9e6bf]/35 md:right-16 md:block md:h-72 md:w-24" />
        <div className="relative mx-auto max-w-3xl px-8 py-16 text-center md:py-24">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase opacity-80">
            Our mission
          </p>
          <p className="mt-6 font-serif text-[2rem] leading-snug font-normal italic md:text-5xl md:leading-[1.2]">
            Every family begins somewhere. For many, it begins with a stranger&apos;s kindness — and
            we exist to honour it with care, honesty and respect.
          </p>
          <LemonIcon className="mx-auto mt-8 size-10" />
        </div>
      </section>
      <HillsEdge className="text-primary rotate-180" />

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.8fr] md:gap-16">
          <div>
            <p className="text-leaf-deep mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase">
              <Leaf className="text-leaf size-4 -rotate-12" />
              FAQ
            </p>
            <h2 className="text-primary text-[2.3rem] leading-[1.08] md:text-[3.2rem]">
              Common <Em>questions</Em>
            </h2>
            <p className="text-muted mt-4 leading-relaxed">
              Honest answers to the things donors ask us most.
            </p>
            <Link
              href="/faq"
              className="link-underline text-primary mt-6 inline-flex items-center gap-1.5 font-semibold"
            >
              See all FAQs <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <FaqList items={HOME_FAQ} />
        </div>
      </Section>

      <ReferralBanner />
    </>
  );
}
