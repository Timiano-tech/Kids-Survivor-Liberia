import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiSearch,
  FiHeart,
  FiArrowRight,
  FiPhone,
  FiMail,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiYoutube,
} from 'react-icons/fi';
import React, { Suspense } from 'react';

const SearchModal = React.lazy(() => import('./SearchModal'));

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    dropdown: [
      { name: 'Our Story', path: '/about', description: 'Our mission, vision, and the children we serve.' },
      { name: 'Our Team', path: '/team', description: 'The professionals behind the mission.' },
      { name: 'Transparency', path: '/transparency', description: 'Financial accountability for every donor.' },
    ],
  },
  {
    name: 'Our Programs',
    path: '/programs',
    dropdown: [
      { name: 'All Programs', path: '/programs', description: 'The four pillars of our field work.' },
      { name: 'Child Protection', path: '/programs/child-protection', description: 'Safeguarding children from abuse and exploitation.' },
      { name: 'Vulnerable Children', path: '/programs/vulnerable-children', description: 'Emergency care and family reunification.' },
      { name: 'Youth Development', path: '/programs/youth-development', description: 'Skills, livelihoods, and leadership.' },
      { name: "Children's Rights", path: '/programs/childrens-rights', description: 'Advocacy and policy reform for children.' },
    ],
  },
  {
    name: 'Our Impact',
    dropdown: [
      { name: 'Impact Overview', path: '/impact', description: 'The change we bring to lives across Liberia.' },
      { name: 'Our Projects', path: '/projects', description: 'Current field initiatives, county by county.' },
      { name: 'Active Counties', path: '/counties', description: 'Our reach across all 15 counties.' },
      { name: 'Photo Gallery', path: '/gallery', description: 'Field photography from every programme.' },
    ],
  },
  {
    name: 'Get Involved',
    dropdown: [
      { name: 'Volunteer', path: '/volunteer', description: 'Give your time and skills.' },
      { name: 'Partner With Us', path: '/partnership', description: 'Institutional collaboration for lasting impact.' },
      { name: 'Blog & Media', path: '/blog', description: 'Stories, field reports, and documentaries.' },
    ],
  },
  { name: 'Contact Us', path: '/contact' },
];

const UTILITY_LINKS = [
  { name: 'Volunteer', path: '/volunteer' },
  { name: 'Partner With Us', path: '/partnership' },
  { name: 'Transparency', path: '/transparency' },
];

const SOCIAL_LINKS = [
  { icon: FiFacebook, href: 'https://www.facebook.com/profile.php?id=61573527237699', label: 'Facebook' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/company/kids-survivor-liberia/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://x.com/Kidssurvivor123', label: 'Twitter' },
  { icon: FiInstagram, href: 'https://instagram.com/kids_survivorliberia', label: 'Instagram' },
  { icon: FiYoutube, href: 'https://www.youtube.com/@Kidssurvivorliberia_1', label: 'YouTube' },
];

const isPathActive = (pathname, item) => {
  const paths = item.dropdown ? item.dropdown.map((sub) => sub.path) : [item.path];
  return paths.some((path) =>
    path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(`${path}/`)
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    closeAll();
  }, [location.pathname, closeAll]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
        return;
      }
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!openDropdown) return undefined;
    const handlePointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [openDropdown]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Utility bar: contact details and secondary links, scrolls away with the page */}
      <div className="hidden bg-slate-950 text-slate-300 lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="tel:+231887291599" className="flex items-center gap-2 transition-colors hover:text-white">
              <FiPhone className="h-3.5 w-3.5" aria-hidden="true" />
              +231 887 291 599
            </a>
            <a href="mailto:support@ksliberia.org" className="flex items-center gap-2 transition-colors hover:text-white">
              <FiMail className="h-3.5 w-3.5" aria-hidden="true" />
              support@ksliberia.org
            </a>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-5">
              {UTILITY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <span className="h-4 w-px bg-slate-700" aria-hidden="true" />
            <ul className="flex items-center gap-3.5">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="block transition-colors hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <header
        ref={navRef}
        className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-300 ${
          scrolled ? 'border-slate-200 shadow-[0_2px_12px_rgba(15,23,42,0.08)]' : 'border-slate-200'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
            {/* Brand */}
            <Link
              to="/"
              onClick={closeAll}
              className="flex min-w-0 items-center gap-3"
              aria-label="Kids Survivor Liberia, home"
            >
              <img src="/KSL Logo.png" alt="" className="h-10 w-10 shrink-0 object-contain lg:h-12 lg:w-12" />
              <span className="min-w-0 leading-none">
                <span className="block truncate font-serif text-base font-semibold text-slate-900 sm:text-lg">
                  <span className="sm:hidden">KSL</span>
                  <span className="hidden sm:inline">Kids Survivor Liberia</span>
                </span>
                <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:block">
                  Protect &middot; Educate &middot; Empower
                </span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden h-full items-center lg:flex" aria-label="Primary">
              <ul className="flex h-full items-center">
                {NAV_ITEMS.map((item) => {
                  const active = isPathActive(location.pathname, item);
                  const hasDropdown = Boolean(item.dropdown);
                  const isOpen = openDropdown === item.name;
                  const alignRight = item.name === 'Get Involved';
                  const itemTone = active || isOpen ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700';

                  return (
                    <li
                      key={item.name}
                      className="relative flex h-full items-center"
                      onMouseEnter={hasDropdown ? () => setOpenDropdown(item.name) : undefined}
                      onMouseLeave={hasDropdown ? () => setOpenDropdown(null) : undefined}
                    >
                      {hasDropdown ? (
                        <button
                          type="button"
                          onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                          aria-expanded={isOpen}
                          aria-haspopup="true"
                          className={`flex h-full items-center gap-1 px-2.5 text-sm font-semibold transition-colors xl:px-3.5 ${itemTone}`}
                        >
                          {item.name}
                          <FiChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={closeAll}
                          aria-current={active ? 'page' : undefined}
                          className={`flex h-full items-center px-2.5 text-sm font-semibold transition-colors xl:px-3.5 ${itemTone}`}
                        >
                          {item.name}
                        </Link>
                      )}

                      <span
                        className={`pointer-events-none absolute inset-x-2.5 bottom-0 h-[3px] bg-blue-700 transition-transform duration-200 xl:inset-x-3.5 ${
                          active ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        aria-hidden="true"
                      />

                      {hasDropdown && (
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              transition={{ duration: 0.15, ease: 'easeOut' }}
                              className={`absolute top-full z-50 w-72 border border-t-2 border-slate-200 border-t-blue-700 bg-white py-2 shadow-lg ${
                                alignRight ? 'right-0' : 'left-0'
                              }`}
                            >
                              <ul>
                                {item.dropdown.map((subItem) => {
                                  const subActive = location.pathname === subItem.path;
                                  return (
                                    <li key={subItem.name}>
                                      <Link
                                        to={subItem.path}
                                        onClick={closeAll}
                                        aria-current={subActive ? 'page' : undefined}
                                        className="block border-l-2 border-transparent px-5 py-2.5 transition-colors hover:border-blue-700 hover:bg-slate-50"
                                      >
                                        <span
                                          className={`block text-sm font-semibold ${
                                            subActive ? 'text-blue-700' : 'text-slate-900'
                                          }`}
                                        >
                                          {subItem.name}
                                        </span>
                                        <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
                                          {subItem.description}
                                        </span>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-1 lg:gap-3">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search the site"
                aria-keyshortcuts="Control+K"
                className="flex h-10 w-10 items-center justify-center text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-700"
              >
                <FiSearch className="h-5 w-5" aria-hidden="true" />
              </button>

              <Link
                to="/donate"
                onClick={closeAll}
                className="flex h-10 items-center gap-2 bg-yellow-500 px-4 text-sm font-bold text-slate-900 transition-colors hover:bg-yellow-400 sm:px-6 lg:h-11"
              >
                <FiHeart className="hidden h-4 w-4 sm:block" aria-hidden="true" />
                Donate
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                className="-mr-2 flex h-10 w-10 items-center justify-center text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
              >
                {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / tablet panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
            >
              <nav
                className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain px-4 pb-8 pt-2 sm:px-6"
                aria-label="Mobile"
              >
                <ul className="divide-y divide-slate-100">
                  {NAV_ITEMS.map((item) => {
                    const active = isPathActive(location.pathname, item);
                    const hasDropdown = Boolean(item.dropdown);
                    const isOpen = openDropdown === item.name;

                    return (
                      <li key={item.name}>
                        {hasDropdown ? (
                          <>
                            <button
                              type="button"
                              onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                              aria-expanded={isOpen}
                              className="flex min-h-14 w-full items-center justify-between gap-3 py-3 text-left"
                            >
                              <span
                                className={`text-body-md font-semibold ${active ? 'text-blue-700' : 'text-slate-900'}`}
                              >
                                {item.name}
                              </span>
                              <FiChevronDown
                                className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                              />
                            </button>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                                  className="overflow-hidden"
                                >
                                  <ul className="mb-4 border-l-2 border-slate-200">
                                    {item.dropdown.map((subItem) => {
                                      const subActive = location.pathname === subItem.path;
                                      return (
                                        <li key={subItem.name}>
                                          <Link
                                            to={subItem.path}
                                            onClick={closeAll}
                                            aria-current={subActive ? 'page' : undefined}
                                            className={`-ml-0.5 flex items-center justify-between gap-3 border-l-2 py-2.5 pl-4 pr-2 text-[15px] transition-colors ${
                                              subActive
                                                ? 'border-blue-700 font-semibold text-blue-700'
                                                : 'border-transparent text-slate-700 hover:text-blue-700'
                                            }`}
                                          >
                                            {subItem.name}
                                            <FiArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300" aria-hidden="true" />
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={closeAll}
                            aria-current={active ? 'page' : undefined}
                            className="flex min-h-14 items-center justify-between gap-3 py-3"
                          >
                            <span
                              className={`text-body-md font-semibold ${active ? 'text-blue-700' : 'text-slate-900'}`}
                            >
                              {item.name}
                            </span>
                            <FiArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300" aria-hidden="true" />
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/donate"
                    onClick={closeAll}
                    className="flex h-12 items-center justify-center sm:flex-1 gap-2 bg-yellow-500 px-6 text-button font-bold text-slate-900 transition-colors hover:bg-yellow-400"
                  >
                    <FiHeart className="h-4 w-4" aria-hidden="true" />
                    Donate Now
                  </Link>
                  <Link
                    to="/volunteer"
                    onClick={closeAll}
                    className="flex h-12 items-center justify-center sm:flex-1 border border-slate-300 px-6 text-button font-semibold text-slate-700 transition-colors hover:border-slate-900"
                  >
                    Volunteer
                  </Link>
                </div>

                <div className="mt-6 space-y-2 border-t border-slate-100 pt-6 text-body-sm text-slate-600">
                  <a href="tel:+231887291599" className="flex items-center gap-2 hover:text-blue-700">
                    <FiPhone className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    +231 887 291 599
                  </a>
                  <a href="mailto:support@ksliberia.org" className="flex items-center gap-2 hover:text-blue-700">
                    <FiMail className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    support@ksliberia.org
                  </a>
                </div>

                <ul className="mt-5 flex items-center gap-2">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:border-blue-700 hover:text-blue-700"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <Suspense fallback={null}>
          {isSearchOpen && <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
        </Suspense>
      </header>
    </>
  );
};

export default Navbar;
