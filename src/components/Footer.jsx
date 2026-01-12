import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
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

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/impact" className="text-gray-400 hover:text-white">Our Impact</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white">Our Projects</Link></li> {/* Added */}
              <li><Link to="/gallery" className="text-gray-400 hover:text-white">Photo Gallery</Link></li> {/* Added */}
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-white">Donate</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/volunteer" className="text-gray-400 hover:text-white">Volunteer</Link></li>
              <li><Link to="/partnership" className="text-gray-400 hover:text-white">Partnership</Link></li>
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
                <span>support@ksliberia.org</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiInstagram size={20} />
              </a>
              <a href="https://www.youtube.com/@Kidssurvivorliberia_1" className="text-gray-400 hover:text-white">
                <FiYoutube size={20} />
              </a>
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