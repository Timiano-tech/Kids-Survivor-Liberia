import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const StatementBand = ({
  image,
  eyebrow,
  statement,
  attribution,
  linkLabel,
  linkTo,
  className = '',
}) => {
  return (
    <section className={`relative bg-slate-950 overflow-hidden ${className}`}>
      {image && (
        <div className="absolute inset-0" aria-hidden="true">
          <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-slate-950/78" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="flex items-center gap-3 text-eyebrow text-yellow-400">
              <span className="h-px w-8 bg-yellow-400" aria-hidden="true" />
              {eyebrow}
            </p>
          )}

          <p className="mt-7 font-serif text-display-sm lg:text-display-md text-white leading-tight">
            {statement}
          </p>

          {attribution && (
            <p className="mt-7 text-caption uppercase tracking-widest text-slate-400">{attribution}</p>
          )}

          {linkLabel && linkTo && (
            <Link
              to={linkTo}
              className="group mt-9 inline-flex items-center gap-2 border-b border-yellow-500 pb-1 text-button font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
            >
              {linkLabel}
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default StatementBand;
