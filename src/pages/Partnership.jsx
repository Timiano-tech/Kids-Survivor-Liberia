import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHandshake, FiDollarSign, FiPackage, FiGlobe, FiMail } from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import KSLCompany from '../assets/KSL Company.jpeg';
import { Link } from 'react-router-dom';

const Partnership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipTypes = [
    {
      title: "Corporate Partners",
      description: "Strategic alliances for sustainable impact",
      icon: <FiHandshake className="w-6 h-6" />
    },
    {
      title: "Financial Sponsors",
      description: "Funding for programs and initiatives",
      icon: <FiDollarSign className="w-6 h-6" />
    },
    {
      title: "In-Kind Support",
      description: "Material and service contributions",
      icon: <FiPackage className="w-6 h-6" />
    },
    {
      title: "Advocacy Allies",
      description: "Amplifying our mission and reach",
      icon: <FiGlobe className="w-6 h-6" />
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="absolute inset-0">
            <img 
              src={KSLCompany} 
              alt="KSL Partnership" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          
          <div className="relative container mx-auto px-4 py-20 md:py-24 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Partner With Us
            </motion.h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join our mission to create lasting change for Liberia's children
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Collaborative Impact
              </h2>
              <p className="text-gray-600 text-lg">
                At Kids Survivor Liberia, we believe in the power of partnership. 
                Together with organizations and individuals, we can amplify our impact 
                and create sustainable solutions for vulnerable children and youth.
              </p>
            </div>

            {/* Partnership Types */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-10">
                Partnership Opportunities
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnershipTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-blue-600 mb-4">
                      {type.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {type.title}
                    </h4>
                    <p className="text-gray-600">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
                Why Partner With KSL?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                      <FiHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Strategic Alignment</h4>
                      <p className="text-gray-600 text-sm">Align with UN Sustainable Development Goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                      <FiDollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Impact Reporting</h4>
                      <p className="text-gray-600 text-sm">Transparent, measurable results</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                      <FiGlobe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Brand Visibility</h4>
                      <p className="text-gray-600 text-sm">Recognition across our platforms</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                      <div className="w-5 h-5 flex items-center justify-center">✓</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Tax Benefits</h4>
                      <p className="text-gray-600 text-sm">Eligible for tax deductions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                      <div className="w-5 h-5 flex items-center justify-center">👥</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Team Engagement</h4>
                      <p className="text-gray-600 text-sm">Employee volunteering opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                      <div className="w-5 h-5 flex items-center justify-center">📈</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Networking</h4>
                      <p className="text-gray-600 text-sm">Connect with other impact-driven partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="bg-blue-600 text-white rounded-2xl p-8 md:p-10">
                <FiMail className="w-12 h-12 mx-auto mb-6" />
                
                <h3 className="text-2xl font-bold mb-4">
                  Start a Conversation
                </h3>
                
                <p className="text-blue-100 mb-8">
                  Let's explore how we can work together to create meaningful change.
                </p>

                <div className="space-y-4">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Partnership Team
                  </Link>
                  
                  <p className="text-blue-200 text-sm">
                    Email: partnerships@kidssurvivorliberia.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <CallToAction />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Partnership;