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
      <main className="py-12 px-4 max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Partner in Our Mission to Prevent Drug Abuse and Protect Vulnerable Populations
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Join Kids Survivor Liberia in implementing integrated prevention, protection, rehabilitation, 
            and empowerment strategies for children, adolescents, youth, adolescent girls, widows, and 
            vulnerable elderly men. Together, we contribute to national priorities under the Youth 
            Transformation & Empowerment Initiative (YTEI) and National Anti-Drugs Action Plan (NADAP) 2025–2030.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Strategic Partnership Opportunities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 text-2xl mb-4 flex justify-center">
                  {type.icon}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  {type.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Partnership Benefits
          </h3>
          <div className="bg-blue-50 rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FiUserCheck className="text-blue-600 shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* National Alignment */}
        <div className="mb-16 bg-blue-50 to-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Aligned with National Priorities
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">Youth Transformation & Empowerment Initiative (YTEI)</div>
              <p className="text-gray-600">
                Strengthening youth leadership, expanding education access, supporting psychosocial well-being, 
                and positioning young people as agents of change in their communities.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">National Anti-Drugs Action Plan (NADAP) 2025–2030</div>
              <p className="text-gray-600">
                Contributing to drug demand reduction through prevention, early intervention, rehabilitation, 
                and community-based approaches that promote public health and social reintegration.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-blue-600 text-3xl mb-4 flex justify-center">
            <FiMail />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Join Our Strategic Partnership Network
          </h3>
          
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Partner with us to implement community-driven interventions that prevent drug abuse, protect 
            vulnerable populations, promote education, develop livelihoods, and build resilient communities 
            aligned with national development goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Our Partnership Team
            </Link>
            <a 
              href="mailto:support@ksliberia.org" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors border border-gray-300"
            >
              Email for Partnership Details
            </a>
          </div>
        </div>
      </main>
      
      <CallToAction />
      <ScrollToTopButton />
    </div>
  );
};

export default Partnership;