import React from 'react';
import { FiTarget, FiUsers, FiShield, FiBookOpen, FiActivity, FiBriefcase, FiHeart, FiTrendingUp } from 'react-icons/fi';

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
      'Urban drug abuse prevention and rehabilitation',
      'Slum community outreach and youth recovery',
      'Vocational training integration for affected youth',
      'Strengthening urban resilience networks'
    ],
    programs: [
      {
        icon: <FiActivity className="w-5 h-5" />,
        title: 'Urban Recovery Initiative',
        description: 'Targeted interventions in Monrovia slums focusing on rehabilitation and safe spaces for recovering addicts.'
      },
      {
        icon: <FiBriefcase className="w-5 h-5" />,
        title: 'Skills for the City',
        description: 'Vocational training and job placement services adapted for the urban job market.'
      }
    ],
    stats: [
      { label: 'Urban youths supported yearly', value: '500+', helper: 'Focus on high-risk neighborhoods.' },
      { label: 'Rehabilitation referrals', value: '85+', helper: 'Connecting individuals to care centers.' },
      { label: 'Active urban partners', value: '25+', helper: 'Local NGOs, clinics, and government agencies.' },
    ],
    partners: ['Monrovia City Corporation', 'Urban Youth Initiatives', 'Local Health Clinics', 'National Police (Community Div)']
  },
  'margibi': {
    focusAreas: [
      'School-based drug prevention programs',
      'Family strengthening and counseling',
      'Adolescent peer-to-peer mentorship',
      'Parent-teacher association mobilization'
    ],
    programs: [
      {
        icon: <FiBookOpen className="w-5 h-5" />,
        title: 'Safe Schools Program',
        description: 'Implementing anti-drug curricula and establishing peer support groups within high schools.'
      },
      {
        icon: <FiHeart className="w-5 h-5" />,
        title: 'Family Strengthening',
        description: 'Workshops for parents and guardians on early detection and supporting resilient children.'
      }
    ],
    stats: [
      { label: 'Schools engaged', value: '15+', helper: 'Partnering across the county educational system.' },
      { label: 'Families counseled', value: '120+', helper: 'Through community town halls and direct outreach.' },
      { label: 'Student ambassadors', value: '50+', helper: 'Trained to lead peer-to-peer dialogues.' }
    ]
  },
  'bong': {
    focusAreas: [
      'Rural outreach to hard-to-reach communities',
      'Integration of substance abuse awareness in agriculture',
      'Capacity building for rural health workers',
      'Community-led resistance against drug trafficking'
    ],
    programs: [
      {
        icon: <FiTrendingUp className="w-5 h-5" />,
        title: 'Rural Resilience Workshops',
        description: 'Mobile teams reaching isolated villages to deliver education on the dangers of substance abuse.'
      },
      {
        icon: <FiUsers className="w-5 h-5" />,
        title: 'Agri-Youth Engagement',
        description: 'Combining agricultural training with life-skills and prevention education for rural youth.'
      }
    ]
  },
  'nimba': {
    focusAreas: [
      'Cross-community dialogue and youth engagement',
      'Cross-border drug trafficking awareness',
      'Livelihood skills and trade empowerment',
      'Inter-ethnic youth cohesion building'
    ],
    programs: [
      {
        icon: <FiUsers className="w-5 h-5" />,
        title: 'Border Awareness Campaign',
        description: 'Educating youth on the risks associated with cross-border illicit trade and substance abuse.'
      },
      {
        icon: <FiBriefcase className="w-5 h-5" />,
        title: 'Trade Skills for Youth',
        description: 'Equipping young people with marketable skills in major hubs like Gompa City to deter involvement in drugs.'
      }
    ],
    stats: [
      { label: 'Cross-border campaigns', value: '12+', helper: 'Conducted annually in border towns.' },
      { label: 'Youth engaged in trade skills', value: '300+', helper: 'Active participants in Gompa and Sanniquellie.' },
    ]
  },
  'lofa': {
    focusAreas: [
      'Protection of vulnerable groups in post-conflict zones',
      'Community resilience and peacebuilding',
      'Agricultural livelihood alternatives',
      'Support systems for elderly and widows'
    ],
    programs: [
      {
        icon: <FiShield className="w-5 h-5" />,
        title: 'Vulnerable Groups Protection',
        description: 'Establishing community watch teams and referral systems to protect widows, elderly, and at-risk youth.'
      },
      {
        icon: <FiTarget className="w-5 h-5" />,
        title: 'Peacebuilding Dialogues',
        description: 'Conducting inter-community dialogues to resolve conflicts and build resilience against drug infiltration.'
      }
    ]
  },
  'grand-bassa': {
    focusAreas: [
      'Coastal community outreach and sensitization',
      'Adolescent protection in port areas',
      'Countering drug influx through community vigilance',
      'Economic empowerment for coastal youth'
    ],
    programs: [
      {
        icon: <FiShield className="w-5 h-5" />,
        title: 'Coastal Protection Network',
        description: 'Mobilizing beachfront communities to identify and resist the illicit influx of substances.'
      },
      {
        icon: <FiTarget className="w-5 h-5" />,
        title: 'Port-City Youth Safe Spaces',
        description: 'Creating positive recreational environments for adolescents in Buchanan.'
      }
    ]
  },
  'grand-cape-mount': {
    focusAreas: [
      'Border-area drug prevention and monitoring',
      'Youth leadership and civic engagement',
      'Artisanal mining community sensitization'
    ]
  },
  'grand-gedeh': {
    focusAreas: [
      'Post-conflict healing and psychosocial support',
      'Community cohesion and dispute resolution',
      'Protection schemes for vulnerable youth'
    ],
    programs: [
      {
        icon: <FiHeart className="w-5 h-5" />,
        title: 'Psychosocial Support Networks',
        description: 'Creating peer support groups for trauma healing and recovery from substance abuse.'
      },
      {
        icon: <FiUsers className="w-5 h-5" />,
        title: 'Youth Cohesion Initiative',
        description: 'Engaging young people in sports and community service to foster unity and positive lifestyles.'
      }
    ]
  },
  'grand-kru': {
    focusAreas: [
      'Support for isolated communities',
      'Life-skills education for rural youth',
      'Establishing basic protection referral pathways'
    ]
  },
  'maryland': {
    focusAreas: [
      'Child protection and rights advocacy',
      'Empowerment of adolescent girls',
      'Border sensitization regarding drug transit',
      'School-based retention programs'
    ],
    programs: [
      {
        icon: <FiHeart className="w-5 h-5" />,
        title: 'Girls Empowerment Circles',
        description: 'Safe spaces for adolescent girls focusing on reproductive health, education, and substance avoidance.'
      }
    ]
  },
  'rivergee': {
    focusAreas: [
      'Strengthening local community protection structures',
      'Prevention education in hard-to-reach towns',
      'Establishing health referral mechanisms'
    ]
  },
  'rivercess': {
    focusAreas: [
      'Engaging riverine and fishing communities',
      'Livelihood diversification for youth',
      'Substance abuse prevention in logging areas'
    ],
    programs: [
      {
        icon: <FiUsers className="w-5 h-5" />,
        title: 'Riverine Outreach',
        description: 'Using specialized mobile teams to reach fishing and logging camps with prevention education.'
      }
    ]
  },
  'sinoe': {
    focusAreas: [
      'Drug demand reduction in concession areas',
      'Youth life-skills and vocational programming',
      'Community-led natural resource management education'
    ]
  },
  'gbarpolu': {
    focusAreas: [
      'Working with mining communities on prevention',
      'Health and safety education regarding substance use',
      'Child labor and protection concerns'
    ],
    programs: [
      {
        icon: <FiShield className="w-5 h-5" />,
        title: 'Mining Camp Sensitization',
        description: 'Targeted dialogues in artisanal mining hubs addressing the heavy prevalence of substance use.'
      }
    ]
  },
  'bomi': {
    focusAreas: [
      'Grassroots community mobilization',
      'Youth inclusion and local governance',
      'Rebuilding post-Ebola/COVID resilience systems'
    ]
  }
};
