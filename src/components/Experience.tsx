import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "DevOps IG Intern",
    company: "GTECH MULEARN",
    period: "2024 - Present",
    description: [
      "Learning and implementing modern DevOps tools and practices",
      "Guiding and mentoring student communities in DevOps concepts",
      "Collaborating on infrastructure automation projects",
    ],
  },
  {
    title: "YIP Intern",
    company: "KERALA DEVELOPMENT AND STRATEGIC COUNCIL",
    period: "May 2023 - July 2023",
    description: [
      "Coordinated with multiple stakeholders for program execution",
      "Contributed to operational planning and strategic initiatives",
      "Supported program development and community engagement activities",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-gradient-card p-8 hover:shadow-glow transition-all duration-300 border-primary/20"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-primary font-semibold mb-2">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
