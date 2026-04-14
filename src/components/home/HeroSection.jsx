import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause, FiArrowRight } from 'react-icons/fi';

import Education from '../../assets/Children on the assembly.jpeg';
import NoToDrugs from '../../assets/Say no to drugs.jpeg';
import Community from '../../assets/Community.jpeg';
import CommunityOutreach from '../../assets/Community_Children_outreach.jpeg';
import WomenCommunity from '../../assets/Women_in_community.jpeg';
import EducationSkills from '../../assets/School_Students.jpeg';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [imageError, setImageError] = useState({});

  // Hero slides data aligned with international NGO standards and user requirements
  const heroSlides = [
    {
      id: 1,
      title: "Building a Brighter Future",
      subtitle: "For Liberia's Vulnerable Communities",
      description: "Kids Survivor Liberia is committed to protecting vulnerable children, promoting education, and empowering young people to build a brighter future across communities in Liberia.",
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
    },
    {
      id: 4,
      title: "Reaching Every Child in Liberia",
      subtitle: "Nationwide Drug Prevention & Protection Programs",
      description: "Through grassroots community outreach across all 15 counties, KSL works hand-in-hand with families, schools, and local leaders to shield children from drug abuse, exploitation, and neglect — ensuring no child is left behind.",
      imagePlaceholder: CommunityOutreach,
      stats: "Active Across 7 Counties & Expanding"
    },
    {
      id: 5,
      title: "Empowering Women & Girls",
      subtitle: "Education, Skills & Leadership for a Stronger Liberia",
      description: "KSL invests in the education and empowerment of women, adolescent girls, and widows — providing skills training, psychosocial support, and safe spaces to help them lead change in their communities.",
      imagePlaceholder: WomenCommunity,
      stats: "Gender Equity & Inclusion"
    },
    {
      id: 6,
      title: "Education & Skills Development",
      subtitle: "Unlocking Potential Through Learning & Vocational Training",
      description: "KSL provides access to quality education, literacy programs, and hands-on vocational training — equipping children, youth, and young adults with the knowledge and skills they need to break the cycle of poverty and build self-sufficient livelihoods.",
      imagePlaceholder: EducationSkills,
      stats: "Building Future Leaders"
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

  const handleImageError = (id) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
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
                  <div className="h-0.5 w-12 bg-yellow-400 mr-4"></div>
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
                    <button className="group relative overflow-hidden rounded-full bg-yellow-500 px-6 py-3 sm:px-8 sm:py-3.5 transition-all duration-300 hover:bg-yellow-400 hover:shadow-md hover:-translate-y-1">
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
              className={`transition-all duration-500 rounded-full h-1.5 sm:h-2 ${index === currentSlide ? 'w-6 sm:w-8 bg-yellow-400' : 'w-3 sm:w-4 bg-white/40 hover:bg-white/70'
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
  );
};

export default HeroSection;
