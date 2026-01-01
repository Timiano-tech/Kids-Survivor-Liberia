import React from 'react'
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion';



const CallToAction = () => {
  return (
    <div>
       {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be Part of the Change
            </h2>
            
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Your support creates ripples of transformation that extend far beyond individual lives, 
              building stronger communities and a brighter future for Liberia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/donate">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl transition-all">
                    Donate Now & Make Impact
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all">
                    Join as Volunteer
                  </button>
                </Link>
              </motion.div>
            </div>
            
            {/* Floating stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { number: "98%", label: "Program Efficiency" },
                { number: "15+", label: "Years of Service" },
                { number: "200+", label: "Local Staff" },
                { number: "4.8★", label: "Community Rating" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CallToAction
