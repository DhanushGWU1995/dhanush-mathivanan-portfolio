import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { Terminal } from "lucide-react";

export function About() {
  const { personalInfo } = usePortfolioData();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="About Me" subtitle="A brief introduction to who I am and what I do." />
        
        <FadeIn>
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 p-4 glass rounded-2xl text-primary">
                <Terminal size={48} strokeWidth={1.5} />
              </div>
              
              <div>
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">Professional Summary</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {personalInfo.summary}
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary font-display mb-1">9+</div>
                    <div className="text-sm text-muted-foreground">Years Exp.</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary font-display mb-1">AWS</div>
                    <div className="text-sm text-muted-foreground">2x Certified</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent font-display mb-1">MS</div>
                    <div className="text-sm text-muted-foreground">Data Science</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white font-display mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
