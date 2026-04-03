import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiX, FiMapPin, FiFileText } from 'react-icons/fi';
import { COUNTIES } from '../data/counties';
import { showComingSoon } from './ComingSoonModal';

const searchablePages = [
  { name: 'Home', path: '/', keywords: ['welcome', 'index', 'start', 'mission', 'vision', 'overview'] },
  { name: 'About KSL', path: '/about', keywords: ['who we are', 'history', 'team', 'staff', 'background', 'leadership', 'board'] },
  { name: 'Transparency & Accountability', path: '/transparency', keywords: ['financials', 'reports', 'trust', 'audit', 'governance', 'documents'] },
  { name: 'Our Programs', path: '/programs', keywords: ['what we do', 'activities', 'education', 'rehabilitation', 'prevention', 'drug abuse', 'youth', 'empowerment'] },
  { name: 'Impact', path: '/impact', keywords: ['results', 'statistics', 'success stories', 'outcomes', 'numbers', 'reach'] },
  { name: 'Our Projects', path: '/projects', keywords: ['initiatives', 'current work', 'ongoing', 'interventions'] },
  { name: 'Photo Gallery', path: '/gallery', keywords: ['pictures', 'images', 'photos', 'media', 'visuals', 'albums'] },
  { name: 'Counties', path: '/counties', keywords: ['locations', 'places', 'regions', 'where we work', 'map', 'areas'] },
  { name: 'Blog', path: '/blog', keywords: ['news', 'articles', 'updates', 'stories', 'press', 'announcements'] },
  { name: 'Volunteer', path: '/volunteer', keywords: ['help out', 'join us', 'participate', 'get involved', 'support', 'time'] },
  { name: 'Partnership', path: '/partnership', keywords: ['collaborate', 'sponsor', 'partner', 'allies', 'organizations', 'work with us'] },
  { name: 'Contact Us', path: '/contact', keywords: ['email', 'phone', 'address', 'reach out', 'message', 'visit'] },
  { name: 'Donate', path: '/donate', keywords: ['give', 'financial support', 'contribute', 'payment', 'donation', 'fundraise', 'money'] },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const activeCounties = ['montserrado', 'margibi', 'bong', 'nimba', 'lofa', 'grand-bassa', 'grand-gedeh'];

  const getResults = () => {
    if (!query.trim()) return { pages: [], counties: [] };
    const lowerQuery = query.toLowerCase();

    const pageResults = searchablePages.filter(page => 
      page.name.toLowerCase().includes(lowerQuery) ||
      (page.keywords && page.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery)))
    );

    const countyResults = COUNTIES.filter(county => 
      county.name.toLowerCase().includes(lowerQuery) ||
      (county.tagline && county.tagline.toLowerCase().includes(lowerQuery)) ||
      (county.keywords && county.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery)))
    );

    return { pages: pageResults, counties: countyResults };
  };

  const { pages, counties } = getResults();
  const hasResults = pages.length > 0 || counties.length > 0;

  const handleCountyClick = (countyId) => {
    onClose();
    const county = COUNTIES.find(c => c.id === countyId);
    if (activeCounties.includes(countyId)) {
      navigate(`/counties/${countyId}`);
    } else {
      showComingSoon(county.name);
    }
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
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white rounded-xl shadow-2xl z-[101] overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Search Input */}
            <div className="relative flex items-center p-4 border-b border-slate-100">
              <FiSearch className="text-slate-400 w-6 h-6 ml-2" />
              <input
                ref={inputRef}
                type="text"
                className="w-full bg-transparent border-none outline-none px-4 py-2 text-lg text-slate-800 placeholder:text-slate-400"
                placeholder="Search pages, counties, programs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 ml-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-colors text-sm font-semibold"
              >
                Esc
              </button>
            </div>

            {/* Results Area */}
            {query.trim() && (
              <div className="overflow-y-auto p-4 bg-slate-50 flex-1">
                {!hasResults ? (
                  <div className="text-center py-10 text-slate-500">
                    <p className="text-lg font-medium mb-1">No results found</p>
                    <p className="text-sm">Try searching for something else.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Pages */}
                    {pages.length > 0 && (
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Pages</h3>
                        <ul>
                          {pages.map(page => (
                            <li key={page.path}>
                              <Link
                                to={page.path}
                                onClick={onClose}
                                className="flex items-center px-4 py-3 rounded-xl hover:bg-white hover:text-blue-600 hover:shadow-sm text-slate-700 transition-all group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mr-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                                  <FiFileText className="w-4 h-4" />
                                </div>
                                <span className="font-semibold">{page.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Counties */}
                    {counties.length > 0 && (
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Counties</h3>
                        <ul>
                          {counties.map(county => {
                            const active = activeCounties.includes(county.id);
                            return (
                              <li key={county.id}>
                                <button
                                  onClick={() => handleCountyClick(county.id)}
                                  className="w-full flex items-center px-4 py-3 rounded-xl hover:bg-white hover:shadow-sm text-slate-700 transition-all group text-left"
                                >
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-4 transition-all ${active ? 'bg-emerald-50 text-emerald-500 group-hover:bg-emerald-100 group-hover:scale-110' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                                    <FiMapPin className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1">
                                    <span className={`font-semibold ${active ? 'group-hover:text-emerald-600' : ''}`}>{county.name}</span>
                                    {county.tagline && <p className="text-xs text-slate-500 truncate max-w-[280px] sm:max-w-md">{county.tagline}</p>}
                                  </div>
                                  {!active && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded-full">Coming Soon</span>
                                  )}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
