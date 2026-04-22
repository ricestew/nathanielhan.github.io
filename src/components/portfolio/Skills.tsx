import { skillGroups } from "@/data/portfolio";

export const Skills = () => {
  return (
    <section id="skills" className="py-28 md:py-36 relative border-t border-border/40">
      <div className="container">
        <div className="reveal max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-medium">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((g) => (
            <div
              key={g.category}
              className="reveal group rounded-2xl border border-border/60 bg-card/40 p-7 hover:border-primary/40 hover:bg-card/70 transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-medium">{g.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm bg-secondary/60 border border-border/60 text-foreground/90 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
