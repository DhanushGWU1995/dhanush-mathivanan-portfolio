import { FadeIn } from "./FadeIn";
import { usePortfolioData } from "@/hooks/use-portfolio-data";
import { MapPin, Briefcase, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { personalInfo } = usePortfolioData();

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image / Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract futuristic background"
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
        {/* Glow orb */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 text-primary text-sm font-medium mb-8 shadow-[0_0_20px_-5px_rgba(0,240,255,0.4)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6">
              Hi, I'm <br />
              <span className="text-gradient block mt-2">{personalInfo.name}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-xl">
              Aspiring Data Science &amp; AI/ML Engineer — Cloud Certified Professional with 9.5+ years of Full-Stack experience building scalable architectures and intelligent systems.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-secondary" />
              <span>9.5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-accent" />
              <span>{personalInfo.email}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[0_0_30px_-5px_rgba(0,240,255,0.5)] hover:shadow-[0_0_40px_-5px_rgba(0,240,255,0.7)] hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-bold glass hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Dhanush_Mathivanan_Resume.pdf`}
              download="Dhanush_Mathivanan_Resume.pdf"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              Resume
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} direction="left" className="hidden lg:flex justify-center relative">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full" />
            <img 
              src={`${import.meta.env.BASE_URL}images/avatar.png`} 
              alt="Avatar" 
              className="w-80 h-80 object-cover rounded-full border-2 border-primary/50 p-2 glass relative z-10"
            />
            {/* Orbiting element */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-white/10 rounded-full border-dashed"
            >
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-secondary rounded-full shadow-[0_0_15px_rgba(0,100,255,1)]" />
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.a 
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors z-20"
      >
        <span className="text-xs uppercase tracking-widest font-display">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.a>
    </section>
  );
}
