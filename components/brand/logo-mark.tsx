/**
 * Kindred Beginnings mark (K13, "orchard seal"): a round seal with a green
 * outer ring and a pale inner ring; at its centre a lemon-yellow egg circled
 * by small sage dots, approached by two small sperm with green, vine-like
 * tails, one from the top-left and one from the bottom-right. Pure inline SVG.
 */
const DOTS = [
  [74.0, 55.0],
  [72.5, 62.7],
  [68.1, 69.1],
  [61.7, 73.5],
  [54.0, 75.0],
  [46.3, 73.5],
  [39.9, 69.1],
  [35.5, 62.7],
  [34.0, 55.0],
  [35.5, 47.3],
  [39.9, 40.9],
  [46.3, 36.5],
  [54.0, 35.0],
  [61.7, 36.5],
  [68.1, 40.9],
  [72.5, 47.3],
] as const;

const SPERM = [
  "translate(28 30) rotate(40) scale(0.85)",
  "translate(80 82) rotate(220) scale(0.85)",
];

export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="-4 0 116 112"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      {title && <title>{title}</title>}
      {/* seal rings */}
      <circle cx="54" cy="55" r="44" fill="#FFFDF3" stroke="#4F7A32" strokeWidth="2" />
      <circle cx="54" cy="55" r="38" stroke="#E3D89D" strokeWidth="1.5" />
      {/* corona */}
      {DOTS.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" fill="#B8CF8E" />
      ))}
      {/* lemon egg */}
      <circle cx="54" cy="55" r="13" fill="#E8C12C" />
      {/* two sperm with vine tails */}
      {SPERM.map((t) => (
        <g key={t} transform={t}>
          <path
            d="M-6 0 C -11 -6, -16 6, -22 0 S -33 -6, -40 0"
            stroke="#4F7A32"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <ellipse cx="0" cy="0" rx="7.5" ry="5.4" fill="#4F7A32" />
        </g>
      ))}
    </svg>
  );
}
