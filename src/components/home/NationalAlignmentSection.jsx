import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheckCircle, FiCrosshair, FiHome, FiMapPin, FiArrowRight } from 'react-icons/fi';

export const NationalAlignmentSection = () => {
  return (
    <>
      {/* National & Strategic Alignment Section */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="mb-3 text-eyebrow text-yellow-400">Policy Alignment</p>
            <h2 className="text-[1.5rem] sm:text-display-md lg:text-display-lg font-medium text-white">National & Strategic Alignment</h2>
            <p className="mt-3 md:mt-4 text-[0.9rem] md:text-body-md text-slate-300 max-w-2xl mx-auto">
              Contributing to Liberia&rsquo;s development frameworks through targeted interventions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* YTEI Alignment Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-10"
            >
              <div className="flex items-center mb-7">
                <div className="bg-blue-50 p-3 mr-4">
                  <FiTrendingUp className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-heading-xl font-medium text-slate-900">YTEI Alignment</h3>
                  <p className="text-slate-600 text-body-sm">Youth Transformation & Empowerment Initiative</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Strengthening youth leadership and civic engagement",
                  "Expanding education access and vocational pathways",
                  "Supporting psychosocial wellbeing and positive development",
                  "Positioning youth as agents of change"
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <FiCheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" />
                    <span className="text-slate-700 text-body-md">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* NADAP Alignment Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-10"
            >
              <div className="flex items-center mb-7">
                <div className="bg-blue-50 p-3 mr-4">
                  <FiCrosshair className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-heading-xl font-medium text-slate-900">NADAP 2025-2030</h3>
                  <p className="text-slate-600 text-body-sm">National Anti-Drugs Action Plan</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Community and school based drug prevention",
                  "Early intervention and rehabilitation services",
                  "Drug demand reduction and relapse prevention",
                  "Advocacy for public health and social reintegration"
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <FiCheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 shrink-0" />
                    <span className="text-slate-700 text-body-md">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About & Counties CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="mb-3 text-eyebrow text-blue-700">Discover More</p>
            <h2 className="text-display-md sm:text-display-lg font-medium text-slate-900">Learn More About KSL & Where We Work</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-body-lg">
              Explore our organizational story and see how Kids Survivor Liberia operates across all
              15 counties through prevention, protection, and empowerment programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* About Us card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 hover:border-blue-300 p-8 flex items-start gap-5 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-1">
                <FiHome className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-heading-md font-semibold text-slate-900 mb-1.5">About Kids Survivor Liberia</h3>
                <p className="text-slate-600 text-body-md mb-3">
                  Read more about our mandate, strategic pillars, and how we align with NADAP and YTEI
                  to serve vulnerable populations across Liberia.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-button font-semibold text-blue-700"
                >
                  Go to About Us
                  <FiArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Counties card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 hover:border-blue-300 p-8 flex items-start gap-5 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-yellow-50 text-yellow-700 flex items-center justify-center shrink-0 mt-1">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-heading-md font-semibold text-slate-900 mb-1.5">Our Presence in 15 Counties</h3>
                <p className="text-slate-600 text-body-md mb-3">
                  Visit our counties section to see how KSL&apos;s programs are implemented across
                  Liberia, with dedicated pages for each county&apos;s activities.
                </p>
                <Link
                  to="/counties"
                  className="inline-flex items-center text-button font-semibold text-blue-700"
                >
                  View Counties & Activities
                  <FiArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NationalAlignmentSection;