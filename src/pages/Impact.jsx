import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  FiTrendingUp,
  FiTarget,
  FiMap,
  FiBarChart2,
  FiPlay,
  FiUsers,
  FiHeart,
  FiAward,
  FiCheckCircle
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import HeaderImage from '../assets/Talking to children.jpeg';
import StudentsImpact from '../assets/Students Impacted.jpeg';
import ChildrenImpact from '../assets/Helping Children.jpeg';
import ChildrenImpact2 from '../assets/ChildrenImpact.jpeg';
import Treatment from '../assets/Treatment.jpeg';
import Education from '../assets/Education.jpg';
import SayNoToDrugs from '../assets/Say no to drugs.jpeg';
import Sharing_Food from '../assets/Sharing_Food.jpg';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, prefix = '', suffix = '' }) => {
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
    <div ref={ref} className="inline-block">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const Impact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeVideo, setActiveVideo] = useState(0);

  // Impact Statistics - updated to use numbers instead of strings
  const impactStats = [
    { 
      number: 3000, 
      label: 'Vulnerable Individuals Reached', 
      icon: <FiUsers className="w-8 h-8" />,
      description: 'Children, youth, and vulnerable elderly supported',
      suffix: '+'
    },
    { 
      number: 50, 
      label: 'Communities Engaged', 
      icon: <FiMap className="w-8 h-8" />,
      description: 'Across 7+ counties in Liberia',
      suffix: '+'
    },
    { 
      number: 1000, 
      label: 'Youth in Prevention Programs', 
      icon: <FiTarget className="w-8 h-8" />,
      description: 'NADAP-aligned drug prevention',
      suffix: '+'
    },
    { 
      number: 200, 
      label: 'Individuals in Rehabilitation', 
      icon: <FiHeart className="w-8 h-8" />,
      description: 'Comprehensive recovery support',
      suffix: '+'
    }
  ];

  // Lives Impacted Stories
  const livesImpacted = [
    {
      name: 'Students Impact',
      image: StudentsImpact,
      story: 'Kids Survivor Liberia engaging students through structured awareness sessions, educating them on the dangers of drug abuse and encouraging responsible decision-making. The interaction empowers students with knowledge, confidence, and a clear vision for a positive future.',
      category: 'Education & Prevention',
      location: 'School Programs'
    },
    {
      name: 'Community Outreach',
      image: ChildrenImpact,
      story: 'Kids Survivor Liberia conducting community outreach with children, offering education, care, and support in a safe environment. Through direct engagement, the organization promotes healthy living, discipline, and hope for a drug-free and productive life.',
      category: 'Community Development',
      location: 'Urban Communities'
    },
    {
      name: 'Child Support',
      image: ChildrenImpact2,
      story: 'Kids Survivor Liberia reaching children through community outreach and care initiatives, helping to meet basic needs while fostering unity and compassion. These efforts create a supportive environment where children feel valued, protected, and empowered to grow.',
      category: 'Child Protection',
      location: 'Rural Communities'
    },
    {
      name: 'Medical Support',
      image: Treatment,
      story: 'Kids Survivor Liberia operates a medical team that provides free health services to at-risk youth across multiple counties. These services are offered completely free, supporting the recovery and well-being of vulnerable individuals in alignment with NADAP objectives.',
      category: 'Health Services',
      location: 'Multiple Counties'
    },
  ];

  // Video Stories
  const videoStories = [
    {
      title: 'Education Sponsorship',
      description: 'Look at this girl and these kids being sponsored by Kids Survivor Liberia for free education, providing access to learning opportunities.',
      duration: '0:26',
      category: 'Education',
      poster: Education,
      videoSrc: '/videos/Children_Sponsor..mp4'
    },
    {
      title: 'Drug Prevention Awareness',
      description: 'Kids Survivor Liberia is enlightening students on the risks of drug abuse and how it can damage their health, future, and dreams.',
      duration: '0:38',
      category: 'Prevention',
      poster: SayNoToDrugs,
      videoSrc: '/videos/StudentsImpact.mp4'
    },
    {
      title: 'Community Nutrition Support',
      description: 'Kids Survivor Liberia shares meals with children in the community, providing the nourishment they need to grow, learn, and build a brighter future.',
      duration: '0:38',
      category: 'Nutrition',
      poster: Sharing_Food,
      videoSrc: '/videos/Sharing_food_To_Children.mp4'
    }
  ];

  // Strategic Impact Areas
  const impactAreas = [
    {
      title: 'NADAP 2025-2030 Implementation',
      description: 'Direct contribution to National Anti-Drugs Action Plan goals through community-based interventions',
      icon: <FiTarget className="w-6 h-6" />,
      stats: '3 Pillars Addressed'
    },
    {
      title: 'Multi-County Reach',
      description: 'Strategic presence across Liberia ensuring comprehensive coverage of vulnerable populations',
      icon: <FiMap className="w-6 h-6" />,
      stats: '7+ Counties'
    },
    {
      title: 'Youth Transformation',
      description: 'Comprehensive programs addressing prevention, rehabilitation, and empowerment',
      icon: <FiTrendingUp className="w-6 h-6" />,
      stats: '1,500+ Youth'
    },
    {
      title: 'Community Resilience',
      description: 'Building sustainable support systems for long-term impact and recovery',
      icon: <FiUsers className="w-6 h-6" />,
      stats: '50+ Communities'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Main Header Section */}
                <header className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-blue-900/70 z-10">
                    <img 
                      src={HeaderImage} 
                      alt="Header_Image" 
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
                        Our Impact & Results
                      </motion.h1>
                      <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
                        Transforming lives and communities through NADAP and YTEI-aligned interventions
                      </p>
                    </div>
                  </div>
                </header>

        {/* Main Content */}
        <main className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Impact Statistics with Counting Animation */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Impact by Numbers
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Tracking progress and measuring success across our strategic interventions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                    </div>
                    
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 min-h-14 flex items-center justify-center">
                      <AnimatedCounter 
                        end={stat.number} 
                        duration={2 + (index * 0.3)}
                        suffix={stat.suffix}
                      />
                    </div>
                    
                    <div className="text-gray-800 font-semibold mb-2">
                      {stat.label}
                    </div>
                    
                    <div className="text-gray-500 text-sm">
                      {stat.description}
                    </div>
                    
                    {/* Animated progress indicator */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ delay: 2 + (index * 0.3), duration: 1 }}
                      viewport={{ once: true }}
                      className="h-1 bg-blue-500 rounded-full mx-auto mt-4"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Additional Impact Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <div className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <FiCheckCircle className="mr-2" />
                  <span>
                    Growing impact across <span className="font-bold">7+ counties</span> in Liberia
                  </span>
                </div>
              </motion.div>
            </section>

            {/* Strategic Impact Areas */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Strategic Impact Areas
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Focused interventions creating sustainable change across Liberia
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
                        {area.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{area.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {area.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-blue-600 font-semibold">{area.stats}</span>
                      <Link to="/programs" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                        Learn more →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Lives Impacted Stories */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                  <FiHeart className="mr-2" />
                  SUCCESS STORIES
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Lives We've Transformed
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Real stories of hope, recovery, and empowerment from communities across Liberia
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {livesImpacted.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-64">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {story.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <FiMap className="mr-2" />
                        {story.location}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        {story.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {story.story}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            
            </section>

            {/* Video Impact Stories */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium mb-4">
                  <FiPlay className="mr-2" />
                  VIDEO IMPACT STORIES
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Impact in Action
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Watch our programs transforming lives and communities across Liberia
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {videoStories.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 bg-gray-900">
                      <video 
                        controls 
                        className="w-full h-full object-cover"
                        poster={video.poster}
                      >
                        <source src={video.videoSrc} type="video/mp4" />
                      </video>
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          {video.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-3">
                        {video.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {video.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-gray-500 text-xs">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <ScrollToTopButton />
      <CallToAction />
    </>
  );
};

export default Impact;