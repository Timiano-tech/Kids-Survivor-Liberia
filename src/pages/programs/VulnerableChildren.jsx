import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiCheckCircle, FiHome, FiSmile, FiArrowRight } from 'react-icons/fi';
import SEO from '../../components/SEO';
import RelatedContent from '../../components/RelatedContent';
import HeaderImage from '../../assets/ChildrenImpact.jpg';

export default function VulnerableChildren() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Vulnerable Children in Liberia — Care & Rehabilitation"
        description="Discover how Kids Survivor Liberia (KSL) supports vulnerable children in Liberia with shelter, education, nutrition, and family reunification."
        canonical="/programs/vulnerable-children"
        keywords={['vulnerable children in Liberia', 'orphan care Liberia', 'street children Liberia', 'KSL child support', 'Liberia youth welfare']}
      />

      {/* Hero Header - Premium Redesign */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[100px] shadow-xl border-b border-slate-100 mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src={HeaderImage}
            alt="Vulnerable Children Background"
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
              Priority Care
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              Vulnerable Children in Liberia
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0 mb-8">
              Restoring dignity, health, and hope for orphaned, displaced, and marginalized children living in high-risk Liberian communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/donate"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Sponsor a Child <FiArrowRight />
              </Link>
              <Link
                to="/impact"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View Impact Stories
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
              Understanding the Needs of Vulnerable Children in Liberia
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Across Liberia, thousands of children live under severe conditions of vulnerability caused by extreme poverty, parental loss, family breakup, and lack of basic services. Many <em>vulnerable children in Liberia</em> lack access to consistent daily meals, healthcare, clean water, and formal schooling. Without intervention, these young people face an elevated risk of homelessness, substance dependency, and early labor exploitation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              At <strong>Kids Survivor Liberia (KSL)</strong>, we believe every child deserves safety, nurture, and the opportunity to fulfill their potential. Our comprehensive vulnerable children programs deliver essential emergency aid, long term rehabilitation, and educational support tailored to Liberia's socio-economic landscape.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-t pt-8 border-slate-100">
              Core Interventions for Vulnerable Children
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiHome className="text-rose-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Shelter & Family Reunification</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Working with social workers to trace families, facilitate safe reunification, and support foster families with care packages and income assistance.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiSmile className="text-rose-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Emergency Nutrition & Healthcare</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Distributing nutritional meals, hygiene kits, and medical care to underprivileged children in high-density informal settlements and rural villages.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-rose-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Educational Scholarships & Sponsorship</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Covering tuition, uniforms, textbooks, and school supplies so vulnerable children can re-enter primary and secondary schools.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-rose-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Trauma-Informed Psychosocial Care</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Offering specialized counseling and trauma therapy to help children process loss, build self-worth, and integrate into supportive peer groups.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-t pt-8 border-slate-100">
              Community Outreach & County Programs
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              KSL operates directly within marginalized communities across 7 key Liberian counties and is actively expanding nationwide. Read about our county-level partnerships on our <Link to="/counties" className="text-blue-600 hover:underline font-semibold">Counties Overview Page</Link> or discover how you can get involved on our <Link to="/volunteer" className="text-blue-600 hover:underline font-semibold">Volunteer Page</Link>.
            </p>

            {/* CTA Box */}
            <div className="mt-10 bg-rose-950 text-white rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Change a Vulnerable Child's Story Today</h3>
                <p className="text-slate-300 text-sm">
                  Your gift provides school fees, hot meals, and safe shelter for a vulnerable child in Liberia.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  to="/donate"
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
                >
                  Donate to Care
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Internal Linking Block */}
      <RelatedContent currentId="vulnerable-children" />
    </div>
  );
}
