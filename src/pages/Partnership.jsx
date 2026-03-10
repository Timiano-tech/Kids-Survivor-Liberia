import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiUsers,
  FiMail,
  FiHeart,
  FiBook,
  FiActivity,
  FiShield,
  FiTarget,
  FiUserCheck
} from 'react-icons/fi';
import HeaderImage from '../assets/Partner_Header.jpeg';
import { Link } from 'react-router-dom';

const Partnership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipTypes = [
    {
      title: "Drug Abuse Prevention",
      description: "Support community and school-based prevention campaigns and youth-led advocacy initiatives",
      icon: <FiTarget />
    },
    {
      title: "Rehabilitation & Recovery",
      description: "Fund psychosocial support and reintegration pathways for drug-affected individuals",
      icon: <FiHeart />
    },
    {
      title: "Youth Empowerment",
      description: "Sponsor vocational training, life skills, and entrepreneurship programs for vulnerable youth",
      icon: <FiUsers />
    },
    {
      title: "Gender & Protection",
      description: "Support targeted empowerment of adolescent girls, widows, and vulnerable elderly men",
      icon: <FiShield />
    },
    {
      title: "Education Access",
      description: "Provide scholarships and non-formal learning opportunities for marginalized populations",
      icon: <FiBook />
    },
    {
      title: "Community Resilience",
      description: "Partner in peacebuilding, crime prevention, and social cohesion initiatives",
      icon: <FiActivity />
    }
  ];

  const benefits = [
    "Contribute to national priorities (YTEI & NADAP 2025–2030)",
    "Support drug abuse prevention and rehabilitation",
    "Empower vulnerable children, youth, and women",
    "Promote social inclusion and community resilience",
    "Receive detailed impact measurement reports",
    "Enhance corporate social responsibility alignment",
    "Join community-driven sustainable development",
    "Receive official partnership recognition and certificates"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header Section - Premium Redesign */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src={HeaderImage}
            alt="Strategic Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Collaborate With Us</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              Strategic Partnership
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              Join Kids Survivor Liberia in implementing integrated prevention, protection, rehabilitation,
              and empowerment strategies for children, adolescents, youth, widows, and vulnerable populations.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="py-20 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          {/* Introduction - Premium */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Why Partner With Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Partner in Our Mission to Prevent Drug Abuse and Protect Vulnerable Populations
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Join Kids Survivor Liberia in implementing integrated prevention, protection, rehabilitation,
                and empowerment strategies for children, adolescents, youth, adolescent girls, widows, and
                vulnerable elderly men. Together, we contribute to national priorities under the Youth
                Transformation & Empowerment Initiative (YTEI) and National Anti-Drugs Action Plan (NADAP) 2025–2030.
              </p>
            </motion.div>
          </section>

          {/* Partnership Types - Premium */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Opportunities</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Strategic Partnership Areas
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-white rounded-[2rem] border border-slate-100 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 text-blue-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm text-2xl">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700">
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits - Premium */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">What You Gain</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Partnership Benefits
              </h2>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30 shadow-inner">
                      <FiUserCheck className="w-5 h-5" />
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed mt-1 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* National Alignment - Premium */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Policy Alignment</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Aligned with National Priorities
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-blue-50/50 rounded-[2.5rem] border border-blue-100 p-10 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100/50 text-blue-600 flex items-center justify-center mb-6">
                  <FiUsers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  Youth Transformation & Empowerment Initiative (YTEI)
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Strengthening youth leadership, expanding education access, supporting psychosocial well-being,
                  and positioning young people as agents of change in their communities.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-blue-50/50 rounded-[2.5rem] border border-blue-100 p-10 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100/50 text-blue-600 flex items-center justify-center mb-6">
                  <FiShield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  National Anti-Drugs Action Plan (NADAP) 2025–2030
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Contributing to drug demand reduction through prevention, early intervention, rehabilitation,
                  and community-based approaches that promote public health and social reintegration.
                </p>
              </motion.div>
            </div>
          </section>

          {/* CTA - Premium */}
          <section className="pb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[3rem] p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
                  <FiMail className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  Join Our Strategic Partnership Network
                </h2>
                <p className="text-blue-100 text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                  Partner with us to implement community-driven interventions that prevent drug abuse, protect
                  vulnerable populations, promote education, develop livelihoods, and build resilient communities
                  aligned with national development goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Contact Partnership Team
                  </Link>
                  <a
                    href="mailto:support@ksliberia.org"
                    className="inline-flex items-center justify-center bg-white/10 border border-white/30 text-white hover:bg-white/20 font-semibold py-4 px-10 rounded-full transition-all backdrop-blur-sm hover:-translate-y-1"
                  >
                    Partner via Email
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Partnership;