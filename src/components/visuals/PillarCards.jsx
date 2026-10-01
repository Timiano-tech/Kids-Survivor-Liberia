import { motion } from 'framer-motion';

const PillarCards = ({ pillars = [], tone = 'light', columns = 'md:grid-cols-2', className = '' }) => {
  const isDark = tone === 'dark';

  return (
    <div className={`grid gap-x-8 gap-y-14 ${columns} ${className}`}>
      {pillars.map((pillar, index) => (
        <motion.article
          key={pillar.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
          className="group flex flex-col"
        >
          {pillar.image && (
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}

          <div className={`mt-5 border-t pt-5 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
            {pillar.tag && (
              <p
                className={`text-caption uppercase tracking-[0.18em] ${
                  isDark ? 'text-yellow-400' : 'text-blue-700'
                }`}
              >
                {pillar.tag}
              </p>
            )}
            <h3
              className={`mt-3 text-heading-lg leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              {pillar.title}
            </h3>

            {pillar.description && (
              <p
                className={`mt-3 text-body-sm leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {pillar.description}
              </p>
            )}

            {pillar.points && (
              <ul className="mt-6 space-y-2.5">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-start gap-3 border-b pb-2.5 text-body-sm last:border-b-0 ${
                      isDark ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-600'
                    }`}
                  >
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 ${isDark ? 'bg-yellow-400' : 'bg-blue-700'}`}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default PillarCards;
