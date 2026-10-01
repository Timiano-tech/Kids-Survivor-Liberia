import { motion } from 'framer-motion';

const ProcessSteps = ({ steps = [], tone = 'light', className = '' }) => {
  const isDark = tone === 'dark';

  return (
    <ol className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className={`border-t pt-5 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}
        >
          <span
            className={`block font-serif text-2xl leading-none mb-4 ${
              isDark ? 'text-yellow-400' : 'text-blue-700'
            }`}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3
            className={`text-heading-lg leading-snug mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            {step.title}
          </h3>
          {step.description && (
            <p className={`text-body-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {step.description}
            </p>
          )}
        </motion.li>
      ))}
    </ol>
  );
};

export default ProcessSteps;
