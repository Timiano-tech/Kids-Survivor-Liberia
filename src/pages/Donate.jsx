import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiHome,
  FiFileText,
  FiDollarSign
} from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('one-time');

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission here
    console.log('Donation:', { amount: donationAmount, frequency: selectedFrequency });
    alert('Thank you for your generous donation!');
    setDonationAmount('');
  };

  const donationOptions = [
    {
      title: 'Child Protection',
      amount: '25',
      description: 'Provides a month of protection services for vulnerable children',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Education Support',
      amount: '50',
      description: 'Covers school supplies and educational materials for a year',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      title: 'Youth Empowerment',
      amount: '100',
      description: 'Provides vocational training and skills development',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Main Header Section */}
      <header className="relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
          {/* You can replace this with your background image:
          <img 
            src="/path-to-your-donate-background.jpg" 
            alt="Donate Background" 
            className="w-full h-full object-cover opacity-20"
          />
          */}
        </div>

        {/* Page Header with Breadcrumb */}
        <div className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-white/90 mb-6">
              <FiHome className="w-4 h-4" />
              <span>/</span>
              <FiFileText className="w-4 h-4" />
              <span>Pages</span>
              <span>/</span>
              <span className="text-white font-medium">Donate</span>
            </div>
            
            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Make a Donation
            </motion.h1>
            
            {/* Breadcrumb Text */}
            <p className="text-white/80 text-lg">
              Home / Pages / Donate
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

          {/* Donation Impact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {donationOptions.map((option, index) => (
              <div
                key={index}
                className={`${option.bgColor} border ${option.borderColor} rounded-2xl p-8 hover:shadow-xl transition-shadow`}
              >
                <div className="text-center mb-6">
                  <div className={`inline-block p-4 rounded-full ${option.bgColor} border ${option.borderColor} mb-4`}>
                    <FiDollarSign className={`w-8 h-8 ${option.textColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{option.title}</h3>
                  <div className={`text-3xl font-bold ${option.textColor} mb-2`}>${option.amount}</div>
                  <p className="text-gray-600">{option.description}</p>
                </div>
                <button
                  onClick={() => setDonationAmount(option.amount)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    donationAmount === option.amount
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-800 border border-gray-300 hover:border-gray-800'
                  }`}
                >
                  {donationAmount === option.amount ? 'Selected' : 'Select This Amount'}
                </button>
              </div>
            ))}
          </motion.div>

          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
                <h2 className="text-3xl font-bold mb-2">Complete Your Donation</h2>
                <p>Fill in your details to make a secure donation</p>
              </div>

              {/* Form Content */}
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Amount Selection */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Select Your Amount</h3>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        {presetAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => setDonationAmount(amount.toString())}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${
                              donationAmount === amount.toString()
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      
                      <div className="relative max-w-xs">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">$</span>
                        <input
                          type="number"
                          placeholder="Enter custom amount"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min="1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donation Frequency */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Donation Frequency</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { value: 'one-time', label: 'One Time' },
                        { value: 'monthly', label: 'Monthly' },
                        { value: 'quarterly', label: 'Quarterly' },
                        { value: 'yearly', label: 'Yearly' }
                      ].map((frequency) => (
                        <button
                          key={frequency.value}
                          type="button"
                          onClick={() => setSelectedFrequency(frequency.value)}
                          className={`py-3 rounded-lg font-medium transition-all ${
                            selectedFrequency === frequency.value
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {frequency.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800">Your Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">First Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Last Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Transparency Information */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-3">Where Your Money Goes</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span>85% directly supports our programs</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span>10% supports operational costs</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <span>5% supports fundraising efforts</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      We are committed to transparency. Detailed financial reports are available upon request.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={!donationAmount}
                      className={`w-full py-4 rounded-lg text-lg font-semibold transition-all ${
                        donationAmount
                          ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {donationAmount
                        ? `Donate $${donationAmount} ${selectedFrequency !== 'one-time' ? `Every ${selectedFrequency}` : 'Today'}`
                        : 'Select an Amount to Donate'}
                    </button>
                    <p className="text-gray-500 text-sm mt-3 text-center">
                      Your donation is secure and tax-deductible
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
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
                  description: 'Become a sustaining donor with automatic monthly contributions'
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-gray-800 mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
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

export default Donate;

