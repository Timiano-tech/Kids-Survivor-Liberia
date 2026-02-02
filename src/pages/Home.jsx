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
  FiHome,
  FiBook,
  FiShield,
  FiChevronDown,
  FiCalendar,
  FiUser,
  FiMessageSquare,
  FiArrowRight,
  FiBriefcase,
  FiCrosshair,
  FiActivity,
  FiCheckCircle
} from 'react-icons/fi';

import Education from '../assets/Children on the assembly.jpeg';
import Students from '../assets/Students.jpeg'
import CallToAction from '../components/CallToAction';
import NoToDrugs from '../assets/Say no to drugs.jpeg'
import Children3 from '../assets/Drug_Recovered.jpeg';
import Children4 from '../assets/Children4.jpeg';
import Community from '../assets/Community.jpeg';
import Mr_Steve from '../assets/Mr_Steve.jpeg';
import Mrs_Fiona from '../assets/Mrs_Fiona.jpeg';
import Mrs_Silvia from '../assets/Mrs_Silvia2.jpeg';
import CEO from '../assets/CEO.jpeg';
import BlogImage1 from '../assets/Students Impacted.jpeg';
import BlogImage2 from '../assets/Helping Children.jpeg';
import BlogImage3 from '../assets/Youth_Community_Outreach.jpeg';
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

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [imageError, setImageError] = useState({});

  // Hero slides data aligned with organizational focus
  const heroSlides = [
    {
      id: 1,
      title: "Building a Drug-Free Liberia",
      subtitle: "Prevention, Protection & Empowerment",
      description: "Aligned with NADAP 2025-2030, we work to prevent drug abuse and empower vulnerable populations through community-driven interventions.",
      imagePlaceholder: NoToDrugs,
      stats: "Aligned with NADAP 2025-2030 & YTEI"
    },
    {
      id: 2,
      title: "Youth Transformation & Empowerment",
      subtitle: "Creating Pathways to Sustainable Development",
      description: "Strengthening youth leadership, expanding education access, and supporting psychosocial well-being for positive youth development.",
      imagePlaceholder: Education,
      stats: "Supporting YTEI Priorities"
    },
    {
      id: 3,
      title: "Inclusive Community Resilience",
      subtitle: "Protecting Children, Adolescent Girls, Youth & Vulnerable Elderly",
      description: "Implementing rights-based interventions that promote social reintegration, peacebuilding, and community resilience.",
      imagePlaceholder: Community,
      stats: "Community-Driven Interventions"
    }
  ];

  // Team Members
  const teamMembers = [
    {
      name: "Mr. Billy Jones",
      teamImage: CEO,
      position: "Chief Executive Officer (C.E.O)",
      bio: "Provides strategic leadership for KSL's NADAP-aligned drug abuse prevention and youth empowerment programs across Liberia."
    },
    {
      name: "Mr. Steve Darwin",
      teamImage: Mr_Steve,
      position: "Director of Countries Operations",
      bio: "Oversees implementation of community-based drug demand reduction and rehabilitation programs aligned with national frameworks."
    },
    {
      name: "Mrs. Fiona A. Etong",
      teamImage: Mrs_Fiona,
      position: "Nigeria Representative, Social Media Manager",
      bio: "Leads digital advocacy for drug prevention and youth empowerment, fostering regional partnerships for vulnerable populations."
    },
    {
      name: "Mrs. Silvia T. Willie Dongon",
      teamImage: Mrs_Silvia,
      position: "Operational Advisor",
      bio: "Guides implementation of gender-inclusive protection programs for adolescent girls, widows, and vulnerable elderly men."
    }
  ];

  // Latest News / Blog Posts aligned with program pillars
  const latestNews = [
    {
      id: 1,
      title: "NADAP 2025-2030: national-based Drug Prevention Initiatives",
      excerpt: "Educating Students on the dangers of drug abuse through school and community programs aligned with Liberia's National Anti-Drugs Action Plan.",
      category: "Drug Prevention",
      date: "Jan 19, 2026",
      author: "KSL Team",
      image: BlogImage1,
      link: "/blog"
    },
    {
      id: 2,
      title: "Youth Leadership Development Through YTEI Framework",
      excerpt: "Empowering young people as agents of change through life skills training, civic engagement, and positive youth development programs.",
      category: "Youth Empowerment",
      date: "Jan 19, 2026",
      author: "KSL Team",
      image: BlogImage3,
      link: "/blog"
    },
    {
      id: 3,
      title: "Community Engagement for Gender Protection & Social Inclusion",
      excerpt: "Feeding children and supporting vulnerable groups through targeted interventions that promote social reintegration and community resilience.",
      category: "Community Engagement",
      date: "Jan 19, 2026",
      author: "KSL Team",
      image: BlogImage2,
      link: "/blog"
    }
  ];

  // FAQ Data updated to reflect organizational focus
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "How is KSL aligned with Liberia's National Anti-Drugs Action Plan (NADAP)?",
      answer: "KSL implements NADAP 2025-2030 through national-based drug use prevention, early intervention, rehabilitation, and reintegration programs. Our work focuses on drug demand reduction, stigma reduction, and promoting public health approaches to substance abuse.",
      open: false,
      links: [
        { text: "Learn about our NADAP alignment", path: "/programs" },
        { text: "View NADAP 2025-2030 framework", path: "/programs" }
      ]
    },
    {
      id: 2,
      question: "What populations does KSL specifically serve?",
      answer: "KSL focuses on vulnerable populations including children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men. Our interventions are inclusive, rights-based, and community-driven, addressing intersecting challenges of drug abuse, poverty, and gender vulnerability.",
      open: false,
      links: [
        { text: "See our target populations", path: "/programs" },
        { text: "Learn about our GESI approach", path: "/programs" }
      ]
    },
    {
      id: 3,
      question: "How does KSL contribute to the Youth Transformation & Empowerment Initiative (YTEI)?",
      answer: "KSL advances YTEI priorities by strengthening youth leadership and civic engagement, expanding education and vocational pathways, supporting psychosocial well-being, and positioning young people as agents of change and community role models.",
      open: false,
      links: [
        { text: "Explore our youth programs", path: "/programs" },
        { text: "Learn about YTEI alignment", path: "/Programs" }
      ]
    },
    {
      id: 4,
      question: "What are KSL's core programmatic pillars?",
      answer: "Our work is organized around five pillars: 1) Drug Abuse Prevention & Public Awareness, 2) Rehabilitation & Social Reintegration, 3) Education & Skills Development, 4) Gender, Protection & Social Inclusion, and 5) Community Engagement & Peacebuilding.",
      open: false,
      links: [
        { text: "Explore all program pillars", path: "/programs" },
        { text: "View our strategic framework", path: "/about" }
      ]
    },
    {
      id: 5,
      question: "How does KSL ensure community ownership of programs?",
      answer: "We implement community-driven interventions through partnerships with traditional leaders, local authorities, and civil society. Our programs emphasize volunteer training, community ownership, and social cohesion initiatives that contribute to crime reduction and peacebuilding.",
      open: false,
      links: [
        { text: "Learn about community partnerships", path: "/partnerships" },
        { text: "See our community impact", path: "/impact" }
      ]
    },
    {
      id: 6,
      question: "What cross-cutting themes guide KSL's work?",
      answer: "Our programs integrate: Child & Youth Safeguarding, Gender Equality & Social Inclusion (GESI), Human Rights & Dignity, Community Ownership & Sustainability, and Accountability & Transparency. These ensure comprehensive, rights-based approaches to all interventions.",
      open: false,
      links: [
        { text: "Learn about our values", path: "/about" },
        { text: "View our safeguarding policy", path: "/programs" }
      ]
    }
  ]);

  // Impact Statistics Data aligned with organizational focus
  const impactStats = [
    { end: 3000, label: "Vulnerable Individuals Reached", icon: <FiUsers />, duration: 2.5 },
    { end: 50, label: "Communities Engaged", icon: <FiHome />, duration: 2 },
    { end: 1000, label: "Youth in Prevention Programs", icon: <FiShield />, duration: 1.5 },
    { end: 200, label: "Individuals in Rehabilitation", icon: <FiActivity />, duration: 2 }
  ];

  // Program Pillars Data
  const programPillars = [
    {
      id: 1,
      title: "Drug Abuse Prevention & Public Awareness",
      description: "Community and school-based prevention campaigns, youth-led advocacy, and 'Say No to Drugs' initiatives aligned with national frameworks.",
      imagePlaceholder: NoToDrugs,
      icon: <FiShield className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Rehabilitation & Social Reintegration",
      description: "Psychosocial support, skills development, and reintegration pathways for drug-affected individuals with stigma reduction initiatives.",
      imagePlaceholder: Children3,
      icon: <FiHeart className="w-8 h-8" />,
      color: "bg-yellow-500"
    },
    {
      id: 3,
      title: "Education & Skills Development",
      description: "Education support, vocational training, and digital skills for youth, adolescent girls, widows, and vulnerable elderly men.",
      imagePlaceholder: Students,
      icon: <FiBook className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      id: 4,
      title: "Gender, Protection & Social Inclusion",
      description: "Targeted empowerment of adolescent girls, economic inclusion of widows, and social support for vulnerable elderly men.",
      imagePlaceholder: Children4,
      icon: <FiUsers className="w-8 h-8" />,
      color: "bg-green-500"
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
      const firstOpenId = faqItems.find(item => item.open)?.id;
      setFaqItems(faqItems.map(item => 
        item.id === firstOpenId ? { ...item, open: true } : { ...item, open: false }
      ));
    }
  }, [faqItems]);

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
            <div className="absolute inset-0 bg-linear-to-r from-blue-800/80 to-blue-900/40 z-10"></div>

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
                        Support Our Mission
                      </motion.button>
                    </Link>
                    <Link to="/programs">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
                      >
                        View Programs
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
              Impact Aligned with National Frameworks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tracking progress towards NADAP 2025-2030 and YTEI goals through community-driven interventions
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              <FiCheckCircle className="mr-2" />
              Operating across multiple counties with NADAP-aligned programs
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section - Updated to match organizational documents */}
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
              Our Strategic Framework
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aligned with YTEI and NADAP 2025–2030 for comprehensive impact
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
              <div className="bg-blue-500 p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-xl mr-4">
                    <FiTarget className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Organizational Mission</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Kids Survivor Liberia (KSL) is a national-based, non-profit organization dedicated to the prevention of drug abuse and the protection, rehabilitation, and empowerment of vulnerable populations, particularly children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-3">Key Interventions:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      Drug Abuse Prevention & Awareness
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      Rehabilitation & Social Reintegration
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      Education & Life Skills Development
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      Gender-Inclusive Protection Systems
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
                  <h3 className="text-2xl font-bold text-white">Organizational Vision</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  A drug-free, safe, inclusive, and resilient Liberia, where children, adolescent girls, youth, widows, and elderly men live in dignity, have equitable access to education and economic opportunities, are protected from drugs, violence, and exploitation, and actively contribute to sustainable development and social cohesion.
                </p>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-3">Vision Elements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Drug-free and safe communities
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Equitable access to opportunities
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Protection from exploitation
                    </li>
                    <li className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Active community participation
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Pillars Section */}
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
              Our Programmatic Pillars
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive approaches aligned with national strategies and community needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
                  <div className={`${pillar.color} p-6 text-white`}>
                    <div className="flex items-center">
                      <div className="bg-white/20 p-3 rounded-xl mr-4">
                        {pillar.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{pillar.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      {pillar.description}
                    </p>
                    
                    {/* Image Placeholder */}
                    <div className="relative h-62 overflow-hidden rounded-lg mb-6">
                      {!imageError[`pillar-${pillar.id}`] ? (
                        <img
                          src={pillar.imagePlaceholder}
                          alt={pillar.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={() => handleImageError(`pillar-${pillar.id}`)}
                          loading='lazy'
                        />
                      ) : (
                        <div className={`w-full h-full ${pillar.color} flex items-center justify-center`}>
                          <span className="text-white text-lg font-semibold">{pillar.title.split(' ')[0]}</span>
                        </div>
                      )}
                    </div>
                    
                    <Link to={`/programs#pillar-${pillar.id}`}>
                      <button className="w-full text-center bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-3 rounded-lg transition-colors duration-300">
                        Explore This Pillar
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fifth Pillar - Community Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="bg-blue-500 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-xl mr-4">
                    <FiBriefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Pillar 5: Community Engagement, Peacebuilding & Partnerships</h3>
                    <p className="text-blue-100 mt-2">Collaboration with traditional leaders, local authorities, and civil society for sustainable impact</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold mb-2">Community Ownership</h4>
                    <p className="text-sm text-blue-100">Volunteer training and community-driven program implementation</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold mb-2">Peacebuilding</h4>
                    <p className="text-sm text-blue-100">Crime and violence prevention through social cohesion initiatives</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold mb-2">Strategic Partnerships</h4>
                    <p className="text-sm text-blue-100">Multi-stakeholder collaboration for comprehensive impact</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Alignment Section */}
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
              National & Strategic Alignment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contributing to Liberia's development frameworks through targeted interventions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* YTEI Alignment */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-xl mr-4">
                  <FiTrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">YTEI Alignment</h3>
                  <p className="text-gray-600 text-sm">Youth Transformation & Empowerment Initiative</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>Strengthening youth leadership and civic engagement</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>Expanding education access and vocational pathways</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>Supporting psychosocial well-being and positive development</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>Positioning youth as agents of change</span>
                </li>
              </ul>
            </motion.div>

            {/* NADAP Alignment */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <FiCrosshair className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">NADAP 2025-2030</h3>
                  <p className="text-gray-600 text-sm">National Anti-Drugs Action Plan</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>Community and school-based drug prevention</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>Early intervention and rehabilitation services</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>Drug demand reduction and relapse prevention</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>Advocacy for public health and social reintegration</span>
                </li>
              </ul>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Leadership & Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Committed professionals driving NADAP and YTEI-aligned interventions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
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

      {/* Latest News Section */}
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
              PROGRAM UPDATES & INSIGHTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest from Our Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Updates on our NADAP and YTEI-aligned initiatives and their impact
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/blog">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                <span>View All Program Updates</span>
                <FiArrowRight className="ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Updated */}
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
              Learn more about our NADAP and YTEI-aligned approach to drug prevention and youth empowerment
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

          {/* Partnership Callout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-blue-500 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Partner with Us for Impact</h3>
              <p className="mb-6 text-blue-100">
                Join us in implementing NADAP 2025-2030 and YTEI-aligned programs for a drug-free, empowered Liberia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/partnership">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Explore Partnerships
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                  >
                    Contact Our Team
                  </motion.button>
                </Link>
              </div>
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