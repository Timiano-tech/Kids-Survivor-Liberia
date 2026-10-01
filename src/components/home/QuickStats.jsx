import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import AnimatedNumber from '../visuals/AnimatedNumber';

const stats = [
  { value: 12000, suffix: '+', label: 'Vulnerable individuals reached' },
  { value: 10000, suffix: '+', label: 'Youth in prevention programmes' },
  { value: 8000, suffix: '+', label: 'Individuals in rehabilitation' },
  { value: 120, suffix: '+', label: 'Communities engaged' },
];

export const QuickStats = () => {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-200">
          {stats.map((stat, index) => (
            <div key={stat.label} className="px-4 py-9 lg:px-8 text-center">
              <p className="font-serif text-stat-sm text-slate-900 leading-none">
                <AnimatedNumber end={stat.value} suffix={stat.suffix} duration={1.8 + index * 0.2} />
              </p>
              <p className="mt-3 text-caption uppercase tracking-wider text-slate-500 max-w-[14rem] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="py-5 flex justify-center">
          <Link
            to="/impact"
            className="group inline-flex items-center gap-2 text-button text-blue-700 hover:text-blue-800"
          >
            See our full impact
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
