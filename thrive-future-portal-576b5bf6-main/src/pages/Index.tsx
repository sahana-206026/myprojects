
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        
        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What Students Are Saying</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Future Focus has helped students across different disciplines streamline their academic and career journeys.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-futurefocus-100 flex items-center justify-center text-futurefocus-700 font-bold text-lg">
                    JS
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Jessica S.</h3>
                    <p className="text-sm text-gray-500">Computer Science Student</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Future Focus helped me find all the resources I needed for my coding interviews. The curated links saved me so much time!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-futurefocus-100 flex items-center justify-center text-futurefocus-700 font-bold text-lg">
                    MT
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Michael T.</h3>
                    <p className="text-sm text-gray-500">Business Major</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The career resources section helped me land my first internship. I especially loved the resume building tools!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-futurefocus-100 flex items-center justify-center text-futurefocus-700 font-bold text-lg">
                    AP
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Anisha P.</h3>
                    <p className="text-sm text-gray-500">Engineering Student</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I use the favorites feature every day to quickly access the tools I need for my coursework. It's a huge time-saver!"
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-futurefocus-700 to-futurefocus-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Focus on Your Future?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Start exploring our comprehensive resources for education, career development, and interview preparation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/education">
                <Button size="lg" variant="secondary" className="gap-2">
                  Explore Resources
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
