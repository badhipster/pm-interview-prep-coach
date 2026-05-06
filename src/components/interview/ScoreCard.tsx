import { cn } from "@/lib/utils";
import { DIMENSION_KEYS, dimensionLabel } from "@/types/interview";
import type { InterviewType, Scores } from "@/types/interview";
import { scoreBorderClass, scoreColorClass, scoreBgClass, scoreLabel } from "@/lib/scoring";

interface Props {
  interviewType: InterviewType;
  scores: Scores;
}

export function ScoreCard({ interviewType, scores }: Props) {
  const values = DIMENSION_KEYS.map((k) => scores[k].score);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  return (
    <section className="rounded-2xl border border-border bg-card p-8 shadow-soft">
      {/* Overall score */}
      <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Overall
          </p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className={cn("text-5xl font-bold tabular-nums", scoreColorClass(Math.round(avg)))}>
              {avg.toFixed(1)}
            </span>
            <span className="text-lg text-muted-foreground">/&nbsp;5</span>
          </div>
        </div>
        <p className="max-w-sm rounded-xl bg-secondary/60 px-5 py-3 text-sm leading-relaxed text-muted-foreground">
          A 3 means generic — anyone could have said it. 4s and 5s are earned, not given.
        </p>
      </div>

      {/* Dimension grid — 2 columns max for readability */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {DIMENSION_KEYS.map((key, index) => {
          const dim = scores[key];
          return (
            <article
              key={key}
              className={cn(
                "rounded-xl border p-6 transition-all duration-200",
                scoreBorderClass(dim.score),
                scoreBgClass(dim.score),
                `animate-fade-up animate-fade-up-delay-${index % 4}`
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {dimensionLabel(key, interviewType)}
                  </h3>
                  <p className={cn("mt-1 text-xs font-semibold uppercase tracking-wide", scoreColorClass(dim.score))}>
                    {scoreLabel(dim.score)}
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-3xl font-bold tabular-nums", scoreColorClass(dim.score))}>
                    {dim.score}
                  </span>
                  <span className="text-sm text-muted-foreground">/5</span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {dim.reason}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
