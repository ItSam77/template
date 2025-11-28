const projects = [
  {
    icon: "🎨",
    category: "Web Design",
    categoryColor: "text-accent",
    gradientFrom: "from-accent/30",
    gradientTo: "to-accent/5",
    title: "Project Alpha",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    icon: "📱",
    category: "Mobile App",
    categoryColor: "text-blue-400",
    gradientFrom: "from-blue-500/30",
    gradientTo: "to-blue-500/5",
    title: "Project Beta",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    icon: "🚀",
    category: "Full Stack",
    categoryColor: "text-emerald-400",
    gradientFrom: "from-emerald-500/30",
    gradientTo: "to-emerald-500/5",
    title: "Project Gamma",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
  {
    icon: "💡",
    category: "Branding",
    categoryColor: "text-purple-400",
    gradientFrom: "from-purple-500/30",
    gradientTo: "to-purple-500/5",
    title: "Project Delta",
    description: "Excepteur sint occaecat cupidatat non proident sunt in culpa.",
  },
  {
    icon: "✨",
    category: "UI/UX",
    categoryColor: "text-rose-400",
    gradientFrom: "from-rose-500/30",
    gradientTo: "to-rose-500/5",
    title: "Project Epsilon",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    icon: "⚡",
    category: "E-commerce",
    categoryColor: "text-amber-400",
    gradientFrom: "from-amber-500/30",
    gradientTo: "to-amber-500/5",
    title: "Project Zeta",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-card-bg/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card bg-card-bg rounded-2xl border border-border overflow-hidden group"
            >
              <div
                className={`aspect-video bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center`}
              >
                <span className="text-6xl group-hover:scale-110 transition-transform">
                  {project.icon}
                </span>
              </div>
              <div className="p-6">
                <p className={`${project.categoryColor} font-mono text-xs uppercase tracking-wider mb-2`}>
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

