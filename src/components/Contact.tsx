import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { Mail, Phone, Github, Linkedin, ArrowRight, Download } from "lucide-react";

export function Contact() {
  const { personalInfo } = usePortfolioData();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-bold text-white/5 whitespace-nowrap pointer-events-none select-none z-0">
        LET'S TALK
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <FadeIn>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm tracking-widest font-display uppercase bg-primary/5">
            What's Next?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Although I'm currently focused on my master's degree, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 flex-wrap">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center justify-between w-full sm:w-auto min-w-[280px] px-6 py-4 glass-card rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-primary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email Me</div>
                <div className="font-medium text-foreground">{personalInfo.email}</div>
              </div>
            </div>
            <ArrowRight size={18} className="text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>

          <a 
            href={`tel:${personalInfo.phone.replace(/-/g, '')}`}
            className="group flex items-center justify-between w-full sm:w-auto min-w-[280px] px-6 py-4 glass-card rounded-xl hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <Phone className="text-secondary group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Call Me</div>
                <div className="font-medium text-foreground">{personalInfo.phone}</div>
              </div>
            </div>
            <ArrowRight size={18} className="text-secondary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>

          <a 
            href={`${import.meta.env.BASE_URL}Dhanush_Mathivanan_Resume.pdf`}
            download="Dhanush_Mathivanan_Resume.pdf"
            className="group flex items-center justify-between w-full sm:w-auto min-w-[280px] px-6 py-4 glass-card rounded-xl hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <Download className="text-accent group-hover:scale-110 group-hover:animate-bounce transition-transform" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Download</div>
                <div className="font-medium text-foreground">My Resume</div>
              </div>
            </div>
            <ArrowRight size={18} className="text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-2">
              <Github size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 transform hover:-translate-y-2">
              <Linkedin size={24} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
