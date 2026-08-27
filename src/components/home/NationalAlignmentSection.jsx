import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheckCircle, FiCrosshair, FiHome, FiMapPin, FiArrowRight } from 'react-icons/fi';

import CommunitySpeech from '../../assets/Community_Speech.jpeg';

export const NationalAlignmentSection = () => {
  return (
    <>
      {/* National & Strategic Alignment Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image with Premium Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${CommunitySpeech})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              National & Strategic Alignment
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Contributing to Liberia's development frameworks through targeted interventions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* YTEI Alignment Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-10 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] transition-shadow duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FiTrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">YTEI Alignment</h3>
                  <p className="text-gray-600 text-sm">Youth Transformation & Empowerment Initiative</p>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>Strengthening youth leadership and civic engagement</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>Expanding education access and vocational pathways</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>Supporting psychosocial wellbeing and positive development</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>Positioning youth as agents of change</span>
                </li>
              </ul>
            </motion.div>

            {/* NADAP Alignment Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-10 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] transition-shadow duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FiCrosshair className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">NADAP 2025-2030</h3>
                  <p className="text-gray-600 text-sm">National Anti-Drugs Action Plan</p>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>Community and school based drug prevention</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>Early intervention and rehabilitation services</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>Drug demand reduction and relapse prevention</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>Advocacy for public health and social reintegration</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About & Counties CTA Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-5 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Discover More</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Learn More About KSL & Where We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Explore our organizational story and see how Kids Survivor Liberia operates across all
              15 counties through prevention, protection, and empowerment programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* About Us card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md border border-slate-100 p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-6 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FiHome className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1.5">About Kids Survivor Liberia</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Read more about our mandate, strategic pillars, and how we align with NADAP and YTEI
                  to serve vulnerable populations across Liberia.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
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
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md border border-slate-100 p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-6 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1.5">
                  Our Presence in 15 Counties
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Visit our counties section to see how KSL&apos;s programs are implemented across
                  Liberia, with dedicated pages for each county&apos;s activities.
                </p>
                <Link
                  to="/counties"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
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
