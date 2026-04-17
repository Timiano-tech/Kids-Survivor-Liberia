import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiHeart, FiTarget, FiUsers, FiAward, FiMessageSquare, FiGlobe } from 'react-icons/fi';
import TeamImg from '../assets/Team.jpeg';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

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
        {/* Main Header Section - Premium Redesign */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[100px] shadow-xl">
          <div className="absolute inset-0 z-0">
            <img
              src={TeamImg}
              alt="KSL Background"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Join Our Team</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                Volunteer With KSL
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                Join us in transforming lives and building a drug-free, empowered Liberia through strategic volunteerism aligned with national initiatives.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            {/* Split Section: Strategic Mandate & Vision - Premium */}
            <div className="grid md:grid-cols-2 gap-10 mb-24">
              {/* Strategic Mandate */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-10 lg:p-12 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <FiShield className="w-32 h-32 text-blue-600" />
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4 flex items-center">
                    <span className="w-8 h-px bg-blue-600 mr-3"></span>
                    Our Mandate
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight relative z-10">
                    Strategic Focus
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed relative z-10 flex-grow">
                    Kids Survivor Liberia (KSL) exists to address intersecting challenges of drug abuse,
                    poverty, gender vulnerability, youth marginalization, and age-related neglect through
                    integrated prevention, protection, rehabilitation, and empowerment strategies rooted
                    in community partnership and national policy alignment.
                  </p>
                </div>
              </motion.section>

              {/* Vision */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-10 lg:p-12 border border-blue-500 shadow-[0_8px_30px_rgb(37,99,235,0.2)] h-full flex flex-col relative overflow-hidden group hover:shadow-[0_20px_40px_rgb(37,99,235,0.3)] transition-shadow duration-500">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <FiGlobe className="w-32 h-32 text-white" />
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase text-blue-200 mb-4 flex items-center">
                    <span className="w-8 h-px bg-blue-200 mr-3"></span>
                    Our Vision
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight relative z-10">
                    A Resilient Liberia
                  </h2>
                  <p className="text-blue-50 text-lg leading-relaxed relative z-10 flex-grow">
                    We envision a Liberia where children, adolescent girls, youth, widows, and elderly men
                    live in dignity, have equitable access to education and economic opportunities, are
                    protected from drugs, violence, and exploitation, and actively contribute to sustainable
                    development and social cohesion.
                  </p>
                </div>
              </motion.section>
            </div>

            {/* Programmatic Pillars - Premium */}
            <section className="mb-24">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">What We Focus On</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Core Programmatic Pillars
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  Our strategic areas of intervention where volunteers can make the most significant impact on communities.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {volunteerPillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group bg-white rounded-lg border border-slate-100 p-8 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-2xl -z-10 group-hover:bg-blue-100/50 transition-colors duration-500"></div>
                    <div className="flex flex-col mb-6">
                      <div className="w-14 h-14 rounded-lg bg-slate-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm mb-4">
                        {pillar.icon}
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-blue-600 max-w-fit">
                        {pillar.pillar}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Volunteer Opportunities - Premium */}
            <section className="mb-24">
              <div className="bg-slate-900 rounded-lg p-10 lg:p-16 relative overflow-hidden">
                {/* Decorative background elements */}

                <div className="relative z-10">
                  <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-white/10 text-blue-300 rounded-lg text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-white/10">
                      Get Involved
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                      Volunteer Opportunities
                    </h2>
                    <p className="text-slate-300 mt-3 max-w-2xl mx-auto text-lg leading-relaxed">
                      Discover roles aligned with the Youth Transformation & Empowerment Initiative (YTEI) and NADAP 2025–2030.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {volunteerRoles.map((role, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <span className="text-xs font-bold tracking-widest uppercase text-blue-300 bg-blue-900/50 px-4 py-2 rounded-lg border border-blue-500/30">
                            {role.category}
                          </span>
                          <div className="p-3 bg-white/10 text-blue-300 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            {role.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                          {role.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-8">
                          {role.description}
                        </p>
                        <div className="bg-black/20 rounded-lg p-6 border border-white/5">
                          <ul className="text-sm font-medium text-slate-300 space-y-3">
                            <li className="flex items-center gap-3">
                              <FiTarget className="text-blue-400 w-5 h-5 shrink-0" />
                              Minimum commitment: 3 months
                            </li>
                            <li className="flex items-center gap-3">
                              <FiShield className="text-emerald-400 w-5 h-5 shrink-0" />
                              Comprehensive training provided
                            </li>
                            <li className="flex items-center gap-3">
                              <FiUsers className="text-purple-400 w-5 h-5 shrink-0" />
                              Community-based approach
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Guiding Values - Premium */}
            <section className="mb-24">
              <div className="text-center mb-10">
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Principles</span>
                <h2 className="text-3xl font-bold text-slate-900">
                  Guiding Values
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {values.map((value, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium shadow-sm hover:shadow-md hover:border-blue-300 hover:text-blue-600 transition-all cursor-default"
                  >
                    <div className="w-2 h-2 rounded-lg bg-blue-500 mr-3"></div>
                    {value}
                  </motion.span>
                ))}
              </div>
            </section>

            {/* FAQ - Premium */}
            <section className="mb-24">
              <div className="text-center mb-12">
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Support</span>
                <h2 className="text-3xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  { q: "How does KSL align with national initiatives?", a: "All volunteer work supports Youth Transformation & Empowerment Initiative (YTEI) and National Anti-Drugs Action Plan (NADAP) 2025-2030 priorities through community-driven interventions." },
                  { q: "What training is provided to volunteers?", a: "We provide comprehensive training in drug prevention, psychosocial support, child protection, and community engagement methodologies aligned with our strategic pillars." },
                  { q: "Can I volunteer remotely?", a: "Most roles require community presence, but some advocacy and awareness campaign support can be done remotely. Contact us to discuss options." },
                  { q: "What's the impact measurement process?", a: "We use participatory monitoring systems tracking outcomes aligned with YTEI and NADAP indicators, with regular feedback from community stakeholders." }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-slate-100 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors flex items-start gap-3">
                        <span className="text-blue-400 mt-1 flex-shrink-0">Q.</span>
                        {faq.q}
                      </h3>
                      <span className="text-blue-600 font-bold ml-4">{openFaq === index ? '−' : '+'}</span>
                    </div>
                    
                    <motion.div 
                      initial={false}
                      animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 leading-relaxed pl-7 mt-3">
                        <span className="text-slate-400 font-bold mr-2 hidden sm:inline">A.</span>
                        {faq.a}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA - Premium */}
            <section className="pb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-lg p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
                    <FiMessageSquare className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    Join Our Strategic Mission
                  </h2>
                  <p className="text-blue-100 text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    Become part of a movement creating lasting change. Your contribution supports
                    national priorities for youth development, drug demand reduction, gender equality,
                    and social protection in Liberia.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold py-4 px-10 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Contact Volunteer Coordinator
                    </Link>
                    <a
                      href="mailto:support@ksliberia.org"
                      className="inline-flex items-center justify-center bg-white/10 border border-white/30 text-white hover:bg-white/20 font-semibold py-4 px-10 rounded-lg transition-all backdrop-blur-sm hover:-translate-y-1"
                    >
                      support@ksliberia.org
                    </a>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Volunteer;