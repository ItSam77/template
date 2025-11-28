const socials = [
  { name: "GitHub", icon: "🐙" },
  { name: "LinkedIn", icon: "💼" },
  { name: "Twitter", icon: "🐦" },
  { name: "Dribbble", icon: "🏀" },
];

export default function Contact() {
  return (
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
          {socials.map((social) => (
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
  );
}

