import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import AIAssistant from "@/components/AIAssistant";
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
      <section id="ai-assistant">
        <AIAssistant />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Index;
