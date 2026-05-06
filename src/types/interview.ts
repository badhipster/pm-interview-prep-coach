export type InterviewType = "Product Sense" | "Execution" | "Behavioral" | "Design";

export type Role = "APM" | "PM" | "SPM";

export interface Company {
  id: string;
  name: string;
  descriptor: string;
  context: string;
  interviewCulture: string;
  roleContext: Record<Role, string>;
  sampleQuestions: Record<InterviewType, string[]>;
}

export interface DimensionScore {
  score: number;
  reason: string;
}

export interface Scores {
  problemFraming: DimensionScore;
  userEmpathy: DimensionScore;
  prioritizationRationale: DimensionScore;
  metricDefinition: DimensionScore;
  tradeoffAwareness: DimensionScore;
}

export type ProbeType = "isolated" | "thematic";
export type ProbeArchetype =
  | "solution-first"
  | "list-maker"
  | "vague-goal-setter"
  | null;

export interface EvaluationResult {
  scores: Scores;
  probe: string;
  probeType: ProbeType;
  probeArchetype: ProbeArchetype;
}

export type SessionStep =
  | "setup"
  | "answering"
  | "scoring"
  | "probing"
  | "done";

export const DIMENSION_KEYS: Array<keyof Scores> = [
  "problemFraming",
  "userEmpathy",
  "prioritizationRationale",
  "metricDefinition",
  "tradeoffAwareness",
];

export function dimensionLabel(
  key: keyof Scores,
  interviewType: InterviewType
): string {
  if (key === "problemFraming") return "Problem Framing";
  if (key === "userEmpathy") return "User Empathy";
  if (key === "prioritizationRationale") return "Prioritization Rationale";
  if (key === "tradeoffAwareness") return "Trade-off Awareness";
  if (key === "metricDefinition") {
    return interviewType === "Behavioral" ? "Outcome Clarity" : "Metric Definition";
  }
  return key;
}
