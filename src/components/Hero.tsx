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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-start">
          {/* Status Badge */}
          <div className="animate-fade-in mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white/80 text-xs font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-4">
              Haris Khan
            </h1>
          </div>
          
          {/* Role Title */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light tracking-tight mb-6">
              AI Engineer <span className="text-white/50 mx-2">·</span> 
              <span className="text-accent font-normal">Generative AI Specialist</span>
            </h2>
          </div>
          
          {/* Description */}
          <div className="animate-fade-in max-w-2xl" style={{ animationDelay: '0.3s' }}>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light mb-10">
              I design and build intelligent systems that solve real business problems. 
              Specializing in LLMs, computer vision, and production-grade ML infrastructure.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-medium px-6 h-11 transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button 
              onClick={openGitHub}
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-medium px-6 h-11 transition-all duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button 
              onClick={openLinkedIn}
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-medium px-6 h-11 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button 
              onClick={scrollToProjects}
              className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300 group"
            >
              <span className="text-sm font-medium tracking-wide">View my work</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
