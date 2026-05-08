import type { UserProfile, SessionRecord, Scores, Role, InterviewType, PracticeMode, BarAssessment } from "@/types/interview";
import { DIMENSION_KEYS } from "@/types/interview";

const STORAGE_KEY = "pm-prep-coach-profile";

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function getProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createEmptyProfile();
    const parsed = JSON.parse(raw) as UserProfile;
    if (!Array.isArray(parsed.sessions)) return createEmptyProfile();
    return parsed;
  } catch {
    return createEmptyProfile();
  }
}

function createEmptyProfile(): UserProfile {
  return {
    sessions: [],
    createdAt: new Date().toISOString(),
    lastSessionAt: new Date().toISOString(),
  };
}

function saveProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    console.warn("[profile] localStorage write failed");
  }
}

export function saveSession(params: {
  company: string;
  role: Role;
  interviewType: InterviewType;
  mode: PracticeMode;
  scores: Scores;
  barAssessment: BarAssessment;
  probeCount: number;
  targetDimension?: keyof Scores;
  targetDimensionScore?: number;
}): SessionRecord {
  const profile = getProfile();
  const record: SessionRecord = {
    id: generateId(),
    timestamp: new Date().toISOString(),
    ...params,
  };
  profile.sessions.push(record);
  profile.lastSessionAt = record.timestamp;
  saveProfile(profile);
  return record;
}

export function clearProfile(): void {
  localStorage.removeItem(STORAGE_KEY);
}

// Analytics derived from session history

export function getSessionCount(): number {
  return getProfile().sessions.length;
}

export function getDimensionAverages(): Record<keyof Scores, number> | null {
  const sessions = getProfile().sessions;
  if (sessions.length === 0) return null;

  const sums: Record<string, number> = {};
  const counts: Record<string, number> = {};

  for (const dim of DIMENSION_KEYS) {
    sums[dim] = 0;
    counts[dim] = 0;
  }

  for (const session of sessions) {
    for (const dim of DIMENSION_KEYS) {
      const val = session.scores[dim]?.score;
      if (typeof val === "number") {
        sums[dim] += val;
        counts[dim] += 1;
      }
    }
  }

  const result = {} as Record<keyof Scores, number>;
  for (const dim of DIMENSION_KEYS) {
    result[dim as keyof Scores] = counts[dim] > 0
      ? Math.round((sums[dim] / counts[dim]) * 10) / 10
      : 0;
  }
  return result;
}

export function getWeakestDimension(): keyof Scores | null {
  const avgs = getDimensionAverages();
  if (!avgs) return null;

  let lowest = Infinity;
  let tiedDimensions: (keyof Scores)[] = [];

  for (const dim of DIMENSION_KEYS) {
    if (avgs[dim] < lowest) {
      lowest = avgs[dim];
      tiedDimensions = [dim];
    } else if (avgs[dim] === lowest) {
      tiedDimensions.push(dim);
    }
  }
  
  return tiedDimensions[Math.floor(Math.random() * tiedDimensions.length)];
}

export function getStrongestDimension(): keyof Scores | null {
  const avgs = getDimensionAverages();
  if (!avgs) return null;

  let strongest: keyof Scores = DIMENSION_KEYS[0];
  let highest = -Infinity;

  for (const dim of DIMENSION_KEYS) {
    if (avgs[dim] > highest) {
      highest = avgs[dim];
      strongest = dim;
    }
  }
  return strongest;
}

export function getDimensionTrend(dimension: keyof Scores): number[] {
  const sessions = getProfile().sessions;
  return sessions
    .filter(s => s.scores[dimension]?.score != null)
    .map(s => s.scores[dimension].score);
}

export function getRecentSessions(count = 10): SessionRecord[] {
  const sessions = getProfile().sessions;
  return sessions.slice(-count);
}

// Calibration report readiness
export function isCalibrationReady(): boolean {
  return getProfile().sessions.length >= 3;
}
