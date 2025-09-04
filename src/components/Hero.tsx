import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Alex Chen
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            AI Engineer & Machine Learning Specialist
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Building intelligent systems with Machine Learning and AI
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <Button 
            variant="ghost" 
            size="lg"
            onClick={scrollToProjects}
            className="text-white hover:bg-white/10 animate-bounce"
            style={{ animationDelay: '0.8s' }}
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;