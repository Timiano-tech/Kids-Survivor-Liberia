import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
import HeaderImage from '../assets/Team_discussion.jpeg';
import DrugPreventionImg from '../assets/Say no to drugs.jpeg';
import RehabilitationImg from '../assets/Drug_Recovered.jpeg';
import YouthEmpowermentImg from '../assets/Girls_Emp.png';
import WidowsSupportImg from '../assets/Women_in_community4.jpeg';
import PeacebuildingImg from '../assets/Community Leaders.jpeg';
import ChildProtectionImg from '../assets/Students3.jpeg';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const projectMeta = [
    { value: 120, suffix: '+', label: 'Communities' },
    { value: 12000, suffix: '+', label: 'Beneficiaries' },
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'prevention', name: 'Prevention' },
    { id: 'rehabilitation', name: 'Rehabilitation' },
    { id: 'education', name: 'Education' },
    { id: 'inclusion', name: 'Inclusion' },
    { id: 'community', name: 'Community' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Drug Prevention Campaigns',
      category: 'prevention',
      description: 'School and community awareness sessions aligned with NADAP 2025–2030.',
      beneficiaries: '10,000+',
      image: DrugPreventionImg,
    },
    {
      id: 2,
      title: 'Psychosocial Rehabilitation',
      category: 'rehabilitation',
      description: 'Counselling, skills training, and family reintegration.',
      beneficiaries: '8,000+',
      image: RehabilitationImg,
    },
    {
      id: 3,
      title: 'Youth & Girls Empowerment',
      category: 'education',
      description: 'Leadership development and life skills aligned to YTEI.',
      beneficiaries: '1,200+',
      image: YouthEmpowermentImg,
    },
    {
      id: 4,
      title: 'Widows & Elderly Support',
      category: 'inclusion',
      description: 'Livelihood groups and social support for widows and vulnerable elderly people.',
      beneficiaries: '500+',
      image: WidowsSupportImg,
    },
    {
      id: 5,
      title: 'Community Peacebuilding',
      category: 'community',
      description: 'Social cohesion work with leaders, councils, and residents.',
      beneficiaries: '120+',
      reachLabel: 'communities engaged',
      image: PeacebuildingImg,
    },
    {
      id: 6,
      title: 'Child Protection & Education',
      category: 'education',
      description: 'Safeguarding, school places, and learning materials for children.',
      beneficiaries: '3,000+',
      image: ChildProtectionImg,
    },
  ];

  const visible = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <SEO
        title="Our Projects — Kids Survivor Liberia Initiatives"
        description="Explore Kids Survivor Liberia projects: drug prevention campaigns, widows outreach, youth empowerment, education support, and community development across Liberia."
        canonical="/projects"
        keywords={[
          'KSL projects Liberia',
          'Liberia youth projects',
          'drug prevention initiatives Liberia',
          'widows support Liberia',
          'education projects Liberia',
          'community development projects',
          'KSL community outreach',
          'NGO projects Monrovia',
        ]}
        breadcrumbs={[{ name: 'Our Projects', url: '/projects' }]}
      />

      <PageHeader
        title="Our Projects"
        description="Current projects run by Kids Survivor Liberia with communities across the country."
        image={HeaderImage}
        meta={projectMeta}
      />

      <main className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-slate-200 pb-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`text-body-sm font-medium transition-colors ${
                  activeFilter === filter.id ? 'text-blue-700' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {filter.name}
                <span
                  className={`mt-2 block h-px w-full transition-colors ${
                    activeFilter === filter.id ? 'bg-blue-700' : 'bg-transparent'
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group"
              >
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <h2 className="text-heading-lg leading-snug text-slate-900">{project.title}</h2>
                  <p className="mt-3 text-body-sm leading-relaxed text-slate-600">{project.description}</p>
                  <p className="mt-4 text-body-sm text-slate-500">
                    <span className="font-semibold text-slate-900 tabular-nums">{project.beneficiaries}</span>{' '}
                    {project.reachLabel || 'people reached'}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <CTABanner
        title="Support a project"
        description="Your support helps KSL continue its drug prevention, youth empowerment, and child protection work across Liberia."
        secondaryLabel="Partner With Us"
      />
    </>
  );
};

export default Projects;
