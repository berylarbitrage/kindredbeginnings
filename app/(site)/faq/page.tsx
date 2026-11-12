import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/marketing/section";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/jsonld";
import { Button } from "@/components/ui/button";
import { FAQ, type FaqGroup } from "@/content/faq";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Gentle, honest answers about egg and sperm donation: the pre-screen, compensation, matching, medical testing, privacy and more.",
  alternates: { canonical: "/faq" },
};

const ORDER: FaqGroup[] = ["general", "egg", "sperm"];

export default function FaqPage() {
  const all = ORDER.flatMap((g) => FAQ[g].items);
  return (
    <>
      <JsonLd data={faqJsonLd(all)} />
      <Section
        eyebrow="Questions"
        title="Things people ask us"
        intro="Gathered from the questions donors bring us most. If yours isn't here, write to us any time."
      >
        <nav aria-label="FAQ sections" className="mb-10 flex flex-wrap gap-2">
          {ORDER.map((g) => (
            <a
              key={g}
              href={`#${g}`}
              className="border-foreground/30 hover:border-accent hover:text-accent rounded-full border-[1.5px] px-5 py-2 text-sm font-semibold transition-colors"
            >
              {FAQ[g].title}
            </a>
          ))}
        </nav>
        <div className="space-y-12">
          {ORDER.map((g) => (
            <div key={g} id={g} className="scroll-mt-24">
              <h2 className="text-primary mb-4 text-3xl font-medium italic md:text-4xl">
                {FAQ[g].title}
              </h2>
              <FaqList items={FAQ[g].items} />
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/apply/egg">Apply as an Egg Donor</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/apply/sperm">Apply as a Sperm Donor</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
