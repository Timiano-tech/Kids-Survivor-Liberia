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
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Mission Statement */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Strategic Mandate
                </h2>
                <p className="text-gray-700 text-lg">
                  Kids Survivor Liberia (KSL) exists to address intersecting challenges of drug abuse, 
                  poverty, gender vulnerability, youth marginalization, and age-related neglect through 
                  integrated prevention, protection, rehabilitation, and empowerment strategies rooted 
                  in community partnership and national policy alignment.
                </p>
              </div>
            </div>

            {/* Our Vision Banner */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Vision: A Drug-Free, Resilient Liberia
              </h2>
              <p className="text-gray-600 text-lg">
                We envision a Liberia where children, adolescent girls, youth, widows, and elderly men 
                live in dignity, have equitable access to education and economic opportunities, are 
                protected from drugs, violence, and exploitation, and actively contribute to sustainable 
                development and social cohesion.
              </p>
            </div>

            {/* Programmatic Pillars */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Core Programmatic Pillars
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {volunteerPillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                        {pillar.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {pillar.pillar}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Volunteer Opportunities */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Volunteer Opportunities Aligned with National Initiatives
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {volunteerRoles.map((role, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        {role.category}
                      </span>
                      <div className="text-blue-500">
                        {role.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {role.description}
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Minimum commitment: 3 months</li>
                      <li>• Training provided</li>
                      <li>• Community-based approach</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Guiding Values */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Our Guiding Values
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-blue-50 border border-blue-100 rounded-full px-6 py-3 text-gray-700 font-medium hover:shadow-md transition-shadow"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Cutting Themes */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Cross-Cutting Themes in All Volunteer Work
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Child and Youth Safeguarding",
                  "Gender Equality and Social Inclusion (GESI)",
                  "Human Rights and Dignity",
                  "Community Ownership",
                  "Sustainability Focus",
                  "Impact Measurement"
                ].map((theme, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{theme}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How does KSL align with national initiatives?",
                    a: "All volunteer work supports Youth Transformation & Empowerment Initiative (YTEI) and National Anti-Drugs Action Plan (NADAP) 2025-2030 priorities through community-driven interventions."
                  },
                  {
                    q: "What training is provided to volunteers?",
                    a: "We provide comprehensive training in drug prevention, psychosocial support, child protection, and community engagement methodologies aligned with our strategic pillars."
                  },
                  {
                    q: "Can I volunteer remotely?",
                    a: "Most roles require community presence, but some advocacy and awareness campaign support can be done remotely. Contact us to discuss options."
                  },
                  {
                    q: "What's the impact measurement process?",
                    a: "We use participatory monitoring systems tracking outcomes aligned with YTEI and NADAP indicators, with regular feedback from community stakeholders."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto bg-blue-500 rounded-2xl p-10 text-center text-white shadow-xl">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiMessageSquare className="w-10 h-10" />
              </div>
              
              <h2 className="text-3xl font-bold mb-6">
                Join Our Strategic Mission
              </h2>
              
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Become part of a movement creating lasting change. Your contribution supports 
                national priorities for youth development, drug demand reduction, gender equality, 
                and social protection in Liberia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Contact Volunteer Coordinator
                </Link>
                
                <a 
                  href="mailto:support@ksliberia.org"
                  className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-lg transition-colors"
                >
                  Email: support@ksliberia.org
                </a>
              </div>
              
              <p className="text-white/80 text-sm mt-8">
                All volunteers undergo orientation on YTEI & NADAP alignment, child safeguarding, 
                and community engagement protocols.
              </p>
            </div>
          </div>
        </main>

        <CallToAction />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Volunteer;