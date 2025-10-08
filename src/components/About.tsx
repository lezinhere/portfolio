import { Card } from "@/components/ui/card";
import { Server, Network, Cloud, Code, Activity, Container } from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "System Administration",
    description: "Linux server management and configuration",
  },
  {
    icon: Network,
    title: "Networking",
    description: "TCP/IP protocols and network troubleshooting",
  },
  {
    icon: Activity,
    title: "Monitoring",
    description: "CloudWatch and infrastructure monitoring",
  },
  {
    icon: Code,
    title: "Scripting",
    description: "Python and Bash automation",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "AWS cloud infrastructure and services",
  },
  {
    icon: Container,
    title: "DevOps Tools",
    description: "Docker, Jenkins, Git/GitHub",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Junior DevOps Engineer with hands-on experience in system administration, 
            cloud infrastructure, and automation. Proficient in Linux environments, 
            networking fundamentals, and modern DevOps practices. Currently expanding 
            expertise in AWS cloud services, containerization, and CI/CD pipelines. 
            Passionate about optimizing IT operations and building scalable infrastructure solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-gradient-card p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-primary/20"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
