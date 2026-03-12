import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 2400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (100 - prev) * 0.06;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      >
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.img
            src="/KSL Logo.png"
            alt="KSL"
            className="w-20 h-20 object-contain mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-slate-800 text-lg font-semibold tracking-wide mb-8"
          >
            Kids Survivor Liberia
          </motion.p>

          {/* Simple progress bar */}
          <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
