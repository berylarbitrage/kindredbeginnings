import type { Metadata } from "next";
import { DonorLanding } from "@/components/marketing/donor-landing";
import { Em } from "@/components/marketing/hero";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Become an Egg Donor",
  description: `A gentle, step-by-step guide to egg donation with ${SITE.brand}. Compensation: ${SITE.eggComp}, with medical, travel, legal and insurance costs covered. The pre-screen takes about 3 minutes.`,
  alternates: { canonical: "/egg-donor" },
};

export default function EggDonorPage() {
  return (
    <DonorLanding
      c={{
        type: "egg",
        hero: {
          eyebrow: "A chapter on egg donation",
          title: (
            <>
              A small gift, <Em>a whole family tree.</Em>
            </>
          ),
          subtitle: `Egg donors are compensated ${SITE.eggComp}, and walk the whole way with a coordinator who knows their name.`,
        },
        opening: [
          "Egg donation begins long before any appointment — usually with a quiet question about whether it might be right for you. This page is here to help you answer it, slowly and with everything in view.",
          "Below you'll find what's asked of a donor, what you receive in return, how the weeks unfold and the questions people most often bring to us. Read as much or as little as you like; nothing here commits you to anything.",
        ],
        comp: {
          amount: SITE.eggComp,
          covered: [
            "All medical screening, medication and procedures",
            "Travel and accommodation, if needed",
            "Independent legal consultation",
            "Complication insurance for your cycle",
          ],
        },
        steps: [
          { title: "Pre-screen", body: "A few simple questions online — about 3 minutes." },
          {
            title: "Full application",
            body: "Your profile, health history and photos, gathered in your secure portal.",
          },
          {
            title: "Video interview",
            body: "A short call with your coordinator to talk the process through together.",
          },
          {
            title: "Matching",
            body: "Your anonymous profile is shared with intended parents who are looking for a donor.",
          },
          {
            title: "Medical & psychological evaluation",
            body: "Blood work, ultrasound, genetic testing and a session with a mental-health professional at a partner clinic.",
          },
          {
            title: "Legal contract",
            body: "An agreement reviewed by your own independent attorney, at no cost to you.",
          },
          {
            title: "Ovarian stimulation (about 10–14 days)",
            body: "Daily hormone injections, with regular monitoring appointments.",
          },
          {
            title: "Egg retrieval",
            body: "A short outpatient procedure under light sedation (about 20–30 minutes).",
          },
          { title: "Payment", body: "Your compensation is paid once the retrieval is complete." },
        ],
        concerns: [
          {
            title: "Is it safe?",
            body: "Egg donation is a well-established procedure carried out by experienced physicians. Like any medical treatment it carries risks — ovarian hyperstimulation syndrome (OHSS), for example, or reactions to medication — and the clinic watches for them closely. They will go through every risk with you before you agree.",
          },
          {
            title: "Will it hurt?",
            body: "The injections use small needles, and most donors settle into them quickly. Retrieval happens under sedation. Cramping and bloating for a few days afterwards is common.",
          },
          {
            title: "Could it affect my own fertility?",
            body: "Current research hasn't found that egg donation reduces fertility in healthy donors, though long-term data is still limited. Please talk your own situation through with a physician.",
          },
          {
            title: "Will I stay anonymous?",
            body: "Most donations are anonymous. Some families ask for a known or open-ID arrangement; you'll always know which before you agree, and it will be written into your contract.",
          },
        ],
      }}
    />
  );
}
