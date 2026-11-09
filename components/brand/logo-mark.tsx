/**
 * Kindred Beginnings mark: two seedling stems that rise from one root and
 * twine around each other inside an arched window — two lives, one beginning.
 * One leaf in terracotta, one in sage, with a small ochre sun above.
 * Pure inline SVG so it stays crisp anywhere.
 */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 56 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      {title && <title>{title}</title>}
      {/* arch window */}
      <path d="M7 61 V29 a21 21 0 0 1 42 0 V61 Z" fill="#EBD9C8" />
      <path
        d="M7 61 V29 a21 21 0 0 1 42 0 V61"
        stroke="#44533B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* sun */}
      <circle cx="38" cy="19" r="3.6" fill="#C8964A" />
      {/* ground */}
      <path d="M3 61 H53" stroke="#44533B" strokeWidth="2.2" strokeLinecap="round" />
      {/* two twining stems */}
      <path
        d="M28 61 C 28 53, 22 50, 23 43 C 24 36, 32 35, 31 27"
        stroke="#44533B"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M28 61 C 28 53, 34 50, 33 43 C 32 36, 24 35, 25 28"
        stroke="#44533B"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      {/* terracotta leaf (right stem) */}
      <path d="M31 27 C 31 20, 36 15, 44 14 C 44 22, 38 27, 31 27 Z" fill="#A64B2E" />
      {/* sage leaf (left stem) */}
      <path d="M25 28 C 25 21, 20 16, 12 15 C 12 23, 18 28, 25 28 Z" fill="#7C8B6F" />
      {/* small lower leaves */}
      <path d="M23.5 46 C 20 46, 16.5 43.5, 15.5 40 C 19 40, 22.5 42.5, 23.5 46 Z" fill="#7C8B6F" />
      <path d="M32.5 46 C 36 46, 39.5 43.5, 40.5 40 C 37 40, 33.5 42.5, 32.5 46 Z" fill="#A64B2E" />
    </svg>
  );
}
