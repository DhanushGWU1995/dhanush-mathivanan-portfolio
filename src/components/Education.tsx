import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education, certifications & awards">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {education.map((e) => (
            <Reveal key={e.school} className="card p-6">
              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap size={21} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug">{e.degree}</h3>
                  <p className="mt-0.5 text-sm font-medium text-accent">{e.school}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {e.location} · {e.duration}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    <span className="font-medium text-ink">Coursework: </span>
                    {e.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="card p-6">
          <ul className="divide-y divide-line">
            {certifications.map((c) => {
              const Icon = c.kind === "cert" ? BadgeCheck : Award;
              return (
                <li key={c.name} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <Icon size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-snug">{c.name}</p>
                    <p className="mt-0.5 text-sm text-muted">{c.issuer}</p>
                  </div>
                  <span className="chip shrink-0 font-mono">{c.year}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
