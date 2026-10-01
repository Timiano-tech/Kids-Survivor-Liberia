import { motion } from 'framer-motion';

const ImageFeature = ({
  image,
  alt = '',
  eyebrow,
  title,
  description,
  points = [],
  stat,
  imagePosition = 'left',
  tone = 'light',
  children,
}) => {
  const reversed = imagePosition === 'right';
  const isDark = tone === 'dark';

  const classes = {
    eyebrow: isDark ? 'text-yellow-400' : 'text-eyebrow',
    rule: isDark ? 'bg-yellow-400' : 'bg-blue-700',
    title: isDark ? 'text-white' : 'text-slate-900',
    description: isDark ? 'text-slate-400' : 'text-slate-600',
    point: isDark ? 'text-slate-300' : 'text-slate-700',
    statBox: isDark ? 'bg-yellow-500 text-slate-900' : 'bg-blue-700 text-white',
    statLabel: isDark ? 'text-slate-900' : 'text-blue-100',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      <div className={reversed ? 'lg:order-2' : ''}>
        <div className="relative">
          <img
            src={image}
            alt={alt || title}
            className="w-full h-72 sm:h-96 lg:h-[30rem] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/20"></div>

          {stat && (
            <div className={`absolute bottom-0 left-0 px-7 py-5 ${classes.statBox}`}>
              <div className="font-serif text-3xl sm:text-4xl font-medium tracking-tight leading-none">
                {stat.value}
              </div>
              <div className={`mt-2 text-[10px] font-bold uppercase tracking-[0.18em] ${classes.statLabel}`}>
                {stat.label}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={reversed ? 'lg:order-1' : ''}>
        {eyebrow && (
          <p className={`mb-4 flex items-center ${classes.eyebrow}`}>
            <span className={`w-8 h-px mr-3 ${classes.rule}`}></span>
            {eyebrow}
          </p>
        )}

        {title && (
          <h2 className={`text-[1.5rem] sm:text-display-md font-medium leading-tight tracking-tight ${classes.title}`}>
            {title}
          </h2>
        )}

        {description && (
          <p className={`mt-5 text-body-lg leading-relaxed ${classes.description}`}>{description}</p>
        )}

        {points.length > 0 && (
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {points.map((point) => (
              <li key={point} className={`flex items-start gap-3 text-sm font-medium ${classes.point}`}>
                <span className="w-1.5 h-1.5 mt-2 shrink-0 bg-yellow-500"></span>
                {point}
              </li>
            ))}
          </ul>
        )}

        {children}
      </div>
    </motion.div>
  );
};

export default ImageFeature;
