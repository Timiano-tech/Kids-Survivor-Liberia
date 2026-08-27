import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiHeart, FiUsers, FiBook, FiGlobe } from 'react-icons/fi';
import SEO from '../components/SEO';
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
        title="Ongoing Projects & Initiatives in Liberia — KSL"
        description="Discover active community projects by Kids Survivor Liberia in drug abuse prevention, youth empowerment, child rehabilitation, and widows support."
        canonical="/projects"
        keywords={['KSL projects', 'Liberia youth projects', 'drug prevention initiatives Liberia', 'widows support Liberia']}
      />
      <div className="min-h-screen bg-slate-50">
        {/* Main Header Section - Premium Redesign */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[100px] shadow-xl">
          <div className="absolute inset-0 z-0">
            <img
              src={HeaderImage}
              alt="Projects Background"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-slate-950/70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Active Interventions</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                A community based organization dedicated to preventing drug abuse and protecting vulnerable populations through YTEI and NADAP aligned interventions
              </p>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            {/* Vision / Intro - Premium */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Real-World Action</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Strategic Impact</h2>
              <p className="text-slate-600 text-lg leading-relaxed mix-blend-multiply">
                Our projects are strategically designed to align with Liberia's National Drug Action Plan (NADAP) 2025-2030 and the Youth, Technology, Education, and Innovation (YTEI) framework, driving tangible change across communities.
              </p>
            </div>

            {/* Filter - Premium */}
            <div className="mb-16">
              <div className="flex flex-wrap justify-center gap-3">
                {projectCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-6 py-3 rounded-lg text-sm font-bold tracking-wide uppercase transition-all duration-300 shadow-sm ${activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-[0_8px_20px_rgb(37,99,235,0.3)] scale-105'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid - Premium with Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-md transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/50"></div>
                    {/* Category badge on image */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-md border border-white/20">
                        {project.category}
                      </span>
                    </div>
                    {/* Icon overlay on image */}
                    <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white p-3 rounded-lg border border-white/20 shadow-lg">
                      {project.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{project.title}</h3>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">{project.description}</p>

                    {/* Target */}
                    <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <div className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-1">Target Group</div>
                      <div className="text-sm font-bold text-slate-800">{project.target}</div>
                    </div>

                    {/* Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-xs font-bold tracking-wider uppercase text-slate-500 mb-2">
                        <span>Progress</span>
                        <span className="text-blue-600">{project.progress}%</span>
                      </div>
                      <div className="h-2.5 bg-slate-100 rounded-lg overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-blue-600 rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center text-sm pt-4 border-t border-slate-100">
                      <div className="text-slate-600">
                        <span className="font-bold text-lg text-slate-900">{project.beneficiaries}</span> beneficiaries
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <RelatedContent />
      </div>
    </>
  );
};

export default Projects;
