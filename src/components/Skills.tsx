import { skills } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with" className="bg-surface-2/50">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.name} delay={i * 50} className="card p-6">
            <h3 className="font-semibold">{group.name}</h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {group.skills.map((s) => (
                <span key={s} className="chip !text-[13px] !text-ink">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
