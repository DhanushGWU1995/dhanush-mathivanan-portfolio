import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-10 md:mb-14 text-center">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
