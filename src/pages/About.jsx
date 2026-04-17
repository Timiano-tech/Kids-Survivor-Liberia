import { useEffect } from 'react';
import Team from '../components/Teams';
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
  FiCrosshair,
  FiBook,
  FiBriefcase
} from 'react-icons/fi';
import KSLCompany from '../assets/KSL Company.jpeg';
import KSL_Teams from '../assets/KSL_Team.jpeg';
import KSL_Teams2 from '../assets/KSL_Team2.jpeg';

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
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[100px] shadow-xl border-b border-slate-100">
          <div className="absolute inset-0 z-0">
            <img
              src={KSLCompany}
              alt="Media & Resources"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Discover Our Story</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                About Kids Survivor Liberia
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                A national-based organization dedicated to preventing drug abuse and protecting vulnerable populations through incredibly impactful YTEI and NADAP-aligned interventions.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {/* Organization Overview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-24 max-w-7xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600 rounded-lg -translate-x-4 translate-y-4 opacity-10 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                  <div className="bg-slate-100 rounded-lg p-2 relative z-10 shadow-xl overflow-hidden">
                    <img
                      src={KSL_Teams}
                      alt="Kids Survivor Liberia Team"
                      className="w-full h-[31.25rem] object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                      loading='lazy'
                    />
                  </div>
                </div>

                <div>
                  <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Who We Are</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Kids Survivor Liberia (KSL)</h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                      <strong className="text-slate-900">Kids Survivor Liberia (KSL)</strong> is a national-based, non-profit organization dedicated to the prevention of drug abuse and the protection, rehabilitation, and empowerment of vulnerable populations, particularly children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men.
                    </p>
                    <p>
                      We implement inclusive, rights-based, and community-driven interventions that promote education, life skills, psychosocial recovery, livelihood development, and social reintegration, while contributing to crime reduction, peacebuilding, and community resilience.
                    </p>
                    <p>
                      Our work is fully aligned with the <span className="text-slate-900 font-medium">Youth Transformation & Empowerment Initiative (YTEI)</span> and the <span className="text-slate-900 font-medium">National Anti-Drugs Action Plan (NADAP) 2025-2030</span>, supporting national and global commitments to youth development, drug demand reduction, gender equality, and social protection.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission & Vision - Premium Redesign */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10 mb-24 max-w-7xl mx-auto"
            >
              {/* Mission */}
            <div className="bg-slate-900 text-white rounded-lg p-10 md:p-14 shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="bg-white/10 p-4 rounded-lg mr-5 backdrop-blur-md border border-white/10 shadow-xl">
                      <FiTarget className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight">Our Mission</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-slate-300 mb-8">
                    Kids Survivor Liberia (KSL) is a national-based, non-profit organization dedicated to the prevention of drug abuse and the protection, rehabilitation, and empowerment of vulnerable populations, particularly children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men.
                  </p>
                  <div className="pt-8 border-t border-slate-700/50">
                    <p className="text-sm font-medium text-blue-300 uppercase tracking-wider">
                      Aligned with YTEI and NADAP 2025–2030.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
            <div className="bg-white rounded-lg p-10 md:p-14 shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-md transition-shadow duration-500">
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="bg-yellow-50 p-4 rounded-lg mr-5 border border-yellow-100 shadow-sm">
                      <FiEye className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Our Vision</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-slate-600">
                    A drug-free, safe, inclusive, and resilient Liberia, where children, adolescent girls, youth, widows, and elderly men live in dignity, have equitable access to education and economic opportunities, are protected from drugs, violence, and exploitation, and actively contribute to sustainable development and social cohesion.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Strategic Purpose - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-24 max-w-7xl mx-auto"
            >
            <div className="bg-slate-900 rounded-lg p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-700/20 via-slate-900/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10 grid md:grid-cols-12 gap-10 items-center">
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-5 mb-4">
                      <div className="bg-blue-600/20 p-4 rounded-lg backdrop-blur-md border border-blue-500/30">
                        <FiCrosshair className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm block mb-1">Why We Exist</span>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Strategic Purpose</h3>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-xl leading-relaxed text-slate-300 font-light border-l-2 border-slate-700 pl-8">
                      KSL exists to address the intersecting challenges of drug abuse, poverty, gender vulnerability, youth marginalization, and age-related neglect through integrated <span className="text-white font-medium">prevention, protection, rehabilitation, and empowerment</span> strategies rooted in community partnership and national policy alignment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Programmatic Pillars - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-24 max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Areas of Action</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Programmatic Pillars</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Comprehensive approaches expertly aligned with NADAP 2025-2030 and YTEI frameworks driving grassroots change.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programPillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl font-black text-slate-900 -translate-y-8 translate-x-8 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                      {index + 1}
                    </div>
                    <div className="bg-slate-50 text-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      {pillar.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed flex-1">
                      {pillar.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Pillar {index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>



            {/* Guiding Values - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-24 max-w-7xl mx-auto"
            >
              <div className="text-center mb-16">
                <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm mb-3 block">Organizational Core</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Guiding Values</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  The unwavering principles that shape our operational approach and drive our decision-making.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guidingValues.map((value, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-1 bg-yellow-400 mb-6 rounded-lg group-hover:w-16 transition-all duration-300"></div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Strategic Objectives - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="mb-24 max-w-7xl mx-auto"
            >
                  <div className="bg-slate-900 rounded-lg p-10 md:p-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-5 mix-blend-overlay"></div>

                    <div className="relative z-10">
                      <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-3 block text-center">Our Goals</span>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight">Strategic Objectives</h2>

                      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {objectives.map((objective, index) => (
                          <div key={index} className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                            <div className="flex items-start gap-5">
                              <div className="bg-blue-600/30 p-3 rounded-lg border border-blue-500/30 shrink-0 group-hover:bg-blue-500/50 transition-colors">
                            <FiCheckCircle className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-slate-200 leading-relaxed text-lg font-light">{objective}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Meet Our Team Section - Premium Redesign */}
            <Team />
            {/* Our Impact Section - Premium Redesign */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="mb-24 max-w-7xl mx-auto"
            >
                <div className="bg-gradient-to-t from-blue-700 to-blue-900 rounded-lg p-10 md:p-14 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>

                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight drop-shadow-sm relative z-10">Strategic Impact & Alignment</h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                    {impactHighlights.map((highlight, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group">
                        <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-md border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-yellow-400 text-2xl">
                          {highlight.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{highlight.title}</h4>
                      <p className="text-blue-100 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* National Policy Alignment Section - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="mb-24 max-w-7xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Strategic Framework</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">National Policy Alignment</h2>

                  <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 rounded-l-xl"></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Youth Transformation & Empowerment Initiative <span className="text-blue-500">(YTEI)</span></h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        KSL advances YTEI priorities by strengthening youth leadership and civic engagement, expanding education access and vocational pathways, supporting psychosocial well-being, and positioning young people as crucial agents of change.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 rounded-l-xl"></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">National Anti-Drugs Action Plan <span className="text-emerald-500">(NADAP) 2025–2030</span></h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        KSL directly contributes to NADAP implementation through drug use prevention and awareness, early intervention and rehabilitation, national-based approaches to drug demand reduction, and broad advocacy promoting public health and social reintegration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 h-[31.25rem] w-full relative group">
                  <div className="absolute inset-0 bg-blue-600 rounded-lg translate-x-4 translate-y-4 opacity-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                  <img
                    src={KSL_Teams2}
                    alt="KSL Team in Action"
                    className="w-full h-full object-cover rounded-lg shadow-2xl relative z-10"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>


          </div>
        </main>
      </div>
    </>
  );
};

export default About;