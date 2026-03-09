
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, DollarSign, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from "@/components/ui/resource-card";

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  isPaid?: boolean;
}

interface ResourcesSectionProps {
  resources: Resource[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (resource: Resource) => void;
}

const ResourcesSection = ({ resources, isFavorite, toggleFavorite }: ResourcesSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Extract unique categories
  const categories = Array.from(
    new Set(resources.map((resource) => resource.category))
  ).sort();

  // Separate free and paid resources
  const freeResources = resources.filter(resource => resource.isPaid !== true);
  const paidResources = resources.filter(resource => resource.isPaid === true);

  // Filter resources based on search term and category
  const filterResources = (resources: Resource[]) => {
    return resources.filter((resource) => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? resource.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  };

  const filteredFreeResources = filterResources(freeResources);
  const filteredPaidResources = filterResources(paidResources);

  const handleToggleFavorite = (id: string, isFav: boolean) => {
    const resource = resources.find((r) => r.id === id);
    if (resource) {
      toggleFavorite(resource);
    }
  };

  return (
    <>
      <div className="mt-12 mb-2 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Helpful Resources</h2>
        <p className="text-gray-600">Tools and platforms to help you prepare for your interviews</p>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-purple-100 focus-within:ring-purple-300 focus-within:border-purple-300"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full ${selectedCategory === null ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "border-purple-200 text-purple-700 hover:bg-purple-50"}`}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${selectedCategory === category ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "border-purple-200 text-purple-700 hover:bg-purple-50"}`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <Tabs defaultValue="free" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-purple-50 p-1 rounded-xl">
          <TabsTrigger value="free" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm rounded-lg">
            <Check className="h-4 w-4" />
            Free Resources
          </TabsTrigger>
          <TabsTrigger value="paid" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm rounded-lg">
            <DollarSign className="h-4 w-4" />
            Premium Resources
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="free" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFreeResources.length > 0 ? (
              filteredFreeResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  id={resource.id}
                  title={resource.title}
                  description={resource.description}
                  url={resource.url}
                  category={resource.category}
                  isFavorite={isFavorite(resource.id)}
                  onToggleFavorite={handleToggleFavorite}
                  isPaid={false}
                  colorScheme="purple"
                />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No free resources found matching your search criteria.</p>
                <Button 
                  variant="link" 
                  className="mt-2 text-purple-600"
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
        </TabsContent>
        
        <TabsContent value="paid" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPaidResources.length > 0 ? (
              filteredPaidResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  id={resource.id}
                  title={resource.title}
                  description={resource.description}
                  url={resource.url}
                  category={resource.category}
                  isFavorite={isFavorite(resource.id)}
                  onToggleFavorite={handleToggleFavorite}
                  isPaid={true}
                  colorScheme="purple"
                />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No premium resources found matching your search criteria.</p>
                <Button 
                  variant="link" 
                  className="mt-2 text-purple-600"
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
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ResourcesSection;
