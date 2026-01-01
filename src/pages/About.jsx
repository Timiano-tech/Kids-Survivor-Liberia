import { motion } from 'framer-motion';
import { 
  FiTarget, 
  FiEye, 
  FiFlag, 
  FiLayers,
  FiShield,
  FiUsers,
  FiHeart,
  FiBriefcase,
  FiMic,
  FiTrendingUp,
  FiActivity,
  FiBarChart2,
  FiAward,
  FiCheckCircle,
  FiMapPin
} from 'react-icons/fi';

const About = () => {
  // Core Program Areas
  const programAreas = [
    {
      icon: <FiMic />,
      title: "Awareness & Prevention",
      description: "School-based and community campaigns, radio programs, public dialogues, and distribution of educational materials on drug abuse, child rights, and public health."
    },
    {
      icon: <FiTrendingUp />,
      title: "Youth Empowerment & Skills Development",
      description: "Vocational, agricultural, and digital training, entrepreneurship support, and job placement initiatives."
    },
    {
      icon: <FiHeart />,
      title: "Counseling, Rehabilitation & Reintegration",
      description: "Psychosocial support, family counseling, mentorship, and community reintegration of at-risk youth."
    },
    {
      icon: <FiUsers />,
      title: "Advocacy & Partnerships",
      description: "Working closely with government ministries, local authorities, law enforcement, civil society, and international partners to strengthen policies and programs."
    },
    {
      icon: <FiBarChart2 />,
      title: "Research & Monitoring",
      description: "Collecting data on youth issues to inform policy and measure the impact of interventions."
    }
  ];

  // Objectives
  const objectives = [
    "Prevent the initiation of drug and substance abuse among school-aged children and out-of-school youth.",
    "Reduce the rate of school dropouts by creating positive alternatives and support systems.",
    "Provide life skills, vocational training, and employment pathways to at-risk youth.",
    "Build community capacity to identify, support, and reintegrate vulnerable children and young people.",
    "Contribute to the achievement of national and international development priorities."
  ];

  // Goals
  const goals = [
    "Reduce the prevalence and impact of drug and substance abuse among youth.",
    "Promote the rights, protection, and wellbeing of children and vulnerable populations.",
    "Build sustainable pathways for young people to acquire education, vocational skills, and gainful employment.",
    "Strengthen collaboration between communities, government, and security institutions to address social ills affecting children and youth."
  ];

  // Impact Highlights
  const impactHighlights = [
    {
      icon: <FiMapPin />,
      title: "Multi-County Reach",
      description: "Conducted awareness campaigns in Bong, Nimba, Margibi, Grand Bassa, Grand Cape Mount, Bomi, and Montserrado Counties."
    },
    {
      icon: <FiUsers />,
      title: "Thousands Reached",
      description: "Direct engagement with thousands of students, parents, and community leaders through various programs."
    },
    {
      icon: <FiShield />,
      title: "Child Protection",
      description: "Implemented comprehensive protection systems for vulnerable children across multiple communities."
    },
    {
      icon: <FiAward />,
      title: "National Recognition",
      description: "Accredited by multiple government ministries and recognized as a leading CSO in youth development."
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Kids Survivor Liberia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming lives through protection, empowerment, and sustainable development
          </p>
        </motion.div>

        {/* Background Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <FiBriefcase className="w-8 h-8 text-blue-600" />
              </div>
              Background
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold">Kids Survivor Liberia (KSL)</span> is a nationally registered, non-profit, and non-political organization dedicated to improving the lives of Liberia's most vulnerable children and youth. Founded to address the growing social, economic, and health challenges facing young people in post-war Liberia, KSL works at the intersection of child protection, youth development, and community empowerment.
              </p>
              
              <p>
                The organization is legally incorporated under the laws of the Republic of Liberia and holds all relevant sectoral clearances from the Ministries of Gender, Health, Education, Agriculture, Internal Affairs, Justice, and other line ministries, as well as accreditation from the Ministry of Finance and Development Planning.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
                <p className="font-semibold text-blue-800 mb-2">Important Note:</p>
                <p className="text-blue-700">
                  Kids Survivor Liberia (KSL) is not a governmental body and does not pursue or engage in political roles or agendas. Likewise, while the organization works with communities and social groups, KSL itself is not simply a social group—it is a formally registered civil society organization (CSO) with structured programs, accountability systems, and a mandate to provide humanitarian and developmental services.
                </p>
              </div>
              
              <p className="font-semibold text-gray-800">
                KSL is a not-for-profit institution that operates strictly for humanitarian and social development purposes—seeking the salvation, dignity, and life-changing transformation of children and youth in Liberia and across the globe.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-xl mr-4">
                <FiTarget className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To restore hope, dignity, and opportunity to vulnerable children and youth in Liberia by providing prevention, rehabilitation, empowerment, and reintegration services that foster self-reliance and positive citizenship.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-xl mr-4">
                <FiEye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg leading-relaxed">
              A Liberia where every child and young person lives free from abuse, drugs, and neglect and is equipped with the skills, knowledge, and opportunities to reach their full potential.
            </p>
          </div>
        </motion.div>

        {/* Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="bg-green-100 p-3 rounded-xl mr-4">
                <FiFlag className="w-8 h-8 text-green-600" />
              </div>
              Goals and Aims
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <FiCheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-700">{goal}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Program Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Core Program Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to youth development and child protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programAreas.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Objectives Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <div className="bg-white/20 p-3 rounded-xl mr-4">
                <FiLayers className="w-8 h-8" />
              </div>
              Our Objectives
            </h2>
            
            <div className="space-y-4">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-white p-2 rounded-lg mr-4 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-white text-lg">{objective}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/90">
                <span className="font-semibold">Development Alignment:</span> Contributing to the achievement of national and international development priorities including the Government of Liberia's ARREST Agenda and the UN Sustainable Development Goals.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Impact to Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="bg-orange-100 p-3 rounded-xl mr-4">
                <FiActivity className="w-8 h-8 text-orange-600" />
              </div>
              Impact to Date
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Major Achievements</h3>
              <p className="text-gray-700 mb-6">
                Conducted multi-county "Say No to Drugs" awareness campaigns reaching thousands of students, parents, and community leaders in Bong, Nimba, Margibi, Grand Bassa, Grand Cape Mount, Bomi, and Montserrado Counties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {impactHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <div className="text-blue-600">
                        {highlight.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">{highlight.title}</h4>
                  </div>
                  <p className="text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Legal Status Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Legal Status & Accreditation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-2">✅ Nationally registered under Liberian law</p>
              <p className="mb-2">✅ Accredited by Ministry of Finance & Development Planning</p>
              <p>✅ Sectoral clearances from multiple government ministries</p>
            </div>
            <div>
              <p className="mb-2">✅ Non-profit, non-political organization</p>
              <p className="mb-2">✅ Formal Civil Society Organization (CSO) status</p>
              <p>✅ Structured programs with accountability systems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;