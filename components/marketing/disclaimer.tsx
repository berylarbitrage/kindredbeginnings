import { DISCLAIMER } from "@/config/site";

export function Disclaimer() {
  return (
    <aside className="mx-auto max-w-6xl px-4">
      <p className="border-border bg-card text-muted rounded-2xl border p-5 text-sm leading-relaxed">
        <strong className="text-foreground">Please note:</strong> {DISCLAIMER}
      </p>
    </aside>
  );
}
