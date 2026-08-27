import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUsers, FiHome, FiShield, FiActivity, FiCheckCircle } from 'react-icons/fi';

// Counter Component
const Counter = ({ end, duration = 2, label, icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);

      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);

        const easeOutQuad = (t) => t * (2 - t);
        const currentCount = Math.floor(easeOutQuad(percentage) * end);

        setCount(currentCount);

        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, hasAnimated, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="flex items-center justify-center text-gray-600">
        <span className="mr-2">{icon}</span>
        {label}
      </div>
    </div>
  );
};

export const QuickStats = () => {
  // Impact Statistics Data aligned with organizational focus
  const impactStats = [
    { end: 12000, label: "Vulnerable Individuals Reached", icon: <FiUsers />, duration: 2.5 },
    { end: 120, label: "Communities Engaged", icon: <FiHome />, duration: 2 },
    { end: 10000, label: "Youth in Prevention Programs", icon: <FiShield />, duration: 1.5 },
    { end: 8000, label: "Individuals in Rehabilitation", icon: <FiActivity />, duration: 2 }
  ];

  return (
    <section className="py-24 bg-slate-900 relative">
      {/* Subtle dot grid overlay — no gradient */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='white'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm mb-3 block">Measurable Impact</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Driven by Data, Defined by <span className="text-blue-400">Impact</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Tracking our progress towards achieving NADAP 2025-2030 and YTEI goals through targeted, community-driven interventions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-slate-800/50 p-5 rounded-lg text-blue-400 border border-slate-700/50 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
                <Counter
                  end={stat.end}
                  duration={stat.duration}
                  label=""
                  icon={null}
                />
              </div>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-blue-900/50 text-blue-300 border border-blue-800/50 rounded-lg text-sm font-medium backdrop-blur-sm">
            <FiCheckCircle className="mr-3 w-5 h-5 text-blue-400" />
            Operating across multiple counties with NADAP-aligned programs
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStats;
