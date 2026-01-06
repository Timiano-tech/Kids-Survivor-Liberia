import { motion } from 'framer-motion';
import { 
  FiUsers,
  FiBook,
  FiBriefcase,
  FiHeart,
  FiGlobe,
  FiTrendingUp
} from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import HeaderImage from '../assets/Talking to children.jpeg';
import StudentsImpact from '../assets/Students Impacted.jpeg';
import ChildrenImpact from '../assets/Helping Children.jpeg';
import ChildrenImpact2 from '../assets/ChildrenImpact.jpeg'

const Impact = () => {
  const stats = [
    { number: '3,000+', label: 'Children Reached' },
    { number: '100+', label: 'Communities Served' },
    { number: '50+', label: 'Schools Supported' },
    { number: '100+', label: 'Youth Trained' },
  ];

  const programs = [
    {
      title: 'Child Protection',
      description: 'Establishing safe spaces and protection systems for vulnerable children',
      icon: <FiHeart className="w-6 h-6" />
    },
    {
      title: 'Education Support',
      description: 'Providing scholarships, school supplies, and educational programs',
      icon: <FiBook className="w-6 h-6" />
    },
    {
      title: 'Youth Empowerment',
      description: 'Skills training and vocational programs for youth employment',
      icon: <FiBriefcase className="w-6 h-6" />
    },
    {
      title: 'Health & Nutrition',
      description: 'Healthcare access and nutrition programs for children',
      icon: <FiHeart className="w-6 h-6" />
    },
    {
      title: 'Community Development',
      description: 'Building sustainable community support systems',
      icon: <FiGlobe className="w-6 h-6" />
    },
    {
      title: 'Advocacy',
      description: 'Promoting children rights and policy change',
      icon: <FiTrendingUp className="w-6 h-6" />
    },
  ];

  // Lives Impacted Images
  const livesImpacted = [
    {
      name: 'Sarah',
      image: StudentsImpact,
      age: 19,
      story: 'Completed vocational training and now runs a tailoring business',
      location: 'Monrovia'
    },
    {
      name: 'James',
      image: ChildrenImpact,
      age: 17,
      story: 'Returned to school with scholarship support, now excelling in studies',
      location: 'Bong County'
    },
    {
      name: 'Mary',
      image: ChildrenImpact2,
      age: 22,
      story: 'Received agricultural training, now supports her family with farming',
      location: 'Nimba County'
    },
    {
      name: 'David',
      age: 16,
      image: StudentsImpact,
      story: 'Benefited from child protection programs, now a youth advocate',
      location: 'Margibi County'
    },
    
  ];

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Main Header Section */}
      <header className="relative">
        {/* Background Image  */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-yellow-900/70">
          
          <img 
            src={HeaderImage} 
            alt="Impact Background Image" 
            className="w-full h-full object-cover opacity-20"
          />
        
        </div>

          {/* Page Header with Breadcrumb */}
        <div className="relative z-10 py-30 text-center">
          <div className="container mx-auto px-4">
            
            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              Our Impact
            </motion.h1>
            
            {/* Breadcrumb Text */}
            <p className="text-white/80 text-lg">
              Creating Measurable Change. Transforming Lives.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">By The Numbers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Measuring our progress and reach across Liberia
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-3">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programs Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Programs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive initiatives creating lasting change
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                  </div>
                  <p className="text-gray-600">{program.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

              {/* Lives Impacted Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Lives We've Impacted</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real stories of transformation and hope
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {livesImpacted.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Image*/}
                  <div className="h-64 bg-gray-100 flex items-center justify-center">
                  
                   
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
                        <p className="text-gray-600">{person.age} years old</p>
                      </div>
                      <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                        {person.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{person.story}</p>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-500 text-sm">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span>Success Story</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Stories Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Watch Their Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the transformation through our video testimonials
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Video 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64 bg-gray-900">
                
                  
                
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster={HeaderImage} // Add thumbnail image
                  >
                    <source src="/videos/Children_Sponsor..mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                 
                 
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Sarah's Journey</h3>
                  <p className="text-gray-600 mb-4">
                    From street child to top student - watch Sarah's inspiring transformation
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-4">🎓 Education Success</span>
                    <span>⏱️ 3:45</span>
                  </div>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64 bg-gray-900">
                
                  
                
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster={HeaderImage} // Add thumbnail image
                  >
                    <source src="/videos/StudentsImpact.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                 
                 
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Sarah's Journey</h3>
                  <p className="text-gray-600 mb-4">
                    From street child to top student - watch Sarah's inspiring transformation
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-4">🎓 Education Success</span>
                    <span>⏱️ 3:45</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> 
          {/* Success Story Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Success Story</h2>
                <div className="space-y-6">
                  <p className="text-lg text-white/90 leading-relaxed">
                    "Thanks to KSL's education program, I was able to finish high school and 
                    receive vocational training. Today, I run my own tailoring business and 
                    support my family. KSL didn't just help me survive; they helped me thrive."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <FiUsers className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="font-bold text-xl">Sarah</p>
                      <p className="text-white/80">Age 19, Program Graduate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Geographic Reach */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Geographic Reach</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Map/Image Placeholder */}
                <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-75">
                  <div className="text-center">
                    <div className="text-gray-400 text-4xl mb-4">🗺️</div>
                    <p className="text-gray-600 font-medium mb-2">Liberia Impact Map</p>
                    <p className="text-gray-500 text-sm">Add map visualization here</p>
                  </div>
                </div>
                
                {/* Counties List */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Counties We Serve</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Montserrado', 'Bong', 'Nimba', 'Margibi',
                      'Grand Bassa', 'Grand Cape Mount', 'Bomi', 'Lofa'
                    ].map((county, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{county}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-6">
                    Our programs have reached communities across 8 counties in Liberia, 
                    making a tangible difference in the lives of children and youth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
    <ScrollToTopButton/>
    <CallToAction/>
    </>
  );
};

export default Impact;