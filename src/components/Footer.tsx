export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          Designed & Built by Dhanush Mathivanan © {new Date().getFullYear()}
        </p>
        <p className="flex items-center gap-1">
          Crafted with <span className="text-primary mx-1">♥</span> using React & Tailwind
        </p>
      </div>
    </footer>
  );
}
