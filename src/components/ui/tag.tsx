import { cn } from "@/lib/utils";

interface TagProps {
  /** "primary" = blue tinted (type/category), "neutral" = grey (metadata) */
  variant?: "primary" | "neutral";
  children: React.ReactNode;
  className?: string;
}

export function Tag({ variant = "neutral", children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs",
        variant === "primary" && "border-primary/30 bg-primary/[0.06] font-semibold text-primary",
        variant === "neutral" && "border-border bg-secondary font-medium text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
