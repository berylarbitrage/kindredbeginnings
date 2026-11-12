/**
 * Kindred Beginnings mark: a small, ripe lemon hanging from a leafy sprig,
 * with one white blossom just opening beside it — a bright new beginning.
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
      {/* sprig */}
      <path
        d="M9 6 C 18 11, 25 17, 28 27 C 29.5 32, 29 36, 28.5 39"
        stroke="#2F4D1F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* leaves */}
      <path d="M15 9.5 C 13 3.5, 6 1.5, 2 3 C 4 9, 10 11.5, 15 9.5 Z" fill="#4F7A32" />
      <path d="M22 15.5 C 27 10, 35 9.5, 40 12 C 36 18, 28 19.5, 22 15.5 Z" fill="#4F7A32" />
      <path d="M26.5 23.5 C 21 21, 14 22.5, 11 27 C 17 30, 23.5 28.5, 26.5 23.5 Z" fill="#6C9A45" />
      <path
        d="M22 15.5 C 28 14.5, 33 13.5, 38 12.4"
        stroke="#FDF9E8"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* lemon */}
      <path
        d="M28.6 38.5 C 24 38.2, 17.5 42.5, 17.6 50.5 C 17.7 57, 23.5 61.5, 30 61 C 37.5 60.5, 42 54.5, 41 47.5 C 40.2 42, 34.5 38.4, 28.6 38.5 Z"
        fill="#E8C12C"
      />
      <path
        d="M41 47.5 C 42.6 47, 43.6 46, 43.8 44.6 C 42.4 44.4, 41.2 45, 40.3 46"
        fill="#E8C12C"
      />
      <path
        d="M22 47.5 C 22.6 44.6, 24.6 42.6, 27.4 42"
        stroke="#FFF6CC"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* blossom */}
      <g transform="translate(44 27)">
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse
            key={a}
            cx="0"
            cy="-4"
            rx="2.6"
            ry="4"
            transform={`rotate(${a})`}
            fill="#FFFFFF"
            stroke="#CDBE72"
            strokeWidth="0.7"
          />
        ))}
        <circle r="1.8" fill="#C99A0C" />
      </g>
    </svg>
  );
}
