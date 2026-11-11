import { Brain, Cloud, Code2, Database, Sparkles, type LucideIcon } from "lucide-react";
import { focusAreas, profile, quickFacts } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const icons: Record<string, LucideIcon> = {
  database: Database,
  sparkles: Sparkles,
  brain: Brain,
  cloud: Cloud,
  code: Code2,
};

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer first, now a data scientist too">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="card p-7 md:p-9">
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)} className="mb-4 leading-relaxed text-muted last:mb-0">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={80} className="card p-7 md:p-8">
          <h3 className="text-sm font-semibold">For recruiters</h3>
          <dl className="mt-4 space-y-4">
            {quickFacts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted">{f.label}</dt>
                <dd className="mt-1 text-sm font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {focusAreas.map((area, i) => {
          const Icon = icons[area.icon];
          return (
            <Reveal key={area.title} delay={i * 60} className="card p-5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold">{area.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{area.description}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
