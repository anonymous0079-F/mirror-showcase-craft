import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="glass-card px-4 py-2 rounded-lg">
          <span className="text-xl font-bold text-foreground">DEV</span>
        </div>

        {/* Navigation Links */}
        <div className="glass-card px-6 py-2 rounded-lg">
          <div className="flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary smooth-transition"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              className="text-primary hover:text-primary-glow smooth-transition"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;