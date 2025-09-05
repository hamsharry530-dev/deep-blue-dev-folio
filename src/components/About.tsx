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
    <section className="py-24 relative">
      <div className="absolute inset-0 glass-effect opacity-80"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="animate-fade-in">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                  About Me
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Passionate About AI
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Creating intelligent systems that make a meaningful impact on the world
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up space-y-8">
              <div className="p-8 glass-card rounded-xl hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm an AI Engineer with extensive experience building intelligent systems 
                  that solve complex real-world problems. My expertise spans machine learning, 
                  deep learning, and natural language processing.
                </p>
              </div>
              
              <div className="p-8 glass-card rounded-xl hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in taking AI research from concept to production, with a focus 
                  on scalable architectures and efficient model optimization. My work has 
                  helped companies improve their processes and make data-driven decisions.
                </p>
              </div>
              
              <div className="p-8 glass-card rounded-xl hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, I enjoy contributing to open-source projects, 
                  writing technical articles, and exploring the latest developments in AI research.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              {skills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 hover:-translate-y-2 glass-card"
                >
                  <CardContent className="p-8 text-center">
                    <skill.icon className="w-14 h-14 text-primary mx-auto mb-6 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
                    <h3 className="font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-500 text-lg">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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