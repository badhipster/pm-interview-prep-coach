# Architecture

One page. Tradeoffs first.

## At a glance

```
┌─────────────────────┐    ┌──────────────────────────┐    ┌────────────┐
│  React SPA (Vite)   │───▶│  Supabase Edge Functions │───▶│  Claude    │
│  Tailwind + shadcn  │    │  generate-question       │    │  via API   │
│  React Router       │    │  evaluate (score+probe)  │    │            │
└─────────────────────┘    └──────────────────────────┘    └────────────┘
        │                            │
        │ track.ts (client events)   │ Supabase auth (anon key only)
        ▼                            ▼
   localStorage / no DB          No persistence (yet)
```

Three pages (`/`, `/practice`, `/method`). Two server functions. Zero database. No accounts.

## Tradeoffs table

| Decision | What I picked | What I rejected | Why |
|---|---|---|---|
| Frontend framework | **Vite + React** | Next.js | No SSR / SEO requirement for a single-purpose tool. Vite ships smaller, builds faster, simpler mental model. |
| Styling | **Tailwind + shadcn/ui** | CSS-in-JS, plain CSS | Speed of iteration; consistent design tokens; shadcn keeps components owned, not vendored. |
| Routing | **React Router (SPA)** | File-based routing, MPA | Three pages. SPA navigation feels instant. Overhead of file routing isn't worth it. |
| Backend | **Supabase Edge Functions** | Node/Express, Vercel API routes | LLM call is the only server-side work. Edge functions = zero infra, low latency, cheap cold start. |
| LLM call shape | **Two functions: generate-question, evaluate** | One mega-prompt | Separation of concerns; allows different temperatures, different system prompts; failures don't block each other. |
| Database | **None** | Supabase Postgres | No feature requires persistence yet. Adding a DB before the feature that needs it is overengineering. |
| Auth | **None** | Supabase Auth | Habit formation requires zero friction at session start. Auth without a feature that needs it is dead chrome. |
| Question bank | **Curated 15 companies × structured context** | 3000+ static questions, free-text input | Curation = quality signal. Static = stale. Free-text = hallucination risk. |
| Scoring rubric | **5 PM cognitive dimensions** | Generic clarity/confidence | PM interviews evaluate cognition, not delivery. Generic rubric = encouragement-biased AI. |
| Probe model | **Single follow-up, targeted at lowest dimension** | Multi-turn conversation | Multi-turn drifts; one probe is enough to beat all async competitors. |
| State management | **React useState** | Redux, Zustand, Jotai | Four pieces of session state. Lifting to global is overkill. |
| Analytics | **Client-side `track.ts`, custom events** | Mixpanel SDK, GA4 | Five events total; rolling our own keeps the bundle slim. Easy to swap destination later. |
| Component library | **shadcn/ui (owned)** | Material UI, Chakra | Owning components = customizing without fighting a vendor. shadcn is copy-paste; nothing to upgrade. |
| Form validation | **Native, manual** | react-hook-form + zod | One form per page; native is enough. zod is in deps for typed schemas if/when needed. |
| Test framework | **Vitest + Testing Library** | Jest | Vite-native; faster; same API as Jest where it matters. |

## File map

```
project-compass-main/
├── src/
│   ├── pages/
│   │   ├── Landing.tsx          ← / (pitch + comparison + dimensions)
│   │   ├── Practice.tsx         ← /practice (the tool)
│   │   ├── Method.tsx           ← /method (PM reasoning, in-app case study)
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── SiteHeader.tsx       ← shared nav
│   │   ├── SiteFooter.tsx
│   │   ├── NavLink.tsx
│   │   ├── interview/
│   │   │   ├── TypeSelector.tsx     (Product Sense / Execution / Behavioral / Design)
│   │   │   ├── CompanySelector.tsx  (15 companies)
│   │   │   ├── RoleSelector.tsx     (APM / PM / SPM)
│   │   │   ├── QuestionCard.tsx     (annotated with calibration rationale)
│   │   │   ├── AnswerInput.tsx      (150-4000 char textarea)
│   │   │   ├── ScoreCard.tsx        (5 dimensions, color-coded)
│   │   │   ├── ProbeCard.tsx        (annotated with probe rationale)
│   │   │   ├── DoneCard.tsx
│   │   │   └── StepIndicator.tsx
│   │   └── ui/                  ← shadcn primitives
│   ├── lib/
│   │   ├── companies.ts         ← the curated 15-company dataset
│   │   ├── scoring.ts           ← color/label helpers for score tiers
│   │   ├── track.ts             ← lightweight event tracking
│   │   └── utils.ts             ← cn()
│   ├── types/interview.ts       ← all session types in one place
│   └── integrations/supabase/
│       └── client.ts            ← anon-key Supabase client
└── supabase/
    └── functions/
        ├── generate-question/   ← LLM: produces calibrated question
        └── evaluate/            ← LLM: scores 5 dims + generates probe
```

## Latency and cost budget

Per session:

| Stage | API calls | Approx latency | Approx cost |
|---|---|---|---|
| Generate question | 1 LLM call | 2-4 s | $0.005 |
| Evaluate + probe | 1 LLM call | 4-8 s | $0.012 |
| **Total per session** | **2 calls** | **6-12 s** | **~$0.017** |

Two LLM calls per session keeps cost predictable. At $0.02/session, 1000 sessions ≈ $20. The bottleneck is the eval prompt; further optimization would mean batching score + probe into one structured output (already done) vs. splitting (not done — would double latency without quality gain).

## Things this architecture explicitly defers

- **Rate limiting.** Supabase Edge Functions have a global rate limit; per-user limits would require auth or a fingerprint table. Acceptable for portfolio scope.
- **Server-side analytics.** Events fire client-side only. A real version would forward to a destination (PostHog, Mixpanel, or a Supabase events table).
- **Caching.** No CDN cache for the LLM responses. Each session is fresh; not a problem until volume.
- **Internationalization.** English only. The 15 curated companies skew India + global, which is intentional given the personas.
- **Accessibility audit.** Components inherit shadcn's a11y defaults (keyboard, ARIA, focus rings). A formal WCAG 2.1 audit hasn't been run.

## What would break first under load

Honest answer: the LLM provider's rate limit. Not the frontend, not Supabase. If the tool got an unexpected traffic spike, sessions would queue or 429 from the model API before any client-side code becomes the bottleneck. Mitigation: add a per-IP semaphore in the Edge Function, or move to a queued worker pattern. Neither is needed at portfolio scale.
