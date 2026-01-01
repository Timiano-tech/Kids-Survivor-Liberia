import { motion } from 'framer-motion';

const Impact = () => {
  const stats = [
    { number: '5,000+', label: 'Children Reached' },
    { number: '200+', label: 'Communities Served' },
    { number: '50+', label: 'Schools Supported' },
    { number: '100+', label: 'Youth Trained' },
  ];

  const programs = [
    {
      title: 'Child Protection',
      description: 'Establishing safe spaces and protection systems for vulnerable children'
    },
    {
      title: 'Education Support',
      description: 'Providing scholarships, school supplies, and educational programs'
    },
    {
      title: 'Youth Empowerment',
      description: 'Skills training and vocational programs for youth employment'
    },
    {
      title: 'Health & Nutrition',
      description: 'Healthcare access and nutrition programs for children'
    },
    {
      title: 'Community Development',
      description: 'Building sustainable community support systems'
    },
    {
      title: 'Advocacy',
      description: 'Promoting children rights and policy change'
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 text-blue-600"
        >
          Our Impact
        </motion.h1>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Programs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-700">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Success Story</h2>
          <p className="mb-4">
            "Thanks to KSL's education program, I was able to finish high school and 
            receive vocational training. Today, I run my own tailoring business and 
            support my family. KSL didn't just help me survive; they helped me thrive."
          </p>
          <p className="font-semibold">- Sarah, Age 19, Program Graduate</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Impact;