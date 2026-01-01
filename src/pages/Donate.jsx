import { useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-600">
            Your support helps us reach more children and build a better future for Liberia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">Protect a Child</h3>
            <p className="text-gray-600 mb-4">$25 provides a month of protection services</p>
            <button
              onClick={() => setDonationAmount('25')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Select
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-3">Educate a Child</h3>
            <p className="text-gray-600 mb-4">$50 covers school supplies for a year</p>
            <button
              onClick={() => setDonationAmount('50')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Select
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-bold mb-3">Empower Youth</h3>
            <p className="text-gray-600 mb-4">$100 provides vocational training</p>
            <button
              onClick={() => setDonationAmount('100')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Select
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6">Donation Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Quick Amounts */}
            <div>
              <label className="block text-gray-700 mb-3">Quick Select Amount ($)</label>
              <div className="flex flex-wrap gap-3">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setDonationAmount(amount.toString())}
                    className={`px-4 py-2 rounded-lg border ${
                      donationAmount === amount.toString()
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-100 text-gray-700 border-gray-300'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="Other"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-32"
                  />
                </div>
              </div>
            </div>

            {/* Donation Frequency */}
            <div>
              <label className="block text-gray-700 mb-3">Donation Frequency</label>
              <div className="flex space-x-4">
                {['one-time', 'monthly', 'quarterly', 'yearly'].map((frequency) => (
                  <label key={frequency} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      checked={selectedFrequency === frequency}
                      onChange={() => setSelectedFrequency(frequency)}
                      className="text-blue-600"
                    />
                    <span className="capitalize">{frequency.replace('-', ' ')}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Donor Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Where Your Donation Goes</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ 85% directly supports our programs</li>
                <li>✓ 10% supports operational costs</li>
                <li>✓ 5% supports fundraising efforts</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                We are transparent about our finances. Annual reports available upon request.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg"
            >
              Donate ${donationAmount || '0'} {selectedFrequency !== 'one-time' && `per ${selectedFrequency}`}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Donate;