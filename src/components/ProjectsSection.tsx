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
      </div>
    </section>
  );
};

export default ProjectsSection;