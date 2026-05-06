import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-8">
        <p>
          Built as a portfolio project to demonstrate PM thinking. Scoping decisions are documented in{" "}
          <Link to="/method" className="font-medium text-foreground underline-offset-4 hover:underline">
            How it works
          </Link>
          .
        </p>
        <p className="text-xs">
          No account. No paywall. Free to use.
        </p>
      </div>
    </footer>
  );
}
