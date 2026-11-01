import { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import DonateCTA from '../components/DonateCTA';
import PhotoMosaic from '../components/visuals/PhotoMosaic';
import PhotoCards from '../components/visuals/PhotoCards';
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
      image: Prevention,
      description: 'School and community campaigns that build refusal skills before experimentation starts.',
    },
    {
      title: 'Rehabilitation & Reintegration',
      image: Recovery,
      description: 'Psychosocial support, skills training, and family reintegration for people recovering from addiction.',
    },
    {
      title: 'Education & Skills',
      image: Classroom,
      description: 'Scholarships, non-formal learning, and vocational training for children and young people.',
    },
    {
      title: 'Gender & Social Inclusion',
      image: Inclusion,
      description: 'Protection and economic inclusion for adolescent girls, widows, and vulnerable elderly men.',
    },
    {
      title: 'Community & Peacebuilding',
      image: CommunityOutreach,
      description: 'Traditional leaders, schools, and local authorities working alongside us in every county.',
    },
  ];

  const values = [
    { title: 'Inclusion & Equity', note: 'We serve children and adults regardless of gender, age, or background.' },
    { title: 'Dignity & Protection', note: 'We treat everyone with respect and put the safety of children first.' },
    { title: 'Prevention First', note: 'We work in schools and communities to prevent drug use early.' },
    { title: 'Community Led', note: 'We plan and deliver programmes with local leaders and families.' },
    { title: 'Accountability', note: 'Our accounts are independently audited every year and we report openly on our work.' },
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
        title="About Kids Survivor Liberia"
        description="Kids Survivor Liberia is a Liberian non-profit working to prevent drug abuse, protect vulnerable children, and support families and communities."
        image={KSLCompany}
        meta={aboutMeta}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.25fr] gap-6 lg:gap-16 items-start mb-16">
              <SectionHeading title="Our Story" />
              <div className="space-y-5 text-body-lg leading-relaxed text-slate-600 lg:mt-5">
                <p>
                  Kids Survivor Liberia (KSL) is a national non-profit working with children,
                  adolescents, youth, adolescent girls, widows, and vulnerable elderly men. Our
                  programmes run in fifteen counties, alongside schools, traditional leaders, and
                  local authorities.
                </p>
                <p>
                  Our work is aligned with the National Anti-Drugs Action Plan (NADAP) and the Youth
                  Transformation &amp; Empowerment Initiative (YTEI).
                </p>
              </div>
            </div>

            <PhotoMosaic photos={leadershipPhotos} />
          </div>
        </section>

        <StatementBand
          image={CommunitySpeech}
          statement="Drug abuse, poverty, and neglect often affect the same families. We work with these families in their own communities."
        />

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Our Mission and Vision" className="mb-12" />
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div className="md:border-l md:border-slate-200 md:pl-10">
                <h3 className="text-heading-lg text-slate-900">Our Mission</h3>
                <p className="mt-4 text-body-lg leading-relaxed text-slate-600">
                  To prevent drug abuse, protect and rehabilitate vulnerable people, and help
                  children and young people in Liberia stay safe and access education and work.
                </p>
              </div>
              <div className="md:border-l md:border-slate-200 md:pl-10">
                <h3 className="text-heading-lg text-slate-900">Our Vision</h3>
                <p className="mt-4 text-body-lg leading-relaxed text-slate-600">
                  A drug-free Liberia where children, girls, youth, widows, and elderly men live in
                  dignity, with access to education and economic opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What We Do"
              description="Our programmes are organised into five areas of work."
              className="mb-14"
            />
            <PhotoCards items={pillars} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Our Values" className="mb-14" />
            <RuleList items={values} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>
      </main>

      <DonateCTA
        title="Support Our Work"
        description="Your support pays for prevention sessions, rehabilitation care, school places, and child protection work across Liberia."
        primaryLabel="Donate Now"
        secondaryLabel="Meet the Team"
        secondaryTo="/team"
      />
    </>
  );
};

export default About;
