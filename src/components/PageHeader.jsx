import { motion } from 'framer-motion';

const PageHeader = ({ eyebrow, title, description, image, alt = '', children }) => {
  return (
    <header className="relative bg-slate-950 pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden border-b border-slate-800">
      {image && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img src={image} alt={alt} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-slate-950/85"></div>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">{eyebrow}</p>
          )}
          <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </header>
  );
};

export default PageHeader;