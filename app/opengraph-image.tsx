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
      {/* thin outline offset around the arch */}
      <div
        style={{
          position: "absolute",
          right: 96,
          top: 56,
          width: 328,
          height: 508,
          borderRadius: "164px 164px 30px 30px",
          border: "2px solid #E3D89D",
        }}
      />
      {/* arch window: pale sun, soft hill, a lemon on its branch */}
      <div
        style={{
          position: "absolute",
          right: 110,
          top: 70,
          width: 300,
          height: 480,
          borderRadius: "150px 150px 18px 18px",
          background: "#FAEDB8",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 50,
            top: 120,
            width: 200,
            height: 200,
            borderRadius: 200,
            background: "#FFF8DE",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -100,
            top: 380,
            width: 520,
            height: 300,
            borderRadius: 300,
            background: "#B8CF8E",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 146,
            top: -10,
            width: 9,
            height: 150,
            borderRadius: 9,
            background: "#4A5E2C",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 60,
            top: 60,
            width: 90,
            height: 36,
            borderRadius: "0 50% 0 50%",
            background: "#4F7A32",
            transform: "rotate(-20deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 155,
            top: 92,
            width: 90,
            height: 36,
            borderRadius: "50% 0 50% 0",
            background: "#6C9A45",
            transform: "rotate(20deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 82,
            top: 136,
            width: 136,
            height: 170,
            borderRadius: "48% 48% 46% 46%",
            background: "#E8C12C",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 220,
            top: 70,
            width: 30,
            height: 30,
            borderRadius: 30,
            background: "#FFFFFF",
            border: "6px solid #FFFFFF",
            boxShadow: "0 0 0 2px #E6DCA6",
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
          style={{ fontSize: 26, color: "#5E6A4C", letterSpacing: 6, textTransform: "uppercase" }}
        >
          {SITE.subtitle}
        </div>
        <div
          style={{
            fontSize: 84,
            color: "#2F4D1F",
            fontFamily: "Georgia, serif",
            lineHeight: 1.05,
            marginTop: 24,
            display: "flex",
          }}
        >
          {first}&nbsp;
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
