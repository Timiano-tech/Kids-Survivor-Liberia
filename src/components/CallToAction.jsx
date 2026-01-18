import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart } from 'react-icons/fi';

// Placeholder for your images - you can replace these with your actual imports
// import Image1 from '../assets/Image1.jpeg';
// ... etc

const CallToAction = () => {
  // Array of your images (Adding 4 images)
  // We double the array content to create the seamless infinite loop effect
  const images = [null, null, null, null]; // Replace null with your image imports

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
                Empower a Child's Future
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Every donation <span className="text-blue-600">counts</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                Join KSL in <strong>sponsoring the lives</strong> of vulnerable children in Liberia. 
                Your contribution helps provide <strong>safe homes, education, and nutrition</strong>. 
                Together, we break the cycle of poverty, one child at a time.
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

                {/* Optional Social Proof Avatars (As seen in your image) */}
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden shadow-sm">
                      {/* <img src={`/avatar${i}.jpg`} alt="donor" /> */}
                    </div>
                  ))}
                  <div className="pl-5 text-sm text-gray-500 font-medium">
                    Joined by 500+ supporters
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;