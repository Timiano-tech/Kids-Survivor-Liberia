import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiShield,
  FiHeart,
  FiUsers,
  FiBook,
  FiHome,
  FiCheckCircle,
  FiTrendingUp,
  FiCrosshair,
  FiActivity,
  FiAward
} from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import HeaderImage from '../assets/Talking to children.jpeg';
import PreventionImage from '../assets/Say no to drugs.jpeg';
import RehabImage from '../assets/Children3.jpeg';
import EducationImage from '../assets/Children on the assembly.jpeg';
import GenderImage from '../assets/Children4.jpeg';
import CommunityImage from '../assets/Community.jpeg';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programPillars = [
    {
      id: 1,
      title: 'Drug Abuse Prevention & Public Awareness',
      icon: <FiShield className="w-6 h-6" />,
      color: 'blue',
      image: PreventionImage,
      description: 'Community and school-based prevention campaigns aligned with NADAP 2025-2030.',
      components: [
        'School-Based Prevention Programs',
        'Youth-Led Advocacy Campaigns',
        'Peer Education Networks',
        'Community Awareness Sessions'
      ],
      alignment: 'NADAP Pillar 1: Prevention'
    },
    {
      id: 2,
      title: 'Rehabilitation & Social Reintegration',
      icon: <FiHeart className="w-6 h-6" />,
      color: 'blue',
      image: RehabImage,
      description: 'Comprehensive psychosocial support and reintegration pathways.',
      components: [
        'Psychosocial Support Services',
        'Skills Development Training',
        'Family Reintegration Support',
        'Stigma Reduction Programs'
      ],
      alignment: 'NADAP Pillar 2: Treatment'
    },
    {
      id: 3,
      title: 'Education & Skills Development',
      icon: <FiBook className="w-6 h-6" />,
      color: 'blue',
      image: EducationImage,
      description: 'Education support and vocational training for vulnerable populations.',
      components: [
        'Scholarship Programs',
        'Vocational Skills Training',
        'Digital Literacy Programs',
        'Entrepreneurship Training'
      ],
      alignment: 'YTEI Priority'
    },
    {
      id: 4,
      title: 'Gender & Social Inclusion',
      icon: <FiUsers className="w-6 h-6" />,
      color: 'blue',
      image: GenderImage,
      description: 'Targeted empowerment for adolescent girls, widows, and elderly.',
      components: [
        'Adolescent Girls Empowerment',
        'Widows Economic Inclusion',
        'Elderly Support Programs',
        'Social Protection Systems'
      ],
      alignment: 'GESI Integration'
    },
    {
      id: 5,
      title: 'Community Engagement & Peacebuilding',
      icon: <FiHome className="w-6 h-6" />,
      color: 'blue',
      image: CommunityImage,
      description: 'Collaborative approaches with community leaders and partners.',
      components: [
        'Community Leadership Training',
        'Peacebuilding Initiatives',
        'Multi-Stakeholder Partnerships',
        'Crime Prevention Programs'
      ],
      alignment: 'Community-Driven'
    }
  ];

  const policyAlignment = [
    {
      title: 'National Anti-Drugs Action Plan (NADAP) 2025-2030',
      description: 'KSL contributes to NADAP implementation through comprehensive drug demand reduction strategies',
      icon: <FiCrosshair className="w-5 h-5" />,
      color: 'blue',
      details: [
        'Drug use prevention and awareness at community and school levels',
        'Early intervention, rehabilitation, and reintegration for drug-affected individuals',
        'Community-based approaches to drug demand reduction and relapse prevention',
        'Advocacy that promotes public health, dignity, and social reintegration'
      ],
      keyFocus: [
        'Prevention Education',
        'Treatment Services',
        'Reintegration Support',
        'Policy Advocacy'
      ]
    },
    {
      title: 'Youth Transformation & Empowerment Initiative (YTEI)',
      description: 'KSL advances YTEI priorities through youth-centered development programs',
      icon: <FiTrendingUp className="w-5 h-5" />,
      color: 'yellow',
      details: [
        'Strengthening youth leadership, civic engagement, and life skills',
        'Expanding education access, vocational training, and entrepreneurship pathways',
        'Supporting psychosocial well-being and positive youth development',
        'Positioning young people as agents of change and community role models'
      ],
      keyFocus: [
        'Leadership Development',
        'Skills Training',
        'Youth Advocacy',
        'Community Engagement'
      ]
    }
  ];

  const crossCuttingThemes = [
    'Child & Youth Safeguarding',
    'Gender Equality & Social Inclusion',
    'Community Ownership & Sustainability',
    'Accountability & Transparency'
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Main Header Section */}
                <header className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-blue-900/70 z-10">
                    <img 
                      src={HeaderImage} 
                      alt="KSL Background" 
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
                        Our Strategic Programs & National Alignment
                      </motion.h1>
                      <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
                        Implementing NADAP 2025-2030 & YTEI-Aligned Interventions for Sustainable Impact
                      </p>
                    </div>
                  </div>
                </header>

        {/* Main Content */}
        <main className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Policy Alignment Section - EXPANDED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  National Policy Alignment
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our programs are strategically designed to contribute to Liberia's national development frameworks
                </p>
              </div>

              <div className="space-y-8">
                {policyAlignment.map((policy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`rounded-xl shadow-lg border-l-4 ${
                      policy.color === 'blue' 
                        ? 'border-blue-500 bg-linear-to-r from-blue-50 to-white' 
                        : 'border-yellow-500 bg-linear-to-r from-green-50 to-white'
                    } overflow-hidden`}
                  >
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Policy Header */}
                        <div className="md:w-1/3">
                          <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-lg ${
                              policy.color === 'blue' ? 'bg-blue-100' : 'bg-yellow-100'
                            } mr-4`}>
                              <div className={policy.color === 'blue' ? 'text-blue-600' : 'text-yellow-500'}>
                                {policy.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">{policy.title}</h3>
                              <div className={`text-sm font-semibold ${
                                policy.color === 'blue' ? 'text-blue-700' : 'text-yellow-500'
                              } mt-1`}>
                                National Framework
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-6">
                            {policy.description}
                          </p>

                          {/* Key Focus Areas */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <FiAward className={`mr-2 ${
                                policy.color === 'blue' ? 'text-blue-500' : 'text-yellow-500'
                              }`} />
                              Key Focus Areas
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {policy.keyFocus.map((focus, idx) => (
                                <span 
                                  key={idx}
                                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    policy.color === 'blue'
                                      ? 'bg-blue-100 text-blue-700'
                                      : 'bg-yellow-100 text-yellow-700'
                                  }`}
                                >
                                  {focus}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Policy Details */}
                        <div className="md:w-2/3">
                          <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                            <FiCheckCircle className="mr-2 text-gray-400" />
                            KSL Contribution & Implementation
                          </h4>
                          
                          <div className="space-y-4">
                            {policy.details.map((detail, idx) => (
                              <div 
                                key={idx}
                                className="flex items-start p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-shadow"
                              >
                                <div className={`w-2 h-2 rounded-full mt-2 mr-4 ${
                                  policy.color === 'blue' ? 'bg-blue-500' : 'bg-yellow-500'
                                }`}></div>
                                <p className="text-gray-700">{detail}</p>
                              </div>
                            ))}
                          </div>

                          {/* Additional Info */}
                          <div className="mt-6 p-4 bg-white/50 rounded-lg border border-gray-100">
                            <div className="flex items-center text-sm text-gray-600">
                              <FiActivity className="mr-2" />
                              <span>
                                <span className="font-semibold">Implementation Status:</span> Active across all program pillars
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Alignment Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 bg-blue-500 rounded-xl p-8 text-white"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Alignment</h3>
                    <p className="text-blue-100">
                      Our programs integrate both NADAP and YTEI frameworks for holistic impact
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">2</div>
                      <div className="text-sm text-blue-200">National Frameworks</div>
                    </div>
                    <div className="h-12 w-px bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">5</div>
                      <div className="text-sm text-blue-200">Program Pillars</div>
                    </div>
                    <div className="h-12 w-px bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm text-blue-200">Aligned Programs</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Program Pillars Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Our Programmatic Pillars
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Five comprehensive pillars implementing NADAP and YTEI-aligned interventions
                </p>
              </div>

              <div className="space-y-16">
                {programPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                  >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={pillar.image} 
                          alt={pillar.title}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <div className={`inline-flex items-center gap-2 px-3 py-2 ${
                            pillar.color = 'bg-blue-500'
                          } text-white rounded-lg text-sm font-semibold`}>
                            {pillar.icon}
                            <span>Pillar {pillar.id}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                      <div>
                        <span className={`text-sm font-semibold ${
                          pillar.color = 'text-blue-500'
                        } mb-2 block`}>
                          {pillar.alignment}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                          {pillar.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {pillar.description}
                        </p>
                      </div>

                      {/* Components */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <FiCheckCircle className="mr-2 text-gray-400" />
                          Key Components
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {pillar.components.map((component, idx) => (
                            <div 
                              key={idx}
                              className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                            >
                              <span className="text-sm font-medium text-gray-700">{component}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cross-Cutting Themes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Cross-Cutting Themes
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Integrated across all program pillars for comprehensive impact
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {crossCuttingThemes.map((theme, index) => (
                  <div 
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-300 hover:shadow-sm transition-all"
                  >
                    <div className="text-sm font-medium text-gray-800">{theme}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
      
      <ScrollToTopButton />
      <CallToAction />
    </>
  );
};

export default Programs;