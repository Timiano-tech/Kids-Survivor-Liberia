import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiSend,
  FiUser,
  FiPhone,
  FiArrowUpRight,
} from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import StatBand from '../components/visuals/StatBand';
import { COUNTIES } from '../data/counties';
import ContactImage from '../assets/About Picture.jpeg';
import OfficeImage from '../assets/Team_meeting.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const HQ_PHONE = '+231887291599';
const HQ_PHONE_DISPLAY = '+231 887 291 599';
const isRealPhone = (phone) => Boolean(phone) && !phone.includes('X');

const MAP_QUERY =
  '15TH STREET, BARCLAY AVENUE, SINKOR, MONTSERRADO COUNTRY (Kids Survivor Liberia)';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const activeCounties = COUNTIES.filter((county) => county.isActive);
  const activeOffices = activeCounties.filter((county) => county.office);

  const contactMeta = [
    { value: activeCounties.length, label: 'Active Counties' },
    { value: 24, suffix: 'h', label: 'Response Window' },
    { value: COUNTIES.length, label: 'Counties Covered' },
    { value: 1, label: 'Head Office' },
  ];

  const channels = [
    {
      title: 'Headquarters',
      value: HQ_PHONE_DISPLAY,
      href: `tel:${HQ_PHONE}`,
      note: 'Monrovia team, Liberian business hours.',
    },
    {
      title: 'General Support',
      value: 'support@ksliberia.org',
      href: 'mailto:support@ksliberia.org',
      note: 'Safeguarding concerns and programme questions.',
    },
    {
      title: 'Donations & Receipts',
      value: 'donate@ksliberia.org',
      href: 'mailto:donate@ksliberia.org',
      note: 'Giving questions and transfer receipts.',
    },
    {
      title: 'Partnerships & Grants',
      value: 'Start a partnership',
      to: '/partnership',
      note: 'Matched giving and multi-year grant arrangements.',
    },
  ];

  const contactStats = [
    { value: activeCounties.length, label: 'Active Counties', description: 'Field teams coordinating local enquiries.' },
    { value: 24, label: 'Hour Response Window', description: 'Target reply time for written enquiries.' },
    { value: COUNTIES.length, label: 'Counties Covered', description: 'Where partners can request programme support.' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const loadingToast = toast.loading('Sending your message...');

    emailjs
      .sendForm('service_26jvker', 'template_y85dbsh', form.current, 'r8RYuqmA8zRYhp25P')
      .then(
        () => {
          toast.update(loadingToast, {
            render: 'Message sent successfully!',
            type: 'success',
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
          });
          form.current.reset();
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    'w-full px-4 py-3 bg-transparent border-b border-slate-300 focus:border-blue-700 focus:ring-0 transition-colors disabled:opacity-70 disabled:cursor-not-allowed outline-none placeholder:text-slate-400';

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
        title="Talk to a human"
        description="One office in Monrovia, seven field teams in counties, and a reply within a day."
        image={ContactImage}
        meta={contactMeta}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Reach Out"
              title="Four ways to reach us"
              className="mb-14"
            />

            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((channel) => {
                const inner = (
                  <>
                    <p className="text-caption uppercase tracking-[0.18em] text-blue-700">{channel.title}</p>
                    <p className="mt-4 text-heading-md text-slate-900 break-words">{channel.value}</p>
                    <p className="mt-2 text-body-sm text-slate-600">{channel.note}</p>
                  </>
                );

                return (
                  <li key={channel.title} className="group border-t border-slate-300 pt-5">
                    {channel.to ? (
                      <Link to={channel.to} className="block">
                        {inner}
                        <span className="mt-4 inline-flex items-center gap-2 text-caption font-bold uppercase tracking-widest text-slate-900">
                          Open page
                          <FiArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    ) : (
                      <a href={channel.href} className="block">
                        {inner}
                        <span className="mt-4 inline-flex items-center gap-2 text-caption font-bold uppercase tracking-widest text-slate-900">
                          Contact
                          <FiArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-20 border-t border-slate-200 pt-14">
              <StatBand stats={contactStats} tone="light" divided />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="Send A Message"
                  title="Write to the team"
                  description="We typically respond within 24 hours."
                  className="mb-12"
                />

                <form onSubmit={handleSubmit} ref={form} className="space-y-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-caption uppercase tracking-widest text-slate-500">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className={`${inputClasses} mt-2`}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-caption uppercase tracking-widest text-slate-500">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className={`${inputClasses} mt-2`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-caption uppercase tracking-widest text-slate-500">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`${inputClasses} mt-2`}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-caption uppercase tracking-widest text-slate-500">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      disabled={isSubmitting}
                      className={`${inputClasses} mt-2 resize-none`}
                      placeholder="Tell us what you need..."
                    />
                  </div>

                  <div className="flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 text-button transition-colors ${
                        isSubmitting
                          ? 'cursor-not-allowed bg-slate-300 text-slate-500'
                          : 'bg-blue-700 text-white hover:bg-blue-800'
                      }`}
                    >
                      <FiSend className="h-4 w-4" />
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                    </button>
                    <p className="text-body-sm text-slate-500">
                      Safeguarding concerns go to{' '}
                      <a href="mailto:support@ksliberia.org" className="font-semibold text-blue-700 hover:underline">
                        support@ksliberia.org
                      </a>
                    </p>
                  </div>
                </form>
              </div>

              <div className="relative">
                <img
                  src={OfficeImage}
                  alt="Kids Survivor Liberia headquarters team meeting"
                  className="h-80 w-full object-cover lg:h-full lg:min-h-[36rem]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-caption uppercase tracking-[0.18em] text-yellow-400">Headquarters</p>
                  <p className="mt-3 font-serif text-heading-xl leading-snug text-white">
                    15th Street, Barclay Avenue, Sinkor, Monrovia
                  </p>
                  <a
                    href={`https://maps.google.com/maps?hl=en&q=${encodeURIComponent(MAP_QUERY)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 border-b border-yellow-500 pb-1 text-caption font-bold uppercase tracking-widest text-yellow-400 transition-colors hover:text-yellow-300"
                  >
                    Get directions
                    <FiArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              eyebrow="Field Presence"
              title="County offices"
              description="Each active county is coordinated by a named office."
              className="mb-14"
            />

            <ul className="border-t border-slate-800">
              {activeOffices.map((county) => (
                <li key={county.id}>
                  <Link
                    to={`/counties/${county.id}`}
                    className="group grid gap-2 border-b border-slate-800 py-7 transition-colors hover:bg-slate-900/50 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-center md:gap-8 md:px-4"
                  >
                    <span className="font-serif text-heading-lg text-white">{county.office.name}</span>
                    <span className="text-body-sm text-slate-400">{county.office.focusArea}</span>
                    <span className="flex items-center gap-2 text-body-sm text-slate-400">
                      <FiUser className="h-3.5 w-3.5 shrink-0 text-yellow-400" />
                      {county.office.coordinator}
                    </span>
                    <span className="flex items-center gap-2 text-body-sm text-slate-400 md:justify-end">
                      {isRealPhone(county.office.phone) ? (
                        <>
                          <FiPhone className="h-3.5 w-3.5 shrink-0 text-yellow-400" />
                          {county.office.phone}
                        </>
                      ) : (
                        <span className="text-slate-500">Contact via HQ</span>
                      )}
                      <FiArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-16 border border-slate-800">
              <iframe
                title="KSL Headquarters Location"
                className="h-72 w-full grayscale-[0.4] md:h-96"
                loading="lazy"
                src={`https://maps.google.com/maps?hl=en&q=${encodeURIComponent(MAP_QUERY)}&t=&z=15&ie=UTF8&iwloc=B&output=embed`}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
