import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiArrowRight } from 'react-icons/fi';

import FoodImage from '../../assets/Food_sharing2.jpeg';
import ChildrenImage from '../../assets/Children2.jpeg';
import EducationImage from '../../assets/Students3.jpeg';

const DonorAppealSection = () => {
  const stats = [
    { value: '$25', label: 'Provides school supplies for one child for a full year' },
    { value: '$50', label: 'Covers medical treatment for a youth in rehabilitation' },
    { value: '$100', label: 'Trains a young person in a vocational skill for 3 months' },
    { value: '$250', label: 'Sponsors a child through an entire school year' },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top emotional banner */}
      <div className="bg-slate-950 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-3 md:mb-4 text-eyebrow text-yellow-400">Your Support Matters</p>
              <h2 className="text-[1.5rem] sm:text-display-md lg:text-display-lg font-medium text-white leading-tight">
                Every Dollar You Give{' '}
                <span className="text-yellow-400">Changes a Life</span>
              </h2>
              <p className="mt-4 md:mt-6 text-[0.95rem] md:text-body-md text-slate-300 leading-relaxed max-w-lg">
                In Liberia, thousands of children wake up without food, without school, and without hope.
                Your generosity gives them a second chance — a warm meal, a safe classroom, a reason to believe
                in tomorrow.
              </p>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
                <Link
                  to="/donate"
                  className="group inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 px-5 py-2.5 md:px-8 md:py-4 text-button text-slate-900 transition-all duration-300 shadow-lg shadow-yellow-500/20"
                >
                  <FiHeart className="w-4 h-4" />
                  Donate Today
                </Link>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 px-5 py-2.5 md:px-8 md:py-4 text-button text-white transition-colors duration-300"
                >
                  Volunteer With Us
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Impact images grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="space-y-3">
                <div className="border border-slate-700 overflow-hidden">
                  <img src={FoodImage} alt="Children receiving food support" className="w-full h-48 object-cover" loading="lazy" />
                </div>
                <div className="border border-slate-700 overflow-hidden">
                  <img src={EducationImage} alt="Students in KSL education program" className="w-full h-64 object-cover" loading="lazy" />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="border border-slate-700 overflow-hidden">
                  <img src={ChildrenImage} alt="Children in KSL care program" className="w-full h-64 object-cover" loading="lazy" />
                </div>
                <div className="bg-slate-800 border border-slate-700 p-5 flex flex-col justify-center h-48">
                  <span className="text-display-md font-medium text-yellow-400">100%</span>
                  <p className="text-body-sm text-slate-300 mt-1">of donations go directly to programs on the ground</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom: Donation impact breakdown */}
      <div className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="text-center mb-10">
            <h3 className="text-[1.125rem] sm:text-heading-lg text-slate-900">See Exactly Where Your Donation Goes</h3>
            <p className="mt-2 md:mt-3 text-[0.9rem] md:text-body-md text-slate-600 max-w-xl mx-auto">
              Transparency is at the heart of everything we do. Here is how your contribution creates real, measurable impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 p-6 text-center hover:border-yellow-300 hover:shadow-md transition-all duration-300 group"
              >
                <span className="inline-block text-display-md font-medium text-yellow-600 group-hover:text-yellow-500 transition-colors">
                  {item.value}
                </span>
                <p className="mt-3 text-body-sm text-slate-600 leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 text-button text-blue-700 hover:text-blue-800 font-semibold transition-colors"
            >
              Make a Donation Now
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorAppealSection;
