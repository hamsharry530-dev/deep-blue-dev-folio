import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import CVAssistant from "@/components/CVAssistant";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="cv-assistant">
        <CVAssistant />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Index;
