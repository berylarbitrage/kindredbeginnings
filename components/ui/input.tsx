import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "border-border bg-card text-foreground placeholder:text-muted focus-visible:outline-ring aria-invalid:border-destructive focus-visible:border-accent flex h-11 w-full min-w-0 rounded-xl border-[1.5px] px-3 text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
