import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectML from "@/assets/project-ml.jpg";
import projectNLP from "@/assets/project-nlp.jpg";
import projectCV from "@/assets/project-cv.jpg";

const projects = [
  {
    title: "Neural Network Optimizer",
    description: "Advanced deep learning model optimization using PyTorch and custom algorithms. Achieved 40% improvement in training efficiency.",
    image: projectML,
    technologies: ["Python", "PyTorch", "CUDA", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Real-time sentiment analysis API processing 10K+ messages daily. Built with transformers and deployed on AWS.",
    image: projectNLP,
    technologies: ["Python", "Transformers", "FastAPI", "AWS"],
    github: "#",
    demo: "#"
  },
  {
    title: "Computer Vision Pipeline",
    description: "End-to-end object detection system with 95% accuracy for manufacturing quality control.",
    image: projectCV,
    technologies: ["OpenCV", "TensorFlow", "React", "MongoDB"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  const handleGitHub = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDemo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative AI solutions that solve real-world problems
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="font-semibold">View Project</p>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => handleGitHub(project.github)}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary-dark transition-all duration-300"
                    onClick={() => handleDemo(project.demo)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;