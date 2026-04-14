import montserradoMap from '../assets/maps/Montserrado_County_Flag__82529.jpg';
import margibiMap from '../assets/maps/Margibi_County_Flag__96882.jpg';
import bongMap from '../assets/maps/Bong_County_Flag__02962.jpg';
import nimbaMap from '../assets/maps/Nimba_County_Flag__88156.jpg';
import lofaMap from '../assets/maps/Lofa_County_Flag__05270.jpg';
import grandBassaMap from '../assets/maps/Grand_Bassa_County_Flag__03183.jpg';
import grandCapeMountMap from '../assets/maps/Grand_Cape_Mount_County_Flag__94537.jpg';
import grandGedehMap from '../assets/maps/Grand_Gedeh_County_Flag__51143.jpg';
import grandKruMap from '../assets/maps/Grand_Kru_County_Flag__87625.jpg';
import marylandMap from '../assets/maps/Maryland_County_Flag__75756.jpg';
import riverGeeMap from '../assets/maps/River_Gee_County_Flag__72825.jpg';
import rivercessMap from '../assets/maps/Rivercess_County_Flag__90253.jpg';
import sinoeMap from '../assets/maps/Sinoe_County_Flag__60253.jpg';
import gbarpoluMap from '../assets/maps/Gbarpolu_County_Flag__71750.jpg';
import bomiMap from '../assets/maps/Bomi_County_Flag__77534.jpg';

export const HEADQUARTERS = {
  address: 'City of Light Community, Barclay Avenue, 15th Street, Sinkor, Monrovia, Montserrado',
  keyFunctions: 'National program coordination, policy alignment, and strategic leadership.',
};

export const COUNTIES = [
  {
    id: 'montserrado',
    name: 'Montserrado County',
    tagline: 'Urban outreach, youth recovery, and community resilience.',
    mapImage: montserradoMap,
    isActive: true,
    images: [],
    office: {
      name: 'Sinkor Office',
      focusArea: 'Education & Skills',
      coordinator: 'Welleh Bropleh',
      phone: '+231779200089',
    },
  },
  {
    id: 'margibi',
    name: 'Margibi County',
    tagline: 'School-based prevention and family strengthening initiatives.',
    mapImage: margibiMap,
    isActive: true,
    images: [],
    office: {
      name: 'Kakata Office',
      focusArea: 'Prevention & Family Support',
      coordinator: 'Regional Coordinator',
      phone: '+231XXXXXXX',
    },
  },
  {
    id: 'bong',
    name: 'Bong County',
    tagline: 'Rural outreach and drug abuse prevention in hard‑to‑reach communities.',
    mapImage: bongMap,
    isActive: true,
    images: [],
    office: {
      name: 'Gbarnga City Office',
      focusArea: 'Rehabilitation & Reintegration',
      coordinator: 'Mr. Paul Bennie',
      phone: '+231880365232',
    },
  },
  {
    id: 'nimba',
    name: 'Nimba County',
    tagline: 'Cross-community youth engagement and livelihood skills.',
    mapImage: nimbaMap,
    isActive: true,
    images: [],
    office: {
      name: 'Gompa City Office',
      focusArea: 'Drug Prevention & Youth Empowerment',
      coordinator: 'Mr. Janjay Cole',
      phone: '+231880919921',
    },
  },
  {
    id: 'lofa',
    name: 'Lofa County',
    tagline: 'Community protection and resilience building for vulnerable groups.',
    mapImage: lofaMap,
    isActive: true,
    images: [],
    office: {
      name: 'Voinjama City Office',
      focusArea: 'Peacebuilding & Partnerships',
      coordinator: 'Mrs. Silvia T. Willie Dongon',
      phone: '+231886764940',
    },
  },
  {
    id: 'grand-bassa',
    name: 'Grand Bassa County',
    tagline: 'Coastal community outreach and adolescent protection initiatives.',
    mapImage: grandBassaMap,
    isActive: true,
    images: [],
    office: {
      name: 'Buchanan City Office',
      focusArea: 'Gender & Social Inclusion',
      coordinator: 'Mr. Jackson David',
      phone: '+231886713662',
    },
  },
  {
    id: 'grand-cape-mount',
    name: 'Grand Cape Mount County',
    tagline: 'Border-area drug prevention and youth leadership support.',
    mapImage: grandCapeMountMap,
    isActive: false,
    images: [],
    office: null,
  },
  {
    id: 'grand-gedeh',
    name: 'Grand Gedeh County',
    tagline: 'Post-conflict healing, protection, and community cohesion.',
    mapImage: grandGedehMap,
    isActive: true,
    images: [],
    office: {
      name: 'Zwedru Office',
      focusArea: 'Community Protection',
      coordinator: 'Regional Coordinator',
      phone: '+231XXXXXXX',
    },
  },
  {
    id: 'grand-kru',
    name: 'Grand Kru County',
    tagline: 'Supporting isolated communities with protection and life‑skills.',
    mapImage: grandKruMap,
    isActive: false,
    images: [],
    office: null,
  },
  {
    id: 'maryland',
    name: 'Maryland County',
    tagline: "Child protection and adolescent girls' empowerment initiatives.",
    mapImage: marylandMap,
    isActive: false,
    images: [],
    office: null,
  },
  {
    id: 'rivergee',
    name: 'River Gee County',
    tagline: 'Strengthening community structures for prevention and referrals.',
    mapImage: riverGeeMap,
    isActive: false,
    images: [],
    office: null,
  },
  {
    id: 'rivercess',
    name: 'Rivercess County',
    tagline: 'Engaging riverine communities in prevention and livelihoods.',
    mapImage: rivercessMap,
    isActive: false,
    images: [],
    office: null,
  },
  {
    id: 'sinoe',
    name: 'Sinoe County',
    tagline: 'Drug demand reduction and youth life‑skills programming.',
    mapImage: sinoeMap,
    isActive: false,
    images: [],
    office: null,
  },
  {
    id: 'gbarpolu',
    name: 'Gbarpolu County',
    tagline: 'Working with mining and forest communities on prevention and care.',
    mapImage: gbarpoluMap,
    isActive: false,
    images: [],
    office: null,
  },
  {
    id: 'bomi',
    name: 'Bomi County',
    tagline: 'Grassroots community mobilization and youth inclusion.',
    mapImage: bomiMap,
    isActive: false,
    images: [],
    office: null,
  },
];

export const COUNTY_BY_ID = COUNTIES.reduce((acc, county) => {
  acc[county.id] = county;
  return acc;
}, {});

