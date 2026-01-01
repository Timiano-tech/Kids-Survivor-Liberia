import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transforming Lives of Liberia's Children
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Providing protection, education, and hope for vulnerable children and youth in post-war Liberia
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/donate">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                Donate Now
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-blue-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Child Protection</h3>
              <p>Ensuring safety and rights for every vulnerable child in Liberia</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-blue-600 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Youth Development</h3>
              <p>Empowering young people through education and skills training</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-blue-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Community Empowerment</h3>
              <p>Building stronger communities for sustainable change</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every contribution helps us reach more children and build a better future for Liberia
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
              Get Involved
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;