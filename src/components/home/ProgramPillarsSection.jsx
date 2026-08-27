import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiTarget,
  FiEye,
  FiCheckCircle,
  FiShield,
  FiHeart,
  FiBook,
  FiUsers,
  FiBriefcase
} from 'react-icons/fi';

import NoToDrugs from '../../assets/Say no to drugs.jpeg';
import Children3 from '../../assets/Drug_Recovered.jpeg';
import Students from '../../assets/Students.jpeg';
import Children4 from '../../assets/Children4.jpeg';

export const ProgramPillarsSection = () => {
  const [imageError, setImageError] = useState({});

  const handleImageError = (id) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  // Program Pillars Data
  const programPillars = [
    {
      id: 1,
      title: "Drug Abuse Prevention & Public Awareness",
      description: "Community and school based prevention campaigns, youth led advocacy, and 'Say No to Drugs' initiatives aligned with national frameworks.",
      imagePlaceholder: NoToDrugs,
      icon: <FiShield className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Rehabilitation & Social Reintegration",
      description: "Psychosocial support, skills development, and reintegration pathways for drug affected individuals with stigma reduction initiatives.",
      imagePlaceholder: Children3,
      icon: <FiHeart className="w-8 h-8" />,
      color: "bg-yellow-500"
    },
    {
      id: 3,
      title: "Education & Skills Development",
      description: "Education support, vocational training, and digital skills for youth, adolescent girls, widows, and vulnerable elderly men.",
      imagePlaceholder: Students,
      icon: <FiBook className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      id: 4,
      title: "Gender, Protection & Social Inclusion",
      description: "Targeted empowerment of adolescent girls, economic inclusion of widows, and social support for vulnerable elderly men.",
      imagePlaceholder: Children4,
      icon: <FiUsers className="w-8 h-8" />,
      color: "bg-green-500"
    }
  ];

  return (
    <>
      {/* Mission & Vision Section - Premium Redesign */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Strategic Framework
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Aligned with YTEI and NADAP 2025–2030, we deploy comprehensive, evidence-based approaches to maximize our operational impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 border border-slate-200"
            >
              <div className="p-10 md:p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                    <FiTarget className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Mission</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Kids Survivor Liberia (KSL) is a national based, non-profit organization dedicated to the prevention of drug abuse and the protection, rehabilitation, and empowerment of vulnerable populations, particularly children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men.
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-2">Pillars of Action</h4>
                    {[
                      "Drug Abuse Prevention & Awareness",
                      "Rehabilitation & Social Reintegration",
                      "Education & Life Skills Development",
                      "Gender Inclusive Protection Systems"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 border border-slate-200"
            >
              <div className="p-10 md:p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-8 shadow-lg shadow-yellow-500/30 text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                    <FiEye className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Vision</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    A drug free, safe, inclusive, and resilient Liberia, where children, adolescent girls, youth, widows, and elderly men live in dignity, have equitable access to education and economic opportunities, are protected from drugs, violence, and exploitation, and actively contribute to sustainable development and social cohesion.
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-2">Core Outcomes</h4>
                    {[
                      "Drug free and safe communities",
                      "Equitable access to opportunities",
                      "Protection from exploitation",
                      "Active community participation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-4 shrink-0 shadow-sm"></div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Pillars Section - Premium Redesign */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Areas of Action</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Our Programmatic Pillars
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive, rights based approaches aligned with national strategies to address the root causes of vulnerability and empower communities.
            </p>
          </motion.div>

          {/* Four main pillars - premium responsive grid */}
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {programPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="bg-white rounded-lg shadow-md transition-all duration-500 overflow-hidden h-full flex flex-col border border-slate-200">
                  {/* Image area with subtle zoom and overlay */}
                  <div className="relative h-64 overflow-hidden">
                    {!imageError[`pillar-${pillar.id}`] ? (
                      <img
                        src={pillar.imagePlaceholder}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        onError={() => handleImageError(`pillar-${pillar.id}`)}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`w-full h-full ${pillar.color} flex items-center justify-center`}
                      >
                        <span className="text-white text-lg font-semibold">
                          {pillar.title.split(' ')[0]}
                        </span>
                      </div>
                    )}
                    {/* Refined Solid Overlay */}
                    <div className="absolute inset-0 bg-slate-950/50"></div>

                    {/* Content integrated into image bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`p-3 rounded-lg text-white shadow-lg backdrop-blur-md bg-white/20 border border-white/20`}>
                          {pillar.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content below */}
                  <div className="p-8 flex-1 flex flex-col bg-white">
                    <p className="text-slate-600 mb-8 flex-1 text-lg leading-relaxed">
                      {pillar.description}
                    </p>
                    <Link to={`/programs#pillar-${pillar.id}`}>
                      <button className="w-full text-center bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold py-4 rounded-lg transition-all duration-300 shadow-sm">
                        Explore This Pillar &rarr;
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fifth Pillar - Community Engagement (premium full-width) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-slate-900 rounded-lg shadow-md overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>

              <div className="p-10 md:p-14 text-white relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-8 mb-10">
                  <div className="bg-white/10 p-5 rounded-lg inline-flex self-start backdrop-blur-md border border-white/10 shadow-xl">
                    <FiBriefcase className="w-8 h-8 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-3 tracking-tight">
                      Pillar 5: Community Engagement & Partnerships
                    </h3>
                    <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                      Transformative cross-sector collaboration with traditional leaders, local authorities, and civil society for truly sustainable grassroots impact.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors group">
                    <h4 className="font-bold text-xl mb-3 text-white">Community Ownership</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      Empowering local actors through intensive volunteer training and community driven program implementation.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors group">
                    <h4 className="font-bold text-xl mb-3 text-white">Peacebuilding</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      Proactive crime and violence prevention cultivated through dynamic social cohesion initiatives.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors group">
                    <h4 className="font-bold text-xl mb-3 text-white">Strategic Partnerships</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      Fostering multi-stakeholder collaboration for comprehensive, scalable developmental impact.
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-5">
                  <Link to="/partnership">
                    <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all shadow-md hover:shadow-lg">
                      Partner With Us
                    </button>
                  </Link>
                  <Link to="/programs#community">
                    <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm">
                      Learn More Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProgramPillarsSection;
