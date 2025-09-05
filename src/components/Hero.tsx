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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="max-w-5xl mx-auto glass-effect rounded-3xl p-12 shadow-2xl border border-primary/20">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-sm font-semibold">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-primary mb-8 leading-none tracking-tight hero-text-glow">
              Haris Khan
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl text-foreground mb-8 font-light">
              AI Engineer & <span className="font-semibold text-accent">Machine Learning</span> Specialist
            </h2>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Building next-generation intelligent systems with cutting-edge Machine Learning and AI technologies
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={openGitHub}
              variant="outline" 
              size="lg" 
              className="bg-primary/5 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 w-full sm:w-auto backdrop-blur-md shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              onClick={openLinkedIn}
              variant="outline" 
              size="lg" 
              className="bg-primary/5 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 w-full sm:w-auto backdrop-blur-md shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 transition-all duration-500 hover:scale-110 w-full sm:w-auto shadow-lg hover:shadow-xl"
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
              className="text-primary hover:bg-primary/10 animate-pulse-glow rounded-full p-4 transition-all duration-300"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
            <p className="text-muted-foreground text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;