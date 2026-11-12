import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Application Received",
  robots: { index: false, follow: false },
};

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const eligible = status === "eligible";

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      {eligible ? (
        <>
          <CheckCircle2 className="text-leaf-deep mx-auto size-14" strokeWidth={1.4} aria-hidden />
          <h1 className="text-primary mt-4 text-4xl font-medium md:text-5xl">
            Lovely news — you pre-qualify.
          </h1>
          <p className="text-muted mt-4 text-lg">
            Thank you for applying. It seems you already have an account with us, so to keep things
            secure we&apos;ve emailed you a sign-in link to carry on with your full application.
            Your progress is saved after every step.
          </p>
          <ol className="mx-auto mt-8 max-w-md space-y-3 text-left">
            <li>
              <strong>1.</strong> Look in your inbox (and your spam folder) for a note from{" "}
              {SITE.brand}.
            </li>
            <li>
              <strong>2.</strong> Finish your full application, at your own pace, in the secure
              portal.
            </li>
            <li>
              <strong>3.</strong> Your coordinator will write to arrange a short video call.
            </li>
          </ol>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/portal">Go to Applicant Portal</Link>
            </Button>
          </div>
          <p className="text-muted mt-6 text-sm">
            No email yet? You can ask for a fresh link from the portal sign-in page.
          </p>
        </>
      ) : (
        <>
          <Heart className="text-accent mx-auto size-14" strokeWidth={1.4} aria-hidden />
          <h1 className="text-primary mt-4 text-4xl font-medium md:text-5xl">
            Thank you for thinking of this
          </h1>
          <p className="text-muted mt-4 text-lg">
            Under the current requirements of our partner programs, we aren&apos;t able to take your
            application further just now. Those requirements are set by medical providers, and they
            say nothing about you.
          </p>
          <p className="mt-4 text-lg">
            There is still a way to help: refer a friend, and we&apos;ll send you{" "}
            <strong>{SITE.referralBonus}</strong> if they go on to complete a donation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/refer">Refer a Friend</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
