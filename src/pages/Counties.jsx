import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
import SectionHeading from '../components/SectionHeading';
import StatBand from '../components/visuals/StatBand';
import CountyCoverage from '../components/visuals/CountyCoverage';
import PhotoBand from '../components/visuals/PhotoBand';
import { COUNTIES } from '../data/counties';
import HeaderImage from '../assets/map.jpg';
import FieldMonrovia from '../assets/Community_Outreach.jpeg';
import FieldBong from '../assets/Community_Speech3.jpeg';
import FieldNimba from '../assets/Youth_Community_Outreach.jpeg';
import FieldBassa from '../assets/Women_in_community4.jpeg';
import FieldLofa from '../assets/Community Leaders.jpeg';
import FieldGedeh from '../assets/Zwedru_City.jpeg';

const Counties = () => {
  const [filter, setFilter] = useState('all'); // 'all' or 'active'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCounties = filter === 'active'
    ? COUNTIES.filter(c => c.isActive)
    : COUNTIES;

  const activeCounties = COUNTIES.filter(c => c.isActive);
  const plannedCounties = COUNTIES.filter(c => !c.isActive);

  const coverageStats = [
    { value: activeCounties.length, label: 'Active counties', description: 'Counties with a KSL office running programs.' },
    { value: plannedCounties.length, label: 'Planned counties', description: 'Counties where we plan to start work.' },
    { value: COUNTIES.length, label: 'Counties in Liberia', description: 'Our long-term aim is to work in every county.' },
  ];

  const fieldPhotos = [
    { src: FieldMonrovia, caption: 'Monrovia (Sinkor) office', meta: 'Montserrado' },
    { src: FieldBong, caption: 'Gbarnga city operations', meta: 'Bong' },
    { src: FieldNimba, caption: 'Sanniquellie youth engagement', meta: 'Nimba' },
    { src: FieldBassa, caption: 'Buchanan inclusion programs', meta: 'Grand Bassa' },
    { src: FieldLofa, caption: 'Voinjama partnerships', meta: 'Lofa' },
    { src: FieldGedeh, caption: 'Zwedru community outreach', meta: 'Grand Gedeh' },
  ];

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
          title="Where We Work"
          description="Kids Survivor Liberia works with local partners, communities, and young people in counties across Liberia to prevent drug abuse and protect vulnerable children and families."
          image={HeaderImage}
        />

      {/* Main content */}
      <main className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Coverage Overview */}
          <section>
            <SectionHeading
              title="Our County Offices"
              description="We currently have offices in seven counties and plan to expand to the remaining eight."
              className="mb-12"
            />
            <StatBand stats={coverageStats} tone="light" divided className="mb-16" />
            <CountyCoverage />
          </section>

          {/* Filtering & Grid Header */}
          <div className="mt-24 flex flex-col gap-6 border-t border-slate-200 pt-16 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-heading-lg text-slate-900">All Counties</h3>
              <p className="mt-3 max-w-md text-body-sm text-slate-500">
                Find out about our programs and coordinators in each county.
              </p>
            </div>

            <div className="flex gap-x-8 border-b border-slate-200">
              {[
                { id: 'all', label: 'All Counties' },
                { id: 'active', label: 'Active Counties' },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setFilter(option.id)}
                  className={`-mb-px border-b-2 pb-3 text-body-sm font-medium transition-colors ${
                    filter === option.id
                      ? 'border-blue-700 text-slate-900'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Counties Grid */}
          <section>
            <motion.div
              layout
              className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
                    className="group flex h-full flex-col"
                  >
                    {/* Visual Header */}
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      {county.mapImage ? (
                        <img
                          src={county.mapImage}
                          alt={`${county.name} Map`}
                          className="h-full w-full object-cover opacity-75 grayscale transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-300">
                          <FiMapPin className="h-10 w-10" />
                        </div>
                      )}

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        {county.isActive ? (
                          <span className="inline-flex items-center gap-1.5 bg-slate-950/85 px-2.5 py-1 text-caption font-medium text-white">
                            <span className="h-1.5 w-1.5 bg-sky-400" />
                            Active
                          </span>
                        ) : (
                          <span className="bg-slate-950/85 px-2.5 py-1 text-caption font-medium text-slate-300">
                            Planned
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="mt-5 flex flex-1 flex-col border-t border-slate-200 pt-5">
                      <h4 className="text-heading-md text-slate-900">{county.name}</h4>

                      <p className="mt-3 line-clamp-2 text-body-sm leading-relaxed text-slate-500">
                        {county.tagline}
                      </p>

                      {/* Active specific info */}
                      {county.isActive && county.office && (
                        <dl className="mt-6 space-y-3">
                          <div className="flex items-baseline gap-3">
                            <dt className="w-24 shrink-0 text-caption text-slate-500">
                              Coordinator
                            </dt>
                            <dd className="text-body-sm font-medium text-slate-800">{county.office.coordinator}</dd>
                          </div>
                          <div className="flex items-baseline gap-3">
                            <dt className="w-24 shrink-0 text-caption text-slate-500">
                              Focus
                            </dt>
                            <dd className="line-clamp-1 text-body-sm font-medium text-slate-800">{county.office.focusArea}</dd>
                          </div>
                        </dl>
                      )}

                      {/* Action */}
                      <div className="mt-auto pt-6">
                        {county.isActive ? (
                          <Link
                            to={`/counties/${county.id}`}
                            className="group/link inline-flex items-center gap-1.5 text-body-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
                          >
                            Learn more
                            <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        ) : (
                          <span className="text-body-sm text-slate-400">
                            Launching Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* Field Photography */}
          <section className="mt-24 border-t border-slate-200 pt-16">
            <SectionHeading
              title="Photos From Our Counties"
              description="Our county teams work with local coordinators, partners, and community leaders."
              className="mb-12"
            />
            <PhotoBand photos={fieldPhotos} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </section>
        </div>
      </main>

      <CTABanner
        title="Help us reach more counties"
        description="Support KSL's expansion of drug prevention and child protection programs across Liberia."
        primaryLabel="Donate Now"
        secondaryLabel="Get Involved"
        secondaryTo="/partnership"
      />
    </div>
  </>
);
};

export default Counties;