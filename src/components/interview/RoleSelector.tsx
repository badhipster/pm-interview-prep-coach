import { cn } from "@/lib/utils";
import type { Role } from "@/types/interview";
import { Check } from "lucide-react";

interface Props {
  selectedRole: Role | null;
  onSelect: (role: Role) => void;
  disabled?: boolean;
}

const ROLES: { id: Role; label: string; descriptor: string }[] = [
  {
    id: "APM",
    label: "APM",
    descriptor: "0-2 years • Potential & structured thinking",
  },
  {
    id: "PM",
    label: "PM",
    descriptor: "2-5 years • Execution & cross-functional leadership",
  },
  {
    id: "SPM",
    label: "SPM",
    descriptor: "5+ years • Strategy & P&L ownership",
  },
];

export function RoleSelector({ selectedRole, onSelect, disabled }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {ROLES.map((role) => {
        const isSelected = selectedRole === role.id;
        return (
          <button
            key={role.id}
            onClick={() => onSelect(role.id)}
            disabled={disabled}
            className={cn(
              "group relative flex flex-col items-start gap-1 rounded-xl border p-4 text-left transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
              disabled && "opacity-50 cursor-not-allowed",
              isSelected
                ? "border-primary bg-primary/5 shadow-soft"
                : "border-border bg-card hover:border-primary/30 hover:shadow-soft-sm",
              !disabled && !isSelected && "card-interactive"
            )}
          >
            <div className="flex w-full items-center justify-between">
              <span
                className={cn(
                  "font-semibold",
                  isSelected ? "text-primary" : "text-foreground"
                )}
              >
                {role.label}
              </span>
              {isSelected && (
                <Check className="h-4 w-4 text-primary animate-fade-in" />
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              {role.descriptor}
            </span>
          </button>
        );
      })}
    </div>
  );
}
