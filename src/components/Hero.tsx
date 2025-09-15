import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Professional overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16">
            
            {/* Profile Image */}
            <div className="flex-shrink-0 animate-fade-in">
              <div className="relative">
                <img 
                  src={profileImg}
                  alt="Haris Khan - AI Engineer"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left max-w-3xl">
              <div className="animate-fade-in">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
                    Still in Process
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-none tracking-tight">
                  Haris Khan
                </h1>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 font-light">
                  AI Engineer and <span className="font-semibold text-accent">Generative AI</span> Specialist
                </h2>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-lg md:text-xl lg:text-2xl text-white/85 mb-12 leading-relaxed">
                  Building next-generation intelligent systems with cutting-edge Machine Learning and AI technologies
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <Button 
                  onClick={openGitHub}
                  variant="outline" 
                  size="lg" 
                  className="bg-white/5 border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-500 hover:scale-110 w-full sm:w-auto backdrop-blur-md shadow-lg hover:shadow-xl"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button 
                  onClick={openLinkedIn}
                  variant="outline" 
                  size="lg" 
                  className="bg-white/5 border-white/20 text-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-500 hover:scale-110 w-full sm:w-auto backdrop-blur-md shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white border-0 transition-all duration-500 hover:scale-110 w-full sm:w-auto shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="text-center mt-16 animate-scale-in" style={{ animationDelay: '0.8s' }}>
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
