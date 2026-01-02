import React from 'react'
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion';



const CallToAction = () => {
  return (
    <>
      {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
              <div className="container mx-auto px-4 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Join Us in Creating Lasting Change
                  </h2>
                  <p className="text-xl text-blue-100 mb-10">
                    Your support helps us implement our mission and work towards our vision for every child in Liberia.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/donate">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold shadow-lg"
                      >
                        Support Our Mission
                      </motion.button>
                    </Link>
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold"
                      >
                        Partner With Us
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>
    </>
  )
}

export default CallToAction
