export const COUNTIES = [
  {
    id: 'montserrado',
    name: 'Montserrado County',
    tagline: 'Urban outreach, youth recovery, and community resilience.',
    images: [], // Add image paths/URLs here, e.g., '/assets/images/montserrado-activity1.jpg'
  },
  {
    id: 'margibi',
    name: 'Margibi County',
    tagline: 'School-based prevention and family strengthening initiatives.',
    images: [],
  },
  {
    id: 'bong',
    name: 'Bong County',
    tagline: 'Rural outreach and drug abuse prevention in hard‑to‑reach communities.',
    images: [],
  },
  {
    id: 'nimba',
    name: 'Nimba County',
    tagline: 'Cross-community youth engagement and livelihood skills.',
    images: [],
  },
  {
    id: 'lofa',
    name: 'Lofa County',
    tagline: 'Community protection and resilience building for vulnerable groups.',
    images: [],
  },
  {
    id: 'grand-bassa',
    name: 'Grand Bassa County',
    tagline: 'Coastal community outreach and adolescent protection initiatives.',
    images: [],
  },
  {
    id: 'grand-cape-mount',
    name: 'Grand Cape Mount County',
    tagline: 'Border-area drug prevention and youth leadership support.',
    images: [],
  },
  {
    id: 'grand-gedeh',
    name: 'Grand Gedeh County',
    tagline: 'Post-conflict healing, protection, and community cohesion.',
    images: [],
  },
  {
    id: 'grand-kru',
    name: 'Grand Kru County',
    tagline: 'Supporting isolated communities with protection and life‑skills.',
    images: [],
  },
  {
    id: 'maryland',
    name: 'Maryland County',
    tagline: "Child protection and adolescent girls' empowerment initiatives.",
    images: [],
  },
  {
    id: 'rivergee',
    name: 'River Gee County',
    tagline: 'Strengthening community structures for prevention and referrals.',
    images: [],
  },
  {
    id: 'rivercess',
    name: 'Rivercess County',
    tagline: 'Engaging riverine communities in prevention and livelihoods.',
    images: [],
  },
  {
    id: 'sinoe',
    name: 'Sinoe County',
    tagline: 'Drug demand reduction and youth life‑skills programming.',
    images: [],
  },
  {
    id: 'gbarpolu',
    name: 'Gbarpolu County',
    tagline: 'Working with mining and forest communities on prevention and care.',
    images: [],
  },
  {
    id: 'bomi',
    name: 'Bomi County',
    tagline: 'Grassroots community mobilization and youth inclusion.',
    images: [],
  },
];

export const COUNTY_BY_ID = COUNTIES.reduce((acc, county) => {
  acc[county.id] = county;
  return acc;
}, {});

