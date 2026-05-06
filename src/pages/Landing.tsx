import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CircleCheck,
  CircleDashed,
  CircleDot,
  MessageCircleQuestion,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { companies } from "@/lib/companies";

const DIMENSIONS = [
  {
    name: "Problem Framing",
    rationale: "Did you define the problem before designing the solution?",
  },
  {
    name: "User Empathy",
    rationale: "Did you anchor on a specific user, or stay generic?",
  },
  {
    name: "Prioritization Rationale",
    rationale: "Did you justify your choices, or list features randomly?",
  },
  {
    name: "Metric Definition",
    rationale: "Did you define how success would be measured?",
  },
  {
    name: "Trade-off Awareness",
    rationale: "Did you name what you were giving up?",
  },
];

type Mark = "yes" | "no" | "partial" | "na";

const Cell = ({ mark, label }: { mark: Mark; label: string }) => {
  const Icon =
    mark === "yes" ? CircleCheck : mark === "partial" ? CircleDot : CircleDashed;
  const color =
    mark === "yes"
      ? "text-green-600"
      : mark === "partial"
      ? "text-amber-600"
      : "text-muted-foreground";
  return (
    <div className="flex items-center gap-2">
      <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
      <span className="text-sm text-foreground">{label}</span>
    </div>
  );
};

const COMPARISON: {
  dimension: string;
  this: { mark: Mark; label: string };
  chatgpt: { mark: Mark; label: string };
  exponent: { mark: Mark; label: string };
  igao: { mark: Mark; label: string };
  huru: { mark: Mark; label: string };
}[] = [
  {
    dimension: "PM-specific scoring rubric",
    this: { mark: "yes", label: "5 named dimensions" },
    chatgpt: { mark: "no", label: "No rubric" },
    exponent: { mark: "na", label: "Peer mock only" },
    igao: { mark: "partial", label: "Human verbal only" },
    huru: { mark: "partial", label: "Generic (clarity, filler)" },
  },
  {
    dimension: "Company-calibrated questions",
    this: { mark: "yes", label: "15 curated companies" },
    chatgpt: { mark: "no", label: "DIY prompt" },
    exponent: { mark: "partial", label: "Limited" },
    igao: { mark: "yes", label: "Insider-led" },
    huru: { mark: "no", label: "Generic" },
  },
  {
    dimension: "Follow-up probe like a real interviewer",
    this: { mark: "yes", label: "One adaptive probe" },
    chatgpt: { mark: "no", label: "No probe" },
    exponent: { mark: "na", label: "Peer-dependent" },
    igao: { mark: "yes", label: "Human probe" },
    huru: { mark: "no", label: "No probe" },
  },
  {
    dimension: "Honest, not encouragement-biased",
    this: { mark: "yes", label: "By design" },
    chatgpt: { mark: "no", label: "Encouragement-biased" },
    exponent: { mark: "partial", label: "Peer-dependent" },
    igao: { mark: "yes", label: "Critical by default" },
    huru: { mark: "no", label: "Encouragement-biased" },
  },
  {
    dimension: "Async, no scheduling",
    this: { mark: "yes", label: "Instant" },
    chatgpt: { mark: "yes", label: "Instant" },
    exponent: { mark: "no", label: "3-day window" },
    igao: { mark: "no", label: "Booked sessions" },
    huru: { mark: "yes", label: "Instant" },
  },
  {
    dimension: "Cost",
    this: { mark: "yes", label: "Free" },
    chatgpt: { mark: "yes", label: "Free" },
    exponent: { mark: "partial", label: "$72-144/yr" },
    igao: { mark: "no", label: "$100-250/hr" },
    huru: { mark: "partial", label: "~$30/mo" },
  },
];

const Landing = () => {
  return (
    <main className="min-h-dvh bg-background">
      <SiteHeader />

      {/* Hero zone wrapper — carries the decorative background for hero + cards */}
      <div className="relative overflow-hidden">
        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0 bg-dot-grid" aria-hidden="true" />
        {/* Blue radial glow — center top */}
        <div
          className="pointer-events-none absolute left-1/2 -top-24 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
          aria-hidden="true"
        />
        {/* Indigo glow — top right */}
        <div
          className="pointer-events-none absolute -right-32 -top-16 h-80 w-80 rounded-full bg-indigo-500/[0.07] blur-[80px]"
          aria-hidden="true"
        />
        {/* Cyan whisper — bottom left */}
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan-500/[0.05] blur-[80px]"
          aria-hidden="true"
        />

      {/* HERO */}
      <section className="relative mx-auto max-w-5xl px-6 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-indigo-500/20 shadow-soft ring-1 ring-primary/20 animate-float">
            <Sparkles className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Honest PM interview{" "}
            <span className="text-gradient-primary">practice.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The only AI coach that scores on PM cognitive skills, calibrates questions to specific
            companies, and probes you with a follow-up like a real interviewer.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 min-w-[220px] text-[15px] font-semibold shadow-soft transition-shadow hover:shadow-soft-md">
              <Link to="/practice">
                Start a session <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 text-[15px] font-medium">
              <Link to="/method">How this was built</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            No signup. No paywall. ~10 minutes per session.
          </p>
        </div>
      </section>

      {/* THREE DIFFERENTIATORS */}
      <section className="relative mx-auto max-w-5xl px-6 pb-16 sm:px-8 sm:pb-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-7 shadow-soft-sm card-interactive">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-primary/20 text-primary ring-1 ring-primary/10">
              <Target className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-base font-semibold text-foreground">
              5 PM cognitive dimensions
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Problem framing, user empathy, prioritization, metrics, trade-offs. Not filler-word
              counts.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-7 shadow-soft-sm card-interactive">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/15 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/10">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-base font-semibold text-foreground">
              Calibrated to {companies.length} companies
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Razorpay, PhonePe, CRED, Swiggy, Meta, Stripe, and more. A curated list controls for
              hallucination.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-7 shadow-soft-sm card-interactive">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 text-cyan-600 dark:text-cyan-400 ring-1 ring-cyan-500/10">
              <MessageCircleQuestion className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-base font-semibold text-foreground">
              One follow-up probe
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Real interviews probe. After your scores, you get one adaptive follow-up. No other AI
              coach does this.
            </p>
          </article>
        </div>
      </section>

      </div>{/* end hero zone */}

      {/* COMPARISON */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How this compares to what you're using today
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Every existing option forces a trade-off. Here is where this tool sits, honestly.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft-sm">
            <table className="w-full min-w-[760px] text-left">
              <thead className="border-b border-border bg-secondary/40">
                <tr>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Capability
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-primary">
                    This tool
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    ChatGPT
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Exponent
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    IGotAnOffer
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Huru / general AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARISON.map((row) => (
                  <tr key={row.dimension} className="align-top">
                    <td className="px-5 py-4 text-sm font-medium text-foreground">
                      {row.dimension}
                    </td>
                    <td className="px-5 py-4">
                      <Cell mark={row.this.mark} label={row.this.label} />
                    </td>
                    <td className="px-5 py-4">
                      <Cell mark={row.chatgpt.mark} label={row.chatgpt.label} />
                    </td>
                    <td className="px-5 py-4">
                      <Cell mark={row.exponent.mark} label={row.exponent.label} />
                    </td>
                    <td className="px-5 py-4">
                      <Cell mark={row.igao.mark} label={row.igao.label} />
                    </td>
                    <td className="px-5 py-4">
                      <Cell mark={row.huru.mark} label={row.huru.label} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">The wedge:</span> a candidate who knows
            their target company, wants a question calibrated to it, wants feedback on PM-specific
            dimensions, and wants one follow-up probe — has no other tool that does all four in one
            session without paying for human coaching.
          </p>
        </div>
      </section>

      {/* SCORING DIMENSIONS */}
      <section className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24 overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[90px]" aria-hidden="true" />
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How the scoring works
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Every answer is scored on five dimensions a real PM interviewer evaluates. Each score is
            on a 1-5 scale with a written reason. A 3 means generic. 4s and 5s are earned, not
            given.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DIMENSIONS.map((d, i) => (
            <li
              key={d.name}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft-sm card-interactive"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-indigo-500/20 text-sm font-bold text-primary ring-1 ring-primary/15">
                {i + 1}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-foreground">{d.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.rationale}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/[0.06] to-indigo-500/[0.04] p-6">
          <p className="text-sm leading-relaxed text-foreground">
            <span className="font-semibold">Why this rubric and not "clarity, confidence, filler
            words"?</span>{" "}
            Generic AI coaches grade you like a public-speaking app. PM interviews differentiate on
            cognitive skill, not delivery. The rationale for each dimension is on the{" "}
            <Link
              to="/method"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              How it works
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-primary/10 bg-gradient-to-b from-primary/[0.05] via-primary/[0.03] to-secondary/40">
        <div className="pointer-events-none absolute left-1/2 -bottom-20 h-72 w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-500/[0.06] blur-[60px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ready to find out where you actually are?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Pick a company. Answer one question. See where you scored low and one follow-up probe.
            That's the whole session.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-12 min-w-[220px] text-[15px] font-semibold shadow-soft transition-shadow hover:shadow-soft-md"
          >
            <Link to="/practice">
              Start a session <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Landing;
