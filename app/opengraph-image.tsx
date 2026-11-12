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
      {/* the K13 orchard-seal mark */}
      <svg
        width="440"
        height="425"
        viewBox="-4 0 116 112"
        style={{ position: "absolute", right: 90, top: 102 }}
      >
        <circle cx="54" cy="55" r="44" fill="#FFFDF3" stroke="#4F7A32" strokeWidth="2" />
        <circle cx="54" cy="55" r="38" fill="none" stroke="#E3D89D" strokeWidth="1.5" />
        <circle cx="74.0" cy="55.0" r="1.6" fill="#B8CF8E" />
        <circle cx="72.5" cy="62.7" r="1.6" fill="#B8CF8E" />
        <circle cx="68.1" cy="69.1" r="1.6" fill="#B8CF8E" />
        <circle cx="61.7" cy="73.5" r="1.6" fill="#B8CF8E" />
        <circle cx="54.0" cy="75.0" r="1.6" fill="#B8CF8E" />
        <circle cx="46.3" cy="73.5" r="1.6" fill="#B8CF8E" />
        <circle cx="39.9" cy="69.1" r="1.6" fill="#B8CF8E" />
        <circle cx="35.5" cy="62.7" r="1.6" fill="#B8CF8E" />
        <circle cx="34.0" cy="55.0" r="1.6" fill="#B8CF8E" />
        <circle cx="35.5" cy="47.3" r="1.6" fill="#B8CF8E" />
        <circle cx="39.9" cy="40.9" r="1.6" fill="#B8CF8E" />
        <circle cx="46.3" cy="36.5" r="1.6" fill="#B8CF8E" />
        <circle cx="54.0" cy="35.0" r="1.6" fill="#B8CF8E" />
        <circle cx="61.7" cy="36.5" r="1.6" fill="#B8CF8E" />
        <circle cx="68.1" cy="40.9" r="1.6" fill="#B8CF8E" />
        <circle cx="72.5" cy="47.3" r="1.6" fill="#B8CF8E" />
        <circle cx="54" cy="55" r="13" fill="#E8C12C" />
        <g transform="translate(28 30) rotate(40) scale(0.85)">
          <path
            d="M-6 0 C -11 -6, -16 6, -22 0 S -33 -6, -40 0"
            fill="none"
            stroke="#4F7A32"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <ellipse cx="0" cy="0" rx="7.5" ry="5.4" fill="#4F7A32" />
        </g>
        <g transform="translate(80 82) rotate(220) scale(0.85)">
          <path
            d="M-6 0 C -11 -6, -16 6, -22 0 S -33 -6, -40 0"
            fill="none"
            stroke="#4F7A32"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <ellipse cx="0" cy="0" rx="7.5" ry="5.4" fill="#4F7A32" />
        </g>
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
