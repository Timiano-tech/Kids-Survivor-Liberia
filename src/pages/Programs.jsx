import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import RelatedContent from '../components/RelatedContent';
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
        'School Based Prevention Programs',
        'Youth Led Advocacy Campaigns',
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
      alignment: 'Community Driven'
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
        'Early intervention, rehabilitation, and reintegration for drug affected individuals',
        'Community based approaches to drug demand reduction and relapse prevention',
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
        'Supporting psychosocial wellbeing and positive youth development',
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
      <SEO
        title="Our Programs in Liberia — Child Protection & Youth Empowerment"
        description="Explore Kids Survivor Liberia strategic programs in drug abuse prevention, child protection, youth empowerment, and gender inclusion across Liberia."
        canonical="/programs"
        keywords={['KSL programs', 'child protection Liberia', 'youth empowerment Liberia', 'NADAP Liberia', 'YTEI Liberia']}
      />
      <div className="min-h-screen bg-white">
        {/* Premium Header */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[100px] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src={HeaderImage}
              alt="KSL Programs Background"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-slate-950/70"></div>
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Core Initiatives</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                Our Strategic Programs
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                Implementing NADAP 2025-2030 & YTEI-Aligned Interventions for Sustainable, Transformative Impact
              </p>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Policy Alignment Section - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-32 mt-12"
            >
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">National Frameworks</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  National Policy Alignment
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Our programs are strategically designed to actively contribute to Liberia's core national development frameworks.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                {policyAlignment.map((policy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md border border-slate-100 transition-all duration-500 overflow-hidden group flex flex-col h-full"
                  >
                    <div className={`p-8 lg:p-10 border-b-4 ${policy.color === 'blue' ? 'border-blue-500' : 'border-yellow-400'} flex-1 relative overflow-hidden`}>
                      <div className={`absolute top-0 right-0 w-48 h-48 ${policy.color === 'blue' ? 'bg-blue-50' : 'bg-yellow-50'} rounded-bl-2xl -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-110`}></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-5 mb-8">
                          <div className={`p-4 rounded-lg ${policy.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'} shadow-sm`}>
                            {policy.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{policy.title}</h3>
                            <span className={`text-sm font-bold uppercase tracking-wider ${policy.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'} mt-1 block`}>National Framework</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                          {policy.description}
                        </p>

                        <div className="mb-8 p-6 rounded-lg bg-slate-50 border border-slate-100">
                          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <FiAward className={policy.color === 'blue' ? 'text-blue-500' : 'text-yellow-500'} />
                            Key Focus Areas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {policy.keyFocus.map((focus, idx) => (
                              <span key={idx} className={`px-4 py-2 rounded-lg text-sm font-bold shadow-sm ${policy.color === 'blue' ? 'bg-white text-blue-700 border border-blue-100' : 'bg-white text-yellow-700 border border-yellow-100'}`}>
                                {focus}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <FiCheckCircle className="text-slate-400" />
                            Implementation Strategy
                          </h4>
                          <ul className="space-y-4">
                            {policy.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <div className={`w-2 h-2 rounded-full mt-2.5 shrink-0 ${policy.color === 'blue' ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
                                <span className="text-slate-700 leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Alignment Summary  */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-16 bg-blue-900 rounded-lg p-10 md:p-14 text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight drop-shadow-sm">Comprehensive Alignment</h3>
                    <p className="text-blue-100 text-lg leading-relaxed font-light">
                      Our programs intricately weave NADAP and YTEI frameworks into a cohesive, holistic impact strategy for Liberia.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center md:justify-end gap-6 sm:gap-10">
                    <div className="text-center group">
                      <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2 drop-shadow-md group-hover:scale-110 transition-transform">2</div>
                      <div className="text-xs sm:text-sm text-blue-200 font-bold tracking-widest uppercase">Frameworks</div>
                    </div>
                    <div className="h-20 w-px bg-white/20"></div>
                    <div className="text-center group">
                      <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2 drop-shadow-md group-hover:scale-110 transition-transform">5</div>
                      <div className="text-xs sm:text-sm text-blue-200 font-bold tracking-widest uppercase">Pillars</div>
                    </div>
                    <div className="h-20 w-px bg-white/20"></div>
                    <div className="text-center group">
                      <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2 drop-shadow-md group-hover:scale-110 transition-transform">100%</div>
                      <div className="text-xs sm:text-sm text-blue-200 font-bold tracking-widest uppercase">Aligned</div>
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
              className="mb-32 mt-20"
            >
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Approach</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Our Programmatic Pillars
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Five comprehensive pillars implementing NADAP and YTEI-aligned interventions
                </p>
              </div>

              <div className="space-y-24">
                {programPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center group`}
                  >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-lg -translate-x-4 translate-y-4 opacity-10 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                      <div className="relative rounded-lg overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-slate-950/40"></div>
                        <div className="absolute bottom-6 left-6">
                          <div className={`inline-flex items-center gap-3 px-5 py-2.5 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-yellow-500'
                            } text-white rounded-lg text-sm font-bold tracking-wider shadow-lg backdrop-blur-sm`}>
                            {pillar.icon}
                            <span className="uppercase">Pillar {pillar.id}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                      <div className="mb-8">
                        <span className={`inline-block px-4 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase mb-4 ${index % 2 === 0 ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-yellow-50 text-yellow-600 border border-yellow-100'
                          }`}>
                          {pillar.alignment}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight line-clamp-2">
                          {pillar.title}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>

                      {/* Components */}
                      <div className="bg-slate-50 p-6 md:p-8 rounded-lg border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-5 flex items-center text-lg">
                          <div className={`p-2 rounded-lg mr-3 ${index % 2 === 0 ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'}`}>
                            <FiCheckCircle className="w-5 h-5" />
                          </div>
                          Key Components
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {pillar.components.map((component, idx) => (
                            <div
                              key={idx}
                              className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group/comp flex items-start"
                            >
                              <div className={`w-1.5 h-1.5 rounded-lg mt-2 mr-3 shrink-0 ${index % 2 === 0 ? 'bg-blue-400' : 'bg-yellow-400'}`}></div>
                              <span className="text-slate-700 font-medium">{component}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </main>
        <RelatedContent />
      </div>
    </>
  );
};

export default Programs;