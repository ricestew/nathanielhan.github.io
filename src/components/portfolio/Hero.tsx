import { Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import headshot from "@/assets/nathaniel-headshot.jpg";

export const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-glow pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: name + actions */}
          <div className="flex flex-col items-start text-left">
            <div className="reveal flex items-center gap-6 mb-10">
              <img
                src={headshot}
                alt={`${profile.name} headshot`}
                className="h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52 rounded-full object-cover ring-2 ring-primary/40 shadow-soft shrink-0"
                style={{ objectPosition: "50% 25%" }}
              />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] font-sans">
                {profile.name.split(" ")[0]}
                <br />
                <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
              </h1>
            </div>
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

          {/* Right: About */}
          <div className="space-y-5 text-base lg:text-[15px] text-muted-foreground leading-relaxed">
            <h2 className="reveal text-2xl lg:text-3xl font-medium text-foreground mb-2">About</h2>
            <p className="reveal">
              I am currently a junior majoring in Information Systems Management with a
              minor in Business Analytics at Auburn University. I have always been
              interested in this field and believe Auburn is the best place to sharpen
              and hone in on my skills. I am very excited to what the future holds and
              what opportunities await for me.
            </p>
            <p className="reveal">
              A solid foundation has been laid out for me as I have interned with an
              information systems company, Pro V&amp;V Inc., right in my hometown of
              Huntsville, AL, for two summers. This experience has given me valuable
              hands-on experience, skills, and connections that will continue to help
              me grow professionally as I pursue a career.
            </p>
            <p className="reveal">
              Outside of my academics, I play cello professionally as a freelancer as
              well as play for the AU Symphony Orchestra as the principal cellist.
              Both of these experiences have given me additional skills and connections
              that continue to enrich my professional career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
