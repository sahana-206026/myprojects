
import { useState, useEffect } from 'react';

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  isPaid?: boolean;
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Resource[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (resource: Resource) => {
    setFavorites((prev) => {
      // Check if already in favorites
      if (prev.some(item => item.id === resource.id)) {
        return prev;
      }
      return [...prev, resource];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter(item => item.id !== id));
  };

  const toggleFavorite = (resource: Resource) => {
    const exists = favorites.some(item => item.id === resource.id);
    if (exists) {
      removeFavorite(resource.id);
      return false;
    } else {
      addFavorite(resource);
      return true;
    }
  };

  const isFavorite = (id: string) => {
    return favorites.some(item => item.id === id);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
};
