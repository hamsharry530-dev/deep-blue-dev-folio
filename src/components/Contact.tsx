import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="animate-fade-in">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                  Contact
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Let's discuss opportunities, collaborations, or just have a chat about the future of AI
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="animate-slide-up bg-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-card-foreground flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-card-foreground font-semibold mb-2 block">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary/50"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-card-foreground font-semibold mb-2 block">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-card-foreground font-semibold mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-[160px] transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary/50"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 py-6 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="animate-scale-in space-y-8" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Email</p>
                    <p className="text-muted-foreground">harriskhann164@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Phone</p>
                    <p className="text-muted-foreground">03170-158305</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Location</p>
                    <p className="text-muted-foreground">Rawalpindi, Pakistan</p>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground border-0 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                <CardContent className="p-10">
                  <h3 className="font-bold text-2xl mb-4">Ready to collaborate?</h3>
                  <p className="mb-8 opacity-95 text-lg leading-relaxed">
                    I'm always open to discussing new opportunities, 
                    innovative projects, and interesting challenges in AI and machine learning.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all duration-500 font-semibold px-8 py-6 text-lg"
                  >
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
