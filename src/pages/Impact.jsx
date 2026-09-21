import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SEO from '../components/SEO';
import RelatedContent from '../components/RelatedContent';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import {
  FiTrendingUp,
  FiTarget,
  FiMap,
  FiUsers,
  FiHeart,
  FiCheckCircle
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import StudentsImpact from '../assets/Students Impacted.jpeg';
import ChildrenImpact2 from '../assets/ChildrenImpact.jpg';
import Treatment from '../assets/Treatment.jpeg';
import Education from '../assets/Education.jpg';
import SayNoToDrugs from '../assets/Say no to drugs.jpeg';
import Sharing_Food from '../assets/Sharing_Food.jpg';
import JohnHoward from '../assets/Success_Story.jpeg';
import Franklin_Mondor from '../assets/Success_story2.jpeg';
import Samuel_Meaway from '../assets/Success_Story3.jpeg';
import SuccessStory4 from '../assets/Success_Story4.jpeg';
import SlumRecoveryImg from '../assets/Community_Children.jpeg';

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
      description: 'Across 15 counties in Liberia',
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
      name: 'John Howard',
      image: JohnHoward,
      story: 'John Howard, once a homeless drug user and criminal in Lofa County, was reached by KSL in July 2025. Though initially resistant, he joined their support network. Of the 15 youths in his original group, two died from drugs, but John survived. Now the sole survivor, he is a living example of transformation and is actively rebuilding his life.',
      category: 'Rehabilitation & Social Reintegration',
      location: 'Lofa County'
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
      story: 'Kids Survivor Liberia operates a medical team that provides free health services to at risk youth across multiple counties. These services are offered completely free, supporting the recovery and wellbeing of vulnerable individuals in alignment with NADAP objectives.',
      category: 'Health Services',
      location: 'Multiple Counties'
    },
    {
      name: 'Franklin Mondor',
      image: Franklin_Mondor,
      story: 'Franklin Mondor, a 41-year-old former drug dealer from Nimba County, spent over 13 years dealing drugs and opposing outreach programs like Kids Survivor Liberia. On January 2, 2026, he transformed his life, was taken in by the organization, and is now seeking paths for professional reintegration.',
      category: 'Rehabilitation & Social Reintegration',
      location: 'Nimba County'
    },
    {
      name: 'Samuel Meaway',
      image: Samuel_Meaway,
      story: 'Samuel Meaway, formerly known as "50," spent over a year in a corrections facility before a KSL outreach offered him guidance. This turning point helped him break free from addiction and crime, and he is now rebuilding his life with purpose and hope.',
      category: 'Rehabilitation & Social Reintegration',
      location: 'Nimba County'
    },
    {
      name: 'Andrew Monger',
      image: SuccessStory4,
      story: 'Andrew Monger overcame drug and alcohol addiction, transforming his life from hopelessness to purpose and peace. His story illustrates that change is possible with support and guidance, offering a message of hope to other young people.',
      category: 'Rehabilitation & Social Reintegration',
      location: 'Nimba County'
    },
    {
      name: 'Monrovia Slum Recovery',
      image: SlumRecoveryImg,
      story: 'Our urban outreach in high-density communities like Clara Town and West Point has successfully reintegrated over 150 youth back into productive life through vocational training and health interventions.',
      category: 'Urban Intervention',
      location: 'Montserrado County'
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
      description: 'Direct contribution to National Anti-Drugs Action Plan goals through community based interventions',
      icon: <FiTarget className="w-6 h-6" />,
      stats: '3 Pillars Addressed'
    },
    {
      title: 'Multi-County Reach',
      description: 'Strategic presence across Liberia ensuring comprehensive coverage of vulnerable populations',
      icon: <FiMap className="w-6 h-6" />,
      stats: '15 Counties'
    },
    {
      title: 'Youth Transformation',
      description: 'Comprehensive programs addressing prevention, rehabilitation, and empowerment',
      icon: <FiTrendingUp className="w-6 h-6" />,
      stats: '10000+ Youth'
    },
    {
      title: 'Community Resilience',
      description: 'Building sustainable support systems for long term impact and recovery',
      icon: <FiUsers className="w-6 h-6" />,
      stats: '120+ Communities'
    }
  ];

  return (
    <>
      <SEO
        title="Our Impact — Kids Survivor Liberia Results & Numbers"
        description="See Kids Survivor Liberia's measurable impact: 13,000+ children reached, 12,500+ drug sessions, 3,000+ households engaged across 15 Liberian counties. Real results, real lives changed."
        canonical="/impact"
        keywords={[
          'KSL impact Liberia',
          'child protection impact numbers',
          'Liberia youth statistics',
          'NADAP results Liberia',
          'drug prevention reach Liberia',
          'community impact KSL',
          'NGO outcomes Liberia',
          'measurable impact Liberia children',
        ]}
        breadcrumbs={[{ name: 'Our Impact', url: '/impact' }]}
      />
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="Measurable Results"
          title="Our Impact & Results"
          description="Transforming lives and communities through NADAP and YTEI-aligned interventions"
          image={StudentsImpact}
          alt="Impact Background"
        />

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Impact Statistics with Counting Animation */}
            <section className="mb-20 lg:mb-24">
              <SectionHeading
                eyebrow="Quantifiable Change"
                title="Impact by Numbers"
                description="Tracking progress and measuring success across our strategic interventions"
                className="mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 shadow-sm p-8 text-center"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-blue-50 text-blue-700 border border-blue-200 inline-flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>

                    <div className="text-4xl md:text-5xl font-semibold text-slate-900 mb-3 min-h-14 flex items-center justify-center tracking-tight">
                      <AnimatedCounter
                        end={stat.number}
                        duration={2 + (index * 0.3)}
                        suffix={stat.suffix}
                      />
                    </div>

                    <div className="text-slate-800 font-semibold text-lg mb-2">
                      {stat.label}
                    </div>

                    <div className="text-slate-500 text-sm leading-relaxed">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Impact Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-14 text-center"
              >
                <div className="inline-flex items-center px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 text-base font-medium">
                  <div className="p-1.5 bg-blue-50 border border-blue-200 mr-3 text-blue-700">
                    <FiCheckCircle className="w-5 h-5" />
                  </div>
                  <span>
                    Growing impact across <span className="font-semibold text-blue-700">15 counties</span> in Liberia
                  </span>
                </div>
              </motion.div>
            </section>

            {/* Strategic Impact Areas */}
            <section className="mb-20 lg:mb-24">
              <SectionHeading
                eyebrow="Sustainable Approach"
                title="Strategic Impact Areas"
                description="Focused interventions creating sustainable change across Liberia"
                className="mb-12"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {impactAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 shadow-sm p-8 hover:border-blue-300 transition-colors flex flex-col h-full"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-50 text-blue-700 border border-blue-200 mr-4">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 leading-tight">{area.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                      {area.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-200">
                      <span className="text-slate-800 font-semibold text-sm bg-slate-50 border border-slate-200 px-3 py-1.5">{area.stats}</span>
                      <Link to="/programs" className="text-blue-700 hover:text-blue-800 text-sm font-semibold flex items-center">
                        Learn more <span className="ml-1 tracking-tighter">→</span>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Lives Impacted Stories */}
            <section className="mb-20 lg:mb-24">
              <SectionHeading
                eyebrow="Success Stories"
                title="Lives We've Transformed"
                description="Real stories of hope, recovery, and empowerment from communities across Liberia"
                className="mb-12"
              />

              <div className="grid md:grid-cols-2 gap-10">
                {livesImpacted.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="relative h-72 bg-slate-100">
                      <div className="absolute inset-0 bg-slate-950/50 z-10"></div>
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-6 left-6 z-20">
                        <span className="bg-blue-700 text-white px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                          {story.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 lg:p-10">
                      <div className="flex items-center text-sm font-semibold tracking-wider uppercase text-slate-500 mb-4">
                        <FiMap className="mr-2 text-blue-600" />
                        {story.location}
                      </div>

                      <h3 className="text-2xl font-semibold text-slate-900 mb-5 tracking-tight">
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

            {/* Video Impact Stories */}
            <section>
              <SectionHeading
                eyebrow="Video Documentaries"
                title="Impact in Action"
                description="Watch our programs transforming lives and communities across Liberia through these short documentaries."
                className="mb-12"
              />

              <div className="grid md:grid-cols-3 gap-8">
                {videoStories.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 shadow-sm flex flex-col h-full"
                  >
                    <div className="relative h-56 bg-slate-900">
                      <video
                        controls
                        className="w-full h-full object-cover"
                        poster={video.poster}
                      >
                        <source src={video.videoSrc} type="video/mp4" />
                      </video>
                      <div className="absolute top-4 right-4 pointer-events-none">
                        <span className="bg-slate-900 text-white px-3 py-1.5 text-xs font-bold tracking-wider">
                          {video.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 text-xs font-bold tracking-widest uppercase">
                          {video.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
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

        <CTABanner
          title="Every gift creates measurable impact"
          description="Join us in transforming lives across Liberia — your donation supports prevention, rehabilitation, education, and protection services."
          primaryLabel="Support Our Work"
          primaryTo="/donate"
          secondaryLabel="Explore Our Programs"
          secondaryTo="/programs"
        />
        <RelatedContent />
      </div>
    </>
  );
};

export default Impact;