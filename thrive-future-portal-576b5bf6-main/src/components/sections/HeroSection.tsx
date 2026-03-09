
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import VideoBackground from "@/components/background/VideoBackground";
import { Suspense, lazy, useEffect, useState } from "react";

// Lazy load the 3D scene to improve initial page load
const Scene3D = lazy(() => import("@/components/3d/Scene3D"));

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay for better animation effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[100vh] flex items-center">
      {/* Video Background */}
      <VideoBackground />
      
      <div className="absolute inset-0 hero-pattern"></div>
      
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/50">Loading 3D elements...</div>}>
          <Scene3D />
        </Suspense>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="md:flex md:items-center md:space-x-12">
          <div className={`md:w-1/2 space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'} glass-effect-dark p-8 rounded-xl`}>
            <div className="inline-block px-3 py-1 rounded-full bg-futurefocus-100/80 text-futurefocus-600 text-sm font-semibold mb-2 animate-fade-in delay-1 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 inline-block mr-2 animate-pulse-slow" />
              Your Path to Success
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight animate-fade-in delay-2 text-white">
              Your Ultimate Resource Hub for
              <span className="gradient-text block mt-2">Future Success</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl animate-fade-in delay-3">
              Future Focus is your centralized platform to access essential resources for education, 
              career development, and interview preparation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in delay-4">
              <Link to="/education">
                <Button size="lg" className="gap-2 group shadow-md hover:shadow-lg bg-gradient-to-r from-futurefocus-600 to-futurefocus-500 hover:from-futurefocus-700 hover:to-futurefocus-600">
                  <BookOpen className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Explore Education
                  <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </Link>
              <Link to="/career">
                <Button size="lg" variant="outline" className="gap-2 group border-white/30 hover:border-white/50 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                  <Briefcase className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Discover Careers
                  <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* 3D Interactive Elements */}
          <div className="hidden md:block md:w-1/2 mt-12 md:mt-0 animate-fade-in delay-5 relative h-[500px]">
            {/* Floating sticker elements */}
            <div className={`absolute top-10 right-20 sticker animate-float z-20 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-500`}>
              <div className="bg-gradient-to-r from-futurefocus-500 to-futurefocus-600 text-white py-2 px-4 rounded-lg shadow-lg transform rotate-12">
                Learn
              </div>
            </div>
            
            <div className={`absolute bottom-20 left-10 sticker animate-float z-20 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1000`} style={{ animationDelay: "1s" }}>
              <div className="bg-gradient-to-r from-futurefocus-700 to-futurefocus-800 text-white py-2 px-4 rounded-lg shadow-lg transform -rotate-6">
                Grow
              </div>
            </div>
            
            <div className={`absolute top-40 left-40 sticker animate-float z-20 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1500`} style={{ animationDelay: "1.5s" }}>
              <div className="bg-gradient-to-r from-futurefocus-300 to-futurefocus-400 text-futurefocus-900 py-2 px-4 rounded-lg shadow-lg transform rotate-3">
                Succeed
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="#ffffff">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
