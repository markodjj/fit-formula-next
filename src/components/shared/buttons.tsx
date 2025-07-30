import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

// ============================================================================
// MODERN BUTTON VARIANTS
// ============================================================================

const modernButtonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg",
        neon: "bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]",
        soft: "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 shadow-sm",
        dark: "bg-gray-900 text-white hover:bg-gray-800 shadow-lg",
        light: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none",
        sm: "rounded-md",
        lg: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

// ============================================================================
// MODERN BUTTON COMPONENT
// ============================================================================

export interface ModernButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof modernButtonVariants> {
  children: React.ReactNode;
}

export const ModernButton = forwardRef<HTMLButtonElement, ModernButtonProps>(
  ({ className, variant, size, rounded, children, ...props }, ref) => {
    return (
      <button
        className={cn(modernButtonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
ModernButton.displayName = "ModernButton";

// ============================================================================
// SHADCN BUTTON WRAPPER (for compatibility)
// ============================================================================

export interface ShadcnButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const ShadcnButton = forwardRef<HTMLButtonElement, ShadcnButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={className}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
ShadcnButton.displayName = "ShadcnButton"; 