import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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
  FiShield,
  FiChevronDown,
  FiCalendar,
  FiUser,
  FiMessageSquare,
  FiArrowRight
} from 'react-icons/fi';

import Education from '../assets/Children on the assembly.jpeg';
import Students from '../assets/Students.jpeg'
import CallToAction from '../components/CallToAction';
import StudentsInClassRoom from '../assets/Class Room.jpeg'
import NoToDrugs from '../assets/Say no to drugs.jpeg'
import Children3 from '../assets/Children3.jpeg';
import Children4 from '../assets/Children4.jpeg';
import Community from '../assets/Community.jpeg';
import Mr_Steve from '../assets/Mr_Steve.jpeg';
import Mrs_Fiona from '../assets/Mrs_Fiona.jpeg';
import Mrs_Silvia from '../assets/Mrs_Silvia2.jpeg';
import CEO from '../assets/CEO.jpeg';
import BlogImage1 from '../assets/Students Impacted.jpeg';
import BlogImage2 from '../assets/Helping Children.jpeg';
import BlogImage3 from '../assets/ChildrenImpact.jpeg';
import ScrollToTopButton from '../components/ScrollToTop';

// Counter Component
const Counter = ({ end, duration = 2, label, icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuad = (t) => t * (2 - t);
        const currentCount = Math.floor(easeOutQuad(percentage) * end);
        
        setCount(currentCount);
        
        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, hasAnimated, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="flex items-center justify-center text-gray-600">
        <span className="mr-2">{icon}</span>
        {label}
      </div>
    </div>
  );
};

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
      imagePlaceholder: Students,
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
      imagePlaceholder: Community,
      stats: "100+ Youth Trained Annually"
    }
  ];

  // Team Members
  const teamMembers = [
    {
      name: "Mr. Billy Jones",
      teamImage: CEO,
      position: "Chief Executive Officer (C.E.O)",
      bio: "Billy Jones, CEO of Kids Survivor Liberia, provides strategic leadership for child-focused education, welfare, and empowerment programs, building resilience in vulnerable children."
    },
    {
      name: "Mr. Steve Darwin",
      teamImage: Mr_Steve,
      position: "Director of Country Operations",
      bio: "Mr. Steve Darwin Wald is the Director of County Operations, overseeing the implementation and management of all Kids Survivor Liberia's field programs across the country."
    },
    {
      name: "Mrs. Fiona A. Etong",
      teamImage: Mrs_Fiona,
      position: "Nigeria Representative, Social Media Manager",
      bio: "Mrs. Fiona A. Etong is the Nigeria Representative, Social Media Manager, and Partner for Kids Survivor Liberia, leading digital advocacy and partnerships for vulnerable children."
    },
    {
      name: "Mrs. Silvia T. Willie Dongon",
      teamImage: Mrs_Silvia,
      position: "Operational Advisor",
      bio: "Mrs. Silvia T. Willie Dongon serves as Operational Advisor for Kids Survivor Liberia, guiding teams in Bong County (Palala District), Suakoko, and Lofa County to enhance program effectiveness and community impact."
    }
  ];

  // Latest News / Blog Posts
  const latestNews = [
    {
      id: 1,
      title: "Empowering Youth Through Drug Prevention Education",
      excerpt: "How our school-based programs are transforming young lives and building resilience against substance abuse in Liberia.",
      category: "Education",
      date: "Jan 15, 2024",
      author: "John Doe",
      readTime: "5 min read",
      image: BlogImage1,
      link: "/blog/youth-drug-prevention"
    },
    {
      id: 2,
      title: "Building Child Protection Systems in Vulnerable Communities",
      excerpt: "A look at our comprehensive approach to safeguarding children and providing psychosocial support across Liberia.",
      category: "Child Protection",
      date: "Jan 10, 2024",
      author: "Jane Smith",
      readTime: "4 min read",
      image: BlogImage2,
      link: "/blog/child-protection-systems"
    },
    {
      id: 3,
      title: "Skills Training: The Pathway to Sustainable Reintegration",
      excerpt: "How vocational training programs are helping youth transition to productive, drug-free lives in West Africa.",
      category: "Empowerment",
      date: "Jan 5, 2024",
      author: "Robert Johnson",
      readTime: "6 min read",
      image: BlogImage3,
      link: "/blog/skills-training-reintegration"
    }
  ];

  // FAQ Data
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "What is Kids Survivor Liberia's main focus?",
      answer: "Kids Survivor Liberia focuses on preventing drug abuse, protecting vulnerable children and youth, and empowering them through education, skills training, and economic opportunities. Our programs are aligned with Liberia's National Drug Abuse Prevention Strategy (NADAP) 2025-2030 and regional frameworks.",
      open: false,
      links: [
        { text: "Learn about our programs", path: "/programs" },
        { text: "Read our mission", path: "/about" }
      ]
    },
    {
      id: 2,
      question: "How can I volunteer with Kids Survivor Liberia?",
      answer: "We welcome volunteers with various skills! You can volunteer in areas like education, counseling, community outreach, administration, or fundraising. All volunteers undergo orientation and training to ensure they can contribute effectively to our mission.",
      open: false,
      links: [
        { text: "Apply to volunteer", path: "/volunteer" },
        { text: "See current opportunities", path: "/get-involved" }
      ]
    },
    {
      id: 3,
      question: "Where does Kids Survivor Liberia operate?",
      answer: "We operate across multiple counties in Liberia including Montserrado, Bong, Nimba, Grand Bassa, and Lofa Counties. Our headquarters is in Monrovia, with branch offices in strategic locations to serve vulnerable communities effectively.",
      open: false,
      links: [
        { text: "See our locations", path: "/about#branches" },
        { text: "View our impact map", path: "/impact" }
      ]
    },
    {
      id: 4,
      question: "How are donations used?",
      answer: "Donations directly support our programs: 85% goes to program implementation (education, child protection, skills training), 10% to operational costs, and 5% to fundraising. We maintain transparent financial reporting and are accountable to our donors and stakeholders.",
      open: false,
      links: [
        { text: "Make a donation", path: "/donate" },
        { text: "View financial reports", path: "/transparency" }
      ]
    },
    {
      id: 5,
      question: "How can my organization partner with KSL?",
      answer: "We collaborate with various organizations including government agencies, NGOs, corporate partners, and community groups. Partnerships can include program implementation, funding, capacity building, or advocacy. We customize partnerships to create maximum impact.",
      open: false,
      links: [
        { text: "Learn about partnerships", path: "/partnership" },
        { text: "Contact our team", path: "/contact" }
      ]
    },
    {
      id: 6,
      question: "What makes KSL different from other organizations?",
      answer: "KSL combines comprehensive drug abuse prevention with child protection and youth economic empowerment. Our NADAP-aligned approach, multi-county reach, and focus on sustainable reintegration make us unique. We work closely with both government and traditional community structures.",
      open: false,
      links: [
        { text: "See our impact", path: "/impact" },
        { text: "Learn about our approach", path: "/about" }
      ]
    }
  ]);

  // Impact Statistics Data (used for counters)
  const impactStats = [
    { end: 3000, label: "Children Reached", icon: <FiUsers />, duration: 2.5 },
    { end: 100, label: "Communities Served", icon: <FiHome />, duration: 2 },
    { end: 50, label: "Schools Supported", icon: <FiBook />, duration: 1.5 },
    { end: 100, label: "Youth Trained", icon: <FiAward />, duration: 2 }
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

  // Toggle FAQ function
  const toggleFAQ = (id) => {
    setFaqItems(faqItems.map(item => 
      item.id === id ? { ...item, open: !item.open } : { ...item, open: false }
    ));
  };

  // Auto-close other FAQs when one opens
  useEffect(() => {
    const openCount = faqItems.filter(item => item.open).length;
    if (openCount > 1) {
      // Find the first open FAQ and keep it open
      const firstOpenId = faqItems.find(item => item.open)?.id;
      setFaqItems(faqItems.map(item => 
        item.id === firstOpenId ? { ...item, open: true } : { ...item, open: false }
      ));
    }
  }, [faqItems]);

  // Impact Areas (with image placeholders)
  const impactAreas = [
    {
      id: 1,
      title: "Child Protection",
      description: "Safe spaces and protection systems for vulnerable children",
      imagePlaceholder: Children3,
      stat: "2,200+ Children Protected"
    },
    {
      id: 2,
      title: "Education Support",
      description: "Scholarships and educational programs",
      imagePlaceholder: StudentsInClassRoom,
      stat: "1,500+ Students Supported"
    },
    {
      id: 3,
      title: "Youth Empowerment",
      description: "Skills training and vocational programs",
      imagePlaceholder: NoToDrugs,
      stat: "800+ Youth Empowered"
    },
    {
      id: 4,
      title: "Community Development",
      description: "Sustainable community support systems",
      imagePlaceholder: Children4,
      stat: "100+ Communities Engaged"
    }
  ];

  const handleImageError = (id) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="overflow-hidden">
      <ScrollToTopButton />
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
                  loading='lazy'
                />
              ) : (
                <div className="w-full h-full bg-blue-600"></div>
              )}
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/70 to-purple-900/40 z-10"></div>

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
                    className="h-1 bg-yellow-500 mb-6"
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
                        className="bg-yellow-500 px-6 py-3 md:px-8 md:py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
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

      {/* Quick Stats Section with Dynamic Counters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-time impact tracking of our programs across Liberia
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Counter 
                  end={stat.end}
                  duration={stat.duration}
                  label={stat.label}
                  icon={stat.icon}
                />
              </motion.div>
            ))}
          </div>

          {/* Additional Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              <FiTrendingUp className="mr-2" />
              Growing impact across 7+ counties in Liberia
            </div>
          </motion.div>
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
              <div className="bg-blue-600 p-8">
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
              <div className="bg-yellow-500 p-8">
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
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Children living free from abuse and neglect
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Youth equipped with essential life skills
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Communities supporting child development
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
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
                        loading='lazy'
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">{area.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
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

      {/* Meet Our Team Section */}
      <section className='px-8 mx-auto bg-white py-20'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Team Member Image */}
                <div className="h-auto bg-gray-100 flex items-center justify-center">
                  <img 
                    src={member.teamImage}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading='lazy'
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Latest News / Blog Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
              <FiMessageSquare className="mr-2" />
              INSIGHTS & UPDATES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest News & Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest work, success stories, and insights on youth development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {latestNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* News Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* News Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FiCalendar className="mr-2" />
                      {news.date}
                      <span className="mx-2">•</span>
                      <FiUser className="mr-2" />
                      {news.author}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">
                        {news.readTime}
                      </span>
                      <Link to={news.link} className="flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                        Read More
                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
               
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Blog Posts Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/blog">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                <span>View All Blog Posts</span>
                <FiArrowRight className="ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our work and how you can get involved
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div
                  className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                    faq.open ? 'shadow-lg' : 'hover:shadow-lg'
                  }`}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex justify-between items-center p-6">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: faq.open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-600"
                    >
                      <FiChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: faq.open ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      
                      {faq.links && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {faq.links.map((link, linkIndex) => (
                            <Link
                              key={linkIndex}
                              to={link.path}
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                            >
                              {link.text}
                              <FiChevronRight className="ml-1 w-4 h-4" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still have questions? */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-blue-500 from-blue-600 to-blue-800 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="mb-6 text-blue-100">
                We're here to help! Contact our team for more information.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Home;