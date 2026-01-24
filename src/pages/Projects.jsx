import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiHeart, FiTarget, FiUsers, FiBook, FiGlobe } from 'react-icons/fi';
import HeaderImage from '../assets/Team_discussion.jpeg';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';

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
      <div className="min-h-screen bg-white">
        {/* Main Header Section */}
                <header className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-blue-900/70 z-10">
                    <img 
                      src={HeaderImage} 
                      alt="Header_Background" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
        
                  <div className="relative z-10 py-30 text-center">
                    <div className="container mx-auto px-4">
                      <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white"
                      >
                        Our Projects
                      </motion.h1>
                      <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
                        A community-based organization dedicated to preventing drug abuse and protecting vulnerable populations through YTEI and NADAP-aligned interventions
                      </p>
                    </div>
                  </div>
                </header>

        {/* Main Content */}
        <main className="py-12">
          <div className="container mx-auto px-4">
            {/* Mission */}
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Strategic Impact</h2>
              <p className="text-gray-600">
                Our projects are strategically designed to align with Liberia's National Drug Action Plan (NADAP) 2025-2030 and the Youth, Technology, Education, and Innovation (YTEI) framework.
              </p>
            </div>

            {/* Filter */}
            <div className="mb-10">
              <div className="flex flex-wrap justify-center gap-2">
                {projectCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                      {project.icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-blue-600 mb-1">
                        {project.category.toUpperCase()}
                      </div>
                      <h3 className="font-bold text-gray-800">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  {/* Target */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-1">Target Group</div>
                    <div className="text-sm font-medium text-gray-700">{project.target}</div>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">{project.beneficiaries}</span> beneficiaries
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
      
      <ScrollToTopButton />
      <CallToAction />
    </>
  );
};

export default Projects;