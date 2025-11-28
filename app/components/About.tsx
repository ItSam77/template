export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Crafting Digital <br />Experiences
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-card-bg rounded-3xl border border-border overflow-hidden glow">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-background px-6 py-3 rounded-full font-mono text-sm">
              5+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

