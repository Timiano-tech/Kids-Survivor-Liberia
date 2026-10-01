import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

const StatBand = ({ stats = [], tone = 'light', divided = false, size = 'md', className = '' }) => {
  const isDark = tone === 'dark';
  const columns =
    stats.length > 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : stats.length > 2 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';
  const figure = size === 'sm' ? 'text-stat-sm' : 'text-stat';

  return (
    <div className={`grid gap-8 ${columns} ${divided ? 'divide-y sm:divide-y-0' : ''} ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className={
            divided
              ? `${isDark ? 'sm:border-l sm:border-slate-800 sm:first:border-l-0 sm:pl-8' : 'sm:border-l sm:border-slate-200 sm:first:border-l-0 sm:pl-8'} py-4 sm:py-0 text-center sm:text-left`
              : 'text-center'
          }
        >
          <div
            className={`font-serif ${figure} tabular-nums mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            {typeof stat.value === 'number' ? (
              <AnimatedNumber
                end={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                duration={1.6 + index * 0.2}
              />
            ) : (
              <>{stat.prefix}{stat.value}{stat.suffix}</>
            )}
          </div>

          <div
            className={`text-caption uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
          >
            {stat.label}
          </div>

          {stat.description && (
            <p className={`text-body-sm leading-relaxed max-w-xs mx-auto sm:mx-0 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {stat.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default StatBand;
