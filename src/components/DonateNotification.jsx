import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHeart, FiX } from 'react-icons/fi';

const DonateNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show initially after 30 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    // Then show every 5 minutes (300000 ms)
    const intervalTimer = setInterval(() => {
      setIsVisible(true);
    }, 300000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100%-3rem)] bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/40 overflow-hidden"
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"></div>

          <div className="p-5 flex items-start gap-4">
            <div className="bg-yellow-50 text-yellow-500 p-3 rounded-xl shrink-0">
              <FiHeart className="w-6 h-6" />
            </div>

            <div className="flex-1">
              <h4 className="text-slate-900 font-bold mb-1 tracking-tight">Support Our Mission</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Your contribution helps us protect vulnerable children and empower communities in Liberia. Every little bit counts.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  to="/donate"
                  onClick={handleClose}
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 text-sm font-bold px-5 py-2 rounded-full transition-colors shadow-sm"
                >
                  Donate Now
                </Link>
                <button
                  onClick={handleClose}
                  className="text-slate-400 hover:text-slate-600 text-sm font-medium px-3 py-2 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-slate-600 p-1 -mt-1 -mr-1 transition-colors"
              aria-label="Close notification"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonateNotification;
