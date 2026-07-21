
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vipulnikam0925@gmail.com",
      href: "mailto:vipulnikam0925@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8208106900",
      href: "tel:+918208106900"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            I'm always interested in discussing new opportunities, collaborations, 
            and innovative projects. Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form */}
          <Card className="lg:col-span-3 bg-card/80 backdrop-blur-md border-border/50 shadow-luxury">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">First Name</label>
                    <Input 
                      required 
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors text-foreground" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Last Name</label>
                    <Input 
                      required 
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors text-foreground" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input 
                    type="email" 
                    required 
                    className="bg-muted/50 border-border/50 focus:border-primary transition-colors text-foreground" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                  <Input 
                    required 
                    className="bg-muted/50 border-border/50 focus:border-primary transition-colors text-foreground" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <Textarea 
                    required 
                    rows={5} 
                    className="bg-muted/50 border-border/50 focus:border-primary transition-colors resize-none text-foreground" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      Get In Touch
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <Card 
                key={item.label} 
                className="group hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-md border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <a 
                        href={item.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
