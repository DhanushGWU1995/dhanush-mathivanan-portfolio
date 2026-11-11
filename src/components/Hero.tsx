import { ArrowRight, FileText, GraduationCap, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { clients, profile, stats } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at top, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={144}
            height={144}
            className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-surface shadow-xl md:h-36 md:w-36"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to full-time roles from Spring 2027
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-lg font-medium text-accent md:text-xl">{profile.roles.join(" · ")}</p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{profile.intro}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap size={15} /> M.S. Data Science, GWU
            </span>
          </div>
        </Reveal>

        <Reveal delay={260} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="btn-primary">
            See my projects <ArrowRight size={16} />
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <FileText size={16} /> Resume
          </a>
          <a href={`mailto:${profile.email}`} className="btn-ghost">
            <Mail size={16} /> Email
          </a>
        </Reveal>

        <Reveal delay={300} className="mt-6 flex items-center justify-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-[#0a66c2]"
          >
            <FaLinkedin size={20} />
          </a>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-5 md:px-8">
        <Reveal className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card px-5 py-5 text-left">
              <div className="text-3xl font-bold tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12 text-center">
          <p className="eyebrow !text-muted">Enterprise clients I've built software for</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {clients.map((c) => (
              <span key={c} className="text-lg font-semibold tracking-tight text-muted/80">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
