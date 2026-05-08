import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const Section = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="border-t border-border py-14 first:border-t-0 first:pt-0 sm:py-16">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-[120px_1fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {number}
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-[15px] leading-[1.75] text-foreground">
        {children}
      </div>
    </div>
  </section>
);

const Method = () => {
  return (
    <main className="min-h-dvh bg-background">
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        {/* HEADER */}
        <header className="mb-16 max-w-2xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h1
            className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            A diagnostic engine, not a practice tool.
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            This page is the case study. It explains the product architecture, the intelligence
            layer, and every deliberate design decision — written for someone evaluating this as
            a PM portfolio piece.
          </p>
        </header>

        {/* SECTIONS */}
        <Section number="01" title="The core thesis">
          <p>
            Most PM interview prep tools treat sessions as{" "}
            <span className="font-medium text-foreground">disposable</span>. You answer a question,
            get a score, and that's it. No memory. No longitudinal insight. No connection between
            session 1 and session 10.
          </p>
          <p>
            This tool treats PM interview prep as a{" "}
            <span className="font-medium text-foreground">diagnostic arc</span>. Every session
            contributes to a persistent profile that reveals patterns — which dimensions are
            consistently weak, whether you're improving, and where you stand relative to a
            specific company's hiring bar.
          </p>
          <p>
            The architecture is built around three modes that serve different moments in a
            candidate's prep journey:
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">Calibrate (~5 min).</span> One question,
              scored on all five dimensions. The diagnostic baseline. "Where do I stand right now?"
            </li>
            <li>
              <span className="font-semibold text-foreground">Drill (~3 min/rep).</span> Pick your
              weakest dimension, get targeted questions that test only that skill. Rapid-fire
              repetition. "How do I fix my specific weakness?"
            </li>
            <li>
              <span className="font-semibold text-foreground">Mock (~15 min).</span> Full interview
              simulation with 2-3 adaptive follow-up probes and a detailed debrief with company-calibrated
              bar assessment. "Am I ready for this specific company?"
            </li>
          </ul>
        </Section>

        <Section number="02" title="Why these five dimensions">
          <p>
            Generic AI interview coaches grade you on{" "}
            <span className="font-medium text-foreground">clarity, confidence, and filler-word
            count</span>. That is a public-speaking rubric, not a PM rubric. Real PM interviewers do
            not penalize "ums". They penalize muddled thinking.
          </p>
          <p>
            The five dimensions used here are the ones senior PMs actually evaluate against,
            triangulated from public interview rubrics at Meta, Google, Amazon, and from frameworks
            like CIRCLES and the Rocketblocks scoring guide:
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">Problem Framing.</span> Did you define
              the problem before designing the solution? Most candidates skip this. It is the
              single highest-signal dimension in the first 60 seconds of an answer.
            </li>
            <li>
              <span className="font-semibold text-foreground">User Empathy.</span> Did you anchor on
              a specific user segment with a real need, or stay at "all users want this"?
            </li>
            <li>
              <span className="font-semibold text-foreground">Prioritization Rationale.</span> Did
              you justify why one feature over another? Listing features without trade-off logic is
              a tell of a junior PM.
            </li>
            <li>
              <span className="font-semibold text-foreground">Metric Definition.</span> Did you name
              how success would be measured? PMs are accountable to numbers. If your answer ends
              without a metric, the interviewer assumes you would ship and not know if it worked.
            </li>
            <li>
              <span className="font-semibold text-foreground">Trade-off Awareness.</span> Did you
              acknowledge what you were giving up? This is what separates a 4 from a 5.
            </li>
          </ul>
          <p>
            For Behavioral interviews, "Metric Definition" is rephrased as "Outcome Clarity",
            because the dimension still applies but the language differs.
          </p>
        </Section>

        <Section number="03" title="The intelligence layer: company-calibrated scoring">
          <p>
            <span className="font-semibold text-foreground">The key differentiator is not the
            questions — it's the scoring calibration.</span> Every company in the system has a set
            of proprietary metadata that influences how the LLM evaluates your answer:
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">Dimension Weights (1-5 per dimension).</span>{" "}
              CRED weights Trade-off Awareness at 5/5 (Critical) because their interviews are
              design-deep and expect you to articulate what you're sacrificing. Razorpay weights
              Metric Definition at 5/5 because they run a data-heavy infrastructure product.
            </li>
            <li>
              <span className="font-semibold text-foreground">Hiring Bar by Role.</span>{" "}
              The expected average score that constitutes "meeting the bar" at APM, PM, and SPM level.
              An SPM candidate at Google scoring 3/5 avg may be "borderline", while the same score at
              a Series B startup is "above".
            </li>
            <li>
              <span className="font-semibold text-foreground">Interview Structure.</span>{" "}
              How many rounds, what each round covers, and what the format looks like (case study vs.
              whiteboard vs. take-home). This metadata is surfaced in the company selector so candidates
              know what they're preparing for.
            </li>
          </ul>
          <p>
            When a highly-weighted dimension scores low, the evaluator flags it prominently in the bar
            assessment reason. When a low-weight dimension scores low, it's noted but doesn't
            tank the overall bar assessment as harshly.
          </p>
          <p>
            <span className="font-semibold text-foreground">Why a curated list of 15 and not free
            text input?</span> Two reasons:
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">Hallucination control.</span> An LLM
              given "make me a question for a fintech startup" will invent generic questions. Given
              "Razorpay APM, Product Sense, here is the company's actual context and three real
              past questions", it produces something usable.
            </li>
            <li>
              <span className="font-semibold text-foreground">Quality bar.</span> Every company in
              the list has been hand-curated with dimension weights, hiring bars, and interview
              structure. Adding a 16th means writing all of that properly. This is a quality signal,
              not a quantity signal.
            </li>
          </ul>
        </Section>

        <Section number="04" title="Session memory: localStorage as a design decision">
          <p>
            Every session is persisted in the browser's localStorage. The profile system tracks:
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">Dimension averages.</span> Across
              all sessions, which dimensions are your weakest and strongest.
            </li>
            <li>
              <span className="font-semibold text-foreground">Score trends.</span> How your
              performance on each dimension is moving over time.
            </li>
            <li>
              <span className="font-semibold text-foreground">Drill suggestions.</span> Your
              weakest dimension is automatically suggested when entering Drill mode.
            </li>
            <li>
              <span className="font-semibold text-foreground">Calibration reports.</span> After 3+
              sessions, the Profile page generates a summary with actionable recommendations.
            </li>
          </ul>
          <p>
            <span className="font-semibold text-foreground">Why localStorage and not a database?</span>{" "}
            Three reasons:
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">Zero friction.</span> No signup wall.
              The competitor is ChatGPT — instant, no auth. Adding a login screen before the first
              session loses on the only axis where this tool beats ChatGPT.
            </li>
            <li>
              <span className="font-semibold text-foreground">Privacy by default.</span> Session
              data never leaves the browser. No server knows what you scored or which companies
              you're targeting.
            </li>
            <li>
              <span className="font-semibold text-foreground">Ship now, optimize later.</span>{" "}
              If this scales, the migration path is clear: add optional auth, sync localStorage to
              a database, enable cross-device access. The data model is already structured for this.
            </li>
          </ul>
        </Section>

        <Section number="05" title="The three modes: why not just one flow">
          <p>
            V1 had a single linear flow: pick type → pick company → answer → score → probe.
            User testing revealed three problems:
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">The 15-minute commitment was too high
              for a quick check.</span> Candidates who just wanted to "see where I am" bounced
              because they felt locked into a full session.
            </li>
            <li>
              <span className="font-semibold text-foreground">No way to target a specific
              weakness.</span> If you know your Metric Definition is weak, you had to play through
              the full flow and hope the question tested that dimension.
            </li>
            <li>
              <span className="font-semibold text-foreground">No progression arc.</span> Every
              session felt the same. No connection between Tuesday's session and Thursday's.
            </li>
          </ul>
          <p>
            The three modes solve these by offering different time commitments and learning
            objectives, while the shared session history creates the longitudinal arc.
          </p>
        </Section>

        <Section number="06" title="The adaptive probe system">
          <p>
            Real PM interviews have probes. The interviewer hears your answer and pokes at the
            weakest part: "What about users who don't have smartphones?", "How would you measure
            that?", "What's the trade-off you're making?"
          </p>
          <p>
            <span className="font-semibold text-foreground">Calibrate mode</span> gives you one
            probe based on your weakest scoring dimension. <span className="font-semibold text-foreground">
            Mock mode</span> generates up to three adaptive probes, where each subsequent probe
            is informed by your response to the previous one.
          </p>
          <p>
            The probe generator detects two patterns:
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">Isolated weakness (probeType: "isolated").</span>{" "}
              One dimension is clearly the lowest (≥1 point below the next). The probe targets
              that specific weakness.
            </li>
            <li>
              <span className="font-semibold text-foreground">Thematic pattern (probeType: "thematic").</span>{" "}
              Multiple weaknesses cluster into a behavioral pattern. The system identifies three
              archetypes: "solution-first" (skipped problem framing), "list-maker" (listed without
              prioritizing), "vague-goal-setter" (no concrete metrics).
            </li>
          </ul>
        </Section>

        <Section number="07" title="Who this is built for">
          <p>
            Two primary personas drove every design decision:
          </p>
          <ul className="mt-2 space-y-4 pl-1">
            <li>
              <span className="font-semibold text-foreground">Riya — the Repeat Practitioner.</span>{" "}
              APM interviewing at 6-8 companies. Uses Calibrate for baseline, Drill for weakness
              targeting, and Mock before final-round prep. Wants short sessions on mobile,
              calibrated to her target companies. The reason there's no signup wall and Drill
              mode exists.
            </li>
            <li>
              <span className="font-semibold text-foreground">Karan — the Calibration Seeker.</span>{" "}
              SWE transitioning to PM. Wants one honest read on whether his thinking meets bar.
              Uses Calibrate 3 times to get a calibration report, then decides whether to keep
              practicing or pivot his strategy. The reason the bar assessment exists and the
              rubric is honest by design.
            </li>
          </ul>
          <p>
            Both personas are India-based, which is why the company list skews India-first (10
            India tech, 5 global with India hiring). The interview culture, hiring bars, and
            dimension weights reflect Indian PM interview patterns specifically.
          </p>
        </Section>

        <Section number="08" title="Stack and tradeoffs">
          <p>
            Vite + React + TypeScript on the frontend, Tailwind and shadcn/ui for the design system,
            Supabase Edge Functions for the LLM calls. Three functional endpoints: question generation,
            scoring + probe, and follow-up probe generation for Mock mode.
          </p>
          <p>
            <span className="font-semibold text-foreground">Why not Next.js?</span> No SSR or SEO
            requirement for a single-purpose tool used by people who arrived from a direct link.
            Vite ships smaller and builds faster.
          </p>
          <p>
            <span className="font-semibold text-foreground">Why Edge Functions over a Node server?</span>{" "}
            Latency, cost, and zero infra to manage. The LLM call is the only server-side work
            needed.
          </p>
          <p>
            <span className="font-semibold text-foreground">Why localStorage over a database?</span>{" "}
            Session memory requires zero friction at entry. Adding auth before the first session
            loses on the only axis where this beats ChatGPT. The data model is structured to
            migrate to a database if optional auth is added later.
          </p>
        </Section>

        <Section number="09" title="What 'Pro' would be, and why I'd cut it that way">
          <p>
            This is a portfolio project. There is no Pro tier and no paywall. But the right
            question for any product is{" "}
            <span className="italic text-foreground">"if you were going to monetize this, how would
            you cut it?"</span>{" "}
            Here's that thinking.
          </p>
          <p>
            <span className="font-semibold text-foreground">Why pure B2C freemium fails for
            interview prep:</span> retention drops to zero the day a candidate signs an offer.
            Lifetime is 4-12 weeks. Churn is the goal of the product. CAC for "PM candidate" is
            high.
          </p>
          <p>
            <span className="font-semibold text-foreground">What I'd actually build:</span>
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">One-time ₹799 calibration report.</span>{" "}
              Five sessions, detailed diagnostic report with dimension trends and company-specific
              bar assessment. Matches Karan's persona — willing to pay for an honest read once.
            </li>
            <li>
              <span className="font-semibold text-foreground">B2B to bootcamps and MBA career
              services.</span> Per-seat licensing. They already have rubrics and want async tools
              for their cohorts. Higher ACV, longer LTV, slower sales cycle.
            </li>
            <li>
              <span className="font-semibold text-foreground">White-label to existing coaching
              firms.</span> The moat is the company intelligence layer and the diagnostic scoring
              calibration, not the audience.
            </li>
          </ul>
        </Section>
      </article>

      {/* CTA */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:px-8 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Try a session.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            Reading the methodology helps. Trying it once helps more. Three sessions unlock
            your calibration report.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 h-12 min-w-[220px] text-[15px] font-semibold shadow-soft transition-shadow hover:shadow-soft-md"
          >
            <Link to="/practice">
              Start calibrating <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Method;
