import { Body, Container, Head, Hr, Html, Preview, Section, Text } from "@react-email/components";
import { DISCLAIMER, SITE } from "@/config/site";

export function EmailLayout({ preview, children }: { preview: string; children: React.ReactNode }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: "#F6F0E6",
          fontFamily: "Karla, Helvetica, Arial, sans-serif",
          color: "#2F2A24",
        }}
      >
        <Container style={{ maxWidth: 560, margin: "0 auto", padding: "32px 24px" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              fontStyle: "italic",
              color: "#44533B",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            {SITE.brand}
          </Text>
          <Section
            style={{
              backgroundColor: "#FFFCF6",
              border: "1px solid #DDD0BD",
              borderRadius: "28px 28px 12px 12px",
              padding: 24,
            }}
          >
            {children}
          </Section>
          <Hr style={{ borderColor: "#DDD0BD", margin: "24px 0" }} />
          <Text style={{ fontSize: 12, color: "#645849" }}>
            {SITE.brand} · {SITE.contactEmail} · {SITE.contactPhone}
            <br />
            {DISCLAIMER}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const button = {
  backgroundColor: "#A64B2E",
  color: "#FFFFFF",
  borderRadius: 999,
  padding: "12px 24px",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-block",
} as const;
