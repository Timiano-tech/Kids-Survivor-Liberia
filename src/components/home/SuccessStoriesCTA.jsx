import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiArrowRight } from 'react-icons/fi';

import JohnHoward from '../../assets/Success_Story.jpeg';
import Franklin_Mondor from '../../assets/Success_story2.jpeg';
import Samuel_Meaway from '../../assets/Success_Story3.jpeg';
import Community from '../../assets/Community.jpeg';

export const SuccessStoriesCTA = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    {
      id: 4,
      name: "John Howard",
      role: "Living Testimony",
      quote: "John Howard, once a homeless drug user and criminal in Lofa County, was reached by KSL in July 2025. Though initially resistant, he joined their support network. Of the 15 youths in his original group, two died from drugs, but John survived. Now the sole survivor, he is a living example of transformation and is actively rebuilding his life.",
      image: JohnHoward,
      program: "Rehabilitation & Social Reintegration"
    },
    {
      id: 1,
      name: "Franklin Mondor",
      role: "Transformation Graduate",
      quote: "Franklin Mondor, a 41-year-old former drug dealer from Nimba County, spent over 13 years dealing drugs and opposing outreach programs like Kids Survivor Liberia. On January 2, 2026, he converted to Christianity during a prayer session, was taken in by the organization... seeks funding to learn a trade for reintegration.",
      image: Franklin_Mondor,
      program: "Rehabilitation & Social Reintegration"
    },
    {
      id: 2,
      name: "Samuel Meaway",
      role: "Transformation Graduate",
      quote: "Samuel Meaway, formerly known as “50,” grew up in hardship in Nimba County, dropped out of school early, and turned to drugs and crime, spending over a year in a corrections facility. On December 27, 2025, an outreach by Kids Survivor Liberia offered him compassion and guidance—a turning point that helped him break free from addiction and crime. With ongoing support, he is now rebuilding his life with purpose and hope, embodying the mission to restore vulnerable individuals and empower lasting transformation.",
      image: Samuel_Meaway,
      program: "Rehabilitation & Social Reintegration"
    },
    {
      id: 3,
      name: "David Sumo",
      role: "Peace Ambassador",
      quote: "Through KSL's community peacebuilding workshops, I learned that true leadership means bringing people together. I now volunteer to mentor adolescent boys, steering them away from crime.",
      image: Community,
      program: "Community Engagement"
    }
  ];

  useEffect(() => {
    const storyInterval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 6000);
    return () => clearInterval(storyInterval);
  }, [successStories.length]);

  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden flex items-center justify-center min-h-[700px]">
      {/* Static Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-15 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Auto-rotating Image Side */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 ring-4 ring-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStory}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={successStories[currentStory].image}
                  alt="Verifiable Success Story"
                  className="w-full h-full object-cover"
                />
                {/* Lighter Gradient Overlay so picture is clearer */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-md" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{successStories[currentStory].name}</h4>
                  <p className="text-blue-200 font-semibold bg-slate-900/60 inline-block px-3 py-1 rounded backdrop-blur-sm border border-blue-400/30 text-sm drop-shadow-md">{successStories[currentStory].program}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:pl-8 text-center lg:text-left drop-shadow-lg"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-blue-400/30 shadow-inner backdrop-blur-sm">
              <FiHeart className="mr-2" /> Verified Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Success Stories
            </h2>
            <p className="text-slate-200 text-lg leading-relaxed mb-8">
              Through our targeted, community-driven interventions aligned with NADAP and YTEI, we are changing lives across Liberia. Read the powerful testimonies of individuals who have overcome tremendous odds and are now building brighter futures.
            </p>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentStory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="border-l-4 border-blue-400 pl-6 mb-10 text-left h-32 flex items-center bg-slate-900/40 rounded-r-2xl py-4 pr-6 border-y border-r border-slate-700/50 shadow-inner backdrop-blur-sm"
              >
                <p className="text-xl text-white font-light italic leading-relaxed line-clamp-4">
                  "{successStories[currentStory].quote}"
                </p>
              </motion.blockquote>
            </AnimatePresence>

            <Link to="/impact">
              <button className="group relative overflow-hidden rounded-xl bg-blue-600 px-8 py-4 transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] w-full sm:w-auto border border-blue-400/50">
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-bold tracking-wider uppercase text-sm">
                  View Our Impact
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5 w-5 h-5" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCTA;
