"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/config/site";
import { ApplyMenu } from "@/components/layout/apply-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background/95 sticky top-0 z-40 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={cn(
                "text-foreground/85 hover:text-primary decoration-accent text-[0.95rem] whitespace-nowrap underline-offset-[0.4em] hover:underline",
                pathname === l.href && "text-primary underline",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ApplyMenu className="hidden sm:block" />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <div className="divider-wave mx-auto max-w-6xl opacity-60" aria-hidden />
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="bg-background px-4 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href} className="border-border border-b border-dashed">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="text-primary block py-3 font-serif text-xl font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <Button asChild>
              <Link href="/apply/egg" onClick={() => setOpen(false)}>
                Apply: Egg donor
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/apply/sperm" onClick={() => setOpen(false)}>
                Apply: Sperm donor
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
