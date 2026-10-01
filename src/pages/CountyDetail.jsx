import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiPhone, FiCalendar } from 'react-icons/fi';
import { useCountyDetail } from '../hooks/useCountyDetail';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import BarList from '../components/visuals/BarList';
import RuleList from '../components/visuals/RuleList';
import PhotoBand from '../components/visuals/PhotoBand';
import AnimatedNumber from '../components/visuals/AnimatedNumber';
import { COUNTIES } from '../data/counties';

const leadingNumber = (value) => {
  const match = String(value).match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};


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
          meta={[
            ...(county.isActive && county.office
              ? [{ value: county.office.coordinator, label: 'County Coordinator' }]
              : [{ value: 'Planned', label: 'Expansion Status' }]),
            { value: stats.length, label: 'Annual Targets' },
            { value: focusAreas.length, label: 'Focus Areas' },
            { value: programs.length, label: 'Activity Types' },
          ]}
        >
          <Link
            to="/counties"
            className="group mt-8 inline-flex items-center gap-2 text-caption uppercase tracking-[0.16em] text-white/80 transition-colors hover:text-white"
          >
            <FiArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Back to all counties
          </Link>
        </PageHeader>

      {/* Main content */}
      <main className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Overview + key stats */}
          <section className="mb-24">
            <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr] lg:gap-16">
              <div>
                <p className="text-caption uppercase tracking-[0.18em] text-blue-700">
                  County Overview
                </p>
                <h2 className="mt-4 text-heading-lg text-slate-900">
                  Our work in {county.name}
                </h2>
                <div className="mt-6 text-body-md leading-relaxed text-slate-600">
                  <p className="mb-5">
                    Kids Survivor Liberia works with communities, local leaders, and government
                    stakeholders in <strong className="text-slate-900">{county.name}</strong> to prevent
                    drug abuse, strengthen protection systems, and expand opportunities for children,
                    adolescents, youth, widows, and elderly men.
                  </p>
                  <p>
                    County programming feeds the{' '}
                    <span className="font-medium text-blue-700">Youth Transformation &amp; Empowerment
                      Initiative (YTEI)</span> and the{' '}
                    <span className="font-medium text-blue-700">National Anti-Drugs Action Plan (NADAP)
                      2025&ndash;2030</span>, keeping interventions community driven.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 px-7 py-9 sm:px-9">
                <h3 className="text-caption uppercase tracking-[0.18em] text-yellow-400">
                  At a glance
                </h3>
                <dl className="mt-7 divide-y divide-slate-800">
                  {stats.map((item) => (
                    <div key={item.label} className="flex items-start justify-between gap-4 py-4">
                      <dt className="pt-1 text-body-sm font-medium leading-tight text-slate-300">
                        {item.label}
                      </dt>
                      <dd className="text-right">
                        <p className="font-serif text-stat-sm text-white">
                          <AnimatedNumber end={leadingNumber(item.value)} unit={String(item.value).replace(/[\d\s]/g, '')} />
                        </p>
                        {item.helper && (
                          <p className="mt-1.5 text-caption uppercase tracking-widest text-slate-500">
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

          {/* Reach At a Glance */}
          {stats.length > 0 && (
            <section className="mb-24 border-t border-slate-200 pt-16">
              <SectionHeading
                eyebrow="Annual Targets"
                title={`Programme reach in ${county.name}`}
                description="Planning targets for the current programme year, set with county stakeholders and tracked through participatory monitoring."
                className="mb-10"
              />
              <div className="max-w-3xl">
                <BarList
                  items={stats.map((item) => ({
                    label: item.label,
                    value: leadingNumber(item.value),
                    suffix: String(item.value).replace(/[\d\s]/g, ''),
                    helper: item.helper,
                  }))}
                />
              </div>
            </section>
          )}

          {/* National Context */}
          <section className="mb-24">
            <div className="bg-slate-950 px-6 py-12 sm:px-12 lg:px-16">
              <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <p className="text-eyebrow text-yellow-400 mb-4">National Context</p>
                  <h3 className="text-heading-lg text-white mb-5">
                    {county.name} within KSL's national footprint
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    KSL works across all {COUNTIES.length} Liberian counties. This page covers the work
                    coordinated locally in <strong className="text-white">{county.name}</strong> alongside
                    national programme frameworks.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-px bg-slate-800">
                  <div className="bg-slate-950 p-7">
                    <p className="font-serif text-stat-sm text-white mb-2">
                      <AnimatedNumber end={COUNTIES.filter((c) => c.isActive).length} />
                    </p>
                    <p className="text-caption uppercase tracking-widest text-yellow-400 mb-2">Active Counties</p>
                    <p className="text-caption text-slate-500 leading-relaxed">Field offices running programmes today.</p>
                  </div>
                  <div className="bg-slate-950 p-7">
                    <p className="font-serif text-stat-sm text-white mb-2">
                      <AnimatedNumber end={COUNTIES.length} />
                    </p>
                    <p className="text-caption uppercase tracking-widest text-yellow-400 mb-2">Total Counties</p>
                    <p className="text-caption text-slate-500 leading-relaxed">Active plus planned expansion.</p>
                  </div>
                  <div className="bg-slate-950 p-7">
                    <p className="font-serif text-stat-sm text-white mb-2">
                      <AnimatedNumber end={focusAreas.length} />
                    </p>
                    <p className="text-caption uppercase tracking-widest text-yellow-400 mb-2">Focus Areas</p>
                    <p className="text-caption text-slate-500 leading-relaxed">Local intervention priorities.</p>
                  </div>
                  <div className="bg-slate-950 p-7">
                    <p className="font-serif text-stat-sm text-white mb-2">
                      <AnimatedNumber end={programs.length} />
                    </p>
                    <p className="text-caption uppercase tracking-widest text-yellow-400 mb-2">Activity Types</p>
                    <p className="text-caption text-slate-500 leading-relaxed">Implemented in this county.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Field Report */}
          {featuredActivities.length > 0 && (
            <section className="mb-24 border-t border-slate-200 pt-16">
              <SectionHeading
                align="left"
                eyebrow="Latest Field Report"
                title={`Featured activities in ${county.name}`}
                className="mb-10"
              />

              <div className="grid gap-10 md:grid-cols-2">
                {featuredActivities.map((activity, idx) => (
                  <motion.article
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.55 }}
                    className="group flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden bg-slate-100">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-0 bottom-0 bg-slate-950/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow-400">
                        {activity.category}
                      </span>
                    </div>
                    <div className="mt-5 flex flex-1 flex-col border-t border-slate-200 pt-5">
                      <div className="mb-3 flex items-center text-caption uppercase tracking-widest text-slate-400">
                        <FiCalendar className="mr-2 text-blue-600" />
                        {activity.date}
                      </div>
                      <h3 className="text-heading-lg line-clamp-2 leading-snug text-slate-900">
                        {activity.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-body-sm leading-relaxed text-slate-600">
                        {activity.excerpt}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          )}

          {/* Focus areas */}
          <section className="mb-24 border-t border-slate-200 pt-16">
            <SectionHeading
              eyebrow="Focus Areas"
              title={`Key interventions in ${county.name}`}
              description="Activities are adapted with county stakeholders to reflect local realities while maintaining KSL's strategic pillars on prevention, protection, rehabilitation, and empowerment."
              className="mb-10"
            />
            <RuleList
              items={focusAreas.map((area, index) => ({
                label: String(index + 1).padStart(2, '0'),
                title: area,
              }))}
            />
          </section>

          {/* Program highlights */}
          <section className="mb-24 border-t border-slate-200 pt-16">
            <SectionHeading
              eyebrow="County Activities"
              title="Sample program activities"
              description={`Examples of the activity types implemented or planned with partners in ${county.name}. Specific activities are tailored with county authorities and community structures.`}
              className="mb-10"
            />
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {programs.map((program, index) => (
                <motion.article
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-start gap-5 border-t border-slate-200 pt-6"
                >
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center bg-slate-950 text-yellow-400 transition-colors group-hover:bg-yellow-500 group-hover:text-slate-900">
                    {program.icon}
                  </span>
                  <div>
                    <h3 className="text-heading-md text-slate-900">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-body-sm leading-relaxed text-slate-600">
                      {program.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Success Stories Section */}
          {successStories.length > 0 && (
            <section className="mb-24 border-t border-slate-200 pt-16">
              <SectionHeading
                eyebrow="Impact Stories"
                title={`Lives transformed in ${county.name}`}
                description="Direct testimonies from individuals positively impacted by KSL programmes in this region."
                className="mb-10"
              />
              <div className="space-y-12">
                {successStories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-[40%_1fr]"
                  >
                    <div className="relative min-h-[280px] overflow-hidden bg-slate-100 lg:min-h-full">
                      {story.image ? (
                        <img
                          src={story.image}
                          alt={story.name}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-slate-900"></div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <h4 className="text-heading-md text-white">{story.name}</h4>
                        <p className="mt-1 text-caption uppercase tracking-[0.18em] text-yellow-400">
                          {story.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center border-t border-slate-200 pt-8 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
                      <p className="text-heading-lg font-normal italic leading-snug text-slate-800">
                        &ldquo;{story.story}&rdquo;
                      </p>
                      <div className="mt-6 flex items-center gap-4 text-slate-500">
                        <div className="h-px w-10 bg-yellow-500"></div>
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Verified Testimony</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* County Office & Operations */}
          <section className="mb-24 border-t border-slate-200 pt-16">
            <SectionHeading
              eyebrow="County Operations"
              title="Local office & coordination"
              description={county.office
                ? `Our operational presence in ${county.name} enables localized, NADAP and YTEI-aligned program delivery.`
                : `${county.name} is part of our planned expansion strategy to strengthen localized program delivery across Liberia.`}
              className="mb-10"
            />

            {county.office ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl bg-slate-950 px-7 py-9 sm:px-10"
              >
                <div className="flex flex-wrap items-center gap-4 border-b border-slate-800 pb-5">
                  <h3 className="text-heading-md text-white">{county.office.name}</h3>
                  <span className="bg-yellow-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                    Active Office
                  </span>
                </div>

                <dl className="mt-6 divide-y divide-slate-800">
                  <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-8">
                    <dt className="text-caption uppercase tracking-widest text-slate-500 sm:w-40">Focus Area</dt>
                    <dd className="text-body-md text-white">{county.office.focusArea}</dd>
                  </div>
                  <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-8">
                    <dt className="text-caption uppercase tracking-widest text-slate-500 sm:w-40">County Coordinator</dt>
                    <dd className="text-body-md text-white">{county.office.coordinator}</dd>
                  </div>
                  <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-8">
                    <dt className="text-caption uppercase tracking-widest text-slate-500 sm:w-40">Contact</dt>
                    <dd className="flex items-center gap-2">
                      <FiPhone className="h-4 w-4 text-yellow-400" />
                      <a href={`tel:${county.office.phone}`} className="text-body-md text-white hover:text-yellow-400 transition-colors">
                        {county.office.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl border-l-2 border-slate-200 pl-8"
              >
                <h3 className="text-heading-md text-slate-900">Planned expansion</h3>
                <p className="mt-3 max-w-xl text-body-sm leading-relaxed text-slate-500">
                  A dedicated county office for <strong className="text-slate-700">{county.name}</strong> is
                  part of our strategic expansion plan. Programs are currently coordinated through our
                  national headquarters.
                </p>
              </motion.div>
            )}
          </section>

          {/* Field Gallery */}
          {featuredActivities.length > 0 && (
            <section className="mb-24 border-t border-slate-200 pt-16">
              <SectionHeading
                eyebrow="Field Gallery"
                title="Recent activity imagery"
                description="Photographic documentation of recent programme activity in this county."
                className="mb-10"
              />
              <PhotoBand
                photos={featuredActivities.map((activity) => ({
                  src: activity.image,
                  caption: activity.title,
                  meta: activity.category,
                }))}
                columns="sm:grid-cols-2 lg:grid-cols-3"
              />
            </section>
          )}

          {/* Back link at bottom for mobile users */}
          <div className="flex justify-center border-t border-slate-200 pt-12">
            <Link
              to="/counties"
              className="group inline-flex items-center gap-2 text-caption uppercase tracking-[0.16em] text-slate-600 transition-colors hover:text-blue-700"
            >
              <FiArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
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