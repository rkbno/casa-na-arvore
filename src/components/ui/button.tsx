import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva("inline-flex min-h-11 items-center justify-center rounded-full text-sm font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-60", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
      primary: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-border bg-background hover:bg-accent",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      glass: "border border-glass-border bg-glass text-foreground backdrop-blur-xl hover:bg-glass-strong",
    },
    size: { default: "h-11 px-6", sm: "h-9 px-4", lg: "h-12 px-8", icon: "size-11 p-0", "icon-sm": "size-9 p-0", "icon-lg": "size-12 p-0" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";