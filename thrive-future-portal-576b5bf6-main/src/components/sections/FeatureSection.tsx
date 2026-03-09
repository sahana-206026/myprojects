
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Briefcase, MessageSquare, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link to={link}>
      <Card className="h-full card-hover transition-all duration-300 border-l-4 border-futurefocus-500 hover:border-l-8">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="rounded-full bg-futurefocus-100 p-3 w-14 h-14 flex items-center justify-center text-futurefocus-600 mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Educational Resources",
      description: "Access curated tools for presentations, document editing, and academic research.",
      link: "/education"
    },
    {
      icon: <Briefcase className="h-7 w-7" />,
      title: "Career Development",
      description: "Discover job portals, resume builders, and internship opportunities.",
      link: "/career"
    },
    {
      icon: <MessageSquare className="h-7 w-7" />,
      title: "Interview Preparation",
      description: "Practice with common interview questions across various domains.",
      link: "/interview"
    },
    {
      icon: <Star className="h-7 w-7" />,
      title: "Favorites",
      description: "Save and quickly access your most frequently used resources.",
      link: "/favorites"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need in One Place</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Future Focus centralizes all the online resources you need for your academic and career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transform transition-all duration-500 hover:translate-y-[-5px]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
