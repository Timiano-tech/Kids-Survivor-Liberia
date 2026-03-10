import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import ContactImage from '../assets/About Picture.jpeg';
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

        {/* Main Header Section - Premium Redesign */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl border-b border-slate-100">
          <div className="absolute inset-0 z-0">
            <img
              src={ContactImage}
              alt="Contact Kids Survivor Liberia"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Get In Touch</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                We're here to assist you. Reach out with any questions, partnership inquiries, or support needs.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-20 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Contact Introduction - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-4xl mx-auto"
            >
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Reach Out</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Let's Connect</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We're here to help and answer any questions you might have.
                Whether you want to volunteer, partner with us, or learn more about our programs,
                we look forward to hearing from you.
              </p>
            </motion.div>

            {/* Contact Form - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-10 gap-6 relative z-10">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-2xl border border-blue-100 text-blue-600 shadow-sm">
                    <FiMessageSquare className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Send us a Message</h2>
                    <p className="text-slate-500 font-medium">We typically respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} ref={form} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-slate-700 mb-2 font-semibold text-sm tracking-wide uppercase">Name</label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed outline-none"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-slate-700 mb-2 font-semibold text-sm tracking-wide uppercase">Email</label>
                      <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed outline-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-slate-700 mb-2 font-semibold text-sm tracking-wide uppercase">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed outline-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-slate-700 mb-2 font-semibold text-sm tracking-wide uppercase">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none disabled:opacity-70 disabled:cursor-not-allowed outline-none"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center justify-center space-x-3 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto ${isSubmitting
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 hover:-translate-y-1'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    <p className="text-slate-500 text-sm font-medium">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Map Section - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-24 max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-bl-full -z-10 group-hover:bg-yellow-400/30 transition-colors duration-500"></div>
                <div className="p-10 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">Visit Our Headquarters</h2>
                    <p className="text-slate-600 font-medium">15th Street, Barclay Avenue, Sinkor, Monrovia, Liberia</p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=15TH%20STREET,%20BARCLAY%20AVENUE,%20SINKOR,%20MONTSERRADO%20COUNTRY+(Kids%20Survivor%20Liberia)"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-white hover:border-blue-200 rounded-full font-semibold transition-all shadow-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="h-[28rem] w-full bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=15TH%20STREET,%20BARCLAY%20AVENUE,%20SINKOR,%20MONTSERRADO%20COUNTRY+(Kids%20Survivor%20Liberia)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="KSL Headquarters Location"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;