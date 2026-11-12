import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-border bg-card rounded-[1.75rem] border p-6 shadow-[0_18px_40px_-32px_rgba(44,58,30,0.45)]",
        className,
      )}
      {...props}
    />
  );
}
export function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-primary text-2xl font-semibold", className)} {...props} />;
}
