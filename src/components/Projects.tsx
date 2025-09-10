import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft, FolderOpen } from "lucide-react";
import projectML from "@/assets/project-ml.jpg";
import projectNLP from "@/assets/project-nlp.jpg";
import projectCV from "@/assets/project-cv.jpg";

// ===== ORGANIZE YOUR PROJECTS BY CATEGORY =====
const projectCategories = {
  "Gen AI": {
    description: "Generative AI and Large Language Models",
    image: projectML,
    projects: [
      {
        name: "LLM Fine-tuning Pipeline",
        description: "Advanced deep learning model optimization using PyTorch and custom algorithms. Achieved 40% improvement in training efficiency.",
        github: "https://github.com/Harisk-han/Titani_survivel",
        demo: "#",
        technologies: ["Python", "RAG", "MODEL", "FINETUNE"]
      }
      // Add more Gen AI projects here:
      // ,{
      //   name: "Another Gen AI Project",
      //   description: "Project description",
      //   github: "https://github.com/yourusername/repo",
      //   demo: "https://demo-link.com",
      //   technologies: ["Tech1", "Tech2"]
      // }
    ]
  },
  "Natural Language Processing": {
    description: "NLP, Text Analysis, and Language Understanding",
    image: projectNLP,
    projects: [
      {
        name: "Sentiment Analysis API",
        description: "Real-time sentiment analysis API processing 10K+ messages daily. Built with transformers and deployed on AWS.",
        github: "https://github.com/Harisk-han/-Mini-Project-ML-as-a-Service",
        demo: "#",
        technologies: ["Python", "Transformers", "FastAPI", "AWS"]
      }
      // Add more NLP projects here:
      // ,{
      //   name: "Text Summarization Tool",
      //   description: "Project description",
      //   github: "https://github.com/yourusername/repo",
      //   demo: "https://demo-link.com",
      //   technologies: ["Tech1", "Tech2"]
      // }
    ]
  },
  "Computer Vision": {
    description: "Image Processing, Object Detection, and Visual AI",
    image: projectCV,
    projects: [
      {
        name: "Object Detection System",
        description: "End-to-end object detection system with 95% accuracy for manufacturing quality control.",
        github: "#",
        demo: "#",
        technologies: ["OpenCV", "TensorFlow", "React", "MongoDB"]
      }
      // Add more Computer Vision projects here:
      // ,{
      //   name: "Image Classification Model",
      //   description: "Project description",
      //   github: "https://github.com/yourusername/repo",
      //   demo: "https://demo-link.com",
      //   technologies: ["Tech1", "Tech2"]
      // }
    ]
  }
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleGitHub = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDemo = (url: string) => {
    window.open(url, '_blank');
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  // Show projects within selected category
  if (selectedCategory) {
    const category = projectCategories[selectedCategory];
    return (
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={handleBackToCategories}
              className="mb-6 hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>
            <div className="text-center mb-20">
              <div className="animate-fade-in">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                    {selectedCategory}
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                  {selectedCategory} Projects
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {category.projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 hover:-translate-y-3 bg-card border-border/50 hover:border-primary/30 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={project.name}
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
                    {project.name}
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
  }

  // Show category overview
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
          {Object.entries(projectCategories).map(([categoryName, category], index) => (
            <Card 
              key={categoryName} 
              className="group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 hover:-translate-y-3 bg-card border-border/50 hover:border-primary/30 animate-slide-up overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleCategoryClick(categoryName)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={categoryName}
                  className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                  <div className="text-white text-center">
                    <p className="font-semibold text-lg">View {category.projects.length} Projects</p>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-500 flex items-center gap-2">
                  {categoryName}
                  <FolderOpen className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{category.projects.length} Project{category.projects.length !== 1 ? 's' : ''}</span>
                  <span className="text-primary font-medium">Click to explore →</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 shadow-sm hover:shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryClick(categoryName);
                  }}
                >
                  <FolderOpen className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
