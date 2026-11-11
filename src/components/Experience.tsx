import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="9+ years of building production systems"
      subtitle="Backend, data, and cloud work for enterprise clients, followed by graduate study and campus IT at GWU."
      className="bg-surface-2/50"
    >
      <ol className="relative mx-auto max-w-4xl border-l border-line pl-6 md:pl-10">
        {experience.map((job, i) => (
          <li key={job.company + job.duration} className="relative mb-6 last:mb-0">
            <span
              aria-hidden
              className={`absolute -left-[31px] top-7 h-3.5 w-3.5 rounded-full border-2 border-bg md:-left-[47px] ${
                i === 0 ? "bg-emerald-500" : "bg-accent"
              }`}
            />
            <Reveal className="card p-6 md:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-snug">{job.role}</h3>
                  <p className="mt-0.5 font-medium text-accent">{job.company}</p>
                  {(job.client || job.location) && (
                    <p className="mt-0.5 text-sm text-muted">{job.client ? `Client: ${job.client}` : job.location}</p>
                  )}
                </div>
                <span className="chip mt-2 shrink-0 self-start font-mono sm:mt-0">{job.duration}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h.slice(0, 32)} className="relative pl-4 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-accent/60" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
