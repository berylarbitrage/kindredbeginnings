import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const alt = `${SITE.brand} — ${SITE.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const [first, ...rest] = SITE.brand.split(" ");
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#FDF9E8",
        padding: 80,
        position: "relative",
      }}
    >
      {/* the K9 lemon-egg mark */}
      <svg
        width="464"
        height="400"
        viewBox="-18 -4 116 100"
        style={{ position: "absolute", right: 70, top: 115 }}
      >
        <circle cx="87.0" cy="58.0" r="2" fill="#B8CF8E" />
        <circle cx="84.6" cy="69.9" r="2" fill="#B8CF8E" />
        <circle cx="77.9" cy="79.9" r="2" fill="#B8CF8E" />
        <circle cx="67.9" cy="86.6" r="2" fill="#B8CF8E" />
        <circle cx="56.0" cy="89.0" r="2" fill="#B8CF8E" />
        <circle cx="44.1" cy="86.6" r="2" fill="#B8CF8E" />
        <circle cx="34.1" cy="79.9" r="2" fill="#B8CF8E" />
        <circle cx="27.4" cy="69.9" r="2" fill="#B8CF8E" />
        <circle cx="25.0" cy="58.0" r="2" fill="#B8CF8E" />
        <circle cx="27.4" cy="46.1" r="2" fill="#B8CF8E" />
        <circle cx="34.1" cy="36.1" r="2" fill="#B8CF8E" />
        <circle cx="44.1" cy="29.4" r="2" fill="#B8CF8E" />
        <circle cx="56.0" cy="27.0" r="2" fill="#B8CF8E" />
        <circle cx="67.9" cy="29.4" r="2" fill="#B8CF8E" />
        <circle cx="77.9" cy="36.1" r="2" fill="#B8CF8E" />
        <circle cx="84.6" cy="46.1" r="2" fill="#B8CF8E" />
        <circle cx="56" cy="58" r="24" fill="#E8C12C" />
        <circle cx="48" cy="50" r="6" fill="#FFF6C9" />
        <g transform="translate(16 26) rotate(40)">
          <path
            d="M-6 0 C -11 -6, -16 6, -22 0 S -33 -6, -40 0"
            fill="none"
            stroke="#4F7A32"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="7.5"
            ry="5.4"
            fill="#FFFDF3"
            stroke="#4F7A32"
            strokeWidth="2"
          />
        </g>
        <ellipse cx="80" cy="30" rx="9" ry="4" fill="#4F7A32" transform="rotate(-30 80 30)" />
      </svg>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 620,
        }}
      >
        <div
          style={{ fontSize: 26, color: "#5E6A4C", letterSpacing: 6, textTransform: "uppercase" }}
        >
          {SITE.subtitle}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontFamily: "Georgia, serif",
            lineHeight: 1.02,
            marginTop: 24,
          }}
        >
          <span style={{ color: "#2F4D1F", fontWeight: 600 }}>{first}</span>
          <span style={{ color: "#A37A00", fontStyle: "italic" }}>{rest.join(" ")}</span>
        </div>
        <div
          style={{
            fontSize: 38,
            color: "#5E6A4C",
            marginTop: 28,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
          }}
        >
          Every family tree begins with a kindness.
        </div>
      </div>
    </div>,
    size,
  );
}
