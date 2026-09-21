import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import {
  FiCopy,
  FiCheck,
  FiDollarSign
} from 'react-icons/fi';
import DonateImage from '../assets/Children5.jpeg';

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Bank transfer state
  const [copied, setCopied] = useState(false);
  const bankAccount = {
    bankName: "Guaranty TrustBank (Liberia) Limited",
    accountName: "Kids Survivor Liberia",
    accountNumber: "203334045210",
    currency: "USD"
  };

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(bankAccount.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEO
        title="Donate to Kids Survivor Liberia — Support Vulnerable Children"
        description="Donate to Kids Survivor Liberia. Your contributions fund drug abuse prevention, child protection, and youth empowerment programs across Liberia. Safe, transparent donations."
        canonical="/donate"
        keywords={[
          'donate to Kids Survivor Liberia',
          'KSL donations',
          'donate Liberia children',
          'sponsor a child Liberia',
          'help vulnerable children Liberia',
          'charity donation Liberia',
          'online donation Liberia NGO',
          'support Liberian youth',
          'bank transfer KSL',
          'Orange Money Liberia donation',
        ]}
        breadcrumbs={[{ name: 'Donate', url: '/donate' }]}
      />
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="Make an Impact"
          title="Donate to Kids Survivor Liberia"
          description="Your generous support helps us protect vulnerable children, provide education, and empower youth across Liberia."
          image={DonateImage}
          alt="Donate Background"
        />

        {/* Main Content */}
        <main className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <SectionHeading
                eyebrow="Ways to Give"
                title="Support Our Mission"
                description="Your generous donation helps us protect vulnerable children, provide education, and empower youth across Liberia. Every contribution makes a real difference."
              />
            </motion.div>

            {/* donation options centered */}
            <div className="max-w-2xl mx-auto mb-16">
              {/* Option 1: Bank Transfer */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-slate-200 shadow-md overflow-hidden">
                  {/* Header */}
                  <div className="bg-blue-900 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                        <FiDollarSign className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white tracking-tight">Bank Transfer</h3>
                        <p className="text-blue-100 text-sm">Direct bank deposit</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Account Details */}
                    <div className="space-y-5">
                      <div>
                        <label className="block text-slate-600 text-xs font-medium uppercase tracking-wider mb-2">Bank Name</label>
                        <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                          <p className="text-slate-800 font-medium text-sm">{bankAccount.bankName}</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-slate-600 text-xs font-medium uppercase tracking-wider mb-2">Account Name</label>
                        <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                          <p className="text-slate-800 font-medium text-sm">{bankAccount.accountName}</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-slate-600 text-xs font-medium uppercase tracking-wider mb-2">Account Number</label>
                        <div className="flex items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                          <p className="text-slate-800 font-medium font-mono text-sm">{bankAccount.accountNumber}</p>
                          <button
                            onClick={handleCopyAccountNumber}
                            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 transition-colors text-sm font-medium shrink-0"
                          >
                            {copied ? (
                              <>
                                <FiCheck className="w-3.5 h-3.5" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <FiCopy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-slate-600 text-xs font-medium uppercase tracking-wider mb-2">Currency</label>
                        <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                          <p className="text-slate-800 font-medium text-sm">{bankAccount.currency}</p>
                        </div>
                      </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3">Instructions</h4>
                      <ul className="space-y-2.5 text-slate-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-700 font-medium shrink-0">1.</span>
                          Use the account details above to make a bank transfer
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-700 font-medium shrink-0">2.</span>
                          Include your name in the transfer reference
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-700 font-medium shrink-0">3.</span>
                          Email receipt to: <a href="mailto:donate@ksliberia.org" className="text-blue-700 hover:underline">donate@ksliberia.org</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Other Ways to Support */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto mt-24 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-10 tracking-tight">Other Ways to Support</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Monthly Giving',
                    description: 'Become a sustaining donor with monthly bank transfers.',

                  },
                  {
                    title: 'Corporate Partnership',
                    description: 'Partner with your company for matched donations.',
                  },
                  {
                    title: 'In-Kind Donations',
                    description: 'Donate supplies, equipment, or professional services.',
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-slate-200 p-8 shadow-sm hover:border-blue-300 transition-colors">
                    <h4 className="font-semibold text-slate-900 mb-3 text-lg">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Donate;