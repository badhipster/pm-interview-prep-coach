import { cn } from "@/lib/utils";
import { Lightbulb, BarChart3, MessageSquare, Palette } from "lucide-react";
import type { InterviewType } from "@/types/interview";

const TYPES: { type: InterviewType; description: string; Icon: typeof Lightbulb }[] = [
  { type: "Product Sense", description: "Frame problems, identify users, propose features.", Icon: Lightbulb },
  { type: "Execution", description: "Diagnose metrics, debug drops, prioritise fixes.", Icon: BarChart3 },
  { type: "Behavioral", description: "Tell stories of impact, leadership, conflict.", Icon: MessageSquare },
  { type: "Design", description: "Critique UX, design for a user, defend choices.", Icon: Palette },
];

interface Props {
  selected: InterviewType | null;
  onSelect: (t: InterviewType) => void;
}

export function TypeSelector({ selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {TYPES.map(({ type, description, Icon }, index) => {
        const active = selected === type;
        return (
          <button
            key={type}
            type="button"
            onClick={() => onSelect(type)}
            aria-pressed={active}
            className={cn(
              `group relative flex flex-col items-start gap-4 rounded-2xl border p-6 text-left`,
              "bg-card card-interactive shadow-soft-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              active
                ? "border-primary shadow-soft ring-1 ring-primary/20"
                : "border-border hover:border-primary/30 hover:shadow-soft",
              `animate-fade-up animate-fade-up-delay-${index}`
            )}
          >
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
                active
                  ? "bg-primary text-primary-foreground shadow-soft-sm"
                  : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
              )}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-[15px] font-semibold text-foreground">{type}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
