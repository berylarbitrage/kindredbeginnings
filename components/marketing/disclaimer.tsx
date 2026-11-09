import { DISCLAIMER } from "@/config/site";

export function Disclaimer() {
  return (
    <aside className="mx-auto max-w-6xl px-4">
      <p className="border-sage/50 text-muted rounded-2xl border border-dashed p-5 text-sm leading-relaxed">
        <strong className="text-foreground">Please note:</strong> {DISCLAIMER}
      </p>
    </aside>
  );
}
