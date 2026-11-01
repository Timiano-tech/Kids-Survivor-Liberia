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


  const areas = [
    {
      title: 'Drug Abuse Prevention',
      image: PreventionCampaign,
      description: 'School and community campaigns, and youth-led advocacy.',
    },
    {
      title: 'Rehabilitation & Recovery',
      image: RecoveryProgram,
      description: 'Psychosocial support and reintegration pathways.',
    },
    {
      title: 'Youth Empowerment',
      image: YouthSkills,
      description: 'Vocational training, life skills, and entrepreneurship.',
    },
    {
      title: 'Gender & Protection',
      image: WomenInclusion,
      description: 'Adolescent girls, widows, and elderly support.',
    },
    {
      title: 'Education Access',
      image: SchoolAccess,
      description: 'Scholarships and non-formal learning centres.',
    },
    {
      title: 'Community Resilience',
      image: CommunityForum,
      description: 'Peacebuilding, crime prevention, and cohesion work.',
    },
  ];

  const partnerJourney = [
    { kicker: 'Step 1', title: 'Conversation', description: 'We discuss your goals and the communities you would like to support.' },
    { kicker: 'Step 2', title: 'Planning', description: 'Together we plan the project, aligned with KSL programmes and national NADAP and YTEI targets.' },
    { kicker: 'Step 3', title: 'Agreement', description: 'We agree the scope, reporting schedule, safeguarding responsibilities, and funding arrangements.' },
    { kicker: 'Step 4', title: 'Delivery and Reporting', description: 'Our teams carry out the work and send you regular progress reports.' },
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
        title="Partner With Us"
        description="We work with businesses, foundations, government, and community groups to protect and support children and young people in Liberia."
        image={HeaderImage}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Areas of Work"
              description="Partners can support any of the following programme areas."
              className="mb-14"
            />
            <PhotoCards items={areas} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How Partnerships Work"
              className="mb-14"
            />
            <ProcessSteps steps={partnerJourney} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              tone="dark"
              title="Who We Work With"
              className="mb-14"
            />
            <RuleList items={partnerTypes} tone="dark" columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>
      </main>

      <CTABanner
        title="Become a Partner"
        description="To discuss a partnership, please contact our team."
        primaryLabel="Contact Partnership Team"
        primaryTo="/contact"
        secondaryLabel="Email support@ksliberia.org"
        secondaryHref="mailto:support@ksliberia.org"
      />
    </>
  );
};

export default Partnership;
