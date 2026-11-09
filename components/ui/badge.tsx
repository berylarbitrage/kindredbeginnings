import * as React from "react";
import { cn } from "@/lib/utils";

const tones = {
  neutral: "bg-muted-bg text-foreground",
  success: "bg-primary-soft text-sage-deep",
  warn: "bg-accent-soft text-[#7a3520]",
  danger: "bg-destructive/10 text-destructive",
} as const;

export function Badge({
  tone = "neutral",
  className,
  ...props
}: React.ComponentProps<"span"> & { tone?: keyof typeof tones }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-current/15 px-2.5 py-0.5 text-xs font-semibold tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
