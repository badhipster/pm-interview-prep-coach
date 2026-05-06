import { cn } from "@/lib/utils";
import type { SessionStep } from "@/types/interview";

const STEPS: { key: SessionStep; label: string }[] = [
  { key: "setup", label: "Setup" },
  { key: "answering", label: "Answer" },
  { key: "scoring", label: "Score" },
  { key: "probing", label: "Probe" },
];

export function StepIndicator({ step }: { step: SessionStep }) {
  const activeIndex = STEPS.findIndex((s) => s.key === step);
  const effectiveIndex = step === "done" ? STEPS.length - 1 : activeIndex;

  return (
    <ol className="flex items-center justify-center gap-3 sm:gap-6 text-sm">
      {STEPS.map((s, i) => {
        const reached = i <= effectiveIndex;
        const isCurrent = i === effectiveIndex;
        return (
          <li key={s.key} className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-200",
                reached
                  ? "bg-primary text-primary-foreground shadow-soft-sm"
                  : "border border-border bg-card text-muted-foreground",
                isCurrent && "ring-2 ring-primary/30 ring-offset-2 ring-offset-background"
              )}
            >
              {i + 1}
            </span>
            <span
              className={cn(
                "hidden sm:inline text-sm font-medium",
                reached ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {s.label}
            </span>
            {i < STEPS.length - 1 && (
              <span
                className={cn(
                  "h-px w-8 sm:w-14 transition-colors duration-200",
                  i < effectiveIndex ? "bg-primary" : "bg-border"
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
