import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail,  
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import ContactImage from '../assets/About Picture.jpeg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header Section */}
      <header className="relative">
       {/* Background Image  */}
               <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-yellow-900/70 z-10">
                
                 <img 
                   src={ContactImage} 
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
              Contact Us
            </motion.h1>
            
            {/* Breadcrumb Text */}
            <p className="text-white/80 text-lg">
              Where Every Child's Potential Finds Protection & Purpose.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Contact Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We're here to help and answer any questions you might have. 
              Whether you want to volunteer, partner with us, or learn more about our programs, 
              we look forward to hearing from you.
            </p>
          </motion.div>

          {/* Contact Form - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                  <FiMessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Name *</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto"
                  >
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                  <p className="text-gray-500 text-sm mt-3">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Map Section - Add your map here */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Our Office</h2>
                <p className="text-gray-600">Visit us at our headquarters in Monrovia</p>
              </div>
              <div className="h-96 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 text-4xl mb-4">🗺️</div>
                  <p className="text-gray-600 font-medium mb-2">Map Location</p>
                  <p className="text-gray-500 text-sm">Add Google Maps or location map here</p>
                </div>
                {/* Replace with:
                <iframe 
                  src="https://www.google.com/maps/embed?pb=..."
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
                */}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

    

    </div>
  );
};

export default Contact;