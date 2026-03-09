
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResourceCard from "@/components/ui/resource-card";
import { educationResources } from "@/data/resources";
import { useFavorites } from "@/hooks/useFavorites";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Sparkles, DollarSign, Check, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Education = () => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(educationResources.map((resource) => resource.category))
  ).sort();

  const freeResources = educationResources.filter(resource => resource.isPaid !== true);
  const paidResources = educationResources.filter(resource => resource.isPaid === true);

  const filterResources = (resources: typeof educationResources) => {
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
    const resource = educationResources.find((r) => r.id === id);
    if (resource) {
      toggleFavorite(resource);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-purple-100 via-violet-50 to-indigo-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 blur-xl bg-violet-200 rounded-full"></div>
                  <div className="relative">
                    <GraduationCap className="h-14 w-14 text-violet-700" />
                  </div>
                </div>
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-purple-500"
              >
                Educational Resources
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Access curated tools for academic tasks such as presentations, document editing, and multimedia creation.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 inline-flex items-center text-sm text-violet-700"
              >
                <Sparkles className="h-4 w-4 mr-1" />
                <span>{educationResources.length} resources available</span>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-violet-200 focus-within:ring-violet-400 focus-within:border-violet-400"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className={`rounded-full ${selectedCategory === null ? "bg-gradient-to-r from-violet-700 to-purple-500" : "border-violet-200 text-violet-700 hover:bg-violet-50"}`}
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full ${selectedCategory === category ? "bg-gradient-to-r from-violet-700 to-purple-500" : "border-violet-200 text-violet-700 hover:bg-violet-50"}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <Tabs defaultValue="free" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-violet-50 p-1 rounded-xl">
                <TabsTrigger value="free" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-violet-700 data-[state=active]:shadow-sm rounded-lg">
                  <Check className="h-4 w-4" />
                  Free Resources
                </TabsTrigger>
                <TabsTrigger value="paid" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-violet-700 data-[state=active]:shadow-sm rounded-lg">
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
                        className="mt-2 text-violet-600"
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
                        className="mt-2 text-violet-600"
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
