import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Native select styled to match shadcn inputs (best UX on mobile). */
export function NativeSelect({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        className={cn(
          "border-border bg-card text-foreground focus-visible:outline-ring aria-invalid:border-destructive focus-visible:border-accent flex h-11 w-full appearance-none rounded-xl border-[1.5px] pr-9 pl-3 text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-1",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="text-leaf-deep pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2"
      />
    </div>
  );
}
