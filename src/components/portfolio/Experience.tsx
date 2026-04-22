import { experience } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" className="py-28 md:py-36 relative border-t border-border/40">
      <div className="container">
        <div className="reveal max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-medium">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-[180px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-14">
            {experience.map((e, i) => (
              <article key={i} className="reveal grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 relative pl-8 md:pl-0">
                <div className="absolute left-[-5px] md:left-[176px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                <div className="font-mono text-xs text-muted-foreground md:text-right md:pr-8 pt-1">
                  {e.period}
                </div>
                <div className="md:pl-12">
                  <h3 className="text-xl md:text-2xl font-medium text-foreground">
                    {e.role}
                  </h3>
                  <p className="text-primary text-sm mb-1">{e.org}</p>
                  <p className="text-xs text-muted-foreground font-mono mb-4">{e.location}</p>
                  <ul className="space-y-2.5 text-muted-foreground leading-relaxed">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-primary mt-2 h-px w-3 shrink-0 bg-primary/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
