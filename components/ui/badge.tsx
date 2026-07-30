import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-pill border px-3 py-1 text-caption font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-brand-blue/10 text-brand-blue",
        secondary: "border-transparent bg-surface text-muted-foreground",
        accent: "border-transparent bg-brand-red/10 text-brand-red",
        navy: "border-transparent bg-brand-navy/10 text-brand-navy",
        outline: "border-border text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
