import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "A machine learning-based code completion tool that helps developers write better code faster.",
      image: project1Image,
      technologies: ["Python", "TensorFlow", "React"]
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: project2Image,
      technologies: ["Next.js", "Node.js", "MongoDB"]
    },
    {
      title: "Smart Home Dashboard",
      description: "IoT dashboard for monitoring and controlling connected home devices in real-time.",
      image: project3Image,
      technologies: ["React", "Firebase", "Arduino"]
    }
  ];

  return (
    <section 
      id="projects"
      className="py-20 relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-0 overflow-hidden group hover:glow-effect smooth-transition cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 smooth-transition"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;