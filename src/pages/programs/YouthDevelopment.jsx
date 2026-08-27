import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCheckCircle, FiCpu, FiAward, FiArrowRight } from 'react-icons/fi';
import SEO from '../../components/SEO';
import RelatedContent from '../../components/RelatedContent';
import HeaderImage from '../../assets/Youth2.jpeg';

export default function YouthDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Youth Development in Liberia — Vocational & Leadership Training"
        description="Explore Kids Survivor Liberia (KSL) programs in youth development in Liberia, offering computer literacy, vocational training, and leadership mentorship."
        canonical="/programs/youth-development"
        keywords={['youth development in Liberia', 'vocational training Liberia', 'youth empowerment Liberia', 'KSL youth development', 'Liberia skill training']}
      />

      {/* Hero Header - Premium Redesign */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[100px] shadow-xl border-b border-slate-100 mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src={HeaderImage}
            alt="Youth Development Background"
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
              Empowerment Initiative
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              Youth Development in Liberia
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0 mb-8">
              Equipping Liberian youth with marketable digital skills, vocational trades, leadership training, and livelihood pathways.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/donate"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Sponsor Youth Training <FiArrowRight />
              </Link>
              <Link
                to="/projects"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Active Projects
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
              Empowering the Next Generation of Liberian Leaders
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Youth constitute over 60% of Liberia’s population, representing the nation's greatest resource and hope for future economic growth. However, high youth unemployment, limited access to higher education, and lack of practical skill development hinder many young people from achieving financial independence. <em>Youth development in Liberia</em> requires structured, hands-on programs that align with modern workforce demands.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              <strong>Kids Survivor Liberia (KSL)</strong> addresses these challenges through comprehensive youth transformation initiatives. We provide computer literacy training, vocational skill workshops, entrepreneurship support, and civic leadership mentorship designed to convert youth energy into productive community development.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-t pt-8 border-slate-100">
              Core Pillars of KSL Youth Programs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCpu className="text-blue-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Digital Literacy & Computer Training</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Teaching foundational computer usage, word processing, internet navigation, and introductory software skills to bridge the digital divide for Liberian youth.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiAward className="text-blue-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Vocational & Artisanal Trades</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Offering practical training in tailoring, soap making, agriculture, catering, and carpentry to enable young men and women to establish micro-enterprises.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-blue-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Youth Leadership & Civics</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Mentoring young people in public speaking, conflict resolution, project management, and peacebuilding so they become proactive change-makers.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-blue-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Peer Anti-Drug & Health Advocacy</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Training youth ambassadors to educate their peers on drug prevention, reproductive health, and emotional resilience in urban and rural hubs.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-t pt-8 border-slate-100">
              Sustainable Community Impact
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our youth development programs have empowered over 1,200 young adults across Liberia, helping them gain employment or launch small community businesses. Explore our recent initiatives on the <Link to="/projects" className="text-blue-600 hover:underline font-semibold">Projects Page</Link> or meet our dedicated program facilitators on our <Link to="/team" className="text-blue-600 hover:underline font-semibold">Our Team Page</Link>.
            </p>

            {/* CTA Box */}
            <div className="mt-10 bg-slate-900 text-white rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Invest in Liberia's Youth Future</h3>
                <p className="text-slate-300 text-sm">
                  Your financial sponsorship provides laptop computers, vocational kits, and training materials for Liberian youth.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  to="/donate"
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
                >
                  Sponsor Youth
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Internal Linking Block */}
      <RelatedContent currentId="youth-development" />
    </div>
  );
}
