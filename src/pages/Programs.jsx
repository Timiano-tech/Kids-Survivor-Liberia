import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiShield,
  FiHeart,
  FiBriefcase,
  FiTarget,
  FiCheckCircle,
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiAward,
  FiBarChart2
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import HeaderImage from '../assets/Talking to children.jpeg';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Program Boxes Data
  const programBoxes = [
    {
      id: 1,
      title: 'Prevention, Education & Early Intervention',
      icon: <FiShield className="w-8 h-8" />,
      color: 'green',
      subMenus: [
        'School-Based Drug Prevention',
        'Community Awareness & Outreach',
        'Life Skills & Resilience Education',
        'Youth Peer Education & Leadership',
        'Media, Advocacy & Behavior Change'
      ],
      indicators: [
        'Number of schools implementing prevention programs',
        'Number of children and adolescents reached with prevention education (disaggregated by age and sex)',
        '% increase in knowledge of drug risks among participating youth',
        'Number of community awareness sessions conducted',
        'Number of trained youth peer educators'
      ],
      yteiAlignment: [
        'Youth empowerment',
        'Life skills development',
        'Leadership and civic engagement'
      ],
      unicefAlignment: [
        'Adolescent development and participation',
        'Prevention-focused, rights-based programming',
        'Behavior change communication (BCC)'
      ]
    },
    {
      id: 2,
      title: 'Treatment Referral, Psychosocial Support & Child Protection',
      icon: <FiHeart className="w-8 h-8" />,
      color: 'blue',
      subMenus: [
        'Screening & Early Identification',
        'Referral Pathways & Case Management',
        'Psychosocial Support & Counseling',
        'Child Protection & Safeguarding',
        'Family & Caregiver Support'
      ],
      indicators: [
        'Number of at-risk children and youth screened',
        'Number of referrals successfully linked to services',
        'Number of children receiving psychosocial support',
        '% of cases managed using child safeguarding protocols',
        'Number of families receiving caregiver support services'
      ],
      yteiAlignment: [
        'Youth protection and well-being',
        'Social support systems',
        'Trauma-informed interventions'
      ],
      unicefAlignment: [
        'Child protection systems strengthening',
        'Case management standards',
        'Do No Harm and safeguarding principles'
      ]
    },
    {
      id: 3,
      title: 'Reintegration, Skills Development & Economic Empowerment',
      icon: <FiBriefcase className="w-8 h-8" />,
      color: 'purple',
      subMenus: [
        'Vocational & Life Skills Training',
        'Youth Employment & Entrepreneurship',
        'Community Reintegration Programs',
        'Economic Empowerment for Vulnerable Youth',
        'Private Sector & Cooperative Partnerships'
      ],
      indicators: [
        'Number of youth enrolled in vocational or skills training',
        '% of trained youth engaged in employment or self-employment',
        'Number of reintegrated youth completing recovery support plans',
        'Number of partnerships with private sector/cooperatives',
        '% reduction in relapse risk among supported beneficiaries'
      ],
      yteiAlignment: [
        'Economic empowerment',
        'Sustainable livelihoods',
        'Youth-led entrepreneurship'
      ],
      unicefAlignment: [
        'Youth economic participation',
        'Transition from protection to self-reliance',
        'Resilience and recovery programming'
      ]
    }
  ];

  // Cross-Cutting Standards
  const crossCutting = [
    {
      title: 'YTEI Core Principles',
      items: [
        'Youth-centered and youth-led design',
        'Skills for employability and resilience',
        'Inclusion of vulnerable and marginalized youth'
      ]
    },
    {
      title: 'UNICEF Core Standards',
      items: [
        'Child rights-based approach',
        'Gender-responsive programming',
        'Safeguarding and accountability',
        'Evidence-based design and results monitoring'
      ]
    },
    {
      title: 'Regional & Policy Alignment',
      items: [
        'NADAP 2025–2030 (Prevention, Care, Reintegration)',
        'ECOWAS regional drug and youth frameworks',
        'AU Agenda 2063 (Aspiration 1 & 6)',
        'Liberia–Nigeria regional partnership and scale'
      ]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600">
            <img 
              src={HeaderImage} 
              alt="Programs Background" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          <div className="relative z-10 py-24 text-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Our Programs
                </h1>
                <p className="text-white/90 text-lg max-w-3xl mx-auto">
                  Strategically aligned with NADAP 2025–2030, YTEI, and UNICEF frameworks
                </p>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <FiTarget className="mr-2" />
                NADAP-ALIGNED STRATEGIC PROGRAMS
              </div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Our comprehensive program portfolio addresses prevention, treatment, and reintegration through 
                evidence-based interventions aligned with national and international standards.
              </p>
            </motion.div>

            {/* Program Boxes */}
            <div className="space-y-16 mb-20">
              {programBoxes.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Program Header */}
                  <div className={`flex items-start mb-8 p-6 rounded-xl ${
                    program.color === 'green' ? 'bg-green-50 border-l-4 border-green-500' :
                    program.color === 'blue' ? 'bg-blue-50 border-l-4 border-blue-500' :
                    'bg-purple-50 border-l-4 border-purple-500'
                  }`}>
                    <div className={`p-3 rounded-lg ${
                      program.color === 'green' ? 'bg-green-100 text-green-600' :
                      program.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      'bg-purple-100 text-purple-600'
                    } mr-4`}>
                      {program.icon}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className={`text-sm font-semibold ${
                          program.color === 'green' ? 'text-green-700' :
                          program.color === 'blue' ? 'text-blue-700' :
                          'text-purple-700'
                        }`}>
                          BOX {program.id}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">{program.title}</h2>
                    </div>
                  </div>

                  {/* Sub-Menu Items */}
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <FiCheckCircle className="mr-2 text-gray-400" />
                      Program Components
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {program.subMenus.map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="text-gray-800 font-medium">{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Monitoring & Evaluation Indicators */}
                  <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {/* Key Indicators */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="flex items-center mb-4">
                        <FiBarChart2 className={`w-5 h-5 ${
                          program.color === 'green' ? 'text-green-600' :
                          program.color === 'blue' ? 'text-blue-600' :
                          'text-purple-600'
                        } mr-2`} />
                        <h3 className="font-semibold text-gray-800">Key Indicators</h3>
                      </div>
                      <ul className="space-y-3">
                        {program.indicators.map((indicator, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-3 ${
                              program.color === 'green' ? 'bg-green-500' :
                              program.color === 'blue' ? 'bg-blue-500' :
                              'bg-purple-500'
                            }`}></div>
                            <span>{indicator}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* YTEI Alignment */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="flex items-center mb-4">
                        <FiUsers className="w-5 h-5 text-green-600 mr-2" />
                        <h3 className="font-semibold text-gray-800">YTEI Alignment</h3>
                      </div>
                      <ul className="space-y-3">
                        {program.yteiAlignment.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 mr-3 bg-green-500"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* UNICEF Alignment */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="flex items-center mb-4">
                        <FiAward className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="font-semibold text-gray-800">UNICEF Alignment</h3>
                      </div>
                      <ul className="space-y-3">
                        {program.unicefAlignment.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 mr-3 bg-blue-500"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cross-Cutting Standards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Cross-Cutting Standards</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Applied consistently across all program boxes for comprehensive impact
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {crossCutting.map((section, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-3">
                        {section.title.includes('YTEI') ? <FiUsers className="w-5 h-5" /> :
                         section.title.includes('UNICEF') ? <FiAward className="w-5 h-5" /> :
                         <FiGlobe className="w-5 h-5" />}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-3"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Implementation Approach */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 mb-12"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Implementation Framework</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our structured approach ensures quality, accountability, and measurable results
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <FiTrendingUp className="mr-2 text-green-600" />
                    Quality Assurance
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• Regular monitoring against M&E indicators</li>
                    <li className="text-gray-700">• Quarterly program reviews</li>
                    <li className="text-gray-700">• Annual impact assessments</li>
                    <li className="text-gray-700">• Independent third-party evaluations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <FiCheckCircle className="mr-2 text-blue-600" />
                    Accountability Measures
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• Transparent reporting to stakeholders</li>
                    <li className="text-gray-700">• Community feedback mechanisms</li>
                    <li className="text-gray-700">• Child safeguarding protocols</li>
                    <li className="text-gray-700">• Data protection and privacy compliance</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Partner With Our Strategic Programs</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Join us in implementing evidence-based interventions that create sustainable impact 
                across prevention, treatment, and reintegration pathways.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/partnership" 
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Become a Partner
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Request Program Details
                </Link>
                <Link 
                  to="/donate" 
                  className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Support Our Programs
                </Link>
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