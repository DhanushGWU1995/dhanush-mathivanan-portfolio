import { FadeIn } from "./FadeIn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <FadeIn direction="up" className={`mb-12 md:mb-20 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mt-4">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
