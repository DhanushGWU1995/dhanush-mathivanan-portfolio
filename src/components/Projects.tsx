import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { Github, ExternalLink, Activity } from "lucide-react";

export function Projects() {
  const { projects } = usePortfolioData();

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Featured Projects" subtitle="Real-world data science and machine learning systems." />
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="h-full">
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                    <Activity size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="relative z-10 flex-grow">
                  <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="text-sm text-primary font-mono mb-4">{project.year}</div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
