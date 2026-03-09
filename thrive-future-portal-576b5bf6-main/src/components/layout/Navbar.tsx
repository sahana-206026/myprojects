
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Briefcase, Search, Heart, Home } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4 mr-2" /> },
    { name: "Education", path: "/education", icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { name: "Career", path: "/career", icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { name: "Interview Questions", path: "/interview", icon: <Search className="w-4 h-4 mr-2" /> },
    { name: "Favorites", path: "/favorites", icon: <Heart className="w-4 h-4 mr-2" /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass-effect" : "bg-white/90"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="text-futurefocus-700 text-xl font-bold transition-all group-hover:translate-x-[-2px]">Future</span>
              <span className="text-futurefocus-500 text-xl font-bold transition-all group-hover:translate-x-[2px]">Focus</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-futurefocus-100 text-futurefocus-700 shadow-sm"
                      : "text-gray-600 hover:bg-futurefocus-50 hover:text-futurefocus-600"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-3 space-y-1 px-4 sm:px-6 lg:px-8 animate-fade-in shadow-md">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? "bg-futurefocus-100 text-futurefocus-700"
                  : "text-gray-600 hover:bg-futurefocus-50 hover:text-futurefocus-600"
              } animate-fade-in delay-${index + 1}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
