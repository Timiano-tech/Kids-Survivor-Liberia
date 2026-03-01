import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
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
    { name: 'About Us', path: '/about' },
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
      className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50"
      onClick={closeAllDropdowns}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex justify-between items-center h-14 sm:h-16 min-h-[3.5rem]">
          {/* Logo - responsive */}
          <Link to="/" className="flex items-center gap-2 min-w-0 flex-shrink-0" onClick={closeAllDropdowns}>
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <img src="/KSL Logo.png" alt="KSL LOGO" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </motion.div>
            <div className="min-w-0">
              <h1 className="font-bold text-gray-800 text-base sm:text-lg truncate">Kids Survivor</h1>
              <p className="text-[10px] sm:text-xs text-gray-600 truncate">Liberia</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center lg:space-x-8 md:space-x-5">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button 
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
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
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
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
                className="bg-yellow-400 text-white px-8 py-2 rounded-full font-semibold shadow-md transition-all"
              >
                Donate
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button - touch-friendly */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2.5 -mr-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
              closeAllDropdowns();
            }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - compact dropdown below nav, never full page */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200 overflow-hidden"
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
                        <summary className="flex justify-between items-center text-gray-800 font-medium py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors cursor-pointer list-none touch-manipulation min-h-[44px] [&::-webkit-details-marker]:hidden">
                          {item.name}
                          <FiChevronDown className="w-5 h-5 flex-shrink-0 text-gray-500 group-open:rotate-180 transition-transform" />
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
                        className="block text-gray-800 font-medium py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors touch-manipulation min-h-[44px] flex items-center"
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
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <Link
                    to="/donate"
                    onClick={() => {
                      setIsOpen(false);
                      closeAllDropdowns();
                    }}
                  >
                    <button
                      type="button"
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-xl font-semibold transition-colors touch-manipulation min-h-[48px]"
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