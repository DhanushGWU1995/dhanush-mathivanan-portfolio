import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { GraduationCap, MapPin } from "lucide-react";

export function Education() {
  const { education } = usePortfolioData();

  return (
    <section id="education" className="py-24 relative bg-black/20 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader title="Education" centered />
        
        <div className="space-y-6 mt-12">
          {education.map((edu, idx) => (
            <FadeIn key={idx} delay={0.1}>
              <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-5">
                  <GraduationCap size={200} />
                </div>
                
                <div className="p-4 rounded-xl bg-primary/10 text-primary shrink-0 relative z-10 border border-primary/20">
                  <GraduationCap size={32} />
                </div>
                
                <div className="relative z-10 w-full">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold font-display text-foreground">{edu.degree}</h3>
                    <span className="px-3 py-1 rounded-full glass text-sm text-primary border-primary/30 shrink-0 self-start">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <div className="text-xl font-medium text-secondary mb-2">{edu.institution}</div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground font-medium mr-2">Relevant Coursework:</strong>
                      {edu.coursework}
                    </p>
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
