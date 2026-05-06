import { cn } from "@/lib/utils";
import { companies } from "@/lib/companies";

interface Props {
  selected: string | null;
  onSelect: (companyName: string) => void;
}

export function CompanySelector({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {companies.map((c) => {
        const active = selected === c.name;
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => onSelect(c.name)}
            aria-pressed={active}
            title={c.descriptor}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              active
                ? "border-primary bg-primary text-primary-foreground shadow-soft-sm"
                : "border-border bg-card text-foreground shadow-soft-sm hover:border-primary/40 hover:shadow-soft hover:text-primary"
            )}
          >
            {c.name}
          </button>
        );
      })}
    </div>
  );
}
