import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiX, FiArrowRight } from 'react-icons/fi';

const DONATION_REASONS = [
  {
    title: "Fund School Supplies for At-Risk Children",
    description: "Your support provides books, uniforms, and learning materials for vulnerable children in Bong & Margibi counties."
  },
  {
    title: "Support Youth Drug Rehabilitation & Recovery",
    description: "Help fund psychosocial counseling and community support for young people recovering from substance use."
  },
  {
    title: "Sponsor Vocational Training for Young Women",
    description: "Empower adolescent girls and young mothers with practical skills, mentorship, and financial independence."
  },
  {
    title: "Protect Vulnerable Children & Elders",
    description: "Support grassroots outreach delivering protection, care, and basic necessities to widows and elderly community members."
  },
  {
    title: "Expand School Prevention Workshops",
    description: "Help KSL reach more rural schools across Liberia with peer led anti-drug awareness and youth leadership programs."
  }
];

const DonateNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [reasonIndex, setReasonIndex] = useState(0);

  useEffect(() => {
    // Pick a random reason on initial load
    const initialIndex = Math.floor(Math.random() * DONATION_REASONS.length);
    setReasonIndex(initialIndex);

    // Show initially after 12 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 12000);

    return () => clearTimeout(initialTimer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const currentReason = DONATION_REASONS[reasonIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[100] max-w-md w-[calc(100%-3rem)] bg-slate-900 text-white rounded-lg shadow-xl border border-slate-800 p-6 overflow-hidden"
        >
          {/* Top Row: Label & Close */}
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
              Kids Survivor Liberia · NGO Impact
            </span>
            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Close notification"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>

          {/* Dynamic Reason Content */}
          <div className="mb-5">
            <h3 className="text-lg font-bold text-white tracking-tight mb-2">
              {currentReason.title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {currentReason.description}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              onClick={handleClose}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-sm font-bold py-3 px-4 rounded-md transition-colors shadow-sm"
            >
              <span>Support This Cause</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={handleClose}
              className="px-3 py-3 text-slate-400 hover:text-slate-200 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonateNotification;
