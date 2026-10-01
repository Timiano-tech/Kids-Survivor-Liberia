import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

import HeroImage from '../../assets/Community_Speech.jpeg';
import HeroImageAlt from '../../assets/Children on the assembly.jpeg';
import HeroImageThree from '../../assets/Students Impacted.jpeg';
import AnimatedNumber from '../visuals/AnimatedNumber';

export const HeroSection = () => {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="KSL community meeting with local leaders"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-eyebrow text-yellow-400 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-yellow-400" aria-hidden="true" />
              Kids Survivor Liberia
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-display-lg lg:text-display-xl text-white leading-[1.05] tracking-tight max-w-3xl"
            >
              Protecting Children.{' '}
              <span className="text-yellow-400">Ending Drug Abuse.</span>{' '}
              Rebuilding Communities.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 text-body-md md:text-body-lg text-slate-300 leading-relaxed max-w-xl"
            >
              A Liberian non-profit serving children, youth, adolescent girls, widows, and
              vulnerable elderly men through drug abuse prevention, child protection, education,
              and rehabilitation programmes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/donate"
                className="group inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-7 py-3.5 text-button transition-colors"
              >
                Donate Now
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white px-7 py-3.5 text-button transition-colors"
              >
                Our Programmes
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-white/15 flex items-baseline gap-3"
            >
              <span className="font-serif text-stat-sm text-yellow-400 leading-none">
                <AnimatedNumber end={12000} duration={2.2} suffix="+" />
              </span>
              <span className="text-body-sm text-slate-400">
                Vulnerable individuals reached
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <img
              src={HeroImageAlt}
              alt="Children at a KSL school assembly"
              className="w-full h-56 object-cover border border-white/10"
              loading="lazy"
            />
            <img
              src={HeroImageThree}
              alt="Students supported by KSL"
              className="w-full h-56 object-cover border border-white/10 mt-8"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
