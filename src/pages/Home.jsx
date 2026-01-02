import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiPlay, 
  FiPause, 
  FiTarget,
  FiEye,
  FiTrendingUp,
  FiUsers,
  FiHeart,
  FiAward,
  FiHome,
  FiBook,
  FiShield
} from 'react-icons/fi';
import SayNoToDrug from '../assets/Say no to drugs.jpeg';
import TalkToChildren from '../assets/Talking to children.jpeg';
import Education from '../assets/Children on the assembly.jpeg';
import CallToAction from '../components/CallToAction';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [imageError, setImageError] = useState({});

  // Hero slides data with image placeholders
  const heroSlides = [
    {
      id: 1,
      title: "Protecting Liberia's Future",
      subtitle: "Transforming Lives of Vulnerable Children",
      description: "Every child deserves safety, education, and the opportunity to thrive. Join us in our mission.",
      imagePlaceholder: SayNoToDrug,
      stats: "5,000+ Children Protected"
    },
    {
      id: 2,
      title: "Education for All",
      subtitle: "Breaking Barriers Through Learning",
      description: "Providing quality education and vocational training to empower Liberia's youth.",
      imagePlaceholder: Education,
      stats: "50+ Schools Supported"
    },
    {
      id: 3,
      title: "Youth Empowerment",
      subtitle: "Building Skills, Building Futures",
      description: "Creating opportunities for young people to become self-reliant citizens.",
      imagePlaceholder: TalkToChildren,
      stats: "100+ Youth Trained Annually"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Quick Stats
  const quickStats = [
    { icon: <FiUsers />, number: "5,000+", label: "Children Reached" },
    { icon: <FiHome />, number: "200+", label: "Communities Served" },
    { icon: <FiBook />, number: "50+", label: "Schools Supported" },
    { icon: <FiAward />, number: "100+", label: "Youth Trained" }
  ];

  // Impact Areas (with image placeholders)
  const impactAreas = [
    {
      id: 1,
      title: "Child Protection",
      description: "Safe spaces and protection systems for vulnerable children",
      imagePlaceholder: "https://images.unsplash.com/photo-1516627145497-ae69584b5d53?w=800&h=600&fit=crop",
      stat: "3,200+ Children Protected"
    },
    {
      id: 2,
      title: "Education Support",
      description: "Scholarships and educational programs",
      imagePlaceholder: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      stat: "1,500+ Students Supported"
    },
    {
      id: 3,
      title: "Youth Empowerment",
      description: "Skills training and vocational programs",
      imagePlaceholder: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      stat: "800+ Youth Empowered"
    },
    {
      id: 4,
      title: "Community Development",
      description: "Sustainable community support systems",
      imagePlaceholder: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      stat: "200+ Communities Engaged"
    }
  ];

  const handleImageError = (id) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Carousel Section */}
      <section className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0">
              {!imageError[`hero-${currentSlide}`] ? (
                <img
                  src={heroSlides[currentSlide].imagePlaceholder}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(`hero-${currentSlide}`)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-800 to-purple-900"></div>
              )}
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/40 z-10"></div>

            {/* Content */}
            <div className="relative h-full flex items-center z-20">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mb-6"
                  ></motion.div>
                  
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl mb-6 text-blue-100"
                  >
                    {heroSlides[currentSlide].subtitle}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg mb-8 text-gray-100"
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                  >
                    <Link to="/donate">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
                      >
                        Donate Now
                      </motion.button>
                    </Link>
                    <Link to="/about">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
                      >
                        Learn More
                      </motion.button>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full"
                  >
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                    <span className="font-semibold text-sm md:text-base">{heroSlides[currentSlide].stats}</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-30">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2 ml-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full"
            >
              <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setAutoPlay(!autoPlay)}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full"
            >
              {autoPlay ? (
                <FiPause className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <FiPlay className="w-5 h-5 md:w-6 md:h-6 text-white" />
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full"
            >
              <FiChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="flex items-center justify-center text-gray-600">
                  <span className="mr-2">{stat.icon}</span>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Purpose & Promise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by our mission and vision to create lasting change for Liberia's children and youth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-xl mr-4">
                    <FiTarget className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  To restore hope, dignity, and opportunity to vulnerable children and youth in Liberia by providing prevention, rehabilitation, empowerment, and reintegration services that foster self-reliance and positive citizenship.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <FiShield className="w-5 h-5 text-blue-600 mr-3" />
                      Prevention & Protection
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FiHeart className="w-5 h-5 text-blue-600 mr-3" />
                      Rehabilitation Services
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FiTrendingUp className="w-5 h-5 text-blue-600 mr-3" />
                      Youth Empowerment
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FiUsers className="w-5 h-5 text-blue-600 mr-3" />
                      Community Reintegration
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-xl mr-4">
                    <FiEye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  A Liberia where every child and young person lives free from abuse, drugs, and neglect and is equipped with the skills, knowledge, and opportunities to reach their full potential.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-3">Our Vision Includes:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      Children living free from abuse and neglect
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      Youth equipped with essential life skills
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      Communities supporting child development
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      Sustainable opportunities for all youth
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section with Image Placeholders */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Impact Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we're making a difference across Liberia through targeted programs and initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {/* Image Placeholder */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    {!imageError[`impact-${area.id}`] ? (
                      <img
                        src={area.imagePlaceholder}
                        alt={area.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(`impact-${area.id}`)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-4xl mb-2">📷</div>
                          <p>Image Placeholder</p>
                          <p className="text-sm mt-2">Replace with your image</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {area.stat}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {area.description}
                    </p>
                    <Link to="/impact">
                      <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
                        Learn more about this program
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="ml-2 group-hover:ml-3 transition-all"
                        >
                          →
                        </motion.span>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <CallToAction/>
    </div>
  );
};

export default Home;