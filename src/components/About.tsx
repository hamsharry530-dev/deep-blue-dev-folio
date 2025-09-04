import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Zap } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep Learning, Neural Networks, PyTorch, TensorFlow"
  },
  {
    icon: Code,
    title: "Programming",
    description: "Python, JavaScript, C++, SQL, Git"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "ETL Pipelines, Big Data, Cloud Computing, MLOps"
  },
  {
    icon: Zap,
    title: "AI Specialization",
    description: "NLP, Computer Vision, Generative AI, LLMs"
  }
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <p className="text-xl text-muted-foreground">
                Passionate about creating intelligent systems that make a difference
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up space-y-6">
              <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm an AI Engineer with extensive experience building intelligent systems 
                  that solve complex real-world problems. My expertise spans machine learning, 
                  deep learning, and natural language processing.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in taking AI research from concept to production, with a focus 
                  on scalable architectures and efficient model optimization. My work has 
                  helped companies improve their processes and make data-driven decisions.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, I enjoy contributing to open-source projects, 
                  writing technical articles, and exploring the latest developments in AI research.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              {skills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 bg-card border-border/50 hover:border-primary/30"
                >
                  <CardContent className="p-6 text-center">
                    <skill.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;