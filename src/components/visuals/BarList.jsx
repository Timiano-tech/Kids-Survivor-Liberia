import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

const BarList = ({ items = [], tone = 'light', unit = '', max: maxProp, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isDark = tone === 'dark';

  const max = maxProp || Math.max(...items.map((item) => item.value), 1);

  return (
    <div ref={ref} className={`space-y-7 ${className}`}>
      {items.map((item, index) => {
        const percent = Math.max((item.value / max) * 100, 2);
        const barColor = item.color || (index % 2 === 0 ? 'bg-blue-600' : 'bg-yellow-500');

        return (
          <div key={item.label}>
            <div className="flex items-end justify-between gap-6 mb-2.5">
              <div className="flex items-center gap-3 min-w-0">
                {item.icon && (
                  <span className={`shrink-0 ${isDark ? 'text-yellow-400' : 'text-blue-600'}`}>{item.icon}</span>
                )}
                <span
                  className={`text-sm font-semibold truncate ${isDark ? 'text-slate-200' : 'text-slate-800'}`}
                >
                  {item.label}
                </span>
              </div>
              <span
                className={`shrink-0 font-serif text-heading-lg font-medium tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                {typeof item.value === 'number' ? (
                  <AnimatedNumber end={item.value} unit={unit} duration={1.4 + index * 0.15} />
                ) : (
                  <>{item.value}{unit}</>
                )}
              </span>
            </div>

            <div className={`h-2.5 w-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
              <motion.div
                className={`h-full ${barColor}`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${percent}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
              />
            </div>

            {item.helper && (
              <p className={`mt-2 text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {item.helper}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BarList;
