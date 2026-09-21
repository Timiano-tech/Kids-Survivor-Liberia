import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUsers, FiHome, FiShield, FiActivity, FiCheckCircle } from 'react-icons/fi';

// Counter Component
const Counter = ({ end, duration = 2 }) => {
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

  return <span ref={ref}>{count.toLocaleString()}+</span>;
};

export const QuickStats = () => {
  const impactStats = [
    { end: 12000, label: "Vulnerable Individuals Reached", icon: <FiUsers />, duration: 2.5 },
    { end: 120, label: "Communities Engaged", icon: <FiHome />, duration: 2 },
    { end: 10000, label: "Youth in Prevention Programs", icon: <FiShield />, duration: 1.5 },
    { end: 8000, label: "Individuals in Rehabilitation", icon: <FiActivity />, duration: 2 }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="mb-3 text-eyebrow text-yellow-400">Measurable Impact</p>
          <h2 className="text-[1.5rem] sm:text-display-md lg:text-display-lg font-medium tracking-tight text-white">
            Driven by Data, Defined by <span className="text-blue-400">Impact</span>
          </h2>
          <p className="mt-3 md:mt-4 text-[0.9rem] md:text-body-md text-slate-400 max-w-2xl mx-auto">
            Tracking our progress towards achieving NADAP 2025-2030 and YTEI goals through targeted, community-driven interventions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 max-w-6xl mx-auto">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center border border-slate-800 p-8"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-slate-800 p-4 text-blue-400 border border-slate-700">
                  {stat.icon}
                </div>
              </div>
              <div className="text-display-md md:text-display-lg font-medium text-white tracking-tight">
                <Counter end={stat.end} duration={stat.duration} />
              </div>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-caption mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-3 px-6 py-3 bg-blue-950 text-blue-200 border border-blue-900 text-sm font-medium">
            <FiCheckCircle className="w-5 h-5 text-blue-400" />
            Operating across multiple counties with NADAP-aligned programs
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;