import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      {/* Fun Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-orange-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-32 right-1/3 w-28 h-28 bg-red-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-base font-medium shadow-lg">
                    🚀 Building Cool Stuff
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
                  Hey, I'm <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Haris!</span>
                </h1>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-normal">
                  I make AI do awesome things ✨<br />
                  <span className="text-lg md:text-xl text-white/70">Currently obsessed with machine learning & cool tech</span>
                </h2>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
                  I love creating smart systems that actually work and solve real problems. Let's build something amazing together! 🎯
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <Button 
                  onClick={openGitHub}
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white border-0 transition-all duration-300 hover:scale-110 w-full sm:w-auto shadow-lg hover:shadow-xl rounded-full"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Check out my code!
                </Button>
                <Button 
                  onClick={openLinkedIn}
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0 transition-all duration-300 hover:scale-110 w-full sm:w-auto shadow-lg hover:shadow-xl rounded-full"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Let's connect!
                </Button>
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white border-0 transition-all duration-300 hover:scale-110 w-full sm:w-auto shadow-lg hover:shadow-xl rounded-full"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Say hi! 👋
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
