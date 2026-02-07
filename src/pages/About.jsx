import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiTarget, 
  FiEye, 
  FiShield,
  FiUsers,
  FiHeart,
  FiTrendingUp,
  FiAward,
  FiCheckCircle,
  FiHome,
  FiCrosshair,
  FiActivity,
  FiBook,
  FiBriefcase,
  FiGlobe
} from 'react-icons/fi';
import KSLCompany from '../assets/KSL Company.jpeg';
import KSL_Teams from '../assets/KSL_Team.jpeg';
import KSL_Teams2 from '../assets/KSL_Team2.jpeg';
import CallToAction from '../components/CallToAction';
import Mr_Steve from '../assets/Mr_Steve.jpeg';
import Mrs_Fiona from '../assets/Mrs_Fiona.jpeg';
import Mrs_Silvia from '../assets/Mrs_Silvia2.jpeg';
import CEO from '../assets/CEO.jpeg';
import ScrollToTopButton from '../components/ScrollToTop';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Core Programmatic Pillars aligned with organizational structure
  const programPillars = [
    {
      icon: <FiShield />,
      title: "Drug Abuse Prevention & Public Awareness",
      description: "Community and school-based prevention campaigns, youth-led advocacy, and 'Say No to Drugs' initiatives aligned with national and global frameworks.",
      color: "bg-blue-500"
    },
    {
      icon: <FiHeart />,
      title: "Rehabilitation, Recovery & Social Reintegration",
      description: "Psychosocial support for drug-affected youth and adults, skills development and reintegration pathways, stigma reduction and community acceptance initiatives.",
      color: "bg-blue-500"
    },
    {
      icon: <FiBook />,
      title: "Education & Skills Development",
      description: "Education support, scholarships, non-formal learning, vocational and livelihood skills for youth, adolescent girls, widows, and vulnerable elderly men.",
      color: "bg-blue-500"
    },
    {
      icon: <FiUsers />,
      title: "Gender, Protection & Social Inclusion",
      description: "Targeted empowerment of adolescent girls at risk, protection and economic inclusion of widows, social support and livelihood assistance for vulnerable elderly men.",
      color: "bg-blue-500"
    },
    {
      icon: <FiBriefcase />,
      title: "Community Engagement, Peacebuilding & Partnerships",
      description: "Collaboration with traditional leaders, local authorities, and civil society, volunteer training, crime and violence prevention through social cohesion initiatives.",
      color: "bg-blue-500"
    }
  ];

  // Strategic Objectives aligned with organizational purpose
  const objectives = [
    "Prevent drug abuse initiation among children, adolescents, and youth through community-driven interventions.",
    "Provide comprehensive rehabilitation and reintegration services for drug-affected individuals.",
    "Empower vulnerable populations with education, life skills, and livelihood opportunities.",
    "Strengthen gender-inclusive protection systems for adolescent girls, widows, and elderly men.",
    "Build community resilience and contribute to crime reduction and peacebuilding.",
    "Advance national commitments under NADAP 2025-2030 and YTEI frameworks."
  ];


  // Impact Highlights aligned with strategic mandate
  const impactHighlights = [
    {
      icon: <FiCrosshair />,
      title: "NADAP 2025-2030 Implementation",
      description: "Aligned programs contributing to Liberia's National Anti-Drugs Action Plan goals."
    },
    {
      icon: <FiTrendingUp />,
      title: "YTEI Integration",
      description: "Advancing Youth Transformation & Empowerment Initiative priorities across counties."
    },
    {
      icon: <FiUsers />,
      title: "Multi-Population Reach",
      description: "Serving children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men."
    },
    {
      icon: <FiAward />,
      title: "Policy Alignment",
      description: "Contributing to national and global commitments on youth development and drug demand reduction."
    }
  ];

  // Team Members updated with strategic focus
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

  // Guiding Values from organizational document
  const guidingValues = [
    {
      title: "Inclusion & Equity",
      description: "Ensuring all interventions are inclusive, rights-based, and promote equitable access for vulnerable populations."
    },
    {
      title: "Dignity & Protection",
      description: "Upholding the dignity of every individual and implementing comprehensive protection systems."
    },
    {
      title: "Prevention & Empowerment",
      description: "Focusing on prevention strategies while empowering individuals for sustainable self-reliance."
    },
    {
      title: "Partnership & Participation",
      description: "Fostering community-driven approaches through active participation and strategic partnerships."
    },
    {
      title: "Integrity & Accountability",
      description: "Maintaining highest standards of integrity and accountability in all operations and impact measurement."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Main Header Section */}
        <header className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-blue-900/70 z-10">
            <img 
              src={KSLCompany} 
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
                About Kids Survivor Liberia
              </motion.h1>
              <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
                A national-based organization dedicated to preventing drug abuse and protecting vulnerable populations through YTEI and NADAP-aligned interventions
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Organization Overview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-100">
                  <img 
                    src={KSL_Teams} 
                    alt="Kids Survivor Liberia Team" 
                    className="w-full h-full object-cover rounded-2xl"
                    loading='lazy'
                  />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Kids Survivor Liberia (KSL)</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>Kids Survivor Liberia (KSL)</strong> is a national-based, non-profit organization dedicated to the prevention of drug abuse and the protection, rehabilitation, and empowerment of vulnerable populations, particularly children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men.
                    </p>
                    <p>
                      We implement inclusive, rights-based, and community-driven interventions that promote education, life skills, psychosocial recovery, livelihood development, and social reintegration, while contributing to crime reduction, peacebuilding, and community resilience.
                    </p>
                    <p>
                      Our work is fully aligned with the Youth Transformation & Empowerment Initiative (YTEI) and the National Anti-Drugs Action Plan (NADAP) 2025–2030, supporting national and global commitments to youth development, drug demand reduction, gender equality, and social protection.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 mb-20"
            >
              {/* Mission */}
              <div className="bg-blue-500 text-white rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-xl mr-4">
                    <FiTarget className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Kids Survivor Liberia (KSL) is a national-based, non-profit organization dedicated to the prevention of drug abuse and the protection, rehabilitation, and empowerment of vulnerable populations, particularly children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men.
                </p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-blue-100">
                    We implement inclusive, rights-based, and community-driven interventions aligned with YTEI and NADAP 2025–2030.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-yellow-500 text-white rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-xl mr-4">
                    <FiEye className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  A drug-free, safe, inclusive, and resilient Liberia, where children, adolescent girls, youth, widows, and elderly men live in dignity, have equitable access to education and economic opportunities, are protected from drugs, violence, and exploitation, and actively contribute to sustainable development and social cohesion.
                </p>
              </div>
            </motion.div>

            {/* Strategic Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="bg-blue-500 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-xl mr-4">
                    <FiCrosshair className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Strategic Purpose</h3>
                    <p className="text-green-100">Why We Exist</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed max-w-4xl">
                  KSL exists to address the intersecting challenges of drug abuse, poverty, gender vulnerability, youth marginalization, and age-related neglect through integrated prevention, protection, rehabilitation, and empowerment strategies rooted in community partnership and national policy alignment.
                </p>
              </div>
            </motion.div>

            {/* Programmatic Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Programmatic Pillars</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Comprehensive approaches aligned with NADAP 2025-2030 and YTEI frameworks
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programPillars.map((pillar, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`${pillar.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                      {pillar.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Pillar {index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

         

            {/* Guiding Values */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Guiding Values</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  The principles that shape our approach and decision-making
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guidingValues.map((value, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Strategic Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="bg-blue-500 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Strategic Objectives</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {objectives.map((objective, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-start">
                        <div className="bg-white p-2 rounded-lg mr-4 mt-1">
                          <FiCheckCircle className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-white leading-relaxed">{objective}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Meet Our Team Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Dedicated professionals driving NADAP and YTEI-aligned interventions
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

            {/* Our Impact Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="bg-blue-500 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Strategic Impact & Alignment</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {impactHighlights.map((highlight, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center mb-4">
                        <div className="bg-white p-3 rounded-lg mr-4">
                          <div className="text-blue-600">
                            {highlight.icon}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold text-white">{highlight.title}</h4>
                      </div>
                      <p className="text-white/90">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* National Policy Alignment Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">National Policy Alignment</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 mb-2">Youth Transformation & Empowerment Initiative (YTEI)</h3>
                      <p className="text-gray-600">
                        KSL advances YTEI priorities by strengthening youth leadership and civic engagement, expanding education access and vocational pathways, supporting psychosocial well-being, and positioning young people as agents of change.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">National Anti-Drugs Action Plan (NADAP) 2025–2030</h3>
                      <p className="text-gray-600">
                        KSL contributes to NADAP implementation through drug use prevention and awareness, early intervention and rehabilitation, national-based approaches to drug demand reduction, and advocacy promoting public health and social reintegration.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-100">
                  <img 
                    src={KSL_Teams2} 
                    alt="KSL Team in Action" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Our Branches Section - Updated with focus on program implementation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Strategic Network for Impact</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Multi-county presence enabling NADAP and YTEI-aligned program implementation across Liberia
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {/* Headquarters */}
                <div className="bg-blue-600 text-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-white/20 p-3 rounded-lg mr-4">
                        <FiGlobe className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Strategic Headquarters</h3>
                        <p className="text-blue-200 font-medium">National Coordination Center</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-blue-200 mb-1">Address</p>
                        <p className="font-medium">City of Light Community, Barclay Avenue, 15th Street</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-blue-200 mb-1">Location</p>
                        <p>Sinkor, Monrovia, Montserrado County</p>
                      </div>
                      
                      <div className="pt-3 border-t border-white/20">
                        <p className="text-sm text-blue-200 mb-1">Key Functions</p>
                        <p>National program coordination, policy alignment, and strategic leadership</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nimba County Branch */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <FiHome className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Nimba County</h3>
                        <p className="text-blue-500 font-medium">Gompa City Office</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Program Focus</p>
                        <p className="text-gray-800 font-medium">Drug Prevention & Youth Empowerment</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Coordinator</p>
                        <p className="text-gray-800 font-medium">Mr. Janjay Cole</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Contact</p>
                        <p className="text-gray-700 font-medium">+231880919921</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bong County Branch */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <FiHome className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Bong County</h3>
                        <p className="text-blue-500 font-medium">Gbarnga City Office</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Program Focus</p>
                        <p className="text-gray-800 font-medium">Rehabilitation & Reintegration</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Coordinator</p>
                        <p className="text-gray-800 font-medium">Mr. Paul Bennie</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Contact</p>
                        <p className="text-gray-700 font-medium">+231880365232</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grand Bassa County Branch */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <FiHome className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Grand Bassa County</h3>
                        <p className="text-blue-500 font-medium">Buchanan City Office</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Program Focus</p>
                        <p className="text-gray-800 font-medium">Gender & Social Inclusion</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Coordinator</p>
                        <p className="text-gray-800 font-medium">Mr. Jackson David</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Contact</p>
                        <p className="text-gray-700 font-medium">+231886713662</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Montserrado County Branch */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <FiHome className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Montserrado County</h3>
                        <p className="text-blue-500 font-medium">Sinkor Office</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Program Focus</p>
                        <p className="text-gray-800 font-medium">Education & Skills Development</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Coordinator</p>
                        <p className="text-gray-800 font-medium">Welleh Bropleh</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Contact</p>
                        <p className="text-gray-700 font-medium">+231779200089</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bong County (Palala) Branch */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <FiHome className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Bong County (Palala)</h3>
                        <p className="text-blue-500 font-medium">Palala City Office</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Program Focus</p>
                        <p className="text-gray-800 font-medium">Community Engagement</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Coordinator</p>
                        <p className="text-gray-800 font-medium">Ferguson Z. Neyor</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Contact</p>
                        <p className="text-gray-700 font-medium">+231880395123</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lofa County Branch */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 col-span-full md:col-span-2 lg:col-span-3">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <FiHome className="w-6 h-6 text-cyan-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">Lofa County</h3>
                          <p className="text-cyan-600 font-medium">Voinjama City Office</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6 grow">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Program Focus</p>
                          <p className="text-gray-800 font-medium">Peacebuilding & Partnerships</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Operational Advisor</p>
                          <p className="text-gray-800 font-medium">Mrs. Silvia T. Willie Dongon</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Contact</p>
                          <p className="text-gray-700 font-medium">+231886764940</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <CallToAction />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default About;