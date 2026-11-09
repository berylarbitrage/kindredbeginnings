import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-[0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // CTA — warm terracotta pill
        default:
          "bg-accent text-accent-foreground shadow-[0_8px_20px_-10px_rgba(166,75,46,0.7)] hover:bg-accent-hover active:translate-y-px",
        primary: "bg-primary text-primary-foreground hover:bg-[#36432f] active:translate-y-px",
        outline:
          "border-[1.5px] border-foreground/55 text-foreground bg-transparent hover:border-accent hover:text-accent hover:bg-card/70",
        ghost: "hover:bg-muted-bg text-foreground",
        destructive: "bg-destructive text-white hover:brightness-110",
        link: "text-primary underline decoration-accent/60 underline-offset-4 hover:decoration-accent rounded-none",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
