import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPause, FiPlay } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

import HeroImage1 from '../../assets/Say no to drugs.jpeg';
import HeroImage2 from '../../assets/Children.jpeg';
import HeroImage3 from '../../assets/Community_Children.jpeg';
import HeroImage4 from '../../assets/Education.jpg';
import HeroImage5 from '../../assets/Success_Story.jpeg';

const slides = [
  {
    id: 1,
    image: HeroImage1,
    badge: 'Making an Impact',
    title: ['Building a Brighter Future for', "Liberia's Most Vulnerable"],
    description: 'Kids Survivor Liberia protects vulnerable children, promotes education, and empowers young people through drug abuse prevention, rehabilitation, and community-driven programs.',
    ctaText: 'Donate Now',
    ctaLink: '/donate',
    secondaryCtaText: 'Our Programs',
    secondaryCtaLink: '/programs',
    stat: { number: '13,000+', label: 'Lives touched' }
  },
  {
    id: 2,
    image: HeroImage2,
    badge: 'Every Child Matters',
    title: ['Every Child Deserves', 'a Chance to Thrive'],
    description: 'Through our child protection programs, we provide safe spaces, psychosocial support, and educational opportunities for children affected by poverty and exploitation.',
    ctaText: 'Sponsor a Child',
    ctaLink: '/donate',
    secondaryCtaText: 'Learn More',
    secondaryCtaLink: '/programs',
    stat: { number: '12,500+', label: 'In prevention programs' }
  },
  {
    id: 3,
    image: HeroImage3,
    badge: 'Community First',
    title: ['Strong Communities', 'Build Strong Futures'],
    description: 'We work with local leaders, families, and community organizations to create sustainable solutions that address the root causes of child vulnerability.',
    ctaText: 'Join Our Movement',
    ctaLink: '/volunteer',
    secondaryCtaText: 'See Our Impact',
    secondaryCtaLink: '/impact',
    stat: { number: '15', label: 'Counties covered' }
  },
  {
    id: 4,
    image: HeroImage4,
    badge: 'Education Changes Lives',
    title: ['Unlocking Potential', 'Through Education'],
    description: 'From early childhood to vocational training, our education programs equip Liberias next generation with the knowledge and skills to break the cycle of poverty.',
    ctaText: 'Support Education',
    ctaLink: '/donate',
    secondaryCtaText: 'Our Programs',
    secondaryCtaLink: '/programs',
    stat: { number: '3,000+', label: 'Households engaged' }
  },
  {
    id: 5,
    image: HeroImage5,
    badge: 'Real Stories, Real Impact',
    title: ['From Survival to', 'Success: Our Champions'],
    description: 'Hear directly from the youth whose lives have been transformed through KSL programs. Their resilience and achievements inspire everything we do.',
    ctaText: 'Read Their Stories',
    ctaLink: '/impact',
    secondaryCtaText: 'Get Involved',
    secondaryCtaLink: '/volunteer',
    stat: { number: '100+', label: 'Youth reintegrated' }
  }
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const current = slides[currentIndex];

  const imageVariants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 1.02, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  return (
    <section className="relative min-h-[520px] md:min-h-[600px] lg:min-h-[680px] bg-slate-950 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id}
            src={current.image}
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 flex flex-col justify-center min-h-[520px] md:min-h-[600px] lg:min-h-[680px]">
        <div className="max-w-2xl lg:max-w-[55%]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current.id} variants={textVariants} initial="initial" animate="center" exit="exit">
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-3 md:mb-4 flex items-center gap-2 text-eyebrow text-yellow-400"
              >
                <span className="h-px w-6 md:w-8 bg-yellow-400" aria-hidden="true" />
                {current.badge}
              </motion.p>

              {/* Heading — responsive sizes, not oversized */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[1.75rem] leading-[1.15] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-medium text-white tracking-tight"
              >
                {current.title.map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <span className="text-yellow-400">{line}</span> : line}
                  </span>
                ))}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-4 md:mt-5 max-w-lg text-[0.95rem] md:text-body-md text-slate-300/90 leading-relaxed"
              >
                {current.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 md:gap-4"
              >
                <Link
                  to={current.ctaLink}
                  className="group inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 px-5 py-2.5 md:px-7 md:py-3 text-button text-slate-900 transition-all duration-200"
                >
                  {current.ctaText}
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to={current.secondaryCtaLink}
                  className="inline-flex items-center border border-white/30 hover:bg-white/10 px-5 py-2.5 md:px-7 md:py-3 text-button text-white/80 hover:text-white transition-colors duration-200"
                >
                  {current.secondaryCtaText}
                </Link>
              </motion.div>

              {/* Stat — shown inline on mobile, separate on desktop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="mt-6 md:mt-8 flex items-baseline gap-3 lg:hidden"
              >
                <span className="text-display-md font-medium text-yellow-400 leading-none">
                  {current.stat.number}
                </span>
                <span className="text-body-sm text-slate-400">{current.stat.label}</span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stat — desktop only, positioned to the right */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } }}
            exit={{ opacity: 0, x: 20, transition: { duration: 0.3 } }}
            className="hidden lg:block absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 text-right"
          >
            <span className="block text-display-lg font-medium text-yellow-400 leading-none">
              {current.stat.number}
            </span>
            <span className="block mt-2 text-body-sm text-slate-400">{current.stat.label}</span>
          </motion.div>
        </AnimatePresence>

        {/* Bottom bar */}
        <div className="absolute bottom-5 md:bottom-8 left-5 sm:left-6 lg:left-8 right-5 sm:right-6 lg:right-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to slide ${index + 1}: ${slide.badge}`}
                className="relative h-2 rounded-full transition-all duration-300 overflow-hidden"
                style={{ width: index === currentIndex ? 28 : 8 }}
              >
                <span className={`absolute inset-0 rounded-full ${index === currentIndex ? 'bg-yellow-400' : 'bg-white/30 hover:bg-white/50'}`} />
                {index === currentIndex && isPlaying && (
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full bg-white/40"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5.5, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Pause/Play */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
            aria-label={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
          >
            {isPlaying ? <FiPause className="w-3.5 h-3.5" /> : <FiPlay className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
