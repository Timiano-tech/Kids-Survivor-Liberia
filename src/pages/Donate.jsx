import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCopy,
  FiCheck,
  FiCreditCard
} from 'react-icons/fi';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
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
      <div className="min-h-screen bg-white">
        {/* Main Header Section */}
        <header className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-blue-900/70 z-10">
            <img 
              src={DonateImage} 
              alt="Image_Background" 
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
                Donate to Kids Survivor Liberia
              </motion.h1>
              <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
                Your generous support helps us protect vulnerable children, provide education, 
                and empower youth across Liberia.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Support Our Mission</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
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
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="bg-blue-500 rounded-lg p-4 text-white mb-6">
                    <h3 className="text-2xl font-bold">Bank Transfer</h3>
                    <p className="text-blue-100">Direct bank deposit</p>
                  </div>

                  {/* Account Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Bank Name</label>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <p className="text-gray-800 font-medium">{bankAccount.bankName}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Account Name</label>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <p className="text-gray-800 font-medium">{bankAccount.accountName}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Account Number</label>
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <p className="text-gray-800 font-medium font-mono text-lg">{bankAccount.accountNumber}</p>
                        <button
                          onClick={handleCopyAccountNumber}
                          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-colors text-sm"
                        >
                          {copied ? (
                            <>
                              <FiCheck className="w-3 h-3" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <FiCopy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Currency</label>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <p className="text-gray-800 font-medium">{bankAccount.currency}</p>
                      </div>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">Instructions:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">1.</span>
                        Use the account details above to make a bank transfer
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">2.</span>
                        Include your name in the transfer reference
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">3.</span>
                        Email receipt to: <a href="mailto:donate@ksliberia.org" className="text-blue-600 hover:underline">donate@ksliberia.org</a>
                      </li>
                    </ul>
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
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="bg-green-500 rounded-lg p-4 text-white mb-6">
                    <h3 className="text-2xl font-bold">Card Payment</h3>
                    <p className="text-green-100">Secure online payment</p>
                  </div>

                  {paymentSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiCheck className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
                      <p className="text-gray-600">Your donation has been processed successfully.</p>
                      <button
                        onClick={() => setPaymentSuccess(false)}
                        className="mt-4 text-blue-600 hover:underline"
                      >
                        Make another donation
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleCardPayment}>
                      <div className="space-y-4">
                        {/* Currency Selection */}
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">
                            Currency *
                          </label>
                          <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                            required
                          >
                            {currencies.map((cur) => (
                              <option key={cur.code} value={cur.code}>
                                {cur.name} ({cur.symbol})
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Amount */}
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">
                            Donation Amount *
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
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
                              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              placeholder="0.00"
                            />
                          </div>
                        </div>

                        {/* Full Name */}
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={paymentDetails.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="John Doe"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={paymentDetails.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="you@example.com"
                          />
                        </div>

                        {/* Phone (optional) */}
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-1">
                            Phone Number (optional)
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={paymentDetails.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="+231 ..."
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isProcessing}
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <p className="text-xs text-gray-500 text-center mt-4">
                        🔒 Secure payment powered by Flutterwave. We do not store your card details.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Other Ways to Support */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mt-16 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Other Ways to Support</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Monthly Giving',
                    description: 'Become a sustaining donor with monthly bank transfers'
                  },
                  {
                    title: 'Corporate Partnership',
                    description: 'Partner with your company for matched donations'
                  },
                  {
                    title: 'In-Kind Donations',
                    description: 'Donate supplies, equipment, or services'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
      <ScrollToTopButton />
      <CallToAction />
    </>
  );
};

export default Donate;