import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiHeart, FiBookOpen, FiAward } from 'react-icons/fi';

const DEFAULT_ITEMS = [
  {
    id: 'child-protection',
    title: 'Child protection in Liberia',
    description: 'Safeguarding children from abuse, neglect, and exploitation through community networks.',
    path: '/programs/child-protection',
    category: 'Program Pillar',
    icon: FiShield,
  },
  {
    id: 'vulnerable-children',
    title: 'Vulnerable children support',
    description: 'Emergency care, orphan support, and family reunification across communities.',
    path: '/programs/vulnerable-children',
    category: 'Care Initiative',
    icon: FiHeart,
  },
  {
    id: 'youth-development',
    title: 'Youth development & skills',
    description: 'Vocational training, computer literacy, and leadership mentorship for Liberian youth.',
    path: '/programs/youth-development',
    category: 'Youth Pillar',
    icon: FiBookOpen,
  },
  {
    id: 'childrens-rights',
    title: 'Children’s rights advocacy',
    description: 'Championing legal rights, education access, and policy reform for children.',
    path: '/programs/childrens-rights',
    category: 'Advocacy',
    icon: FiAward,
  },
];

export default function RelatedContent({ currentId, title = 'Explore related programs', items = DEFAULT_ITEMS }) {
  const filteredItems = items.filter((item) => item.id !== currentId).slice(0, 3);

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-caption uppercase tracking-[0.18em] text-blue-700">Keep exploring</p>
            <h2 className="mt-3 text-heading-lg text-slate-900">{title}</h2>
            <p className="mt-3 max-w-md text-body-sm text-slate-600">
              How Kids Survivor Liberia works across communities to protect and empower youth.
            </p>
          </div>
          <Link
            to="/programs"
            className="group inline-flex shrink-0 items-center gap-2 text-caption font-semibold uppercase tracking-[0.14em] text-blue-700 transition-colors hover:text-blue-900"
          >
            All programs
            <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {filteredItems.map((item) => {
            const Icon = item.icon || FiShield;
            return (
              <article key={item.id} className="group flex flex-col border-t border-slate-200 pt-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-caption uppercase tracking-[0.18em] text-blue-700">{item.category}</span>
                  <Icon className="h-4 w-4 text-slate-300 transition-colors group-hover:text-yellow-500" />
                </div>
                <h3 className="text-heading-md text-slate-900">
                  <Link to={item.path} className="transition-colors hover:text-blue-700">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 text-body-sm leading-relaxed text-slate-600">{item.description}</p>
                <Link
                  to={item.path}
                  className="mt-5 inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-[0.14em] text-blue-700 transition-colors hover:text-blue-900"
                >
                  Learn more
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
