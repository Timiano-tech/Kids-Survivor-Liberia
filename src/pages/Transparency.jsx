import { useEffect } from 'react';
import { FiCheckCircle, FiFileText, FiShield, FiTrendingUp } from 'react-icons/fi';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import HeaderImage from '../assets/KSL_Team.jpeg';

const Transparency = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      title: 'Financial Integrity',
      description:
        'Maintained through rigorous internal controls, transparent procurement processes, and annual independent external audits available to all partners.',
      icon: <FiTrendingUp className="w-6 h-6" />,
      chip: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      title: 'Ethical Governance',
      description:
        'Oversight provided by an independent Board of Directors ensuring strategic alignment, risk management, and compliance with national and international laws.',
      icon: <FiCheckCircle className="w-6 h-6" />,
      chip: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    },
    {
      title: 'Programmatic Rigor',
      description:
        'Evidence-based monitoring and evaluation systems track every intervention against the YTEI and NADAP frameworks to guarantee measurable outcomes.',
      icon: <FiShield className="w-6 h-6" />,
      chip: 'bg-slate-100 text-slate-700 border-slate-200',
    },
  ];

  const policies = [
    {
      title: 'Child Safeguarding Policy',
      description:
        'Our comprehensive framework ensuring zero tolerance for child abuse or exploitation across all KSL activities.',
      icon: <FiShield className="w-6 h-6" />,
    },
    {
      title: 'Anti-Fraud & Corruption',
      description:
        'Strict financial controls, independent auditing, and whistleblower mechanisms to ensure every dollar reaches its intended target.',
      icon: <FiTrendingUp className="w-6 h-6" />,
    },
    {
      title: 'Gender Equality & Social Inclusion',
      description:
        'Guiding principles ensuring equitable access, participation, and benefit for all marginalized groups we serve.',
      icon: <FiCheckCircle className="w-6 h-6" />,
    },
  ];

  return (
    <>
      <SEO
        title="Transparency & Accountability — Kids Survivor Liberia"
        description="Kids Survivor Liberia is committed to transparency, accountability, and good governance. View our financial reports, safeguarding policies, and governance standards."
        canonical="/transparency"
        keywords={[
          'KSL transparency',
          'Liberia NGO accountability',
          'child safeguarding policy',
          'financial integrity KSL',
          'good governance Liberia',
          'NGO annual report Liberia',
          'anti-corruption Liberia',
          'donor accountability Liberia',
        ]}
        breadcrumbs={[{ name: 'Transparency & Accountability', url: '/transparency' }]}
      />
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="Our Commitment"
          title="Transparency & Accountability"
          description="We hold ourselves to the highest international standards of governance, financial integrity, and program delivery to ensure maximum impact for the communities we serve."
          image={HeaderImage}
          alt="Transparency Background"
        />

        {/* Core Principles */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Core Principles"
              title="How We Remain Accountable"
              description="Three commitments shape every decision KSL makes with donor resources and community trust."
              className="mb-12"
            />
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="bg-white border border-slate-200 p-8 hover:border-blue-300 transition-colors shadow-sm"
                >
                  <div className={`w-14 h-14 border rounded-sm flex items-center justify-center mb-6 ${principle.chip}`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{principle.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policies & Documents */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Governance Standards"
              title="Core Organizational Policies"
              description="Kids Survivor Liberia enforces strict adherence to these fundamental frameworks to protect our beneficiaries and uphold trust."
              className="mb-12"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {policies.map((policy) => (
                <div
                  key={policy.title}
                  className="bg-white border border-slate-200 p-8 hover:border-blue-300 transition-colors shadow-sm flex flex-col"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-700 border border-blue-200 rounded-sm flex items-center justify-center mb-6">
                    {policy.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-3">{policy.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{policy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reports & Downloads */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-950 px-6 py-12 sm:px-12 lg:px-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="md:w-2/3 text-center md:text-left">
                  <span className="inline-block px-3 py-1 bg-white/10 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4">
                    Open Records
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Annual Reports & Financials</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We believe in total transparency with our donors and the communities we serve. Request our latest audited financial statements or annual impact reports below.
                  </p>
                </div>
                <div className="md:w-auto shrink-0">
                  <a
                    href="mailto:support@ksliberia.org"
                    className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-6 py-3 transition-colors whitespace-nowrap"
                  >
                    <FiFileText className="mr-3 w-5 h-5" />
                    Request Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Transparency;