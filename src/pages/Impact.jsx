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
import ChildrenImpact2 from '../assets/ChildrenImpact.jpeg';
import Treatment from '../assets/Treatment.jpeg'

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
      name: 'StudentsImpact',
      image: StudentsImpact,
      story: 'Kids Survivor Liberia engaging students through structured awareness sessions, educating them on the dangers of drug abuse and encouraging responsible decision-making. The interaction empowers students with knowledge, confidence, and a clear vision for a positive future.',
    },
    {
      name: 'ChildImpact',
      image: ChildrenImpact,
      story: 'Kids Survivor Liberia conducting community outreach with children, offering education, care, and support in a safe environment. Through direct engagement, the organization promotes healthy living, discipline, and hope for a drug-free and productive life.',
    },
    {
      name: 'ChildImpact',
      image: ChildrenImpact2,
      story: 'Kids Survivor Liberia reaching children through community outreach and care initiatives, helping to meet basic needs while fostering unity and compassion. These efforts create a supportive environment where children feel valued, protected, and empowered to grow.',
    },
    {
      name: 'Treatment',
      image: Treatment,
      story: 'Kids Survivor Liberia has been structured to align its Godly mission with Liberia’s national priority goals, including the Arrest Agenda. The organization also operates a medical team that provides free health services to at-risk youth across the counties, without charging a single penny.',
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
                  <div className="h-auto bg-gray-100 flex items-center justify-center">
                  
                   
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                      loading='lazy'
                    />
                  </div>
                  
                  <div className="p-6">
                    
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Watch Our Impacts</h2>
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
                    poster={HeaderImage} 
                  >
                    <source src="/videos/Children_Sponsor..mp4" type="video/mp4" />
                    
                  </video>
                  
                 
                 
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Children In the Community</h3>
                  <p className="text-gray-600 mb-4">
                    Look at this girl and these kids being sponsored by kids survivor Liberia for a free education.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-4">Education Sponsorship</span>
                    <span>0:26</span>
                  </div>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-65 bg-gray-900">
                
                  
                
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster={HeaderImage}
                  >
                    <source src="/videos/StudentsImpact.mp4" type="video/mp4" />
                  </video>
                  
                 
                 
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">School Students</h3>
                  <p className="text-gray-600 mb-4">
                   Kids Survivor Liberia is enlightening students on the risks of drug abuse and how it can damage their health, future, and dreams. Staying drug-free empowers young people to make safe choices and build a brighter tomorrow.

                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-4">Impacting Students</span>
                    <span> 0:38</span>
                  </div>
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