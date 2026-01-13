import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiHeart, FiCalendar, FiAward, FiMail, FiMessageSquare } from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import KSLCompany from '../assets/KSL Company.jpeg';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const volunteerRoles = [
    {
      title: "Teaching Support",
      description: "Help children with reading, homework, and basic education",
      icon: <FiUsers />
    },
    {
      title: "Counseling",
      description: "Provide emotional support to vulnerable children",
      icon: <FiHeart />
    },
    {
      title: "Skills Training",
      description: "Teach vocational skills like carpentry or tailoring",
      icon: <FiAward />
    },
    {
      title: "Community Outreach",
      description: "Assist with awareness campaigns and events",
      icon: <FiCalendar />
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-yellow-900/70 z-10">
            <img 
              src={KSLCompany} 
              alt="Background" 
              className="w-full h-full object-cover opacity-20"
            />
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
                Volunteer With Us
              </motion.h1>
              
              {/* Breadcrumb Text */}
              <p className="text-white/80 text-lg">
                Join our mission to protect and empower Liberia's children
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Make a Difference
              </h2>
              <p className="text-gray-600 text-lg">
                Your time and skills can transform lives. Join our dedicated team 
                of volunteers working to create lasting change for Liberia's children.
              </p>
            </div>

            {/* Volunteer Roles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {volunteerRoles.map((role, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {role.title}
                  </h3>
                  <p className="text-gray-600">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-700 mb-2">
                    How much time do I need to commit?
                  </h3>
                  <p className="text-gray-600">
                    We ask for a minimum of 2-4 hours per week for at least 3 months.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700 mb-2">
                    Do I need special experience?
                  </h3>
                  <p className="text-gray-600">
                    Basic requirements are listed above. We provide training for specific roles.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700 mb-2">
                    When will I hear back?
                  </h3>
                  <p className="text-gray-600">
                    We respond to all applications within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-2xl mx-auto bg-blue-50 rounded-2xl p-8 text-center shadow-sm">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiMessageSquare className="w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Volunteer?
              </h2>
              
              <p className="text-gray-600 mb-8">
                Start your journey with us today. Contact our volunteer coordinator 
                to learn more about opportunities and how you can make a difference.
              </p>

              <Link 
                to="/contact" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Contact Volunteer Coordinator
              </Link>
              
              <p className="text-gray-500 text-sm mt-4">
                Or email us at: <span className="font-medium">support@ksliberia.org</span>
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