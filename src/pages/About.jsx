import { motion } from 'framer-motion';
import { 
  FiTarget, 
  FiEye, 
  FiShield,
  FiUsers,
  FiHeart,
  FiMic,
  FiTrendingUp,
  FiBarChart2,
  FiAward,
  FiCheckCircle,
  FiMapPin,
  FiHome,
  FiFileText,
  FiLinkedin,
  FiTwitter,
  FiMail
} from 'react-icons/fi';
import KSLCompany from '../assets/KSL Company.jpeg';
import KSL_Teams from '../assets/KSL_Team.jpeg';
import KSL_Teams2 from '../assets/KSL_Team2.jpeg';
import CallToAction from '../components/CallToAction';
import Mr_Steve from '../assets/Mr_Steve.jpeg';
import Mrs_Fiona from '../assets/Mrs_Fiona.jpeg';
import Mrs_Silvia from '../assets/Mrs_Silvia2.jpeg';
import CEO from '../assets/CEO.jpeg';
import ScrollToTopButton from '../components/ScrollToTop';

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

  // Team Members
  const teamMembers = [
    {
      name: "Mr. Billy Jones",
      teamImage : CEO,
      position: "Chief Executive Officer (C.E.O)",
      bio: "Billy Jones, CEO of Kids Survivor Liberia, provides strategic leadership for child-focused education, welfare, and empowerment programs, building resilience in vulnerable children."
    },
    {
      name: "Mr. Steve Darwin",
      teamImage : Mr_Steve,
      position: "Director of Country Operations",
      bio: "Mr. Steve Darwin Wald is the Director of County Operations, overseeing the implementation and management of all Kids Survivor Liberia's field programs across the country."
    },
    {
      name: "Mrs. Fiona A. Etong",
      teamImage : Mrs_Fiona,
      position: "Nigeria Representative, Social Media Manager",
      bio: "Mrs. Fiona A. Etong is the Nigeria Representative, Social Media Manager, and Partner for Kids Survivor Liberia, leading digital advocacy and partnerships for vulnerable children."
    },
    {
      name: "Mrs. Silvia T. Willie Dongon",
      teamImage : Mrs_Silvia,
      position: "Operational Advisor",
      bio: "Mrs. Silvia T. Willie Dongon serves as Operational Advisor for Kids Survivor Liberia, guiding teams in Bong County (Palala District), Suakoko, and Lofa County to enhance program effectiveness and community impact."
    }
  ];

  // Core Values
  const coreValues = [
    {
      title: "Child Protection",
      description: "We prioritize the safety, rights, and wellbeing of every child in all our programs and initiatives."
    },
    {
      title: "Youth Empowerment",
      description: "We believe in equipping young people with the skills and opportunities to shape their own futures."
    },
    {
      title: "Community Engagement",
      description: "Sustainable change begins with active participation and leadership from within the community."
    },
    {
      title: "Transparency & Accountability",
      description: "We maintain the highest standards of integrity in all our operations and reporting."
    },
    {
      title: "Sustainability",
      description: "Our programs are designed to create lasting impact that continues beyond our direct involvement."
    },
    {
      title: "Collaboration",
      description: "We work in partnership with communities, government, and organizations to maximize our impact."
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Main Header Section */}
      <header className="relative">
        {/* Background Image  */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/100 to-purple-900/40 z-10">
         
          <img 
            src={KSLCompany} 
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
              About Us
            </motion.h1>
            
            {/* Breadcrumb Text */}
            <p className="text-white/80 text-lg">
              Where Every Child's Potential Finds Protection & Purpose.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Organization Overview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-100">
               
                <img 
                  src={KSL_Teams} 
                  alt="Kids Survivor Liberia" 
                  className="w-full h-full object-cover rounded-2xl"
                loading='lazy'/>
  
              </div>
              
              {/* Text Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Kids Survivor Liberia (KSL)</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Kids Survivor Liberia (KSL) is a nationally registered, non-profit, and non-political organization dedicated to improving the lives of Liberia's most vulnerable children and youth. Founded to address the growing social, economic, and health challenges facing young people in post-war Liberia, KSL works at the intersection of child protection, youth development, and community empowerment.
                  </p>
                  <p>
                    The organization is legally incorporated under the laws of the Republic of Liberia and holds all relevant sectoral clearances from key government ministries, as well as accreditation from the Ministry of Finance and Development Planning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {/* Mission */}
            <div className="bg-blue-500 text-white rounded-2xl p-8">
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
            <div className="bg-yellow-500 text-white rounded-2xl p-8">
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

          {/* Core Values Section  */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide our actions and decisions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Meet Our Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dedicated professionals committed to making a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Team Member Image */}
                  <div className="h-64 bg-gray-100 flex items-center justify-center">

                    <img 
                      src={member.teamImage}
                      alt={member.name}
                      className="w-full h-full object-cover"
                     loading='lazy'/>
                  
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                        <FiLinkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <FiTwitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                        <FiMail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Program Areas */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Do</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive approach to youth development and child protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programAreas.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Our Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Impact</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactHighlights.map((highlight, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="bg-white p-3 rounded-lg mr-4">
                        <div className="text-blue-600">
                          {highlight.icon}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white">{highlight.title}</h4>
                    </div>
                    <p className="text-white/90">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Goals Section with Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Goals Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Goals</h2>
                <div className="space-y-4">
                  {goals.map((goal, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                        <FiCheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-gray-700">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
              
             {/* Image Section */}
              <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
               
                <img 
                  src={KSL_Teams2} 
                  alt="Kids Survivor Liberia" 
                  className="w-full h-full object-cover rounded-2xl"
                />
  
              </div>
            </div>
          </motion.div>
        </div>
        
      </main>

      <CallToAction/>
    </div>
    <ScrollToTopButton/>
    </>
  );
};

export default About;