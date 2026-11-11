import { useState } from "react";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { highlights } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Highlights() {
  const [index, setIndex] = useState(0);
  const h = highlights[index];

  return (
    <section id="highlights" className="pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="mb-8 text-center">
          <p className="eyebrow mb-3">Highlights</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A quick tour of my recent work</h2>
        </Reveal>

        <Reveal className="card overflow-hidden">
          <div role="tablist" aria-label="Featured projects" className="flex gap-1 overflow-x-auto border-b border-line p-2">
            {highlights.map((item, i) => (
              <button
                key={item.label}
                role="tab"
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  i === index ? "bg-accent text-accent-ink" : "text-muted hover:bg-surface-2 hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div key={h.label} role="tabpanel" className="grid gap-8 p-6 md:grid-cols-[1.15fr_1fr] md:p-10">
            <div>
              <p className="eyebrow">{h.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold leading-snug tracking-tight md:text-[1.7rem]">{h.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{h.description}</p>
              <ul className="mt-5 space-y-2.5">
                {h.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm">
                    <Check size={17} className="mt-0.5 shrink-0 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={h.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FaGithub size={16} /> View code
                </a>
                {h.live && (
                  <a href={h.live} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <ExternalLink size={16} /> Live demo
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-surface-2 p-5 md:p-6">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">How it works</p>
              <ol className="mt-4 space-y-2">
                {h.pipeline.map((step, i) => (
                  <li key={step}>
                    <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-xs font-semibold text-accent">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium">{step}</span>
                    </div>
                    {i < h.pipeline.length - 1 && (
                      <ArrowRight size={14} className="mx-auto my-1 rotate-90 text-muted" aria-hidden />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
