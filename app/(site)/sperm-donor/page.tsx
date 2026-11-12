import type { Metadata } from "next";
import { DonorLanding } from "@/components/marketing/donor-landing";
import { Em } from "@/components/marketing/hero";
import { PARTNER_CLINICS_LINE, SITE, spermComp } from "@/config/site";

export const metadata: Metadata = {
  title: "Become a Sperm Donor",
  description: `A gentle, step-by-step guide to sperm donation with ${SITE.brand}: apply, join our donor database and be matched with a family. ${spermComp}. U.S. and international donors welcome.`,
  alternates: { canonical: "/sperm-donor" },
};

export default function SpermDonorPage() {
  return (
    <DonorLanding
      c={{
        type: "sperm",
        hero: {
          eyebrow: "A chapter on sperm donation",
          title: (
            <>
              Help a family tree <Em>put out new leaves.</Em>
            </>
          ),
          subtitle: `Apply online, join our donor database and wait to be chosen by a family. ${spermComp}.`,
        },
        opening: [
          "Sperm donation with us works the way an agency match does: you apply, we get to know you, and your profile waits in our donor database until a family chooses you. Nothing medical happens before that moment.",
          "This page sets out the whole path — what's asked of you, what you receive, how a match unfolds and the questions people tend to ask. Take it at whatever pace suits you.",
        ],
        partnerNote: (
          <>
            <strong>How we work:</strong> {SITE.brand} looks after recruitment, your application and
            matching you with a family. Medical screening, testing and sample handling are{" "}
            {PARTNER_CLINICS_LINE}.
          </>
        ),
        comp: {
          amount: spermComp,
          covered: [
            "Medical screening once you're matched",
            "Genetic and infectious-disease testing",
            "Travel, if a match requires it",
            "A dedicated coordinator from application to completion",
          ],
          note: "It is paid for your time and commitment once a donation is completed; the exact amount depends on the program.",
        },
        steps: [
          { title: "Pre-screen", body: "A few simple questions online — about 3 minutes." },
          {
            title: "Full application",
            body: "Carry straight on into your profile and family health history; your progress saves itself.",
          },
          {
            title: "Coordinator call",
            body: "A short conversation so we can get to know you and answer what you'd like to ask.",
          },
          {
            title: "Approved — your profile joins our donor database",
            body: "Once approved, your anonymous profile is added to our donor database.",
          },
          {
            title: "A family chooses you",
            body: "Intended parents read profiles and choose a donor. We'll tell you as soon as you're matched.",
          },
          {
            title: "Medical screening & collection",
            body: `After a match, a partner clinic arranges screening, testing and collection — ${PARTNER_CLINICS_LINE}.`,
          },
          {
            title: "Donor agreement",
            body: "You read and sign your donor agreement before any donation.",
          },
          {
            title: "Compensation",
            body: "Provided per completed donation; the amount varies by program.",
          },
        ],
        concerns: [
          {
            title: "Is it safe?",
            body: "Sperm donation is non-invasive. Screening involves routine tests carried out by licensed medical staff at our partner clinics.",
          },
          {
            title: "How much time does it ask of me?",
            body: "Before a match, only your application and a short call with your coordinator. After a match, the partner clinic explains every appointment involved before you agree to anything.",
          },
          {
            title: "Will I stay anonymous?",
            body: "That depends on the family's wishes. Some arrangements are anonymous, others known or open-ID. You'll know which before you sign.",
          },
          {
            title: "What about legal responsibility?",
            body: "Donations are made under a written donor agreement that generally protects donors from parental rights and obligations. Laws vary by location, and the details will be explained to you.",
          },
        ],
      }}
    />
  );
}
