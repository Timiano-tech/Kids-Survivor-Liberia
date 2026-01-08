import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiHome,
  FiFileText,
  FiCopy,
  FiCheck
} from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import ContactImage from '../assets/About Picture.jpeg'

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('one-time');
  const [copied, setCopied] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  // Bank Account Information (You'll fill this in)
  const bankAccount = {
    bankName: "Guaranty TrustBank (Liberia) Limited",
    accountName: "Kids Survivor Liberia",
    accountNumber: "203334045210",
    currency: "USD"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!donationAmount) {
      alert('Please select or enter a donation amount');
      return;
    }
    
    const amount = donationAmount;
    const frequency = selectedFrequency !== 'one-time' ? `every ${selectedFrequency}` : 'once';
    
    alert(`Thank you for choosing to donate $${amount} ${frequency}!\n\nPlease make a bank transfer using the account details provided below.\n\nAfter making your donation, please email the receipt to donations@ksliberia.org for tracking.`);
  };

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(bankAccount.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
              {/* Background Image  */}
                      <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-yellow-900/70 z-10">
                       
                        <img 
                          src={ContactImage} 
                          alt="Background" 
                          className="w-full h-full object-cover opacity-20"
                        />
                      </div>
       
                {/* Page Header with Breadcrumb */}
               <div className="relative z-10 py-30 text-center">
                 <div className="container mx-auto px-4">
                   
                   {/* Main Title */}
                   <motion.h1 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="text-5xl md:text-6xl font-bold text-white"
                   >
                     Donate
                   </motion.h1>
                   
                   {/* Breadcrumb Text */}
                   <p className="text-white/80 text-lg">
                     Transform Lives with a Single Transfer. Bank to Bank. Hope to Hope.
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

            {/* Bank Account Information */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="bg-blue-500 rounded-2xl p-8 text-white mb-8">
                <h2 className="text-3xl font-bold mb-2">Bank Transfer Information</h2>
                <p>Use the account details below to make your donation</p>
              </div>

              {/* Account Details Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Our Official Bank Account</h3>
                
                <div className="space-y-6">
                  {/* Bank Name */}
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Bank Name</label>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-800 font-medium">{bankAccount.bankName}</p>
                    </div>
                  </div>

                  {/* Account Name */}
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Account Name</label>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-800 font-medium">{bankAccount.accountName}</p>
                    </div>
                  </div>

                  {/* Account Number - With Copy Button */}
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Account Number</label>
                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-800 font-medium font-mono text-lg">{bankAccount.accountNumber}</p>
                      <button
                        onClick={handleCopyAccountNumber}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        {copied ? (
                          <>
                            <FiCheck className="w-4 h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <FiCopy className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Branch and Currency */}
                  <div className="grid md:grid-cols-1 gap-6">
                  
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Currency</label>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-800 font-medium">{bankAccount.currency}</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Instructions */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4">Instructions:</h4>
                  <ul className="space-y-2 text-gray-600">
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
                      Email your transfer receipt to: <strong className="ml-1"><a href="donation@ksliberia.org">donation@ksliberia.org</a></strong>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">4.</span>
                      We'll send you an official donation receipt within 7 days
                    </li>
                  </ul>
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
      <ScrollToTopButton/>
      <CallToAction/>
    </>
  );
};

export default Donate;