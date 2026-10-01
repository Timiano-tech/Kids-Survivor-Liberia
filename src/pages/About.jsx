import { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import DonateCTA from '../components/DonateCTA';
import PhotoMosaic from '../components/visuals/PhotoMosaic';
import PhotoCards from '../components/visuals/PhotoCards';
import SplitNotes from '../components/visuals/SplitNotes';
import StatementBand from '../components/visuals/StatementBand';
import RuleList from '../components/visuals/RuleList';
import KSLCompany from '../assets/KSL Company.jpeg';
import KSL_Team from '../assets/KSL_Team.jpeg';
import Assembly from '../assets/Children on the assembly.jpeg';
import FieldMedical from '../assets/Free_Medicals5.jpeg';
import CommunitySpeech from '../assets/Community_Speech.jpeg';
import Prevention from '../assets/Say no to drugs.jpeg';
import Recovery from '../assets/Drug_Recovered.jpeg';
import Classroom from '../assets/Class Room.jpeg';
import Inclusion from '../assets/Women_in_community4.jpeg';
import CommunityOutreach from '../assets/Community_Outreach.jpeg';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutMeta = [
    { value: 12000, suffix: '+', label: 'People Reached' },
    { value: 15, label: 'Counties Covered' },
    { value: 7, label: 'Field Offices' },
    { value: 5, label: 'Programme Pillars' },
  ];

  const leadershipPhotos = [
    {
      src: KSL_Team,
      caption: 'The KSL field and leadership team',
      meta: 'Monrovia, Montserrado',
    },
    {
      src: Assembly,
      caption: 'School assemblies on drug abuse prevention',
      meta: 'Prevention',
    },
    {
      src: FieldMedical,
      caption: 'Free medical outreach for at-risk youth',
      meta: 'Health',
    },
  ];

  const pillars = [
    {
      title: 'Drug Abuse Prevention',
      tag: 'Pillar 01',
      image: Prevention,
      description: 'School and community campaigns that build refusal skills before experimentation starts.',
    },
    {
      title: 'Rehabilitation & Reintegration',
      tag: 'Pillar 02',
      image: Recovery,
      description: 'Psychosocial support, skills training, and family reintegration for people recovering from addiction.',
    },
    {
      title: 'Education & Skills',
      tag: 'Pillar 03',
      image: Classroom,
      description: 'Scholarships, non-formal learning, and vocational training for children and young people.',
    },
    {
      title: 'Gender & Social Inclusion',
      tag: 'Pillar 04',
      image: Inclusion,
      description: 'Protection and economic inclusion for adolescent girls, widows, and vulnerable elderly men.',
    },
    {
      title: 'Community & Peacebuilding',
      tag: 'Pillar 05',
      image: CommunityOutreach,
      description: 'Traditional leaders, schools, and local authorities working alongside us in every county.',
    },
  ];

  const values = [
    { title: 'Inclusion & Equity', note: 'Rights-based work with no group left out.' },
    { title: 'Dignity & Protection', note: 'Every child protected from abuse and exploitation.' },
    { title: 'Prevention First', note: 'Stop drug use before it starts, not after.' },
    { title: 'Community Led', note: 'Designed and owned locally, with local leaders.' },
    { title: 'Accountability', note: 'Independent audit, transparent reporting.' },
  ];

  return (
    <>
      <SEO
        title="About Kids Survivor Liberia — Our Mission & Vision"
        description="Learn about Kids Survivor Liberia (KSL), our mission, vision, values, and alignment with Liberia's NADAP 2025-2030 and YTEI national frameworks for child protection and youth empowerment."
        canonical="/about"
        keywords={[
          'About Kids Survivor Liberia',
          'KSL mission and vision',
          'Liberia child protection NGO',
          'child-focused non-profit Liberia',
          'registered NGO Liberia',
          'drug abuse prevention organization Liberia',
          'NADAP 2025-2030 Liberia',
          'YTEI Liberia',
          'KSL leadership Liberia',
        ]}
        breadcrumbs={[{ name: 'About', url: '/about' }]}
      />

      <PageHeader
        eyebrow="Who We Are"
        title="A Liberian organisation built to protect its youngest citizens"
        description="Kids Survivor Liberia prevents drug abuse, protects vulnerable children, and rebuilds the communities that carry them."
        image={KSLCompany}
        meta={aboutMeta}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-16 items-start mb-16">
              <SectionHeading
                eyebrow="Our Story"
                title="Prevention, protection, and a way forward"
                description="We are a national non-profit working with children, adolescents, youth, adolescent girls, widows, and vulnerable elderly men. Our programmes run in fifteen counties, alongside schools, traditional leaders, and local authorities, and every one of them is measured against the National Anti-Drugs Action Plan and the Youth Transformation & Empowerment Initiative."
              />
            </div>

            <PhotoMosaic photos={leadershipPhotos} />
          </div>
        </section>

        <StatementBand
          image={CommunitySpeech}
          eyebrow="Why We Exist"
          statement="Drug abuse, poverty, and neglect pull at the same families. We meet all three at once, in the community where they live."
          attribution="Aligned with NADAP 2025–2030 and YTEI"
        />

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Purpose & Direction"
              title="Where we are going"
              className="mb-14"
            />
            <SplitNotes
              items={[
                {
                  eyebrow: 'Our Mission',
                  title: 'Keep young Liberians free from drugs and safe from harm',
                  text: 'Prevent drug abuse, protect and rehabilitate vulnerable people, and open real routes into education and work.',
                  note: 'Child-centred, community-driven, rights-based.',
                },
                {
                  eyebrow: 'Our Vision',
                  title: 'A drug-free Liberia where nobody is left behind',
                  text: 'Children, girls, youth, widows, and elderly men living in dignity, with the education and economic opportunities to hold it.',
                  note: 'Measured against NADAP and YTEI outcomes.',
                },
              ]}
            />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Areas of Action"
              title="Five pillars, one approach"
              description="Every programme we run sits under one of these five pillars."
              className="mb-14"
            />
            <PhotoCards items={pillars} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How We Work"
              title="Five commitments we do not bend"
              className="mb-14"
            />
            <RuleList items={values} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>
      </main>

      <DonateCTA
        eyebrow="Support Our Work"
        title="Fund the next community we reach"
        description="Your support pays for prevention sessions, rehabilitation care, school places, and protection work across Liberia."
        primaryLabel="Donate Now"
        secondaryLabel="Meet the Team"
        secondaryTo="/team"
      />
    </>
  );
};

export default About;
