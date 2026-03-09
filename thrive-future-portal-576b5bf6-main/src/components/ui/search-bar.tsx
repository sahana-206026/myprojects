
import React, { useState } from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Resource } from "@/hooks/useFavorites";

interface SearchBarProps {
  resources: Resource[];
  colorScheme?: "purple" | "violet" | "teal" | "indigo" | "emerald";
}

const SearchBar = ({ resources, colorScheme = "purple" }: SearchBarProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSelect = (resource: Resource) => {
    window.open(resource.url, "_blank");
    setOpen(false);
  };

  const colorClasses = {
    purple: "focus-within:ring-purple-300 focus-within:border-purple-300",
    violet: "focus-within:ring-violet-300 focus-within:border-violet-300",
    teal: "focus-within:ring-teal-300 focus-within:border-teal-300",
    indigo: "focus-within:ring-indigo-300 focus-within:border-indigo-300",
    emerald: "focus-within:ring-emerald-300 focus-within:border-emerald-300",
  };

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`relative w-full md:w-80 justify-start text-sm text-muted-foreground bg-white/90 border-${colorScheme}-100 ${colorClasses[colorScheme]} hover:bg-${colorScheme}-50`}
        >
          <Search className="mr-2 h-4 w-4" />
          <span>Search all resources...</span>
          <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-3xl">
        <Command>
          <CommandInput 
            placeholder="Search all resources..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
            className="border-none focus:ring-0 outline-none"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Resources">
              {filteredResources.map((resource) => (
                <CommandItem
                  key={resource.id}
                  onSelect={() => handleSelect(resource)}
                  className="flex flex-col items-start py-3 cursor-pointer hover:bg-slate-100"
                >
                  <div className="font-medium">{resource.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">{resource.description}</div>
                  <div className="flex items-center mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full bg-${colorScheme}-100 text-${colorScheme}-700`}>
                      {resource.category}
                    </span>
                    {resource.isPaid && (
                      <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                        Premium
                      </span>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
