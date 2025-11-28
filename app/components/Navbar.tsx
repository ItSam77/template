export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-accent font-mono">JD.</a>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#about" className="text-muted hover:text-foreground transition-colors">About</a>
          <a href="#work" className="text-muted hover:text-foreground transition-colors">Work</a>
          <a href="#skills" className="text-muted hover:text-foreground transition-colors">Skills</a>
          <a href="#contact" className="text-muted hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

