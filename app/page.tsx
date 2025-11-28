export default function Home() {
  return (
    <div className="min-h-screen hero-gradient">
      {/* Navigation */}
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

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Work Section */}
      <section id="work" className="py-32 px-6 bg-card-bg/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="project-card bg-card-bg rounded-2xl border border-border overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-accent/30 to-accent/5 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">🎨</span>
              </div>
              <div className="p-6">
                <p className="text-accent font-mono text-xs uppercase tracking-wider mb-2">Web Design</p>
                <h3 className="text-xl font-bold mb-3">Project Alpha</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card bg-card-bg rounded-2xl border border-border overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-blue-500/30 to-blue-500/5 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">📱</span>
              </div>
              <div className="p-6">
                <p className="text-blue-400 font-mono text-xs uppercase tracking-wider mb-2">Mobile App</p>
                <h3 className="text-xl font-bold mb-3">Project Beta</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card bg-card-bg rounded-2xl border border-border overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-emerald-500/30 to-emerald-500/5 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">🚀</span>
              </div>
              <div className="p-6">
                <p className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">Full Stack</p>
                <h3 className="text-xl font-bold mb-3">Project Gamma</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card bg-card-bg rounded-2xl border border-border overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-purple-500/30 to-purple-500/5 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">💡</span>
              </div>
              <div className="p-6">
                <p className="text-purple-400 font-mono text-xs uppercase tracking-wider mb-2">Branding</p>
                <h3 className="text-xl font-bold mb-3">Project Delta</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa.
                </p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-card bg-card-bg rounded-2xl border border-border overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-rose-500/30 to-rose-500/5 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">✨</span>
              </div>
              <div className="p-6">
                <p className="text-rose-400 font-mono text-xs uppercase tracking-wider mb-2">UI/UX</p>
                <h3 className="text-xl font-bold mb-3">Project Epsilon</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                </p>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-card bg-card-bg rounded-2xl border border-border overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-amber-500/30 to-amber-500/5 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">⚡</span>
              </div>
              <div className="p-6">
                <p className="text-amber-400 font-mono text-xs uppercase tracking-wider mb-2">E-commerce</p>
                <h3 className="text-xl font-bold mb-3">Project Zeta</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Tools</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "TypeScript", icon: "📘" },
              { name: "Node.js", icon: "💚" },
              { name: "Figma", icon: "🎨" },
              { name: "Tailwind", icon: "🎐" },
              { name: "PostgreSQL", icon: "🐘" },
              { name: "Git", icon: "🔀" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-card-bg border border-border rounded-2xl p-6 text-center hover:border-accent transition-colors group"
              >
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{skill.icon}</span>
                <p className="font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-card-bg/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-background font-bold text-lg rounded-full hover:bg-accent-light transition-all hover:scale-105 glow"
          >
            <span>📧</span>
            hello@example.com
          </a>

          <div className="flex justify-center gap-6 mt-12">
            {[
              { name: "GitHub", icon: "🐙" },
              { name: "LinkedIn", icon: "💼" },
              { name: "Twitter", icon: "🐦" },
              { name: "Dribbble", icon: "🏀" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-14 h-14 bg-card-bg border border-border rounded-full flex items-center justify-center hover:border-accent hover:scale-110 transition-all"
                aria-label={social.name}
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © 2025 John Doe. All rights reserved.
          </p>
          <p className="text-muted text-sm font-mono">
            Built with ❤️ and Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
