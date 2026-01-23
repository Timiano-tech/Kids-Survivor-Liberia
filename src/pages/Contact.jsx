import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail,  
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import ContactImage from '../assets/About Picture.jpeg';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading('Sending your message...');

    emailjs.sendForm(
      "service_26jvker", 
      "template_y85dbsh", 
      form.current, 
      "r8RYuqmA8zRYhp25P"
    ).then(
      () => {
        // Success toast
        toast.update(loadingToast, {
          render: 'Message sent successfully! 🎉',
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          closeButton: true,
        });
        
        // Reset form
        form.current.reset();
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setIsSubmitting(false);
      },
      (error) => {
        // Error toast
        toast.update(loadingToast, {
          render: 'Failed to send message. Please try again.',
          type: 'error',
          isLoading: false,
          autoClose: 5000,
          closeButton: true,
        });
        
        console.error('EmailJS Error:', error.text);
        setIsSubmitting(false);
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* Main Header Section */}
              <header className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-blue-900/70 z-10">
                  <img 
                    src={ContactImage} 
                    alt="Contact_Image" 
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
      
                <div className="relative z-10 py-30 text-center">
                  <div className="container mx-auto px-4">
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-5xl md:text-6xl font-bold text-white"
                    >
                      Contact Kids Survivor Liberia
                    </motion.h1>
                    <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
                      We're here to assist you. Reach out with any questions, partnership inquiries, or support needs.
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

          {/* Contact Form */}
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

              <form onSubmit={handleSubmit} ref={form} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email</label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center space-x-3 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-500 hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  <p className="text-gray-500 text-sm mt-3">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Map Section */}
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
              <div className="h-96 bg-gray-100">
                <iframe 
                  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=City%20of%20Light%20Community,%20Barclay%20Avenue,%2015th%20Street,%20Sinkor,%20Monrovia,%20Liberia+(Kids%20Survivor%20Liberia)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title="Kids Survivor Liberia Location"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
    <ScrollToTopButton/>
    <CallToAction/>
    </>
  );
};

export default Contact;