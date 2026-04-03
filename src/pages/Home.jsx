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
  FiCheckCircle,
  FiMapPin
} from 'react-icons/fi';

import Education from '../assets/Children on the assembly.jpeg';
import Students from '../assets/Students.jpeg'
import NoToDrugs from '../assets/Say no to drugs.jpeg'
import Children3 from '../assets/Drug_Recovered.jpeg';
import Children4 from '../assets/Children4.jpeg';
import Community from '../assets/Community.jpeg';
import Mr_Steve from '../assets/team/Mr_Steve.png';
import Mrs_Fiona from '../assets/team/Mrs_Fiona.png';
import Mrs_Silvia from '../assets/team/Mrs_Silvia2.png';
import CEO from '../assets/team/CEO.png';
import BlogImage1 from '../assets/Students Impacted.jpeg';
import BlogImage2 from '../assets/Helping Children.jpeg';
import BlogImage3 from '../assets/Youth_Community_Outreach.jpeg';

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

  // Hero slides data aligned with international NGO standards and user requirements
  const heroSlides = [
    {
      id: 1,
      title: "Building a Brighter Future",
      subtitle: "For Liberia's Vulnerable Communities",
      description: "Kids Survivor Liberia is commited to protecting vulnerable children, promoting education, and empowering young people to build a brighter future across communities in Liberia.",
      imagePlaceholder: NoToDrugs,
      stats: "Protecting, Educating, Empowering"
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
      position: "Chief Executive Officer (CEO)",
      bio: "Provides visionary leadership and strategic oversight for KSL's national initiatives, including NADAP-aligned drug abuse prevention, child protection, and youth empowerment programs. Champions child safeguarding, ethical governance, and inclusive development across Liberia."
    },
    {
      name: "Mr. Steve Darwin Wald",
      teamImage: Mr_Steve,
      position: "Director of Countries Operations",
      bio: "Leads operational coordination and implementation oversight across KSL's areas of intervention. Translates strategic objectives into effective community-responsive programs, ensuring consistent delivery of drug demand reduction, prevention, and rehabilitation initiatives."
    },
    {
      name: "Mrs. Fiona A. Etong",
      teamImage: Mrs_Fiona,
      position: "Nigeria Representative & Social Media Manager",
      bio: "Leads digital communications and regional representation, amplifying KSL's mission through innovative online outreach. Strengthens public engagement for drug abuse prevention, youth empowerment, and child protection across borders."
    },
    {
      name: "Mrs. Silvia T. Willie Dongon",
      teamImage: Mrs_Silvia,
      position: "Operational Advisor",
      bio: "Provides strategic guidance for gender-sensitive protection programs targeting adolescent girls, widows, and vulnerable elderly men. Supports operational planning and integration of best practices in social inclusion and community engagement."
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
    { end: 12000, label: "Vulnerable Individuals Reached", icon: <FiUsers />, duration: 2.5 },
    { end: 120, label: "Communities Engaged", icon: <FiHome />, duration: 2 },
    { end: 10000, label: "Youth in Prevention Programs", icon: <FiShield />, duration: 1.5 },
    { end: 8000, label: "Individuals in Rehabilitation", icon: <FiActivity />, duration: 2 }
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

      {/* Hero Carousel Section - Premium NGO Redesign */}
      <section className="relative h-screen w-full bg-slate-900 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image with Cinematic Slow Zoom (Ken Burns Effect) */}
            <motion.div 
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 12, ease: "easeOut" }}
              className="absolute inset-0 z-0"
            >
              {!imageError[`hero-${currentSlide}`] ? (
                <img
                  src={heroSlides[currentSlide].imagePlaceholder}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(`hero-${currentSlide}`)}
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                  fetchPriority={currentSlide === 0 ? "high" : "auto"}
                />
              ) : (
                <div className="w-full h-full bg-slate-800"></div>
              )}
            </motion.div>

            {/* Premium Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent z-10 w-[85%] sm:w-[70%] lg:w-[60%]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40 z-10"></div>
            
            {/* Content Area */}
            <div className="relative h-full flex items-center pt-20 sm:pt-24 z-20">
              <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.4
                      }
                    }
                  }}
                  className="max-w-3xl"
                >
                  {/* Subtle Kicker / Pre-Title */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="flex items-center mb-6"
                  >
                    <div className="h-[2px] w-12 bg-yellow-400 mr-4"></div>
                    <span className="text-yellow-400 uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">
                      Making an Impact
                    </span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight drop-shadow-2xl"
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>

                  {/* Subtitle / Objective */}
                  <motion.h2
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-light tracking-wide mb-8 drop-shadow-lg max-w-2xl border-l-4 border-blue-500 pl-4 py-1"
                  >
                    {heroSlides[currentSlide].subtitle}
                  </motion.h2>

                  {/* Description Paragraph */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-10 font-medium drop-shadow-md"
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>

                  {/* Call to Actions (CTAs) */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10"
                  >
                    <Link to="/donate">
                      <button className="group relative overflow-hidden rounded-xl bg-yellow-500 px-6 py-3 sm:px-8 sm:py-3.5 transition-all duration-300 hover:bg-yellow-400 hover:shadow-md hover:-translate-y-1">
                        <span className="relative z-10 flex items-center justify-center gap-2 text-slate-900 font-bold text-sm sm:text-base tracking-wide whitespace-nowrap">
                          Support Our Mission 
                          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 w-4 h-4 sm:w-5 sm:h-5" />
                        </span>
                      </button>
                    </Link>
                    <Link to="/programs">
                      <button className="group rounded-xl bg-white/5 border border-white/20 px-6 py-3 sm:px-8 sm:py-3.5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                        <span className="text-white font-semibold text-sm sm:text-base tracking-wide whitespace-nowrap">
                          Explore Programs
                        </span>
                      </button>
                    </Link>
                  </motion.div>

                  {/* Status Indicator Pill */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="inline-flex items-center bg-black/40 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full"
                  >
                    <div className="relative flex h-3 w-3 mr-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wider uppercase">
                      {heroSlides[currentSlide].stats}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Carousel Controls - Premium Aesthetic */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10 sm:left-auto sm:-translate-x-0 sm:right-10 z-30 flex items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto px-4">
          <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-3 py-2.5 sm:px-4 sm:py-3 rounded-full border border-white/10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-500 rounded-full h-1.5 sm:h-2 ${
                  index === currentSlide ? 'w-6 sm:w-8 bg-yellow-400' : 'w-3 sm:w-4 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 bg-black/40 backdrop-blur-md p-1 rounded-full border border-white/10 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-2 sm:p-2.5 rounded-full text-white hover:bg-white/20 transition-colors focus:outline-none"
            >
              <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              aria-label={autoPlay ? "Pause slideshow" : "Play slideshow"}
              className="p-2 sm:p-2.5 rounded-full text-white hover:bg-white/20 transition-colors focus:outline-none"
            >
              {autoPlay ? <FiPause className="w-4 h-4 sm:w-5 sm:h-5" /> : <FiPlay className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-2 sm:p-2.5 rounded-full text-white hover:bg-white/20 transition-colors focus:outline-none"
            >
              <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats Section - Premium Redesign */}
      <section className="py-24 bg-slate-900 relative">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm mb-3 block">Measurable Impact</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Driven by Data, Defined by <span className="text-blue-400">Impact</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Tracking our progress towards achieving NADAP 2025-2030 and YTEI goals through targeted, community-driven interventions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-slate-800/50 p-5 rounded-xl text-blue-400 border border-slate-700/50 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
                  <Counter
                    end={stat.end}
                    duration={stat.duration}
                    label=""
                    icon={null}
                  />
                </div>
                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-blue-900/50 text-blue-300 border border-blue-800/50 rounded-full text-sm font-medium backdrop-blur-sm">
              <FiCheckCircle className="mr-3 w-5 h-5 text-blue-400" />
              Operating across multiple counties with NADAP-aligned programs
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section - Premium Redesign */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Strategic Framework
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Aligned with YTEI and NADAP 2025–2030, we deploy comprehensive, evidence-based approaches to maximize our operational impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 border border-slate-200"
            >
              <div className="p-10 md:p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                    <FiTarget className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Mission</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Kids Survivor Liberia (KSL) is a national-based, non-profit organization dedicated to the prevention of drug abuse and the protection, rehabilitation, and empowerment of vulnerable populations, particularly children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men.
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-2">Pillars of Action</h4>
                    {[
                      "Drug Abuse Prevention & Awareness",
                      "Rehabilitation & Social Reintegration",
                      "Education & Life Skills Development",
                      "Gender-Inclusive Protection Systems"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 border border-slate-200"
            >
              <div className="p-10 md:p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-yellow-500/30 text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                    <FiEye className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Vision</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    A drug-free, safe, inclusive, and resilient Liberia, where children, adolescent girls, youth, widows, and elderly men live in dignity, have equitable access to education and economic opportunities, are protected from drugs, violence, and exploitation, and actively contribute to sustainable development and social cohesion.
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-2">Core Outcomes</h4>
                    {[
                      "Drug-free and safe communities",
                      "Equitable access to opportunities",
                      "Protection from exploitation",
                      "Active community participation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-4 shrink-0 shadow-sm"></div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Pillars Section - Premium Redesign */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Areas of Action</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Our Programmatic Pillars
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive, rights-based approaches aligned with national strategies to address the root causes of vulnerability and empower communities.
            </p>
          </motion.div>

          {/* Four main pillars - premium responsive grid */}
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {programPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="bg-white rounded-xl shadow-md transition-all duration-500 overflow-hidden h-full flex flex-col border border-slate-200">
                  {/* Image area with subtle zoom and overlay */}
                  <div className="relative h-64 overflow-hidden">
                    {!imageError[`pillar-${pillar.id}`] ? (
                      <img
                        src={pillar.imagePlaceholder}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        onError={() => handleImageError(`pillar-${pillar.id}`)}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`w-full h-full ${pillar.color} flex items-center justify-center`}
                      >
                        <span className="text-white text-lg font-semibold">
                          {pillar.title.split(' ')[0]}
                        </span>
                      </div>
                    )}
                    {/* Refined Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                    {/* Content integrated into image bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`p-3 rounded-xl text-white shadow-lg backdrop-blur-md bg-white/20 border border-white/20`}>
                          {pillar.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content below */}
                  <div className="p-8 flex-1 flex flex-col bg-white">
                    <p className="text-slate-600 mb-8 flex-1 text-lg leading-relaxed">
                      {pillar.description}
                    </p>
                    <Link to={`/programs#pillar-${pillar.id}`}>
                      <button className="w-full text-center bg-slate-50 hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-bold py-4 rounded-xl transition-all duration-300 group-hover:ring-1 group-hover:ring-blue-100">
                        Explore This Pillar &rarr;
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fifth Pillar - Community Engagement (premium full-width) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-slate-900 rounded-xl shadow-md overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>

              <div className="p-10 md:p-14 text-white relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-8 mb-10">
                  <div className="bg-white/10 p-5 rounded-xl inline-flex self-start backdrop-blur-md border border-white/10 shadow-xl">
                    <FiBriefcase className="w-8 h-8 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-3 tracking-tight">
                      Pillar 5: Community Engagement & Partnerships
                    </h3>
                    <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                      Transformative cross-sector collaboration with traditional leaders, local authorities, and civil society for truly sustainable grassroots impact.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors group">
                    <h4 className="font-bold text-xl mb-3 text-white">Community Ownership</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      Empowering local actors through intensive volunteer training and community-driven program implementation.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors group">
                    <h4 className="font-bold text-xl mb-3 text-white">Peacebuilding</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      Proactive crime and violence prevention cultivated through dynamic social cohesion initiatives.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors group">
                    <h4 className="font-bold text-xl mb-3 text-white">Strategic Partnerships</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      Fostering multi-stakeholder collaboration for comprehensive, scalable developmental impact.
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-5">
                  <Link to="/partnership">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                      Partner With Us
                    </button>
                  </Link>
                  <Link to="/programs#community">
                    <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm">
                      Learn More Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* National & Strategic Alignment Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image with Premium Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${Children4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              National & Strategic Alignment
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Contributing to Liberia's development frameworks through targeted interventions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* YTEI Alignment Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] transition-shadow duration-500"
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

            {/* NADAP Alignment Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] transition-shadow duration-500"
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

      {/* About & Counties CTA Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-5 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Discover More</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Learn More About KSL & Where We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Explore our organizational story and see how Kids Survivor Liberia operates across all
              15 counties through prevention, protection, and empowerment programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* About Us card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md border border-slate-100 p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-6 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FiHome className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1.5">About Kids Survivor Liberia</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Read more about our mandate, strategic pillars, and how we align with NADAP and YTEI
                  to serve vulnerable populations across Liberia.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Go to About Us
                  <FiArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Counties card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md border border-slate-100 p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-6 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1.5">
                  Our Presence in 15 Counties
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Visit our counties section to see how KSL&apos;s programs are implemented across
                  Liberia, with dedicated pages for each county&apos;s activities.
                </p>
                <Link
                  to="/counties"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  View Counties & Activities
                  <FiArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className='px-8 mx-auto bg-white py-24'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Leadership & Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Committed professionals driving NADAP and YTEI-aligned interventions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 overflow-hidden transition-all duration-300 group"
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

          {/* Team Page Navigation Button */}
          <div className="flex justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link to="/team">
                <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                  <span>View All Members</span>
                  <FiArrowRight className="ml-2" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-5 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 text-blue-700 rounded-full text-sm font-bold tracking-wide uppercase mb-4 shadow-sm border border-blue-100">
              <FiMessageSquare className="mr-2" />
              PROGRAM UPDATES & INSIGHTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Latest from Our Programs
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Updates on our NADAP and YTEI-aligned initiatives and their impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {latestNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 overflow-hidden transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                      <FiCalendar className="mr-2 shrink-0 text-blue-500" />
                      {news.date}
                      <span className="mx-3 text-slate-300">•</span>
                      <FiUser className="mr-2 shrink-0 text-blue-500" />
                      {news.author}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-3 leading-snug">
                      {news.title}
                    </h3>

                    <p className="text-slate-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                      {news.excerpt}
                    </p>

                    <div className="flex justify-start items-center pt-6 border-t border-slate-100">
                      <Link to={news.link} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold group/link">
                        Read Story
                        <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
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

      {/* FAQ Section - Premium */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Learn more about our NADAP and YTEI-aligned approach to drug prevention and youth empowerment
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-100 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors flex items-start gap-3">
                    <span className="text-blue-400 mt-1 flex-shrink-0">Q.</span>
                    {faq.question}
                  </h3>
                  <span className="text-blue-600 font-bold ml-4">{faq.open ? '−' : '+'}</span>
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: faq.open ? 'auto' : 0, opacity: faq.open ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-7 mt-3">
                    <p className="text-slate-600 leading-relaxed">
                      <span className="text-slate-400 font-bold mr-2 hidden sm:inline">A.</span>
                      {faq.answer}
                    </p>

                    {faq.links && (
                      <div className="flex flex-wrap gap-4 pt-4 mt-4 border-t border-slate-100">
                        {faq.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            to={link.path}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                          >
                            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-blue-600 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:origin-left">
                              {link.text}
                            </span>
                            <FiChevronRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;