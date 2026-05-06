import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  /** "md" = 64px hero size, "sm" = 36px section size */
  size?: "md" | "sm";
  animate?: boolean;
  className?: string;
}

export function BrandIcon({ size = "md", animate = false, className }: Props) {
  return (
    <span
      className={cn(
        "flex items-center justify-center",
        "bg-gradient-to-br from-primary/20 to-indigo-500/20",
        "ring-1 ring-primary/20",
        size === "md" ? "h-16 w-16 rounded-2xl shadow-soft" : "h-9 w-9 rounded-xl shadow-soft-sm",
        animate && "animate-float",
        className
      )}
    >
      <Sparkles
        className={cn("text-primary", size === "md" ? "h-7 w-7" : "h-4 w-4")}
        aria-hidden="true"
      />
    </span>
  );
}
