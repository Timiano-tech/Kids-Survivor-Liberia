import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiFileText, FiUsers, FiArrowRight } from 'react-icons/fi';
import SEO from '../../components/SEO';
import RelatedContent from '../../components/RelatedContent';
import HeaderImage from '../../assets/Campaign.jpeg';

export default function ChildrensRights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Children's Rights Advocacy in Liberia — Policy & Education"
        description="Learn how Kids Survivor Liberia (KSL) champions children's rights in Liberia through legal policy advocacy, rights education, and community awareness."
        canonical="/programs/childrens-rights"
        keywords={["children's rights in Liberia", "child rights advocacy Liberia", "Liberian Children's Law", "KSL rights advocacy", "Liberia youth rights"]}
      />

      {/* Hero Header - Premium Redesign */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[100px] shadow-xl border-b border-slate-100 mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src={HeaderImage}
            alt="Children's Rights Background"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-slate-950/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">
              Legal & Human Rights
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              Children's Rights Advocacy in Liberia
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0 mb-8">
              Promoting the fundamental rights of every Liberian child to education, protection, healthcare, identity, and active participation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/donate"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Support Rights Advocacy <FiArrowRight />
              </Link>
              <Link
                to="/partnership"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content Article */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Advocating for Children's Rights Across Liberia
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The United Nations Convention on the Rights of the Child (UNCRC) and the 2011 Liberian Children’s Law establish unambiguous rights for all children. Yet in practice, systemic barriers—such as birth registration gaps, lack of free primary schooling, gender discrimination, and harmful traditional practices—continue to violate the rights of <em>children in Liberia</em>.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              <strong>Kids Survivor Liberia (KSL)</strong> serves as a robust grassroots voice for child rights. We work alongside government ministries, traditional leaders, civil society organizations, and international partners to ensure laws protecting children are fully enforced and integrated into local community life.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-t pt-8 border-slate-100">
              Key Areas of Rights Advocacy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiFileText className="text-emerald-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Right to Free & Quality Education</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Campaigning against illegal school fees, promoting girl-child enrollment, and partnering with schools to ensure safe, violence-free learning environments.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiUsers className="text-emerald-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Right to Identity & Birth Registration</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Assisting rural families with birth certificate registration so children can access formal healthcare, education, and legal protection.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-emerald-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Protection Against Gender-Based Violence</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Educating communities on child sexual exploitation, early marriage prevention, and gender equity through radio programs and town hall meetings.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-emerald-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Youth Voice & Child Rights Clubs</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Establishing student-led Child Rights Clubs in schools to teach youth how to advocate for their rights, speak out against bullying, and report violations safely.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-t pt-8 border-slate-100">
              National Policy Alignment & Transparency
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              KSL aligns its child rights programs with Liberia's Pro-Poor Agenda for Prosperity and Development (PAPD) and international human rights frameworks. Review our financial stewardship on our <Link to="/transparency" className="text-blue-600 hover:underline font-semibold">Transparency Page</Link> or collaborate on legal advocacy via our <Link to="/partnership" className="text-blue-600 hover:underline font-semibold">Partnership Page</Link>.
            </p>

            {/* CTA Box */}
            <div className="mt-10 bg-emerald-950 text-white rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Stand Up for Children's Rights</h3>
                <p className="text-slate-300 text-sm">
                  Partner with KSL to fund rights training, policy advocacy, and community outreach across Liberia.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  to="/partnership"
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
                >
                  Partner With KSL
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Internal Linking Block */}
      <RelatedContent currentId="childrens-rights" />
    </div>
  );
}
