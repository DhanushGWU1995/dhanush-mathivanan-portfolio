import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { experience } = usePortfolioData();

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader title="Work Experience" centered />
        
        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {experience.map((job, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <FadeIn key={index} direction={isEven ? "right" : "left"} className="relative flex flex-col md:flex-row items-center w-full">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full glass border-2 border-primary bg-background flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                    <Briefcase size={16} className="text-primary" />
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}>
                    <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/50 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="text-sm font-display text-primary font-bold mb-2 tracking-widest uppercase">
                        {job.duration}
                      </div>
                      <h3 className="text-2xl font-bold font-display text-foreground mb-1">
                        {job.role}
                      </h3>
                      <div className="text-lg text-muted-foreground mb-4">
                        {job.company} {job.client && <span className="opacity-60 text-sm block mt-1">Client: {job.client}</span>}
                      </div>
                      
                      <ul className="space-y-3 text-muted-foreground text-sm text-left">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1 flex-shrink-0">▹</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
