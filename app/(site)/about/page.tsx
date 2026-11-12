import type { Metadata } from "next";
import Link from "next/link";
import { Em } from "@/components/marketing/hero";
import { Section } from "@/components/marketing/section";
import { Button } from "@/components/ui/button";
import { PARTNER_CLINICS_LINE, SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Who we are at ${SITE.brand}, what we believe, and how we walk beside egg and sperm donors from the first question onward.`,
  alternates: { canonical: "/about" },
};

const BELIEFS = [
  {
    title: "Informed choice.",
    body: "Donors deserve clear, balanced information — the risks included — before deciding anything.",
  },
  {
    title: "Fair, plainly stated compensation.",
    body: "Compensation honours your time and commitment. It is never based on appearance, ethnicity or any other personal trait.",
  },
  {
    title: "Privacy, always.",
    body: "Your personal and health information is protected, and it is never sold.",
  },
  {
    title: "A real person beside you.",
    body: "Every donor has a dedicated coordinator — someone you can simply call or text.",
  },
];

export default function AboutPage() {
  return (
    <Section
      eyebrow="About us"
      title={
        <>
          A small team, <Em>tending something tender</Em>
        </>
      }
    >
      <div className="max-w-[40rem] space-y-6 text-lg leading-[1.85]">
        <p className="drop-cap">
          {SITE.brand} brings generous people together with the families who hope for their help. We
          find and pre-screen egg and sperm donors, and we walk with them through every step — with
          care, honesty and respect.
        </p>
        <h2 className="text-primary pt-6 text-3xl italic">What we believe</h2>
        <ul className="space-y-4">
          {BELIEFS.map((b) => (
            <li key={b.title} className="border-lemon border-l-2 pl-5 text-base leading-relaxed">
              <strong className="font-serif text-lg font-medium italic">{b.title}</strong> {b.body}
            </li>
          ))}
        </ul>
        <h2 className="text-primary pt-6 text-3xl italic">How we work</h2>
        <p className="text-base leading-relaxed">
          We look after outreach, pre-screening, coordination and introducing donors to
          intended-parent families. All medical evaluations, testing, procedures and sample handling
          are {PARTNER_CLINICS_LINE}. {SITE.serviceArea}.
        </p>
        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          <Button asChild>
            <Link href="/egg-donor">Become an Egg Donor</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sperm-donor">Become a Sperm Donor</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
