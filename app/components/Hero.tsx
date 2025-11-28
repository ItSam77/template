export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <p className="animate-fade-in animate-delay-1 text-accent font-mono text-sm tracking-widest uppercase mb-6">
          Creative Developer
        </p>
        <h1 className="animate-fade-in animate-delay-2 text-5xl md:text-7xl font-bold leading-tight mb-8">
          Hello, I&apos;m <span className="text-accent">John Doe</span>
        </h1>
        <p className="animate-fade-in animate-delay-3 text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="animate-fade-in animate-delay-4 flex gap-4 justify-center">
          <a
            href="#work"
            className="px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent-light transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

