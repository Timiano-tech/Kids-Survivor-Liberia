import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    {
      name: 'About Us',
      path: '#',
      dropdown: [
        { name: 'About KSL', path: '/about' },
        { name: 'Our Team', path: '/team' },
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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${lastScrollY > 10 ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50' : 'bg-white border-b border-transparent'
        }`}
      onClick={closeAllDropdowns}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo - responsive */}
          <Link to="/" className="flex items-center gap-3 min-w-0 shrink-0" onClick={closeAllDropdowns}>
            <motion.div whileHover={{ scale: 1.05 }} className="shrink-0 bg-slate-50 p-1.5 rounded-xl border border-slate-100 shadow-sm">
              <img src="/KSL Logo.png" alt="KSL LOGO" className="w-10 h-10 sm:w-11 sm:h-11 object-contain" />
            </motion.div>
            <div className="min-w-0 flex flex-col justify-center">
              <h1 className="font-extrabold text-slate-900 text-base sm:text-lg lg:text-xl truncate tracking-tight leading-none mb-1">Kids Survivor</h1>
              <p className="text-[10px] sm:text-[11px] text-blue-600 font-bold uppercase tracking-widest truncate leading-none">Liberia</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:space-x-8 md:space-x-5">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative group">
                    <button
                      className={`flex items-center space-x-1 text-sm lg:text-base font-semibold transition-colors duration-200 ${dropdownOpen[item.name] ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                        }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.name);
                      }}
                    >
                      <span>{item.name}</span>
                      <FiChevronDown className={`transition-transform duration-300 w-4 h-4 ${dropdownOpen[item.name] ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen[item.name] && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-3 w-56 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl py-3 border border-slate-100 z-50 overflow-hidden"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200"
                              onClick={closeAllDropdowns}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-sm lg:text-base text-slate-600 hover:text-blue-600 font-semibold transition-colors duration-200"
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
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-7 py-2.5 rounded-full text-sm lg:text-base font-bold shadow-[0_4px_14px_rgba(250,204,21,0.4)] hover:shadow-[0_6px_20px_rgba(250,204,21,0.6)] transition-all ml-2"
              >
                Donate
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button - touch-friendly */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden p-2.5 -mr-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors min-w-11 min-h-11 flex items-center justify-center"
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
              className="lg:hidden border-t border-gray-200 overflow-hidden"
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
    </nav>
  );
};

export default Navbar;