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
    { name: 'Our Team', path: '/team' },
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

  const renderLinks = (list) => (
    list.map((item) => (
      item.dropdown ? (
        <li key={item.name} className="space-y-2.5">
          <p className="text-body-sm font-semibold text-white">{item.name}</p>
          <ul className="space-y-2.5">
            {item.dropdown.map((subItem) => (
              <li key={subItem.name}>
                <Link
                  to={subItem.path}
                  className="text-body-sm text-slate-400 transition-colors duration-200 hover:text-yellow-400"
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
            className="text-body-sm font-medium text-slate-300 transition-colors duration-200 hover:text-yellow-400"
          >
            {item.name}
          </Link>
        </li>
      )
    ))
  );

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Organization Info */}
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/KSL Logo.png"
                alt="Kids Survivor Liberia Logo"
                loading="lazy"
                className="w-11 h-11 object-contain bg-white p-1"
              />
              <div>
                <p className="font-serif text-xl leading-none text-white">Kids Survivor</p>
                <p className="mt-1 text-caption uppercase tracking-[0.2em] text-blue-400">Liberia</p>
              </div>
            </div>

            <p className="max-w-sm text-body-sm leading-relaxed text-slate-400">
              Transforming lives of Liberia's most vulnerable populations through
              protection, education, and empowerment aligned with national goals.
            </p>

            <div className="pt-4">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center bg-yellow-500 px-8 py-3 text-button font-semibold text-slate-900 transition-colors duration-200 hover:bg-yellow-400"
              >
                Support Our Mission
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-5">
            <h3 className="mb-6 text-caption uppercase tracking-[0.18em] text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-3">{renderLinks(navItems.slice(0, 4))}</ul>
              <ul className="space-y-3">{renderLinks(navItems.slice(4))}</ul>
            </div>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 border-b border-slate-800 pb-2 text-caption uppercase tracking-[0.18em] text-white">
              Get in touch
            </h3>

            <ul className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="text-slate-500 mt-1 shrink-0">{contact.icon}</div>
                  <span className="text-body-sm text-slate-300">{contact.content}</span>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="mb-4 text-caption uppercase tracking-[0.18em] text-slate-400">Follow KSL</h4>
              <div className="flex space-x-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="border border-slate-800 p-2.5 text-slate-400 transition-colors duration-200 hover:border-yellow-400 hover:text-yellow-400"
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

        {/* Counties list */}
        <div className="border-t border-slate-800 mt-12 pt-10">
          <h3 className="mb-6 text-caption uppercase tracking-[0.18em] text-white">
            Counties we work in ({COUNTIES.length})
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-body-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {COUNTIES.map((county) => {
              const isActive = ['montserrado', 'margibi', 'bong', 'nimba', 'lofa', 'grand-bassa', 'grand-gedeh'].includes(county.id);
              return isActive ? (
                <Link
                  key={county.id}
                  to={`/counties/${county.id}`}
                  className="flex items-center text-body-sm font-medium text-slate-300 transition-colors duration-200 hover:text-yellow-400"
                >
                  <span className="w-1.5 h-1.5 bg-slate-700 mr-2"></span>
                  {county.name}
                </Link>
              ) : (
                <button
                  key={county.id}
                  onClick={(e) => { e.preventDefault(); showComingSoon(county.name); }}
                  className="flex items-center text-left text-body-sm font-medium text-slate-500 transition-colors duration-200 hover:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 bg-slate-800 mr-2"></span>
                  <span>{county.name} (Coming Soon)</span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-slate-800 pt-6 mt-10">
            <p className="text-center text-body-sm text-slate-400">
              &copy; {currentYear} Kids Survivor Liberia. All rights reserved.
              <span className="mt-1 block text-body-sm text-slate-500">
                Developed by{' '}
                <a
                  href="https://timiano-dev.vercel.app"
                  className="hover:text-white transition"
                >
                  Timiano.dev
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;