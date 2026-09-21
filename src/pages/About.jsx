import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Team from '../components/Teams';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
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
      description: "Community and school based prevention campaigns, youth led advocacy, and 'Say No to Drugs' initiatives aligned with national and global frameworks.",
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
    "Prevent drug abuse initiation among children, adolescents, and youth through community driven interventions.",
    "Provide comprehensive rehabilitation and reintegration services for drug-affected individuals.",
    "Empower vulnerable populations with education, life skills, and livelihood opportunities.",
    "Strengthen gender inclusive protection systems for adolescent girls, widows, and elderly men.",
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
      description: "Ensuring all interventions are inclusive, rights based, and promote equitable access for vulnerable populations."
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
      description: "Fostering community driven approaches through active participation and strategic partnerships."
    },
    {
      title: "Integrity & Accountability",
      description: "Maintaining highest standards of integrity and accountability in all operations and impact measurement."
    }
  ];

  return (
    <>
      <SEO
        title="About Kids Survivor Liberia — Our Mission & Vision"
        description="Learn about Kids Survivor Liberia (KSL), our mission, vision, values, and alignment with Liberia's NADAP 2025-2030 and YTEI national frameworks for child protection and youth empowerment."
        canonical="/about"
        keywords={[
          'About Kids Survivor Liberia',
          'KSL mission and vision',
          'Liberia child protection NGO',
          'child-focused non-profit Liberia',
          'registered NGO Liberia',
          'drug abuse prevention organization Liberia',
          'NADAP 2025-2030 Liberia',
          'YTEI Liberia',
          'KSL leadership Liberia',
        ]}
        breadcrumbs={[{ name: 'About', url: '/about' }]}
      />
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="Discover Our Story"
          title="About Kids Survivor Liberia"
          description="A national-based organization dedicated to preventing drug abuse and protecting vulnerable populations through incredibly impactful YTEI and NADAP-aligned interventions."
          image={KSLCompany}
          alt="Media & Resources"
        />

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Organization Overview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20 lg:mb-24"
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <div className="bg-slate-100 border border-slate-200 p-2">
                    <img
                      src={KSL_Teams}
                      alt="Kids Survivor Liberia Team"
                      className="w-full h-[31.25rem] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div>
                  <SectionHeading
                    align="left"
                    eyebrow="Who We Are"
                    title="Kids Survivor Liberia (KSL)"
                    className="mb-8"
                  />
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                      <strong className="text-slate-900">Kids Survivor Liberia (KSL)</strong> is a national based, non-profit organization dedicated to the prevention of drug abuse and the protection, rehabilitation, and empowerment of vulnerable populations, particularly children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men.
                    </p>
                    <p>
                      We implement inclusive, rights based, and community driven interventions that promote education, life skills, psychosocial recovery, livelihood development, and social reintegration, while contributing to crime reduction, peacebuilding, and community resilience.
                    </p>
                    <p>
                      Our work is fully aligned with the <span className="text-slate-900 font-medium">Youth Transformation & Empowerment Initiative (YTEI)</span> and the <span className="text-slate-900 font-medium">National Anti-Drugs Action Plan (NADAP) 2025-2030</span>, supporting national and global commitments to youth development, drug demand reduction, gender equality, and social protection.
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
              className="mb-20 lg:mb-24"
            >
              <SectionHeading eyebrow="Purpose & Direction" title="Our Mission & Vision" className="mb-12" />
              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {/* Mission */}
                <div className="bg-slate-950 border border-slate-800 p-10 md:p-12 text-white shadow-md">
                  <div className="flex items-center mb-8">
                    <div className="bg-white/10 border border-slate-700 p-4 mr-5">
                      <FiTarget className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Our Mission</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-slate-300 mb-8">
                    Kids Survivor Liberia (KSL) is a national based, non-profit organization dedicated to the prevention of drug abuse and the protection, rehabilitation, and empowerment of vulnerable populations, particularly children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men.
                  </p>
                  <div className="pt-8 border-t border-slate-700">
                    <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                      Aligned with YTEI and NADAP 2025–2030.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="bg-white border border-slate-200 p-10 md:p-12 shadow-sm">
                  <div className="flex items-center mb-8">
                    <div className="bg-yellow-500 p-4 mr-5">
                      <FiEye className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Our Vision</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-slate-600">
                    A drug free, safe, inclusive, and resilient Liberia, where children, adolescent girls, youth, widows, and elderly men live in dignity, have equitable access to education and economic opportunities, are protected from drugs, violence, and exploitation, and actively contribute to sustainable development and social cohesion.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Strategic Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-20 lg:mb-24"
            >
              <div className="bg-slate-950 border border-slate-800 p-10 md:p-14 text-white">
                <div className="grid md:grid-cols-12 gap-10 items-center">
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-5 mb-4">
                      <div className="bg-blue-700 p-4">
                        <FiCrosshair className="w-8 h-8 text-slate-900" />
                      </div>
                      <div>
                        <span className="text-blue-300 font-semibold uppercase tracking-wider text-sm block mb-1">Why We Exist</span>
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Strategic Purpose</h3>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-xl leading-relaxed text-slate-300 border-l-2 border-slate-700 pl-8">
                      KSL exists to address the intersecting challenges of drug abuse, poverty, gender vulnerability, youth marginalization, and age-related neglect through integrated <span className="text-white font-medium">prevention, protection, rehabilitation, and empowerment</span> strategies rooted in community partnership and national policy alignment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Programmatic Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-20 lg:mb-24"
            >
              <SectionHeading
                eyebrow="Areas of Action"
                title="Our Programmatic Pillars"
                description="Comprehensive approaches expertly aligned with NADAP 2025-2030 and YTEI frameworks driving grassroots change."
                className="mb-12"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programPillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 p-8 shadow-sm hover:border-blue-300 transition-colors flex flex-col h-full"
                  >
                    <div className="bg-blue-50 text-blue-700 w-16 h-16 flex items-center justify-center mb-6 border border-slate-200">
                      {pillar.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed flex-1">
                      {pillar.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Pillar {index + 1}</span>
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
              className="mb-20 lg:mb-24"
            >
              <SectionHeading
                eyebrow="Organizational Core"
                title="Our Guiding Values"
                description="The unwavering principles that shape our operational approach and drive our decision-making."
                className="mb-12"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guidingValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 p-8 shadow-sm hover:border-blue-300 transition-colors"
                  >
                    <div className="w-10 h-1 bg-yellow-400 mb-6"></div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
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
              className="mb-20 lg:mb-24"
            >
              <div className="bg-slate-950 border border-slate-800 p-10 md:p-14">
                <SectionHeading tone="dark" eyebrow="Our Goals" title="Strategic Objectives" className="mb-12" />

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {objectives.map((objective, index) => (
                    <div key={index} className="bg-slate-900 border border-slate-700 p-6">
                      <div className="flex items-start gap-5">
                        <div className="bg-blue-700 p-3 shrink-0">
                          <FiCheckCircle className="w-6 h-6 text-slate-900" />
                        </div>
                        <p className="text-slate-200 leading-relaxed text-lg">{objective}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Meet Our Team */}
            <Team />

            {/* Strategic Impact & Alignment */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="mb-20 lg:mb-24"
            >
              <div className="bg-slate-950 border border-slate-800 p-10 md:p-14">
                <SectionHeading tone="dark" eyebrow="Impact Highlights" title="Strategic Impact & Alignment" className="mb-12" />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {impactHighlights.map((highlight, index) => (
                    <div key={index} className="bg-slate-900 border border-slate-700 p-8">
                      <div className="bg-yellow-400 w-16 h-16 flex items-center justify-center mb-6 text-slate-900 text-2xl">
                        {highlight.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3 tracking-tight">{highlight.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* National Policy Alignment */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <SectionHeading align="left" eyebrow="Strategic Framework" title="National Policy Alignment" className="mb-8" />

                  <div className="space-y-8">
                    <div className="bg-white border border-slate-200 p-6 pl-8 shadow-sm hover:border-blue-300 transition-colors relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">Youth Transformation & Empowerment Initiative <span className="text-blue-600">(YTEI)</span></h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        KSL advances YTEI priorities by strengthening youth leadership and civic engagement, expanding education access and vocational pathways, supporting psychosocial well-being, and positioning young people as crucial agents of change.
                      </p>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 pl-8 shadow-sm hover:border-blue-300 transition-colors relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500"></div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">National Anti-Drugs Action Plan <span className="text-yellow-600">(NADAP) 2025–2030</span></h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        KSL directly contributes to NADAP implementation through drug use prevention and awareness, early intervention and rehabilitation, national based approaches to drug demand reduction, and broad advocacy promoting public health and social reintegration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="bg-slate-100 border border-slate-200 p-2">
                    <img
                      src={KSL_Teams2}
                      alt="KSL Team in Action"
                      className="w-full h-[31.25rem] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <CTABanner
          title="Help us build a safer, healthier Liberia"
          description="Your support funds drug abuse prevention, rehabilitation, education, and protection programs for Liberia's most vulnerable children and youth."
          primaryLabel="Donate Now"
          primaryTo="/donate"
          secondaryLabel="Volunteer With Us"
          secondaryTo="/volunteer"
        />
      </div>
    </>
  );
};

export default About;