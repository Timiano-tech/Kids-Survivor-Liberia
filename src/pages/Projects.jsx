import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiHeart, FiUsers, FiBook, FiGlobe } from 'react-icons/fi';
import HeaderImage from '../assets/Team_discussion.jpeg';

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
      beneficiaries: '1,200+',
      icon: <FiShield />,
      target: 'Youth & Adolescents'
    },
    {
      id: 2,
      title: 'Psychosocial Rehabilitation',
      category: 'rehabilitation',
      description: 'Counseling and reintegration for drug-affected individuals',
      status: 'ongoing',
      progress: 70,
      beneficiaries: '80+',
      icon: <FiHeart />,
      target: 'Individuals & Families'
    },
    {
      id: 3,
      title: 'Youth & Girls Empowerment',
      category: 'education',
      description: 'Skills training and leadership development aligned with YTEI',
      status: 'ongoing',
      progress: 75,
      beneficiaries: '150+',
      icon: <FiUsers />,
      target: 'Youth & Adolescent Girls'
    },
    {
      id: 4,
      title: 'Widows & Elderly Support',
      category: 'inclusion',
      description: 'Economic inclusion and social protection for vulnerable groups',
      status: 'ongoing',
      progress: 65,
      beneficiaries: '50+',
      icon: <FiHeart />,
      target: 'Widows & Elderly'
    },
    {
      id: 5,
      title: 'Community Peacebuilding',
      category: 'community',
      description: 'Strengthening community resilience and partnerships',
      status: 'ongoing',
      progress: 80,
      beneficiaries: '5+',
      icon: <FiGlobe />,
      target: 'Communities'
    },
    {
      id: 6,
      title: 'Child Protection & Education',
      category: 'education',
      description: 'Integrated education support and child safeguarding',
      status: 'ongoing',
      progress: 90,
      beneficiaries: '300+',
      icon: <FiBook />,
      target: 'Children'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        {/* Main Header Section - Premium Redesign */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl">
          <div className="absolute inset-0 z-0">
            <img
              src={HeaderImage}
              alt="Projects Background"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Active Interventions</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                A community-based organization dedicated to preventing drug abuse and protecting vulnerable populations through YTEI and NADAP-aligned interventions
              </p>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-20 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
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
                    className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-300 shadow-sm ${activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-[0_8px_20px_rgb(37,99,235,0.3)] scale-105'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid - Premium */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -mx-8 -my-8 transition-transform group-hover:scale-110 duration-500 ease-in-out z-0"></div>

                  {/* Header */}
                  <div className="flex items-start mb-6 relative z-10">
                    <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl mr-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      {project.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-1.5">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 h-12 line-clamp-2 relative z-10">{project.description}</p>

                  {/* Target */}
                  <div className="mb-6 relative z-10 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-1">Target Group</div>
                    <div className="text-sm font-bold text-slate-800">{project.target}</div>
                  </div>

                  {/* Progress */}
                  <div className="mb-6 relative z-10">
                    <div className="flex justify-between text-xs font-bold tracking-wider uppercase text-slate-500 mb-2">
                      <span>Progress</span>
                      <span className="text-blue-600">{project.progress}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center text-sm relative z-10 pt-4 border-t border-slate-100">
                    <div className="text-slate-600">
                      <span className="font-bold text-lg text-slate-900">{project.beneficiaries}</span> beneficiaries
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Projects;