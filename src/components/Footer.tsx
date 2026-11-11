import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-sm text-muted md:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
