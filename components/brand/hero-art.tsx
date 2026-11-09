import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Original botanical illustration inside an arched window: a sun, rolling
 * hills and hand-drawn sprigs. Inline SVG — no images, no extra requests.
 */
export function HeroArt({
  variant,
  className,
  compact = false,
}: {
  variant: "home" | "egg" | "sperm";
  className?: string;
  /** Plain arch without the blob and offset outline (used inside cards). */
  compact?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <div className={cn("relative mx-auto w-full max-w-sm", className)} aria-hidden>
      {!compact && (
        <>
          {/* clay blob behind the window */}
          <div className="blob bg-clay absolute -inset-x-5 top-12 -bottom-5 opacity-90" />
          {/* offset hand-drawn outline */}
          <div className="border-sage-deep/45 absolute inset-0 translate-x-3 -translate-y-3 rounded-t-full border" />
        </>
      )}
      <div
        className={cn(
          "border-sage-deep/70 relative aspect-[4/5] overflow-hidden rounded-t-full bg-[#F3E6D3]",
          compact ? "border" : "border-[1.5px] shadow-[0_28px_50px_-30px_rgba(47,42,36,0.5)]",
        )}
      >
        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F8EEDF" />
              <stop offset="70%" stopColor="#EED6C0" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill={`url(#sky-${id})`} />

          {variant === "home" && <HomeScene />}
          {variant === "egg" && <EggScene />}
          {variant === "sperm" && <SpermScene />}
        </svg>
      </div>
    </div>
  );
}

const INK = "#44533B";

function Sun({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const rays = Array.from({ length: 12 }, (_, i) => (i * Math.PI) / 6);
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#D9A55A" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#B9813A" strokeWidth="1.2" opacity="0.6" />
      <g stroke="#C8964A" strokeWidth="2" strokeLinecap="round">
        {rays.map((a, i) => {
          const r1 = r + 10;
          const r2 = r + (i % 2 ? 20 : 28);
          return (
            <line
              key={i}
              x1={round(cx + Math.cos(a) * r1)}
              y1={round(cy + Math.sin(a) * r1)}
              x2={round(cx + Math.cos(a) * r2)}
              y2={round(cy + Math.sin(a) * r2)}
            />
          );
        })}
      </g>
    </g>
  );
}

/** Round to 2dp so server and client render identical attribute strings. */
function round(n: number) {
  return Math.round(n * 100) / 100;
}

function Hills() {
  return (
    <g>
      <path d="M-10 330 C 70 290, 150 300, 230 330 S 360 330, 410 300 V500 H-10 Z" fill="#B7BFA4" />
      <path
        d="M-10 330 C 70 290, 150 300, 230 330 S 360 330, 410 300"
        fill="none"
        stroke={INK}
        strokeWidth="1.4"
        opacity="0.6"
      />
      <path d="M-10 380 C 90 350, 180 360, 260 385 S 370 380, 410 360 V500 H-10 Z" fill="#8F9C80" />
      <path
        d="M-10 380 C 90 350, 180 360, 260 385 S 370 380, 410 360"
        fill="none"
        stroke={INK}
        strokeWidth="1.4"
        opacity="0.7"
      />
      <path d="M-10 440 C 80 415, 200 420, 300 445 S 380 440, 410 430 V500 H-10 Z" fill="#6F7D63" />
      {/* hand-drawn furrows */}
      <g stroke="#F3E6D3" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" fill="none">
        <path d="M40 470 C 90 458, 150 458, 200 470" />
        <path d="M230 480 C 270 470, 320 468, 360 476" />
        <path d="M70 410 C 110 400, 150 402, 180 410" />
      </g>
    </g>
  );
}

/** Line-drawn sprig with leaves, rooted at (x, y), growing to height h. */
function Stem({
  x,
  y,
  h,
  flip = false,
  leaf = "#7C8B6F",
  className,
}: {
  x: number;
  y: number;
  h: number;
  flip?: boolean;
  leaf?: string;
  className?: string;
}) {
  const s = flip ? -1 : 1;
  const top = y - h;
  const pts = [0.25, 0.45, 0.65, 0.82];
  return (
    <g className={className}>
      <path
        d={`M${x} ${y} C ${x + 14 * s} ${y - h * 0.35}, ${x - 12 * s} ${y - h * 0.65}, ${x + 6 * s} ${top}`}
        fill="none"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {pts.map((p, i) => {
        const ly = round(y - h * p);
        const lx = x + (i % 2 ? -4 : 4) * s;
        const d = (i % 2 ? -1 : 1) * s;
        const len = 34 - i * 5;
        return (
          <path
            key={p}
            d={`M${lx} ${ly} C ${round(lx + d * len * 0.3)} ${round(ly - len * 0.55)}, ${round(lx + d * len * 0.9)} ${round(ly - len * 0.55)}, ${lx + d * len} ${round(ly - len * 0.35)} C ${round(lx + d * len * 0.75)} ${round(ly - len * 0.05)}, ${round(lx + d * len * 0.3)} ${ly + 2}, ${lx} ${ly} Z`}
            fill={leaf}
            stroke={INK}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        );
      })}
      <path
        d={`M${x + 6 * s} ${top} C ${x + 2 * s} ${top - 14}, ${x + 14 * s} ${top - 22}, ${x + 20 * s} ${top - 18} C ${x + 20 * s} ${top - 8}, ${x + 12 * s} ${top}, ${x + 6 * s} ${top} Z`}
        fill={leaf}
        stroke={INK}
        strokeWidth="1.2"
      />
    </g>
  );
}

function Birds() {
  return (
    <g fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" opacity="0.7">
      <path d="M92 150 q 8 -8 16 0 q 8 -8 16 0" />
      <path d="M130 120 q 6 -6 12 0 q 6 -6 12 0" />
    </g>
  );
}

function HomeScene() {
  return (
    <>
      <Sun cx={200} cy={210} r={52} />
      <Birds />
      <Hills />
      {/* two sprigs leaning toward each other */}
      <Stem x={150} y={470} h={220} className="animate-sway" />
      <Stem x={252} y={470} h={190} flip leaf="#C46A4A" className="animate-sway-delayed" />
    </>
  );
}

function EggScene() {
  return (
    <>
      {/* a full, round sun with hand-drawn concentric rings */}
      <circle cx="200" cy="215" r="70" fill="#D9A55A" />
      <g fill="none" stroke="#B9813A" strokeLinecap="round" opacity="0.7">
        <path d="M118 215 a82 82 0 0 1 164 -4" strokeWidth="1.6" />
        <path d="M104 222 a96 96 0 0 1 190 -18" strokeWidth="1.2" strokeDasharray="2 7" />
      </g>
      <circle cx="200" cy="215" r="30" fill="#F3DDBE" opacity="0.75" />
      <Hills />
      {/* a flowering sprig */}
      <g className="animate-sway">
        <Stem x={210} y={475} h={200} leaf="#7C8B6F" />
        <g transform="translate(216 255)">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy="-11"
              rx="7"
              ry="12"
              transform={`rotate(${a})`}
              fill="#C46A4A"
              stroke={INK}
              strokeWidth="1"
            />
          ))}
          <circle r="5" fill="#E9C27A" stroke={INK} strokeWidth="1" />
        </g>
      </g>
    </>
  );
}

function SpermScene() {
  return (
    <>
      <Sun cx={290} cy={160} r={38} />
      <Birds />
      <Hills />
      {/* a winding river path through the hills */}
      <path
        d="M80 500 C 120 450, 250 450, 210 410 S 150 360, 230 335"
        fill="none"
        stroke="#F3E6D3"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M80 500 C 120 450, 250 450, 210 410 S 150 360, 230 335"
        fill="none"
        stroke={INK}
        strokeWidth="1.2"
        strokeDasharray="1 9"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* tall grasses */}
      <g className="animate-sway-delayed">
        <Stem x={92} y={480} h={230} leaf="#7C8B6F" />
      </g>
      <g fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" className="animate-sway">
        <path d="M318 482 C 320 420, 300 380, 290 330" />
        <path d="M330 482 C 336 430, 340 390, 352 350" />
        <path d="M340 482 C 342 440, 320 410, 312 380" />
        <path d="M290 330 c -6 10 -4 20 2 26 M290 330 c 8 8 8 18 4 26" />
        <path d="M352 350 c -8 8 -8 18 -4 24 M352 350 c 6 10 4 18 -2 24" />
      </g>
    </>
  );
}
