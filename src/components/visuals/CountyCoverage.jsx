import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { COUNTIES } from '../../data/counties';

const shortName = (name) => name.replace(/ County$/, '');

const CountyCoverage = ({ className = '' }) => {
  const active = COUNTIES.filter((county) => county.isActive);
  const planned = COUNTIES.filter((county) => !county.isActive);

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-6">
        <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-slate-700">
          <span className="w-3 h-3 bg-blue-700"></span>
          Active Operations
        </span>
        <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-slate-500">
          <span className="w-3 h-3 border border-slate-300 bg-slate-100"></span>
          Planned Expansion
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {COUNTIES.map((county, index) => {
          const inner = (
            <>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={`w-2 h-2 ${county.isActive ? 'bg-yellow-400' : 'bg-slate-300'}`}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 leading-tight mb-2">{shortName(county.name)}</h3>
              <p className="text-[11px] leading-relaxed text-slate-500 line-clamp-2">
                {county.isActive ? county.office?.focusArea : 'Planned expansion'}
              </p>
            </>
          );

          const shell = `block p-4 h-full border text-left transition-colors ${
            county.isActive
              ? 'bg-white border-slate-200 hover:border-blue-500'
              : 'bg-slate-50 border-slate-200 border-dashed'
          }`;

          return (
            <motion.div
              key={county.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              {county.isActive ? (
                <Link to={`/counties/${county.id}`} className={shell}>
                  {inner}
                </Link>
              ) : (
                <div className={`${shell} cursor-default opacity-70`} aria-disabled="true">
                  {inner}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-3 text-slate-500">
        <FiMapPin className="w-4 h-4 text-blue-600 shrink-0" />
        <p className="text-sm">
          {active.length} of {COUNTIES.length} Liberian counties have active KSL operations. Select an active county to
          see its programs and results.
        </p>
      </div>
      <p className="sr-only">{planned.length} counties are in planned expansion.</p>
    </div>
  );
};

export default CountyCoverage;
