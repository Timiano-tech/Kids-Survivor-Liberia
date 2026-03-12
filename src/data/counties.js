export const COUNTIES = [
  {
    id: 'montserrado',
    name: 'Montserrado County',
    tagline: 'Urban outreach, youth recovery, and community resilience.',
    mapImage: null,
    images: [],
  },
  {
    id: 'margibi',
    name: 'Margibi County',
    tagline: 'School-based prevention and family strengthening initiatives.',
    mapImage: null,
    images: [],
  },
  {
    id: 'bong',
    name: 'Bong County',
    tagline: 'Rural outreach and drug abuse prevention in hard‑to‑reach communities.',
    mapImage: null,
    images: [],
  },
  {
    id: 'nimba',
    name: 'Nimba County',
    tagline: 'Cross-community youth engagement and livelihood skills.',
    mapImage: null,
    images: [],
  },
  {
    id: 'lofa',
    name: 'Lofa County',
    tagline: 'Community protection and resilience building for vulnerable groups.',
    mapImage: null,
    images: [],
  },
  {
    id: 'grand-bassa',
    name: 'Grand Bassa County',
    tagline: 'Coastal community outreach and adolescent protection initiatives.',
    mapImage: null,
    images: [],
  },
  {
    id: 'grand-cape-mount',
    name: 'Grand Cape Mount County',
    tagline: 'Border-area drug prevention and youth leadership support.',
    mapImage: null,
    images: [],
  },
  {
    id: 'grand-gedeh',
    name: 'Grand Gedeh County',
    tagline: 'Post-conflict healing, protection, and community cohesion.',
    mapImage: null,
    images: [],
  },
  {
    id: 'grand-kru',
    name: 'Grand Kru County',
    tagline: 'Supporting isolated communities with protection and life‑skills.',
    mapImage: null,
    images: [],
  },
  {
    id: 'maryland',
    name: 'Maryland County',
    tagline: "Child protection and adolescent girls' empowerment initiatives.",
    mapImage: null,
    images: [],
  },
  {
    id: 'rivergee',
    name: 'River Gee County',
    tagline: 'Strengthening community structures for prevention and referrals.',
    mapImage: null,
    images: [],
  },
  {
    id: 'rivercess',
    name: 'Rivercess County',
    tagline: 'Engaging riverine communities in prevention and livelihoods.',
    mapImage: null,
    images: [],
  },
  {
    id: 'sinoe',
    name: 'Sinoe County',
    tagline: 'Drug demand reduction and youth life‑skills programming.',
    mapImage: null,
    images: [],
  },
  {
    id: 'gbarpolu',
    name: 'Gbarpolu County',
    tagline: 'Working with mining and forest communities on prevention and care.',
    mapImage: null,
    images: [],
  },
  {
    id: 'bomi',
    name: 'Bomi County',
    tagline: 'Grassroots community mobilization and youth inclusion.',
    mapImage: null,
    images: [],
  },
];

export const COUNTY_BY_ID = COUNTIES.reduce((acc, county) => {
  acc[county.id] = county;
  return acc;
}, {});

