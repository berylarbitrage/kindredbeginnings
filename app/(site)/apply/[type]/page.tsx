import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrescreenForm } from "@/components/apply/prescreen-form";
import { isDonorType } from "@/config/eligibility";
import { turnstileSiteKey } from "@/lib/turnstile";

export function generateStaticParams() {
  return [{ type: "egg" }, { type: "sperm" }];
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  return {
    title: type === "egg" ? "Egg Donor Pre-Screen" : "Sperm Donor Pre-Screen",
    alternates: { canonical: `/apply/${type}` },
  };
}

export default async function ApplyPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!isDonorType(type)) notFound();
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:py-14">
      <p className="text-sage-deep text-xs font-semibold tracking-[0.24em] uppercase">
        {type === "egg" ? "Egg donor" : "Sperm donor"} application
      </p>
      <h1 className="text-primary mt-3 mb-8 text-[2.4rem] leading-[1.08] font-medium md:text-5xl">
        Let&apos;s see if you <em className="text-accent font-normal">pre-qualify</em>
      </h1>
      <PrescreenForm type={type} turnstileSiteKey={turnstileSiteKey()} />
    </div>
  );
}
