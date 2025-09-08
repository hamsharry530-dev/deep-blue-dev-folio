import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Key, Sparkles } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const CVAssistant = () => {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('gemini-api-key') || '');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [genAI, setGenAI] = useState<GoogleGenerativeAI | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // CV Content for RAG
  const cvContext = `
  Name: Haris Khan
  Title: AI Engineer & Generative AI Specialist
  
  Professional Summary:
  Experienced AI Engineer with expertise in machine learning, deep learning, natural language processing, and computer vision. Specializes in developing intelligent systems and generative AI solutions using modern frameworks like TensorFlow, PyTorch, and cutting-edge LLMs.
  
  Technical Skills:
  - Programming Languages: Python, JavaScript, TypeScript, R, SQL
  - AI/ML Frameworks: TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face Transformers
  - Generative AI: OpenAI GPT, Google Gemini, Claude, LangChain, Vector Databases
  - Computer Vision: OpenCV, PIL, YOLO, CNN architectures
  - NLP: NLTK, spaCy, Transformers, BERT, GPT fine-tuning
  - Cloud Platforms: AWS, Google Cloud, Azure, Supabase
  - Tools: Docker, Git, Jupyter, MLflow, Weights & Biases
  
  Experience:
  - Developed and deployed multiple machine learning models in production
  - Built RAG (Retrieval Augmented Generation) systems for enterprise applications
  - Created computer vision solutions for image classification and object detection
  - Implemented NLP pipelines for sentiment analysis and document processing
  - Fine-tuned large language models for specific business use cases
  
  Projects:
  1. Computer Vision System - Advanced image recognition and classification using deep learning
  2. Machine Learning Pipeline - End-to-end ML workflow for predictive analytics
  3. NLP Text Analysis - Natural language processing for sentiment and entity recognition
  
  Education: Advanced degree in AI/ML related field
  Certifications: Various AI and ML certifications from leading platforms
  `;

  useEffect(() => {
    if (apiKey) {
      try {
        const ai = new GoogleGenerativeAI(apiKey);
        setGenAI(ai);
        localStorage.setItem('gemini-api-key', apiKey);
      } catch (error) {
        console.error('Error initializing Gemini AI:', error);
        toast({
          title: "API Key Error",
          description: "Please check your Gemini API key",
          variant: "destructive",
        });
      }
    }
  }, [apiKey]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || !genAI) {
      if (!genAI) {
        toast({
          title: "API Key Required",
          description: "Please enter your Gemini API key first",
          variant: "destructive",
        });
      }
      return;
    }

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      
      const prompt = `You are a helpful AI assistant that answers questions about Haris Khan's CV and professional background. Use the following CV information to answer questions accurately and professionally:

${cvContext}

User Question: ${input}

Please provide a helpful, accurate response based on the CV information above. If the question is not related to the CV, politely redirect the conversation back to professional topics about Haris Khan's experience and skills.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const assistantMessage: Message = {
        role: 'assistant',
        content: text,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      toast({
        title: "Response Generated",
        description: "AI assistant has responded to your query",
      });
    } catch (error) {
      console.error('Error generating response:', error);
      toast({
        title: "Error",
        description: "Failed to generate response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const exampleQuestions = [
    "What are Haris Khan's main technical skills?",
    "Tell me about his AI and ML experience",
    "What projects has he worked on?",
    "What programming languages does he know?",
    "What is his experience with generative AI?",
  ];

  return (
    <section className="py-20 bg-gradient-subtle" id="cv-assistant">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-accent" />
              <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI CV Assistant
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ask me anything about Haris Khan's professional background, skills, and experience. 
              Powered by Google Gemini AI with RAG capabilities.
            </p>
          </div>

          {/* API Key Input */}
          {!apiKey && (
            <Card className="mb-8 border-accent/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Setup Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  To use the AI assistant, please enter your Google Gemini API key. 
                  Get one for free at <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google AI Studio</a>.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    placeholder="Enter your Gemini API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={() => {
                      if (apiKey) {
                        const ai = new GoogleGenerativeAI(apiKey);
                        setGenAI(ai);
                        localStorage.setItem('gemini-api-key', apiKey);
                        toast({
                          title: "API Key Saved",
                          description: "You can now start chatting with the AI assistant",
                        });
                      }
                    }}
                    disabled={!apiKey}
                  >
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Chat Interface */}
          <Card className="shadow-large border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-accent" />
                Chat with AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Example Questions */}
              {messages.length === 0 && apiKey && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Try asking about:</p>
                  <div className="flex flex-wrap gap-2">
                    {exampleQuestions.map((question, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={() => setInput(question)}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages */}
              <ScrollArea className="h-96 w-full rounded-md border p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`flex gap-3 max-w-[80%] ${
                          message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.role === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-accent text-accent-foreground'
                        }`}>
                          {message.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div
                          className={`rounded-lg px-4 py-2 ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="flex gap-3 max-w-[80%]">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-accent text-accent-foreground">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="bg-muted text-muted-foreground rounded-lg px-4 py-2">
                          <p className="text-sm">Thinking...</p>
                          <div className="flex space-x-1 mt-1">
                            <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>
                            <div className="w-1 h-1 bg-current rounded-full animate-pulse delay-100"></div>
                            <div className="w-1 h-1 bg-current rounded-full animate-pulse delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="flex gap-2">
                <Textarea
                  placeholder="Ask me anything about Haris Khan's background..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="min-h-[60px] resize-none"
                  disabled={!apiKey}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading || !apiKey}
                  className="self-end"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Note */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              🔒 Your API key is stored locally in your browser and never shared with our servers.
              For production use, consider integrating with Supabase for secure key management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVAssistant;