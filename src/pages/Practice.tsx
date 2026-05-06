import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase, supabaseConfigured } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TypeSelector } from "@/components/interview/TypeSelector";
import { CompanySelector } from "@/components/interview/CompanySelector";
import { QuestionCard } from "@/components/interview/QuestionCard";
import { AnswerInput } from "@/components/interview/AnswerInput";
import { ScoreCard } from "@/components/interview/ScoreCard";
import { ProbeCard } from "@/components/interview/ProbeCard";
import { DoneCard } from "@/components/interview/DoneCard";
import { StepIndicator } from "@/components/interview/StepIndicator";
import { RoleSelector } from "@/components/interview/RoleSelector";
import { track } from "@/lib/track";
import { companies } from "@/lib/companies";
import type {
  EvaluationResult,
  InterviewType,
  SessionStep,
  Role,
} from "@/types/interview";

const Practice = () => {
  const [step, setStep] = useState<SessionStep>("setup");
  const [interviewType, setInterviewType] = useState<InterviewType | null>(null);
  const [company, setCompany] = useState<string | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [question, setQuestion] = useState<string>("");
  const [generating, setGenerating] = useState(false);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [submittingAnswer, setSubmittingAnswer] = useState(false);

  const reset = () => {
    setStep("setup");
    setInterviewType(null);
    setCompany(null);
    setRole(null);
    setQuestion("");
    setEvaluation(null);
  };

  const handleGenerate = async () => {
    if (!interviewType || !company || !role) return;
    setGenerating(true);
    try {
      const companyData = companies.find(c => c.id === company || c.name === company);
      if (!companyData) throw new Error("Company data not found");

      const { data, error } = await supabase.functions.invoke("generate-question", {
        body: {
          interviewType,
          company: companyData.name,
          role,
          companyContext: companyData.context,
          interviewCulture: companyData.interviewCulture,
          roleContext: companyData.roleContext[role],
          sampleQuestions: companyData.sampleQuestions[interviewType]
        },
      });
      if (error) throw error;
      const q = (data as { question?: string })?.question;
      if (!q) throw new Error("No question returned");
      setQuestion(q);
      setStep("answering");
      track("session_start", { interview_type: interviewType, company, role });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Failed to generate question";
      toast.error(msg.includes("Rate limit") ? msg : "Could not generate a question. Please try again.");
      console.error(e);
    } finally {
      setGenerating(false);
    }
  };

  const handleSubmitAnswer = async (answer: string, timeToAnswerSec: number) => {
    if (!interviewType || !company || !role) return;
    setSubmittingAnswer(true);
    setStep("scoring");
    track("answer_submitted", { char_count: answer.length, time_to_answer_sec: timeToAnswerSec });
    try {
      const { data, error } = await supabase.functions.invoke("evaluate", {
        body: { interviewType, company, role, question, answer },
      });
      if (error) throw error;
      const result = data as EvaluationResult;
      if (!result?.scores) throw new Error("Evaluator returned no scores");
      setEvaluation(result);
      const s = result.scores;
      const lowestEntry = Object.entries(s).sort((a, b) => a[1].score - b[1].score)[0];
      track("score_received", {
        problemFraming: s.problemFraming.score,
        userEmpathy: s.userEmpathy.score,
        prioritizationRationale: s.prioritizationRationale.score,
        metricDefinition: s.metricDefinition.score,
        tradeoffAwareness: s.tradeoffAwareness.score,
        lowest_dimension: lowestEntry?.[0],
      });
      track("probe_received", {
        probe_type: result.probeType,
        archetype: result.probeArchetype,
      });
      setStep("probing");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Could not evaluate answer";
      toast.error(msg.includes("Rate limit") ? msg : "Could not evaluate your answer. Please try again.");
      console.error(e);
      setStep("answering");
    } finally {
      setSubmittingAnswer(false);
    }
  };

  const handleSubmitProbe = (response: string) => {
    track("probe_answered", { char_count: response.length });
    setStep("done");
  };

  const restartButton = step !== "setup" ? (
    <button
      type="button"
      onClick={reset}
      className="ml-2 rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      Restart
    </button>
  ) : null;

  if (!supabaseConfigured) {
    return (
      <main className="min-h-dvh bg-background">
        <SiteHeader />
        <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24">
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-8 shadow-soft animate-fade-up">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <AlertCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Practice backend not connected
                </h1>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                  This deploy is the portfolio version. The two Supabase Edge Functions that power
                  question generation and scoring are not yet wired up to a Supabase project, so
                  live sessions are temporarily unavailable.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                  The full design, scoring rubric, and reasoning behind every choice is on the{" "}
                  <Link to="/method" className="font-semibold text-primary underline-offset-4 hover:underline">
                    How it works
                  </Link>{" "}
                  page. Source code is on{" "}
                  <a
                    href="https://github.com/badhipster/pm-interview-prep-coach"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
        </div>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-background">
      <SiteHeader rightSlot={restartButton} />

      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
        {(step === "answering" || step === "scoring" || step === "probing") && (
          <div className="mb-12">
            <StepIndicator step={step} />
          </div>
        )}

        {step === "setup" && (
          <div className="space-y-14 animate-fade-up">
            <div className="text-center">
              <BrandIcon className="mx-auto mb-6" animate />
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ textWrap: 'balance' } as React.CSSProperties}>
                Set up your{" "}
                <span className="text-gradient-primary">session.</span>
              </h1>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Pick an interview type, target company, and role level. You'll get one calibrated
                question, scored on five dimensions, with one follow-up probe.
              </p>
            </div>

            <section className="space-y-5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                1. Interview Type
              </h2>
              <TypeSelector selected={interviewType} onSelect={setInterviewType} />
            </section>

            <section className="space-y-5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                2. Target Company
              </h2>
              <CompanySelector selected={company} onSelect={setCompany} />
            </section>

            <section className="space-y-5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                3. Role Level
              </h2>
              <RoleSelector selectedRole={role} onSelect={setRole} />
            </section>

            <div className="flex justify-center pt-2">
              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={!interviewType || !company || !role || generating}
                className="min-w-[260px] h-12 text-[15px] font-semibold shadow-soft transition-shadow hover:shadow-soft-md"
              >
                {generating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" /> Generating question…
                  </>
                ) : (
                  "Generate Question"
                )}
              </Button>
            </div>
          </div>
        )}

        {step === "answering" && interviewType && company && role && (
          <div className="space-y-8 animate-fade-up">
            <QuestionCard interviewType={interviewType} company={company} question={question} role={role} />
            <AnswerInput onSubmit={handleSubmitAnswer} disabled={submittingAnswer} />
          </div>
        )}

        {step === "scoring" && (
          <div className="flex min-h-[40vh] flex-col items-center justify-center gap-5 text-center animate-fade-up" aria-live="polite">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 shadow-soft-sm">
              <Loader2 className="h-7 w-7 animate-spin text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-base font-medium text-foreground">Evaluating your answer…</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Scoring across 5 PM dimensions
              </p>
            </div>
          </div>
        )}

        {step === "probing" && interviewType && company && role && evaluation && (
          <div className="space-y-8 animate-fade-up">
            <QuestionCard interviewType={interviewType} company={company} question={question} role={role} />
            <ScoreCard interviewType={interviewType} scores={evaluation.scores} />
            <ProbeCard probe={evaluation.probe} onSubmit={handleSubmitProbe} />
          </div>
        )}

        {step === "done" && <DoneCard onReset={reset} />}
      </div>

      <SiteFooter />
    </main>
  );
};

export default Practice;
