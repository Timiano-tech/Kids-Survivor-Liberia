import { motion } from 'framer-motion';

const RuleList = ({ items = [], columns = 'sm:grid-cols-2 lg:grid-cols-3', tone = 'light', className = '' }) => {
  const isDark = tone === 'dark';

  return (
    <ul className={`grid gap-x-10 gap-y-8 ${columns} ${className}`}>
      {items.map((item, index) => (
        <motion.li
          key={item.label || item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          className={`border-t pt-5 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}
        >
          {item.label && (
            <p
              className={`text-caption uppercase tracking-[0.18em] ${isDark ? 'text-yellow-400' : 'text-blue-700'}`}
            >
              {item.label}
            </p>
          )}
          {item.title && (
            <h3 className={`mt-3 text-heading-md leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {item.title}
            </h3>
          )}
          {item.note && (
            <p className={`mt-2 text-body-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {item.note}
            </p>
          )}
        </motion.li>
      ))}
    </ul>
  );
};

export default RuleList;
