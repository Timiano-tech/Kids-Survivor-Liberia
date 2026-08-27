import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShield, FiCheckCircle, FiHeart, FiPhoneCall, FiArrowRight } from 'react-icons/fi';
import SEO from '../../components/SEO';
import RelatedContent from '../../components/RelatedContent';
import HeaderImage from '../../assets/Students.jpeg';

export default function ChildProtection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Child Protection in Liberia — Safeguarding Vulnerable Youth"
        description="Learn how Kids Survivor Liberia (KSL) advances child protection in Liberia through community networks, emergency intervention, legal advocacy, and safe havens."
        canonical="/programs/child-protection"
        keywords={['child protection in Liberia', 'child welfare Liberia', 'protect Liberian children', 'KSL child protection', 'Liberia NGO child safety']}
      />

      {/* Hero Header - Premium Redesign */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[100px] shadow-xl border-b border-slate-100 mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src={HeaderImage}
            alt="Child Protection Background"
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
              Core Initiative
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              Child Protection in Liberia
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0 mb-8">
              Safeguarding Liberian children from abuse, neglect, exploitation, and illicit drug exposure through grassroots community protection networks and legal advocacy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/donate"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Support Child Protection <FiArrowRight />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Report a Concern
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
              Addressing Child Protection Challenges Across Liberia
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              In post-conflict Liberia, thousands of children face heightened vulnerabilities including physical abuse, child labor, sexual exploitation, and early exposure to substance abuse. Economic hardship and limited social safety nets often force children into informal labor or onto the streets. <strong>Kids Survivor Liberia (KSL)</strong> leads targeted <em>child protection initiatives in Liberia</em> aimed at creating safe, supportive environments where every child can grow free from harm.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Our holistic approach combines emergency protection services, legal advocacy, psychosocial counseling, and community training. By partnering with local chiefs, school principals, health workers, and county officials across all 15 counties, KSL establishes sustainable protection mechanisms at the community level.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-t pt-8 border-slate-100">
              Key Pillars of KSL Child Protection Programs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-amber-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Community Protection Committees</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Establishing grassroots child protection committees in rural and urban communities to monitor child welfare, identify at-risk youth, and coordinate swift interventions.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-amber-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Substance Abuse Prevention</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Conducting active anti-drug awareness campaigns in schools and youth hubs across Montserrado, Grand Bassa, Nimba, and surrounding counties to shield children from illegal substances.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-amber-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Safe Havens & Shelter Support</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Providing temporary safe space referrals, emergency food assistance, and medical support for child victims of domestic abuse and displacement.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <FiCheckCircle className="text-amber-600 w-6 h-6 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">Legal Rights & Policy Advocacy</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Advocating for the strict enforcement of the Liberian Children’s Law, ensuring perpetrator accountability and child justice reform.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 border-t pt-8 border-slate-100">
              Our Impact in Liberian Communities
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Through direct outreach, KSL has helped protect over 5,000 children across Liberia, re-enrolling dropouts in primary education, providing psychosocial counseling to traumatized youth, and hosting community forums on child welfare rights. Learn more about our county-level work on our <Link to="/counties" className="text-blue-600 hover:underline font-semibold">Liberia Counties Impact Page</Link>.
            </p>

            {/* CTA Box */}
            <div className="mt-10 bg-blue-950 text-white rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Join Us in Protecting Liberia's Children</h3>
                <p className="text-slate-300 text-sm">
                  Your monthly donation or volunteer partnership empowers KSL to respond to child safety emergencies immediately.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  to="/donate"
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
                >
                  Donate Now
                </Link>
                <Link
                  to="/volunteer"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                >
                  Become a Volunteer
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Internal Linking Block */}
      <RelatedContent currentId="child-protection" />
    </div>
  );
}
