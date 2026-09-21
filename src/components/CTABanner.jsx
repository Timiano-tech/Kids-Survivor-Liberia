import { Link } from 'react-router-dom';

const CTABanner = ({
  title,
  description,
  primaryLabel,
  primaryTo = '/donate',
  secondaryLabel,
  secondaryTo,
  secondaryHref,
}) => {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-700 border border-blue-800 px-6 py-12 sm:px-12 lg:px-16 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              {title && (
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">{title}</h2>
              )}
              {description && (
                <p className="mt-4 text-lg leading-relaxed text-blue-100">{description}</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              {primaryLabel && (
                <Link
                  to={primaryTo}
                  className="inline-flex items-center justify-center bg-yellow-500 px-8 py-3.5 text-sm font-bold text-slate-900 transition-colors hover:bg-yellow-400"
                >
                  {primaryLabel}
                </Link>
              )}
              {secondaryTo && secondaryLabel && (
                <Link
                  to={secondaryTo}
                  className="inline-flex items-center justify-center border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {secondaryLabel}
                </Link>
              )}
              {secondaryHref && secondaryLabel && (
                <a
                  href={secondaryHref}
                  className="inline-flex items-center justify-center border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {secondaryLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;