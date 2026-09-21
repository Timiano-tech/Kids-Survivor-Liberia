import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiSearch, FiInfo, FiPieChart, FiBarChart2, FiBriefcase, FiMapPin, FiCamera, FiHeart, FiUsers } from 'react-icons/fi';
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

  const closeAllDropdowns = () => {
    setDropdownOpen({});
  };

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '#',
      dropdown: [
        {
          name: 'Our Story',
          path: '/about',
          description: 'Learn about our mission, vision, and the children we serve.',
          icon: <FiInfo className="w-5 h-5" />
        },
        {
          name: 'Transparency',
          path: '/transparency',
          description: 'Financial accountability and our commitment to donors.',
          icon: <FiPieChart className="w-5 h-5" />
        },
        {
          name: 'Our Team',
          path: '/team',
          description: 'Meet the passionate professionals behind our mission.',
          icon: <FiUsers className="w-5 h-5" />
        },
      ]
    },
    { name: 'Our Programs', path: '/programs' },
    {
      name: 'Our Impact',
      path: '#',
      dropdown: [
        {
          name: 'Impact Overview',
          path: '/impact',
          description: 'Measuring the change we bring to lives across Liberia.',
          icon: <FiBarChart2 className="w-5 h-5" />
        },
        {
          name: 'Ongoing Projects',
          path: '/projects',
          description: 'Detailed look at our current field initiatives.',
          icon: <FiBriefcase className="w-5 h-5" />
        },
        {
          name: 'Active Counties',
          path: '/counties',
          description: 'Interactive map and data on our 15-county reach.',
          icon: <FiMapPin className="w-5 h-5" />
        },
        {
          name: 'Photo Gallery',
          path: '/gallery',
          description: 'Visual journey through our programs and success stories.',
          icon: <FiCamera className="w-5 h-5" />
        },
      ]
    },
    { name: 'Blog', path: '/blog' },
    {
      name: 'Get Involved',
      path: '#',
      dropdown: [
        {
          name: 'Volunteer',
          path: '/volunteer',
          description: 'Give your time and skills to support our mission.',
          icon: <FiUsers className="w-5 h-5" />
        },
        {
          name: 'Partner With Us',
          path: '/partnership',
          description: 'Institutional collaboration for sustainable impact.',
          icon: <FiHeart className="w-5 h-5" />
        },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <motion.nav
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        isTransparent
          ? 'bg-slate-950 border-b border-slate-800'
          : 'bg-white border-b border-slate-200 shadow-sm'
      }`}
      onClick={closeAllDropdowns}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 min-w-0 shrink-0" onClick={closeAllDropdowns}>
            <img src="/KSL Logo.png" alt="KSL Logo" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
            <span className={`min-w-0 text-base sm:text-lg font-semibold tracking-tight truncate ${isTransparent ? 'text-white' : 'text-slate-900'}`}>
              Kids Survivor{' '}
              <span className={isTransparent ? 'text-yellow-400' : 'text-yellow-600'}>Liberia</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setDropdownOpen(prev => ({ ...prev, [item.name]: true }))}
                    onMouseLeave={() => setDropdownOpen(prev => ({ ...prev, [item.name]: false }))}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3 py-2 text-[13px] xl:text-sm font-semibold transition-colors ${isTransparent ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-blue-700'}`}
                    >
                      <span>{item.name}</span>
                      <FiChevronDown className={`transition-transform duration-200 ${dropdownOpen[item.name] ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen[item.name] && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] bg-white border border-slate-200 p-2 shadow-md z-50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="flex items-start gap-3 p-3 hover:bg-slate-50 transition-colors duration-150"
                              onClick={closeAllDropdowns}
                            >
                              <div className="flex-shrink-0 w-9 h-9 bg-blue-50 text-blue-700 flex items-center justify-center">
                                {subItem.icon}
                              </div>
                              <div className="flex-grow min-w-0">
                                <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-slate-500 leading-relaxed mt-0.5">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`inline-block px-3 py-2 text-[13px] xl:text-sm font-semibold transition-colors ${isTransparent ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-blue-700'}`}
                    onClick={closeAllDropdowns}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`ml-2 flex items-center gap-2 px-3 py-2 transition-colors border ${isTransparent
                ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                : 'border-slate-200 text-slate-500 bg-slate-50 hover:bg-slate-100 hover:text-blue-700'}`}
              aria-label="Search"
            >
              <FiSearch className="w-4 h-4" />
              <span className="text-sm font-medium">Search...</span>
            </button>

            {/* Donate Button */}
            <Link to="/donate" onClick={closeAllDropdowns}>
              <button className="ml-2 bg-yellow-500 hover:bg-yellow-400 px-5 py-2 text-sm font-bold text-slate-900 transition-colors">
                Donate
              </button>
            </Link>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center lg:hidden gap-1">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2.5 transition-colors flex items-center justify-center ${isTransparent ? 'text-white hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}
              aria-label="Search"
            >
              <FiSearch size={22} />
            </button>
            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className={`p-2.5 transition-colors flex items-center justify-center -mr-2 ${isTransparent ? 'text-white hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-slate-200 bg-white overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="py-3 px-1 max-h-[70vh] overflow-y-auto overscroll-contain">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <details className="group">
                        <summary className="flex justify-between items-center text-slate-800 font-medium py-3 px-3 hover:bg-slate-50 transition-colors cursor-pointer list-none touch-manipulation min-h-11 [&::-webkit-details-marker]:hidden">
                          {item.name}
                          <FiChevronDown className="w-5 h-5 shrink-0 text-slate-400 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="pl-3 pb-2 pt-1 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="flex items-start gap-3 py-3 px-3 text-slate-600 hover:text-blue-700 hover:bg-slate-50 transition-colors touch-manipulation"
                              onClick={() => {
                                setIsOpen(false);
                                closeAllDropdowns();
                              }}
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-blue-700 flex items-center justify-center mt-0.5">
                                {React.cloneElement(subItem.icon, { className: 'w-4 h-4' })}
                              </div>
                              <div className="flex-grow min-w-0">
                                <div className="text-[15px] font-semibold text-slate-800">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-slate-500 leading-tight mt-0.5">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex text-slate-800 font-medium py-3 px-3 hover:bg-slate-50 transition-colors touch-manipulation min-h-11 items-center"
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
                <div className="mt-2 pt-3 px-3 border-t border-slate-100">
                  <Link
                    to="/donate"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    <button
                      type="button"
                      className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 py-3.5 font-bold transition-colors"
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