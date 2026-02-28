import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiHeart, FiTarget, FiUsers, FiAward, FiCalendar, FiMail, FiMessageSquare, FiGlobe, FiHome } from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import KSLCompany from '../assets/KSL Company.jpeg';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const volunteerPillars = [
    {
      pillar: "Pillar 1",
      title: "Drug Abuse Prevention & Public Awareness",
      description: "Lead community and school-based prevention campaigns, youth advocacy, and 'Say No to Drugs' initiatives aligned with NADAP 2025-2030",
      icon: <FiShield className="w-6 h-6" />
    },
    {
      pillar: "Pillar 2",
      title: "Rehabilitation & Social Reintegration",
      description: "Provide psychosocial support, assist with skills development, and support reintegration pathways for drug-affected individuals",
      icon: <FiHeart className="w-6 h-6" />
    },
    {
      pillar: "Pillar 3",
      title: "Education & Skills Development",
      description: "Support education programs, vocational training, and life-skills development for youth, adolescent girls, and vulnerable populations",
      icon: <FiAward className="w-6 h-6" />
    },
    {
      pillar: "Pillar 4",
      title: "Gender & Social Inclusion",
      description: "Empower adolescent girls at risk, support widows' economic inclusion, and assist vulnerable elderly men",
      icon: <FiUsers className="w-6 h-6" />
    },
    {
      pillar: "Pillar 5",
      title: "Community Engagement & Peacebuilding",
      description: "Facilitate community partnerships, crime prevention initiatives, and social cohesion activities",
      icon: <FiGlobe className="w-6 h-6" />
    }
  ];

  const volunteerRoles = [
    {
      category: "YTEI Alignment",
      title: "Youth Leadership Facilitator",
      description: "Strengthen youth leadership, civic engagement, and positive youth development in alignment with YTEI priorities",
      icon: <FiTarget className="w-5 h-5" />
    },
    {
      category: "NADAP Support",
      title: "Drug Prevention Educator",
      description: "Conduct early intervention, awareness campaigns, and peer education supporting NADAP 2025-2030 implementation",
      icon: <FiShield className="w-5 h-5" />
    },
    {
      category: "Skills Development",
      title: "Vocational Training Assistant",
      description: "Teach digital, entrepreneurial, and livelihood skills to youth, widows, and vulnerable populations",
      icon: <FiAward className="w-5 h-5" />
    },
    {
      category: "Psychosocial Support",
      title: "Community Counselor",
      description: "Provide emotional support, stigma reduction assistance, and psychosocial recovery guidance",
      icon: <FiHeart className="w-5 h-5" />
    }
  ];

  const values = [
    "Inclusion & Equity",
    "Dignity & Protection", 
    "Prevention & Empowerment",
    "Partnership & Participation",
    "Integrity & Accountability"
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Main Header Section */}
                <header className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-blue-900/70 z-10">
                    <img 
                      src={KSLCompany} 
                      alt="KSL_Background" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
        
                  <div className="relative z-10 py-30 text-center">
                    <div className="container mx-auto px-4">
                      <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white"
                      >
                        Volunteer With KSL
                      </motion.h1>
                      <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
                        Join us in transforming lives and building a drug-free, empowered Liberia through strategic volunteerism aligned with national initiatives.
                      </p>
                    </div>
                  </div>
                </header>

        {/* Main Content */}
        <main className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            {/* Strategic Mandate */}
            <section className="mb-20">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 sm:p-10 border border-blue-100/80 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">Our Mandate</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                  Strategic Mandate
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
                  Kids Survivor Liberia (KSL) exists to address intersecting challenges of drug abuse,
                  poverty, gender vulnerability, youth marginalization, and age-related neglect through
                  integrated prevention, protection, rehabilitation, and empowerment strategies rooted
                  in community partnership and national policy alignment.
                </p>
              </div>
            </section>

            {/* Vision */}
            <section className="mb-20">
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">Our Vision</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                  A Drug-Free, Resilient Liberia
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We envision a Liberia where children, adolescent girls, youth, widows, and elderly men
                  live in dignity, have equitable access to education and economic opportunities, are
                  protected from drugs, violence, and exploitation, and actively contribute to sustainable
                  development and social cohesion.
                </p>
              </div>
            </section>

            {/* Programmatic Pillars */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">What We Focus On</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Core Programmatic Pillars
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteerPillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="group bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                        {pillar.icon}
                      </div>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full shrink-0">
                        {pillar.pillar}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Volunteer Opportunities */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Get Involved</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Volunteer Opportunities
                </h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                  Roles aligned with Youth Transformation & Empowerment Initiative (YTEI) and NADAP 2025–2030.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {volunteerRoles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                        {role.category}
                      </span>
                      <span className="text-blue-500 shrink-0">{role.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {role.description}
                    </p>
                    <ul className="text-xs text-gray-500 space-y-2 border-t border-gray-100 pt-4">
                      <li className="flex items-center gap-2">• Minimum commitment: 3 months</li>
                      <li className="flex items-center gap-2">• Training provided</li>
                      <li className="flex items-center gap-2">• Community-based approach</li>
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Guiding Values */}
            <section className="mb-20">
              <div className="text-center mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Our Principles</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  Guiding Values
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {values.map((value, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-50/80 border border-blue-100 text-gray-700 text-sm font-medium hover:bg-blue-100/80 hover:border-blue-200 transition-colors"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-20">
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Support</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  { q: "How does KSL align with national initiatives?", a: "All volunteer work supports Youth Transformation & Empowerment Initiative (YTEI) and National Anti-Drugs Action Plan (NADAP) 2025-2030 priorities through community-driven interventions." },
                  { q: "What training is provided to volunteers?", a: "We provide comprehensive training in drug prevention, psychosocial support, child protection, and community engagement methodologies aligned with our strategic pillars." },
                  { q: "Can I volunteer remotely?", a: "Most roles require community presence, but some advocacy and awareness campaign support can be done remotely. Contact us to discuss options." },
                  { q: "What's the impact measurement process?", a: "We use participatory monitoring systems tracking outcomes aligned with YTEI and NADAP indicators, with regular feedback from community stakeholders." }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-sm hover:border-blue-100 transition-colors">
                    <h3 className="font-bold text-gray-800 mb-2 text-base">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl border border-blue-500/20">
                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-6">
                  <FiMessageSquare className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Join Our Strategic Mission
                </h2>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Become part of a movement creating lasting change. Your contribution supports
                  national priorities for youth development, drug demand reduction, gender equality,
                  and social protection in Liberia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3.5 px-8 rounded-xl transition-colors shadow-lg"
                  >
                    Contact Volunteer Coordinator
                  </Link>
                  <a
                    href="mailto:support@ksliberia.org"
                    className="inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white/10 font-semibold py-3.5 px-8 rounded-xl transition-colors"
                  >
                    support@ksliberia.org
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>

        <CallToAction />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Volunteer;