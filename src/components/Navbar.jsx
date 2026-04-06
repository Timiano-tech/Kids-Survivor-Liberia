import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiSearch } from 'react-icons/fi';
import React, { Suspense } from 'react';

const SearchModal = React.lazy(() => import('./SearchModal'));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcut for Search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on resize to lg desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (name) => {
    setDropdownOpen(prev => ({ 
      ...prev, 
      [name]: !prev[name]
    }));
  };

  const closeAllDropdowns = () => {
    setDropdownOpen({});
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '#',
      dropdown: [
        { name: 'About KSL', path: '/about' },
        { name: 'Transparency & Accountability', path: '/transparency' },
      ]
    },    
    { name: 'Our Programs', path: '/programs' },
    { 
      name: 'Our Impact', 
      path: '#',
      dropdown: [
        { name: 'Impact', path: '/impact' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Photo Gallery', path: '/gallery' },
        { name: 'Counties', path: '/counties' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { 
      name: 'Get Involved', 
      path: '#',
      dropdown: [
        { name: 'Volunteer', path: '/volunteer' },
        { name: 'Partnership', path: '/partnership' },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed z-50 transition-all duration-300 ${
        isTransparent 
          ? 'lg:bg-black/20 lg:backdrop-blur-md lg:border-b lg:border-white/10 max-lg:bg-white/95 max-lg:backdrop-blur-md max-lg:shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-lg:border max-lg:border-gray-100' 
          : 'bg-white shadow-lg max-lg:border max-lg:border-gray-100'
      } max-lg:top-2 max-lg:left-2 max-lg:right-2 max-lg:rounded-xl lg:top-0 lg:left-0 lg:right-0 lg:w-full`}
      onClick={closeAllDropdowns}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo - responsive */}
          <Link to="/" className="flex items-center gap-2 min-w-0 shrink-0" onClick={closeAllDropdowns}>
            <motion.div whileHover={{ scale: 1.05 }} className="shrink-0">
              <img src="/KSL Logo.png" alt="KSL LOGO" className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain" />
            </motion.div>
            <div className="min-w-0 flex items-center">
              <h1 className={`font-extrabold text-base sm:text-lg md:text-xl truncate tracking-tight transition-colors flex gap-1 ${isTransparent ? 'max-lg:text-gray-800 lg:text-white' : 'text-gray-800'}`}>
                Kids Survivor 
                <span className={`transition-colors font-bold ${isTransparent ? 'max-lg:text-yellow-600 lg:text-yellow-400' : 'text-yellow-500'}`}>Liberia</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-5">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button 
                      className={`flex items-center space-x-1 font-medium text-[13px] xl:text-sm transition-colors ${isTransparent ? 'text-white hover:text-yellow-400' : 'text-gray-700 hover:text-blue-600'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.name);
                      }}
                    >
                      <span>{item.name}</span>
                      <FiChevronDown className={`transition-transform ${dropdownOpen[item.name] ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {dropdownOpen[item.name] && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-100 z-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={closeAllDropdowns}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium text-[13px] xl:text-sm transition-colors ${isTransparent ? 'text-white hover:text-yellow-400' : 'text-gray-700 hover:text-blue-600'}`}
                    onClick={closeAllDropdowns}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Search Button (with Shortcut Hint) */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 border ${isTransparent 
                ? 'border-white/20 text-white bg-white/5 hover:bg-white/10' 
                : 'border-slate-200 text-slate-500 bg-slate-50 hover:bg-slate-100 hover:text-blue-600'}`}
              aria-label="Search"
            >
              <FiSearch className="w-4 h-4" />
              <span className="text-sm font-medium pr-1">Search...</span>
            </button>

            {/* Donate Button */}
            <Link to="/donate" onClick={closeAllDropdowns}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2 rounded-full font-bold shadow-md transition-all text-sm"
              >
                Donate
              </motion.button>
            </Link>
          </div>

          {/* Mobile Right Actions (Hamburger only) */}
          <div className="flex items-center lg:hidden gap-1">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 rounded-lg transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] ${isTransparent ? 'max-lg:text-gray-700 max-lg:hover:bg-gray-100 lg:text-white lg:hover:bg-white/10' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}
              aria-label="Search"
            >
              <FiSearch size={22} />
            </button>
            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className={`p-2 rounded-lg transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 ${isTransparent ? 'max-lg:text-gray-700 max-lg:hover:bg-gray-100 lg:text-white lg:hover:bg-white/10' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
                closeAllDropdowns();
              }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - compact dropdown below nav, never full page */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-gray-200 overflow-hidden bg-white max-lg:rounded-b-2xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="py-3 px-1 max-h-[65vh] overflow-y-auto overscroll-contain"
                style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
              >
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <details className="group">
                        <summary className="flex justify-between items-center text-gray-800 font-medium py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors cursor-pointer list-none touch-manipulation min-h-11 [&::-webkit-details-marker]:hidden">
                          {item.name}
                          <FiChevronDown className="w-5 h-5 shrink-0 text-gray-500 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="pl-4 pb-2 pt-1 space-y-0.5">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block py-3 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors text-[15px] touch-manipulation"
                              onClick={() => {
                                setIsOpen(false);
                                closeAllDropdowns();
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex text-gray-800 font-medium py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors touch-manipulation min-h-11 items-center"
                        onClick={() => {
                          setIsOpen(false);
                          closeAllDropdowns();
                        }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-2 pt-3 pb-5 px-3 border-t border-gray-100">
                  <Link
                    to="/donate"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                    className="block w-full"
                  >
                    <button
                      type="button"
                      className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 py-3.5 rounded-full font-bold shadow-sm transition-colors touch-manipulation min-h-12"
                    >
                      Donate Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Suspense fallback={null}>
        {isSearchOpen && (
          <SearchModal 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
          />
        )}
      </Suspense>
    </motion.nav>
  );
};

export default Navbar;