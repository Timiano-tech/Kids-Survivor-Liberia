import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 text-blue-600"
        >
          About Kids Survivor Liberia
        </motion.h1>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-lg mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              Kids Survivor Liberia (KSL) is a nationally registered, non-profit, and non-political 
              organization dedicated to improving the lives of Liberia's most vulnerable children 
              and youth. Founded to address the growing social, economic, and health challenges 
              facing young people in post-war Liberia.
            </p>
            
            <p className="text-gray-700 mb-4">
              We work at the intersection of child protection, youth development, and community 
              empowerment to create lasting change in Liberia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Our Legal Standing</h2>
            <p className="text-gray-700 mb-4">
              The organization is legally incorporated under the laws of the Republic of Liberia 
              and holds all relevant sectoral clearances from the Ministries of Gender, Health, 
              Education, Agriculture, Internal Affairs, Justice, and other line ministries.
            </p>
            <p className="text-gray-700">
              We maintain accreditation from the Ministry of Finance and Development Planning, 
              ensuring transparency and accountability in all our operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Our Identity & Mission</h2>
            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> Kids Survivor Liberia (KSL) is not a governmental body 
              and does not pursue or engage in political roles or agendas. While we work with 
              communities and social groups, KSL itself is not simply a social group.
            </p>
            <p className="text-gray-700 mb-4">
              We are a formally registered Civil Society Organization (CSO) with structured 
              programs, accountability systems, and a mandate to provide humanitarian and 
              developmental services.
            </p>
            <p className="text-gray-700 font-semibold">
              KSL operates strictly for humanitarian and social development purposes—seeking 
              the salvation, dignity, and life-changing transformation of children and youth 
              in Liberia and across the globe.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;