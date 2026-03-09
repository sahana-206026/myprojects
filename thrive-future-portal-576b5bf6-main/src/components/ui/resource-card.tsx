
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, DollarSign, Check, Award, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  isFavorite?: boolean;
  isPaid?: boolean;
  onToggleFavorite?: (id: string, favorite: boolean) => void;
  colorScheme?: "blue" | "purple" | "teal" | "amber";
}

const ResourceCard = ({
  id,
  title,
  description,
  url,
  category,
  isFavorite = false,
  isPaid = false,
  onToggleFavorite,
  colorScheme = "blue"
}: ResourceCardProps) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleFavoriteToggle = () => {
    const newState = !favorite;
    setFavorite(newState);
    if (onToggleFavorite) {
      onToggleFavorite(id, newState);
    }
    
    toast({
      title: newState ? "Added to favorites" : "Removed from favorites",
      description: newState ? `${title} has been added to your favorites` : `${title} has been removed from your favorites`,
      duration: 3000,
    });
  };

  // Generate a background gradient based on the resource ID and colorScheme
  const getBgGradient = () => {
    // Use the hash of the ID to get predictable but varied colors
    const hash = id.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    
    const colorSchemes = {
      blue: {
        hue1: (hash % 40) + 200, // Blue range
        hue2: (hash % 40) + 180,
        opacity: 0.8
      },
      purple: {
        hue1: (hash % 40) + 260, // Purple range
        hue2: (hash % 40) + 240,
        opacity: 0.8
      },
      teal: {
        hue1: (hash % 30) + 170, // Teal range
        hue2: (hash % 30) + 150,
        opacity: 0.8
      },
      amber: {
        hue1: (hash % 30) + 30, // Amber range
        hue2: (hash % 30) + 15,
        opacity: 0.8
      }
    };
    
    const { hue1, hue2, opacity } = colorSchemes[colorScheme];
    
    return `linear-gradient(135deg, hsla(${hue1}, 70%, 97%, ${opacity}) 0%, hsla(${hue2}, 60%, 95%, ${opacity + 0.1}) 100%)`;
  };

  // Get button gradient based on colorScheme
  const getButtonGradient = () => {
    const gradients = {
      blue: "from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600",
      purple: "from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600",
      teal: "from-teal-500 to-emerald-400 hover:from-teal-600 hover:to-emerald-500",
      amber: "from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500"
    };
    return gradients[colorScheme];
  };

  // Get badge color based on colorScheme
  const getBadgeColors = () => {
    const colors = {
      blue: "bg-indigo-100 text-indigo-700 border-indigo-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      teal: "bg-teal-100 text-teal-700 border-teal-200",
      amber: "bg-amber-100 text-amber-700 border-amber-200"
    };
    return colors[colorScheme];
  };

  // Get premium badge colors
  const getPremiumBadgeColors = () => {
    return "bg-amber-50 text-amber-700 border-amber-200";
  };

  // Get free badge colors
  const getFreeBadgeColors = () => {
    const colors = {
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      purple: "bg-indigo-50 text-indigo-700 border-indigo-200",
      teal: "bg-emerald-50 text-emerald-700 border-emerald-200",
      amber: "bg-green-50 text-green-700 border-green-200"
    };
    return colors[colorScheme];
  };

  // Get top border gradient
  const getTopBorderGradient = () => {
    const gradients = {
      blue: "from-indigo-500 to-blue-400",
      purple: "from-purple-500 to-indigo-400",
      teal: "from-teal-400 to-emerald-300",
      amber: "from-amber-400 to-orange-300"
    };
    return gradients[colorScheme];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card 
        className="h-full flex flex-col transition-all duration-300 overflow-hidden border-none shadow-md hover:shadow-xl group"
        style={{ background: getBgGradient() }}
      >
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getTopBorderGradient()} opacity-80`}></div>
        <CardHeader className="pb-2 relative">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className={`text-lg line-clamp-1 group-hover:text-${colorScheme === 'blue' ? 'indigo' : colorScheme}-700 transition-colors`}>
                  {title}
                </CardTitle>
                {isPaid ? 
                  <Badge variant="outline" className={getPremiumBadgeColors()}>
                    <DollarSign className="h-3 w-3 mr-1" />
                    Premium
                  </Badge> : 
                  <Badge variant="outline" className={getFreeBadgeColors()}>
                    <Check className="h-3 w-3 mr-1" />
                    Free
                  </Badge>
                }
              </div>
              <Badge 
                variant="outline" 
                className={`text-xs mt-2 inline-block px-2 py-1 rounded-full ${getBadgeColors()} shadow-sm font-medium`}
              >
                {category}
              </Badge>
            </div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleFavoriteToggle}
                className={`${favorite ? "text-red-500" : "text-gray-400 hover:text-red-400"} transition-transform hover:scale-110 duration-200 bg-white/70 backdrop-blur-sm hover:bg-white/90 rounded-full p-2 h-8 w-8`}
              >
                <Heart className={`h-4 w-4 ${favorite ? "fill-current" : ""}`} />
                <span className="sr-only">{favorite ? "Remove from favorites" : "Add to favorites"}</span>
              </Button>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="pt-4">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <Button 
                className={`w-full group transition-all duration-300 shadow-sm hover:shadow ${
                  isPaid 
                    ? "bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500" 
                    : `bg-gradient-to-r ${getButtonGradient()}`
                }`}
              >
                <span>Visit Resource</span>
                <ExternalLink className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </Button>
            </motion.div>
          </a>
        </CardFooter>
        
        {/* Decorative elements */}
        {isPaid && (
          <div className="absolute top-2 right-14 opacity-10">
            <Award className="h-24 w-24 text-amber-500 rotate-12" />
          </div>
        )}
        {!isPaid && colorScheme === "teal" && (
          <div className="absolute bottom-2 right-2 opacity-5">
            <Sparkles className="h-32 w-32 text-emerald-500 rotate-12" />
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default ResourceCard;
