/**
 * Kindred Beginnings mark (K9): a lemon drawn as an egg, ringed by a corona of
 * small sage dots, with a little leaf — and a small sperm with a green,
 * vine-like tail approaching from the top-left. Pure inline SVG.
 */
const RING = [
  [87.0, 58.0],
  [84.6, 69.9],
  [77.9, 79.9],
  [67.9, 86.6],
  [56.0, 89.0],
  [44.1, 86.6],
  [34.1, 79.9],
  [27.4, 69.9],
  [25.0, 58.0],
  [27.4, 46.1],
  [34.1, 36.1],
  [44.1, 29.4],
  [56.0, 27.0],
  [67.9, 29.4],
  [77.9, 36.1],
  [84.6, 46.1],
] as const;

export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="-18 -4 116 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      {title && <title>{title}</title>}
      {/* corona */}
      {RING.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="#B8CF8E" />
      ))}
      {/* lemon egg */}
      <circle cx="56" cy="58" r="24" fill="#E8C12C" />
      <circle cx="48" cy="50" r="6" fill="#FFF6C9" />
      {/* sperm with vine tail */}
      <g transform="translate(16 26) rotate(40)">
        <path
          d="M-6 0 C -11 -6, -16 6, -22 0 S -33 -6, -40 0"
          stroke="#4F7A32"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <ellipse cx="0" cy="0" rx="7.5" ry="5.4" fill="#FFFDF3" stroke="#4F7A32" strokeWidth="2" />
      </g>
      {/* leaf */}
      <ellipse cx="80" cy="30" rx="9" ry="4" fill="#4F7A32" transform="rotate(-30 80 30)" />
    </svg>
  );
}
