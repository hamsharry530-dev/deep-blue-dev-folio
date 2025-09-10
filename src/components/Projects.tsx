import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectML from "@/assets/project-ml.jpg";
import projectNLP from "@/assets/project-nlp.jpg";
import projectCV from "@/assets/project-cv.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  liveUrl?: string;
  category: 'AI/ML' | 'Web Development' | 'Data Science' | 'Computer Vision';
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'titanic-survival',
    title: "Titanic Survival Prediction",
    description: "Machine learning model for predicting passenger survival on the Titanic using various passenger features and data preprocessing techniques.",
    image: projectML,
    technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    github: "https://github.com/Harisk-han/Titani_survivel",
    category: 'AI/ML',
    featured: true
  },
  {
    id: 'ml-service',
    title: "ML as a Service Platform",
    description: "RESTful API service for deploying machine learning models with real-time prediction capabilities and model management.",
    image: projectNLP,
    technologies: ["Python", "FastAPI", "Docker", "MLOps"],
    github: "https://github.com/Harisk-han/-Mini-Project-ML-as-a-Service",
    category: 'AI/ML',
    featured: true
  },
  {
    id: 'cv-pipeline',
    title: "Computer Vision Pipeline",
    description: "End-to-end object detection and image processing system with real-time analysis capabilities for various applications.",
    image: projectCV,
    technologies: ["OpenCV", "TensorFlow", "Python", "YOLO"],
    github: "https://github.com/Harisk-han",
    category: 'Computer Vision',
    featured: true
  }
];

const Projects = () => {
  const handleGitHub = (url?: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  const handleDemo = (url?: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Web Development':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Data Science':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'Computer Vision':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
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
              key={project.id} 
              className="group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 hover:-translate-y-3 bg-card border-border/50 hover:border-primary/30 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
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
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 shadow-sm hover:shadow-md"
                      onClick={() => handleGitHub(project.github)}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary-dark transition-all duration-500 shadow-sm hover:shadow-md"
                      onClick={() => handleDemo(project.demo)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="flex-1 transition-all duration-500 shadow-sm hover:shadow-md"
                      onClick={() => handleDemo(project.liveUrl)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Add more projects section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Want to see more projects?</p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/Harisk-han', '_blank')}
            className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
