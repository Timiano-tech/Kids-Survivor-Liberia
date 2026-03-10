import React from 'react';
import { FiTarget, FiUsers, FiShield, FiBookOpen } from 'react-icons/fi';

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
  { label: 'Community outreach sessions (annual target)', value: '40+', helper: 'Dialogue and awareness events with youth and caregivers.' },
  { label: 'Youth directly engaged', value: '250+', helper: 'Through clubs, trainings, and mentorship activities.' },
  { label: 'Community partners', value: '10+', helper: 'Including local leaders, structures, and service providers.' },
];

export const basePartners = [
  'Community leaders and traditional structures',
  'Local schools and youth groups',
  'Religious institutions and women’s groups',
  'County‑level government and social services',
];
