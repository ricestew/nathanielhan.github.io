import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-40 relative border-t border-border/40 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-glow pointer-events-none" />
      <div className="container relative">
        <div className="max-w-3xl">
          <p className="reveal font-mono text-xs tracking-widest text-primary uppercase mb-4">
            04 — Contact
          </p>
          <h2 className="reveal text-4xl md:text-6xl font-medium leading-[1.05] mb-8">
            Let's build something <span className="text-gradient">reliable.</span>
          </h2>
          <p className="reveal text-lg text-muted-foreground max-w-xl mb-10">
            Open to internships, collaborations, and conversations about information
            systems, software quality, and audit-grade engineering.
          </p>

          <div className="reveal flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full shadow-soft">
              <a href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {profile.email}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-border/80">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <footer className="reveal mt-24 pt-8 border-t border-border/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Designed & built in Huntsville, AL</span>
        </footer>
      </div>
    </section>
  );
};
