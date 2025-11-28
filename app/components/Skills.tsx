const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "💚" },
  { name: "Figma", icon: "🎨" },
  { name: "Tailwind", icon: "🎐" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "🔀" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Tools</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card-bg border border-border rounded-2xl p-6 text-center hover:border-accent transition-colors group"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </span>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

