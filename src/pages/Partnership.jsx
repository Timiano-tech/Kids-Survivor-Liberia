import { useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import ProcessSteps from '../components/visuals/ProcessSteps';
import PhotoCards from '../components/visuals/PhotoCards';
import RuleList from '../components/visuals/RuleList';
import HeaderImage from '../assets/Partner_Header.jpeg';
import PreventionCampaign from '../assets/Against_drug_abuse.jpeg';
import RecoveryProgram from '../assets/Drug_Recovered.jpeg';
import YouthSkills from '../assets/Girls_Emp.png';
import WomenInclusion from '../assets/Women_in_community4.jpeg';
import SchoolAccess from '../assets/KSL_School.jpeg';
import CommunityForum from '../assets/Community_Speech3.jpeg';

const Partnership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipMeta = [
    { value: 6, label: 'Funding Areas' },
    { value: 6, label: 'Partner Types' },
    { value: 15, label: 'Counties' },
    { value: 2, label: 'National Frameworks' },
  ];

  const areas = [
    {
      title: 'Drug Abuse Prevention',
      tag: 'Area 01',
      image: PreventionCampaign,
      description: 'School and community campaigns, and youth-led advocacy.',
    },
    {
      title: 'Rehabilitation & Recovery',
      tag: 'Area 02',
      image: RecoveryProgram,
      description: 'Psychosocial support and reintegration pathways.',
    },
    {
      title: 'Youth Empowerment',
      tag: 'Area 03',
      image: YouthSkills,
      description: 'Vocational training, life skills, and entrepreneurship.',
    },
    {
      title: 'Gender & Protection',
      tag: 'Area 04',
      image: WomenInclusion,
      description: 'Adolescent girls, widows, and elderly support.',
    },
    {
      title: 'Education Access',
      tag: 'Area 05',
      image: SchoolAccess,
      description: 'Scholarships and non-formal learning centres.',
    },
    {
      title: 'Community Resilience',
      tag: 'Area 06',
      image: CommunityForum,
      description: 'Peacebuilding, crime prevention, and cohesion work.',
    },
  ];

  const partnerJourney = [
    { kicker: 'Stage 01', title: 'Conversation', description: 'We map the outcomes you want to fund and who you want to reach.' },
    { kicker: 'Stage 02', title: 'Co-Design', description: 'The intervention is mapped to KSL pillars, NADAP and YTEI targets, and a county rollout.' },
    { kicker: 'Stage 03', title: 'Agreement', description: 'Scope, reporting cadence, safeguarding duties, and disbursement are agreed.' },
    { kicker: 'Stage 04', title: 'Deliver & Report', description: 'Programmes run in the field and you receive documented impact reporting.' },
  ];

  const partnerTypes = [
    { title: 'Corporate Sponsors', note: 'CSR funding, matched giving, and employee volunteering days.' },
    { title: 'Foundations & Trusts', note: 'Multi-year grants for prevention, rehabilitation, and education.' },
    { title: 'Government & Ministries', note: 'Delivery support against national anti-drugs and youth frameworks.' },
    { title: 'Faith & Community Groups', note: 'Congregation outreach, mobilisation, and local volunteers.' },
    { title: 'NGOs & Coalitions', note: 'Joint programming and shared safeguarding standards.' },
    { title: 'Diaspora Communities', note: 'Long-distance giving directed to a named county or school.' },
  ];

  return (
    <>
      <SEO
        title="Partner with Kids Survivor Liberia — Collaboration Opportunities"
        description="Partner with Kids Survivor Liberia to support child protection, drug abuse prevention, and youth development initiatives across Liberian communities."
        canonical="/partnership"
        keywords={[
          'KSL partnerships',
          'partner with Liberia NGO',
          'corporate sponsorship Liberia',
          'NADAP partner Liberia',
          'child protection partnerships',
          'youth development sponsors',
          'CSR Liberia organizations',
          'community development partners Liberia',
        ]}
        breadcrumbs={[{ name: 'Partnership', url: '/partnership' }]}
      />

      <PageHeader
        eyebrow="Collaborate With Us"
        title="Fund work that protects children"
        description="Six programme areas, one partner network, and reporting you can audit."
        image={HeaderImage}
        meta={partnershipMeta}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Where Funding Goes"
              title="Six areas partners fund"
              description="Direct every contribution into one of these programme areas."
              className="mb-14"
            />
            <PhotoCards items={areas} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How It Works"
              title="From first call to impact report"
              className="mb-14"
            />
            <ProcessSteps steps={partnerJourney} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              eyebrow="Who We Work With"
              title="Types of partners"
              className="mb-14"
            />
            <RuleList items={partnerTypes} tone="dark" columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>
      </main>

      <CTABanner
        eyebrow="Work With Us"
        title="Join our partnership network"
        description="Partner with us to implement community-driven interventions across Liberia."
        primaryLabel="Contact Partnership Team"
        primaryTo="/contact"
        secondaryLabel="Email support@ksliberia.org"
        secondaryHref="mailto:support@ksliberia.org"
      />
    </>
  );
};

export default Partnership;
