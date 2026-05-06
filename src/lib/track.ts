// Stub analytics layer. PRD calls for PostHog; swap implementation here when keys are added.
type EventName =
  | "session_start"
  | "answer_submitted"
  | "score_received"
  | "probe_received"
  | "probe_answered";

export function track(name: EventName, props: Record<string, unknown> = {}): void {
  // eslint-disable-next-line no-console
  console.info("[track]", name, props);
}
