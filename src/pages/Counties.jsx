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
      {/* Main Header Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl border-b border-slate-100">
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

      {/* Main content - Premium*/}
      <main className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

          <section className="mb-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border text-center border-slate-100 shadow-sm rounded-xl p-8 sm:p-12 text-lg sm:text-xl text-slate-600 leading-relaxed"
            >
              <p className="mb-0 font-medium">
                Each county page highlights key activities, focus areas, and community partnerships
                where KSL contributes to national priorities under the <span className="text-blue-600 font-bold">Youth Transformation &amp; Empowerment Initiative (YTEI)</span> and the <span className="text-blue-600 font-bold">National Anti-Drugs Action Plan (NADAP) 2025–2030</span>.
              </p>
            </motion.div>
          </section>

          {/* Counties grid - Redesigned Premium Layout */}
          <section className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
              {COUNTIES.map((county, index) => {
                const isActive = ['montserrado', 'margibi', 'bong', 'nimba', 'lofa', 'grand-bassa', 'grand-gedeh'].includes(county.id);
                
                return (
                  <motion.article
                    key={county.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-2 h-[380px] flex flex-col ${
                      isActive 
                        ? 'bg-white border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-200' 
                        : 'bg-slate-50 border-slate-100 opacity-90'
                    }`}
                  >
                    {/* Background Map/Flag Watermark */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      {county.mapImage ? (
                        <div className="relative w-full h-full">
                          <img
                            src={county.mapImage}
                            alt={`${county.name} map`}
                            className={`w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-125 ${
                              isActive ? 'opacity-40 grayscale group-hover:grayscale-0' : 'opacity-20 grayscale'
                            }`}
                            loading="lazy"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-b ${
                            isActive 
                              ? 'from-transparent via-white/40 to-white/95' 
                              : 'from-slate-50/50 via-slate-50/80 to-slate-50'
                          }`} />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-slate-100/50" />
                      )}
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 p-6 flex flex-col h-full">
                      {/* Top Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-xl backdrop-blur-md border transition-all duration-300 ${
                          isActive 
                            ? 'bg-blue-600/10 border-blue-600/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' 
                            : 'bg-slate-200/50 border-slate-300/50 text-slate-400'
                        }`}>
                          <FiMapPin className="w-5 h-5" />
                        </div>
                        
                        {isActive && (
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-green-500/10 text-green-600 rounded-full border border-green-500/20">
                            Active
                          </span>
                        )}
                      </div>

                      {/* Main Info */}
                      <div className="mt-auto">
                        <div className="mb-2">
                          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest block mb-1">
                            Liberia Region
                          </span>
                          <h2 className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
                            isActive ? 'text-slate-900 group-hover:text-blue-700' : 'text-slate-400'
                          }`}>
                            {county.name}
                          </h2>
                        </div>

                        <p className={`text-sm leading-relaxed mb-6 font-medium line-clamp-3 transition-opacity duration-300 ${
                          isActive ? 'text-slate-600 opacity-90 group-hover:opacity-100' : 'text-slate-400'
                        }`}>
                          {county.tagline}
                        </p>

                        {/* Action Area */}
                        <div className="pt-4 border-t border-slate-200/50">
                          {isActive ? (
                            <Link
                              to={`/counties/${county.id}`}
                              className="inline-flex items-center gap-2 text-sm font-black text-blue-600 group-hover:text-blue-800 transition-all duration-300"
                            >
                              EXPLORE PROGRAMS
                              <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                →
                              </motion.span>
                            </Link>
                          ) : (
                            <button
                              onClick={(e) => { e.preventDefault(); showComingSoon(county.name); }}
                              className="text-[10px] font-black text-slate-400 uppercase tracking-widest cursor-default"
                            >
                              Expanding Soon
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Hover Effect - Subtle Glow */}
                    {isActive && (
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    )}
                  </motion.article>
                );
              })}
            </div>
            <ScrollToTopButton />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Counties;

