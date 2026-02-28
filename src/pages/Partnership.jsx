import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiDollarSign, 
  FiUsers, 
  FiMail,
  FiHeart,
  FiBriefcase,
  FiShare2,
  FiBook,
  FiHome,
  FiActivity,
  FiShield,
  FiTarget,
  FiUserCheck
} from 'react-icons/fi';
import ScrollToTopButton from '../components/ScrollToTop';
import HeaderImage from '../assets/Partner_Header.jpeg';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';

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
      {/* Main Header Section */}
              <header className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-blue-900/70 z-10">
                  <img 
                    src={HeaderImage} 
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
                      Strategic Partnership
                    </motion.h1>
                    <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
                      Join Kids Survivor Liberia in implementing integrated prevention, protection, rehabilitation, 
                      and empowerment strategies for children, adolescents, youth, adolescent girls, widows, and 
                      vulnerable elderly men.
                    </p>
                  </div>
                </div>
              </header>

      {/* Content */}
      <main className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Introduction */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">Why Partner With Us</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                Partner in Our Mission to Prevent Drug Abuse and Protect Vulnerable Populations
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join Kids Survivor Liberia in implementing integrated prevention, protection, rehabilitation,
                and empowerment strategies for children, adolescents, youth, adolescent girls, widows, and
                vulnerable elderly men. Together, we contribute to national priorities under the Youth
                Transformation & Empowerment Initiative (YTEI) and National Anti-Drugs Action Plan (NADAP) 2025–2030.
              </p>
            </div>
          </section>

          {/* Partnership Types */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Opportunities</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Strategic Partnership Areas
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors text-2xl">
                    {type.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">What You Gain</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Partnership Benefits
              </h2>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-blue-100/80 p-8 sm:p-10 shadow-sm">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <FiUserCheck className="w-4 h-4" />
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* National Alignment */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">Policy Alignment</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Aligned with National Priorities
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-sm hover:border-blue-100 transition-colors">
                <h3 className="text-lg font-bold text-blue-600 mb-4">
                  Youth Transformation & Empowerment Initiative (YTEI)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Strengthening youth leadership, expanding education access, supporting psychosocial well-being,
                  and positioning young people as agents of change in their communities.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-sm hover:border-blue-100 transition-colors">
                <h3 className="text-lg font-bold text-blue-600 mb-4">
                  National Anti-Drugs Action Plan (NADAP) 2025–2030
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contributing to drug demand reduction through prevention, early intervention, rehabilitation,
                  and community-based approaches that promote public health and social reintegration.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl border border-blue-500/20">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-6">
                <FiMail className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Join Our Strategic Partnership Network
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Partner with us to implement community-driven interventions that prevent drug abuse, protect
                vulnerable populations, promote education, develop livelihoods, and build resilient communities
                aligned with national development goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3.5 px-8 rounded-xl transition-colors shadow-lg"
                >
                  Contact Our Partnership Team
                </Link>
                <a
                  href="mailto:support@ksliberia.org"
                  className="inline-flex items-center justify-center border-2 border-white/80 text-white hover:bg-white/10 font-semibold py-3.5 px-8 rounded-xl transition-colors"
                >
                  Email for Partnership Details
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <CallToAction />
      <ScrollToTopButton />
    </div>
  );
};

export default Partnership;