import { getIndianCompanies, getGlobalCompanies } from "@/lib/companies";
import { dimensionShortLabel, weightLabel, DIMENSION_KEYS } from "@/types/interview";
import type { Company } from "@/types/interview";

interface Props {
  selected: string | null;
  onSelect: (id: string) => void;
}

function WeightDots({ weight }: { weight: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`Importance: ${weight} out of 5`}>
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className={`inline-block h-1.5 w-1.5 rounded-full ${
            i <= weight ? "bg-primary" : "bg-border"
          }`}
        />
      ))}
    </span>
  );
}

function CompanyCard({ company, selected, onSelect }: { company: Company; selected: boolean; onSelect: () => void }) {
  const topWeights = DIMENSION_KEYS
    .map(k => ({ key: k, weight: company.dimensionWeights[k] }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group w-full rounded-xl border p-4 text-left transition-all ${
        selected
          ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-soft"
          : "border-border bg-card hover:border-primary/30 hover:shadow-soft-sm card-interactive"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">{company.name}</p>
          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{company.descriptor}</p>
        </div>
        {selected && (
          <span className="shrink-0 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
            Selected
          </span>
        )}
      </div>

      {/* What they test for — dimension weights */}
      <div className="mt-3 space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          What they test for
        </p>
        {topWeights.map(({ key, weight }) => (
          <div key={key} className="flex items-center justify-between gap-2">
            <span className="text-xs text-foreground/80">{dimensionShortLabel(key)}</span>
            <div className="flex items-center gap-1.5">
              <WeightDots weight={weight} />
              <span className={`text-[10px] font-medium ${
                weight >= 5 ? "text-score-low" : weight >= 4 ? "text-primary" : "text-muted-foreground"
              }`}>
                {weightLabel(weight)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* One-liner differentiator */}
      {company.whatMakesThemDifferent && (
        <p className="mt-2.5 text-[11px] italic leading-snug text-muted-foreground line-clamp-2">
          "{company.whatMakesThemDifferent}"
        </p>
      )}
    </button>
  );
}

export function CompanySelectorGrouped({ selected, onSelect }: Props) {
  const india = getIndianCompanies();
  const global = getGlobalCompanies();

  return (
    <div className="space-y-6">
      {/* India Tech */}
      <div>
        <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
          India Tech
          <span className="text-[10px] font-normal normal-case text-muted-foreground/60">({india.length})</span>
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {india.map(c => (
            <CompanyCard
              key={c.id}
              company={c}
              selected={selected === c.id}
              onSelect={() => onSelect(c.id)}
            />
          ))}
        </div>
      </div>

      {/* Global Tech */}
      <div>
        <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
          Global Tech
          <span className="text-[10px] font-normal normal-case text-muted-foreground/60">({global.length})</span>
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {global.map(c => (
            <CompanyCard
              key={c.id}
              company={c}
              selected={selected === c.id}
              onSelect={() => onSelect(c.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
