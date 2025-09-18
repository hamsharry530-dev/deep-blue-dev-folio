import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

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
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                  Hi, I am <span className="font-medium">AI Engineer.</span>
                </h1>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  I know Machine Learning, Deep Learning, and Generative AI. Building intelligent systems that solve real-world problems.
                </p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <Button 
                  onClick={scrollToProjects}
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-2 border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-gray-900 transition-all duration-300 px-8 py-3 text-sm font-medium uppercase tracking-wider"
                >
                  Show Projects
                </Button>
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white border-0 transition-all duration-300 px-8 py-3 text-sm font-medium uppercase tracking-wider"
                >
                  Know More
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-6 pt-4 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <Button 
                  onClick={openGitHub}
                  variant="ghost" 
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  onClick={openLinkedIn}
                  variant="ghost" 
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  onClick={scrollToContact}
                  variant="ghost" 
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <img 
                  src={heroPortrait}
                  alt="Haris Khan - AI Engineer"
                  className="w-80 h-96 lg:w-96 lg:h-[500px] object-cover object-center"
                  style={{ 
                    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={scrollToProjects}
              className="text-gray-400 hover:text-white p-2"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
