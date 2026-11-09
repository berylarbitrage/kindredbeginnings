import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));
const { emailFrom, emailFromDomain } = await import("@/lib/email");

afterEach(() => {
  delete process.env.EMAIL_FROM;
});

describe("sender address", () => {
  it("adds the brand as display name to a bare address", () => {
    process.env.EMAIL_FROM = "hello@kindredbeginnings.com";
    expect(emailFrom()).toBe("Kindred Beginnings <hello@kindredbeginnings.com>");
    expect(emailFromDomain()).toBe("kindredbeginnings.com");
  });
  it("keeps an explicit display name", () => {
    process.env.EMAIL_FROM = "KB Team <team@mail.kindredbeginnings.com>";
    expect(emailFrom()).toBe("KB Team <team@mail.kindredbeginnings.com>");
    expect(emailFromDomain()).toBe("mail.kindredbeginnings.com");
  });
  it("falls back to the Resend test sender", () => {
    expect(emailFrom()).toContain("onboarding@resend.dev");
  });
});
