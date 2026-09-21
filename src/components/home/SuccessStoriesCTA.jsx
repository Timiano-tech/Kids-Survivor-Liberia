import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';

import JohnHoward from '../../assets/Success_Story.jpeg';
import Franklin_Mondor from '../../assets/Success_story2.jpeg';
import Samuel_Meaway from '../../assets/Success_Story3.jpeg';
import Community from '../../assets/Success_Story4.jpeg';

const successStories = [
  {
    id: 1,
    name: 'John Howard',
    role: 'Living Testimony',
    quote: 'John Howard, once a homeless drug user and criminal in Lofa County, was reached by KSL in July 2025. Though initially resistant, he joined their support network. Of the 15 youths in his original group, two died from drugs, but John survived. Now the sole survivor, he is a living example of transformation and is actively rebuilding his life.',
    image: JohnHoward,
    program: 'Rehabilitation & Social Reintegration'
  },
  {
    id: 2,
    name: 'Franklin Mondor',
    role: 'Transformation Graduate',
    quote: 'Franklin Mondor, a 41-year-old former drug dealer from Nimba County, spent over 13 years dealing drugs and opposing outreach programs like Kids Survivor Liberia. On January 2, 2026, he converted to Christianity during a prayer session, was taken in by the organization... seeks funding to learn a trade for reintegration.',
    image: Franklin_Mondor,
    program: 'Rehabilitation & Social Reintegration'
  },
  {
    id: 3,
    name: 'Samuel Meaway',
    role: 'Transformation Graduate',
    quote: 'Samuel Meaway, formerly known as "50," grew up in hardship in Nimba County, dropped out of school early, and turned to drugs and crime, spending over a year in a corrections facility. On December 27, 2025, an outreach by Kids Survivor Liberia offered him compassion and guidance\u2014a turning point that helped him break free from addiction and crime.',
    image: Samuel_Meaway,
    program: 'Rehabilitation & Social Reintegration'
  },
  {
    id: 4,
    name: 'Andrew Monger',
    role: 'Transformation Graduate',
    quote: 'Andrew Monger overcame drug and alcohol addiction through faith in Jesus Christ, transforming his life from hopelessness to purpose and peace. His story illustrates that change is possible with support and guidance. Kids Survivor Liberia shares this message, offering young people a second chance to build a brighter future.',
    image: Community,
    program: 'Rehabilitation & Social Reintegration'
  }
];

export const SuccessStoriesCTA = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index) => {
    setDirection(index > currentStory ? 1 : -1);
    setCurrentStory(index);
  }, [currentStory]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(next, 6500);
    return () => clearInterval(interval);
  }, [isPlaying, next]);

  const story = successStories[currentStory];

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } })
  };

  return (
    <section className="bg-slate-900 py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="mb-3 text-eyebrow text-yellow-400">Verified Impact</p>
          <h2 className="text-[1.5rem] sm:text-display-md lg:text-display-lg font-medium tracking-tight text-white">
            Lives Transformed
          </h2>
          <p className="mt-3 md:mt-4 text-[0.9rem] md:text-body-md text-slate-400 max-w-2xl mx-auto">
            Through our targeted, community-driven rehabilitation programs, we are restoring hope and building brighter futures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div>
            <div className="border border-slate-700 overflow-hidden relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={story.id}
                  src={story.image}
                  alt={`${story.name} success story`}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover absolute inset-0"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                />
              </AnimatePresence>
              {/* Spacer to maintain height */}
              <img src={story.image} alt="" className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover opacity-0" aria-hidden="true" />
            </div>
            <div className="mt-4 flex items-center justify-between bg-slate-800 border border-slate-700 px-5 py-4">
              <div>
                <h3 className="text-heading-md font-medium text-white">{story.name}</h3>
                <p className="text-body-sm text-slate-400">{story.program}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {successStories.map((s, index) => (
                    <button
                      key={s.id}
                      onClick={() => goTo(index)}
                      aria-label={`Show story: ${s.name}`}
                      className="relative h-2 rounded-full transition-all duration-300 overflow-hidden"
                      style={{ width: index === currentStory ? 24 : 8 }}
                    >
                      <span className={`absolute inset-0 rounded-full ${index === currentStory ? 'bg-yellow-400' : 'bg-slate-600 hover:bg-slate-500'}`} />
                      {index === currentStory && isPlaying && (
                        <motion.span
                          className="absolute inset-y-0 left-0 rounded-full bg-white/40"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 6.5, ease: 'linear' }}
                        />
                      )}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 ml-2">
                  <button onClick={prev} className="p-1.5 bg-slate-700 hover:bg-slate-600 text-white transition-colors" aria-label="Previous story">
                    <FiChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => setIsPlaying(!isPlaying)} className="p-1.5 bg-slate-700 hover:bg-slate-600 text-white transition-colors" aria-label={isPlaying ? 'Pause' : 'Play'}>
                    {isPlaying ? <FiPause className="w-3.5 h-3.5" /> : <FiPlay className="w-3.5 h-3.5" />}
                  </button>
                  <button onClick={next} className="p-1.5 bg-slate-700 hover:bg-slate-600 text-white transition-colors" aria-label="Next story">
                    <FiChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={story.id}
                custom={direction}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 font-serif text-2xl italic">
                    &ldquo;
                  </div>
                  <div>
                    <h3 className="text-heading-md font-medium text-white">{story.name}</h3>
                    <p className="text-body-sm text-yellow-400">{story.role}</p>
                  </div>
                </div>

                <blockquote className="border-l-4 border-yellow-400 pl-5 md:pl-6 mb-8 md:mb-10">
                  <p className="text-[1rem] sm:text-body-lg md:text-display-sm leading-relaxed text-slate-200 italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <Link
                    to="/impact"
                    className="group inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-5 py-2.5 md:px-8 md:py-4 text-button text-white uppercase tracking-wider transition-colors duration-200"
                  >
                    View Our Impact
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/donate"
                    className="inline-flex items-center gap-2 border border-yellow-400/40 hover:bg-yellow-400/10 px-5 py-2.5 md:px-8 md:py-4 text-button text-yellow-400 transition-colors duration-200"
                  >
                    Help More People Like Them
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCTA;
