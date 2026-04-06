import { useState, useEffect } from 'react';

const STORAGE_KEY = 'ksl_recent_searches';
const MAX_ITEM_COUNT = 5;

/**
 * Hook to read and save recent searches to local storage.
 * @returns {{ recentSearches: string[], addRecentSearch: (query: string) => void, clearRecentSearches: () => void }}
 */
export function useSearchHistory() {
  const [recentSearches, setRecentSearches] = useState([]);

  // Load from local storage initially
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setRecentSearches(JSON.parse(stored));
      }
    } catch (error) {
      console.warn("Could not read recent searches from local storage", error);
    }
  }, []);

  const addRecentSearch = (query) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    setRecentSearches((prev) => {
      // Remove it if it already exists to place it at the front
      const filtered = prev.filter((q) => q.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, MAX_ITEM_COUNT);
      
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.warn("Could not save recent searches", error);
      }
      
      return updated;
    });
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn("Could not clear recent searches", error);
    }
  };

  return { recentSearches, addRecentSearch, clearRecentSearches };
}
