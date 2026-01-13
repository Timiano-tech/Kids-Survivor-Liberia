import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiUsers, 
  FiHeart, 
  FiAward,
  FiCheckCircle,
  FiBook
} from 'react-icons/fi';
import HeaderImage from '../assets/Team_discussion.jpeg';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const projectCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'education', name: 'Education' },
    { id: 'health', name: 'Health & Nutrition' },
    { id: 'community', name: 'Community Development' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Education For All Initiative',
      category: 'education',
      description: 'Providing access to quality education for underprivileged children in rural communities.',
      status: 'ongoing',
      progress: 75,
      beneficiaries: '100+ children',
      icon: <FiBook className="w-6 h-6" />,
      highlights: [
        'School supplies distribution',
        'Teacher training programs',
        'Classroom renovations',
        'Scholarship programs'
      ]
    },
    {
      id: 3,
      title: 'Youth Empowerment & Drug Abuse Prevention',
      category: 'community',
      description: 'Empowering youth through skills training and preventing drug abuse among Liberian youth.',
      status: 'ongoing',
      progress: 60,
      beneficiaries: '100+ youth',
      icon: <FiUsers className="w-6 h-6" />,
      highlights: [
      'Life skills and leadership training',
      'Drug abuse prevention workshops',
      'Counseling and rehabilitation support',
      'Community awareness campaigns'
      ]
    },
    {
      id: 4,
      title: 'Community Health Outreach',
      category: 'health',
      description: 'Mobile health clinics providing free medical checkups and nutrition support.',
      status: 'ongoing',
      progress: 80,
      beneficiaries: '300+ community members',
      icon: <FiHeart className="w-6 h-6" />,
      highlights: [
        'Monthly mobile clinics',
        'Malaria prevention education',
        'Nutritional supplements',
        'Maternal health services'
      ]
    },
    {
      id: 5,
      title: 'Children Feeding Program',
      category: 'community',
      description: 'Daily nutritious meals for children in the community to improve good growth.',
      status: 'ongoing',
      progress: 70,
      beneficiaries: '200+ children',
      icon: <FiHeart className="w-6 h-6" />,
      highlights: [
        'Meals for all community Children',
        'Local farmer partnerships',
        'Nutrition education',
        'Healthy Eating'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'completed': return 'Completed';
      case 'ongoing': return 'In Progress';
      case 'upcoming': return 'Upcoming';
      default: return status;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-yellow-900/70">
            <img 
              src={HeaderImage} 
              alt="Projects Background" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Page Header */}
          <div className="relative z-10 py-30 text-center">
            <div className="container mx-auto px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-white"
              >
                Our Projects
              </motion.h1>
              <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
                Transforming communities through sustainable initiatives and measurable impact
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Making a Difference Together</h2>
              <p className="text-gray-600 text-lg mb-6">
                At Kids Survivor Liberia, we implement carefully designed projects that address the most pressing needs of children and communities. Each project is developed with sustainability and long-term impact in mind.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center text-gray-700">
                  <FiAward className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium">Evidence-Based Approaches</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FiUsers className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium">Community-Led Solutions</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FiCheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium">Measurable Outcomes</span>
                </div>
              </div>
            </motion.div>

            {/* Project Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {projectCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                      activeFilter === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                >
                  {/* Project Header */}
                  <div className="p-8 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mr-4">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                          <div className="flex items-center mt-2 space-x-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                              {getStatusText(project.status)}
                            </span>
                            <span className="text-gray-500 text-sm">
                              <FiUsers className="inline w-4 h-4 mr-1" />
                              {project.beneficiaries}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Project Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full rounded-full ${
                            project.status === 'completed' ? 'bg-green-500' :
                            project.status === 'ongoing' ? 'bg-blue-500' : 'bg-yellow-500'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-700">
                        <FiUsers className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-sm">{project.beneficiaries}</span>
                      </div>
                    </div>

                    {/* Project Highlights */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <FiCheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Support Button */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                        Support This Project
                      </button>
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