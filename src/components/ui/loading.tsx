import { cn } from "@/lib/utils";
import { Loader2, Loader, Circle } from "lucide-react";

interface LoadingProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "spinner" | "dots" | "pulse" | "gradient";
  className?: string;
  text?: string;
}

export function Loading({ 
  size = "md", 
  variant = "spinner", 
  className,
  text 
}: LoadingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8",
    xl: "h-12 w-12"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg", 
    xl: "text-xl"
  };

  const renderSpinner = () => (
    <Loader2 className={cn("animate-spin", sizeClasses[size], className)} />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      <Circle className={cn("animate-pulse", sizeClasses[size], "text-blue-500")} />
      <Circle className={cn("animate-pulse delay-100", sizeClasses[size], "text-purple-500")} />
      <Circle className={cn("animate-pulse delay-200", sizeClasses[size], "text-blue-600")} />
    </div>
  );

  const renderPulse = () => (
    <div className={cn("animate-pulse bg-gradient-to-r from-blue-500 to-purple-600 rounded-full", sizeClasses[size])} />
  );

  const renderGradient = () => (
    <div className={cn("relative", sizeClasses[size])}>
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full animate-spin",
        sizeClasses[size]
      )} />
      <div className={cn(
        "absolute inset-1 bg-white rounded-full",
        size === "sm" ? "inset-0.5" : size === "lg" ? "inset-2" : size === "xl" ? "inset-3" : "inset-1"
      )} />
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case "dots":
        return renderDots();
      case "pulse":
        return renderPulse();
      case "gradient":
        return renderGradient();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {renderLoader()}
      {text && (
        <p className={cn("text-gray-600 font-medium", textSizeClasses[size])}>
          {text}
        </p>
      )}
    </div>
  );
}

// Skeleton loading component for content
export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse bg-gray-200 rounded", className)} />
  );
}

// Card skeleton for loading states
export function CardSkeleton() {
  return (
    <div className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-3">
        <Skeleton className="w-10 h-10 rounded-lg" />
        <Skeleton className="h-6 w-32" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

// Table skeleton for loading states
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-200">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      ))}
    </div>
  );
} 