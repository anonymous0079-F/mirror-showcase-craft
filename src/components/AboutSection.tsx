import { Code2 } from "lucide-react";
import avatarImage from "@/assets/avatar.png";
import heroBackground from "@/assets/hero-background.jpg";

const AboutSection = () => {
  const technologies = [
    "React", "Node.js", "Python", "MongoDB", "Next.js", "TailwindCSS", "Git"
  ];

  return (
    <section 
      id="about"
      className="min-h-screen flex items-center py-20 relative"
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="glass-card p-6 rounded-2xl w-fit">
              <img 
                src={avatarImage} 
                alt="Developer Avatar" 
                className="w-64 h-64 object-cover rounded-xl"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>

          {/* About Content */}
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate Software Engineer with a love for creating elegant
              solutions to complex problems. With a focus on web technologies
              and user experience, I transform ideas into pixel-perfect applications.
            </p>
            
            {/* Technologies Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Technologies</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="glass-card px-4 py-2 rounded-lg text-center text-sm font-medium text-muted-foreground hover:text-primary smooth-transition cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;