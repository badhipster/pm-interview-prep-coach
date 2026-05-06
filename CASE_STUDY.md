# Case Study: PM Interview Prep Coach

A portfolio project that argues its own case. Every design decision is documented because the decisions are the product.

---

## TL;DR

**Problem.** PM candidates have no async tool that scores them on PM cognitive skills, calibrates questions to specific companies, and probes follow-ups like a real interviewer. They get human coaching ($200/hr), generic AI ("clarity, confidence"), or DIY prompting (no rubric).

**Solution.** A free, no-signup web tool that does all three in a 10-minute session: pick interview type → company → role → answer one calibrated question → get scored on 5 PM dimensions → answer one targeted follow-up probe.

**Wedge.** The follow-up probe is the single sharpest differentiator. No competitor at any price point delivers this in an async, structured flow. The PM-specific rubric and curated company list are the supporting moats.

**Status.** Built as a portfolio project. No monetization. The "What Pro would be" thinking is documented inside [/method](src/pages/Method.tsx) and in this case study.

---

## The problem

PM interview prep is a market failure across three dimensions.

### Cost-quality tension

Human coaching from ex-FAANG PMs (IGotAnOffer) is $100–250/hour. That's high enough that candidates can afford 2–3 sessions total — far below what habit formation requires. Peer mock platforms (Exponent) lower the cost but introduce three-day scheduling windows. Both options force candidates to ration their practice.

### Generic AI fails on rubric

Tools like Huru and Interview Sidekick are async and free at the entry tier, but they score on "clarity, confidence, filler-word count" — a public-speaking rubric that has nothing to do with PM cognition. Worse, they're encouragement-biased by default ("Great structure! Consider adding more detail."). A candidate using them learns nothing about whether their thinking meets bar.

### DIY with ChatGPT is unstructured

The most flexible option is also the worst for repeat practice. The candidate has to build the prompt themselves every session, has no rubric, and gets feedback that's calibrated against the model's general training rather than PM interview standards. ChatGPT-direct is explicitly biased toward agreement and praise, which is the opposite of what useful interview feedback looks like.

### The unmet need

A candidate who knows their target company (say, Razorpay), wants a question calibrated to it, wants feedback on PM-specific cognitive dimensions, and wants one realistic follow-up probe — has no tool that does all four in a single session without paying for human coaching.

---

## Users

Two primary personas. Every design decision was triaged against these two.

### Riya — the Repeat Practitioner

24, APM at a Series B startup. Actively interviewing at 6–8 companies. Wants 2–3 short evening sessions a week, on mobile, calibrated to her targets. **Habit formation is everything for Riya.** Any friction at session start (signup, paywall) loses her to ChatGPT.

**Her #1 ask:** company calibration. If "Razorpay" generates a generic product-sense question, the tool fails her.

### Karan — the Calibration Seeker

27, SWE transitioning to PM. Three months of self-study. Wants one honest read on whether his thinking meets PM bar. Every other AI tool gives him 4/5 with generic feedback, which is useless because he can't tell if he's actually weak or actually fine.

**His #1 ask:** honest, dimension-specific scoring. A 2/5 on Prioritization Rationale with a specific reason is more valuable to Karan than a 4/5 with a generic compliment.

### Portfolio audience (not a persona)

A senior PM on a hiring panel, finding the live URL via the GitHub README. **They are not a user of the tool.** Their signal comes from the case study and the architecture document. The product exists to demonstrate PM judgment to them, not to serve their job. Design tradeoffs were never made to "look more impressive" at the cost of Riya/Karan's experience.

---

## Solution

A three-page web app:

1. **Landing (`/`)** — pitches the wedge, shows the comparison table inline, explains the 5 dimensions. Built for the first-time visitor (Karan, recruiters).
2. **Practice (`/practice`)** — the tool itself. Pick type → company → role → one question → one answer → scores → one probe. No signup, ever.
3. **Method (`/method`)** — the PM reasoning behind every design choice, written for someone who is using the product right now. The case study lives inside the product.

### Core flow

```
Setup            Answer            Score              Probe              Done
─────            ──────            ─────              ─────              ────
Type +           Free-text         5 dimensions,      One adaptive       Reset
Company +        textarea          1-5, with          follow-up          + reflect
Role             (150-4000         written reason     based on
                  chars)           per dim            weakest dim
```

Every transition is single-screen. No hidden affordances. ~10 minutes per session, mobile-friendly, no account.

### Why these 5 dimensions

Triangulated from public PM rubrics (Meta, Google, Amazon) and frameworks (CIRCLES, Rocketblocks):

| Dimension | What it measures | Why it matters |
|---|---|---|
| Problem Framing | Did you define the problem before solving? | Junior tell: jumping straight to features |
| User Empathy | Did you anchor on a specific user segment? | Generic users = generic answers |
| Prioritization Rationale | Did you justify your choices? | Lists without rationale = junior PM |
| Metric Definition | Did you name how success is measured? | PMs are accountable to numbers |
| Trade-off Awareness | Did you say what you gave up? | The 4 vs 5 line |

For Behavioral interviews, "Metric Definition" becomes "Outcome Clarity" — same dimension, different vocabulary.

### Why curated companies, not free text

Two reasons: hallucination control and quality bar. An LLM given "make me a question for a fintech startup" will invent generic prompts. Given "Razorpay APM, Product Sense, here is the company's actual context and three real past questions," it produces something usable.

Each company has structured context: market positioning, current strategic tensions, interview culture, role-level expectations, and 3 sample questions per interview type. Adding the 16th company means writing all of that. **Quantity is a noise signal; curation is a quality signal.**

### Why one follow-up probe

Three reasons documented in [/method](src/pages/Method.tsx):

1. **One probe is enough to differentiate** — no async competitor does any probe at any price.
2. **Multi-turn drifts** — by turn three, the model loses the rubric.
3. **Habit beats depth** — a 10-minute loop done three times a week beats a 45-minute loop done once.

The probe is generated based on the user's lowest-scoring dimension. A weak Metric Definition score generates a probe pressing on metrics. A weak Prioritization Rationale generates one asking the candidate to justify a choice they breezed past.

---

## What's deliberately scoped out

This is the part of the case study that matters most to a PM hiring manager. The cuts, with reasoning:

| Scoped out | Why |
|---|---|
| Accounts, history, dashboard | Friction at session start = lost to ChatGPT. Habit formation requires zero signup wall. |
| Voice / live mock | Latency in voice models still kills the "real interview" feeling. Cognitive evaluation is text-equivalent. |
| Massive question bank (3000+) | Quantity competes on terrain this tool can't win. Per-session generation keeps it fresh. |
| Leaderboards, streaks, gamification | Noise. The honest signal is your weakest dimension trend, not a streak count. |
| Multi-turn probe conversation | Rubric drift. Single targeted probe is sharper than a meandering chat. |
| Auth + payment surface area | Without a feature that needs persistence (weakest-dimension trend), auth is dead chrome. |
| Pricing / Pro tier | This is a portfolio piece. Real monetization analysis lives in [Method §05](src/pages/Method.tsx). |

Every cut was a deliberate decision against a real candidate feature. The full reasoning is in `/method`.

---

## Metrics that would matter (if this were a real product)

Since this is a portfolio project with no users, these are the metrics I would instrument and watch — not metrics I'm reporting:

| Metric | Why |
|---|---|
| **Sessions per user per week** | Riya's habit signal. Below 2/week = product isn't sticking. |
| **Probe response rate** | Are candidates engaging with the follow-up, or bouncing after scores? Low = probe isn't sharp enough. |
| **Lowest-dimension consistency** | Does a user keep landing low on the same dim? If yes, the rubric is detecting real weakness, not noise. |
| **Time-to-first-answer** | Friction proxy. Long delays before typing = setup is too heavy. |
| **Company distribution** | Which companies drive practice volume? Expand the curated list against demand, not assumption. |

Lightweight client-side tracking is already wired in (`src/lib/track.ts`) for `session_start`, `answer_submitted`, `score_received`, `probe_received`, `probe_answered`. A real version would route these to a destination.

---

## Competitive landscape

| Competitor | Wins on | Loses on |
|---|---|---|
| Exponent | Peer mocks closest to real interviews; community | No AI feedback loop; scheduling friction |
| IGotAnOffer | Insider company knowledge; real probing | $100-250/hr; no async |
| RocketBlocks | Drilling structure (sizing, math) | Consulting-primary; static; no AI |
| Huru / Interview Sidekick | AI-native, instant, accessible | Generic rubric; encouragement-biased |
| ChatGPT / Claude direct | Free, flexible | No rubric; no cadence; user does all the work |

**The wedge:** PM-specific rubric + company calibration + adaptive probe in one async session. No competitor at any price point combines all three.

---

## What I'd build next

In rough order of leverage if this were a real product:

1. **Weakest-dimension trend across sessions.** Requires accounts. The single feature that would justify auth.
2. **One-time $9 calibration product** (5 sessions, detailed report). Matches Karan's persona — willing to pay once, before applying.
3. **B2B to bootcamps and MBA career services.** Per-seat licensing. Higher ACV, longer LTV, the actual unit economics that work.
4. **Expanded company list (driven by usage data).** Add the 16th, 17th, 18th company against where users actually practice.
5. **Comparative answer mode.** Paste two attempts at the same question, see what changed. Unique to this tool.

What I would **not** build: a generic Free vs Pro tier with session caps. The cap directly murders Riya's 2-3-sessions-a-week habit. Wrong cut.

---

## Repo layout

- [/README.md](README.md) — quick intro, stack, run locally
- [/CASE_STUDY.md](CASE_STUDY.md) — this document
- [/ARCHITECTURE.md](ARCHITECTURE.md) — one-page tech tradeoffs
- [/src/pages/Method.tsx](src/pages/Method.tsx) — the in-app version of this reasoning, written for users mid-session
