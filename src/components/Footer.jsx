import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import { COUNTIES } from '../data/counties';
import { showComingSoon } from './ComingSoonModal';

const Footer = () => {

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      dropdown: [
        { name: 'About KSL', path: '/about' },
        { name: 'Transparency & Accountability', path: '/transparency' },
      ]
    },
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
    { name: 'Our Teams', path: '/team' },
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
    { icon: <FiFacebook />, href: 'https://www.facebook.com/profile.php?id=61573527237699', label: 'Facebook' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/company/kids-survivor-liberia/', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: 'https://x.com/Kidssurvivor123', label: 'Twitter' },
    { icon: <FiInstagram />, href: 'https://instagram.com/kids_survivorliberia', label: 'Instagram' },
    { icon: <FiYoutube />, href: 'https://www.youtube.com/@Kidssurvivorliberia_1', label: 'YouTube' },
  ];

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 relative overflow-hidden">
      {/* Subtle background glow */}

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Column 1: Organization Info */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-4">

            {/* Logo and Organization Name */}
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-lg shadow-sm shrink-0">
                <img
                  src="/KSL Logo.png"
                  alt="Kids Survivor Liberia Logo"
                  loading="lazy"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight leading-none">Kids Survivor</h2>
                <p className="text-[11px] text-blue-400 font-bold uppercase tracking-widest mt-1 leading-none">Liberia</p>
              </div>
            </div>

            {/* Mission Statement */}
            <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-sm">
              Transforming lives of Liberia's most vulnerable populations through
              protection, education, and empowerment aligned with national goals.
            </p>

            {/* Donate Button */}
            <div className="pt-4">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_4px_14px_rgba(234,179,8,0.3)] hover:shadow-[0_6px_20px_rgba(234,179,8,0.5)] transform hover:-translate-y-1"
              >
                Support Our Mission
              </Link>
            </div>
          </motion.div>

          {/* Column 2: Navigation Links */}
          <motion.div variants={itemVariants} className="lg:col-span-5 lg:mx-auto">

            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Column 1: Main Pages */}
              <ul className="space-y-3">
                {navItems.slice(0, 4).map((item) => (
                  item.dropdown ? (
                    <li key={item.name} className="space-y-2">
                      <p className="font-medium text-slate-200">{item.name}</p>
                      <ul className="ml-3 space-y-2 border-l border-slate-700 pl-4 mt-2">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.path}
                              className="text-slate-400 hover:text-yellow-400 text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
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
                        className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group font-medium"
                      >
                        <span className="group-hover:translate-x-1 transform transition-transform duration-300">{item.name}</span>
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
                      <p className="font-medium text-slate-200">{item.name}</p>
                      <ul className="ml-3 space-y-2 border-l border-slate-700 pl-4 mt-2">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.path}
                              className="text-slate-400 hover:text-yellow-400 text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
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
                        className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group font-medium"
                      >
                        <span className="group-hover:translate-x-1 transform transition-transform duration-300">{item.name}</span>
                      </Link>
                    </li>
                  )
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Contact & Social */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
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
                    className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white p-2 rounded-lg transition duration-300 transform hover:-translate-y-1"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Counties list */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-10"
        >
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm text-center lg:text-left">
              Counties We Work In (15)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-6 text-sm">
              {COUNTIES.map((county) => {
                const isActive = ['montserrado', 'margibi', 'bong', 'nimba', 'lofa', 'grand-bassa', 'grand-gedeh'].includes(county.id);
                return isActive ? (
                  <Link
                    key={county.id}
                    to={`/counties/${county.id}`}
                    className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-yellow-400 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transform transition-transform duration-300">{county.name}</span>
                  </Link>
                ) : (
                  <button
                    key={county.id}
                    onClick={(e) => { e.preventDefault(); showComingSoon(county.name); }}
                    className="text-slate-500 hover:text-slate-400 transition-colors duration-300 flex items-center group font-medium text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 mr-2 transition-colors group-hover:bg-slate-600"></span>
                    <span>{county.name} (Coming Soon)</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-6">
            <div className="text-center">
              <p className="text-gray-400">
                &copy; {currentYear} Kids Survivor Liberia. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Developed by{' '}
                <a
                  href="https://www.linkedin.com/in/oluwatimileyin-ajayi-140350277"
                  className="hover:text-white transition"
                >
                  Timiano.dev
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;