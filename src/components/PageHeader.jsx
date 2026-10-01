import { motion } from 'framer-motion';
import AnimatedNumber from './visuals/AnimatedNumber';

const PageHeader = ({
  eyebrow,
  title,
  description,
  image,
  meta = [],
  children,
}) => {
  return (
    <header className="relative bg-slate-950 overflow-hidden">
      {image && (
        <div className="absolute inset-0" aria-hidden="true">
          <motion.img
            src={image}
            alt=""
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-14 lg:pt-48 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="flex items-center gap-3 text-eyebrow text-yellow-400">
              <span className="h-px w-8 bg-yellow-400" aria-hidden="true" />
              {eyebrow}
            </p>
          )}

          <h1 className="mt-6 text-display-lg lg:text-display-xl text-white leading-[1.05] tracking-tight">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-xl text-body-lg text-slate-300 leading-relaxed">{description}</p>
          )}

          {children && <div className="mt-9">{children}</div>}
        </motion.div>

        {meta.length > 0 && (
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4"
          >
            {meta.map((item) => (
              <div key={item.label}>
                <dd className="font-serif text-stat-sm text-white leading-none tabular-nums">
                  {typeof item.value === 'number' ? (
                    <AnimatedNumber end={item.value} duration={2} suffix={item.suffix || ''} />
                  ) : (
                    item.value
                  )}
                </dd>
                <dt className="mt-3 text-caption uppercase tracking-widest text-slate-400">{item.label}</dt>
              </div>
            ))}
          </motion.dl>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
