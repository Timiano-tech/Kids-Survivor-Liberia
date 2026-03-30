import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      } max-lg:top-2 max-lg:left-2 max-lg:right-2 max-lg:rounded-2xl lg:top-0 lg:left-0 lg:right-0 lg:w-full`}
      onClick={closeAllDropdowns}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo - responsive */}
          <Link to="/" className="flex items-center gap-2 min-w-0 shrink-0" onClick={closeAllDropdowns}>
            <motion.div whileHover={{ scale: 1.05 }} className="shrink-0">
              <img src="/KSL Logo.png" alt="KSL LOGO" className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain" />
            </motion.div>
            <div className="min-w-0">
              <h1 className={`font-bold text-sm sm:text-base md:text-lg truncate tracking-tight transition-colors ${isTransparent ? 'max-lg:text-gray-800 lg:text-white' : 'text-gray-800'}`}>Kids Survivor</h1>
              <p className={`text-[9px] sm:text-[10px] md:text-xs truncate transition-colors ${isTransparent ? 'max-lg:text-yellow-600 lg:text-yellow-400' : 'text-gray-600'}`}>Liberia</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:space-x-5 xl:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button 
                      className={`flex items-center space-x-1 font-medium text-sm xl:text-base transition-colors ${isTransparent ? 'text-white hover:text-yellow-400' : 'text-gray-700 hover:text-blue-600'}`}
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
                            className="block px-4 py-2 text-sm xl:text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
                    className={`font-medium text-sm xl:text-base transition-colors ${isTransparent ? 'text-white hover:text-yellow-400' : 'text-gray-700 hover:text-blue-600'}`}
                    onClick={closeAllDropdowns}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Donate Button */}
            <Link to="/donate" onClick={closeAllDropdowns}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-white px-6 py-2 rounded-full font-medium shadow-md transition-all text-sm xl:text-base"
              >
                Donate
              </motion.button>
            </Link>
          </div>

          {/* Mobile Right Actions (Hamburger only) */}
          <div className="flex items-center lg:hidden">
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
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3.5 rounded-xl font-bold shadow-sm transition-colors touch-manipulation min-h-12"
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
    </motion.nav>
  );
};

export default Navbar;