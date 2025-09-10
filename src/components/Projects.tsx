import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectML from "@/assets/project-ml.jpg";
import projectNLP from "@/assets/project-nlp.jpg";
import projectCV from "@/assets/project-cv.jpg";

const projects = [
  {
    title: "Gen AI ",
    description: "Advanced deep learning model optimization using PyTorch and custom algorithms. Achieved 40% improvement in training efficiency.",
    image: projectML,
    technologies: ["Python", "RAG", "MODEL", "FINETUNE"],
    github: "https://github.com/Harisk-han/Titani_survivel",
    demo: "#"
  },
  {
    title: "Natural Language Processing",
    description: "Real-time sentiment analysis API processing 10K+ messages daily. Built with transformers and deployed on AWS.",
    image: projectNLP,
    technologies: ["Python", "Transformers", "FastAPI", "AWS"],
    github: "https://github.com/Harisk-han/-Mini-Project-ML-as-a-Service",
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
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                Featured Work
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Projects Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Innovative AI solutions that solve real-world problems and push the boundaries of what's possible
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 hover:-translate-y-3 bg-card border-border/50 hover:border-primary/30 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                  <div className="text-white text-center">
                    <p className="font-semibold text-lg">View Project Details</p>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1.5 bg-primary/5 text-primary text-sm font-medium rounded-full border border-primary/15 hover:bg-primary/10 hover:border-primary/25 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 shadow-sm hover:shadow-md"
                    onClick={() => handleGitHub(project.github)}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary-dark transition-all duration-500 shadow-sm hover:shadow-md"
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
