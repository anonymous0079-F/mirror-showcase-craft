import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
          Software Engineer
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 drop-shadow-lg max-w-2xl mx-auto">
          Building digital experiences with pixel-perfect precision
        </p>
        
        <Button 
          onClick={scrollToProjects}
          size="lg"
          className="glass-card bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:text-white mb-16 px-8 py-6 text-lg smooth-transition backdrop-blur-md"
        >
          View My Work
        </Button>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <Button
            variant="ghost"
            size="icon"
            className="glass-card bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:text-white smooth-transition backdrop-blur-md"
            asChild
          >
            <a href="#" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="glass-card bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:text-white smooth-transition backdrop-blur-md"
            asChild
          >
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="glass-card bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:text-white smooth-transition backdrop-blur-md"
            asChild
          >
            <a href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;