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

/** A small lemon with one leaf — full colour, used as an ornament. */
export function LemonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <path d="M20 13 C 24 6, 31 4, 37 6 C 34 12, 27 15, 20 13 Z" fill="var(--leaf)" />
      <path
        d="M20 13 C 19 15, 18.5 16, 18 17"
        stroke="var(--leaf-deep)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18.2 16.5 C 12 16.3, 5.5 21, 5.6 27.5 C 5.7 33.5, 11.5 37, 18 36.6 C 26 36.2, 31 31, 30.2 24.6 C 29.6 19.6, 24.6 16.7, 18.2 16.5 Z"
        fill="var(--lemon)"
      />
      <path
        d="M10 24.5 C 11 21.8, 13.2 20, 16 19.6"
        stroke="#FFF6CC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Scalloped hairline divider with a small lemon in the middle. */
export function WavyDivider({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto flex max-w-6xl items-center gap-4 px-4", className)} aria-hidden>
      <span className="divider-wave flex-1" />
      <LemonIcon className="size-7 shrink-0 -rotate-12" />
      <span className="divider-wave flex-1" />
    </div>
  );
}

const SCALLOPS = Array.from(
  { length: 24 },
  (_, i) => `Q ${i * 60 + 30} -4, ${i * 60 + 60} 14`,
).join(" ");

/** Soft scalloped edge — sits at the top of a coloured band. */
export function HillsEdge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 24"
      preserveAspectRatio="none"
      className={cn("block h-3 w-full md:h-5", className)}
      aria-hidden
    >
      <path d={`M0 24 V14 ${SCALLOPS} V24 Z`} fill="currentColor" />
    </svg>
  );
}
