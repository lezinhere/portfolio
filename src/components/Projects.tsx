import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Cpu, GitBranch } from "lucide-react";

const projects = [
  {
    title: "AI Powered Interview Automation",
    icon: Cpu,
    description:
      "An AI-powered platform designed for automated candidate assessments and interview processes. Built with scalability in mind and deployed on AWS cloud infrastructure for high availability and performance.",
    technologies: ["AWS", "AI/ML", "Python", "Cloud Infrastructure"],
    highlights: [
      "Automated candidate screening and assessment",
      "Scalable architecture on AWS",
      "Real-time interview analysis",
    ],
  },
  {
    title: "CI/CD Pipeline with Jenkins & Docker",
    icon: GitBranch,
    description:
      "Implemented a complete CI/CD pipeline using GitHub for version control, Jenkins for automation, and Docker for containerization. Automated the entire build, test, and deployment workflow.",
    technologies: ["Jenkins", "Docker", "GitHub", "CI/CD"],
    highlights: [
      "Automated build and test processes",
      "Docker containerization",
      "Continuous deployment workflow",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-card p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-primary/20 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <project.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Key Highlights:
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
