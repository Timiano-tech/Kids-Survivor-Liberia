import { FiTarget, FiUsers, FiShield, FiBookOpen, FiActivity, FiBriefcase, FiHeart, FiTrendingUp, FiCheckCircle, FiPlusCircle, FiStar } from 'react-icons/fi';

// Asset Imports for Featured Activities
import montserradoImg from '../assets/mons.jpeg';
import CampaignImage from '../assets/Campaign3.jpeg';
import MedicalImage from '../assets/Free_Medicals9.jpeg';
import KSL_School_Img from '../assets/KSL_School.jpeg';
import SlumRecoveryImg from '../assets/Community_Children.jpeg';
import StudentsImpacted from '../assets/Students Impacted.jpeg';
import HelpingChildren from '../assets/Helping Children.jpeg';
import SuccessStory1 from '../assets/Success_Story.jpeg';
import SuccessStory2 from '../assets/Success_story2.jpeg';
import SuccessStory3 from '../assets/Success_Story3.jpeg';

export const baseFocusAreas = [
  'Drug abuse prevention and public awareness campaigns',
  'Youth leadership, mentorship, and life-skills development',
  'Protection and empowerment of adolescent girls and young women',
  'Support to widows, elderly men, and other highly vulnerable groups',
  'Community mobilization, peacebuilding, and social cohesion',
];

export const basePrograms = [
  {
    icon: <FiTarget className="w-5 h-5" />,
    title: 'Drug Prevention & Awareness',
    description:
      'Community dialogues, school talks, and peer education sessions to reduce drug use and stigma.',
  },
  {
    icon: <FiUsers className="w-5 h-5" />,
    title: 'Youth Empowerment',
    description:
      'Youth clubs, mentorship, and basic livelihood skills that promote positive alternatives to drugs.',
  },
  {
    icon: <FiShield className="w-5 h-5" />,
    title: 'Protection & Case Support',
    description:
      'Referral pathways, basic psychosocial support, and linkages to services for at‑risk individuals.',
  },
  {
    icon: <FiBookOpen className="w-5 h-5" />,
    title: 'Education Support',
    description:
      'Back‑to‑school support and non‑formal learning spaces for children and adolescents.',
  },
];

export const baseStats = [
  { label: 'Community outreach sessions (annual target)', value: '40+', helper: 'Dialogue and awareness events with youth.' },
  { label: 'Youth directly engaged', value: '250+', helper: 'Through clubs, trainings, and mentorship activities.' },
  { label: 'Community partners', value: '10+', helper: 'Including local leaders, structures, and service providers.' },
];

export const basePartners = [
  'Community leaders and traditional structures',
  'Local schools and youth groups',
  'Religious institutions and women’s groups',
  'County‑level government and social services',
];

export const countySpecificData = {
  'montserrado': {
    focusAreas: [
      'Urban drug abuse prevention and community rehabilitation',
      'Outreach in high-density slum communities and youth recovery',
      'Vocational training integration for vulnerable and street-connected youth',
      'Strengthening urban resilience networks and institutional partnerships'
    ],
    programs: [
      {
        icon: <FiActivity className="w-5 h-5" />,
        title: 'Monrovia Slum Recovery Initiative',
        description: 'Direct health interventions and community-based safe spaces for youth in transition from substance use in Clara Town, West Point, and surrounding areas.'
      },
      {
        icon: <FiBriefcase className="w-5 h-5" />,
        title: 'Urban Livelihoods & Skills',
        description: 'Accelerated vocational training in high-demand urban trades including beauty care, tailoring, and basic computer studies.'
      }
    ],
    stats: [
      { label: 'Urban youths supported yearly', value: '1,200+', helper: 'Focus on high-risk neighborhoods in Monrovia.' },
      { label: 'Rehabilitation referrals', value: '150+', helper: 'Directly linked to partner medical and recovery centers.' },
      { label: 'Active urban partners', value: '35+', helper: 'Including MCC, clinics, and grassroots organizations.' },
    ],
    partners: ['Monrovia City Corporation (MCC)', 'Federation of Liberian Youth', 'Local Health Clinics', 'LNP Community Division'],
    successStories: [
      {
        name: 'Monrovia Slum Recovery',
        category: 'Urban Intervention',
        story: 'Our urban outreach has successfully reintegrated over 150 youth from high-density communities back into productive life through vocational training.',
        icon: <FiStar className="w-6 h-6" />
      }
    ],
    featuredActivities: [
      {
        title: 'Monrovia Slum Recovery Initiative',
        excerpt: 'Transforming lives in Clara Town and West Point through direct health interventions and community-based support.',
        image: SlumRecoveryImg,
        date: 'Ongoing 2026',
        category: 'Urban Outreach'
      }
    ]
  },
  'margibi': {
    focusAreas: [
      'Intensive school-based drug prevention programs',
      'Holistic family strengthening and psychosocial counseling',
      'Adolescent peer-to-peer mentorship and leadership development',
      'PTA mobilization for community-led prevention'
    ],
    programs: [
      {
        icon: <FiBookOpen className="w-5 h-5" />,
        title: 'Safe Schools Program',
        description: 'Establishing anti-drug clubs and implementing survival-themed life skills curricula in 20+ schools across Kakata and Harbel.'
      },
      {
        icon: <FiHeart className="w-5 h-5" />,
        title: 'Family Resilience Workshops',
        description: 'Empowering parents with early warning detection skills and communication strategies for at-risk adolescents.'
      }
    ],
    stats: [
      { label: 'Schools engaged', value: '22+', helper: 'Active partnerships across the district school system.' },
      { label: 'Families counseled', value: '250+', helper: 'Through community engagement and home-based support.' },
      { label: 'Student ambassadors', value: '120+', helper: 'Trained to lead peer awareness and anti-drug advocacy.' }
    ],
    partners: ['Margibi School Board', 'Traditional Leaders Council', 'County Health Team'],
    featuredActivities: [
      {
        title: 'Safe Schools Program Expansion',
        excerpt: 'KSL is establishing anti-drug clubs and implementing survival-themed life skills curricula in 20+ schools across Kakata.',
        image: StudentsImpacted,
        date: 'Jan 2026',
        category: 'Education'
      }
    ]
  },
  'bong': {
    focusAreas: [
      'Rural outreach to underserved and hard-to-reach communities',
      'Substance abuse awareness integrated with agricultural training',
      'Capacity building for community health workers and local structures',
      'Youth-led advocacy against drug trafficking in transit corridors'
    ],
    programs: [
      {
        icon: <FiTrendingUp className="w-5 h-5" />,
        title: 'Rural Resilience Mobile Team',
        description: 'Dedicated outreach teams traveling to remote villages to provide education on drug prevention and psychological first aid.'
      },
      {
        icon: <FiUsers className="w-5 h-5" />,
        title: 'Agri-Impact Youth Hub',
        description: 'Linking agricultural mentorship with life-skills training to provide sustainable alternatives to negative influences.'
      }
    ],
    stats: [
      { label: 'Rural communities reached', value: '45+', helper: 'Direct engagement in remote districts.' },
      { label: 'Health workers trained', value: '60+', helper: 'Empowered with drug prevention and referral skills.' },
      { label: 'Agri-youth participants', value: '200+', helper: 'Engaged in sustainable farming and life skills.' }
    ],
    partners: ['Bong County Health Team', 'Gbarnga City Corporation', 'Local Farmer Cooperatives'],
    featuredActivities: [
      {
        title: 'Awareness Campaign in Gbarnga',
        excerpt: 'A high-impact campaign focusing on fundamental children rights and safety, reaching hundreds of families in Bong County.',
        image: CampaignImage,
        date: 'Apr 15, 2026',
        category: 'Community Outreach',
        link: '/blog'
      }
    ]
  },
  'nimba': {
    focusAreas: [
      'Market-driven trade skills and vocational empowerment',
      'Cross-border monitoring and illicit transit awareness',
      'Inter-ethnic youth cohesion and peaceful coexistence',
      'Integration of youth in sustainable agricultural value chains'
    ],
    programs: [
      {
        icon: <FiBriefcase className="w-5 h-5" />,
        title: 'Gompa Skills Hub',
        description: 'Providing market-aligned vocational training in carpentry, masonry, and mobile phone repairs for youth in commercial centers.'
      },
      {
        icon: <FiUsers className="w-5 h-5" />,
        title: 'Cross-Border Vigilance',
        description: 'Collaborating with community structures along border points to identify and report illicit drug transit while educating youth on legal risks.'
      }
    ],
    stats: [
      { label: 'Trade skills graduates', value: '450+', helper: 'Youth certified in market-ready vocational trades.' },
      { label: 'Border campaigns', value: '18+', helper: 'Focus on Loguatuo and other major entry points.' },
      { label: 'Cohesion workshops', value: '25+', helper: 'Bringing together diverse youth groups for peacebuilding.' }
    ],
    partners: ['Nimba County Administration', 'Commerce & Industry Ministry', 'Local Youth Unions'],
    successStories: [
      {
        name: 'Franklin Mondor',
        category: 'Rehabilitation & Reintegration',
        story: 'Franklin Mondor, a 41-year-old former drug dealer from Nimba County, spent over 13 years dealing drugs. After joining a KSL outreach, he has transformed his life and now seeks a trade for full community reintegration.',
        icon: <FiHeart className="w-6 h-6" />,
        image: SuccessStory2
      },
      {
        name: 'Samuel Meaway',
        category: 'Rehabilitation & Reintegration',
        story: 'Formerly known as “50,” Samuel grew up in hardship and crime. A KSL outreach offered him compassion and guidance—a turning point that helped him break free from addiction and crime.',
        icon: <FiHeart className="w-6 h-6" />,
        image: SuccessStory3
      }
    ],
    featuredActivities: [
      {
        title: 'Gompa Vocational Training Hub',
        excerpt: 'Providing market-aligned vocational training in carpentry and masonry for at-risk youth in commercial centers.',
        image: HelpingChildren,
        date: 'Mar 2026',
        category: 'Skills Training'
      }
    ]
  },
  'lofa': {
    focusAreas: [
      'Protection and inclusion of vulnerable groups in post-conflict zones',
      'Community resilience through grassroots peacebuilding',
      'Sustainable agricultural livelihoods as drug-resilience strategy',
      'Support systems for elderly, widows, and people with disabilities'
    ],
    programs: [
      {
        icon: <FiShield className="w-5 h-5" />,
        title: 'Vulnerable Advocacy Network',
        description: 'Establishing community-led protection circles that provide psychosocial support and referral pathways for at-risk populations.'
      },
      {
        icon: <FiTarget className="w-5 h-5" />,
        title: 'Peaceful Futures Dialogue',
        description: 'Facilitating town-hall meetings to address social conflict and build community resistance to drug infiltration.'
      },
      {
        icon: <FiActivity className="w-5 h-5" />,
        title: 'KSL Medical Team Outreach',
        description: 'Providing free health services and psychological first aid to at-risk youth and vulnerable individuals.'
      }
    ],
    stats: [
      { label: 'Protection circles active', value: '30+', helper: 'Grassroots groups monitoring vulnerable welfare.' },
      { label: 'Dialogue participants', value: '600+', helper: 'Community members engaged in peacebuilding.' },
      { label: 'Agri-support beneficiaries', value: '150+', helper: 'Received seeds and tools for sustainable farming.' }
    ],
    successStories: [
      {
        name: 'John Howard',
        category: 'Rehabilitation & Reintegration',
        story: 'John Howard, once a homeless drug user and criminal in Lofa County, was reached by KSL in July 2025. Though initially resistant, he joined our support network. Now the sole survivor of his original group, he is a living example of transformation and is actively rebuilding his life while supporting others.',
        icon: <FiHeart className="w-6 h-6" />,
        image: SuccessStory1
      }
    ],
    featuredActivities: [
      {
        title: 'Vulnerable Advocacy Outreach',
        excerpt: 'Establishing community-led protection circles to provide psychosocial support for at-risk populations in Lofa.',
        image: HelpingChildren, // Common asset for outreach
        date: 'Feb 2026',
        category: 'Protection'
      }
    ],
    partners: ['Lofa Women’s Network', 'Traditional Chiefs Council', 'Ministry of Internal Affairs']
  },
  'grand-bassa': {
    focusAreas: [
      'Coastal and port-area community sensitization',
      'Child and adolescent protection in high-transit zones',
      'Community-led resistance against sea-borne drug influx',
      'Empowerment and safe spaces for beachfront youth',
      'School-based retention and protection programs'
    ],
    programs: [
      {
        icon: <FiShield className="w-5 h-5" />,
        title: 'Coastal Protection Network',
        description: 'Mobilizing fishing and port communities in Buchanan to actively monitor and resist the entry of harmful substances.'
      },
      {
        icon: <FiTarget className="w-5 h-5" />,
        title: 'Youth Safe Haven - Buchanan',
        description: 'Creating positive recreational and educational hubs to deter youth from engaging in drug-related activities in port environments.'
      },
      {
        icon: <FiHeart className="w-5 h-5" />,
        title: 'Girls Empowerment Circles',
        description: 'Safe spaces for adolescent girls focusing on reproductive health, education, and substance avoidance.'
      }
    ],
    stats: [
      { label: 'Port area outreaches', value: '35+', helper: 'Targeted awareness in Buchanan and fishing hubs.' }
    ],
    featuredActivities: [
      {
        id: 1,
        title: 'Free Medical Outreach in Buchanan',
        excerpt: 'Comprehensive free medical outreach targeted at at-risk youth in Buchanan cemetery communities.',
        image: MedicalImage,
        date: 'Apr 15, 2026',
        category: 'Health & Wellbeing',
        link: '/blog'
      },
      {
        id: 2,
        title: 'KSL Primary & Elementary School',
        excerpt: 'Providing free educational opportunities for children from marginalized communities in Compound #3.',
        image: KSL_School_Img,
        date: 'Apr 04, 2026',
        category: 'Education',
        link: '/blog'
      }
    ],
    partners: ['Grand Bassa County Health Team', 'Buchanan City Corporation', 'Port Authority']
  },
  'grand-gedeh': {
    focusAreas: [
      'Post-conflict healing and community cohesion',
      'Protection of children in transit and market zones',
      'Substance abuse prevention through community dialogue',
      'Empowerment of youth through market-aligned vocational skills'
    ],
    programs: [
      {
        icon: <FiActivity className="w-5 h-5" />,
        title: 'Zwedru City Outreach',
        description: 'Intensive community sensitization and drug prevention campaigns targeting youth in commercial and transport hubs.'
      },
      {
        icon: <FiHeart className="w-5 h-5" />,
        title: 'Community Healing Circles',
        description: 'Safe spaces for dialogue and social cohesion, addressing the root causes of vulnerability and substance use.'
      }
    ],
    stats: [
      { label: 'Zwedru urban outreaches', value: '12+', helper: 'Focus on transport hubs and market places.' },
      { label: 'Youth reached in Gedeh', value: '300+', helper: 'Through community dialogues and school talks.' }
    ],
    partners: ['Grand Gedeh County Health Team', 'Zwedru Local Government', 'Traditional Council'],
    featuredActivities: [
      {
        title: 'Zwedru Community Healing Circles',
        excerpt: 'Creating safe spaces for dialogue and social cohesion, addressing root causes of vulnerability in Zwedru transport hubs.',
        image: CampaignImage, // Placeholder if specific one not available
        date: 'Ongoing 2026',
        category: 'Social Cohesion'
      }
    ]
  },
  'rivergee': {
    focusAreas: [
      'Strengthening local community protection structures',
      'Prevention education in hard-to-reach towns',
      'Establishing health referral mechanisms'
    ],
    programs: [
      {
        icon: <FiActivity className="w-5 h-5" />,
        title: 'Mobile Medical Outreach',
        description: 'The KSL medical team travels to hard-to-reach towns providing free health checkups and drug prevention education.'
      }
    ],
    partners: ['River Gee Health Team', 'Local Youth Council']
  },
  'rivercess': {
    focusAreas: [
      'Engagement with isolated riverine and fishing communities',
      'Livelihood diversification and vocational opportunities for youth',
      'Substance abuse prevention in logging and transit areas'
    ],
    programs: [
      {
        icon: <FiUsers className="w-5 h-5" />,
        title: 'Mobile Riverine Outreach',
        description: 'Utilizing specialized mobile units to reach logging camps and fishing communities with essential life skills and prevention education.'
      },
      {
        icon: <FiActivity className="w-5 h-5" />,
        title: 'Coastal Health Sensitization',
        description: 'Integrated health and anti-drug campaigns for riverine populations and fishing hubs.'
      }
    ],
    stats: [
      { label: 'Remote camps reached', value: '15+', helper: 'Outreach in hard-to-access logging and fishing zones.' }
    ],
    partners: ['Rivercess County Administration', 'Local Fishermen Association']
  },
  'sinoe': {
    focusAreas: [
      'Drug demand reduction in concession areas',
      'Youth life-skills and vocational programming',
      'Community-led natural resource management education'
    ],
    programs: [
      {
        icon: <FiActivity className="w-5 h-5" />,
        title: 'Concession Area Outreach',
        description: 'Education and prevention programs tailored for youth in various logging and mining concession areas.'
      }
    ]
  },
  'gbarpolu': {
    focusAreas: [
      'Targeted prevention education for artisanal mining communities',
      'Health, safety, and substance use awareness in mining hubs',
      'Child labor protection and educational advocacy'
    ],
    programs: [
      {
        icon: <FiShield className="w-5 h-5" />,
        title: 'Mining Hub Sensitization',
        description: 'Conducting community dialogues and peer awareness sessions in major mining centers to discourage substance abuse.'
      }
    ]
  },
  'bomi': {
    focusAreas: [
      'Grassroots community mobilization and inclusion',
      'Youth leadership and participation in local governance',
      'Building resilience systems for vulnerable youth populations'
    ],
    programs: [
      {
        icon: <FiUsers className="w-5 h-5" />,
        title: 'Bomi Youth Inclusion Project',
        description: 'Mobilizing local youth in Tubmanburg to participate in community decision-making and lead local prevention initiatives.'
      }
    ],
    stats: [
      { label: 'Community leaders engaged', value: '40+', helper: 'Traditional and local leaders supporting youth programs.' }
    ]
  },
  'grand-cape-mount': {
    focusAreas: [
      'Border-area drug prevention and illicit transit monitoring',
      'Coastal community sensitization in Robertsport area',
      'Youth leadership development and civic engagement',
      'Cross-border coordination with regional security structures'
    ],
    programs: [
      {
        icon: <FiUsers className="w-5 h-5" />,
        title: 'Border Vigilance Network',
        description: 'Collaborating with community structures near Bo Waterside to educate youth on the risks of drug trafficking.'
      },
      {
        icon: <FiTarget className="w-5 h-5" />,
        title: 'Robertsport Safe Haven',
        description: 'Establishing recreational and educational safe spaces for coastal youth to promote positive life alternatives.'
      }
    ],
    stats: [
      { label: 'Border points engaged', value: '8+', helper: 'Active awareness at key entry and unofficial transit points.' },
      { label: 'Youth ambassadors', value: '85+', helper: 'Trained in illicit transit monitoring and peer education.' }
    ],
    partners: ['Grand Cape Mount Administration', 'Joint Security Taskforce', 'Local Fishermen Council']
  },
  'grand-kru': {
    focusAreas: [
      'Protection of isolated and hard-to-reach rural communities',
      'Life-skills training for community-based youth groups',
      'Strengthening rural health referral and support mechanisms',
      'Agricultural resilience as a foundation for youth empowerment'
    ],
    programs: [
      {
        icon: <FiActivity className="w-5 h-5" />,
        title: 'Isolated Community Outreach',
        description: 'Bringing essential drug prevention education and psychosocial support to remote towns in the interior.'
      },
      {
        icon: <FiBriefcase className="w-5 h-5" />,
        title: 'Rural Life Skills Initiative',
        description: 'Empowering youth with basic entrepreneurial and survival skills tailored for the rural economy.'
      }
    ],
    stats: [
      { label: 'Remote towns reached', value: '25+', helper: 'Direct engagement in previously underserved districts.' },
      { label: 'Health referral links', value: '12+', helper: 'Active pathways for medical and psychosocial support.' }
    ],
    partners: ['Grand Kru Health Team', 'Traditional Leaders Council', 'Rural Youth Front']
  },
  'maryland': {
    focusAreas: [
      'Comprehensive child protection and school safety',
      'Empowerment circles for adolescent girls and young women',
      'Harper City youth engagement and career mentorship',
      'Regional cooperation on youth welfare and protection'
    ],
    programs: [
      {
        icon: <FiHeart className="w-5 h-5" />,
        title: 'Maryland Girls Circle',
        description: 'Dedicated safe spaces for girls focusing on reproductive health, education, and substance avoidance.'
      },
      {
        icon: <FiShield className="w-5 h-5" />,
        title: 'Harper Youth Hub',
        description: 'Providing career mentorship and drug prevention education for youth in commercial and academic centers.'
      }
    ],
    stats: [
      { label: 'Girls in support circles', value: '180+', helper: 'Direct participants in empowerment and protection programs.' },
      { label: 'Educational scholarship links', value: '45+', helper: 'Students supported with school materials and fees.' }
    ],
    partners: ['Maryland County School Board', 'Harper City Corporation', 'Maryland Women’s Association']
  }
};
