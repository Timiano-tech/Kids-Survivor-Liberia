import { useState, useRef, useEffect } from 'react';
import {
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import ContactImage from '../assets/About Picture.jpeg';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

const CONTACT_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Kids Survivor Liberia',
  url: 'https://ksliberia.org/contact',
  mainEntity: {
    '@type': 'NGO',
    name: 'Kids Survivor Liberia',
    telephone: '+231887291599',
    email: 'support@ksliberia.org',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Monrovia',
      addressRegion: 'Montserrado',
      addressCountry: 'LR',
    },
  },
};
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
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

  const inputClasses = "w-full px-5 py-3.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed outline-none";

  return (
    <>
      <SEO
        title="Contact Kids Survivor Liberia — Get in Touch"
        description="Contact Kids Survivor Liberia headquarters in Monrovia. Reach out for partnerships, volunteering, drug prevention inquiries, or general support. Call +231 887 291 599."
        canonical="/contact"
        keywords={[
          'Contact Kids Survivor Liberia',
          'KSL Monrovia office',
          'KSL phone number Liberia',
          'Liberia NGO contact',
          'partnership inquiries Liberia',
          'volunteer with KSL Liberia',
          'donate to KSL Liberia',
        ]}
        breadcrumbs={[{ name: 'Contact', url: '/contact' }]}
        jsonLd={CONTACT_JSON_LD}
      />
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

        <PageHeader
          eyebrow="Get In Touch"
          title="Contact Us"
          description="We're here to assist you. Reach out with any questions, partnership inquiries, or support needs."
          image={ContactImage}
          alt="Contact Kids Survivor Liberia"
        />

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Reach Out"
              title="Let's Connect"
              description="We're here to help and answer any questions you might have. Whether you want to volunteer, partner with us, or learn more about our programs, we look forward to hearing from you."
              className="mb-16"
            />

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border border-slate-200 p-8 sm:p-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-10 gap-6">
                  <div className="bg-blue-50 text-blue-700 rounded-sm p-3">
                    <FiMessageSquare className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900 mb-1">Send us a Message</h2>
                    <p className="text-slate-500 font-medium">We typically respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} ref={form} className="space-y-8">
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
                          className={`${inputClasses} pl-11`}
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
                          className={`${inputClasses} pl-11`}
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
                      className={inputClasses}
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
                      className={`${inputClasses} resize-none`}
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center space-x-3 px-8 py-3.5 font-semibold transition-colors w-full sm:w-auto ${isSubmitting
                        ? 'bg-slate-400 cursor-not-allowed text-white'
                        : 'bg-blue-700 hover:bg-blue-800 text-white'
                        }`}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
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
            </div>

            {/* Map Section */}
            <div className="mt-20 max-w-5xl mx-auto">
              <div className="bg-white border border-slate-200">
                <div className="p-8 sm:p-10 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900 mb-2">Visit Our Headquarters</h2>
                    <p className="text-slate-600 font-medium">15th Street, Barclay Avenue, Sinkor, Monrovia, Liberia</p>
                  </div>
                  <div className="shrink-0">
                    <a
                      href="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=15TH%20STREET,%20BARCLAY%20AVENUE,%20SINKOR,%20MONTSERRADO%20COUNTRY+(Kids%20Survivor%20Liberia)"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-slate-50 border border-slate-300 text-slate-700 hover:text-blue-600 hover:bg-white hover:border-blue-500 font-semibold transition-colors shadow-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="h-112 w-full bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700">
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
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;