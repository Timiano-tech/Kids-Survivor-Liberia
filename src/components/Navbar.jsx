import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiSearch,
  FiInfo,
  FiPieChart,
  FiBarChart2,
  FiBriefcase,
  FiMapPin,
  FiCamera,
  FiHeart,
  FiUsers,
  FiShield,
  FiBookOpen,
  FiAward,
  FiArrowRight,
} from 'react-icons/fi';
import React, { Suspense } from 'react';

const SearchModal = React.lazy(() => import('./SearchModal'));

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    dropdown: [
      { name: 'Our Story', path: '/about', description: 'Our mission, vision, and the children we serve.', icon: FiInfo },
      { name: 'Our Team', path: '/team', description: 'The professionals behind the mission.', icon: FiUsers },
      { name: 'Transparency', path: '/transparency', description: 'Financial accountability for every donor.', icon: FiPieChart },
    ],
  },
  {
    name: 'Our Programs',
    path: '/programs',
    dropdown: [
      { name: 'All Programs', path: '/programs', description: 'The four pillars of our field work.', icon: FiBookOpen },
      { name: 'Child Protection', path: '/programs/child-protection', description: 'Safeguarding children from abuse and exploitation.', icon: FiShield },
      { name: 'Vulnerable Children', path: '/programs/vulnerable-children', description: 'Emergency care and family reunification.', icon: FiHeart },
      { name: 'Youth Development', path: '/programs/youth-development', description: 'Skills, livelihoods, and leadership.', icon: FiAward },
      { name: "Children's Rights", path: '/programs/childrens-rights', description: 'Advocacy and policy reform for children.', icon: FiInfo },
    ],
  },
  {
    name: 'Our Impact',
    dropdown: [
      { name: 'Impact Overview', path: '/impact', description: 'The change we bring to lives across Liberia.', icon: FiBarChart2 },
      { name: 'Our Projects', path: '/projects', description: 'Current field initiatives, county by county.', icon: FiBriefcase },
      { name: 'Active Counties', path: '/counties', description: 'Our reach across all 15 counties.', icon: FiMapPin },
      { name: 'Photo Gallery', path: '/gallery', description: 'Field photography from every programme.', icon: FiCamera },
    ],
  },
  {
    name: 'Get Involved',
    dropdown: [
      { name: 'Volunteer', path: '/volunteer', description: 'Give your time and skills.', icon: FiUsers },
      { name: 'Partner With Us', path: '/partnership', description: 'Institutional collaboration for lasting impact.', icon: FiHeart },
      { name: 'Blog & Media', path: '/blog', description: 'Stories, field reports, and documentaries.', icon: FiCamera },
    ],
  },
  { name: 'Contact Us', path: '/contact' },
];

const isPathActive = (pathname, item) => {
  if (!item.path) return false;
  if (item.path === '/') return pathname === '/';
  return pathname === item.path || pathname.startsWith(`${item.path}/`);
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !isMenuOpen;

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    closeAll();
  }, [location.pathname, closeAll]);

  useEffect(() => {
    let frame = null;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        const y = window.scrollY;
        setScrolled(y > 20);
        if (y > lastScrollY.current && y > 120 && !isMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY.current = y;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isMenuOpen]);

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

  useEffect(() => {
    if (window.innerWidth >= 1024) setIsMenuOpen(false);
  }, []);

  const linkTone = isTransparent
    ? 'text-slate-200 hover:text-white'
    : 'text-slate-700 hover:text-blue-700';
  const activeTone = isTransparent ? 'text-yellow-400' : 'text-blue-700';

  return (
    <motion.header
      ref={navRef}
      animate={{ y: isVisible || isMenuOpen ? 0 : -140 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        isTransparent ? 'border-b border-slate-800 bg-slate-950' : 'border-b border-slate-200 bg-white shadow-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Brand */}
          <Link
            to="/"
            onClick={closeAll}
            className="flex min-w-0 shrink-0 items-center gap-2.5"
            aria-label="Kids Survivor Liberia, home"
          >
            <img src="/KSL Logo.png" alt="" className="h-8 w-8 object-contain sm:h-10 sm:w-10" />
            <span
              className={`min-w-0 truncate font-serif text-base leading-none sm:text-lg ${
                isTransparent ? 'text-white' : 'text-slate-900'
              }`}
            >
              <span className="sm:hidden">KSL</span>
              <span className="hidden sm:inline">
                Kids Survivor{' '}
                <span className={isTransparent ? 'text-yellow-400' : 'text-yellow-600'}>Liberia</span>
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden h-full items-center lg:flex" aria-label="Primary">
            <ul className="flex h-full items-center gap-0.5 xl:gap-1">
              {NAV_ITEMS.map((item) => {
                const active = isPathActive(location.pathname, item);
                const hasDropdown = Boolean(item.dropdown);
                const isOpen = openDropdown === item.name;
                const alignRight = item.name === 'Get Involved';

                return (
                  <li
                    key={item.name}
                    className="relative flex h-full items-center"
                    onMouseEnter={hasDropdown ? () => setOpenDropdown(item.name) : undefined}
                    onMouseLeave={hasDropdown ? () => setOpenDropdown(null) : undefined}
                  >
                    {hasDropdown ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                          aria-expanded={isOpen}
                          aria-haspopup="true"
                          className={`flex h-full items-center gap-1 px-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm ${
                            isOpen || active ? activeTone : linkTone
                          }`}
                        >
                          {item.name}
                          <FiChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                          />
                        </button>
                        <span
                          className={`pointer-events-none absolute inset-x-2 bottom-0 h-0.5 transition-opacity ${
                            active || isOpen ? 'opacity-100' : 'opacity-0'
                          } ${isTransparent ? 'bg-yellow-400' : 'bg-blue-700'}`}
                          aria-hidden="true"
                        />

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 6 }}
                              transition={{ duration: 0.16, ease: 'easeOut' }}
                              className={`absolute top-full z-50 mt-1 w-[19rem] border border-slate-200 bg-white p-1.5 shadow-xl ${
                                alignRight ? 'right-0' : 'left-0'
                              }`}
                            >
                              {item.dropdown.map((subItem) => {
                                const Icon = subItem.icon;
                                return (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    onClick={closeAll}
                                    className="group flex items-start gap-3 p-3 transition-colors hover:bg-slate-50"
                                  >
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-slate-100 text-blue-700 transition-colors group-hover:bg-slate-950 group-hover:text-yellow-400">
                                      <Icon className="h-4 w-4" aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span className="block text-sm font-semibold text-slate-900">
                                        {subItem.name}
                                      </span>
                                      <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
                                        {subItem.description}
                                      </span>
                                    </span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={closeAll}
                        aria-current={active ? 'page' : undefined}
                        className={`relative flex h-full items-center px-2 text-[13px] font-medium transition-colors xl:px-3 xl:text-sm ${
                          active ? activeTone : linkTone
                        }`}
                      >
                        {item.name}
                        <span
                          className={`pointer-events-none absolute inset-x-2 bottom-0 h-0.5 transition-opacity ${
                            active ? 'opacity-100' : 'opacity-0'
                          } ${isTransparent ? 'bg-yellow-400' : 'bg-blue-700'}`}
                          aria-hidden="true"
                        />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search the site"
              aria-keyshortcuts="Control+K"
              className={`hidden h-10 items-center gap-2 border px-3 transition-colors xl:flex ${
                isTransparent
                  ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-blue-700'
              }`}
            >
              <FiSearch className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm">Search</span>
              <kbd className="ml-1 border border-current/20 px-1 text-[10px] opacity-60">Ctrl K</kbd>
            </button>
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search the site"
              className={`flex h-10 w-10 items-center justify-center transition-colors xl:hidden ${
                isTransparent ? 'text-white hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <FiSearch className="h-5 w-5" aria-hidden="true" />
            </button>

            <Link
              to="/donate"
              onClick={closeAll}
              className="flex h-10 items-center bg-yellow-500 px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-yellow-400"
            >
              Donate
            </Link>
          </div>

          {/* Mobile / tablet actions */}
          <div className="flex items-center gap-1 lg:hidden">
            <Link
              to="/donate"
              onClick={closeAll}
              className="flex h-10 items-center bg-yellow-500 px-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-yellow-400 sm:px-5"
            >
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search the site"
              className={`flex h-10 w-10 items-center justify-center transition-colors ${
                isTransparent ? 'text-white hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <FiSearch className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className={`-mr-2 flex h-10 w-10 items-center justify-center transition-colors ${
                isTransparent ? 'text-white hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
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
                              className={`text-body-md font-medium ${active ? 'text-blue-700' : 'text-slate-900'}`}
                            >
                              {item.name}
                            </span>
                            <span className="flex items-center gap-2 text-slate-400">
                              {item.path && (
                                <Link
                                  to={item.path}
                                  onClick={closeAll}
                                  className="text-caption uppercase tracking-[0.14em] text-blue-700"
                                >
                                  View all                                </Link>
                              )}
                              <FiChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                              />
                            </span>
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
                                <ul className="space-y-1 pb-4">
                                  {item.dropdown.map((subItem) => {
                                    const Icon = subItem.icon;
                                    return (
                                      <li key={subItem.name}>
                                        <Link
                                          to={subItem.path}
                                          onClick={closeAll}
                                          className="flex items-center gap-3 py-3 pl-1 pr-2 transition-colors hover:bg-slate-50"
                                        >
                                          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-slate-100 text-blue-700">
                                            <Icon className="h-4 w-4" aria-hidden="true" />
                                          </span>
                                          <span className="min-w-0 flex-1 text-[15px] font-medium text-slate-800">
                                            {subItem.name}
                                          </span>
                                          <FiArrowRight
                                            className="h-3.5 w-3.5 shrink-0 text-slate-300"
                                            aria-hidden="true"
                                          />
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
                            className={`text-body-md font-medium ${active ? 'text-blue-700' : 'text-slate-900'}`}
                          >
                            {item.name}
                          </span>
                          {active ? (
                            <span className="h-1.5 w-1.5 bg-yellow-500" aria-hidden="true" />
                          ) : (
                            <FiArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300" aria-hidden="true" />
                          )}
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
                  className="flex h-12 flex-1 items-center justify-center bg-yellow-500 px-6 text-button font-semibold text-slate-900 transition-colors hover:bg-yellow-400"
                >
                  Donate Now
                </Link>
                <Link
                  to="/contact"
                  onClick={closeAll}
                  className="flex h-12 flex-1 items-center justify-center border border-slate-300 px-6 text-button font-semibold text-slate-700 transition-colors hover:border-slate-900"
                >
                  Contact Us
                </Link>
              </div>

              <p className="mt-6 text-body-sm text-slate-500">
                Monrovia, Liberia &middot; support@ksliberia.org
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <Suspense fallback={null}>
        {isSearchOpen && <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
      </Suspense>
    </motion.header>
  );
};

export default Navbar;
