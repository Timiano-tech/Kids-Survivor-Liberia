import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiX, FiCheckCircle } from 'react-icons/fi';

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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200]"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-xl shadow-2xl z-[201] overflow-hidden flex flex-col p-8 items-center text-center border border-slate-100"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shadow-sm mb-6 relative z-10 border border-blue-100">
              <FiClock className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10 tracking-tight">
              Coming Soon
            </h3>
            
            <p className="text-slate-600 font-medium leading-relaxed relative z-10 mb-8">
              We are working hard to expand our operations. Our programs in <strong className="text-blue-600">{countyName}</strong> will be launched soon!
            </p>

            <button 
              onClick={handleClose}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] relative z-10"
            >
              Got it, thanks!
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
