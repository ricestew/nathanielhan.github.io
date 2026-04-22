import { Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-glow pointer-events-none" />

      <div className="container relative">
        <div className="max-w-3xl">
          <p className="reveal font-mono text-xs tracking-widest text-primary uppercase mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            Available for opportunities
          </p>
          <h1 className="reveal text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] mb-6">
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}.</span>
          </h1>
          <p className="reveal text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {profile.bio}
          </p>
          <div className="reveal flex flex-wrap items-center gap-4 mb-10">
            <Button asChild size="lg" className="rounded-full shadow-soft">
              <a href={profile.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-border/80">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in touch
              </a>
            </Button>
          </div>
          <div className="reveal flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-mono">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
