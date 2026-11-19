import { Body, Container, Head, Hr, Html, Preview, Section, Text } from "@react-email/components";
import { DISCLAIMER, SITE } from "@/config/site";
import { emailLabel } from "@/lib/email-label";

export function EmailLayout({ preview, children }: { preview: string; children: React.ReactNode }) {
  const label = emailLabel();
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: "#FDF9E8",
          fontFamily: "Mulish, Helvetica, Arial, sans-serif",
          color: "#2C3A1E",
        }}
      >
        <Container style={{ maxWidth: 560, margin: "0 auto", padding: "32px 24px" }}>
          {label && (
            <Text
              style={{
                margin: "0 0 16px",
                padding: "8px 12px",
                background: "#fff3cd",
                border: "1px solid #e0b100",
                borderRadius: 8,
                color: "#6b4e00",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {label} — sent by the preview site, not the live site.
            </Text>
          )}
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#2F4D1F",
              fontFamily: "Petrona, Georgia, serif",
            }}
          >
            {SITE.brand.split(" ")[0]}
            <br />
            <span style={{ color: "#A37A00", fontStyle: "italic", fontWeight: 500 }}>
              {SITE.brand.split(" ").slice(1).join(" ")}
            </span>
          </Text>
          <Section
            style={{
              backgroundColor: "#FFFDF3",
              border: "1px solid #E3D89D",
              borderRadius: "28px 28px 12px 12px",
              padding: 24,
            }}
          >
            {children}
          </Section>
          <Hr style={{ borderColor: "#E3D89D", margin: "24px 0" }} />
          <Text style={{ fontSize: 12, color: "#5E6A4C" }}>
            {SITE.brand} · {SITE.contactEmail}
            <br />
            {DISCLAIMER}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const button = {
  backgroundColor: "#4F7A32",
  color: "#FFFFFF",
  borderRadius: 999,
  padding: "12px 24px",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-block",
} as const;
