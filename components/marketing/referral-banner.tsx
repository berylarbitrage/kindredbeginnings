import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { LemonIcon, Sprig } from "@/components/brand/botanicals";

export function ReferralBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="bg-muted-bg arch-outline relative overflow-hidden rounded-t-[10rem] rounded-b-[2rem] px-6 pt-16 pb-10 text-center md:rounded-t-[14rem] md:px-16 md:pt-20 md:pb-14">
        <Sprig className="text-leaf-deep/35 pointer-events-none absolute bottom-0 left-4 h-40 w-14 -rotate-6 md:left-12 md:h-52 md:w-20" />
        <Sprig className="text-lemon-deep/40 pointer-events-none absolute right-4 bottom-0 h-36 w-12 -scale-x-100 rotate-6 md:right-12 md:h-48 md:w-16" />
        <div className="relative mx-auto max-w-xl">
          <LemonIcon className="mx-auto size-14" />
          <h2 className="text-primary mt-4 text-3xl md:text-5xl">
            Refer a friend,{" "}
            <em className="text-lemon-ink block font-normal">earn {SITE.referralBonus}</em>
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            Know someone who&apos;d be a wonderful donor? Share your link and earn a bonus when they
            complete a donation.
          </p>
          <Button asChild size="lg" className="mt-7">
            <Link href="/refer">Get My Referral Link</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
