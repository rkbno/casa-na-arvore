import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "glass";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-60",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
        variant === "glass" &&
          "border border-glass-border bg-glass text-foreground backdrop-blur-xl hover:bg-glass-strong",
        className,
      )}
      {...props}
    />
  );
}