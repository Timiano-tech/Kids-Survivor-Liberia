import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiDollarSign, 
  FiUsers, 
  FiMail,
  FiHeart,
  FiBriefcase,
  FiShare2
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
      title: "Corporate Partnership",
      description: "Align your business with our mission",
      icon: <FiBriefcase />
    },
    {
      title: "Financial Support",
      description: "Sponsor programs or specific needs",
      icon: <FiDollarSign />
    },
    {
      title: "In-Kind Donations",
      description: "Donate supplies or services",
      icon: <FiHeart />
    },
    {
      title: "Advocacy Partners",
      description: "Help raise awareness",
      icon: <FiShare2 />
    }
  ];

  const benefits = [
    "Brand visibility",
    "Impact reports",
    "Networking opportunities",
    "Tax benefits",
    "Employee engagement",
    "Certificate of Partnership"
  ];

  return (
    <div className="min-h-screen bg-white">
     {/* Main Header Section */}
                  <header className="relative">
                   {/* Background Image  */}
                           <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-yellow-900/70 z-10">
                            
                             <img 
                               src={HeaderImage} 
                               alt="Background" 
                               className="w-full h-full object-cover opacity-20"
                             loading='lazy'/>
                           </div>
            
                     {/* Page Header with Breadcrumb */}
                    <div className="relative z-10 py-30 text-center">
                      <div className="container mx-auto px-4">
                        
                        {/* Main Title */}
                        <motion.h1 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-5xl md:text-6xl font-bold text-white"
                        >
                          Partner With Us
                        </motion.h1>
                        
                        {/* Breadcrumb Text */}
                        <p className="text-white/80 text-lg">
                          Together we can create lasting change for Liberia's children
                        </p>
                      </div>
                    </div>
                  </header>

      {/* Content */}
      <main className="py-12 px-4 max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Build Meaningful Partnerships
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join Kids Survivor Liberia to empower vulnerable children.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Ways to Partner
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Partner Benefits
          </h3>
          <div className="bg-blue-50 rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FiUsers className="text-blue-600 shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-blue-600 text-3xl mb-4 flex justify-center">
            <FiMail />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h3>
          
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Ready to make a difference? Contact us to discuss partnership opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:support@ksliberia.org" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors border border-gray-300"
            >
              Email Directly
            </a>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            Email: <span className="font-medium">support@ksliberia.org</span>
          </p>
        </div>
      </main>
    <CallToAction/>
      <ScrollToTopButton />
    </div>
  );
};

export default Partnership;