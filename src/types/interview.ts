export type InterviewType = "Product Sense" | "Execution" | "Behavioral" | "Design";

export type Role = "APM" | "PM" | "SPM";

export type PracticeMode = "calibrate" | "drill" | "mock";

export type CompanyRegion = "india" | "global";

export type BarAssessment = "below" | "borderline" | "at" | "above";

export interface Company {
  id: string;
  name: string;
  descriptor: string;
  context: string;
  interviewCulture: string;
  roleContext: Record<Role, string>;
  sampleQuestions: Record<InterviewType, string[]>;
  region: CompanyRegion;
  dimensionWeights: DimensionWeights;
  interviewStructure: string;
  hiringBarByRole: Record<Role, string>;
  whatMakesThemDifferent: string;
}

// 1-5 importance weight per dimension (how heavily this company tests it)
export type DimensionWeights = Record<keyof Scores, number>;

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
  barAssessment: BarAssessment;
  barReason: string;
}

export type SessionStep =
  | "setup"
  | "answering"
  | "scoring"
  | "probing"
  | "done";

// localStorage profile types
export interface SessionRecord {
  id: string;
  timestamp: string;
  company: string;
  role: Role;
  interviewType: InterviewType;
  mode: PracticeMode;
  scores: Scores;
  barAssessment: BarAssessment;
  probeCount: number;
  targetDimension?: keyof Scores;
  targetDimensionScore?: number;
}

export interface UserProfile {
  sessions: SessionRecord[];
  createdAt: string;
  lastSessionAt: string;
}

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

// User-friendly short labels for dimension weights display
export function dimensionShortLabel(key: keyof Scores): string {
  const labels: Record<keyof Scores, string> = {
    problemFraming: "Problem Framing",
    userEmpathy: "User Empathy",
    prioritizationRationale: "Prioritization",
    metricDefinition: "Metrics",
    tradeoffAwareness: "Trade-offs",
  };
  return labels[key];
}

// Weight label for user-facing display
export function weightLabel(weight: number): string {
  if (weight >= 5) return "Critical";
  if (weight >= 4) return "High";
  if (weight >= 3) return "Moderate";
  if (weight >= 2) return "Low";
  return "Minimal";
}
