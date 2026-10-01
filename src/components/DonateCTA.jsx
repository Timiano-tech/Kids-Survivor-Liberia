import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import DonateImage from '../assets/Children.jpeg';

const DonateCTA = ({
  eyebrow = 'Support Our Work',
  title = 'Help a Child Survive, Then Thrive',
  description = 'Every contribution funds meals, safe shelter, school fees, counselling, and drug prevention sessions delivered with communities across Liberia.',
  primaryLabel = 'Donate Now',
  primaryTo = '/donate',
  secondaryLabel = 'Partner With Us',
  secondaryTo = '/partnership',
  secondaryHref,
}) => {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <img
        src={DonateImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-yellow-400 flex items-center gap-3">
            <span className="h-px w-8 bg-yellow-400" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="mt-4 text-display-md lg:text-display-lg text-white leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-body-lg text-slate-300 leading-relaxed">{description}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to={primaryTo}
              className="group inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-3.5 text-button transition-colors"
            >
              {primaryLabel}
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            {secondaryHref ? (
              <a
                href={secondaryHref}
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 text-button transition-colors"
              >
                {secondaryLabel}
              </a>
            ) : (
              <Link
                to={secondaryTo}
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 text-button transition-colors"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>

          <div className="mt-10 border-t border-white/15 pt-6">
            <ul className="grid sm:grid-cols-3 gap-x-8 gap-y-3">
              {[
                'One-time or monthly giving',
                'Email confirmation for every gift',
                'Annual independent external audit',
              ].map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-body-sm text-slate-300">
                  <span className="h-px w-4 bg-yellow-400 shrink-0 translate-y-[-3px]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCTA;
