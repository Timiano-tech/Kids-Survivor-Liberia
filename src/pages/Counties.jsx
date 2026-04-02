import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { COUNTIES } from '../data/counties';
import ScrollToTopButton from '../components/ScrollToTop';
import { showComingSoon } from '../components/ComingSoonModal';
import HeaderImage from '../assets/map.jpg';


const Counties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header - Premium Redesign */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src={HeaderImage}
            alt="Counties Background"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">
              Our Presence in Liberia
            </span>
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

      {/* Main content - Premium*/}
      <main className="py-20 lg:py-32 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

          <section className="mb-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border text-center border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-3xl p-8 sm:p-12 text-lg sm:text-xl text-slate-600 leading-relaxed"
            >
              <p className="mb-0 font-medium">
                Each county page highlights key activities, focus areas, and community partnerships
                where KSL contributes to national priorities under the <span className="text-blue-600 font-bold">Youth Transformation &amp; Empowerment Initiative (YTEI)</span> and the <span className="text-blue-600 font-bold">National Anti-Drugs Action Plan (NADAP) 2025–2030</span>.
              </p>
            </motion.div>
          </section>

          {/* Counties grid */}
          <section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {COUNTIES.map((county, index) => (
                <motion.article
                  key={county.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden"
                >
                  {/* Map Image Area */}
                  <div className="relative h-44 overflow-hidden">
                    {county.mapImage ? (
                      <img
                        src={county.mapImage}
                        alt={`${county.name} map`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 flex flex-col items-center justify-center relative">
                        {/* Decorative dots pattern */}
                        <div
                          className="absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
                            backgroundSize: '20px 20px',
                          }}
                        />
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                            <FiMapPin className="w-7 h-7" />
                          </div>
                          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Map Coming Soon</span>
                        </div>
                      </div>
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-500 pointer-events-none"></div>

                    <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                      <div className="flex items-center gap-4">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                            {county.name}
                          </h2>
                          <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">
                            KSL Region
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 text-base mb-8 flex-1 leading-relaxed relative z-10 font-medium">
                      {county.tagline}
                    </p>

                    <div className="mt-auto relative z-10 border-t border-slate-100 pt-6">
                      {['montserrado', 'margibi', 'bong', 'nimba', 'lofa', 'grand-bassa', 'grand-gedeh'].includes(county.id) ? (
                        <Link
                          to={`/counties/${county.id}`}
                          className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-50 text-blue-600 font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          Explore Programs
                          <span className="ml-2 group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </Link>
                      ) : (
                        <button
                          onClick={(e) => { e.preventDefault(); showComingSoon(county.name); }}
                          className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-50 text-slate-400 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-sm border border-slate-100 cursor-not-allowed"
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <ScrollToTopButton />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Counties;

