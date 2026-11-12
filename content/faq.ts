import { ELIGIBILITY } from "@/config/eligibility";
import { PARTNER_CLINICS_LINE, SITE, spermComp } from "@/config/site";

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
        a: "With a short pre-screen — about three minutes of simple questions. We won't ask for a Social Security number, medical records or photos at this stage; just enough to see whether a program might fit.",
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
        q: "How is an egg donor compensated?",
        a: `Typically ${SITE.eggComp}, for your time and commitment. Medical, travel, legal and insurance costs are covered separately — you never pay out of pocket for anything related to your donation.`,
      },
      {
        q: "Is egg donation right for me?",
        a: `Generally someone ${egg.minAge}–${egg.maxAge} years old with a BMI under ${egg.maxBmi}, who doesn't smoke, has regular cycles and has finished at least high school.`,
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
        q: "Will I need time away from work or school?",
        a: "A little. Most monitoring appointments are early in the morning; you'll want the retrieval day off, and possibly the day after.",
      },
      {
        q: "Will my name be kept from the family?",
        a: "Usually, yes — though some intended parents ask for a known or open-ID arrangement. You'll always know which before you agree, and it will be written into your legal contract.",
      },
      {
        q: "Could I donate again one day?",
        a: "Many donors can, within clinic guidelines and industry recommendations on the total number of cycles.",
      },
    ],
  },
  sperm: {
    title: "On sperm donation",
    items: [
      {
        q: "How is a sperm donor compensated?",
        a: `${spermComp}. It's paid for your time and commitment once a donation is completed.`,
      },
      {
        q: "Is sperm donation right for me?",
        a: `Generally someone ${sperm.minAge}–${sperm.maxAge}, at least ${Math.floor(sperm.minHeightInches / 12)}'${sperm.minHeightInches % 12}" tall, who doesn't smoke and is in college or has graduated.`,
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
        q: "Why the height and education guidelines?",
        a: "They reflect what intended-parent families ask for. They have no bearing on compensation.",
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
