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
  it("uses the brand as display name even when EMAIL_FROM has one", () => {
    process.env.EMAIL_FROM = "Preview <team@mail.kindredbeginnings.com>";
    // The display name is always the brand (e.g. a preview env set "Preview").
    expect(emailFrom()).toBe("Kindred Beginnings <team@mail.kindredbeginnings.com>");
    expect(emailFromDomain()).toBe("mail.kindredbeginnings.com");
  });
  it("falls back to the Resend test sender", () => {
    expect(emailFrom()).toContain("onboarding@resend.dev");
  });
});
