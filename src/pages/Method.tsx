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
            The PM reasoning behind every design choice.
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            This page is the case study, written for someone who is using the product right now. It
            explains what was built, what was deliberately left out, and why.
          </p>
        </header>

        {/* SECTIONS */}
        <Section number="01" title="Why these five dimensions">
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

        <Section number="02" title="How company calibration works (and why it's curated)">
          <p>
            Each company in the picker has structured context attached: market positioning, current
            tensions, interview culture, role-level expectations, and three sample questions per
            interview type. The model uses this context to generate questions that sound like the
            company's actual interview style — not a generic "design a product" prompt.
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
              the list has been hand-curated. Adding a 16th means writing the context, the role
              expectations, and the sample questions properly. This is a quality signal, not a
              quantity signal. Competitors with 3000+ questions have noise; this has signal.
            </li>
          </ul>
        </Section>

        <Section number="03" title="Why one follow-up probe (and not multi-turn)">
          <p>
            Real PM interviews have probes. The interviewer hears your answer and pokes at the
            weakest part: "What about users who don't have smartphones?", "How would you measure
            that?", "What's the trade-off you're making?" No async AI tool does this.
          </p>
          <p>
            The probe here is generated based on your weakest scoring dimension. If you scored low
            on Metric Definition, the probe will press you on metrics. If you scored low on
            Prioritization Rationale, it will ask you to justify a choice you breezed past.
          </p>
          <p>
            <span className="font-semibold text-foreground">Why one probe and not a multi-turn back-and-forth?</span>{" "}
            Three reasons:
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">One probe is enough to differentiate.</span>{" "}
              No competitor at any price point does this in an async, structured flow. A single
              follow-up beats zero.
            </li>
            <li>
              <span className="font-semibold text-foreground">Multi-turn drifts.</span> By turn
              three, the model has lost the rubric and is generating generic conversation. The
              quality of the second probe is much lower than the first.
            </li>
            <li>
              <span className="font-semibold text-foreground">Habit beats depth.</span> A 10-minute
              session you do three times a week beats a 45-minute session you do once. Single probe
              keeps the loop tight.
            </li>
          </ul>
        </Section>

        <Section number="04" title="What's scoped out, and why">
          <p>
            More features were considered and explicitly cut. Each cut is documented because the
            decisions are the case study.
          </p>
          <ul className="mt-2 space-y-4 pl-1">
            <li>
              <span className="font-semibold text-foreground">No accounts, no history, no
              dashboard.</span>{" "}
              Habit formation requires zero friction at session start. The competitor here is
              ChatGPT — instant, no signup. Adding auth before the first session loses on the only
              axis where this beats ChatGPT.
            </li>
            <li>
              <span className="font-semibold text-foreground">No voice or live mock.</span> Two
              reasons. First, real PM interviews are conversational but the cognitive evaluation is
              text-equivalent — voice adds production cost without rubric improvement. Second,
              latency in voice models still kills the "real interview" feeling more than written
              answers do.
            </li>
            <li>
              <span className="font-semibold text-foreground">No huge question bank.</span>{" "}
              PMExercises has 3000+ questions. That's a quantity signal that competes on terrain
              this tool can't win and doesn't need to. Question generation per session keeps the
              experience fresh without the editorial overhead of a static bank.
            </li>
            <li>
              <span className="font-semibold text-foreground">No leaderboards or streaks.</span>{" "}
              Gamification works for habit formation but it's noise here. The honest signal is your
              weakest dimension across recent sessions, and right now that's left to the user to
              notice. If accounts existed, this is the one history feature worth adding.
            </li>
          </ul>
        </Section>

        <Section number="05" title="What 'Pro' would be, and why I'd cut it that way">
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
            high. Exponent and IGotAnOffer both diversified away from pure subscription because the
            unit economics don't work as B2C-only.
          </p>
          <p>
            <span className="font-semibold text-foreground">What I'd actually build:</span>
          </p>
          <ul className="mt-2 space-y-3 pl-1">
            <li>
              <span className="font-semibold text-foreground">One-time $9 calibration product.</span>{" "}
              Five sessions, detailed report, weakness trend across sessions. Matches Karan's
              persona — willing to pay for an honest read once, before applying.
            </li>
            <li>
              <span className="font-semibold text-foreground">B2B to bootcamps and MBA career
              services.</span> Per-seat licensing. They already have rubrics and want async tools
              for their cohorts. Higher ACV, longer LTV, slower sales cycle.
            </li>
            <li>
              <span className="font-semibold text-foreground">White-label to existing coaching
              firms.</span> Exponent and IGotAnOffer already have the audience and the trust. The
              moat for a new entrant is the rubric, not the audience.
            </li>
          </ul>
          <p>
            What I would <span className="italic">not</span> build: a generic Free vs Pro tier with
            session caps. The cap directly murders Riya's habit-formation use case (2-3 practice
            sessions per week), and Riya is the user with the longest LTV.
          </p>
        </Section>

        <Section number="06" title="Who this is built for">
          <p>
            Two primary personas drove every design decision:
          </p>
          <ul className="mt-2 space-y-4 pl-1">
            <li>
              <span className="font-semibold text-foreground">Riya — the Repeat Practitioner.</span>{" "}
              APM interviewing at 6-8 companies. Wants short evening sessions on mobile, calibrated
              to her target companies. The reason there's no signup wall.
            </li>
            <li>
              <span className="font-semibold text-foreground">Karan — the Calibration Seeker.</span>{" "}
              SWE transitioning to PM. Wants one honest read on whether his thinking meets bar.
              Every other AI tool tells him 4/5 with generic feedback. The reason the rubric is
              honest by design and the probe asks the hard follow-up.
            </li>
          </ul>
          <p>
            Anyone else using the tool is welcome, but design decisions break ties in favor of these
            two.
          </p>
        </Section>

        <Section number="07" title="Stack and tradeoffs">
          <p>
            Vite + React + TypeScript on the frontend, Tailwind and shadcn/ui for the design system,
            Supabase Edge Functions for the LLM calls. Two functions: one for question generation,
            one for scoring + probe.
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
            <span className="font-semibold text-foreground">Why no database (yet)?</span> Without
            history or accounts, there is nothing to persist. Adding a database before there's a
            feature that needs it is over-engineering.
          </p>
        </Section>
      </article>

      {/* CTA */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:px-8 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Try a session.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            Reading the methodology helps. Trying it once helps more.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 h-12 min-w-[220px] text-[15px] font-semibold shadow-soft transition-shadow hover:shadow-soft-md"
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

export default Method;
