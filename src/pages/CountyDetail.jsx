import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiActivity,
  FiGlobe,
  FiHome,
  FiPhone,
} from 'react-icons/fi';
import { useCountyDetail } from '../hooks/useCountyDetail';
import HeaderImage from '../assets/Talking to children.jpeg';

const CountyDetail = () => {
  const { county, focusAreas, programs, stats, partners } = useCountyDetail();

  if (!county) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">
            County Not Found
          </p>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            We could not find this county page.
          </h1>
          <p className="text-gray-600 mb-6">
            Please check the link or return to the full list of counties to explore our work across
            Liberia.
          </p>
          <Link
            to="/counties"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to all counties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header area for the specific county - Premium */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src={HeaderImage}
            alt="County Detail Background"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">
              County Operations
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl">
              {county.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-2xl border-l-4 border-yellow-400 pl-6">
              {county.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 sm:mt-0"
          >
            <Link
              to="/counties"
              className="inline-flex items-center text-sm font-bold tracking-wide uppercase text-blue-100 hover:text-white border border-blue-400/30 hover:border-yellow-400 rounded-full px-6 py-3 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] group"
            >
              <FiArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
              Back to all counties
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Main content - Premium */}
      <main className="py-20 lg:py-32 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

          {/* Overview + key stats */}
          <section className="mb-24 lg:mb-32">
            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  County Overview
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Our work in {county.name}
                </h2>
                <div className="prose prose-lg text-slate-600 leading-relaxed font-medium">
                  <p className="mb-6">
                    Kids Survivor Liberia (KSL) collaborates with communities, local leaders, and
                    government stakeholders in <strong className="text-slate-900">{county.name}</strong> to prevent drug abuse, strengthen
                    protection systems, and expand opportunities for children, adolescents, youth,
                    widows, and elderly men.
                  </p>
                  <p>
                    Through county-level programming, we contribute to the <span className="text-blue-600 font-bold">Youth Transformation &amp;
                      Empowerment Initiative (YTEI)</span> and the <span className="text-blue-600 font-bold">National Anti-Drugs Action Plan (NADAP)
                        2025-2030</span>, ensuring interventions are community-driven and sustainable.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 lg:p-10 border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-900 mb-8 pb-4 border-b border-slate-100">
                  At a Glance
                </h3>
                <dl className="space-y-6">
                  {stats.map((item) => (
                    <div key={item.label} className="flex items-start justify-between gap-4 group">
                      <dt className="text-base font-semibold text-slate-700 leading-tight pt-1">
                        {item.label}
                      </dt>
                      <dd className="text-right">
                        <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight group-hover:scale-105 transition-transform origin-right">
                          {item.value}
                        </p>
                        {item.helper && (
                          <p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">
                            {item.helper}
                          </p>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </div>
          </section>

          {/* Focus areas - Premium */}
          <section className="mb-24 lg:mb-32">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                Focus Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Key Interventions in {county.name}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Activities are adapted with county stakeholders to reflect local realities while
                maintaining KSL's strategic pillars on prevention, protection, rehabilitation, and
                empowerment.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {focusAreas.map((area, index) => (
                <motion.article
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 lg:p-8 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-transparent hover:border-blue-100 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <FiGlobe className="w-6 h-6" />
                    </span>
                    <p className="text-slate-700 text-base font-medium leading-relaxed pt-1">{area}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Program highlights - Premium */}
          <section className="mb-24 lg:mb-32">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                County Activities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Sample Program Activities
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Below are examples of the types of activities implemented or planned with partners in{' '}
                <strong className="text-slate-900">{county.name}</strong>. Specific activities are tailored with county authorities and community structures.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              {programs.map((program, index) => (
                <motion.article
                  key={program.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-500 pointer-events-none"></div>

                  <div className="flex items-center gap-5 mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-[15px] font-medium leading-relaxed relative z-10">
                    {program.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Photo gallery - Premium */}
          <section className="mb-24 lg:mb-32">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                Photo Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Visual Highlights from {county.name}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {county.images && county.images.length > 0
                  ? `Impactful moments capturing our work and partnerships in ${county.name}.`
                  : `Explore moments from our work in ${county.name}. (Placeholder images waiting to be replaced with real activity photos).`}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {county.images && county.images.length > 0 ? (
                county.images.map((imgSrc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 group"
                  >
                    <img
                      src={imgSrc}
                      alt={`KSL activity in ${county.name} - ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))
              ) : (
                [1, 2, 3, 4, 5, 6].map((slot, index) => (
                  <motion.div
                    key={slot}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-[4/3] rounded-[2rem] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center px-6 text-center group hover:bg-slate-100 transition-colors duration-300 cursor-pointer"
                  >
                    <p className="text-sm font-medium text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                      <span className="block mb-2 font-bold text-slate-400">Photo Slot {slot}</span>
                      Awaiting imagery from recent <strong className="text-slate-600">{county.name}</strong> activities.
                    </p>
                  </motion.div>
                ))
              )}
            </div>
          </section>

          {/* County Office & Operations */}
          <section className="mb-24 lg:mb-32">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-emerald-500 font-semibold tracking-wider uppercase text-sm mb-3 block">
                County Operations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Local Office & Coordination
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {county.office
                  ? `Our operational presence in ${county.name} enables localized, NADAP and YTEI-aligned program delivery.`
                  : `${county.name} is part of our planned expansion strategy to strengthen localized program delivery across Liberia.`}
              </p>
            </div>

            {county.office ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 p-8 lg:p-10 relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                  <div className="relative z-10 flex items-center gap-5 mb-8 pb-6 border-b border-slate-100">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <FiHome className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{county.office.name}</h3>
                      <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100 mt-1 inline-block">Active Office</span>
                    </div>
                  </div>

                  <dl className="relative z-10 grid sm:grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <dt className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">Focus Area</dt>
                      <dd className="text-slate-800 font-semibold text-lg">{county.office.focusArea}</dd>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <dt className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">County Coordinator</dt>
                      <dd className="text-slate-800 font-semibold">{county.office.coordinator}</dd>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 sm:col-span-2">
                      <dt className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">Contact</dt>
                      <dd className="flex items-center gap-2">
                        <FiPhone className="w-4 h-4 text-blue-600" />
                        <a href={`tel:${county.office.phone}`} className="text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors">
                          {county.office.phone}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 p-10 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white text-slate-400 flex items-center justify-center shadow-sm border border-slate-200 mx-auto mb-6">
                    <FiHome className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-3">Planned Expansion</h3>
                  <p className="text-slate-500 leading-relaxed max-w-md mx-auto">
                    A dedicated county office for <strong className="text-slate-700">{county.name}</strong> is part of our strategic expansion plan. Programs are currently coordinated through our national headquarters.
                  </p>
                </div>
              </motion.div>
            )}
          </section>

          {/* Partnerships section - Premium */}
          <section className="mb-16 lg:mb-20">
            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-10 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-blue-50/70 border border-blue-100 rounded-[2rem] p-8 lg:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="flex items-center gap-5 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white text-blue-700 flex items-center justify-center shadow-sm">
                    <FiActivity className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-blue-700 font-bold tracking-widest uppercase text-xs mb-1 block">
                      County Partnerships
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Working Together
                    </h2>
                  </div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 font-medium max-w-2xl">
                  KSL works alongside county-level stakeholders to ensure that interventions are
                  coordinated, inclusive, and sustainable. Partnerships put communities at the center
                  of planning, implementation, and monitoring.
                </p>
                <ul className="space-y-4 text-base font-semibold text-slate-800 relative z-10">
                  {partners.map((partner) => (
                    <li key={partner} className="flex items-start gap-3 bg-white/50 p-4 rounded-xl backdrop-blur-sm border border-white/50">
                      <span className="mt-1 w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span>{partner}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-slate-100 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-center"
              >
                <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">
                  Get in Touch
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Explore Collaboration
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 font-medium">
                  Organisations, community structures, and county authorities interested in
                  collaborating with Kids Survivor Liberia in <strong className="text-slate-900">{county.name}</strong> can connect through our
                  national office for detailed discussions and joint planning.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:support@ksliberia.org"
                    className="flex justify-between items-center w-full px-6 py-4 bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-white hover:text-blue-600 text-slate-700 font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md group"
                  >
                    <span>support@ksliberia.org</span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <Link
                    to="/contact"
                    className="flex justify-between items-center w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg shadow-blue-600/20 group"
                  >
                    <span>Contact Us via Form</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Back link at bottom for mobile users */}
          <div className="mt-8 mb-4 border-t border-slate-100 pt-8 flex justify-center">
            <Link
              to="/counties"
              className="inline-flex items-center text-base font-bold tracking-wide uppercase text-blue-600 hover:text-blue-700 px-6 py-3 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors duration-300 group"
            >
              <FiArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
              Back to all counties
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CountyDetail;
