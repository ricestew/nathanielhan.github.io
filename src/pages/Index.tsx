import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
