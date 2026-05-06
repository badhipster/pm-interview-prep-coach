import { Link, useLocation } from "react-router-dom";
import { Github, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const SOURCE_URL = "https://github.com/badhipster/pm-interview-prep-coach";

const NAV = [
  { to: "/practice", label: "Practice" },
  { to: "/method", label: "How it works" },
];

export function SiteHeader({ rightSlot }: { rightSlot?: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-soft-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            PM Interview Prep Coach
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => {
            const active = pathname === item.to || (item.to === "/practice" && pathname.startsWith("/practice"));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-1 hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:flex"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Source
          </a>
          {rightSlot}
        </nav>
      </div>
    </header>
  );
}
