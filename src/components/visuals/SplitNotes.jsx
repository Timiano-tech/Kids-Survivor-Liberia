import { motion } from 'framer-motion';

const SplitNotes = ({ items = [], tone = 'light', className = '' }) => {
  const isDark = tone === 'dark';

  return (
    <div className={`grid gap-10 md:grid-cols-2 md:gap-16 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.12 }}
          className={`md:border-l md:pl-10 ${isDark ? 'md:border-slate-700' : 'md:border-slate-200'}`}
        >
          <p
            className={`flex items-center gap-3 text-eyebrow ${isDark ? 'text-yellow-400' : 'text-blue-700'}`}
          >
            <span className={`h-px w-8 ${isDark ? 'bg-yellow-400' : 'bg-blue-700'}`} aria-hidden="true" />
            {item.eyebrow}
          </p>
          <h3 className={`mt-6 text-display-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
          <p
            className={`mt-5 text-body-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
          >
            {item.text}
          </p>
          {item.note && (
            <p
              className={`mt-6 border-t pt-5 text-body-sm ${isDark ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-500'}`}
            >
              {item.note}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default SplitNotes;
