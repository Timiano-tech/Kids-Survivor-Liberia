import { motion } from 'framer-motion';

const Timeline = ({ items = [], tone = 'light', className = '' }) => {
  const isDark = tone === 'dark';

  return (
    <ol className={`relative ${className}`}>
      <div
        className={`absolute left-[27px] top-2 bottom-2 w-px ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}
        aria-hidden="true"
      />

      {items.map((item, index) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="relative pl-20 pb-10 last:pb-0"
        >
          <span
            className={`absolute left-0 top-0 w-14 h-14 flex items-center justify-center border ${
              isDark
                ? 'bg-slate-900 border-slate-600 text-yellow-400'
                : 'bg-white border-blue-200 text-blue-700'
            }`}
          >
            {item.icon || <span className="font-serif text-lg font-medium">{String(index + 1).padStart(2, '0')}</span>}
          </span>

          {item.period && (
            <div
              className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${isDark ? 'text-yellow-400' : 'text-blue-700'}`}
            >
              {item.period}
            </div>
          )}

          <h3 className={`text-xl font-semibold mb-3 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {item.title}
          </h3>

          {item.description && (
            <p className={`text-sm leading-relaxed max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {item.description}
            </p>
          )}

          {item.points && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.points.map((point) => (
                <li
                  key={point}
                  className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider border ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-slate-300'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </motion.li>
      ))}
    </ol>
  );
};

export default Timeline;
