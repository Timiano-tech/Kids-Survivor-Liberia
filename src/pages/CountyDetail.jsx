import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiGlobe,
  FiHome,
  FiPhone,
  FiHeart,
  FiCalendar,
  FiArrowRight,
  FiUser
} from 'react-icons/fi';
import { useCountyDetail } from '../hooks/useCountyDetail';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';


const CountyDetail = () => {
  const { county, focusAreas, programs, stats, successStories, featuredActivities } = useCountyDetail();

  if (!county) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wider">
            County Not Found
          </p>
          <h1 className="text-2xl font-semibold text-slate-900 mb-3">
            We could not find this county page.
          </h1>
          <p className="text-slate-600 mb-6">
            Please check the link or return to the full list of counties to explore our work across
            Liberia.
          </p>
          <Link
            to="/counties"
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to all counties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${county.name} Operations — Kids Survivor Liberia`}
        description={`Learn about Kids Survivor Liberia programs, field activities, statistics, and community impact in ${county.name} County, Liberia. Protecting children and empowering youth.`}
        canonical={`/counties/${county.id}`}
        keywords={[
          `KSL ${county.name}`,
          `${county.name} Liberia NGO`,
          `child protection ${county.name}`,
          `drug prevention ${county.name}`,
          `youth development ${county.name}`,
          'Liberia county outreach',
        ]}
        breadcrumbs={[
          { name: 'Counties', url: '/counties' },
          { name: county.name, url: `/counties/${county.id}` },
        ]}
      />
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="County Operations"
          title={county.name}
          description={county.tagline}
          image={county.mapImage}
          alt={`${county.name} flag`}
        >
          <Link
            to="/counties"
            className="mt-8 inline-flex items-center border border-white/40 text-white font-semibold text-sm px-5 py-2.5 transition-colors hover:bg-white/10"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to All Counties
          </Link>
        </PageHeader>

      {/* Main content */}
      <main className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          {/* Overview + key stats */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-16 items-start">
              <div>
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  County Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                  Our work in {county.name}
                </h2>
                <div className="text-slate-600 leading-relaxed">
                  <p className="mb-6">
                    Kids Survivor Liberia (KSL) collaborates with communities, local leaders, and
                    government stakeholders in <strong className="text-slate-900">{county.name}</strong> to prevent drug abuse, strengthen
                    protection systems, and expand opportunities for children, adolescents, youth,
                    widows, and elderly men.
                  </p>
                  <p>
                    Through county-level programming, we contribute to the <span className="text-blue-600 font-semibold">Youth Transformation &amp;
                      Empowerment Initiative (YTEI)</span> and the <span className="text-blue-600 font-semibold">National Anti-Drugs Action Plan (NADAP)
                        2025-2030</span>, ensuring interventions are community driven and sustainable.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 shadow-sm p-8 lg:p-10">
                <h3 className="text-lg font-semibold uppercase tracking-widest text-slate-900 mb-8 pb-4 border-b border-slate-200">
                  At a Glance
                </h3>
                <dl className="space-y-6">
                  {stats.map((item) => (
                    <div key={item.label} className="flex items-start justify-between gap-4">
                      <dt className="text-base font-semibold text-slate-700 leading-tight pt-1">
                        {item.label}
                      </dt>
                      <dd className="text-right">
                        <p className="text-3xl sm:text-4xl font-semibold text-blue-700 tracking-tight">
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
              </div>
            </div>
          </section>

          {/* Featured Field Report */}
          {featuredActivities.length > 0 && (
            <section className="mb-20">
              <SectionHeading
                align="left"
                eyebrow="Latest Field Report"
                title={`Featured Activities in ${county.name}`}
              />

              <div className="mt-10 grid md:grid-cols-2 gap-8">
                {featuredActivities.map((activity, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-sm flex flex-col h-full"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-700 text-white px-3 py-1 text-[10px] font-semibold tracking-widest uppercase">
                          {activity.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center text-xs font-semibold text-slate-500 mb-4 uppercase tracking-widest">
                        <FiCalendar className="mr-2 text-blue-600" />
                        {activity.date}
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                        {activity.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-8 line-clamp-3">
                        {activity.excerpt}
                      </p>
                      <div className="mt-auto pt-6 border-t border-slate-200">
                        <span className="inline-flex items-center text-blue-600 font-semibold text-sm tracking-widest uppercase gap-2">
                          Read Full Update
                          <FiArrowRight />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Focus areas */}
          <section className="mb-20">
            <SectionHeading
              eyebrow="Focus Areas"
              title={`Key Interventions in ${county.name}`}
              description="Activities are adapted with county stakeholders to reflect local realities while maintaining KSL's strategic pillars on prevention, protection, rehabilitation, and empowerment."
            />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <motion.article
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-50 border border-slate-200 p-6 lg:p-8 hover:bg-white hover:border-blue-300 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      <FiGlobe className="w-6 h-6" />
                    </span>
                    <p className="text-slate-700 text-base font-medium leading-relaxed pt-1">{area}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Program highlights */}
          <section className="mb-20">
            <SectionHeading
              eyebrow="County Activities"
              title="Sample Program Activities"
              description={`Below are examples of the types of activities implemented or planned with partners in ${county.name}. Specific activities are tailored with county authorities and community structures.`}
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.article
                  key={program.title}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200 p-8 shadow-sm hover:border-blue-300 transition-colors flex flex-col group"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {program.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Success Stories Section */}
          {successStories.length > 0 && (
            <section className="mb-20">
              <SectionHeading
                eyebrow="Impact Stories"
                title={`Lives Transformed in ${county.name}`}
                description="Direct testimonies from individuals whose lives have been positively impacted by KSL programs in this region."
              />
              <div className="mt-10 space-y-10">
                {successStories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row min-h-[400px]"
                  >
                    <div className="lg:w-[40%] relative min-h-[300px] lg:min-h-full">
                      {story.image ? (
                        <img
                          src={story.image}
                          alt={story.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-blue-700 flex items-center justify-center">
                          <FiUser className="w-24 h-24 text-white/20" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-slate-950/50"></div>
                      <div className="absolute bottom-8 left-8">
                        <h4 className="text-2xl font-semibold text-white mb-1">{story.name}</h4>
                        <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase">{story.category}</p>
                      </div>
                    </div>

                    <div className="lg:w-[60%] p-10 lg:p-16 flex flex-col justify-center">
                      <div className="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-8">
                        {story.icon || <FiHeart className="w-6 h-6" />}
                      </div>
                      <p className="text-xl md:text-2xl text-slate-800 italic leading-relaxed mb-8">
                        "{story.story}"
                      </p>
                      <div className="flex items-center gap-4 text-slate-500">
                        <div className="h-px w-10 bg-blue-300"></div>
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Verified Testimony</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* County Office & Operations */}
          <section className="mb-20">
            <SectionHeading
              eyebrow="County Operations"
              title="Local Office & Coordination"
              description={county.office
                ? `Our operational presence in ${county.name} enables localized, NADAP and YTEI-aligned program delivery.`
                : `${county.name} is part of our planned expansion strategy to strengthen localized program delivery across Liberia.`}
            />

            {county.office ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white border border-slate-200 shadow-sm p-8 lg:p-10 group">

                  <div className="flex items-center gap-5 mb-8 pb-6 border-b border-slate-200">
                    <div className="w-14 h-14 bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      <FiHome className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">{county.office.name}</h3>
                      <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 mt-1 inline-block">Active Office</span>
                    </div>
                  </div>

                  <dl className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-slate-50 border border-slate-200 p-5">
                      <dt className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">Focus Area</dt>
                      <dd className="text-slate-800 font-semibold text-lg">{county.office.focusArea}</dd>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-5">
                      <dt className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">County Coordinator</dt>
                      <dd className="text-slate-800 font-semibold">{county.office.coordinator}</dd>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-5 sm:col-span-2">
                      <dt className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">Contact</dt>
                      <dd className="flex items-center gap-2">
                        <FiPhone className="w-4 h-4 text-blue-600" />
                        <a href={`tel:${county.office.phone}`} className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors">
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
                className="max-w-2xl mx-auto"
              >
                <div className="bg-slate-50 border-2 border-dashed border-slate-300 p-10 text-center">
                  <div className="w-14 h-14 bg-white border border-slate-200 text-slate-400 flex items-center justify-center mx-auto mb-6">
                    <FiHome className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-3">Planned Expansion</h3>
                  <p className="text-slate-500 leading-relaxed max-w-md mx-auto">
                    A dedicated county office for <strong className="text-slate-700">{county.name}</strong> is part of our strategic expansion plan. Programs are currently coordinated through our national headquarters.
                  </p>
                </div>
              </motion.div>
            )}
          </section>

          {/* Back link at bottom for mobile users */}
          <div className="mt-12 mb-4 border-t border-slate-200 pt-8 flex justify-center">
            <Link
              to="/counties"
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 transition-colors"
            >
              <FiArrowLeft className="w-5 h-5 mr-3" />
              Back to all counties
            </Link>
          </div>
        </div>
      </main>
      <CTABanner
        title={`Support our work in ${county.name}`}
        description="Help KSL continue drug prevention, protection, and empowerment programs for children and youth across Liberia."
        primaryLabel="Donate Now"
        secondaryLabel="Explore Other Counties"
        secondaryTo="/counties"
      />
    </div>
  </>
);
};

export default CountyDetail;