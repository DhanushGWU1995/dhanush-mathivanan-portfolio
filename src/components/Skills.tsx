import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { usePortfolioData, SkillCategory } from "@/hooks/use-portfolio-data";
import { Code, Database, Cloud, Wrench, LayoutTemplate, BrainCircuit, Activity } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Programming": Code,
  "Machine Learning": BrainCircuit,
  "Web Frameworks": LayoutTemplate,
  "Databases": Database,
  "Cloud & DevOps": Cloud,
  "Web Technologies": Code,
  "Testing & Monitoring": Activity,
  "Tools & Version Control": Wrench
};

export function Skills() {
  const { skills } = usePortfolioData();

  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Technical Arsenal" subtitle="Technologies and tools I work with to build scalable solutions." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category: SkillCategory, i: number) => {
            const Icon = categoryIcons[category.name] || Code;
            
            return (
              <FadeIn key={category.name} delay={i * 0.1}>
                <div className="glass-card h-full rounded-2xl p-6 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon size={80} />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-display font-semibold">{category.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map(skill => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full glass border-white/5 text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
