import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-2xl flex-wrap items-center gap-x-4 gap-y-1 px-6 py-6 text-sm text-muted">
        <span>Made for Kolibri</span>
        <Link
          href="/privacy"
          className="text-accent underline-offset-2 hover:text-foreground hover:underline"
        >
          Privacy
        </Link>
        <Link
          href="/copyright"
          className="text-accent underline-offset-2 hover:text-foreground hover:underline"
        >
          Copyright
        </Link>
      </div>
    </footer>
  );
}