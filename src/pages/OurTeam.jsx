import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiUser,
  FiMail,
  FiLinkedin,
  FiTwitter,
  FiAward,
  FiUsers,
  FiTarget,
  FiHeart,
  FiBriefcase,
  FiBookOpen,
  FiShield,
  FiStar
} from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import HeaderImage from '../assets/Talking to children.jpeg';
import Mr_Steve from '../assets/Mr_Steve.png';
import Mrs_Fiona from '../assets/Mrs_Fiona.png';
import Mrs_Silvia from '../assets/Mrs_Silvia2.png';
import CEO from '../assets/CEO.png';
import Mrs_Tawah from '../assets/Mrs. Tawah B. John.png';
import Mrs_julie from '../assets/Julie Hennings.png';
import Mr_Sebastian from '../assets/Mr. Sebastian Stephney.png';
import Mrs_Josephine from '../assets/Ms. Josephine P. Wreyou.png';
import Mr_Moses from '../assets/Mr. Moses Dahn.png';
import Mr_Paul from '../assets/Mr. Paul Bennie.png';

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Billy Jones',
      position: 'Chief Executive Officer (CEO)',
      department: 'Executive Leadership',
      bio: 'Provides visionary leadership and strategic oversight for KSL\'s national initiatives, including NADAP-aligned drug abuse prevention, child protection, and youth empowerment programs. Champions child safeguarding, ethical governance, and inclusive development across Liberia.',
      expertise: ['Strategic Leadership', 'Policy Development', 'Community Engagement'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'billy.jones@ksl.org'
      },
      image: CEO,
      icon: <FiUser className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Mr. Steve Darwin Wald',
      position: 'Director of Countries Operations',
      department: 'Operations & Administration',
      bio: 'Leads operational coordination and implementation oversight across KSL\'s areas of intervention. Translates strategic objectives into effective community-responsive programs, ensuring consistent delivery of drug demand reduction, prevention, and rehabilitation initiatives.',
      expertise: ['Operations Management', 'Program Coordination', 'Community Response'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'steve.wald@ksl.org'
      },
      image: Mr_Steve,
      icon: <FiBriefcase className="w-6 h-6" />,
      color: 'purple'
    },
    {
      id: 3,
      name: 'Mrs. Fiona A. Etong',
      position: 'Nigeria Representative & Social Media Manager',
      department: 'Communications',
      bio: 'Leads digital communications and regional representation, amplifying KSL\'s mission through innovative online outreach. Strengthens public engagement for drug abuse prevention, youth empowerment, and child protection across borders.',
      expertise: ['Digital Communications', 'Social Media Strategy', 'Regional Advocacy'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'fiona.etong@ksl.org'
      },
      image: Mrs_Fiona,
      icon: <FiUsers className="w-6 h-6" />,
      color: 'teal'
    },
    {
      id: 4,
      name: 'Mrs. Silvia T. Willie Dongon',
      position: 'Operational Advisor',
      department: 'Programs',
      bio: 'Provides strategic guidance for gender-sensitive protection programs targeting adolescent girls, widows, and vulnerable elderly men. Supports operational planning and integration of best practices in social inclusion and community engagement.',
      expertise: ['Gender-Sensitive Programming', 'Social Inclusion', 'Community Engagement'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'silvia.dongon@ksl.org'
      },
      image: Mrs_Silvia,
      icon: <FiTarget className="w-6 h-6" />,
      color: 'green'
    },
    {
      id: 5,
      name: 'Mrs. Tawah B. John',
      position: 'Head of the Widows Team',
      department: 'Programs',
      bio: 'Leads initiatives promoting dignity, resilience, and socio-economic empowerment for widows and vulnerable women. Successfully organized 125 widows (ages 50-68) into structured livelihood programs including agriculture, soap making, tie-dye, and handicraft production.',
      expertise: ['Women Empowerment', 'Livelihood Development', 'Community Mobilization'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david.williams@ksl.org'
      },
      image: Mrs_Tawah,
      icon: <FiShield className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 6,
      name: 'Miss Julie Hennings',
      position: 'Adolescent Girls Program Lead',
      department: 'Programs',
      bio: 'Provides mentorship and leadership to adolescent girls across Liberia, focusing on empowerment, life skills, personal agency, and protection awareness. Guides activities that address social, economic, and protection-related vulnerabilities affecting young girls.',
      expertise: ['Girls Empowerment', 'Life Skills Training', 'Youth Protection'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'grace.thompson@ksl.org'
      },
      image: Mrs_julie,
      icon: <FiHeart className="w-6 h-6" />,
      color: 'pink'
    },
    {
      id: 7,
      name: 'Mr. Sebastian Stephney',
      position: 'Community Engagement & Education Advisor',
      department: 'Programs',
      bio: 'Provides strategic guidance on community outreach, stakeholder engagement, and youth-centered educational initiatives. Supports partnerships with communities and schools while promoting awareness and preventive education for youth empowerment and drug abuse prevention.',
      expertise: ['Community Outreach', 'Educational Initiatives', 'Stakeholder Engagement'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'peter.anderson@ksl.org'
      },
      image: Mr_Sebastian,
      icon: <FiAward className="w-6 h-6" />,
      color: 'orange'
    },
    {
      id: 8,
      name: 'Ms. Josephine P. Wreyou',
      position: 'Adolescent Girls Initiatives Lead',
      department: 'Programs',
      bio: 'Leads programs promoting the protection, empowerment, and personal development of vulnerable girls. Focuses on life skills development, mentorship, confidence building, and awareness initiatives addressing risks affecting adolescent girls.',
      expertise: ['Girls Protection', 'Mentorship', 'Life Skills Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rebecca.cooper@ksl.org'
      },
      image: Mrs_Josephine,
      icon: <FiUsers className="w-6 h-6" />,
      color: 'teal'
    },
    {
      id: 9,
      name: 'Mr. Moses Dahn',
      position: 'Principal, KSL Scholar Learning Program | Finance & Governance Advisor',
      department: 'Programs',
      bio: 'Oversees free educational support for vulnerable children aged 4-17, providing learning materials, uniforms, and feeding support. Also advises on financial oversight, accountability, and institutional strengthening for organizational sustainability.',
      expertise: ['Educational Programs', 'Financial Oversight', 'Governance'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'thomas.freeman@ksl.org'
      },
      image: Mr_Moses, 
      icon: <FiBookOpen className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 10,
      name: 'Mr. Paul Bennie',
      position: 'City Program Coordinator – Gbarnga',
      department: 'Field Operations',
      bio: 'Coordinates all KSL program activities in Gbarnga, Bong County, overseeing implementation, monitoring, and alignment with organizational objectives. Supports community engagement, local partnerships, and operational oversight for youth protection and education programs.',
      expertise: ['Program Coordination', 'Community Engagement', 'Field Operations'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'patricia.mensah@ksl.org'
      },
      image: Mr_Paul, 
      icon: <FiUsers className="w-6 h-6" />,
      color: 'purple'
    }
  ];

  const departments = [
    {
      name: 'Executive Leadership',
      count: 1,
      icon: <FiStar className="w-5 h-5" />,
      color: 'blue'
    },
    {
      name: 'Programs Management',
      count: 4,
      icon: <FiTarget className="w-5 h-5" />,
      color: 'green'
    },
    {
      name: 'Operations & Administration',
      count: 1,
      icon: <FiBriefcase className="w-5 h-5" />,
      color: 'purple'
    },
    {
      name: 'Communications',
      count: 1,
      icon: <FiUsers className="w-5 h-5" />,
      color: 'teal'
    },
    {
      name: 'Monitoring & Evaluation',
      count: 1,
      icon: <FiAward className="w-5 h-5" />,
      color: 'orange'
    },
    {
      name: 'Field Operations',
      count: 1,
      icon: <FiBookOpen className="w-5 h-5" />,
      color: 'blue'
    }
  ];

  // Function to get color classes based on color name
  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100',
      green: 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100',
      purple: 'bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100',
      yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100',
      pink: 'bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100',
      orange: 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100',
      teal: 'bg-teal-50 text-teal-600 border-teal-200 hover:bg-teal-100'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getDepartmentColor = (deptName) => {
    const dept = departments.find(d => d.name === deptName);
    return dept?.color || 'blue';
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Main Header Section */}
        <header className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-blue-900/70 z-10">
            <img 
              src={HeaderImage} 
              alt="KSL Team Background" 
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
                Our Dedicated Team
              </motion.h1>
              <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
                Passionate professionals committed to transforming lives and building resilient communities
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">   

            {/* Team Members Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Meet Our Team
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experienced professionals dedicated to creating positive change in Liberian communities
                </p>
              </div>

              {/* RESPONSIVE GRID: 1 col on mobile, 2 on tablet, 3 on small desktop, 4 on large screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    {/* RESPONSIVE IMAGE CONTAINER */}
                    {/* Using aspect-square ensures the image area scales perfectly with the width of the card */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                      <div className="absolute top-3 right-3 z-10">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${getColorClasses(getDepartmentColor(member.department))}`}>
                          <span className="mr-1">{member.department.split(' ')[0]}</span>
                        </span>
                      </div>
                      
                      {member.image ? (
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                          loading='lazy'
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
                          <FiUser className="w-20 h-20 text-gray-300" />
                        </div>
                      )}
                    </div>

                    {/* Member Info - flex-grow ensures all cards in a row have equal height if descriptions vary */}
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-gray-800 leading-tight">{member.name}</h3>
                        <p className="text-blue-600 text-sm font-semibold mt-1 leading-snug">{member.position}</p>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {member.bio}
                      </p>

                      <div className="mt-auto">
                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {member.expertise.slice(0, 2).map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-[11px] text-gray-500"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex gap-4">
                            <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600"><FiLinkedin /></a>
                            <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400"><FiTwitter /></a>
                            <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-red-500"><FiMail /></a>
                          </div>
                          <span className="text-[10px] font-mono text-gray-300">#{String(member.id).padStart(3, '0')}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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

export default OurTeam;