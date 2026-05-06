import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function DoneCard({ onReset }: { onReset: () => void }) {
  return (
    <section className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-16 text-center shadow-soft animate-fade-up">
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-score-high text-score-high shadow-soft-sm">
        <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
      </span>
      <h2 className="text-2xl font-bold text-foreground">Session Complete</h2>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
        Honest reps compound. Pick a different company or interview type next, and notice which dimension you keep landing low on.
      </p>
      <Button onClick={onReset} className="mt-10 h-12 px-10 text-[15px] font-semibold shadow-soft-sm transition-shadow hover:shadow-soft">
        Start a New Session
      </Button>
    </section>
  );
}
