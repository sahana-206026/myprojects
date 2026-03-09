
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResourceCard from "@/components/ui/resource-card";
import { useFavorites } from "@/hooks/useFavorites";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from favorites
  const categories = Array.from(
    new Set(favorites.map((resource) => resource.category))
  );

  // Filter favorites based on search term and category
  const filteredFavorites = favorites.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? resource.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleToggleFavorite = (id: string) => {
    const resource = favorites.find((r) => r.id === id);
    if (resource) {
      toggleFavorite(resource);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Your Favorite Resources</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Access all your bookmarked resources in one place for quick reference.
              </p>
            </div>
            
            {favorites.length > 0 ? (
              <>
                <div className="flex flex-wrap gap-4 mb-8 justify-center">
                  <div className="relative flex-grow max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search your favorites..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  {categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={selectedCategory === null ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(null)}
                      >
                        All
                      </Button>
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredFavorites.length > 0 ? (
                    filteredFavorites.map((resource) => (
                      <ResourceCard
                        key={resource.id}
                        id={resource.id}
                        title={resource.title}
                        description={resource.description}
                        url={resource.url}
                        category={resource.category}
                        isFavorite={isFavorite(resource.id)}
                        onToggleFavorite={(id) => handleToggleFavorite(id)}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8">
                      <p className="text-gray-500">No favorites found matching your search criteria.</p>
                      <Button 
                        variant="link" 
                        className="mt-2"
                        onClick={() => {
                          setSearchTerm("");
                          setSelectedCategory(null);
                        }}
                      >
                        Clear filters
                      </Button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
                <Heart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
                <p className="text-gray-500 mb-8">
                  Start exploring our resources and click the heart icon to add items to your favorites.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/education">
                    <Button variant="outline">Explore Education</Button>
                  </Link>
                  <Link to="/career">
                    <Button variant="outline">Discover Careers</Button>
                  </Link>
                  <Link to="/interview">
                    <Button variant="outline">Interview Questions</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Favorites;
