import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Original "lemon tree" illustration inside an arch-topped window: a pale sun,
 * a soft green hill and a lemon branch with leaves, fruit and small white
 * blossoms. Inline SVG — no images, no extra requests.
 */
export function HeroArt({
  variant,
  className,
  compact = false,
}: {
  variant: "home" | "egg" | "sperm";
  className?: string;
  /** Plain arch without the offset outline (used inside cards). */
  compact?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <div
      className={cn("relative mx-auto w-full max-w-sm", compact ? "" : "p-3", className)}
      aria-hidden
    >
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[1.25rem] bg-[#FBF1C9]",
          compact
            ? "border-border border"
            : "arch-outline shadow-[0_30px_60px_-36px_rgba(44,58,30,0.45)]",
        )}
      >
        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FAEDB8" />
              <stop offset="75%" stopColor="#FDF7E0" />
            </linearGradient>
            <radialGradient id={`sun-${id}`}>
              <stop offset="60%" stopColor="#FFF9E3" />
              <stop offset="100%" stopColor="#FFF9E3" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill={`url(#sky-${id})`} />

          {variant === "home" && <HomeScene sun={`url(#sun-${id})`} />}
          {variant === "egg" && <EggScene sun={`url(#sun-${id})`} />}
          {variant === "sperm" && <SpermScene sun={`url(#sun-${id})`} />}
        </svg>
      </div>
    </div>
  );
}

const BRANCH = "#4A5E2C";
const LEAF = "#4F7A32";
const LEAF_LIGHT = "#6C9A45";
const LEMON = "#E8C12C";
const LEMON_SHADE = "#D4A814";

/** Round to 2dp so server and client render identical attribute strings. */
function round(n: number) {
  return Math.round(n * 100) / 100;
}

function PaleSun({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r * 1.45} fill={fill} />
      <circle cx={cx} cy={cy} r={r} fill="#FFF8DE" />
      <circle
        cx={cx}
        cy={cy}
        r={r + 12}
        fill="none"
        stroke="#F1DE96"
        strokeWidth="1.2"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
    </g>
  );
}

function Hill({ back = true }: { back?: boolean }) {
  return (
    <g>
      {back && (
        <path
          d="M-10 392 C 80 360, 170 372, 250 392 S 360 384, 410 366 V500 H-10 Z"
          fill="#CFE0A8"
        />
      )}
      <path d="M-10 424 C 90 398, 230 440, 410 410 V500 H-10 Z" fill="#B8CF8E" />
      <g stroke="#FDF7E0" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" fill="none">
        <path d="M50 462 C 100 452, 150 454, 196 464" />
        <path d="M236 474 C 276 464, 318 464, 356 470" />
      </g>
    </g>
  );
}

/** A lemon leaf pointing along `angle` (degrees) from (x, y). */
function LemonLeaf({
  x,
  y,
  angle,
  len = 46,
  light = false,
}: {
  x: number;
  y: number;
  angle: number;
  len?: number;
  light?: boolean;
}) {
  const w = len * 0.34;
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <path
        d={`M0 0 C ${round(len * 0.28)} ${-w}, ${round(len * 0.78)} ${round(-w * 0.9)}, ${len} 0 C ${round(len * 0.78)} ${round(w * 0.9)}, ${round(len * 0.28)} ${w}, 0 0 Z`}
        fill={light ? LEAF_LIGHT : LEAF}
      />
      <path
        d={`M3 0 C ${round(len * 0.4)} -1.5, ${round(len * 0.7)} -1, ${round(len * 0.92)} 0`}
        stroke="#FDF7E0"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
    </g>
  );
}

/** A lemon centred at (cx, cy), long axis rotated by `angle`. */
function Lemon({ cx, cy, r, angle = 0 }: { cx: number; cy: number; r: number; angle?: number }) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${angle}) scale(${r})`}>
      <path
        d="M-1.2 0 C -1.07 -0.07, -1.02 -0.2, -0.96 -0.34 C -0.78 -0.86, 0.78 -0.86, 0.96 -0.34 C 1.02 -0.2, 1.07 -0.07, 1.2 0 C 1.07 0.07, 1.02 0.2, 0.96 0.34 C 0.78 0.86, -0.78 0.86, -0.96 0.34 C -1.02 0.2, -1.07 0.07, -1.2 0 Z"
        fill={LEMON}
      />
      <path
        d="M-0.9 0.32 C -0.6 0.78, 0.6 0.78, 0.9 0.32 C 0.6 0.62, -0.6 0.62, -0.9 0.32 Z"
        fill={LEMON_SHADE}
        opacity="0.6"
      />
      <path
        d="M-0.62 -0.36 C -0.4 -0.56, -0.1 -0.62, 0.16 -0.6"
        stroke="#FFF6CC"
        strokeWidth="0.11"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

/** A small five-petal white blossom. */
function Blossom({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="0"
          cy="-6.5"
          rx="4.4"
          ry="6.6"
          transform={`rotate(${a})`}
          fill="#FFFFFF"
          stroke="#E6DCA6"
          strokeWidth="0.8"
        />
      ))}
      <circle r="2.8" fill="#C99A0C" />
    </g>
  );
}

function HomeScene({ sun }: { sun: string }) {
  return (
    <>
      <PaleSun cx={212} cy={196} r={74} fill={sun} />
      <Hill />
      {/* the lemon branch, entering from the top left */}
      <g className="animate-hang">
        <path
          d="M-6 70 C 70 96, 130 150, 190 214 C 240 268, 280 320, 330 372"
          stroke={BRANCH}
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M120 140 C 140 120, 168 112, 196 116"
          stroke={BRANCH}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <LemonLeaf x={52} y={84} angle={-40} len={52} />
        <LemonLeaf x={70} y={92} angle={40} len={50} light />
        <LemonLeaf x={118} y={124} angle={-62} len={48} light />
        <LemonLeaf x={196} y={116} angle={-20} len={44} />
        <LemonLeaf x={160} y={116} angle={-110} len={40} />
        <LemonLeaf x={176} y={198} angle={-15} len={54} />
        <LemonLeaf x={226} y={258} angle={-30} len={50} light />
        <LemonLeaf x={232} y={262} angle={60} len={46} />
        <LemonLeaf x={292} y={330} angle={-10} len={48} />
        <LemonLeaf x={300} y={340} angle={110} len={42} light />
        {/* lemons hang just below the branch */}
        <path d="M108 128 L106 152" stroke={BRANCH} strokeWidth="2.5" />
        <Lemon cx={104} cy={180} r={30} angle={80} />
        <path d="M200 222 L202 246" stroke={BRANCH} strokeWidth="2.5" />
        <Lemon cx={206} cy={272} r={28} angle={100} />
        <path d="M262 302 L258 324" stroke={BRANCH} strokeWidth="2.5" />
        <Lemon cx={252} cy={350} r={27} angle={75} />
        <Blossom x={42} y={130} />
        <Blossom x={150} y={92} s={0.85} />
        <Blossom x={252} y={226} s={0.9} />
        <Blossom x={330} y={300} s={0.8} />
        <Blossom x={150} y={232} s={0.7} />
      </g>
    </>
  );
}

function EggScene({ sun }: { sun: string }) {
  return (
    <>
      <PaleSun cx={200} cy={250} r={96} fill={sun} />
      <Hill />
      {/* one lemon on a short twig, with a blossom just opening */}
      <g className="animate-hang">
        <path
          d="M200 -6 C 196 40, 206 90, 198 140"
          stroke={BRANCH}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <LemonLeaf x={200} y={70} angle={-150} len={70} />
        <LemonLeaf x={202} y={100} angle={-25} len={66} light />
        <LemonLeaf x={198} y={136} angle={-160} len={56} light />
        <LemonLeaf x={199} y={140} angle={-12} len={50} />
        <Lemon cx={200} cy={232} r={72} angle={92} />
        <Blossom x={262} y={140} s={1.5} />
        <Blossom x={134} y={300} s={0.9} />
      </g>
    </>
  );
}

function SpermScene({ sun }: { sun: string }) {
  return (
    <>
      <PaleSun cx={290} cy={150} r={56} fill={sun} />
      <Hill />
      {/* a winding stem rising from the hill, lined with lemon leaves */}
      <g className="animate-sway">
        <path
          d="M150 500 C 120 430, 250 400, 210 330 C 176 270, 120 250, 170 180 C 200 140, 250 120, 236 60"
          stroke={BRANCH}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <LemonLeaf x={148} y={446} angle={200} len={50} />
        <LemonLeaf x={186} y={414} angle={-20} len={54} light />
        <LemonLeaf x={226} y={366} angle={-30} len={50} />
        <LemonLeaf x={206} y={324} angle={200} len={56} light />
        <LemonLeaf x={160} y={268} angle={190} len={48} />
        <LemonLeaf x={152} y={232} angle={-20} len={52} light />
        <LemonLeaf x={186} y={168} angle={200} len={50} />
        <LemonLeaf x={216} y={140} angle={-30} len={48} light />
        <LemonLeaf x={238} y={96} angle={200} len={44} />
        <LemonLeaf x={238} y={66} angle={-70} len={40} light />
        <Blossom x={240} y={58} s={0.95} />
        <Blossom x={116} y={240} s={0.75} />
        <Blossom x={262} y={318} s={0.7} />
      </g>
    </>
  );
}
