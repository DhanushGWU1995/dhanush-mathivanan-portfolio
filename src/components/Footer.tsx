export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Dhanush Mathivanan. All rights reserved.
        </p>
        <p>
          Designed &amp; Built by Dhanush Mathivanan
        </p>
      </div>
    </footer>
  );
}
