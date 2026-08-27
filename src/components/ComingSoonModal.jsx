import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiX, FiShield } from 'react-icons/fi';

let triggerModal = () => {};

export const showComingSoon = (countyName) => {
  if (triggerModal) triggerModal(countyName);
};

const ComingSoonModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countyName, setCountyName] = useState('');

  useEffect(() => {
    triggerModal = (name) => {
      setCountyName(name);
      setIsOpen(true);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[200]"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-slate-900 text-white rounded-xl shadow-2xl z-[201] overflow-hidden flex flex-col p-8 items-center text-center border border-slate-800"
          >
            {/* Header Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 bg-yellow-500/10 text-yellow-400 rounded-xl flex items-center justify-center shadow-inner mb-5 relative z-10 border border-yellow-500/20">
              <FiClock className="w-7 h-7" />
            </div>

            <div className="flex items-center gap-1.5 mb-2">
              <FiShield className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">County Expansion</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 relative z-10 tracking-tight">
              Program Launching Soon
            </h3>
            
            <p className="text-slate-300 text-sm font-light leading-relaxed relative z-10 mb-8">
              We are expanding our operations under NADAP 2025–2030. Initiatives in <strong className="text-yellow-400 font-semibold">{countyName}</strong> will launch in the upcoming phase!
            </p>

            <button 
              onClick={handleClose}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg relative z-10 text-sm"
            >
              Understand & Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
