import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mailtolezinvm@gmail.com",
    href: "mailto:mailtolezinvm@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9633179406",
    href: "tel:+919633179406",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Malappuram, Kerala",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/lezin-vm",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/lezinhere",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just connecting with fellow tech enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="bg-gradient-card p-6 hover:shadow-glow transition-all duration-300 border-primary/20"
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  className="flex flex-col items-center text-center space-y-3 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    <p className="text-foreground font-medium">{contact.value}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="mr-2 h-5 w-5" />
                {social.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
