export function scoreColorClass(score: number): string {
  if (score <= 2) return "text-red-600";
  if (score === 3) return "text-amber-600";
  return "text-green-600";
}

export function scoreBorderClass(score: number): string {
  if (score <= 2) return "border-red-200";
  if (score === 3) return "border-amber-200";
  return "border-green-200";
}

/** Soft tinted background per score tier — subtle enough for AA readability */
export function scoreBgClass(score: number): string {
  if (score <= 2) return "bg-red-50";
  if (score === 3) return "bg-amber-50";
  return "bg-green-50";
}

export function scoreLabel(score: number): string {
  switch (score) {
    case 1:
      return "Absent";
    case 2:
      return "Surface";
    case 3:
      return "Adequate";
    case 4:
      return "Strong";
    case 5:
      return "Exceptional";
    default:
      return "";
  }
}
