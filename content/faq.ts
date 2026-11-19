import { ELIGIBILITY } from "@/config/eligibility";
import { PARTNER_CLINICS_LINE, SITE } from "@/config/site";

export interface FaqItem {
  q: string;
  a: string;
}

export type FaqGroup = "general" | "egg" | "sperm";

const egg = ELIGIBILITY.egg;
const sperm = ELIGIBILITY.sperm;

export const FAQ: Record<FaqGroup, { title: string; items: FaqItem[] }> = {
  general: {
    title: "Before you begin",
    items: [
      {
        q: "Where does it all start?",
        a: "With a short pre-screen — about three minutes of simple questions, plus 3–5 photos of yourself. We won't ask for a Social Security number or medical records at this stage; just enough to see whether a program might fit.",
      },
      {
        q: "And once I've sent the pre-screen?",
        a: "You'll see your first result straight away. If you pre-qualify, you can carry on into the full application right there on our website. Each step is saved as you go, and we'll also email you a link, so you can always find your way back. A coordinator will be in touch after that.",
      },
      {
        q: "Who are you, exactly?",
        a: `${SITE.brand} finds and pre-screens egg and sperm donors and introduces them to intended-parent families. Medical screening, testing, procedures and sample handling are ${PARTNER_CLINICS_LINE}.`,
      },
      {
        q: "Do I need to live in the United States?",
        a: `No. ${SITE.serviceArea}. Some programs involve travel, and when they do it is arranged and paid for.`,
      },
      {
        q: "What happens to the things I tell you?",
        a: "They're kept securely and seen only by our screening team and partner clinics. We never sell your information. Our Privacy Policy explains the details.",
      },
      {
        q: "Could I ask you to delete my information later?",
        a: `Yes. Write to ${SITE.contactEmail}. Once we've confirmed it's you, we'll delete your data, keeping only what the law requires us to hold.`,
      },
      {
        q: "May I step back if my heart changes?",
        a: "That's always yours to decide. Donation is voluntary, and you can step away from the process at any point before a procedure.",
      },
      {
        q: "Is compensation tied to how I look or who I am?",
        a: "Never. Compensation is for your time, effort and commitment — not for appearance, ethnicity, intelligence or any other personal trait.",
      },
      {
        q: "Can you advise me about my health?",
        a: "We're happy to explain how the process works, but we don't give medical advice — please bring health questions to a licensed physician. Final eligibility is decided by our partner medical providers.",
      },
      {
        q: "May I pass your name along to a friend?",
        a: `Please do. If someone you refer goes on to complete a donation, we'll send you ${SITE.referralBonus} as a thank-you. Your personal link is on our Refer a Friend page.`,
      },
    ],
  },
  egg: {
    title: "On egg donation",
    items: [
      {
        q: "What do egg donors get paid?",
        a: "Your compensation depends on how you're matched. If your eggs are matched through an egg bank, you'll typically receive $8,000 – $10,000 per cycle. If you're matched directly with a family, compensation starts at $10,000 per cycle. Experienced donors receive higher compensation than first-time donors. Compensation is paid for your time and commitment, and all medical, travel, legal and insurance costs are covered on top of that.",
      },
      {
        q: "Can I be an egg donor?",
        a: `Most of our donors are ${egg.minAge}–${egg.maxAge}, have a BMI under ${egg.maxBmi}, don't smoke or vape, have regular cycles, have no significant medical conditions, and are currently in college or have a college degree. Not sure you qualify? Take our 3-minute pre-screen to find out. Final eligibility is confirmed by our partner clinic.`,
      },
      {
        q: "How long does the journey take?",
        a: "Usually about 2–4 months from application to retrieval. Screening and appointments add up to roughly 3–6 weeks, and the medication phase itself lasts about 10–14 days.",
      },
      {
        q: "Will it change my own chances of having children?",
        a: "Current research hasn't shown that egg donation reduces fertility in healthy donors, though every body is different. The clinic's physician will talk the risks through with you — and we hope you'll ask everything you want to.",
      },
      {
        q: "Does the retrieval hurt?",
        a: "It's done under light sedation, so most donors feel nothing during the procedure. Some cramping or bloating afterwards is common and usually settles within a few days. The clinic's physician can tell you what to expect in your case.",
      },
      {
        q: "What should I know about the risks?",
        a: "As with any medical procedure, there are some: ovarian hyperstimulation syndrome (OHSS), reactions to medication and, rarely, complications from the procedure. Partner clinics watch you closely throughout to keep risks low.",
      },
      {
        q: "I use birth control. Is that a problem?",
        a: "Often not. Many methods are compatible, though some — certain implants or shots, for example — may need a pause. Just tell us what you use in the pre-screen.",
      },
      {
        q: "Will I miss work or class?",
        a: "Probably some, so plan ahead. Donation is a real commitment. If you live near the clinic, most monitoring appointments are early in the morning, and you should take retrieval day and the day after off. If you're a travel donor, plan to be away for about 7–14 days around stimulation and retrieval. Your coordinator will give you a schedule in advance so you can arrange time off from work or school.",
      },
      {
        q: "Will my name be kept from the family?",
        a: "Usually, yes — though some intended parents ask for a known or open-ID arrangement. You'll always know which before you agree, and it will be written into your legal contract.",
      },
      {
        q: "Can I donate again?",
        a: "Yes, many donors do! If your first cycle goes well and the clinic clears you medically, you can donate again. Following American Society for Reproductive Medicine (ASRM) guidelines, we limit donors to a maximum of six donation cycles. Experienced donors also receive higher compensation.",
      },
    ],
  },
  sperm: {
    title: "On sperm donation",
    items: [
      {
        q: "What do sperm donors get paid?",
        a: "You're paid for each completed donation, and the amount depends on the program. Usually, from $3,000 and up to $20,000. Compensation is for your time and commitment, and all medical screening and testing is covered at no cost to you. Your coordinator will explain the exact amount before you sign your donor agreement.",
      },
      {
        q: "Can I be a sperm donor?",
        a: `Most of our donors are ${sperm.minAge}–${sperm.maxAge}, at least ${Math.floor(sperm.minHeightInches / 12)}'${sperm.minHeightInches % 12}" tall, have a BMI under ${sperm.maxBmi}, don't smoke or vape, and are currently in college or have a college degree. Not sure you qualify? Take our 3-minute pre-screen to find out. Final eligibility is confirmed by our partner clinic.`,
      },
      {
        q: "How does sperm donation work with you?",
        a: "Much like egg donation with an agency. You complete a short pre-screen and a full application, talk with a coordinator, and once you're approved your profile joins our donor database. When a family chooses you, a partner clinic arranges screening and collection.",
      },
      {
        q: "How long might I wait to be matched?",
        a: "It varies. Some donors are matched within a few weeks of approval; for others it takes several months, depending on what families are hoping for. Your coordinator will keep you posted, and you can update your availability whenever you like.",
      },
      {
        q: "What happens in the quiet time before a match?",
        a: "Only a little: finish your application, have a short call with your coordinator, and keep your contact details current. There are no clinic visits and no samples before a match — medical screening begins only once a family has chosen you.",
      },
      {
        q: "Who looks after the medical side?",
        a: `Medical screening, testing and sample handling are ${PARTNER_CLINICS_LINE}. ${SITE.brand} looks after recruitment, your application and matching.`,
      },
      {
        q: "I live outside the U.S. Can I apply?",
        a: "Yes! We work with donors across the U.S. and internationally. If you live outside the U.S., you'll need a valid U.S. visa to donate here. If a match involves travel, we arrange it and cover the cost.",
      },
      {
        q: "Why are there height and education requirements?",
        a: "These guidelines reflect what intended parents most often look for when choosing a donor, so they help your profile get matched. They're about matching only, and they don't affect your compensation.",
      },
      {
        q: "Will my name be kept from the family?",
        a: "That depends on the family. Some ask for an anonymous donor, others for a known or open-ID arrangement. You'll always know which before agreeing, and it will be set out in your donor agreement.",
      },
      {
        q: "Would I be responsible for a child later on?",
        a: "Donations are made under a written donor agreement that generally protects donors from parental rights and obligations. Laws differ from place to place, so the agreement and our partners will walk you through the details.",
      },
    ],
  },
};

/** The questions shown on the home page. */
export const HOME_FAQ: FaqItem[] = [
  FAQ.general.items[0]!,
  FAQ.egg.items[0]!,
  FAQ.sperm.items[0]!,
  FAQ.sperm.items[3]!,
  FAQ.general.items[4]!,
];
