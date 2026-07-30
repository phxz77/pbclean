import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-small font-semibold transition-all duration-300 focus-ring disabled:pointer-events-none disabled:opacity-50 min-h-[44px] min-w-[44px]",
  {
    variants: {
      variant: {
        default:
          "bg-brand-navy text-white shadow-soft hover:bg-[#061430] hover:-translate-y-[1px]",
        secondary:
          "border border-border bg-white/90 text-brand-navy hover:border-brand-navy/20 hover:bg-white hover:-translate-y-[1px]",
        navy: "bg-brand-navy text-white shadow-soft hover:bg-[#061430] hover:-translate-y-[1px]",
        accent:
          "bg-brand-blue text-white shadow-soft hover:bg-[#0a4f9e] hover:-translate-y-[1px]",
        ghost: "text-brand-navy hover:bg-surface hover:-translate-y-[1px]",
        whatsapp:
          "bg-brand-navy text-white shadow-soft hover:bg-[#061430] hover:-translate-y-[1px]",
        glass:
          "glass border border-white/12 text-white hover:bg-white/16 hover:shadow-glass hover:-translate-y-[1px]",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6 text-caption",
        lg: "h-14 px-10 text-body",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
