import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openGitHub = () => {
    window.open('https://github.com', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://linkedin.com', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Haris Khan
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-medium">
              AI Engineer & Machine Learning Specialist
            </h2>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              Building intelligent systems with Machine Learning and AI
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={openGitHub}
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 w-full sm:w-auto backdrop-blur-sm"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              onClick={openLinkedIn}
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 w-full sm:w-auto backdrop-blur-sm"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 w-full sm:w-auto backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={scrollToProjects}
              className="text-white hover:bg-white/10 animate-pulse-glow rounded-full p-4 transition-all duration-300"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
            <p className="text-white/70 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;