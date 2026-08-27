import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield, FiHeart, FiBookOpen, FiAward } from 'react-icons/fi';

const DEFAULT_ITEMS = [
  {
    id: 'child-protection',
    title: 'Child Protection in Liberia',
    description: 'Safeguarding children from abuse, neglect, and exploitation through community networks.',
    path: '/programs/child-protection',
    category: 'Program Pillar',
    icon: FiShield,
    badgeBg: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'vulnerable-children',
    title: 'Vulnerable Children Support',
    description: 'Providing emergency care, orphan support, and family reunification across communities.',
    path: '/programs/vulnerable-children',
    category: 'Care Initiative',
    icon: FiHeart,
    badgeBg: 'bg-rose-100 text-rose-800'
  },
  {
    id: 'youth-development',
    title: 'Youth Development & Skills',
    description: 'Vocational training, computer literacy, and leadership mentorship for Liberian youth.',
    path: '/programs/youth-development',
    category: 'Youth Pillar',
    icon: FiBookOpen,
    badgeBg: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'childrens-rights',
    title: 'Children’s Rights Advocacy',
    description: 'Championing legal rights, education access, and policy reforms for children.',
    path: '/programs/childrens-rights',
    category: 'Advocacy',
    icon: FiAward,
    badgeBg: 'bg-emerald-100 text-emerald-800'
  }
];

export default function RelatedContent({ currentId, title = "Explore Related Programs & Impact", items = DEFAULT_ITEMS }) {
  const filteredItems = items.filter(item => item.id !== currentId).slice(0, 3);

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {title}
            </h2>
            <p className="text-slate-600 mt-1 text-sm sm:text-base">
              Discover how Kids Survivor Liberia works across communities to protect and empower youth.
            </p>
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group shrink-0"
          >
            View All Programs
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const Icon = item.icon || FiShield;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.badgeBg || 'bg-slate-100 text-slate-700'}`}>
                      {item.category}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                    <Link to={item.path}>{item.title}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider group"
                >
                  Learn More
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
