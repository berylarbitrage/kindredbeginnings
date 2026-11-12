import Link from "next/link";
import { DISCLAIMER, SITE } from "@/config/site";
import { Logo } from "@/components/layout/logo";
import { CookieSettingsLink } from "@/components/analytics/cookie-settings-link";
import { HillsEdge, Sprig } from "@/components/brand/botanicals";

const linkClass = "hover:text-primary hover:underline decoration-accent underline-offset-4";

export function Footer() {
  return (
    <footer className="relative mt-24">
      <HillsEdge className="text-muted-bg" />
      <div className="bg-muted-bg relative overflow-hidden">
        <Sprig className="text-leaf/40 pointer-events-none absolute -right-2 bottom-6 hidden h-56 w-20 rotate-12 md:block" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-6 pb-12 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <Logo />
            <p className="text-muted max-w-sm font-serif text-lg leading-snug italic">
              {SITE.tagline}
            </p>
            <p className="flex flex-col items-start text-sm">
              <a className="link-underline inline-block py-2" href={`mailto:${SITE.contactEmail}`}>
                {SITE.contactEmail}
              </a>
              <a
                className="link-underline inline-block py-2"
                href={`tel:${SITE.contactPhone.replace(/\D/g, "")}`}
              >
                {SITE.contactPhone}
              </a>
            </p>
            <p className="text-muted text-sm">{SITE.serviceArea}</p>
          </div>
          <div>
            <h2 className="text-primary mb-3 font-serif text-xl font-medium italic">Donate</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className={linkClass} href="/egg-donor">
                  Become an Egg Donor
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/sperm-donor">
                  Become a Sperm Donor
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/refer">
                  Refer a Friend
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/portal">
                  Applicant Login
                </Link>
              </li>
              {/* Intended Parent Login (/catalog/login) hidden for v1 — code kept. */}
            </ul>
          </div>
          <div>
            <h2 className="text-primary mb-3 font-serif text-xl font-medium italic">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className={linkClass} href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/terms">
                  Terms of Use
                </Link>
              </li>
              <li>
                <CookieSettingsLink />
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4">
          <div className="divider-wave opacity-60" aria-hidden />
        </div>
        <div className="text-muted mx-auto max-w-6xl space-y-2 px-4 py-6 text-xs leading-relaxed">
          <p>
            <strong className="text-foreground">Disclaimer:</strong> {DISCLAIMER}
          </p>
          <p>
            © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
