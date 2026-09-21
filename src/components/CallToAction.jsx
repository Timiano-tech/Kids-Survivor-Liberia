import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

import slide1 from '../assets/Scroll3.jpeg';
import slide2 from '../assets/Youth2.jpeg';
import slide3 from '../assets/Scroll4.jpeg';
import slide4 from '../assets/Scroll2.jpeg';
import slide5 from '../assets/Community_Outreach.jpeg';
import slide6 from '../assets/Students2.jpeg';

const images = [
  { src: slide1, alt: 'KSL youth program in action' },
  { src: slide2, alt: 'Empowering young people across Liberia' },
  { src: slide3, alt: 'KSL community outreach' },
  { src: slide4, alt: 'KSL volunteers working with the community' },
  { src: slide5, alt: 'Kids Survivor Liberia community program' },
  { src: slide6, alt: 'Liberian students supported by KSL' },
];

const CallToAction = () => {
  return (
    <section className="bg-slate-50 border-t border-slate-200 py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="mb-4 text-eyebrow text-blue-700">
              Invest in the Future
            </p>
            <h2 className="text-display-md sm:text-display-lg font-medium leading-[1.1] tracking-tight text-slate-900">
              Empower a <span className="text-blue-700">Drug-Free</span> Liberia
            </h2>
            <p className="mt-6 text-body-lg leading-relaxed text-slate-600 max-w-xl">
              Your contribution directly supports our <strong className="text-slate-800">NADAP 2025–2030 aligned programs</strong>
              for drug abuse prevention, rehabilitation, and youth empowerment.
            </p>
            <div className="mt-10">
              <Link
                to="/donate"
                className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 px-8 py-4 text-button text-slate-900 transition-colors"
              >
                Donate Today
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden" aria-label="Photos of our programs">
            <motion.div
              className="flex w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
            >
              {[...images, ...images].map((image, index) => (
                <div key={index} className="shrink-0 pr-4">
                  <img
                    src={image.src}
                    alt={index < images.length ? image.alt : ''}
                    loading="lazy"
                    draggable={false}
                    className="h-[320px] sm:h-[420px] lg:h-[520px] w-[280px] sm:w-[360px] lg:w-[440px] object-cover border border-slate-200"
                  />
                </div>
              ))}
            </motion.div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
