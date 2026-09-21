import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import RelatedContent from '../components/RelatedContent';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import {
  FiShield,
  FiHeart,
  FiUsers,
  FiBook,
  FiHome,
  FiCheckCircle,
  FiTrendingUp,
  FiCrosshair,
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

  return (
    <>
      <SEO
        title="Our Programs in Liberia — Child Protection & Youth Empowerment"
        description="Explore Kids Survivor Liberia strategic programs in drug abuse prevention, child protection, youth empowerment, and gender inclusion across Liberia. Aligned with NADAP 2025-2030 and YTEI national frameworks."
        canonical="/programs"
        keywords={[
          'KSL programs',
          'child protection programs Liberia',
          'youth empowerment programs Liberia',
          'drug abuse prevention Liberia',
          'NADAP Liberia',
          'YTEI Liberia',
          'rehabilitation programs Liberia',
          'vulnerable children programs Liberia',
          'community development Liberia',
        ]}
        breadcrumbs={[{ name: 'Our Programs', url: '/programs' }]}
      />
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="Core Initiatives"
          title="Our Strategic Programs"
          description="Implementing NADAP 2025-2030 & YTEI-Aligned Interventions for Sustainable, Transformative Impact"
          image={HeaderImage}
          alt="KSL Programs Background"
        />

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Policy Alignment Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20 lg:mb-24"
            >
              <SectionHeading
                eyebrow="National Frameworks"
                title="National Policy Alignment"
                description="Our programs are strategically designed to actively contribute to Liberia's core national development frameworks."
                className="mb-12"
              />

              <div className="grid lg:grid-cols-2 gap-10">
                {policyAlignment.map((policy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 shadow-sm p-8 lg:p-10 flex flex-col h-full"
                  >
                    <div className="flex-1">
                      <div className="relative z-10">
                        <div className="flex items-center gap-5 mb-8">
                          <div className={`p-4 ${policy.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-500 text-slate-900'}`}>
                            {policy.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">{policy.title}</h3>
                            <span className={`text-sm font-semibold uppercase tracking-wider ${policy.color === 'blue' ? 'text-blue-700' : 'text-yellow-600'} mt-1 block`}>National Framework</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                          {policy.description}
                        </p>

                        <div className="mb-8 p-6 bg-slate-50 border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <FiAward className={policy.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'} />
                            Key Focus Areas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {policy.keyFocus.map((focus, idx) => (
                              <span key={idx} className={`px-4 py-2 text-sm font-semibold ${policy.color === 'blue' ? 'bg-white text-blue-700 border border-blue-200' : 'bg-white text-yellow-600 border border-yellow-500'}`}>
                                {focus}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            <FiCheckCircle className="text-slate-400" />
                            Implementation Strategy
                          </h4>
                          <ul className="space-y-4">
                            {policy.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-4">
                                <div className={`w-2 h-2 mt-2.5 shrink-0 ${policy.color === 'blue' ? 'bg-blue-600' : 'bg-yellow-500'}`}></div>
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

              {/* Alignment Summary */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-16 bg-slate-950 border border-slate-800 p-10 md:p-14 text-white"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-white">Comprehensive Alignment</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Our programs intricately weave NADAP and YTEI frameworks into a cohesive, holistic impact strategy for Liberia.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center md:justify-end gap-6 sm:gap-10">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl font-semibold text-yellow-400 mb-2">2</div>
                      <div className="text-xs sm:text-sm text-blue-200 font-semibold tracking-widest uppercase">Frameworks</div>
                    </div>
                    <div className="h-20 w-px bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl font-semibold text-yellow-400 mb-2">5</div>
                      <div className="text-xs sm:text-sm text-blue-200 font-semibold tracking-widest uppercase">Pillars</div>
                    </div>
                    <div className="h-20 w-px bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl font-semibold text-yellow-400 mb-2">100%</div>
                      <div className="text-xs sm:text-sm text-blue-200 font-semibold tracking-widest uppercase">Aligned</div>
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
            >
              <SectionHeading
                eyebrow="Our Approach"
                title="Our Programmatic Pillars"
                description="Five comprehensive pillars implementing NADAP and YTEI-aligned interventions"
                className="mb-12"
              />

              <div className="space-y-24">
                {programPillars.map((pillar, index) => (
                  <div key={pillar.id} id={pillar.id === 5 ? 'community' : undefined}>
                    <motion.div
                      id={`pillar-${pillar.id}`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
                    >
                      {/* Image Section */}
                      <div className="w-full lg:w-1/2">
                        <div className="bg-slate-100 border border-slate-200 p-2">
                          <div className="relative">
                            <img
                              src={pillar.image}
                              alt={pillar.title}
                              className="w-full h-80 md:h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-slate-950/40"></div>
                            <div className="absolute bottom-6 left-6">
                              <div className={`inline-flex items-center gap-3 px-5 py-2.5 ${index % 2 === 0 ? 'bg-blue-700' : 'bg-yellow-500'} ${index % 2 === 0 ? 'text-white' : 'text-slate-900'} text-sm font-semibold`}>
                                {pillar.icon}
                                <span className="uppercase tracking-wider">Pillar {pillar.id}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-1/2">
                        <div className="mb-8">
                          <span className={`inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4 ${index % 2 === 0 ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-yellow-500 text-slate-900'}`}>
                            {pillar.alignment}
                          </span>
                          <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight line-clamp-2">
                            {pillar.title}
                          </h3>
                          <p className="text-slate-600 text-lg leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>

                        {/* Components */}
                        <div className="bg-slate-50 border border-slate-200 p-6 md:p-8">
                          <h4 className="font-semibold text-slate-900 mb-5 flex items-center text-lg">
                            <div className={`p-2 mr-3 ${index % 2 === 0 ? 'bg-blue-100 text-blue-700' : 'bg-yellow-500 text-slate-900'}`}>
                              <FiCheckCircle className="w-5 h-5" />
                            </div>
                            Key Components
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {pillar.components.map((component, idx) => (
                              <div
                                key={idx}
                                className="bg-white border border-slate-200 p-4 shadow-sm flex items-start"
                              >
                                <div className={`w-1.5 h-1.5 mt-2 mr-3 shrink-0 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-yellow-500'}`}></div>
                                <span className="text-slate-700 font-medium">{component}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <CTABanner
          title="Partner with us to transform lives"
          description="Support our programs in drug prevention, rehabilitation, education, and community peacebuilding across Liberia."
          primaryLabel="Donate Now"
          primaryTo="/donate"
          secondaryLabel="Become a Partner"
          secondaryTo="/partnership"
        />
        <RelatedContent />
      </div>
    </>
  );
};

export default Programs;