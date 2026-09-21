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

  const programPillars = [
    {
      id: 1,
      title: "Drug Abuse Prevention & Public Awareness",
      description: "Community and school based prevention campaigns, youth led advocacy, and 'Say No to Drugs' initiatives aligned with national frameworks.",
      imagePlaceholder: NoToDrugs,
      icon: <FiShield className="w-7 h-7" />,
      color: "bg-blue-600"
    },
    {
      id: 2,
      title: "Rehabilitation & Social Reintegration",
      description: "Psychosocial support, skills development, and reintegration pathways for drug affected individuals with stigma reduction initiatives.",
      imagePlaceholder: Children3,
      icon: <FiHeart className="w-7 h-7" />,
      color: "bg-yellow-500"
    },
    {
      id: 3,
      title: "Education & Skills Development",
      description: "Education support, vocational training, and digital skills for youth, adolescent girls, widows, and vulnerable elderly men.",
      imagePlaceholder: Students,
      icon: <FiBook className="w-7 h-7" />,
      color: "bg-blue-600"
    },
    {
      id: 4,
      title: "Gender, Protection & Social Inclusion",
      description: "Targeted empowerment of adolescent girls, economic inclusion of widows, and social support for vulnerable elderly men.",
      imagePlaceholder: Children4,
      icon: <FiUsers className="w-7 h-7" />,
      color: "bg-blue-600"
    }
  ];

  return (
    <>
      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="mb-3 text-eyebrow text-blue-700">Our Purpose</p>
            <h2 className="text-display-md sm:text-display-lg font-medium text-slate-900">Strategic Framework</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-body-lg leading-relaxed">
              Aligned with YTEI and NADAP 2025–2030, we deploy comprehensive, evidence-based approaches to maximize our operational impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-10 md:p-12"
            >
              <div className="w-14 h-14 bg-blue-600 flex items-center justify-center mb-8 text-white">
                <FiTarget className="w-7 h-7" />
              </div>
              <h3 className="text-display-sm sm:text-display-md font-medium text-slate-900 mb-6">Mission</h3>
              <p className="text-slate-600 text-body-lg leading-relaxed mb-8">
                Kids Survivor Liberia (KSL) is a national based, non-profit organization dedicated to the prevention of drug abuse and the protection, rehabilitation, and empowerment of vulnerable populations, particularly children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men.
              </p>
              <h4 className="font-semibold text-caption uppercase tracking-widest mb-4 text-slate-900">Pillars of Action</h4>
              {[
                "Drug Abuse Prevention & Awareness",
                "Rehabilitation & Social Reintegration",
                "Education & Life Skills Development",
                "Gender Inclusive Protection Systems"
              ].map((item, i) => (
                <div key={i} className="flex items-start text-slate-700 bg-slate-50 p-3 border border-slate-200 mb-3">
                  <FiCheckCircle className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-10 md:p-12"
            >
              <div className="w-14 h-14 bg-yellow-500 flex items-center justify-center mb-8 text-slate-900">
                <FiEye className="w-7 h-7" />
              </div>
              <h3 className="text-display-sm sm:text-display-md font-medium text-slate-900 mb-6">Vision</h3>
              <p className="text-slate-600 text-body-lg leading-relaxed mb-8">
                A drug free, safe, inclusive, and resilient Liberia, where children, adolescent girls, youth, widows, and elderly men live in dignity, have equitable access to education and economic opportunities, are protected from drugs, violence, and exploitation, and actively contribute to sustainable development and social cohesion.
              </p>
              <h4 className="font-semibold text-caption uppercase tracking-widest mb-4 text-slate-900">Core Outcomes</h4>
              {[
                "Drug free and safe communities",
                "Equitable access to opportunities",
                "Protection from exploitation",
                "Active community participation"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-slate-700 bg-slate-50 p-3 border border-slate-200 mb-3">
                  <span className="w-2.5 h-2.5 bg-yellow-500 mr-4 shrink-0" aria-hidden="true"></span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Pillars Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="mb-3 text-eyebrow text-blue-700">Areas of Action</p>
            <h2 className="text-[1.5rem] sm:text-display-md lg:text-display-lg font-medium text-slate-900">Our Programmatic Pillars</h2>
            <p className="mt-3 md:mt-4 text-[0.9rem] md:text-body-md text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive, rights based approaches aligned with national strategies to address the root causes of vulnerability and empower communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 flex flex-col"
              >
                <div className="relative h-60 overflow-hidden">
                  {!imageError[`pillar-${pillar.id}`] ? (
                    <img
                      src={pillar.imagePlaceholder}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(`pillar-${pillar.id}`)}
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-full h-full ${pillar.color} flex items-center justify-center`}>
                      <span className="text-white text-lg font-semibold">
                        {pillar.title.split(' ')[0]}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-950/55"></div>
                  <div className="absolute bottom-0 left-0 w-full p-7">
                    <div className="flex items-center gap-4">
                      <div className="p-3 text-white bg-blue-700 border border-blue-500">
                        {pillar.icon}
                      </div>
                      <h3 className="text-heading-xl md:text-display-sm font-medium text-white tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-slate-600 mb-8 flex-1 text-body-lg leading-relaxed">
                    {pillar.description}
                  </p>
                  <Link
                    to={`/programs#pillar-${pillar.id}`}
                    className="w-full text-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-4 text-button uppercase tracking-wider transition-colors duration-200"
                  >
                    Explore This Pillar &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fifth Pillar - Community Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-slate-900 p-10 md:p-14 text-white"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
              <div className="bg-blue-700 p-4 inline-flex items-center justify-center shrink-0">
                <FiBriefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-display-sm sm:text-display-md font-medium mb-3 tracking-tight">
                  Pillar 5: Community Engagement & Partnerships
                </h3>
                <p className="text-slate-300 text-body-lg max-w-2xl leading-relaxed">
                  Transformative cross-sector collaboration with traditional leaders, local authorities, and civil society for truly sustainable grassroots impact.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: "Community Ownership", text: "Empowering local actors through intensive volunteer training and community driven program implementation." },
                { title: "Peacebuilding", text: "Proactive crime and violence prevention cultivated through dynamic social cohesion initiatives." },
                { title: "Strategic Partnerships", text: "Fostering multi-stakeholder collaboration for comprehensive, scalable developmental impact." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 p-6">
                  <h4 className="font-semibold text-heading-md mb-3 text-white">{item.title}</h4>
                  <p className="text-slate-400 text-body-md">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/partnership" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3.5 text-button transition-colors duration-200">
                Partner With Us
              </Link>
              <Link to="/programs#community" className="bg-white/10 hover:bg-white/15 border border-white/30 text-white px-8 py-3.5 text-button transition-colors duration-200">
                Learn More Details
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProgramPillarsSection;