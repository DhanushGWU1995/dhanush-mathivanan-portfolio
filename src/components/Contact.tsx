import { FileText, Handshake, Mail, PenSquare, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const channels = [
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "Handshake", href: profile.handshake, icon: Handshake },
  { label: "Tech blog", href: profile.blog, icon: PenSquare },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="card relative overflow-hidden px-6 py-12 text-center md:px-14 md:py-16">
          <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-accent/15 blur-[90px]" />
          <p className="eyebrow relative">Contact</p>
          <h2 className="relative mt-3 text-3xl font-bold tracking-tight md:text-4xl">Let's talk</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">
            I'm looking for full-time Data Science, Machine Learning, Data Engineering, and Cloud roles starting Spring 2027,
            and I'm open to relocating anywhere in the US. The fastest way to reach me is email.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="btn-ghost">
              <Phone size={16} /> {profile.phone}
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FileText size={16} /> Resume
            </a>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-2">
            {channels.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
