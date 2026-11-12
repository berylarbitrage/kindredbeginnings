import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Write to ${SITE.brand} with any question about becoming an egg or sperm donor — a real person will answer.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Write to us"
      title="Send us a note"
      intro="Whatever you're wondering, however small — a real person will read it and write back."
    >
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div className="space-y-4">
          <p className="flex items-center gap-3">
            <Mail className="text-leaf-deep size-5" aria-hidden />
            <a href={`mailto:${SITE.contactEmail}`} className="link-underline">
              {SITE.contactEmail}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <Phone className="text-leaf-deep size-5" aria-hidden />
            <a href={`tel:${SITE.contactPhone.replace(/\D/g, "")}`} className="link-underline">
              {SITE.contactPhone}
            </a>
          </p>
          <p className="text-muted text-sm">{SITE.serviceArea}.</p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
