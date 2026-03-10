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
      number: 12000,
      label: 'Vulnerable Individuals Reached',
      icon: <FiUsers className="w-8 h-8" />,
      description: 'Children, youth, and vulnerable elderly supported',
      suffix: '+'
    },
    {
      number: 120,
      label: 'Communities Engaged',
      icon: <FiMap className="w-8 h-8" />,
      description: 'Across 7+ counties in Liberia',
      suffix: '+'
    },
    {
      number: 10000,
      label: 'Youth in Prevention Programs',
      icon: <FiTarget className="w-8 h-8" />,
      description: 'NADAP-aligned drug prevention',
      suffix: '+'
    },
    {
      number: 8000,
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
      stats: '10000+ Youth'
    },
    {
      title: 'Community Resilience',
      description: 'Building sustainable support systems for long-term impact and recovery',
      icon: <FiUsers className="w-6 h-6" />,
      stats: '120+ Communities'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        {/* Main Header Section - Premium Redesign */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl">
          <div className="absolute inset-0 z-0">
            <img
              src={HeaderImage}
              alt="Impact Background"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Measurable Results</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                Our Impact & Results
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                Transforming lives and communities through NADAP and YTEI-aligned interventions
              </p>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-20 relative">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            {/* Impact Statistics with Counting Animation - Premium */}
            <section className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Quantifiable Change</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Impact by Numbers
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Tracking progress and measuring success across our strategic interventions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 text-center hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-slate-100 transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-[3rem] -mx-4 -my-4 transition-transform group-hover:scale-125 duration-700 ease-out z-0"></div>

                    <div className="flex justify-center mb-6 relative z-10">
                      <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm inline-flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>

                    <div className="text-4xl md:text-5xl font-black text-slate-900 mb-3 min-h-14 flex items-center justify-center tracking-tight group-hover:text-blue-600 transition-colors relative z-10">
                      <AnimatedCounter
                        end={stat.number}
                        duration={2 + (index * 0.3)}
                        suffix={stat.suffix}
                      />
                    </div>

                    <div className="text-slate-800 font-bold text-lg mb-2 relative z-10">
                      {stat.label}
                    </div>

                    <div className="text-slate-500 text-sm leading-relaxed relative z-10">
                      {stat.description}
                    </div>

                    {/* Animated progress indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 1 + (index * 0.2), duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-6 rounded-full relative z-10 opacity-50 group-hover:opacity-100"
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
                className="mt-16 text-center"
              >
                <div className="inline-flex items-center px-8 py-4 bg-white shadow-md border border-slate-100 text-slate-700 rounded-full text-base font-medium hover:shadow-lg transition-shadow">
                  <div className="p-1.5 bg-blue-100 rounded-full mr-3 text-blue-600">
                    <FiCheckCircle className="w-5 h-5" />
                  </div>
                  <span>
                    Growing impact across <span className="font-bold text-blue-600">7+ counties</span> in Liberia
                  </span>
                </div>
              </motion.div>
            </section>

            {/* Strategic Impact Areas - Premium */}
            <section className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Sustainable Approach</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Strategic Impact Areas
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Focused interventions creating sustainable change across Liberia
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {impactAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] p-8 border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{area.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                      {area.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100">
                      <span className="text-slate-900 font-bold text-sm bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{area.stats}</span>
                      <Link to="/programs" className="text-blue-600 hover:text-blue-700 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                        Learn more <span className="ml-1 tracking-tighter">→</span>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Lives Impacted Stories - Premium */}
            <section className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center px-5 py-2.5 bg-red-50 text-red-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-red-100">
                  <FiHeart className="mr-2 w-4 h-4 fill-current" />
                  Success Stories
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Lives We've Transformed
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Real stories of hope, recovery, and empowerment from communities across Liberia
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-10">
                {livesImpacted.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-slate-100 transition-all duration-500 group"
                  >
                    <div className="relative h-72 overflow-hidden bg-slate-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute bottom-6 left-6 z-20">
                        <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md backdrop-blur-sm">
                          {story.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 lg:p-10 relative">
                      <div className="absolute top-0 right-10 -translate-y-1/2 p-4 bg-white rounded-full shadow-lg border border-slate-100 text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                        <FiUsers className="w-6 h-6" />
                      </div>
                      <div className="flex items-center text-sm font-bold tracking-wider uppercase text-slate-400 mb-4">
                        <FiMap className="mr-2 text-blue-400" />
                        {story.location}
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-5 tracking-tight group-hover:text-blue-600 transition-colors">
                        {story.name}
                      </h3>

                      <p className="text-slate-600 leading-relaxed text-lg">
                        {story.story}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Video Impact Stories - Premium */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-md shadow-slate-900/20">
                  <FiPlay className="mr-2 w-4 h-4 fill-current" />
                  Video Documentaries
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Impact in Action
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Watch our programs transforming lives and communities across Liberia through these short documentaries.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {videoStories.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border border-slate-100 transition-all duration-500 group flex flex-col h-full"
                  >
                    <div className="relative h-56 bg-slate-900 overflow-hidden">
                      <video
                        controls
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        poster={video.poster}
                      >
                        <source src={video.videoSrc} type="video/mp4" />
                      </video>
                      <div className="absolute top-4 right-4 pointer-events-none">
                        <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-sm">
                          {video.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold tracking-widest uppercase border border-blue-100">
                          {video.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                        {video.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                        {video.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Impact;