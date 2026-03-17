export const HEADQUARTERS = {
  address: 'City of Light Community, Barclay Avenue, 15th Street, Sinkor, Monrovia, Montserrado',
  keyFunctions: 'National program coordination, policy alignment, and strategic leadership.',
};

export const COUNTIES = [
  {
    id: 'montserrado',
    name: 'Montserrado County',
    tagline: 'Urban outreach, youth recovery, and community resilience.',
    mapImage: null,
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
    mapImage: null,
    images: [],
    office: null,
  },
  {
    id: 'bong',
    name: 'Bong County',
    tagline: 'Rural outreach and drug abuse prevention in hard‑to‑reach communities.',
    mapImage: null,
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
    mapImage: null,
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
    mapImage: null,
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
    mapImage: null,
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
    mapImage: null,
    images: [],
    office: null,
  },
  {
    id: 'grand-gedeh',
    name: 'Grand Gedeh County',
    tagline: 'Post-conflict healing, protection, and community cohesion.',
    mapImage: null,
    images: [],
    office: null,
  },
  {
    id: 'grand-kru',
    name: 'Grand Kru County',
    tagline: 'Supporting isolated communities with protection and life‑skills.',
    mapImage: null,
    images: [],
    office: null,
  },
  {
    id: 'maryland',
    name: 'Maryland County',
    tagline: "Child protection and adolescent girls' empowerment initiatives.",
    mapImage: null,
    images: [],
    office: null,
  },
  {
    id: 'rivergee',
    name: 'River Gee County',
    tagline: 'Strengthening community structures for prevention and referrals.',
    mapImage: null,
    images: [],
    office: null,
  },
  {
    id: 'rivercess',
    name: 'Rivercess County',
    tagline: 'Engaging riverine communities in prevention and livelihoods.',
    mapImage: null,
    images: [],
    office: null,
  },
  {
    id: 'sinoe',
    name: 'Sinoe County',
    tagline: 'Drug demand reduction and youth life‑skills programming.',
    mapImage: null,
    images: [],
    office: null,
  },
  {
    id: 'gbarpolu',
    name: 'Gbarpolu County',
    tagline: 'Working with mining and forest communities on prevention and care.',
    mapImage: null,
    images: [],
    office: null,
  },
  {
    id: 'bomi',
    name: 'Bomi County',
    tagline: 'Grassroots community mobilization and youth inclusion.',
    mapImage: null,
    images: [],
    office: null,
  },
];

export const COUNTY_BY_ID = COUNTIES.reduce((acc, county) => {
  acc[county.id] = county;
  return acc;
}, {});

