import { useState } from "react";
import { BarChart3, Brain, Cloud, ExternalLink, Sparkles, type LucideIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectCategories, projects, type ProjectCategory } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Filter = "All" | ProjectCategory;

const categoryStyle: Record<ProjectCategory, { icon: LucideIcon; gradient: string }> = {
  "AI & LLMs": { icon: Sparkles, gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent" },
  "Machine Learning": { icon: Brain, gradient: "from-sky-500/20 via-blue-500/10 to-transparent" },
  "Data & Analytics": { icon: BarChart3, gradient: "from-emerald-500/20 via-teal-500/10 to-transparent" },
  "Cloud & Software": { icon: Cloud, gradient: "from-amber-500/20 via-orange-500/10 to-transparent" },
};

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...projectCategories];
  const shown = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="Graduate and personal projects across AI, machine learning, data, and cloud. Code for each is on GitHub."
    >
      <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.categories.includes(f)).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line bg-surface text-muted hover:border-accent hover:text-ink"
              }`}
            >
              {f} <span className="ml-1 opacity-60">{count}</span>
            </button>
          );
        })}
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => {
          const style = categoryStyle[p.categories[0]];
          const Icon = style.icon;
          return (
            <article key={p.title} className="card group flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              <div className={`relative flex h-28 items-end bg-gradient-to-br ${style.gradient} p-5`}>
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-ink shadow-sm">
                  <Icon size={21} />
                </div>
                <span className="chip absolute right-4 top-4 font-mono">{p.year}</span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-0.5 text-sm font-medium text-accent">{p.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2 border-t border-line pt-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-ink hover:bg-surface-2"
                    >
                      <FaGithub size={15} /> Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-accent hover:bg-accent-soft"
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <Reveal className="mt-10 text-center">
        <a href="https://github.com/DhanushGWU1995?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <FaGithub size={16} /> More on GitHub
        </a>
      </Reveal>
    </Section>
  );
}
