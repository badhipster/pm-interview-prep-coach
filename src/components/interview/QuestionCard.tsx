import { Info } from "lucide-react";

interface Props {
  interviewType: string;
  company: string;
  question: string;
  role: string;
}

export function QuestionCard({ interviewType, company, question, role }: Props) {
  return (
    <section className="rounded-2xl border border-border bg-card p-8 shadow-soft">
      <div className="mb-5 flex flex-wrap items-center gap-2.5">
        <span className="rounded-full border border-primary/30 bg-primary/[0.06] px-3.5 py-1.5 text-xs font-semibold text-primary">
          {interviewType}
        </span>
        <span className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-foreground">
          {company}
        </span>
        <span className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-foreground">
          {role}
        </span>
      </div>
      <p className="text-[17px] leading-[1.7] text-foreground">{question}</p>

      <p className="mt-5 flex items-start gap-2 text-xs italic leading-relaxed text-muted-foreground">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>
          Calibrated to {company}'s interview style using curated company context. The curated list
          controls for hallucination — see <span className="not-italic font-medium text-foreground">How it works</span> for
          the rationale.
        </span>
      </p>
    </section>
  );
}
