import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    { 
      name: 'Our Impact', 
      path: '#',
      dropdown: [
        { name: 'Impact', path: '/impact' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Photo Gallery', path: '/gallery' },
      ]
    },
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
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllDropdowns}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <img src="/KSL Logo.png" alt="KSL LOGO" className="w-12 h-12" />
            </motion.div>
            <div>
              <h1 className="font-bold text-gray-800 text-lg">Kids Survivor</h1>
              <p className="text-xs text-gray-600">Liberia</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
                className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all"
              >
                Donate
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
              closeAllDropdowns();
            }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t py-4"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.dropdown ? (
                  <details 
                    className="group"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <summary className="flex justify-between items-center text-gray-700 font-medium py-2 cursor-pointer hover:text-blue-600 transition-colors">
                      {item.name}
                      <FiChevronDown className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
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
                    className="block text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors"
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
            <Link 
              to="/donate" 
              className="mt-4 block" 
              onClick={() => {
                setIsOpen(false);
                closeAllDropdowns();
              }}
            >
              <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold transition-all">
                Donate Now
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;