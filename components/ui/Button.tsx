"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "accent";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-bold tracking-wider uppercase transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none cursor-pointer border rounded-sm font-sans";

    const variantStyles = {
      primary:
        "bg-primary border-primary text-primary-foreground hover:bg-[#c40510] hover:border-[#c40510] shadow-[0_4px_12px_rgba(227,6,19,0.2)]",
      secondary:
        "bg-card border-border text-foreground hover:bg-zinc-50 hover:border-zinc-300",
      accent:
        "bg-[#009246] border-[#009246] text-white hover:bg-[#007b3a] hover:border-[#007b3a] shadow-[0_4px_12px_rgba(0,146,70,0.2)]",
      outline:
        "bg-transparent border-border text-foreground hover:bg-zinc-50 hover:border-zinc-300",
      ghost:
        "bg-transparent border-transparent text-muted-foreground hover:bg-zinc-50 hover:text-foreground",
      destructive:
        "bg-red-600 border-red-600 text-white hover:bg-red-700 hover:border-red-700",
    };

    const sizeStyles = {
      default: "px-5 py-2.5 text-[11px]",
      sm: "px-3.5 py-2 text-[10px]",
      lg: "px-7 py-3 text-xs",
      xl: "px-9 py-4 text-xs tracking-widest",
      icon: "h-10 w-10 p-0",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
