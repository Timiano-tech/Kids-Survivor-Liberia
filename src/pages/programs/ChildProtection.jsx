import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import SectionHeading from '../../components/SectionHeading';
import RelatedContent from '../../components/RelatedContent';
import DonateCTA from '../../components/DonateCTA';
import PillarCards from '../../components/visuals/PillarCards';
import ProcessSteps from '../../components/visuals/ProcessSteps';
import StatBand from '../../components/visuals/StatBand';
import PhotoBand from '../../components/visuals/PhotoBand';
import HeaderImage from '../../assets/Students.jpeg';
import ProtectionWalk from '../../assets/Community_Speech.jpeg';
import CommitteeMeeting from '../../assets/Community Leaders.jpeg';
import SafeHaven from '../../assets/Helping Children.jpeg';
import LegalAdvocacy from '../../assets/Community_Outreach.jpeg';

const pillars = [
  {
    title: 'Community Protection Committees',
    image: CommitteeMeeting,
    description:
      'Setting up child protection committees in rural and urban communities to monitor child welfare, identify children at risk, and arrange a quick response.',
    points: ['Village and town level committees', 'Early warning referrals', 'Local chiefs and principals engaged'],
  },
  {
    title: 'Substance Abuse Prevention',
    image: ProtectionWalk,
    description:
      'Running anti-drug awareness sessions in schools and youth hubs across Montserrado, Grand Bassa, Nimba, and surrounding counties to keep children away from illegal substances.',
    points: ['School assembly sessions', 'Youth hub peer education', 'Community sensitization walks'],
  },
  {
    title: 'Safe Havens & Shelter Support',
    image: SafeHaven,
    description:
      'Providing safe space referrals, emergency food, and medical support for children affected by domestic abuse and displacement.',
    points: ['Emergency food and hygiene kits', 'Medical referrals and treatment', 'Safe space coordination'],
  },
  {
    title: 'Legal Rights & Policy Advocacy',
    image: LegalAdvocacy,
    description:
      'Advocating for enforcement of the Liberian Children’s Law, accountability for perpetrators, and reform of child justice.',
    points: ["Liberian Children’s Law enforcement", 'Child justice reform advocacy', 'Community legal sensitization'],
  },
];

const responseCycle = [
  {
    title: 'Identify',
    description: 'Community committees, teachers, and youth hubs flag children showing abuse, neglect, or exploitation risk.',
  },
  {
    title: 'Protect',
    description: 'Safe space referrals, emergency food, hygiene kits, and medical support for the child.',
  },
  {
    title: 'Support',
    description: 'Psychosocial counselling and re-enrolment in primary education.',
  },
  {
    title: 'Follow up',
    description: 'Cases are referred to traditional leaders and law enforcement so perpetrators are held accountable.',
  },
];

const results = [
  { value: 5000, suffix: '+', label: 'Children Protected', description: 'Reached through KSL child protection outreach.' },
];

const fieldPhotos = [
  { src: ProtectionWalk, caption: 'Community sensitization on child protection rights' },
  { src: CommitteeMeeting, caption: 'Meeting with community leaders and chiefs' },
  { src: SafeHaven, caption: 'Care and support for vulnerable children' },
  { src: LegalAdvocacy, caption: 'Awareness sessions in local communities' },
];

export default function ChildProtection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Child Protection in Liberia — Kids Survivor Liberia"
        description="Kids Survivor Liberia child protection programs safeguard vulnerable children from abuse, exploitation, and drug exposure through community-driven prevention and response strategies."
        canonical="/programs/child-protection"
        keywords={[
          'child protection in Liberia',
          'child welfare Liberia',
          'protect Liberian children',
          'KSL child protection',
          'Liberia NGO child safety',
          'child abuse prevention Liberia',
          'vulnerable children programs Liberia',
          'child safeguarding Liberia',
        ]}
        breadcrumbs={[
          { name: 'Programs', url: '/programs' },
          { name: 'Child Protection', url: '/programs/child-protection' },
        ]}
      />

      <PageHeader
        title="Child Protection"
        description="Protecting Liberian children from abuse, neglect, exploitation, and drug exposure through community protection committees, prevention work, and legal advocacy."
        image={HeaderImage}
      />

      <main>
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionHeading title="About this programme" />
              <div className="mt-6 space-y-5 text-body-md leading-relaxed text-slate-600">
                <p>
                  In post-conflict Liberia, many children face physical abuse, child labour, sexual exploitation, and
                  early exposure to drugs. Economic hardship and limited social safety nets push some children into
                  informal work or onto the streets. Kids Survivor Liberia (KSL) runs child protection activities in
                  communities so that children can grow up safe from harm.
                </p>
                <p>
                  Our work combines emergency support, legal advocacy, psychosocial counselling, and community
                  training. We partner with local chiefs, school principals, health workers, and county officials to
                  set up protection arrangements that communities can keep running themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What we do"
              description="Our child protection work covers four areas."
              className="mb-12"
            />
            <PillarCards pillars={pillars} columns="sm:grid-cols-2" />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How we respond"
              description="When a child at risk is identified, our team and community partners follow these steps."
              className="mb-14"
            />
            <ProcessSteps steps={responseCycle} />
          </div>
        </section>

        <section className="bg-slate-950 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading tone="dark" title="In the field" className="mb-12" />
            <PhotoBand photos={fieldPhotos} />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionHeading title="Our impact" />
              <p className="mt-6 text-body-md leading-relaxed text-slate-600">
                Through direct outreach, KSL has helped protect over 5,000 children across Liberia. This includes
                re-enrolling children who had dropped out of primary school, providing counselling to children affected
                by trauma, and holding community forums on child welfare. You can read about our work in each county
                on the{' '}
                <Link to="/counties" className="text-blue-700 hover:underline font-semibold">
                  Counties page
                </Link>
                .
              </p>
              <div className="mt-12">
                <StatBand stats={results} tone="light" divided />
              </div>
            </div>
          </div>
        </section>
      </main>

      <DonateCTA
        title="Help us protect Liberia's children"
        description="A one-time or monthly gift, or time given as a volunteer, helps KSL respond quickly when a child needs protection."
        secondaryLabel="Become a Volunteer"
        secondaryTo="/volunteer"
      />

      <RelatedContent currentId="child-protection" />
    </div>
  );
}
