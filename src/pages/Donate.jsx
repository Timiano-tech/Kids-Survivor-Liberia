import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
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
        title="Donate to Kids Survivor Liberia — Support Children"
        description="Donate to Kids Survivor Liberia. Your financial contributions fund drug abuse prevention, education, and child protection programs across Liberia."
        canonical="/donate"
        keywords={['Donate Kids Survivor Liberia', 'KSL donations', 'bank transfer KSL', 'support Liberia children']}
      />
      <div className="min-h-screen bg-slate-50">
        {/* Main Header Section - Premium Redesign */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[40px] md:rounded-b-[100px] shadow-xl">
          <div className="absolute inset-0 z-0">
            <img
              src={DonateImage}
              alt="Donate Background"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-slate-950/80"></div>
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Make an Impact</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                Donate to Kids Survivor Liberia
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                Your generous support helps us protect vulnerable children, provide education,
                and empower youth across Liberia.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            {/* Introduction - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Ways to Give</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Support Our Mission</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Your generous donation helps us protect vulnerable children, provide education,
                and empower youth across Liberia. Every contribution makes a real difference.
              </p>
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
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden h-full transform hover:scale-[1.01] transition-transform duration-300">
                  {/* Sleek header */}
                  <div className="bg-blue-900 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                        <FiDollarSign className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white tracking-tight">Bank Transfer</h3>
                        <p className="text-blue-100/90 text-sm">Direct bank deposit</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Account Details */}
                    <div className="space-y-5">
                      <div>
                        <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">Bank Name</label>
                        <div className="bg-gray-50/80 p-3.5 rounded-lg border border-gray-200">
                          <p className="text-gray-800 font-medium text-sm">{bankAccount.bankName}</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">Account Name</label>
                        <div className="bg-gray-50/80 p-3.5 rounded-lg border border-gray-200">
                          <p className="text-gray-800 font-medium text-sm">{bankAccount.accountName}</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">Account Number</label>
                        <div className="flex items-center justify-between gap-3 bg-gray-50/80 p-3.5 rounded-lg border border-gray-200">
                          <p className="text-gray-800 font-medium font-mono text-sm">{bankAccount.accountNumber}</p>
                          <button
                            onClick={handleCopyAccountNumber}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-all text-sm font-medium shrink-0"
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
                        <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">Currency</label>
                        <div className="bg-gray-50/80 p-3.5 rounded-lg border border-gray-200">
                          <p className="text-gray-800 font-medium text-sm">{bankAccount.currency}</p>
                        </div>
                      </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">Instructions</h4>
                      <ul className="space-y-2.5 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-medium shrink-0">1.</span>
                          Use the account details above to make a bank transfer
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-medium shrink-0">2.</span>
                          Include your name in the transfer reference
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-medium shrink-0">3.</span>
                          Email receipt to: <a href="mailto:donate@ksliberia.org" className="text-blue-600 hover:underline">donate@ksliberia.org</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Other Ways to Support - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto mt-24 text-center"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Other Ways to Support</h3>
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
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-[0_10px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">{item.title}</h4>
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
