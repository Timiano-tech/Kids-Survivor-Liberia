import { Link } from 'react-router-dom';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube, 
  FiLinkedin 
} from 'react-icons/fi';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Programs', path: '/programs' },
    { 
      name: 'Our Impact', 
      dropdown: [
        { name: 'Impact', path: '/impact' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Photo Gallery', path: '/gallery' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { 
      name: 'Get Involved', 
      dropdown: [
        { name: 'Volunteer', path: '/volunteer' },
        { name: 'Partnership', path: '/partnership' },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  const contactInfo = [
    { icon: <FiMapPin />, content: 'Monrovia, Liberia' },
    { icon: <FiPhone />, content: '+231 887 291 599' },
    { 
      icon: <FiMail />, 
      content: (
        <a href="mailto:support@ksliberia.org" className="hover:text-white transition">
          support@ksliberia.org
        </a>
      )
    },
  ];

  const socialMedia = [
    { icon: <FiFacebook />, href: '#', label: 'Facebook' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/company/kids-survivor-liberia/', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://x.com/Kidssurvivor123', label: 'Twitter' },
    { icon: <FiInstagram />, href: 'https://instagram.com/kids_survivorliberia', label: 'Instagram' },
    { icon: <FiYoutube />, href: 'https://www.youtube.com/@Kidssurvivorliberia_1', label: 'YouTube' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1: Organization Info */}
          <div className="space-y-6">
            {/* Logo and Organization Name */}
            <div className="flex items-center space-x-3">
              <img 
                src="/KSL Logo.png" 
                alt="Kids Survivor Liberia Logo" 
                loading="lazy" 
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-xl font-bold tracking-tight">Kids Survivor</h2>
                <p className="text-sm text-gray-400 mt-1">Liberia</p>
              </div>
            </div>

            {/* Mission Statement */}
            <p className="text-gray-300 leading-relaxed">
              Transforming lives of Liberia's most vulnerable children through 
              protection, education, and empowerment.
            </p>

            {/* Donate Button */}
            <div className="pt-2">
              <Link 
                to="/donate" 
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1"
              >
                Support Our Mission
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Column 1: Main Pages */}
              <ul className="space-y-3">
                {navItems.slice(0, 4).map((item) => (
                  item.dropdown ? (
                    <li key={item.name} className="space-y-2">
                      <p className="font-medium text-gray-300">{item.name}</p>
                      <ul className="ml-3 space-y-1 border-l border-gray-700 pl-3">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <Link 
                              to={subItem.path} 
                              className="text-gray-400 hover:text-white text-sm transition hover:pl-1"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <Link 
                        to={item.path} 
                        className="text-gray-400 hover:text-white transition flex items-center group"
                      >
                        <span className="group-hover:pl-1 transition-all">{item.name}</span>
                      </Link>
                    </li>
                  )
                ))}
              </ul>

              {/* Column 2: Additional Pages */}
              <ul className="space-y-3">
                {navItems.slice(4).map((item) => (
                  item.dropdown ? (
                    <li key={item.name} className="space-y-2">
                      <p className="font-medium text-gray-300">{item.name}</p>
                      <ul className="ml-3 space-y-1 border-l border-gray-700 pl-3">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <Link 
                              to={subItem.path} 
                              className="text-gray-400 hover:text-white text-sm transition hover:pl-1"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <Link 
                        to={item.path} 
                        className="text-gray-400 hover:text-white transition flex items-center group"
                      >
                        <span className="group-hover:pl-1 transition-all">{item.name}</span>
                      </Link>
                    </li>
                  )
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">Get In Touch</h3>
            
            {/* Contact Information */}
            <ul className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="text-gray-400 mt-1 shrink-0">
                    {contact.icon}
                  </div>
                  <span className="text-gray-300">
                    {contact.content}
                  </span>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-2 rounded-full transition duration-300 transform hover:-translate-y-1"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className=" space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400">
                &copy; {currentYear} Kids Survivor Liberia. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                A nationally registered non-profit organization
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;