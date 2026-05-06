export function scoreColorClass(score: number): string {
  if (score <= 2) return "text-score-low";
  if (score === 3) return "text-score-mid";
  return "text-score-high";
}

export function scoreBorderClass(score: number): string {
  if (score <= 2) return "border-score-low";
  if (score === 3) return "border-score-mid";
  return "border-score-high";
}

export function scoreBgClass(score: number): string {
  if (score <= 2) return "bg-score-low";
  if (score === 3) return "bg-score-mid";
  return "bg-score-high";
}

export function scoreLabel(score: number): string {
  switch (score) {
    case 1: return "Absent";
    case 2: return "Surface";
    case 3: return "Adequate";
    case 4: return "Strong";
    case 5: return "Exceptional";
    default: return "";
  }
}
