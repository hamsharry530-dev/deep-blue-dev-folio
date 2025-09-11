import { Card, CardContent } from "@/components/ui/card";
import { Bot, MessageCircle } from "lucide-react";

const AIAssistant = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-fade-in">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                  AI Assistant
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Personal AI Assistant
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Interact with my custom AI assistant built with Python and deployed on Hugging Face
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
            <Card className="animate-slide-up bg-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-6 text-center">
                <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg text-card-foreground mb-2">
                  Intelligent Responses
                </h3>
                <p className="text-sm text-muted-foreground">
                  Powered by advanced NLP models for natural conversations
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-slide-up bg-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg text-card-foreground mb-2">
                  Real-time Chat
                </h3>
                <p className="text-sm text-muted-foreground">
                  Instant responses and interactive conversations
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-slide-up bg-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">🤗</span>
                </div>
                <h3 className="font-bold text-lg text-card-foreground mb-2">
                  Hugging Face Powered
                </h3>
                <p className="text-sm text-muted-foreground">
                  Deployed on Hugging Face Spaces platform
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-scale-in bg-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-3 flex items-center">
                  <Bot className="w-7 h-7 mr-3 text-primary" />
                  Try My AI Assistant
                </h3>
                <p className="text-muted-foreground">
                  Chat with my custom AI assistant below. Ask questions, get help, or just have a conversation!
                </p>
              </div>
              
              <div className="relative rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <iframe 
                  src="https://hamsharryy-bus.hf.space"  
                  width="100%" 
                  height="600px" 
                  style={{ border: 'none' }}
                  className="w-full"
                  title="Personal AI Assistant"
                  allow="microphone; camera"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
                />
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  This AI assistant is built with Python and showcases my expertise in NLP and conversational AI
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;