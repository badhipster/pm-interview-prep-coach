# PM Interview Prep Coach

> Honest AI feedback for PM interviews. Company-calibrated questions, scoring on five PM cognitive dimensions, and one follow-up probe like a real interviewer.

**[Live demo →](https://pm-interview-prep-coach.vercel.app)**  ·  **[Case study](./CASE_STUDY.md)**  ·  **[Architecture](./ARCHITECTURE.md)**

<!-- TODO: Replace with 30-second demo GIF after recording -->

---

## The wedge in one sentence

The only AI coach that combines **PM-specific scoring**, **company calibration**, and a **follow-up probe** in one async session — at zero cost to the user.

## Why this exists

Every existing option for PM interview prep forces a tradeoff:

| Existing option | What's broken |
|---|---|
| Human coaching ($100–250/hr) | Unsustainable for 2–3 sessions/week |
| Peer mocks (Exponent) | Three-day scheduling windows kill habit formation |
| Generic AI coaches (Huru, Interview Sidekick) | Score on filler words, not PM cognition; encouragement-biased |
| ChatGPT direct | No structure, no rubric, you build the prompt every time |

The full competitive analysis is in [CASE_STUDY.md](./CASE_STUDY.md#competitive-landscape). The short version: no tool combines a PM-specific rubric, company-calibrated questions, and an adaptive follow-up probe — until this one.

## What's in the box

- **15 curated companies** with structured context (positioning, interview culture, sample questions per round). Razorpay, PhonePe, CRED, Swiggy, Meta, Stripe, Notion, and others.
- **4 interview types**: Product Sense, Execution, Behavioral, Design.
- **3 role levels**: APM, PM, SPM. Each modulates the question difficulty and rubric expectations.
- **5 scoring dimensions**: Problem Framing, User Empathy, Prioritization Rationale, Metric Definition (or Outcome Clarity for Behavioral), Trade-off Awareness. Each scored 1–5 with a written reason.
- **One adaptive follow-up probe** generated based on the candidate's weakest dimension.

## Stack

- **Frontend**: Vite + React 18 + TypeScript, Tailwind CSS, shadcn/ui, React Router
- **Backend**: Supabase Edge Functions (two: `generate-question`, `evaluate`)
- **LLM**: Claude (via Supabase function)
- **Analytics**: lightweight client-side event tracking (`src/lib/track.ts`)
- **Hosting**: Vercel-compatible static build + Supabase project for functions

The full stack rationale and what was deliberately scoped out is in [ARCHITECTURE.md](./ARCHITECTURE.md).

## Run locally

```bash
# 1. Install
npm install

# 2. Configure Supabase
cp .env.example .env.local
# Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY

# 3. Start
npm run dev
```

Available scripts:

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite dev server on port 8080 |
| `npm run build` | Production build to `dist/` |
| `npm run lint` | ESLint |
| `npm run test` | Vitest |

## Project structure

```
src/
├── pages/
│   ├── Landing.tsx          # / — pitch + comparison + scoring explainer
│   ├── Practice.tsx         # /practice — the tool itself
│   ├── Method.tsx           # /method — PM reasoning, the case study in-app
│   └── NotFound.tsx
├── components/
│   ├── SiteHeader.tsx       # shared nav across all routes
│   ├── SiteFooter.tsx
│   └── interview/           # the practice flow components
├── lib/
│   ├── companies.ts         # the 15-company curated dataset
│   ├── scoring.ts
│   └── track.ts             # event analytics
├── types/interview.ts       # InterviewType, Role, Scores, etc.
└── integrations/supabase/   # Supabase client

supabase/functions/
├── generate-question/       # LLM call to produce a calibrated question
└── evaluate/                # LLM call to score answer + generate probe
```

## Built by

Abhishek Ranjan ([@badhipster](https://github.com/badhipster)) as a portfolio project demonstrating PM judgment, AI-integrated UX, and disciplined scoping.

The product itself is the case study — every visible element is a PM decision, documented inline at [/method](./src/pages/Method.tsx) and in the markdown files in this repo.
