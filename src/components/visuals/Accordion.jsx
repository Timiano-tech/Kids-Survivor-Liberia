import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMinus, FiPlus } from 'react-icons/fi';

const Accordion = ({ items = [], tone = 'light', defaultOpen = 0, className = '' }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const isDark = tone === 'dark';

  return (
    <div className={`border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={`border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span
                  className={`shrink-0 font-serif text-sm leading-none ${isDark ? 'text-yellow-400' : 'text-blue-700'}`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={`text-heading-md leading-snug transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.question}
                </span>
              </span>

              <span
                className={`mt-1 shrink-0 ${isDark ? 'text-yellow-400' : 'text-blue-700'}`}
              >
                {isOpen ? <FiMinus className="h-4 w-4" /> : <FiPlus className="h-4 w-4" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 pl-10">
                    <p
                      className={`max-w-2xl text-body-sm leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
