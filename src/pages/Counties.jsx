import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiUser, FiShield, FiArrowRight } from 'react-icons/fi';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
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
    <>
      <SEO
        title="Our County Operations — Kids Survivor Liberia Across Liberia"
        description="Kids Survivor Liberia operates across 15 Liberian counties, delivering child protection, drug prevention, and youth development programs in communities that need them most."
        canonical="/counties"
        keywords={[
          'KSL counties Liberia',
          'Liberia county operations',
          'NGO Montserrado Liberia',
          'NGO Grand Bassa Liberia',
          'NGO Nimba Liberia',
          'NGO Bong Liberia',
          'NGO Lofa Liberia',
          'child protection across Liberia',
          'KSL regional programs',
        ]}
        breadcrumbs={[{ name: 'Counties', url: '/counties' }]}
      />
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="Our Presence in Liberia"
          title="County Operations"
          description="Kids Survivor Liberia works with partners, communities, and young people across all 15 counties to prevent drug abuse, protect vulnerable groups, and build resilient communities."
          image={HeaderImage}
          alt="Map of Liberia showing KSL county operations"
        />

      {/* Main content */}
      <main className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filtering & Grid Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Regional Directory</h3>
              <p className="text-slate-500">Explore our specific programs and leadership in each county.</p>
            </div>

            <div className="inline-flex border border-slate-300">
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2.5 text-sm font-semibold transition-colors ${filter === 'all'
                  ? 'bg-blue-700 text-white'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                All Counties
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-5 py-2.5 text-sm font-semibold transition-colors border-l border-slate-300 ${filter === 'active'
                  ? 'bg-blue-700 text-white'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Active Operations
              </button>
            </div>
          </div>

          {/* Counties Grid */}
          <section>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredCounties.map((county, index) => (
                  <motion.article
                    key={county.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group h-full flex flex-col bg-white border border-slate-200 hover:border-blue-300 transition-colors overflow-hidden ${!county.isActive && 'opacity-80'
                      }`}
                  >
                    {/* Visual Header */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      {county.mapImage ? (
                        <img
                          src={county.mapImage}
                          alt={`${county.name} Map`}
                          className="w-full h-full object-cover opacity-70"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                          <FiMapPin className="w-16 h-16" />
                        </div>
                      )}
                      <div className="absolute bottom-0 inset-x-0 h-px bg-slate-200"></div>

                      {/* Status Badge */}
                      <div className="absolute top-6 left-6">
                        {county.isActive ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-700 text-white text-[10px] font-semibold uppercase tracking-[0.1em]">
                            <span className="w-1.5 h-1.5 bg-yellow-400"></span>
                            Active Area
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-semibold uppercase tracking-[0.1em] border border-slate-200">
                            Planned Expansion
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="mb-6">
                        <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-[0.2em] block mb-2">Regional Presence</span>
                        <h4 className="text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">{county.name}</h4>
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
                        {county.tagline}
                      </p>

                      {/* Active specific info */}
                      {county.isActive && county.office && (
                        <div className="space-y-4 mb-8">
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                              <FiUser className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Coordinator</div>
                              <div className="text-slate-700 font-semibold text-xs">{county.office.coordinator}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                              <FiShield className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Focus Area</div>
                              <div className="text-slate-700 font-semibold text-xs line-clamp-1">{county.office.focusArea}</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="mt-auto pt-6 border-t border-slate-200">
                        {county.isActive ? (
                          <Link
                            to={`/counties/${county.id}`}
                            className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 transition-colors"
                          >
                            VIEW OPERATIONS
                            <FiArrowRight className="w-4 h-4" />
                          </Link>
                        ) : (
                          <button
                            onClick={(e) => { e.preventDefault(); showComingSoon(county.name); }}
                            className="w-full text-center text-xs font-semibold text-slate-400 hover:text-blue-600 uppercase tracking-[0.2em] py-3 transition-colors"
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

      <CTABanner
        title="Bring our work to all 15 counties"
        description="Support KSL's expansion of drug prevention and child protection programs across Liberia."
        primaryLabel="Donate Now"
        secondaryLabel="Get Involved"
        secondaryTo="/partnership"
      />
      <ScrollToTopButton />
    </div>
  </>
);
};

export default Counties;