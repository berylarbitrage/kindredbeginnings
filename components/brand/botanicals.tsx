import { cn } from "@/lib/utils";

/**
 * Small hand-drawn-style botanical line drawings used as ornaments.
 * All decorative: hidden from assistive tech. Colour comes from `currentColor`.
 */

/** A single leaf outline with a centre vein. */
export function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none">
      <path
        d="M5 27 C 4 16, 11 6, 27 5 C 27.5 19, 19 27.5, 5 27 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5 27 C 11 21, 16 15, 22 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A filled leaf — used as list bullets and step markers. */
export function LeafSolid({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path d="M5 27 C 4 16, 11 6, 27 5 C 27.5 19, 19 27.5, 5 27 Z" fill="currentColor" />
      <path
        d="M6 26 C 11 21, 16 15, 22 10"
        stroke="var(--paper)"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

/** A slender sprig: wavy stem with alternating leaves. */
export function Sprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 160" className={className} aria-hidden fill="none">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 158 C 26 130, 36 106, 30 80 C 25 56, 34 34, 31 6" />
        <path d="M30 128 C 18 126, 9 116, 7 104 C 19 104, 28 114, 30 128 Z" />
        <path d="M31 104 C 43 102, 52 92, 54 80 C 42 80, 33 90, 31 104 Z" />
        <path d="M29 80 C 17 78, 9 68, 8 56 C 20 57, 28 67, 29 80 Z" />
        <path d="M32 56 C 43 54, 50 45, 51 34 C 40 35, 33 44, 32 56 Z" />
        <path d="M31 30 C 23 28, 18 20, 19 12 C 27 14, 31 21, 31 30 Z" />
        <path d="M31 22 C 37 19, 40 13, 39 7 C 33 9, 31 15, 31 22 Z" />
      </g>
    </svg>
  );
}

/** A small hand-drawn sun with uneven rays. */
export function SunMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden fill="none">
      <circle cx="24" cy="24" r="9" fill="currentColor" opacity="0.9" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M24 4 v7" />
        <path d="M24 37 v7" />
        <path d="M4 24 h7" />
        <path d="M37 24 h7" />
        <path d="M9.5 9.5 l5 5" />
        <path d="M33.5 33.5 l5 5" />
        <path d="M38.5 9.5 l-5 5" />
        <path d="M14.5 33.5 l-5 5" />
      </g>
    </svg>
  );
}

/** Thin wavy horizontal divider with a small sprig in the middle. */
export function WavyDivider({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto flex max-w-6xl items-center gap-4 px-4", className)} aria-hidden>
      <span className="divider-wave flex-1 opacity-70" />
      <Leaf className="text-sage size-6 shrink-0 -rotate-12" />
      <span className="divider-wave flex-1 opacity-70" />
    </div>
  );
}

/** Rolling hills edge — sits at the top of a coloured band. */
export function HillsEdge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={cn("block h-8 w-full md:h-12", className)}
      aria-hidden
    >
      <path
        d="M0 60 V38 C 160 10, 320 8, 480 30 S 820 58, 1000 30 S 1300 4, 1440 26 V60 Z"
        fill="currentColor"
      />
    </svg>
  );
}
