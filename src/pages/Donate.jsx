import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiCopy,
  FiCheck,
  FiCreditCard,
  FiDollarSign
} from 'react-icons/fi';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
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

  // Card payment state
  const [paymentDetails, setPaymentDetails] = useState({
    amount: '',
    email: '',
    name: '',
    phone: ''
  });
  const [currency, setCurrency] = useState('USD'); // default currency
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Flutterwave configuration
  const flutterwaveConfig = {
    /* public_key: process.env.REACT_APP_FLW_PUBLIC_KEY, */ // Your public key from .env
    tx_ref: Date.now().toString(),
    amount: parseFloat(paymentDetails.amount) || 0,
    currency: currency, // use selected currency
    payment_options: 'card',
    customer: {
      email: paymentDetails.email,
      name: paymentDetails.name,
      phone_number: paymentDetails.phone,
    },
    customizations: {
      title: 'Donation to Kids Survivor Liberia',
      description: 'Support vulnerable children in Liberia',
      logo: '/KSL Logo.png',
    },
    callback: (response) => {
      // Handle successful payment
      if (response.status === 'successful') {
        setPaymentSuccess(true);
        // You can also send the transaction details to your backend here
      }
      setIsProcessing(false);
      closePaymentModal(); // close the modal
    },
    onClose: () => {
      setIsProcessing(false);
    },
  };

  const handleFlutterPayment = useFlutterwave(flutterwaveConfig);

  const handleCardPayment = (e) => {
    e.preventDefault();
    // Basic validation
    if (!paymentDetails.amount || !paymentDetails.email || !paymentDetails.name) {
      alert('Please fill in amount, email and name');
      return;
    }
    setIsProcessing(true);
    handleFlutterPayment({
      callback: (response) => {
        flutterwaveConfig.callback(response);
      },
      onClose: flutterwaveConfig.onClose,
    });
  };

  const handleInputChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(bankAccount.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Available currencies
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'LRD', name: 'Liberian Dollar', symbol: 'L$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' }
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        {/* Main Header Section - Premium Redesign */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl">
          <div className="absolute inset-0 z-0">
            <img
              src={DonateImage}
              alt="Donate Background"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
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

            {/* Two donation options side by side */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {/* Option 1: Bank Transfer */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden h-full">
                  {/* Sleek header */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
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
                        <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-200">
                          <p className="text-gray-800 font-medium text-sm">{bankAccount.bankName}</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">Account Name</label>
                        <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-200">
                          <p className="text-gray-800 font-medium text-sm">{bankAccount.accountName}</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">Account Number</label>
                        <div className="flex items-center justify-between gap-3 bg-gray-50/80 p-3.5 rounded-xl border border-gray-200">
                          <p className="text-gray-800 font-medium font-mono text-sm">{bankAccount.accountNumber}</p>
                          <button
                            onClick={handleCopyAccountNumber}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-xl transition-all text-sm font-medium shrink-0"
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
                        <div className="bg-gray-50/80 p-3.5 rounded-xl border border-gray-200">
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

              {/* Option 2: Card Payment with Currency Selector */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden h-full">
                  {/* Sleek header */}
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-600 px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <FiCreditCard className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white tracking-tight">Card Payment</h3>
                        <p className="text-emerald-100/90 text-sm">Secure online payment</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {paymentSuccess ? (
                      <div className="text-center py-10">
                        <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5 ring-4 ring-emerald-100">
                          <FiCheck className="w-7 h-7 text-emerald-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Thank You!</h4>
                        <p className="text-gray-500 text-sm">Your donation has been processed successfully.</p>
                        <button
                          onClick={() => setPaymentSuccess(false)}
                          className="mt-5 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors"
                        >
                          Make another donation
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleCardPayment}>
                        <div className="space-y-5">
                          {/* Currency + Amount row */}
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">
                                Currency
                              </label>
                              <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/80 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 border-transparent transition-all outline-none"
                                required
                              >
                                {currencies.map((cur) => (
                                  <option key={cur.code} value={cur.code}>
                                    {cur.name} ({cur.symbol})
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">
                                Amount *
                              </label>
                              <div className="relative">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                                  {currencies.find(c => c.code === currency)?.symbol || '$'}
                                </span>
                                <input
                                  type="number"
                                  name="amount"
                                  value={paymentDetails.amount}
                                  onChange={handleInputChange}
                                  min="1"
                                  step="0.01"
                                  required
                                  className="w-full pl-8 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/80 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                  placeholder="0.00"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Full Name */}
                          <div>
                            <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={paymentDetails.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/80 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none placeholder:text-gray-400"
                              placeholder="John Doe"
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={paymentDetails.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/80 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none placeholder:text-gray-400"
                              placeholder="you@example.com"
                            />
                          </div>

                          {/* Phone (optional) */}
                          <div>
                            <label className="block text-gray-600 text-xs font-medium uppercase tracking-wider mb-2">
                              Phone <span className="text-gray-400 font-normal normal-case">(optional)</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={paymentDetails.phone}
                              onChange={handleInputChange}
                              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/80 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none placeholder:text-gray-400"
                              placeholder="+231 ..."
                            />
                          </div>

                          {/* Submit Button */}
                          <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/30 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
                          >
                            {isProcessing ? (
                              <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Processing...</span>
                              </>
                            ) : (
                              <>
                                <FiCreditCard className="w-5 h-5" />
                                <span>Pay with Card</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Security note */}
                        <p className="text-xs text-gray-400 text-center mt-5 flex items-center justify-center gap-1.5">
                          <span className="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 flex items-center justify-center text-[10px]">🔒</span>
                          Secure payment by Flutterwave. Card details are not stored.
                        </p>
                      </form>
                    )}
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
                    icon: '🔄'
                  },
                  {
                    title: 'Corporate Partnership',
                    description: 'Partner with your company for matched donations.',
                    icon: '🤝'
                  },
                  {
                    title: 'In-Kind Donations',
                    description: 'Donate supplies, equipment, or professional services.',
                    icon: '📦'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-[0_10px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
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