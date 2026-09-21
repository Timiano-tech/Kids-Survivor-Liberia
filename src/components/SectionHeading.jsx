const SectionHeading = ({ eyebrow, title, description, align = 'center', tone = 'light', className = '' }) => {
  const centered = align === 'center';
  const isDark = tone === 'dark';

  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <p className={`mb-4 text-eyebrow ${isDark ? 'text-yellow-400' : 'text-blue-700'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`${centered ? 'mx-auto' : ''} max-w-3xl text-[1.5rem] sm:text-display-md lg:text-display-lg font-medium leading-tight tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`${centered ? 'mx-auto' : ''} mt-4 max-w-2xl text-body-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;