import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiHome, FiUser, FiShield, FiArrowRight, FiPhone } from 'react-icons/fi';
import { COUNTIES } from '../data/counties';
import ScrollToTopButton from '../components/ScrollToTop';
import { showComingSoon } from '../components/ComingSoonModal';
import HeaderImage from '../assets/map.jpg';

const Counties = () => {
  const [filter, setFilter] = useState('all'); // 'all' or 'active'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCounties = filter === 'active'
    ? COUNTIES.filter(c => c.isActive)
    : COUNTIES;

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[100px] shadow-xl border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src={HeaderImage}
            alt="Media & Resources"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Our Presence in Liberia</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              County Operations
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              Kids Survivor Liberia works with partners, communities, and young people across all 15
              counties to prevent drug abuse, protect vulnerable groups, and build resilient communities.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main content */}
      <main className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Filtering & Grid Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Regional Directory</h3>
              <p className="text-slate-500 font-medium">Explore our specific programs and leadership in each county.</p>
            </div>

            <div className="flex p-1 bg-slate-200/50 rounded-xl w-fit">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${filter === 'all'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                All Counties
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${filter === 'active'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                Active Operations
              </button>
            </div>
          </div>

          {/* Counties Grid - Premium Card Arrangement */}
          <section className="relative">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredCounties.map((county, index) => (
                  <motion.article
                    key={county.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group h-full flex flex-col bg-white rounded-xl border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 ${!county.isActive && 'grayscale-[0.5] opacity-80'
                      }`}
                  >
                    {/* Visual Header */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      {county.mapImage ? (
                        <img
                          src={county.mapImage}
                          alt={`${county.name} Map`}
                          className="w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-200">
                          <FiMapPin className="w-16 h-16" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>

                      {/* Status Badge */}
                      <div className="absolute top-6 left-6">
                        {county.isActive ? (
                          <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-600 text-[10px] font-black uppercase tracking-[0.1em] rounded-lg border border-green-200 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-lg animate-pulse"></span>
                            Active Area
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.1em] rounded-lg border border-slate-200">
                            Planned Expansion
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="mb-6">
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] block mb-2">Regional Presence</span>
                        <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors duration-300">{county.name}</h4>
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium line-clamp-2">
                        {county.tagline}
                      </p>

                      {/* Active specific info */}
                      {county.isActive && county.office && (
                        <div className="space-y-4 mb-8">
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                              <FiUser className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Coordinator</div>
                              <div className="text-slate-700 font-bold text-xs">{county.office.coordinator}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0">
                              <FiShield className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Focus Area</div>
                              <div className="text-slate-700 font-bold text-xs line-clamp-1">{county.office.focusArea}</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="mt-auto pt-6 border-t border-slate-50">
                        {county.isActive ? (
                          <Link
                            to={`/counties/${county.id}`}
                            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30"
                          >
                            VIEW OPERATIONS
                            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        ) : (
                          <button
                            onClick={(e) => { e.preventDefault(); showComingSoon(county.name); }}
                            className="w-full text-center text-[10px] font-black text-slate-400 hover:text-blue-500 uppercase tracking-[0.2em] py-4 transition-colors"
                          >
                            Notify Me of Launch
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </div>
      </main>

      <ScrollToTopButton />
    </div>
  );
};

export default Counties;


