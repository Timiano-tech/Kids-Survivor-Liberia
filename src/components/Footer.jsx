import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/KSL Logo.png" alt="KSL Logo" loading='lazy' className='w-15'/>
              <div>
                <h2 className="font-bold">Kids Survivor</h2>
                <p className="text-sm text-gray-400">Liberia</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming lives of Liberia's most vulnerable children through protection, education, and empowerment.
            </p>
          </div>

          {/* Main Navigation Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.dropdown ? (
                    <>
                      <p className="font-medium text-gray-300 mb-1">{item.name}</p>
                      <ul className="ml-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <Link 
                              to={subItem.path} 
                              className="text-gray-400 hover:text-white text-sm block"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link 
                      to={item.path} 
                      className="text-gray-400 hover:text-white block"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              {/* Additional standalone link */}
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-white block">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMapPin />
                <span>Monrovia, Liberia</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiPhone />
                <span>+231 887 291 599</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMail />
                <span>
                  <a 
                    href="mailto:support@ksliberia.org" 
                    className="hover:text-white transition"
                  >
                    support@ksliberia.org
                  </a>
                </span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <FiFacebook size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/kids-survivor-liberia/" 
                  className="text-gray-400 hover:text-white transition"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href="https://x.com/Kidssurvivor123" 
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiTwitter size={20} />
                </a>
                <a 
                  href="https://instagram.com/kids_survivorliberia" 
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/@Kidssurvivorliberia_1" 
                  className="text-gray-400 hover:text-white transition"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiYoutube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Kids Survivor Liberia. All rights reserved.</p>
          <p className="mt-2">A nationally registered non-profit organization</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;