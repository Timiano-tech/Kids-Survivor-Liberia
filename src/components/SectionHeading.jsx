const SectionHeading = ({ eyebrow, title, description, align = 'left', tone = 'light', className = '' }) => {
  const centered = align === 'center';
  const isDark = tone === 'dark';

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p
          className={`flex items-center gap-3 text-eyebrow ${centered ? 'justify-center' : ''} ${
            isDark ? 'text-yellow-400' : 'text-blue-700'
          }`}
        >
          <span
            className={`h-px w-8 shrink-0 ${isDark ? 'bg-yellow-400' : 'bg-blue-700'}`}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      )}

      <h2
        className={`${centered ? 'mx-auto ' : ''}mt-5 max-w-2xl text-display-sm sm:text-display-md ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`${centered ? 'mx-auto ' : ''}mt-5 max-w-xl text-body-lg leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
