import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
