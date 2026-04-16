import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiX, FiMapPin, FiFileText, FiClock, FiTrendingUp } from 'react-icons/fi';
import { COUNTIES } from '../data/counties';
import { searchIndex } from '../data/searchIndex';
import { showComingSoon } from './ComingSoonModal';
import { useDebounce } from '../hooks/useDebounce';
import { useSearchHistory } from '../hooks/useSearchHistory';


const POPULAR_SEARCHES = ['rehabilitation', 'volunteer', 'drug abuse', 'counties', 'donate'];

const highlightMatch = (text, query) => {
  if (!query || !text) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) => 
    part.toLowerCase() === query.toLowerCase() 
      ? <mark key={i} className="bg-yellow-300 text-slate-900 rounded-sm px-0.5">{part}</mark> 
      : part
  );
};

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  
  const debouncedQuery = useDebounce(query, 300);
  const { recentSearches, addRecentSearch, clearRecentSearches } = useSearchHistory();
  
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus and scroll lock management
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Handle ESC inside modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const activeCounties = ['montserrado', 'margibi', 'bong', 'nimba', 'lofa', 'grand-bassa', 'grand-gedeh'];

  const getResults = () => {
    if (!debouncedQuery.trim()) return [];
    
    const lowerQuery = debouncedQuery.toLowerCase();
    let results = [];

    // Search Index
    searchIndex.forEach(item => {
      const matchTitle = item.title.toLowerCase().includes(lowerQuery);
      const matchDesc = item.description.toLowerCase().includes(lowerQuery);
      const matchContent = item.content.toLowerCase().includes(lowerQuery);
      
      if (matchTitle || matchDesc || matchContent) {
        results.push({
          ...item,
          isCounty: false
        });
      }
    });

    // Counties Data
    COUNTIES.forEach(county => {
      const matchName = county.name.toLowerCase().includes(lowerQuery);
      const matchTag = county.tagline && county.tagline.toLowerCase().includes(lowerQuery);
      const matchKey = county.keywords && county.keywords.some(k => k.toLowerCase().includes(lowerQuery));

      if (matchName || matchTag || matchKey) {
        results.push({
          id: county.id,
          type: 'Counties',
          title: county.name,
          description: county.tagline || 'Explore regional programs and outcomes.',
          path: `/counties/${county.id}`,
          isCounty: true,
          isActive: activeCounties.includes(county.id)
        });
      }
    });

    return results;
  };

  const results = getResults();
  const hasResults = results.length > 0;
  const isSearching = debouncedQuery.trim().length > 0;

  const handleResultClick = (result) => {
    addRecentSearch(debouncedQuery);
    onClose();
    
    if (result.isCounty) {
      if (result.isActive) {
        navigate(result.path);
      } else {
        showComingSoon(result.title);
      }
    } else {
      navigate(result.path);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    inputRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[5%] md:top-[10%] left-1/2 -translate-x-1/2 w-[95%] max-w-3xl bg-white rounded-lg shadow-2xl z-[101] overflow-hidden flex flex-col max-h-[90vh] md:max-h-[80vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-modal-title"
          >
            {/* Screen Reader Only Title */}
            <h2 id="search-modal-title" className="sr-only">Site Search</h2>

            {/* Search Input Area */}
            <div className="relative flex items-center p-4 border-b border-slate-100 bg-white z-10">
              <FiSearch className="text-blue-600 w-6 h-6 ml-2 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                className="w-full bg-transparent border-none outline-none px-4 py-3 text-lg md:text-xl text-slate-800 placeholder:text-slate-400 font-medium"
                placeholder="Search resources, programs, or content..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search input"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-2 text-slate-400 hover:text-slate-600 transition-colors shrink-0"
                  aria-label="Clear search"
                >
                  <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-md">Clear</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 ml-2 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors shrink-0"
                aria-label="Close search"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>



            {/* ARIA Live Region for Search Results Announcements */}
            <div aria-live="polite" className="sr-only">
              {isSearching ? `${results.length} results found` : ''}
            </div>

            {/* Content Area */}
            <div className="overflow-y-auto flex-1 bg-slate-50">
              
              {/* Default View (No Query) */}
              {!isSearching && (
                <div className="p-6">
                  {recentSearches.length > 0 && (
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-bold text-slate-500 uppercase flex items-center gap-2">
                          <FiClock /> Recent Searches
                        </h3>
                        <button 
                          onClick={clearRecentSearches}
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Clear
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((term, i) => (
                          <button
                            key={i}
                            onClick={() => handleSuggestionClick(term)}
                            className="bg-white px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors flex items-center gap-2"
                          >
                            <FiSearch className="w-3 h-3 text-slate-400" />
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase mb-4 flex items-center gap-2">
                      <FiTrendingUp /> Popular Searches
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {POPULAR_SEARCHES.map((term, i) => (
                        <button
                          key={i}
                          onClick={() => handleSuggestionClick(term)}
                          className="bg-blue-50 px-4 py-2 border border-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Search Results */}
              {isSearching && (
                <div className="p-4">
                  {!hasResults ? (
                    <div className="text-center py-16 text-slate-500">
                      <div className="bg-slate-200 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <FiSearch className="w-8 h-8 text-slate-400" />
                      </div>
                      <p className="text-xl font-bold text-slate-700 mb-2">No results found</p>
                      <p className="text-slate-500">We couldn't find anything matching "{debouncedQuery}". <br/>Try adjusting your filters or search terms.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {results.map((result, idx) => (
                        <div 
                          key={`${result.type}-${idx}`}
                          onClick={() => handleResultClick(result)}
                          className="group bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md cursor-pointer transition-all"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleResultClick(result);
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`mt-1 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                              result.isCounty 
                                ? (result.isActive ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400')
                                : 'bg-blue-50 text-blue-600'
                            }`}>
                              {result.isCounty ? <FiMapPin className="w-5 h-5"/> : <FiFileText className="w-5 h-5"/>}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md ${
                                  result.isCounty ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'
                                }`}>
                                  {result.type}
                                </span>
                                {result.isCounty && !result.isActive && (
                                   <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md">Coming Soon</span>
                                )}
                              </div>
                              <h4 className="text-lg font-bold text-slate-900 mb-1 truncate group-hover:text-blue-600 transition-colors">
                                {highlightMatch(result.title, debouncedQuery)}
                              </h4>
                              <p className="text-sm text-slate-600 line-clamp-2">
                                {highlightMatch(result.description, debouncedQuery)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
