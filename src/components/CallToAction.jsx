import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart } from 'react-icons/fi';
import scrollImage1 from '../assets/Scroll3.jpeg'
import scrollImage2 from '../assets/Youth2.jpeg'
import scrollImage3 from '../assets/Scroll4.jpeg'
import scrollImage4 from '../assets/KSL_Team3.jpeg'
import scrollImage5 from '../assets/Scroll5.jpeg'

const CallToAction = () => {

  const images = [scrollImage1, scrollImage2, scrollImage3, scrollImage4, scrollImage5]; 

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT SIDE: Infinite Image Slider */}
          <div className="w-full lg:w-1/2 relative">
            <div className="flex gap-4 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div 
                className="flex gap-4 flex-none pr-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Render images twice for seamless loop */}
                {[...images, ...images].map((img, index) => (
                  <div 
                    key={index}
                    className="w-48 h-64 md:w-60 md:h-80 flex-none rounded-2xl bg-blue-100 overflow-hidden shadow-md"
                  >
                    {img ? (
                      <img src={img} alt="Impact" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-blue-300">
                        <FiHeart size={40} />
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold uppercase tracking-wider text-sm">
                <div className="w-6 h-px bg-blue-600"></div>
                Invest in a Drug-Free, Empowered Liberia
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Invest in a <span className="text-blue-600">Drug-Free, Empowered</span> Liberia
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                Your contribution directly supports our <strong>NADAP 2025-2030 aligned programs </strong> 
                 for drug abuse prevention, rehabilitation, and youth empowerment. 
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link to="/donate">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl flex items-center gap-3 hover:bg-blue-600 transition-colors"
                  >
                    <div className="bg-white text-blue-900 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                      <FiArrowRight />
                    </div>
                    Give Today
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;