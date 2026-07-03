import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "button-primary bg-[var(--foreground)] px-5 py-3 text-[var(--background)] shadow-[0_8px_30px_rgba(0,0,0,.12)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,.18)]",
        secondary:
          "border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-[var(--foreground)] shadow-sm hover:-translate-y-0.5 hover:border-[var(--foreground)]",
        ghost:
          "px-3 py-2 text-[var(--muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]",
      },
      size: {
        default: "",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
