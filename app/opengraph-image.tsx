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
        background: "#F6F0E6",
        padding: 80,
        position: "relative",
      }}
    >
      {/* clay blob */}
      <div
        style={{
          position: "absolute",
          right: 40,
          top: 150,
          width: 420,
          height: 440,
          borderRadius: "58% 42% 55% 45%",
          background: "#EBD9C8",
        }}
      />
      {/* arch window with sun and hills */}
      <div
        style={{
          position: "absolute",
          right: 110,
          top: 70,
          width: 300,
          height: 480,
          borderRadius: "150px 150px 0 0",
          border: "3px solid #44533B",
          background: "#F3E3CE",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 95,
            top: 120,
            width: 110,
            height: 110,
            borderRadius: 110,
            background: "#D9A55A",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -120,
            top: 290,
            width: 420,
            height: 300,
            borderRadius: 300,
            background: "#B7BFA4",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 60,
            top: 350,
            width: 400,
            height: 300,
            borderRadius: 300,
            background: "#7C8B6F",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 620,
        }}
      >
        <div
          style={{ fontSize: 26, color: "#44533B", letterSpacing: 6, textTransform: "uppercase" }}
        >
          {SITE.subtitle}
        </div>
        <div
          style={{
            fontSize: 84,
            color: "#44533B",
            fontFamily: "Georgia, serif",
            lineHeight: 1.05,
            marginTop: 24,
            display: "flex",
          }}
        >
          {first}&nbsp;
          <span style={{ color: "#A64B2E", fontStyle: "italic" }}>{rest.join(" ")}</span>
        </div>
        <div
          style={{
            fontSize: 38,
            color: "#645849",
            marginTop: 28,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
          }}
        >
          Where kindness becomes kin.
        </div>
      </div>
    </div>,
    size,
  );
}
