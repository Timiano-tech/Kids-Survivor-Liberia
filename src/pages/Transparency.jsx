import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiFileText, FiShield, FiTrendingUp } from 'react-icons/fi';
import HeaderImage from '../assets/Talking to children.jpeg';

const Transparency = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const policies = [
    {
      title: "Child Safeguarding Policy",
      description: "Our comprehensive framework ensuring zero tolerance for child abuse or exploitation across all KSL activities.",
      icon: <FiShield className="w-6 h-6" />
    },
    {
      title: "Anti-Fraud & Corruption",
      description: "Strict financial controls, independent auditing, and whistleblower mechanisms to ensure every dollar reaches its intended target.",
      icon: <FiTrendingUp className="w-6 h-6" />
    },
    {
      title: "Gender Equality & Social Inclusion",
      description: "Guiding principles ensuring equitable access, participation, and benefit for all marginalized groups we serve.",
      icon: <FiCheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header - Premium Redesign */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src={HeaderImage}
            alt="Transparency Background"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">
              Our Commitment
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              Transparency & Accountability
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              We hold ourselves to the highest international standards of governance, financial integrity, and program delivery to ensure maximum impact for the communities we serve.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 relative z-20 -mt-12 lg:-mt-20">

        {/* Core Principles Cards - Premium */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] p-8 lg:p-10 border border-slate-100 transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <FiTrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Financial Integrity</h3>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Maintained through rigorous internal controls, transparent procurement processes, and annual independent external audits available to all partners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] p-8 lg:p-10 border border-slate-100 transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-8 border border-yellow-100 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <FiCheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Ethical Governance</h3>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Oversight provided by an independent Board of Directors ensuring strategic alignment, risk management, and compliance with national and international laws.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] p-8 lg:p-10 border border-slate-100 transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <FiShield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Programmatic Rigor</h3>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Evidence-based monitoring and evaluation systems track every intervention against the YTEI and NADAP frameworks to guarantee measurable outcomes.
            </p>
          </motion.div>
        </div>

        {/* Policies Section - Premium */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Governance Standards</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Core Organizational Policies</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">Kids Survivor Liberia enforces strict adherence to these fundamental frameworks to protect our beneficiaries and uphold trust.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 flex flex-col items-center text-center rounded-3xl p-8 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 hover:border-blue-100 group"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100/50 text-blue-600 flex items-center justify-center mb-6 border border-blue-200/50 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {policy.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-4 tracking-tight">{policy.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium">{policy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reports & Downloads - Premium */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[3rem] p-10 sm:p-16 max-w-5xl mx-auto mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-yellow-300 rounded-full text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm border border-white/10 text-shadow-sm">
                Open Records
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Annual Reports & Financials</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-0 font-light max-w-xl">
                We believe in total transparency with our donors and the communities we serve. Request our latest audited financial statements or annual impact reports below.
              </p>
            </div>
            <div className="md:w-auto relative">
              <a href="mailto:support@ksliberia.org" className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 hover:bg-yellow-300 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap">
                <FiFileText className="mr-3 w-5 h-5" />
                Request Documentation
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Transparency;
