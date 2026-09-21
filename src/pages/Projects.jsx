import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiHeart, FiUsers, FiBook, FiGlobe } from 'react-icons/fi';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import RelatedContent from '../components/RelatedContent';
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

  const projectCategories = [
    { id: 'all', name: 'All Pillars' },
    { id: 'prevention', name: 'Drug Prevention' },
    { id: 'rehabilitation', name: 'Rehabilitation' },
    { id: 'education', name: 'Education' },
    { id: 'inclusion', name: 'Social Inclusion' },
    { id: 'community', name: 'Community' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Drug Prevention Campaigns',
      category: 'prevention',
      description: 'School and community awareness aligned with NADAP 2025-2030',
      status: 'ongoing',
      progress: 85,
      beneficiaries: '10,000+',
      icon: <FiShield />,
      target: 'Youth & Adolescents',
      image: DrugPreventionImg
    },
    {
      id: 2,
      title: 'Psychosocial Rehabilitation',
      category: 'rehabilitation',
      description: 'Counseling and reintegration for drug affected individuals',
      status: 'ongoing',
      progress: 70,
      beneficiaries: '8,000+',
      icon: <FiHeart />,
      target: 'Individuals & Families',
      image: RehabilitationImg
    },
    {
      id: 3,
      title: 'Youth & Girls Empowerment',
      category: 'education',
      description: 'Skills training and leadership development aligned with YTEI',
      status: 'ongoing',
      progress: 75,
      beneficiaries: '1,200+',
      icon: <FiUsers />,
      target: 'Youth & Adolescent Girls',
      image: YouthEmpowermentImg
    },
    {
      id: 4,
      title: 'Widows & Elderly Support',
      category: 'inclusion',
      description: 'Economic inclusion and social protection for vulnerable groups',
      status: 'ongoing',
      progress: 65,
      beneficiaries: '500+',
      icon: <FiHeart />,
      target: 'Widows & Elderly',
      image: WidowsSupportImg
    },
    {
      id: 5,
      title: 'Community Peacebuilding',
      category: 'community',
      description: 'Strengthening community resilience and partnerships',
      status: 'ongoing',
      progress: 80,
      beneficiaries: '120+',
      icon: <FiGlobe />,
      target: 'Communities',
      image: PeacebuildingImg
    },
    {
      id: 6,
      title: 'Child Protection & Education',
      category: 'education',
      description: 'Integrated education support and child safeguarding',
      status: 'ongoing',
      progress: 90,
      beneficiaries: '3,000+',
      icon: <FiBook />,
      target: 'Children',
      image: ChildProtectionImg
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="Active Interventions"
          title="Our Projects"
          description="A community based organization dedicated to preventing drug abuse and protecting vulnerable populations through YTEI and NADAP aligned interventions."
          image={HeaderImage}
          alt="KSL projects background"
        />

        <main className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Vision / Intro */}
            <SectionHeading
              eyebrow="Real-World Action"
              title="Strategic Impact"
              description="Our projects are strategically designed to align with Liberia's National Drug Action Plan (NADAP) 2025-2030 and the Youth, Technology, Education, and Innovation (YTEI) framework, driving tangible change across communities."
            />

            {/* Filter */}
            <div className="mt-12 mb-12 flex flex-wrap justify-center gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${activeFilter === category.id
                    ? 'bg-blue-700 text-white'
                    : 'bg-white border border-slate-300 text-slate-600 hover:border-blue-500'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Projects Grid with Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-sm group relative overflow-hidden flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/50"></div>
                    {/* Category badge on image */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    {/* Icon overlay on image */}
                    <div className="absolute bottom-4 right-4 bg-blue-700 text-white p-2.5">
                      {project.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 leading-tight mb-4">{project.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">{project.description}</p>

                    {/* Target */}
                    <div className="mb-6 bg-slate-50 p-4 border border-slate-200">
                      <div className="text-xs font-semibold tracking-wider uppercase text-slate-500 mb-1">Target Group</div>
                      <div className="text-sm font-semibold text-slate-800">{project.target}</div>
                    </div>

                    {/* Progress */}
                    <div className="mb-6 mt-auto">
                      <div className="flex justify-between text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2">
                        <span>Progress</span>
                        <span className="text-blue-600">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-200">
                        <div className="h-full bg-blue-600" style={{ width: `${project.progress}%` }}></div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center text-sm pt-4 border-t border-slate-200">
                      <span className="font-semibold text-lg text-slate-900 mr-1">{project.beneficiaries}</span>
                      <span className="text-slate-600">beneficiaries</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <CTABanner
          title="Support a project today"
          description="Help KSL scale drug prevention, youth empowerment, and community protection initiatives across Liberia."
          primaryLabel="Donate Now"
          secondaryLabel="Partner With Us"
          secondaryTo="/partnership"
        />
        <RelatedContent />
      </div>
    </>
  );
};

export default Projects;