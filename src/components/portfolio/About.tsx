export const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 relative border-t border-border/40">
      <div className="container">
        <div className="reveal max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-medium">About</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
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
