import { useEffect, useState } from "react";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const themeButton = (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-fit items-center gap-1 rounded-full border border-line bg-surface/80 p-1.5 shadow-lg shadow-black/5 backdrop-blur-xl"
      >
        <a
          href="#top"
          className="rounded-full px-3 py-1.5 text-sm font-bold tracking-tight text-ink"
          aria-label="Back to top"
        >
          DM
        </a>

        <div className="hidden items-center md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active === link.id ? "bg-accent-soft text-accent" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {themeButton}

        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary !px-4 !py-1.5 hidden sm:inline-flex">
          <FileText size={15} />
          Resume
        </a>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open && (
        <div className="card mx-auto mt-2 flex max-w-sm flex-col p-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-ink hover:bg-surface-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-accent hover:bg-surface-2"
          >
            Resume (PDF)
          </a>
        </div>
      )}
    </header>
  );
}
