import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { Award, CheckCircle2 } from "lucide-react";

export function Certifications() {
  const { certifications } = usePortfolioData();

  return (
    <section id="certifications" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Licenses & Awards" subtitle="Continuous learning and professional recognition." />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div className="glass-card p-6 rounded-xl flex items-start gap-4 h-full group hover:bg-card/80">
                <div className="mt-1 text-primary group-hover:scale-110 transition-transform">
                  {cert.name.includes("Award") ? (
                    <Award size={24} />
                  ) : (
                    <CheckCircle2 size={24} />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground leading-snug mb-1">{cert.name}</h4>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span className="font-mono text-xs glass px-2 py-0.5 rounded text-primary border-primary/20">{cert.year}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
