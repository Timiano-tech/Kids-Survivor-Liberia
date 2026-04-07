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
import HeaderImage from '../assets/Talking to children.jpeg';
import Mr_Steve from '../assets/team/Mr_Steve.png';
import Mrs_Fiona from '../assets/team/Mrs_Fiona.png';
import Mrs_Silvia from '../assets/team/Mrs_Silvia2.png';
import CEO from '../assets/team/CEO.png';
import Mrs_Tawah from '../assets/team/Mrs. Tawah B. John.png';
import Mrs_julie from '../assets/team/Julie Hennings.png';
import Mr_Sebastian from '../assets/team/Mr. Sebastian Stephney.png';
import Mrs_Josephine from '../assets/team/Ms. Josephine P. Wreyou.png';
import Mr_Moses from '../assets/team/Mr. Moses Dahn.png';
import Mr_Paul from '../assets/team/Mr. Paul Bennie.png';

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
        {/* Main Header Section - Premium Redesign */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl border-b border-slate-100">
          <div className="absolute inset-0 z-0">
            <img
              src={HeaderImage}
              alt="KSL Team Background"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">The People Behind KSL</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                Our Dedicated Team
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                Passionate professionals committed to transforming lives and building resilient communities across Liberia.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">

            {/* Team Members Grid - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-16 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-600 font-extrabold tracking-widest uppercase text-sm">Leadership & Staff</span>
                  <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Meet Our Experts
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Experienced professionals dedicated to creating positive change, advocating for child protection, and educating communities in Liberia.
                </p>
              </div>

              {/* RESPONSIVE GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-10">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden border border-slate-100 hover:border-blue-100 transition-all duration-500 hover:-translate-y-2 group"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/5] bg-slate-50 overflow-hidden">
                      <div className="absolute top-4 right-4 z-20">
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm border backdrop-blur-sm ${getColorClasses(getDepartmentColor(member.department))}`}>
                          <span className="mr-1">{member.department.split(' ')[0]}</span>
                        </span>
                      </div>

                      {member.image ? (
                        <div className="w-full h-full relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                            loading='lazy'
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                          <FiUser className="w-24 h-24 text-slate-300" />
                        </div>
                      )}
                    </div>

                    {/* Member Info */}
                    <div className="p-8 flex flex-col flex-grow relative">
                      <div className="absolute -top-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 border border-slate-50 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 z-10">
                        {member.icon}
                      </div>

                      <div className="mb-4 pr-10">
                        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                        <p className="text-blue-600 text-sm font-bold uppercase tracking-wide leading-snug">{member.position}</p>
                      </div>

                      <p className="text-slate-600 text-[15px] mb-6 line-clamp-4 leading-relaxed flex-grow">
                        {member.bio}
                      </p>

                      <div className="mt-auto border-t border-slate-100 pt-5">
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.slice(0, 2).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-semibold tracking-wider uppercase text-slate-500 truncate max-w-full"
                            >
                              {skill}
                            </span>
                          ))}
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
    </>
  );
};

export default OurTeam;